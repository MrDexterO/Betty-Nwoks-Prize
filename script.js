const theDays = 71;
let timeRemaining = theDays * 86400;

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
        if (timeRemaining <= 0) {
            countDownEl.textContent = "00d : 00h : 00m : 00s";
            return false; // Tells loop to stop
        }

        let secs = timeRemaining % 60;
        let min = Math.floor(timeRemaining / 60) % 60;
        let hour = Math.floor(timeRemaining / 3600) % 24;
        let days = Math.floor(timeRemaining / 86400);

        let padD = String(days).padStart(2, '0');
        let padH = String(hour).padStart(2, '0');
        let padM = String(min).padStart(2, '0');
        let padS = String(secs).padStart(2, '0');

        countDownEl.textContent = `${padD}d : ${padH}h : ${padM}m : ${padS}s`;
        return true; // Keeps loop running
    }

    // 3. INSTANT EXECUTION: Populates the text before the user sees a blank container
    updateDisplay();
    timeRemaining--;

    // 4. TIMER LOOP: Runs every 1 second moving forward
    const timerInterval = setInterval(() => {
        const isRunning = updateDisplay();

        if (!isRunning) {
            clearInterval(timerInterval);
            return;
        }

        timeRemaining--;
    }, 1000);
}

// Execute the loop
startCountDown();
