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