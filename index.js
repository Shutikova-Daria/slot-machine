const fruits = [
    "fruits/cherry.png",   
    "fruits/pear.png",
    "fruits/grape.png",
    "fruits/dragonfruit.png",
    "fruits/mango.png"
];

let username = prompt("Input your name:");
while(!username){
    username=prompt("Please enter your name to start the game:");
}
document.getElementById("username").innerText = username;

let attempt = 0;
const maxAttempts = 3;

function generateSlots() {
    document.getElementById("col1").innerHTML = "";
    document.getElementById("col2").innerHTML = "";
    document.getElementById("col3").innerHTML = "";

    const chosenFruits = [[], [], []];

    for (let i = 0; i < 3; i++) {
        chosenFruits[0].push(getRandomFruit(chosenFruits[0]));
        chosenFruits[1].push(getRandomFruit(chosenFruits[1]));
        chosenFruits[2].push(getRandomFruit(chosenFruits[2]));

        document.getElementById("col1").innerHTML += `<img src="${chosenFruits[0][i]}" alt="fruit">`;
        document.getElementById("col2").innerHTML += `<img src="${chosenFruits[1][i]}" alt="fruit">`;
        document.getElementById("col3").innerHTML += `<img src="${chosenFruits[2][i]}" alt="fruit">`;
    }

    if (chosenFruits[0][1] === chosenFruits[1][1] && chosenFruits[1][1] === chosenFruits[2][1]) {
        document.getElementById("result").innerText = "Congratulations, you have won!";
        document.querySelector("button").disabled = true;
    } else {
        attempt++;
        document.getElementById("attemptCounter").innerText = `Attempt ${attempt} з ${maxAttempts}`;
        if (attempt >= maxAttempts) {
            document.getElementById("result").innerText = "You have lost! Attempts are over.";
            document.querySelector("button").disabled = true;
            
            setTimeout(resetGame, 2000);
        }
    }
}

function getRandomFruit(columnFruits) {
    let fruit;
    do {
        fruit = fruits[Math.floor(Math.random() * fruits.length)];
    } while (columnFruits.includes(fruit)); 
    return fruit;
}

function resetGame() {
    attempt = 0;
    document.getElementById("attemptCounter").innerText = `Attempt ${attempt} з ${maxAttempts}`;
    document.getElementById("result").innerText = "";
    document.querySelector("button").disabled = false;
}

document.querySelector("button").addEventListener("click", generateSlots);
