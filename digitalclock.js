function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    var time = hours + ':' + minutes + ':' + seconds;
    document.getElementById('clock').innerText = time;

    // Check if it's time to switch between light and dark mode
    if (hours >= 18 || hours < 4) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial call to update clock immediately
updateClock();