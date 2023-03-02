function printMe(msg1, msg2, msg3) {
    console.log('printing debounced message: '+msg1+msg2+msg3)
}

function debounce(func, ms) {
    let timer;

    return function() {
        clearTimeout(timer);

        //timer = setTimeout(func, ms, ...arguments) //option 1
        //timer = setTimeout(() => func.call(this, ...arguments), ms); //option 2 using call
        timer = setTimeout(() => func.apply(this, arguments), ms);
    }
}

printMe = debounce(printMe, 1500); //create this debounce function for a)
//fire off 3 calls to printMe within 300ms - only the LAST one should print, after
//1000ms of no calls
setTimeout( printMe, 100, 'message 1');
setTimeout( printMe, 200, 'message 2');
setTimeout( printMe, 300, 'message 3', 'extras', 'more');