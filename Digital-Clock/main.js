const nowTime = document.getElementById('clock');

function getTimeClock() {
    const now  = new Date();
    let hour = String(now.getHours()).padStart(2, '0');  //.padStart(2, '0')確保字串至少有兩位數。如果不足，就在前面補上 '0'。
    let min  = String(now.getMinutes()).padStart(2, '0');
    let sec  = String(now.getSeconds()).padStart(2, '0');
    console.log(`${hour}:${min}:${sec}`);
    nowTime.textContent = `${hour}:${min}:${sec}`
}

setInterval(getTimeClock, 1000);

getTimeClock();