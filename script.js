const clickCounter = document.getElementById("clickCounter");
const buttonClick = document.getElementById("click");

let clicks = 0

function updateDisplay() {

    clickCounter.textContent = clicks;

}
buttonClick.addEventListener('click', function () {
    clicks++;
    updateDisplay();
});


