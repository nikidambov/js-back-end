const listeners = {
};

const publish = (eventName, ...eventArgs) => {
    if (!listeners[eventName]) {
        return;
    }

    listeners[eventName].forEach((listener) => listener(...eventArgs));
};

const subscribe = (eventName, eventListener) => {
    if (!listeners[eventName]) {
        listeners[eventName] = [];
    }

    listeners[eventName].push(eventListener);

    return () => {
        console.log(`You have been Unsubsribe from ${eventName}`);
        //console.log("before unsub", listeners);
        listeners[eventName] = listeners[eventName].filter((listeners) => listeners !== eventListener);

        //console.log("after unsub", listeners);
    }
};

const eventBus = {
    publish,
    subscribe,
};

module.exports = eventBus;