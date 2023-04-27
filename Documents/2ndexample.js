function randomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`
}

// To change each letter 
const letters = document.querySelectorAll('.letter');
const intervalid = setInterval(function () {
    for (let leter of letters) {
        letters.style.color = randomRGB();
    }
}, 2000);
