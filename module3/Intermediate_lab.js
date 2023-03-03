// Question 1
/*         function ucFirstLetters (str){
            return str.split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');;
        }
        console.log(ucFirstLetters('los angeles') )
    // Los Angeles
 */

// Question 2
    // function truncate(str, maxLength) {
    //     if (str.length > maxLength) {
    //       str = str.substring(0, maxLength-3) + '...';
    //     }
    //     return str;
    //   }

    // console.log(truncate('This text will be truncated if it is too long', 25))
// This text will be truncat...


// Question 3
/*     const animals = ['Tiger', 'Giraffe']
    const addAn = animals.push('Lion', 'Elephant')
    console.log(animals)

    const animals = ['Tiger', 'Giraffe']
    const addAn = animals.unshift('Lion', 'Elephant')
    console.log(animals)

    const animals = ['Tiger', 'Giraffe']
    const addAn = animals.push('Lion', 'Elephant')
    animals.sort()
    console.log(animals)

    const animals = ['Tiger', 'Giraffe']
    const addAn = animals.push(`Lion`, `Elephant`)
    function replaceMiddleAnimal(newValue){
       return newValue = animals.splice(2,1,`Dog`);
    }
    replaceMiddleAnimal(animals);
    console.log(animals);

    const animals = ['Tiger', 'Giraffe'];
    const addAn = animals.push('Lion', 'Elephant');
    function findMatchingAnimals(beginsWith){
       return animals.filter(newAnimals => newAnimals.toLowerCase().startsWith(beginsWith.toLowerCase())) ;
    }
    console.log(findMatchingAnimals('T'))
 */    

// Question 4
    // function camelCase(cssProp){
    //     const camelUp =  cssProp.split('-');
    //     let camel2 ="";
    //     for(let words of camelUp){camel2 += (camel2.length == 0)? words : words.charAt(0).toUpperCase() + words.substring(1)}
    //     // const words = camelUp.map((word, index) => {
    //     //     if (index === 0 ){
    //     //         return word;
    //     //     }
    //     //     else{ return camelUp[1].charAt(0).toUpperCase() + camelUp.substring(1);}
    //     // })
    //     // return words.join("");
    //    return camel2;
    //     };
    
    // console.log(camelCase('margin-left')) // marginLeft
    // console.log(camelCase('background-image')) // backgroundImage
    // console.log(camelCase('display')) // display

// Question 5
let twentyCents = 0.20
let tenCents = 0.10
// console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`)
// 0.2 + 0.1 = 0.30000000000000004
// We can sometimes avoid this using the toFixed function to force the number of decimal
// places as below, but it’s not always useful:
// let fixedTwenty = twentyCents.toFixed(2);
// let fixedTen = tenCents.toFixed(2);
// // console.log(fixedTwenty + fixedTen) //why is this not working?
// // 5.a
// // because turn into string.
// // 5.b
// function currencyAddition(float1, float2){
    
//     wholeNum = float1 * 100;
//     wholeNums = float2 * 100;
//     return result = ( wholeNum + wholeNums) / 100;

// }
//     console.log(currencyAddition(0.2,0.1));
// 5.c
// function currencyOperation(float1, float2, operation){
//     result = 0;
//      switch(operation){
//         case  '+' :
//            result = float1 + float2;
//            break;
//         case '-' :
//            result = float1 - float2;
//            break;
//         case '/':
//            result = float1 / float2;
//            break;
//         case '*':
//            result = float1 * float2;
//            break;
//      };
//      return result;
//     }
// console.log(currencyOperation(5,9,'+'))


// Question 6

// const colours = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow']
// const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43]

// function unique (duplicatesArray) {
//     let uniqueArray = [];
//     for (let i = 0; i < duplicatesArray.length; i++){
//         if (uniqueArray.indexOf(duplicatesArray[i]) === -1){
//             uniqueArray.push(duplicatesArray[i]);
//         }
//     }
//     return uniqueArray;
// }
   

// console.log(unique(colours)) // [ 'red', 'green', 'blue', 'yellow', 'orange' ]
// console.log(unique(testScores)) // [ 55, 84, 97, 63, 32, 91, 43 ]

// const groceryList = ['Milk', 'Butter','Veggies', 'Eggs', 'Milk', 'Butter', 'Ice Cream'];
// const groceryPrice = [10,15,11,10,2,5,2,7];
// function grocery (duplicatesArrays){
//     let grocery1 = [];
//     for (let i = 0 ; i < duplicatesArrays.length ; i++){
//         if (grocery1.indexOf(duplicatesArrays[i]) === -1){
//             grocery1.push(duplicatesArrays[i]);
//         }
//     }
//     return grocery1;
// }
// console.log(grocery(groceryList))
// console.log(grocery(groceryPrice))

// Question 7 
// 7.a
const books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { id: 3, title: '1984', author: 'George Orwell', year: 1949 },
    { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
    { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
    ];

function getBookTitle (bookId){
    const matchBooks = books.find(matchBooks => matchBooks.id === bookId);
    return matchBooks ? matchBooks.title : null;   
  
}
// console.log(getBookTitle(5))

// 7.b
function getOldBooks(){
    const oldBooks = books.filter(oldBooks => oldBooks.year <= 1950)
    return oldBooks
}
// console.log(getOldBooks())
// 7.c
const addGenreBook = books.map(book => ({
    ...book,
    Genre: `Classic`,
}));

// console.log(addGenreBook);

// 7.d

function getTitles (authorInitial){
   return books
    .filter(book => book.author.startsWith(authorInitial))
    .map(book => book.title);
}
const titles = getTitles(`A`);
// console.log(titles);

//  7.e

function latestBook(){
 let latest = 0;
 books.forEach(function(book){
    if(!latest || book.year > latest.year){
        latest = book;
    }
 });
 return latest
}

// console.log(latestBook())

// Question 8

const phoneBookABC = new Map() //an empty map to begin with
phoneBookABC.set('Annabelle', '0412312343')
phoneBookABC.set('Barry', '0433221117')
phoneBookABC.set('Caroline', '0455221182')

// 8.a
const phoneBookDEF = new Map()
phoneBookDEF.set(`Drake`, `0451685495`)
phoneBookDEF.set(`Evan`, `0465198463`)
phoneBookDEF.set(`Francis`, `0418624895`)
// 8.b
const arrDEF = [...phoneBookDEF];
const arrABC = [...phoneBookABC];
// 8.c
arrABC[2][1] = `11111111`;
// 8.d
function printPhoneBook(contacts){
   for(let[name, phoneNumber] of contacts){
    console.log(`${name}: ${phoneNumber}`)
   }
}
// 8.e
const wholePhoneBook = arrABC.concat(arrDEF);
// 8.f
console.log(wholePhoneBook);


