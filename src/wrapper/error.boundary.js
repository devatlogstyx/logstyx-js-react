//@ts-check
import React from "react";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.logger = props.logger;
        this.state = { hasError: false, errorInfo: null };

    }

    componentDidCatch(error, info) {
        this.logger.error({
            type: 'reactErrorBoundary',
            error: error?.message || String(error),
            stack: error?.stack,
            componentStack: info?.componentStack,
        });
        this.setState({ hasError: true, errorInfo: info });

    }

    render() {
        if (this.state.hasError) {
            // Render the custom fallback UI if provided by the user
            // Otherwise, fall back to a default error message
            const { fallbackUI: FallbackUI } = this.props;

            // If the user provided a custom fallbackUI, pass the error info to it
            if (FallbackUI) {
                return <FallbackUI error={this.state.error} errorInfo={this.state.errorInfo} />;
            }
            
            return <h1>{JSON.stringify(this.state.errorInfo, null, 2)}</h1>;
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
