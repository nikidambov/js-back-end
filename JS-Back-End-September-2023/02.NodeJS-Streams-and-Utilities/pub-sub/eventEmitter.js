const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

eventEmitter.on("Cat-added", () => {
    console.log("Cat has been added.");
});

eventEmitter.on("Cat-added", (catName, age) => {
    console.log(`Cat has been added second time! Its name is ${catName} and is ${age} y/o.`);
});

eventEmitter.on("Cat-removed", () => {
    console.log("Cat has been removed.");
});

eventEmitter.emit("Cat-added", "Puffy", 8);
eventEmitter.emit("Cat-removed");





/*
const catActions = () => {
    console.log("Cat action has been invoked!");
}

eventBus.subscribe("Cat-added", catActions);
eventBus.subscribe("Cat-removed", catActions);
eventBus.subscribe("Cat-updated", catActions);

eventBus.publish("Cat-added");
eventBus.publish("Cat-removed");
eventBus.publish("Cat-updated");
*/
