// /* "" + 1 + 0  //string at the beginning 
// "" - 1 + 0  //string at the beginning
// true + false //true is 1, false is 0, 1+0=1
// !true //false ~
// 6 / "3" //2~
// "2" * "3" //6~
// 4 + 5 + "px" //9px~
// "$" + 4 + 5 //$45~
// "4" - 2 //2~
// " -9 " + 5 // -9 5~
// " -9 " - 5 //-14~
// null + 1 //1~
// undefined + 1 //undefined x  (NaN)
// undefined == null //true
// undefined === null //false
// " \t \n" - 2 //

// console.log(" \t \n" - 2)

//  */

// if (0) console.log('#1 zero is true')
// if ("0") console.log('#2 zero is true')
// if (null) console.log('null is true')
// if (-1) console.log('negative is true')
// if (1) console.log('positive is true')


// let a = 10, b = 3;
// let result = `${a} + ${b} is `;
// if (a + b < 10 ? true:false) {
// result += 'less than 10';
// } else {
// result += 'greater than 10';}

// console.log(result)




// getGreeting =()=> {
//     return "Hello " +   "!"
// }

// console.log(getGreeting())

// age = 30
// if (age <= 14){
//     console.log("You are not eligble to ride")
// }
// if (age >= 14 && age <=18){
//     console.log("The tictket is $7 ")
// }
// if (age >= 19 && age<= 65){
//     console.log("The ticket is $15")
// }
// else {
//     console.log("Free ride")
// }



// function getBmi(height, weight){

//    let bmi = weight / (height * height);

   
//     if (bmi >= 35){
//         console.log("Your BMI is " + bmi + ",you are obese.");
//     }
//     else if(bmi >= 30){
//         console.log("Your BMI is " + bmi + ", you are slightly overweight.");
//     }
//     else if (bmi >= 25){
//         console.log("Your BMI is " + bmi + ",you have a normal weight.");
//     }
//     else{
//         console.log("Your BMI is " + bmi + ", you are underweight.");   
//     }  
//     return getBmi;
// }

// console.log(getBmi(1.65, 45))

//create your own object with multiple properties
//make sure some are multiple values
//add some functions
//write a function to print out all names/values using for ... in

// const filmHer = {
//     title: "Her",
//     year:2013,
//     directedBy: "Spike Jonze",
//     cast: ["Joaquin Phoenix", "Scarlett Johansson", "Amy Adams"],
//     plot: 'A sensitive and soulful man earns a living by writing personal letters for other people. Left heartbroken after his marriage ends, Theodore (Joaquin Phoenix) becomes fascinated with a new operating system which reportedly develops into an intuitive and unique entity in its own right. He starts the program and meets "Samantha" (Scarlett Johansson), whose bright voice reveals a sensitive, playful personality. Though "friends" initially, the relationship soon deepens into love.'

// }

// function printHer(object){

//     for(let objProp in object){
//         console.log(`name: ${objProp}, value: ${object[objProp]}`)
//     }
    
// }
// printHer(filmHer)

/* const westley = {
    name: 'Westley',
    numFingers: 5
    }
    const rugen = {
    name: 'Count Rugen',
    numFingers: 6
    }
    const inigo = {
    firstName: 'Inigo',
    lastName: 'Montoya',
    greeting(person) {
    let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}. `;
    console.log(greeting + this.getCatchPhrase(person));
    },
   
    getCatchPhrase:(person)=> 
       (person.numFingers === 6)?'Prepare to die':'nice to meet you'
        
        
        }
        
        
    inigo.greeting(westley)
    inigo.greeting(rugen) */



    // const basketballGame = {
    //     score: 0,
    //     freeThrow() {
    //     this.score++;
    //     return this;
    //     },
    //     basket() {
    //     this.score += 2;
    //     return this;
    //     },
    //     threePointer() {
    //     this.score += 3;
    //     return this;
    //     },
    //     halfTime() {
    //     console.log('Halftime score is '+this.score);
    //     return this;
    //     }
    //     }
    //     //modify each of the above object methods to enable function chaining as below:
    //     basketballGame.basket().freeThrow().freeThrow().basket().threePointer().halfTime();


    // const sydney = {
    //     name: 'Sydney',
    //     population: 5_121_000,
    //     state: 'NSW',
    //     founded: '26 January 1788',
    //     timezone: 'Australia/Sydney'
    //     }

    //    function printSydney(object){
        
    //     for(let cityInfo in object){
    //         console.log(`name:${cityInfo}, value:${object[cityInfo]}`)

    //    }
    // }

    // printSydney(sydney)

    // const artist ={
    //     name:`Paul Yore`,
    //     year_born:1988,
    //     location:`Australia`,
    //     movement:`Textile arts, installation art, queer art`

    // }

    // function printArtist(object){

    //     for(let artistInfo in object){
    //         console.log(`name:${artistInfo}, value:${object[artistInfo]}`)
    //     }
    // }

    // printArtist(artist)


    // let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
    // let moreSports = [...teamSports, 'Basketball', 'Golf'];
    // let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
    // let moreSports = ['Basketball', 'Golf', ...teamSports];



    //     console.log(teamSports)
    //     console.log(moreSports)
  
    // let dog1 = 'Bingo';
    // let dog2 = dog1;
    //     dog2 = 'mango';
   

    // console.log(dog1, dog2);


    // let cat1 = { name: 'Fluffy', breed: 'Siberian' };
    // let cat2 = cat1;

    // cat2.name = 'crumpet';

    // console.log(cat1);

    // function Person(name, age) {
    //     this.name = name;
    //     this.age = age;
    //     this.human = true;
    //     return this;
    //     }

    //     let person1 = new Person('Amber', 18);
    //     let person2 = new Person('Bella', 5);
    //     console.log(person1, person2)

    // class Person{
    //     constructor(name, age){
    //         this.name = name;
    //         this.age = age;

    //     }

    // }
        // let person1 = new Person('Mary', 40);
        // let person2 = new Person('Jack', 60);
        // console.log(person1, person2)

    //     function ucFirstLetters (){
                  
    //     }

    // console.log(ucFirstLetters('los angeles') )

    //Los Angeles



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



    // let longStr = "This is loooooooooooooooooooooooong string.";
    // let shortStr = "Short";

    

    // function truncate(fullString, maxChars) {
    //    if (fullString.length > maxChars)
    //    return fullString
    // }

    // console.log(truncate(longStr))


    // const user = {
    //     name:"Amber",
    //     location:"Sydney",
    //     age: 75,
    //     contact: 45139547
    // }


