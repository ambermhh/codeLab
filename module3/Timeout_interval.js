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

/* function repeatInterval(delay, limit){
    let counter = 1;
setInterval(function repeatThis(){
    console.log(`repeatInterval: repeated ` + counter + ' of ' + limit + ' times.');
    if(counter > limit) clearInterval(intervalTimer);
    counter++;
},delay);
}
repeatInterval(1000,10)
 */

// const delayTimer = setTimeout(printMsg, 6000, `Long Time`)
// const lessDelayTimer = setTimeout(printMsg, 3000, `less delay time`)
// const neverHappenTimer =  setTimeout(printMsg, 8000, `this will never happen`)
// const notDelayTimer = setTimeout(printMsg,0, `Dala`)

// clearTimeout(neverHappenTimer)

