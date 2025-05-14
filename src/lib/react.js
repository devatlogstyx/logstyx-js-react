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
    return {
        "type": "browser",
        origin: window?.location?.origin,
        os: getOSFromUserAgent(navigator?.userAgent),
        browser: getBrowserFromUserAgent(navigator?.userAgent),
        screen: `${window?.screen?.width}x${window?.screen?.height}`
    }
}
