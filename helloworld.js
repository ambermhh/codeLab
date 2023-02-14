console.log('Hello World')

function sayhello(){
    console.log('hello again')
}

sayhello()

function sum(a, b){
    let resault = a + b

    return resault;

}


console.log(sum(54,18))


sum(182,846)

const Sentiment = require('sentiment');
var sentiment = require('sentiment');
var sentiment = new sentiment()
var result = sentiment.analyze('cat are stupid');
console.dir(result);

function analyseSentence(sentence){
    var sentiment = new Sentiment();
    var result = sentiment.analyze(sentence);

    return result;
}
console.log(analyseSentence('I love chocolate but i hate that it makes me fat.'))



function test(a, b){
   let result = a - b;
    return result;
}
console.log(test(45, 30));

function example(a, b){
    let result = a / b;
    return result;
}

console.log(example(60, 30))

function math(a, b){
    let result = a * b;
    return result;
}

console.log(math(5, 9));



function helloName(){
    let name = "Amber";

    console.log("Hello, " + name + "!");
    return name;
}


helloName()