let userscore=0;
let compscore=0;
const msg=document.querySelector("#msg");
const choice=document.querySelectorAll("img");
const u_s=document.querySelector(".value-user");
const c_s=document.querySelector(".value-comp");

choice.forEach((c)=>{
    c.addEventListener("click",()=>{
        const userChoice=c.getAttribute("id");
        console.log(userChoice);
        playGame(userChoice);
    })
});

const compChoice=()=>{
    const choices=["rock", "paper", "scissor"];
    const num=Math.floor(Math.random()*3);
    return choices[num];
};

const DrawGame=()=>{
    msg.innerText="Game was Draw. Play again.";
    msg.style.backgroundColor = "#000000ff" ;
    msg.style.color="white";
};

const showWinner=(userWin,x,a)=>{
    if(userWin){
        userscore++;
        u_s.innerText=userscore;
        msg.innerText=`You win! Your ${x} beats ${a}`;
        msg.style.backgroundColor="green";
    }
    else{
        compscore++;
        c_s.innerText=compscore;
        msg.innerText=`You lost! ${a} beats your ${x}`;
        msg.style.backgroundColor="red";
    }
};

const playGame=(x)=>{
     const a=compChoice();
     if(x===a){
        DrawGame();
     }
     else{
        let userWin=true;
        if(x==="rock"){
            userWin= a==="paper"?false:true;
        } 
        else if(x==="paper"){
            userWin= a==="scissor"?false:true;
        }
        else{
            userWin= a==="rock"?false:true;
        }
        showWinner(userWin,x,a);
     }
};
