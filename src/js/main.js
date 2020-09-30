const countDownDate = new Date("Jan 25, 2021 00:00:00");

function updateTimer() {
    setInterval(function() {
        // Get today's date and time
        const now = new Date().getTime();

        // Find the distance between now and the count down date
        const distance = countDownDate - now;
        
        // Time calculations for days, hours, minutes and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.querySelector("#days").innerHTML = days;
        document.querySelector("#hours").innerHTML = hours;
        document.querySelector("#minutes").innerHTML = minutes;
        document.querySelector("#seconds").innerHTML = seconds;
    }, 1000)
}

updateTimer();

