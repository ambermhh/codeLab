// function start (){
//     console.log(`Started preparing Pizza`);
// }

// const makeBase = function(){
//     console.log(`Pizza base is prepared.`);
// }

// const addCheese =() => {
//     console.log(`Cheese is added.`)
// }

// const addTopping = function(){
//     console.log(`Toppings are added.`);
// }

// const oven = () => {
//     console.log(`Pizza is cooked.`);
// }

// const finished = () => {
//     console.log(`Pizza is ready.`);
// }

// start();
// makeBase();
// addCheese();
// addTopping();
// oven();
// finished();


// function start() {
//     console.log('Started preparing Pizza'); 
//     setTimeout(makeBase, 100, addCheese, addToppings, cook, finish);
// }

// const makeBase = function(...actions) {
//     console.log('Pizza Base is prepared');
//     setTimeout(actions.shift(), 500, ...actions)
// }

// const addCheese = (...actions) => {
//     console.log('Cheese is added on Pizza');
//     setTimeout(actions.shift(), 200, ...actions)
// }

// function addToppings(...actions) {
//     console.log('Toppings are added on Pizza')
//     setTimeout(actions.shift(), 300, ...actions)
// }

// const cook = function(...actions) {
//     console.log('Pizza is cooked')
//     setTimeout(actions.shift(), 800, ...actions)
// }

// const finish = (...actions) => {
//     console.log('Pizza is ready')
// }

// start();


