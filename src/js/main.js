const userLang = navigator.language || navigator.userLanguage; 
const language = {
    de: {
        countDays: "Tage",
        countHours: "Stunden",
        countMinutes: "Minuten",
        projectDesc: "Wir connecten dich mit anderen Studierenden aus den Fakultäten der Hochschule Furtwangen. Und zwar unkompliziert und anonym. Bei Blind MeetUp handelt es sich um eine Web-Anwendung, mit der du an einem Networking-Treffen teilnehmen kannst. Wer daran interessiert ist, neue Leute kennenzulernen, ist bei Blind MeetUp genau richtig! Auch für Internationals ist das eine Chance, neue Kontakte zu knüpfen und sich am Campus-Leben einzubringen.",
        seeMore: "Du willst mehr von unserem Projekt sehen?",
        followUs: "Dann folg uns jetzt!",
        cooperation: "In Kooperation mit"
    },
    en: {
        countDays: "Days",
        countHours: "Hours",
        countMinutes: "Minutes",
        projectDesc: "We connect you with other students from the faculties of Furtwangen University. In an uncomplicated and anonymous way. Blind MeetUp is a web application with which allows you to participate in a networking meeting. If you are interested in meeting new people, Blind MeetUp is the right choice for you! If you're an international student it's a great opportunity to make new contacts and get involved in campus life.",
        seeMore: "Wanna see more?",
        followUs: "Follow us now!",
        cooperation: "In cooperation with"
    }
}
const dataReload = document.querySelectorAll("[data-reload]")
const countDownDate = new Date("Jan 25, 2021 00:00:00");

dataReload.forEach(element => {
    element.onclick = function() {
        setTimeout(() => {
            location.reload()
        }, 100)
    }
});

if(!userLang.includes("DE"))  {
    translate()
}

if(window.location.hash) {
    if(window.location.hash === "#en")
        translate()
}

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

        document.querySelector("#days").innerHTML = days;
        document.querySelector("#hours").innerHTML = hours;
        document.querySelector("#minutes").innerHTML = minutes;
    }, 1000)
}

function translate() {
    countDays.textContent = language.en.countDays
    countHours.textContent = language.en.countHours
    countMinutes.textContent = language.en.countMinutes
    projectDesc.textContent = language.en.projectDesc
    seeMore.textContent = language.en.seeMore
    followUs.textContent = language.en.followUs
    cooperation.textContent = language.en.cooperation
}

updateTimer()

