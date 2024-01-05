let userScore=0;
let compScore=0;

const userScorepara=document.querySelector("#user-score");
const compScorepara=document.querySelector("#comp-score");

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const genCompChoice=()=>{

   const options=["rock","paper","scissors"];

   const randInx=Math.floor(Math.random()*3);

   return options[randInx];

}

const showWinner=( userWin, userChoice , compChoice) =>{

    if(userWin)
    {
        userScore++;
        userScorepara.innerText=userScore; 
        msg.innerText=`You Win !  your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
        if(userScore==11)
        {
            alert(`You are Win the Game !`);
            location.reload(true);
        }
        

    }
    else
    {
        compScore++;
        compScorepara.innerText=compScore; 
        msg.innerText=`You Loose   ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
        if(compScore==11)
        {
            alert("You are Loose the Game, Play Again!");
            location.reload(true);
        }

    }
}

const drawGame=()=>{

    // console.log("game was Draw");
    msg.innerText="Macth will Draw ,  Play Again !";
    msg.style.backgroundColor=" #081B31 ";


}
const playGame=(userChoice)=>{

    // console.log("user choice is = ",userChoice);

    const compChoice=genCompChoice();

    // console.log("Comp choice is = ",compChoice);

    if(userChoice === compChoice)
    {
         drawGame();
    }
    else
    {
        let userWin=true;
        if(userChoice==="rock")
        {
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper")
        {
            userWin = compChoice === "scissors" ? false : true;
        }

        else
        {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }


}

choices.forEach((choice)=>{

    // console.log(choice);
    choice.addEventListener("click",()=>{

           const userChoice=choice.getAttribute("id");
           playGame(userChoice);


    })
})