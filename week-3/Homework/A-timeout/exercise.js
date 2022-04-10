/*
================
EXERCISE 1

Task 1
Using setTimeout, change the background colour of the page after 5 seconds (5000 milliseconds). Hint: try searching for setTimeout. (https://www.w3schools.com/jsref/met_win_settimeout.asp)

/*


setTimeout(backgroundChange. 5000) ;
Task 2
Update your code to make the colour change every 5 seconds to something different. Hint: try searching for setInterval. (https://www.w3schools.com/jsref/met_win_setinterval.asp)
================
*/

const body = document.querySelector("body");
console.log(body);
body.style.background = "blue";

setInterval(() => {
  if (body.style.background === "black") {
    body.style.background = "blue";
  } else {
    body.style.background = "black";
  }
}, 1000);