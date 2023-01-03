// let guessNumber=document.querySelector(".num").value

var sum = 15;
function xyz() {
  const guessNumber = document.querySelector(".num").value
  console.log(guessNumber);
  let count = sum--

  document.querySelector(".value").innerHTML = `<h2>Remain Chances : ${count}</h2>`


   
    if (guessNumber == x) {
      // document.querySelector(".return").textContent = "yes"
      document.querySelector(".box1").style.backgroundColor = "yellow"
      document.querySelector(".box1").style.filter= "blur(3px)"
   
      document.querySelector(".card").style.display = "block"
      console.log("yes");

    } else if (guessNumber > x) {
      console.log("your value is hight");
      document.querySelector(".return").textContent = "your value is hight TRY AGAIN"

    } else if (guessNumber < x) {
      document.querySelector(".return").textContent = "your value is low  TRY AGAIN"
      console.log("your value is low");
    }
  
   
    

}
let x = Math.floor(Math.random() * 21);
console.log(x);


function tryagain(){
  document.querySelector(".box1").style.filter= "blur(0px)"
  document.querySelector(".card").style.display = "none"
  // history.go(0);
    // document.location.reload();
  
}
tryagain()