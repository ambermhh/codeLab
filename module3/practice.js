/* age = 30
if (age <= 14){
    console.log("You are not eligble to ride")
}
if (age >= 14 && age <=18){
    console.log("The tictket is $7 ")
}
if (age >= 19 && age<= 65){
    console.log("The ticket is $15")
}
else {
    console.log("Free ride")
}
 */

/* function getBmi(height, weight){
   let bmi = weight / (height * height);
    if (bmi >= 35){
        console.log("Your BMI is " + bmi + ",you are obese.");
    }
    else if(bmi >= 30){
        console.log("Your BMI is " + bmi + ", you are slightly overweight.");
    }
    else if (bmi >= 25){
        console.log("Your BMI is " + bmi + ",you have a normal weight.");
    }
    else{
        console.log("Your BMI is " + bmi + ", you are underweight.");   
    }  
    return getBmi;
}
console.log(getBmi(1.65, 45))
 */

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

// // Delay Function(Timeout)
// function printMsg(msg){
//     console.log(`The following message was supplied to this function: ${msg}`)
// }
// // Delay Function for more messages(Timeout)
// function printMsgs(...msgs){
//     console.log(`The following messages were supplied to this function: ${msgs.join(',')}`)
// }
// // Delay Function (interval):will print interval function every x time you set up 
// const  interval = setInterval(printMsg, 2*1000, `interval function`)
// setTimeout(() => clearInterval(interval), 20*1000)

// // Nested Time out + Nested Interval
// function repeatTimeout(delay, limit){
//     let counter = 1;
//     setTimeout(function repeatThis(current){
//         console.log('repeatTimeout: repeated ' + current + 'of ' + limit + 'times.')
//         if(current < limit) setTimeout(repeatThis, delay, current)
//     })
//     counter++;
// }
// repeatTimeout(1000,10)

function repeatInterval(delay, limit){
    let counter = 1;
setInterval(function repeatThis(){
    console.log(`repeatInterval: repeated ` + counter + ' of ' + limit + ' times.');
    if(counter > limit) clearInterval(intervalTimer);
    counter++;
},delay);
}
repeatInterval(1000,10)


// const delayTimer = setTimeout(printMsg, 6000, `Long Time`)
// const lessDelayTimer = setTimeout(printMsg, 3000, `less delay time`)
// const neverHappenTimer =  setTimeout(printMsg, 8000, `this will never happen`)
// const notDelayTimer = setTimeout(printMsg,0, `Dala`)

// clearTimeout(neverHappenTimer)


