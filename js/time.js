var hour = ("What is the current hour in military time?");
var minute = ("What is the current minute?");
var midnightInSeconds = (hour * 60 * 60) + (minute * 60);
var secondsUntilMidnight = (24 * 60 * 60) - midnightInSeconds;
console.log(secondsUntilMidnight);
