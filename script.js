let p1=document.querySelector("#user");
let p2=document.querySelector("#comp");
let msg=document.querySelector("#msg");
const choices=document.querySelectorAll(".bb");
let reset=document.querySelector("#resetbtn");
let userscore=0;
let compscore=0;
const compchoice=()=>{
    const options=["rock","paper","scissor"];
    return options[Math.floor(Math.random()*3)];
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        game(userchoice);
    })
});
const scoreboard=(userscore,compscore)=>{
    p1.innerHTML=userscore;
    p2.innerHTML=compscore;
}
const showwnr=(userwin)=>{
    if(userwin===true){
        msg.innerHTML="YOU WON";
        userscore++;
    }else{
        msg.innerHTML="Computer WON";
        compscore++;
    }
}
const game=(userchoice)=>{
    const comp=compchoice();
    if(userchoice===comp){
        msg.innerHTML="DRAW!";
    }else{
        let userwin=true;
        if(userchoice==="rock"){
            userwin=comp==="paper"?false:true;
        }else if(userchoice==="paper"){
            userwin=comp==="scissor"?false:true;
        }else{
            userwin=comp==="rock"?false:true;
        }
        showwnr(userwin);
        scoreboard(userscore,compscore);
    }
}
reset.addEventListener("click",()=>{
    userscore=0;
    compscore=0;
    scoreboard(userscore,compscore);
});