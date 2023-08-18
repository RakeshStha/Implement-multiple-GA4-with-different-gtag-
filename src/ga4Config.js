const logEvent = (eventName, params, properties = []) => {
  if (window.gtag) {
    if (properties?.length > 0) {
      properties.forEach((property) => {
        window.gtag("event", eventName, { ...params, send_to: property });
      });
    } else {
      window.gtag("event", eventName, params);
    }
  }
};

export { logEvent };
