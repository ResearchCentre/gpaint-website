const listeners = {};

export const emitEvent = (eventName, data) => {
  const eventListeners = listeners[eventName];
  if (eventListeners) {
    eventListeners.forEach((listener) => listener(data));
  }
};

export const subscribeToEvent = (eventName, listener) => {
  if (!listeners[eventName]) {
    listeners[eventName] = [];
  }
  listeners[eventName].push(listener);
};

export const unsubscribeFromEvent = (eventName, listener) => {
  const eventListeners = listeners[eventName];
  if (eventListeners) {
    const index = eventListeners.indexOf(listener);
    if (index !== -1) {
      eventListeners.splice(index, 1);
    }
  }
};
