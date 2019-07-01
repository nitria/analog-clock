function clock() {
    var date = new Date()
    var secs = date.getSeconds() / 60
    var mins = (secs + date.getMinutes()) / 60
    var hr = (mins + date.getHours()) / 12

    rotate(secondsHand, secs)
    rotate(minutesHand, mins)
    rotate(hoursHand, hr)
}

var secondsHand = document.getElementById('secondsHand');
var minutesHand = document.getElementById('minutesHand');
var hoursHand = document.getElementById('hoursHand');

function rotate(c, tempo) {
    c.style.setProperty('--rotation', tempo * 360)
}

clock()

setInterval(clock, 1000)
