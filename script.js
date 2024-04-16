let time = 30;

rnGen = 0;
function BubbleMaker() {
  let clutter = " ";
  for (let i = 0; i <= 139; i++) {
    let randomNumber = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${randomNumber}</div>`;
  }
  document.querySelector("#pbtm").innerHTML = clutter;
}
function timer() {
  let timerinterval = setInterval(function () {
    if (time > 0) {
      time--;
      document.querySelector("#timer").textContent = time;
    } else {
      clearInterval(timerinterval);
      document.querySelector("#pbtm").innerHTML = `<`;
      document.querySelector("#pbtm").innerHTML = `<h1>Game over:</h1> <h1>Your score is ${score}</h1>`;
    }
  }, 1000);
}

function randomNum(){
    rnGen = Math.floor(Math.random() *10)
    document.querySelector("#randomNum").textContent = rnGen;
}

let score = 0;
function increaseScore(){
    score += 10;
    document.querySelector("#score").textContent = score;
}

document.querySelector("#pbtm").addEventListener("click",function(details){
    let clickedNum = (Number(details.target.textContent));
    if (clickedNum === rnGen) {
        increaseScore();
        randomNum();
        BubbleMaker();
    }
})

timer();
BubbleMaker();
randomNum();