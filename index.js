function getCurrentTime(){
    let date = new Date();
    let seconds = date.getSeconds();
    let minutes = date.getMinutes();
    let hour = date.getHours();
    let time = hour + ':' + minutes + ':' + seconds;
    return time;
}

function printClock(){
    document.getElementById('time').innerHTML = getCurrentTime();
}


// function changeContent(){
//     let time = document.getElementById('time');
//     time.innerHTML = 'Button was clicked';
// }

setInterval(printClock, 1000);
