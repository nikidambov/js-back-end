const eventBus = require("./eventBus");

eventBus.subscribe("Cat-added", () => {
    console.log("Cat has been added.");
});

const unsubscribe = eventBus.subscribe("Cat-added", (catName, age) => {
    console.log(`Cat has been added second time! Its name is ${catName} and is ${age} y/o.`);
});

eventBus.subscribe("Cat-removed", () => {
    console.log("Cat has been removed.");
});

eventBus.publish("Cat-added", "Puffy", 8);
eventBus.publish("Cat-removed");
unsubscribe();
console.log("----------------");
eventBus.publish("Cat-added", "Puffy", 8);
eventBus.publish("Cat-removed");




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
