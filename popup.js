let timer;
let timeLeft = 25 * 60; // 25 minutes in seconds
let isRunning = false;
let isWorkMode = true;

function updateDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    document.getElementById('timer').textContent = 
        `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function startPauseTimer() {
    if (isRunning) {
        clearInterval(timer);
        document.getElementById('startPause').textContent = 'Start';
    } else {
        timer = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateDisplay();
            } else {
                clearInterval(timer);
                alert(isWorkMode ? 'Work session finished! Take a break.' : 'Break time over! Back to work.');
                resetTimer();
            }
        }, 1000);
        document.getElementById('startPause').textContent = 'Pause';
    }
    isRunning = !isRunning;
}

function resetTimer() {
    clearInterval(timer);
    timeLeft = isWorkMode ? 25 * 60 : 5 * 60;
    isRunning = false;
    document.getElementById('startPause').textContent = 'Start';
    updateDisplay();
}

function setWorkMode() {
    isWorkMode = true;
    resetTimer();
}

function setBreakMode() {
    isWorkMode = false;
    resetTimer();
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('startPause').addEventListener('click', startPauseTimer);
    document.getElementById('workMode').addEventListener('click', setWorkMode);
    document.getElementById('breakMode').addEventListener('click', setBreakMode);
    updateDisplay();
});