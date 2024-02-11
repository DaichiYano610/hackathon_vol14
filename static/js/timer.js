const timerElement = document.getElementById('timer');
const messageElement = document.getElementById('message');

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
    {できあがり}
];

let index = 0;
let intervalId;

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
}

startTimer();