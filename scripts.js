/*----- app's state (variables) -----*/

let clicks = 0;

/*----- cached element references -----*/

let span1 = document.getElementById("span1");
let span2 = document.getElementById("span2");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");

/*----- event listeners -----*/

btn1.addEventListener("click", countUp);
btn2.addEventListener("click", init);

/*----- functions -----*/

function countUp() {
  // countdown()
  clicks += 1;
  span1.innerHTML = clicks;
}

function init() {
  clicks = 0;
  span1.innerHTML = clicks;
}
