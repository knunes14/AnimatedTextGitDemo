function randomRGB() {
    const r = 0;
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`
}

// To change each letter 
const letters = document.querySelectorAll('.letter');
const intervalId = setInterval(function () {
    for (let letter of letters) {
        letter.style.color = randomRGB();
    }
}, 1000);
