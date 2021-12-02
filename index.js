let startTime;
const duration = 25 * 60 * 1000;

window.onload = function() {
    startTime = Date.now();
    countDown();
    setInterval("countDown()", 50);
}

function countDown()
{
    const elapsedTime = Date.now() - startTime;
    const remainedTime = duration - elapsedTime;

    let remainedTimeMin = 0;
    let remainedTimeSec = 0;
    if (remainedTime > 0) {
        remainedTimeMin = Math.floor(remainedTime / 1000 / 60);
        remainedTimeSec = Math.floor(remainedTime / 1000) - remainedTimeMin * 60;
    }
    else {
        remainedTimeMin = Math.floor(-remainedTime / 1000 / 60);
        remainedTimeSec = Math.floor(-remainedTime / 1000) - remainedTimeMin * 60;
    }

    let progress = remainedTime / duration * 100;
    if (progress < 0.0) {
        progress = 0.0;
    }
    if (progress > 100.0) {
        progress = 100.0;
    }

    const element = document.getElementById("timer");
    element.style.backgroundImage = `radial-gradient(#dfe6e9 60%, #dfe6e900 60.5%), conic-gradient(#0984e3 0% ${progress}%, #dfe6e9 ${progress + 0.1}% 100%)`;

    if (remainedTime > 0) {
        element.innerText = `${remainedTimeMin}:${("0" + remainedTimeSec).slice(-2)}`;
    }
    else {
        element.innerText = `-${remainedTimeMin}:${("0" + remainedTimeSec).slice(-2)}`;
    }
}
