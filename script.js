let timeWrap = document.getElementById("time");
let day = document.getElementById("day");

function time() {
    let date = new Date();
    //  let hour = date.getUTCHours();
    // let mins = date.getUTCMinutes();
    // let secs = date.getUTCSeconds();
    //let milliSecs = date.getUTCMilliseconds();
    //let timeUTC = date.toISOString().substr(11, 8);

    let timeUTC = date.getTime();

    // hour < 10 ? hour = "0" + hour : hour = hour;

    // mins < 10 ? mins = "0" + mins : mins = mins;

    // secs < 10 ? secs = "0" + secs : secs = secs;

    timeWrap.innerText = timeUTC.toString();

    //timeUTCElement.innerText = timeUTC + " (UTC Time)";

    switch (date.getDay()) {
        case 0:
            day.innerText = "Sunday";
            break;
        case 1:
            day.innerText = "Monday";
            break;
        case 2:
            day.innerText = "Tuesday";
            break;
        case 3:
            day.innerText = "Wednesday";
            break;
        case 4:
            day.innerText = "Thursday";
            break;
        case 5:
            day.innerText = "Friday";
            break;
        case 6:
            day.innerText = "Saturday";
            break;
    }
}

setInterval(time, 1);