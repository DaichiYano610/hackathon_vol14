const timerElement = document.getElementById('timer');
const messageElement = document.getElementById('message');
const startButton = document.getElementById('start-button');
const stopButton = document.getElementById('stop-button');
const uttr = new SpeechSynthesisUtterance();
uttr.lang = 'ja-JP';

const sequences = [
    { time: 10, message: '35g' },
    { time: 20, message: '蒸らす' },
    { time: 10, message: '35g' },
    { time: 20, message: '蒸らす' },
    { time: 10, message: '35g' },
    { time: 10, message: '蒸らす' },
    { time: 15, message: '55g' },
    { time: 20, message: '蒸らす' },
    { time: 10, message: '50g' },
    { time: 25, message: '完成まであと少し' },
];

let index = 0;
let intervalId;
let isSpeaking = false;

function startTimer() {
    const { time, message } = sequences[index];

    messageElement.textContent = message;

    let currentTime = time;
    intervalId = setInterval(() => {
        currentTime--;

        const minutes = Math.floor(currentTime / 60);
        const seconds = currentTime % 60;

        timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

        if (currentTime === 0) {
            clearInterval(intervalId);
            index++;

            if (index === sequences.length) {
                // 終了処理
                console.log('完了');
                return;
            }

            startTimer();
        }
    }, 1000);

    // メッセージに 'g' が含まれている場合
    if (message.includes('g')) {
        uttr.text = `${time}秒、${message}いれます`;
    } else {
        uttr.text = `${time}秒、むらします`;
    }

    if (!isSpeaking) {
        speechSynthesis.speak(uttr);
        isSpeaking = true;
    }
}

startButton.addEventListener('click', () => {
    if (!isSpeaking) {
        startTimer();
    }
});

stopButton.addEventListener('click', () => {
    clearInterval(intervalId);
    speechSynthesis.cancel();
    isSpeaking = false;
});
