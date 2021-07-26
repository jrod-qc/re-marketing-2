var countDownDate = new Date("Sep 30, 2021 16:37:52").getTime();

// Run myfunc every second
var myfunc = setInterval(function() {

    var now = new Date().getTime();
    var timeleft = countDownDate - now;

    // Calculating the days, hours, minutes and seconds left
    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    // Result is output to the specific element
    document.getElementById("countdown-days").innerHTML = days;
    document.getElementById("countdown-hours").innerHTML = hours;
    document.getElementById("countdown-minutes").innerHTML = minutes;
    document.getElementById("countdown-seconds").innerHTML = seconds;

    // Display the message when countdown is over
    if (timeleft < 0) {
        clearInterval(myfunc);
        document.getElementById("countdown-days").innerHTML = "";
        document.getElementById("countdown-hours").innerHTML = "";
        document.getElementById("countdown-minutes").innerHTML = "";
        document.getElementById("countdown-seconds").innerHTML = "";
        document.getElementById("end").innerHTML = "The Rebate Deal is Done!";
    }
}, 1000);

$(".modal-form-slide-up-btn").click(function() {
    $(".layout-form-modal-container").css("bottom", "0");
})

$(".modal-form-slide-up-btn-mobile").click(function() {
    $(".layout-form-modal-container").css("bottom", "0");
})

$(".layout-form-modal-exit-btn").click(function() {
    $(".layout-form-modal-container").css("bottom", "-100%");
})