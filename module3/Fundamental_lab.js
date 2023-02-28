// Question 1
/* "" + 1 + 0  //string at the beginning 
"" - 1 + 0  //string at the beginning
true + false //true is 1, false is 0, 1+0=1
!true //false ~
6 / "3" //2~
"2" * "3" //6~
4 + 5 + "px" //9px~
"$" + 4 + 5 //$45~
"4" - 2 //2~
" -9 " + 5 // -9 5~
" -9 " - 5 //-14~
null + 1 //1~
undefined + 1 //undefined x  (NaN)
undefined == null //true
undefined === null //false
" \t \n" - 2 //
console.log(" \t \n" - 2)
*/



// Question 3  
/* if (0) console.log('#1 zero is true')
if ("0") console.log('#2 zero is true')
if (null) console.log('null is true')
if (-1) console.log('negative is true')
if (1) console.log('positive is true')
*/


//  Question 4
/* let a = 10, b = 3;
let result = `${a} + ${b} is `;
if (a + b < 10 ? true:false) {
    result += 'less than 10';
} else {
    result += 'greater than 10';}
    console.log(result)
    */


//  Question 5   
/* getGreeting =()=> {
    return "Hello " +   "!"
}
console.log(getGreeting())
 */

// Question 6
/*     const westley = {
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
    inigo.greeting(rugen) 
 */
// Question 7
/* const basketballGame = {
    score: 0,
    freeThrow() {
    this.score++;
    return this;
    },
    basket() {
    this.score += 2;
    return this;
    },
    threePointer() {
    this.score += 3;
    return this;
    },
    halfTime() {
    console.log('Halftime score is '+this.score);
    return this;
    }
    }
 
     //modify each of the above object methods to enable function chaining as below:
     basketballGame.basket().freeThrow().freeThrow().basket().threePointer().halfTime();
     */ 

// Question 8
    /*     const sydney = {
        name: 'Sydney',
        population: 5_121_000,
        state: 'NSW',
        founded: '26 January 1788',
        timezone: 'Australia/Sydney'
        }
       function printSydney(object){
        for(let cityInfo in object){
            console.log(`name:${cityInfo}, value:${object[cityInfo]}`)
       }
    }
    printSydney(sydney)
    */

/*     const artist ={
        name:`Paul Yore`,
        year_born:1988,
        location:`Australia`,
        movement:`Textile arts, installation art, queer art`
    }
    function printArtist(object){
        for(let artistInfo in object){
            console.log(`name:${artistInfo}, value:${object[artistInfo]}`)
        }
    }
    printArtist(artist)
 */
// Question 9
/*     let dog1 = 'Bingo';
    let dog2 = dog1;
        dog2 = 'mango';
    console.log(dog1, dog2);
 */

/*     let cat1 = { name: 'Fluffy', breed: 'Siberian' };
    let cat2 = cat1;
    cat2.name = 'crumpet';
    console.log(cat1);
 */
//  Question 10
/*     function Person(name, age) {
        this.name = name;
        this.age = age;
        this.human = true;
        return this;
        }
        let person1 = new Person('Amber', 18);
        let person2 = new Person('Bella', 5);
        console.log(person1, person2)
 */

/*     class Person{
        constructor(name, age){
            this.name = name;
            this.age = age;
        }
    }
        let person1 = new Person('Mary', 40);
        let person2 = new Person('Jack', 60);
        console.log(person1, person2)
 */


