const buttonE1 = document.getElementById("roll-button");
const diceE1 = document.getElementById("dice");
const historyE1 = document.getElementById("roll-history");
let history = [];

function rollDice() {
    const rollResult = Math.floor(Math.random() * 6) + 1;
    const diceFace = getDiceFace(rollResult);
    diceE1.innerHTML = diceFace;
    history.push(rollResult);
    updateRollHistory();
}

function updateRollHistory() {
    historyE1.innerHTML = "";
    for (let i = 0; i < history.length; i++) {
        const listItem = document.createElement("li");
        listItem.innerHTML = `Roll ${i + 1}: <span>${getDiceFace(history[i])}</span>`;
        historyE1.appendChild(listItem);
    }
}

function getDiceFace(rollResult) {
    switch (rollResult) {
        case 1:
            return "⚀";
        case 2:
            return "⚁";
        case 3:
            return "⚂";
        case 4:
            return "⚃";
        case 5:
            return "⚄";
        case 6:
            return "⚅";
        default:
            return "Error";
    }
}

buttonE1.addEventListener("click", () => {
    diceE1.classList.add("roll-animation");
    setTimeout(() => {
        diceE1.classList.remove("roll-animation");
        rollDice();
    }, 1000);
});
