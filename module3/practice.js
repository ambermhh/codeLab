
//create your own object with multiple properties
//make sure some are multiple values
//add some functions
//write a function to print out all names/values using for ... in

/* const filmHer = {
    title: "Her",
    year:2013,
    directedBy: "Spike Jonze",
    cast: ["Joaquin Phoenix", "Scarlett Johansson", "Amy Adams"],
    plot: 'A sensitive and soulful man earns a living by writing personal letters for other people. Left heartbroken after his marriage ends, Theodore (Joaquin Phoenix) becomes fascinated with a new operating system which reportedly develops into an intuitive and unique entity in its own right. He starts the program and meets "Samantha" (Scarlett Johansson), whose bright voice reveals a sensitive, playful personality. Though "friends" initially, the relationship soon deepens into love.'
}
function printHer(object){
    for(let objProp in object){
        console.log(`name: ${objProp}, value: ${object[objProp]}`)
    }
}
printHer(filmHer)
 */


/*  let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
    let moreSports = [...teamSports, 'Basketball', 'Golf'];
    let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
    let moreSports = ['Basketball', 'Golf', ...teamSports];
        console.log(teamSports)
        console.log(moreSports)
 */  



    // const product2 = {
    //     name: 'Average Product',
    //     category: 'Useful Things',
    //     price: 15.00,
    //     discount_percent: 15,
    //     gst_percent: 10,
    //     //defines how this object is treated as a number
    //     valueOf() {
    //         //take the discount and gst into account
    //         return this.price - (this.price * (this.discount_percent/100)) + (this.price * (this.gst_percent/100))
    //     },
    //     //defines how this object is represented as a string
    //     toString() {
    //         return `${this.name} (${this.category})`
    //     }    
    // }


// const wine = {
//     name: 'Chardonnay',
//     category: 'White wine',
//     ABV: '12%',
//     price:25,
//     wineByGlass: 13, 
//     discount_per_case: 10,

//     valueof(){
//         return this.price = (this.price * (this.discount_per_case / 100)) 
//     },

//     toString(){
//         return `${this.name} (${this.category})`
//     }
// }
//     let wine_qt = 3;
//     let wineByGlass_qt = 2;

//     console.log(`${wine} with quantity ${wine_qt}, cost ${price}`)


// const people = [
//     {firstName: 'Wendy', lastName: 'Darton', age: 52, location: 'QLD'},
//     {firstName: 'Steven', lastName: 'Williams', age: 41, location: 'NSW'},
//     {firstName: 'Phillip', lastName: 'Robertson', age: 38, location: 'VIC'},
//     {firstName: 'Connor', lastName: 'Edmonds', age: 24, location: 'NZ'},
//     {firstName: 'Sheila', lastName: 'Horne', age: 37, location: 'QLD'},]

    // const user = {
    //     name:"Amber",
    //     location:"Sydney",
    //     age: 75,
    //     contact: 45139547
    // }

//     function printWeather() {
//         // let currentTemp = 28; //degrees celcius
//         // let maxTemp = 33;
//         // let windSpeed = 5; //km/h
//         // let forecast = 'Mostly sunny';
//         let [currentTemp, maxTemp, windSpeed, forecast] = [28,33,5,`Mostly Sunny`];
//         console.log(`Today's weather forecast: ${forecast}, with a wind speed of ${windSpeed}km/h. The current temperature is ${currentTemp} with a max of ${maxTemp} degrees.`)
//     }
// printWeather()

//     const foods = new Set(['pizza', 'chips', 'pasta', 'seafood', 'salad', 'noodles', 'vegetables']);
//     const [firstFood, , thirdFood, , fifthFood, , seventhFood] = foods;
//     console.log(firstFood, thirdFood, fifthFood, seventhFood)
//     // try and unpack it to get every second food in separate variables - first, third, fifth etc
//     const plantNames = new Map([
//         ['Blueberry', 'Vaccinium'],
//         ['Daylily', 'Hemerocallis'],
//         ['Foxglove', 'Digitalis'],
//         ['Lavender', 'Lavandula']
//     ])
//     for (let [commonName, latinName] of plantNames.entries())


// let newUser = {

//     get name() {
//       return this._name;
//     },
  
//     set name(value) {
//       if (value.length < 4) {
//         console.log("Name is too short, need at least 4 characters");
//         return;
//       }
//       this._name = value;
//     }
// };
// add an age property via getters and setters that can't be less than 0 or more than 120

// let userAge = {

//     get age(){
//         return this._age();
//     },

//     set age(value){
//         if (value < 0){
//             console.log(`lucky you`);
//             return;
//         }
//         if (value > 120){
//             console.log(`Good on you`)
//             return;
//         }
//         this._age = value;
//     }
// }
// userAge.age = 25;
// userAge.age = 0;
// userAge.age = 120;
// console.log(userAge.age)


// function slow(x){

//     return x;
// }



// let animal = {
//     eats: true,
//     sleeps: true,
//     legs: 4,
//     mammal: true
// };
// //create 2 new types of animal based on the animal prototype - one using Object.create (like rabbit), and one using an F.prototype (like cat)
// //give them some custom properties
// //override one of the prototype properties

// let horse = Object.create(animal,{
//     jumps:{
//         value:true,
//         enumerable:true 
//     }
// })
// console.log(horse.jumps)
// console.log(Object.keys(horse))
// for (let prop in horse) console.log(`${prop} is ${horse[prop]}`)

// function Penguin (name){
//     this.name = name;
//     this.swim = true;
// }
// // console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(animal)))
// Penguin.prototype = animal;
// animal.legs = 2;
// const penguin = new Penguin(`Gigi`);
// console.log(`Penguin eats? ` + penguin.eats);

// for (let prop in penguin) console.log(`${prop} is ${penguin[prop]}`);

class Animal {

    constructor(name) {
        this.speed = 0;
        this.name = name;
        this.type = 'animal'
    }
    
    run(speed) {
        this.speed = speed;
        console.log(`${this.name} runs with speed ${this.speed}.`);
    }

    stop() {
        this.speed = 0;
        console.log(`${this.name} stands still.`);
    }
}
// create your own specific type of animal that inherits from the above Animal class
// give it some custom properties and/or functions
// make sure to use 'extends' and 'super'

// class Cat extends Animal {
//     constructor(name, legLength) 
//     {
//         super(name)
//         this.legLength = legLength
        
//     }
//     legLengthPrint()
//     {
//         console.log(`${this.name} has really short legs -- ${this.legLength}`)
//     }
//     hide() {
//         console.log(`${this.name} hides!`);
//     }
//     stop()
//     {
//         super.stop();//call parent stop
//         this.hide();// and then hide
//     }
    
// }
// const cat = new Cat ('Crumpet', '5cm')
// cat.legLengthPrint()
// cat.run(5)
// cat.hide()
// cat.stop()

//write a function checkDate, similar to above, that throws an error if the date is parsed as invalid and implements catch/finally

// function checkDate(date){

//     try{
//         const testDate = new Date(date);
//         if(testDate == `Invalid Date`){
//             throw new SyntaxError(`This is not  valid.`); //we can throw our own custom errors
//         }
//         return true;
//     }
//     catch(err){
//         if (err instanceof SyntaxError){ //and then catch them and do specific things bsed on type
//             console.log(err.message);
//         }else{
//             throw err; //rethrow other non-syntax errors
//         }
//     }
//     finally{
//         console.log(`at the end`)
//     }
//     return false;
// }
// console.log(checkDate(`this is not a day`)) //Invalid Date
// console.log(checkDate(`1990-05-06`)) //Invalid Date
// console.log(checkDate(`1987-04-14`)) //Invalid Date

// // console.log(testDate == 'Invalid Date')


function produceSong(resolve, reject) 
{
    const artists = ['Taylor Swift', 'Beyonce', 'Drake', 'Ed Sheeran', 'Rihanna', 'The Weeknd', 'Harry Styles']
    const randomArtist = Math.floor(Math.random() * artists.length) //random number corresponding to one of the above artists

    const songs = ['Unstoppable', 'Numb Little Bug', 'About Damn Time', 'Music For a Sushi Restaurant', 'Anti-Hero', 'Glimpse of Us']
    const randomSong = Math.floor(Math.random() * songs.length) //random number corresponding to one of the above songs

    const randomOutcome = Math.round(Math.random()) //returns either 0 or 1 randomly for failure (0) or success (1)

    let successResult = artists[randomArtist] + ' has just released their newest song called ' + songs[randomSong]
    let failResult = artists[randomArtist] + ' has no new songs'
    
    setTimeout(() => randomOutcome ? resolve(successResult) : reject(failResult), 1000)

    //a longhand version of the above setTimeout, without arrow functions or conditional statements:
    //setTimeout(function() {
    //    if (randomOutcome == 1) resolve(successResult) //calls the resolve callback to indicate successful promise resolution, native to promise producer functions
    //    else reject(failResult) //calls the reject callback to indicate failed promise resolution, native to promise producer functions
    //}, 1000)
}
let songPromise = new Promise(produceSong)

songPromise.then(
    successMsg => console.log(`Success #1: ${successMsg}`),
    failMsg =>  console.log(`Failure #2: Sorry fans ${failMsg}`)
)

songPromise.then( //if you only want to do something in case of error there are two options
    null,
    failMsg => console.log(`Failure #2: Bear with me ${failMsg}`)
)

songPromise //this is more common way 
    .then(successMsg => console.log(`Success #1: ${successMsg}`))
    .catch(failMsg => console.log(`Failure #2: Patience Patience Patience ${failMsg}`))
    .finally(() => console.log(` Song will release SOON!`))

    //this are 3 ways of doing it.  See above

    //first run these commands :
// 1. npm init (to initialise this script with the npm)
// 2. npm install node-fetch (to install the browser function 'fetch' for node.js)
// 3. add "type": "module", to package.json
import fetch from 'node-fetch'

fetch('https://jsonplaceholder.typicode.com/posts/10') //sample public JSON API for use in testing
    .then(response => response.json()) //this gets the entire HTTP response, so we use the .json() function which also returns a promise
    .then(json => console.log(`Post #10: ${json.title}`)) //this promise includes the json returned from the fetched URL if successful
    .catch(error => console.error(`Caught error: ${error}`)) //can optionally include this to show any errors
    .finally(() => console.log('done fetching')) //can optionally include this after all fetching done
// try and get both fetch.then and await fetch type syntaxes working
// create a function similar to fetchPostTitle that grabs the body of a particular post

let post2 = await fetch ('https://jsonplaceholder.typicode.com/posts/2')
let post2Json = await post2.json()
console.log(`Post #2: ${JSON.stringify(post2Json)}`)

async function fetchPostTitle(postedId){
    let post = await fetch(`https://jsonplaceholder.typicode.com/posts/${postedId}`)
    let posJson = await post.json()
    return posJson.title

}

let post10Title = await fetchPostTitle(10)