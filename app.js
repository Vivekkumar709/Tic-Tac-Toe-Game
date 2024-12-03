let boxes= document.querySelectorAll(".box");
let resetbtn= document.querySelector("#resetbtn");
let msgcontainer = document.querySelector(".msg-container");
let newbtn= document.querySelector("#newbtn");
let msg= document.querySelector("#msg");

let turnO = true;
let count=0;

const winpattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const drawmatch=()=>{
    msg.innerText=`Match is draw!`;
    msgcontainer.classList.remove("hide");
    disabledboxes();
    count=0;
    
}

const resetGame= ()=>{
    turnO=true;
    enabledboxes();
    msgcontainer.classList.add("hide");
}

boxes.forEach( (box) => {
    box.addEventListener("click",() =>{
        if(turnO){
            box.innerText="O";
            turnO=false;
            count++;
        }else{
            box.innerText="X";
            turnO=true
            count++;
        }
        box.disabled=true;

        winnercheck();
        if(count===9){
            drawmatch();
        }
    });
});

const disabledboxes =()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enabledboxes =()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showwinner= (winner)=>{
    msg.innerText=`Congratulation, Winner is ${winner}!`;
    msgcontainer.classList.remove("hide");
    disabledboxes();
    count=0;
}

const winnercheck=()=>{
    for(let pattern of winpattern){
        let val1=boxes[pattern[0]].innerText;
        let val2=boxes[pattern[1]].innerText;
        let val3=boxes[pattern[2]].innerText;

        if(val1!="" && val2!="" && val3!=""){
            if(val1===val2 && val2===val3){
                showwinner(val1);
            }
        }
    }
}

newbtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);