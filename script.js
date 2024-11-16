const mainDiv = document.querySelector("#mainDiv");
console.log(mainDiv)
function createGrid(num){
    const gridWidth= (100/num)+'%';
    let total = num * num;
    for ( let i = 1; i<=total ; i++){
        const newDiv = document.createElement("Div");
        mainDiv.appendChild(newDiv);
        newDiv.className= "whiteGrid";
        newDiv.style.flexBasis= gridWidth;

    }
}

document.body.onload = createGrid(6);
