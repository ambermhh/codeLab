// Question 1 
// 1.a & 1.b 
// function makeCounter(startFrom) {
//     let currentCount = startFrom;
//     return function() {
//     currentCount++;
//     console.log(currentCount)
//     return currentCount;
//     };
//     }
    // let counter1 = makeCounter(100);
    // counter1(); // 1
    // counter1(); // 2
    // let counter2 = makeCounter(5);
    // counter2();
    // counter2();
// 1.c
// function makeCounter(startFrom, incrementBy) {
//     let currentCount = startFrom;
//     return function() {
//     currentCount += incrementBy;
//     console.log(currentCount)
//     return currentCount;
//     };
//     }
//     let counter1 = makeCounter(1,5);
//     counter1(); // 1
//     counter1(); // 2
//     let counter2 = makeCounter(10,3);
//     counter2();
//     counter2();
// Question 2
// function delayMsg(msg)
// {
// console.log(`This message will be printed after a delay: ${msg}`)
// }
// let first = setTimeout(delayMsg, 100, '#1: Delayed by 100ms');
// setTimeout(delayMsg, 20, '#2: Delayed by 20ms');
// setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
// delayMsg('#4: Not delayed at all')
// // 2.a
// //4 => 3 => 2 => 1 set the time to delay printing 
// // 2.b
// let delayMsga = msg => console.log(`This message will be printed after a delay: ${msg}`)
// // 2.c
// let fifth = setTimeout(delayMsga, 10000, `#5: Delayed by 10s`)
// // 2.d
// clearTimeout(first);

// Question 3
// function printMe(msg1, msg2, msg3) {
//     console.log('printing debounced message: '+msg1+msg2+msg3)
// }

// function debounce(func, ms) {
//     let timer;

//     return function() {
//         clearTimeout(timer);

//         //timer = setTimeout(func, ms, ...arguments) //option 1
//         //timer = setTimeout(() => func.call(this, ...arguments), ms); //option 2 using call
//         timer = setTimeout(() => func.apply(this, arguments), ms);
//     }
// }

// printMe = debounce(printMe, 1500); //create this debounce function for a)
// //fire off 3 calls to printMe within 300ms - only the LAST one should print, after
// //1000ms of no calls
// setTimeout( printMe, 100, 'message 1');
// setTimeout( printMe, 200, 'message 2');
// setTimeout( printMe, 300, 'message 3', 'extras', 'more');

// function test(msg1 ,msg2){
//     console.log(msg1 + msg2)
// }

// test = debounce(test, 1000);

// setTimeout(test, 100, `test1`);
// setTimeout(test, 200, `test2`);
// setTimeout(test, 300, `test3`, `more`);

// Question 4
// 4.a
// function printFibonacci(){
//     let a = 0;
//     let b = 1;
//     setInterval(() => {
//         const c = a + b;
//         console.log(c);
//         a = b;
//         b = c;
//     },1000);
// }
// // printFibonacci()
// // 4.b
// const printFibonacciTimeouts = () =>{
//     let a = 0;
//     let b = 1;
//     setTimeout(() =>{
//         const c = a + b;
//          console.log(c);
//          a = b;
//          b = c;
//     },2000)
// }
// printFibonacciTimeouts()
// 4.c
// function printFibonacci(limit){
//     let a = 0;
//     let b = 1;
//     let count = 0;
//     const timeInterval =  setInterval(() => {
//         const c = a + b;
//         console.log(c);
//         a = b;
//         b = c;
//         count++;
//         if(count >= limit){
//             clearInterval(timeInterval);
//         }
        
//     },1000);
// }
// printFibonacci(5);
// Question 5
let car = {
    make: "Porsche",
    model: '911',
    year: 1964,
    description() {
        console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
}
};
// car.description(); //works
// // 5.a
// setTimeout(() => car.description(), 200); //fails
// 5.b
let newCar = {...car, year:1995};
console.log(newCar);

