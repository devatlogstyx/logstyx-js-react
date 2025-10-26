//@ts-check
import Trackable from "../wrapper/trackable.js";
import { getDeviceParams } from "../lib/react.js";
import useLogstyx from "logstyx-js-core"
import ErrorBoundary from "../wrapper/error.boundary.js";
import { sendFn } from "../helper/function.js";

export default (options = {}) => {
    const defaultDevice = getDeviceParams()
    const instance = useLogstyx({
        ...options,
        sendfunc: sendFn,
        device: options.device || defaultDevice,
    });

    if (options?.captureUncaught === true) {
        try {
            if (typeof window !== "undefined") {
                window.onerror = (msg, source, line, col, err) => {
                    instance.send("error", { error: msg, stack: err?.stack || null });
                };
            }
        } catch (e) {
            console.error(e)
        }
    }

    if (options?.captureUnhandledRejections === true) {
        try {
            const handler = (reason) => {
                const message = reason instanceof Error ? reason.message : String(reason);
                const stack = reason instanceof Error ? reason.stack : undefined;
                instance.send("error", { error: message, stack });
            };

            window.onunhandledrejection = (e) => handler(e.reason);
        } catch (e) {
            console.error(e)
        }
    }

    instance.Trackable = (n) => {
        return <Trackable {...n} logger={instance} />;
    };

    instance.ErrorBoundary = (n) => {
        return <ErrorBoundary {...n} logger={instance} />;
    };

    return instance;
};
