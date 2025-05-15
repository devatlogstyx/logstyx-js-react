# logstyx-js-react

logstyx-js-react is a JavaScript SDK designed for integrating with React applications. It provides a convenient way to manage error tracking and logging functionalities in your React projects leveraging the LogStyx platform.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [License](#license)

## Installation

To install the package, you can use npm:

```bash
npm install github:devatlogstyx/logstyx-js-react#release
```

Make sure to also have React installed:

```bash
npm install react
```

## Usage

To use the SDK, import it in your component and initialize it with your options.

```javascript
import useLogstyx from 'logstyx-js-react';

const logger = useLogstyx({ 
  projectId: "your_logstyx_project_id",  // Your LogStyx project ID
  captureUncaught: true, 
  captureUnhandledRejections: true 
});

const { ErrorBoundary, Trackable} = logger

// Custom fallback UI for ErrorBoundary (Optional)
function CustomFallbackUI({ error, errorInfo }) {
  return (
    <div>
      <h2>Oops! An error occurred.</h2>
      <p>{error?.message || "An unknown error occurred"}</p>
      <details>
        <summary>Click for details</summary>
        <pre>{errorInfo?.componentStack}</pre>
      </details>
    </div>
  );
}

// Use ErrorBoundary to catch errors in a component tree
const App = () => (
  <ErrorBoundary logger={logger} fallbackUI={CustomFallbackUI}>
    <SomeComponent />
  </ErrorBoundary>
);

// Use Trackable anywhere in your code to track events
<Trackable event="click" context={{userId:"123"}} data={{action:"subscribe"}}>
  <button>subscribe now!</button>
</Trackable>


// You can also dorectly send an info log
logger.info({ message: "This is an info log!" });

// a warning log
logger.warning({ message: "This is a warning log!" });

// an error log
logger.error({ message: "This is an error log!" });

// a error log
logger.critical({ message: "This is an critical log!" });


// a custom level log
logger.send("custom",{ message: "This is an error log!" });

```

### Initialize with Options
- `projectId`: The LogStyx project ID associated with your project.
- `captureUncaught`: Capture uncaught errors globally.
- `captureUnhandledRejections`: Capture unhandled promise rejections.

## Contribution

If you'd like to contribute to this project, feel free to fork the repository and make a pull request. Make sure to adhere to the code style and structure.

## License

This project is licensed under the ISC License. See the [LICENSE](LICENSE) file for details.