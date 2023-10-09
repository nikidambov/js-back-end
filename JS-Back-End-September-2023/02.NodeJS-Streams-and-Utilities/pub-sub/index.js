const eventBus = require("./eventBus");

eventBus.subscribe("Cat-added", () => {
    console.log("Cat has been added.");
});

eventBus.subscribe("Cat-added", () => {
    console.log("Cat has been added second time!");
});

eventBus.subscribe("Cat-updated", () => {
    console.log("Cat has been added.");
});

eventBus.publish("Cat-added");


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
