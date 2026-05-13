// const theDays = 71;
// let timeRemaining = theDays * 86400;

const targetDate = new Date("July 24, 2026 00:00:00").getTime();

function startCountDown() {
    // 1. DOM Creation: Create and inject elements instantly
    const body = document.querySelector("body");
    const registrationParagraph = document.querySelector(".registration");

    let countdownContainer = document.querySelector(".countdown-container");
    let countDownEl = document.getElementById("countdown-el");

    if (!countdownContainer && !countDownEl) {
        countdownContainer = document.createElement("div");
        countdownContainer.className = "countdown-container";

        countDownEl = document.createElement("p");
        countDownEl.id = "countdown-el";

        countdownContainer.appendChild(countDownEl);

        if (registrationParagraph && body) {
            body.insertBefore(countdownContainer, registrationParagraph);
        }
    }

    // 2. REUSABLE FUNCTION: Performs time math and updates text
    function updateDisplay() {

        const now = new Date().getTime();
        const timeRemaining = targetDate - now; // Difference in milliseconds

        if (timeRemaining <= 0) {
            countDownEl.textContent = "00d : 00h : 00m : 00s";
            return false; // Tells loop to stop
        }

        let secs = Math.floor((timeRemaining % (1000 * 60)) / 1000);
        let min = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        let hour = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));

        let padD = String(days).padStart(2, '0');
        let padH = String(hour).padStart(2, '0');
        let padM = String(min).padStart(2, '0');
        let padS = String(secs).padStart(2, '0');

        countDownEl.textContent = `${padD}d : ${padH}h : ${padM}m : ${padS}s`;
        return true; // Keeps loop running
    }


    // Run instantly on load to remove the blank container flash
    const isStillRunning = updateDisplay();

    // Loop every 1 second moving forward
    if (isStillRunning) {
        const timerInterval = setInterval(() => {
            const isRunning = updateDisplay();
            if (!isRunning) {
                clearInterval(timerInterval);
            }
        }, 1000);
    }
}

// Execute the loop
startCountDown();
