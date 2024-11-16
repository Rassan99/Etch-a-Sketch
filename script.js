const mainDiv = document.querySelector("#mainDiv");
console.log(mainDiv)
function createGrid(num){
    for ( let i = 1; i<=num ; i++){
        const newDiv = document.createElement("Div");
        mainDiv.appendChild(newDiv);
        console.log("inside the loop")

    }
}

document.body.onload = createGrid(5);
