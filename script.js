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
;
document.body.onload = createGrid(20);
const gridItem =Array.from(document.getElementsByClassName("whiteGrid"));
// console.log(gridItem);
// function changeColor (i){
//     // console.log( gridItem[i]);
//     // item.forEach(el => el.style.background = "red");
//     gridItem[i].style.background = "green";
// }

// // gridItem.addEventListener("mouseover", changeColor(gridItem));

for (let i = 0 ; i < gridItem.length; i++) {
    gridItem[i].addEventListener('mouseover', () => {
        gridItem[i].style.background = "pink";
    })
 }
