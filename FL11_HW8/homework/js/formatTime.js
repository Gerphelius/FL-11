function formatTime(time) {
    let days = Math.floor(time / 1440);
    let hours = Math.floor(time / 60 - (days * 24));
    let minutes = Math.floor(time - (days * 1440 + hours * 60));

    return days + ' day(s) ' + hours + ' hour(s) ' + minutes + ' minute(s) ';
}

console.log(formatTime(3603));
