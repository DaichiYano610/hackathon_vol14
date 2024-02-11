const timerElement = document.getElementById('timer');
const messageElement = document.getElementById('message');
const startButton = document.getElementById('start-button');
const stopButton = document.getElementById('stop-button');
const nextButton = document.getElementById('next-button');
const uttr = new SpeechSynthesisUtterance();
uttr.lang = 'ja-JP';

const sequences = [
    { time: 10, message: '35g', audio: 'sound1.mp3' },
    { time: 20, message: '蒸らす', audio: 'sound2.mp3' },
    { time: 10, message: '35g', audio: 'sound1.mp3' },
    { time: 20, message: '蒸らす', audio: 'sound2.mp3' },
    { time: 10, message: '35g', audio: 'sound1.mp3' },
    { time: 10, message: '蒸らす', audio: 'sound2.mp3' },
    { time: 15, message: '55g', audio: 'sound3.mp3' },
    { time: 20, message: '蒸らす', audio: 'sound2.mp3' },
    { time: 10, message: '50g', audio: 'sound4.mp3' },
    { time: 25, message: '完成まであと少し', audio: 'sound5.mp3' },
];

let index = 0;
let intervalId;
let audioPlayer = new Audio();

function startTimer() {
    const { time, message, audio } = sequences[index];

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

    // 音声ファイルの切り替え
    audioPlayer.src = audio;
    audioPlayer.play();
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', () => {
    clearInterval(intervalId);
    audioPlayer.pause();
});
nextButton.addEventListener('click', () => {
    clearInterval(intervalId);
    audioPlayer.pause();
    index++;

    if (index === sequences.length) {
        // 終了処理
        console.log('完了');
        return;
    }

    startTimer();
});

