//@ts-check

export const getOSFromUserAgent = (ua) => {
    if (/Windows NT/.test(ua)) return "Windows";
    if (/Mac OS X/.test(ua)) return "MacOS";
    if (/Linux/.test(ua)) return "Linux";
    if (/Android/.test(ua)) return "Android";
    if (/iPhone|iPad|iPod/.test(ua)) return "iOS";
    return "Unknown";
}

export const getBrowserFromUserAgent = (ua) => {
    if (/Chrome/.test(ua) && !/Edg/.test(ua)) return "Chrome";
    if (/Edg/.test(ua)) return "Edge";
    if (/Firefox/.test(ua)) return "Firefox";
    if (/Safari/.test(ua) && !/Chrome/.test(ua)) return "Safari";
    return "Unknown";
}

export const getDeviceParams = () => {
    try {
        if (typeof window === "undefined") {
            return { type: "server" };
        }

        const origin = typeof window !== "undefined" && window.location ? window.location.origin : undefined;
        const ua = typeof navigator !== "undefined" ? navigator.userAgent : "";
        const screen = typeof window !== "undefined" && window.screen ? `${window.screen.width}x${window.screen.height}` : undefined;

        return {
            type: "browser",
            origin,
            os: getOSFromUserAgent(ua),
            browser: getBrowserFromUserAgent(ua),
            screen,
        };
    } catch {
        return { type: "node" };
    }
}     
