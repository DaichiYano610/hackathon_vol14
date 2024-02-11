const timerElement = document.getElementById('timer');
const messageElement = document.getElementById('message');

const sequences = [
    { time: 10, message: '35g注ぐ' },
    { time: 20, message: '蒸らす' },
    { time: 10, message: '70gまで注ぐ' },
    { time: 20, message: '蒸らす' },
    { time: 10, message: '105gまで注ぐ' },
    { time: 10, message: '蒸らす' },
    { time: 15, message: '160gまで注ぐ' },
    { time: 20, message: '蒸らす' },
    { time: 10, message: '210gまで注ぐ' },
    { time: 25, message: '完成まであと少し' },
    { message: '完成' }
];

let index = 0;
let intervalId;


function startTimer() {
    if (index >= sequences.length) {
        timerElement.textContent = "00:00"
        console.log('完了');
        return; // すべてのシーケンスが完了したら終了
    }

    const { time, message } = sequences[index];

    messageElement.textContent = message;

    let currentTime = time;
    intervalId = setInterval(() => {
        currentTime--;

        const minutes = Math.floor(currentTime / 60);
        const seconds = currentTime % 60;

        timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

        if (time === undefined) {
            timerElement.textContent = "00:00"
        }
        if (currentTime === 0) {
            clearInterval(intervalId);
            index++;




            startTimer();
        }
    }, 1000);

}

startTimer();
