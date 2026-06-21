/* =========================
   OPEN INVITATION
========================= */

const enterBtn = document.getElementById("enterBtn");
const openingScreen = document.getElementById("opening-screen");
const mainContent = document.getElementById("main-content");
const bgMusic = document.getElementById("bgMusic");

enterBtn.addEventListener("click", () => {

    bgMusic.play().catch(() => {
        console.log("Music autoplay blocked.");
    });

    openingScreen.style.opacity = "0";

    setTimeout(() => {
        openingScreen.style.display = "none";
        mainContent.style.display = "block";

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 1200);

});


/* =========================
   COUNTDOWN TIMER
========================= */

const weddingDate =
new Date("2026-07-26T12:33:00");

function updateCountdown(){

    const now = new Date();

    const diff = weddingDate - now;

    if(diff <= 0){
        return;
    }

    const days =
    Math.floor(diff / (1000*60*60*24));

    const hours =
    Math.floor(
        (diff % (1000*60*60*24))
        /
        (1000*60*60)
    );

    const minutes =
    Math.floor(
        (diff % (1000*60*60))
        /
        (1000*60)
    );

    const seconds =
    Math.floor(
        (diff % (1000*60))
        /
        1000
    );

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

}

setInterval(updateCountdown,1000);
updateCountdown();


/* =========================
   SCRATCH CARD
========================= */

const scratchOverlay =
document.getElementById("scratch-overlay");

if(scratchOverlay){

    scratchOverlay.addEventListener("click",()=>{

        scratchOverlay.style.transition =
        "0.8s";

        scratchOverlay.style.opacity = "0";

        setTimeout(()=>{
            scratchOverlay.style.display =
            "none";
        },800);

    });

}


/* =========================
   FLOWER PETALS
========================= */

const petalsContainer =
document.getElementById("petals-container");

function createPetal(){

    const petal =
    document.createElement("div");

    petal.classList.add("petal");

    petal.innerHTML = "🌸";

    petal.style.left =
    Math.random()*100 + "vw";

    petal.style.animationDuration =
    (5 + Math.random()*10) + "s";

    petal.style.fontSize =
    (18 + Math.random()*18) + "px";

    petalsContainer.appendChild(petal);

    setTimeout(()=>{
        petal.remove();
    },15000);

}

setInterval(createPetal,500);


/* =========================
   RSVP + GOOGLE SHEETS
========================= */

/*h
PASTE YOUR GOOGLE APPS SCRIPT
WEB APP URL BELOW
*/

const SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbyHGAdZaGTE7JOLl3qXGkbW7J68g5lZyto0BH2_3wqwcjtQb2qfezTX6O8wdNUo-2hgHg/exec";


const form = document.getElementById("rsvpForm");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const payload = {
        name: document.getElementById("name").value,
        guests: document.getElementById("guests").value,
        attendance: document.getElementById("attendance").value
    };

    fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        
        body: JSON.stringify(payload)
    });

    document.getElementById("message").innerHTML =
        "धन्यवाद! Thank you for your RSVP ❤️";

    form.reset();

});