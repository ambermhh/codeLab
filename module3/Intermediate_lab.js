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
    function camelCase(cssProp){
        const camelUp =  cssProp.split('-');
        const words = camelUp.map((word, index) => {
            if (index === 0 ){
                return word;
            }
            else{ return camelUp[1].charAt(0).toUpperCase() + camelUp.slice(1);}
        })
        return words.join("");
       
        };
    
    console.log(camelCase('margin-left')) // marginLeft
    console.log(camelCase('background-image')) // backgroundImage
    console.log(camelCase('display')) // display
    
    