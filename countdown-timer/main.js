const christmasDay = "25 Dec 2021";


function countdown() {

    const christmasDate = new Date(christmasDay);
    const currentDate = new Date();

    const totalSecs = (christmasDate - currentDate) / 1000;

    const days = Math.floor(totalSecs / 3600 / 24);
    const hours = Math.floor(totalSecs / 3600) % 24;
    const mins = Math.floor(totalSecs / 60) % 60;
    const secs = Math.floor(totalSecs) % 60;
    
    document.getElementById("day").innerHTML = formatTime(days);
    document.getElementById("hour").innerHTML = formatTime(hours);
    document.getElementById("min").innerHTML = formatTime(mins);
    document.getElementById("second").innerHTML = formatTime(secs);
    

}

//display '0' before number if number is less than 10
function formatTime(time) {
    if (time < 10)
        return "0" + time;
    else
        return time;
    
}

//calling countdown function
countdown();

//count time lesser by 1 second
setInterval(countdown, 1000);
