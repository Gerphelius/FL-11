function formatTime(time) {
    let date = new Date(time * 60 * 1000);

    console.log(date.getUTCDate() - 1 + ' day(s) ' + date.getUTCHours() 
    + ' hour(s) ' + date.getUTCMinutes() + ' minute(s) ');
}

formatTime(3603);