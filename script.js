
const theDays = 71;

let timeRemaining = theDays * 86400;

function startCountDown() {

    // Set an interval to execute the block every 1000ms (1 second)
    const timerInterval = setInterval(() => {

        // Stop the timer completely when it hits zero
        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            document.getElementById("countdown-el").textContent = "00:00:00:00";
            return;
        }

        // Calculate current remaining units
        let secs = timeRemaining % 60;
        let min = Math.floor(timeRemaining / 60) % 60;
        let hour = Math.floor(timeRemaining / 3600) % 24;
        let days = Math.floor(timeRemaining / 86400);

        // 5. Pad strings to guarantee two digits (e.g., 05:09)
        let padD = String(days).padStart(2, '0');
        let padH = String(hour).padStart(2, '0');
        let padM = String(min).padStart(2, '0');
        let padS = String(secs).padStart(2, '0');

        // Update DOM text content
        let countDownEl = document.getElementById("countdown-el");
        if (countDownEl) {
            countDownEl.textContent = `${padD}d : ${padH}h : ${padM}m : ${padS}s`;
        }

        timeRemaining--;

    }, 1000);
}

// Execute the loop
startCountDown();
