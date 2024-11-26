let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let sci = document.getElementById("scissor");
let choseS = document.querySelectorAll(".chose");
let msg = document.getElementById("msg");
let userS = document.getElementById("userScore");
let compS = document.getElementById("computerScore");

let userScore = 0;
let compScore  = 0;

// generate computer choice

let compChose = () =>{
   let ran = Math.floor(Math.random()*3);


   let option = ["rock" , "paper" , "scissor"];
    let compChose = option[ran];

    return compChose;

}

// get user select
   
choseS.forEach((chose) =>{
      chose.addEventListener("click" ,() =>{
          const userSelect = chose.getAttribute("id");
          playGame(userSelect);

      })
 });

// match draw condition
 
let playGame = (userSelect) =>{
    console.log(userSelect);
    let compChose1 = compChose();
    console.log(compChose1);

    if(userSelect === compChose1){
        msg.innerText= "match draw";
        msg.style.width = "100px";
   }else{

    // check who's win

   if(userSelect === "rock"){
       compChose1=== "paper"? compChose1 = true : userSelect = true;
   }else if(userSelect === "paper"){
       compChose1 === "rock" ? userSelect = true: compChose1 = true;
   }else if(userSelect === "scissor"){
       compChose1 === "rock" ? compChose1 = true: userSelect = true;
   }
   if(userSelect == true){

    // print message when user win

    msg.innerText = `user win computer chose ${compChose1}`;
    msg.style.width = "300px";
    userScore++;
    userS.innerText = userScore;

}else if(compChose1 == true){

    //  print message when computer win

    msg.innerText=`computer win computer chose ${compChose()}`;
     msg.style.width = "350px";
    compScore++;
    compS.innerText = compScore;
}
   }


  
}
 



