const board = document.querySelector('#board');
const addBtn = document.querySelector('#add-cub');
const deleteBtn = document.querySelector('#delete');
const randomColor = () => Math.floor(Math.random() * 255);
let userStatus = undefined;

addBtn.onclick = () => {
    userStatus = 'add';
    board.style.cursor = 'crosshair';
};

deleteBtn.onclick = () =>{
     userStatus = 'delete';
     board.style.cursor = 'not-allowed';
}

board.onclick = event => {
    if(userStatus === 'add') {
        let xCoordinate = event.layerX - 15;
        let yCoordinate = event.layerY - 15;
        if(xCoordinate <16 || yCoordinate < 16 || xCoordinate > 735 || yCoordinate > 385){
            return alert(`Will be outside the area or a Cub has already been created there.
            Try clicking elsewhere!!!`);
        };
        board.innerHTML += `<div class="canvas__cub" style="top: ${yCoordinate}px; left: ${xCoordinate}px; background-color: rgb(${randomColor()}, ${randomColor()}, ${randomColor()})"></div>`;
    } else if(userStatus === 'delete') {
        document.querySelectorAll(".canvas__cub").forEach(element => element.onclick = () => element.remove());
    };
};
