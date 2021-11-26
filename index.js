let startTime;
const duration = 25 * 60 * 1000;

window.onload = function() {
    startTime = Date.now();
    setInterval("countDown()", 20);
}

function countDown()
{
    const elapsedTime = Date.now() - startTime;
    const remainedTime = duration - elapsedTime;

    const remainedTimeMin = Math.floor(remainedTime / 1000 / 60);
    const remainedTimeSec = Math.floor(remainedTime / 1000) - remainedTimeMin * 60;

    let progress = remainedTime / duration * 100;
    if (progress < 0.0) {
        progress = 0.0;
    }
    if (progress > 100.0) {
        progress = 100.0;
    }

    const element = document.getElementById("timer");
    element.style.backgroundImage = `radial-gradient(#dfe6e9 60%, transparent 60.5%), conic-gradient(#0984e3 0% ${progress}%, #dfe6e9 ${progress + 0.1}% 100%)`;
    element.innerText = `${remainedTimeMin}:${remainedTimeSec}`;
}
