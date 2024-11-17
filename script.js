const mainDiv = document.querySelector("#mainDiv");
document.body.onload = () => createGrid(20);

function createGrid(num) {
    mainDiv.innerHTML = '';
    const gridWidth = (100 / num) + '%';
    let total = num * num;
    for (let i = 1; i <= total; i++) {
        const newDiv = document.createElement("Div");
        mainDiv.appendChild(newDiv);
        newDiv.className = "whiteGrid";
        newDiv.style.flexBasis = gridWidth;
    }

    const gridItem = Array.from(document.getElementsByClassName("whiteGrid"));
    for (let i = 0; i < gridItem.length; i++) {
        gridItem[i].addEventListener('mouseover', () => {
            gridItem[i].style.background = "pink";
        });
    }
}

function clickedButton() {
    let userChoice = prompt("pick a width max of 100");
    while (isNaN(userChoice) || userChoice <= 0 || userChoice > 100) {
        userChoice = prompt("Invalid input! pick a width max of 100");
    }
    createGrid(userChoice);
}
