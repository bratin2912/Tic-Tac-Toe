let music = new Audio('click.mp3');
let turn = "X";
let count = 0;
const changeTurn = () => {
    return turn === 'X' ? '0' : 'X'
}

const checkWin = () => {
    let values = document.getElementsByClassName('text');
    let result = false;
    let winProbability = [
        [0, 1, 2],
        [0, 3, 6],
        [6, 7, 8],
        [2, 5, 8],
        [2, 4, 6],
        [0, 4, 8],
        [3, 4, 5],
        [1, 4, 7]
    ]
    winProbability.forEach(e => {
        if (values[e[0]].innerText === values[e[1]].innerText && values[e[1]].innerText === values[e[2]].innerText && values[e[0]].innerText !== '') {
            turn=changeTurn();
            result = true;
        }
    })
    return result;
}

let boxs = document.getElementsByClassName('box');

Array.from(boxs).forEach(element => {
    let text = element.querySelector(".text");
    console.log("hello")
    element.addEventListener('click', () => {
        if (text.innerText === '') {
            count = count + 1;
            text.innerText = turn;
            music.play();
            let x = checkWin();
            turn = changeTurn();
            if (x) {
                document.getElementById('span-win').innerText = `${turn} win please Reset to play again`;
            }
            else if(count===9){
                document.getElementById('span-win').innerText = `No one win please Reset to play again`;
            }
            else {
                document.getElementById('span-win').innerText = `Now ${turn}'s turn`;
            }
        }
    })
})

document.getElementById('info-btn').addEventListener('click',()=>{
    let keys=document.getElementsByClassName('text');
    Array.from(keys).forEach(e=>{
        e.innerText='';
    })
    document.getElementById('span-win').innerText="First X's turn";
    count=0;
    turn='X';
})

