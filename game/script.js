"use strict";

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;
let btn = document.querySelector(".check");
// console.log(document.querySelector(".msg").textContent);
// console.log(document.querySelector(".score").value);
document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);
  console.log(guess);
  console.log(typeof guess);
  //   document.querySelector(".number").textContent =
  //     document.querySelector(".guess").value;

  // When there is no input
  if (!guess) {
    document.querySelector(".msg").textContent = "🚫 There is no number";
  }

  // when player wins
  else if (guess === secretNumber) {
    document.querySelector(".msg").textContent = "🍾 Correct Number";
    document.querySelector(".number").style.fontSize = "10rem";
    document.querySelector(".msg").style.fontSize = "4rem";
    document.querySelector(".number").textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector(".msg").textContent =
        guess > secretNumber
          ? "Its too high , guess lower"
          : "Its too low , guess higher";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      btn.disabled = true;
      document.querySelector(".msg").textContent = "You lost the game";
      document.querySelector(".score").textContent = 0;
    }
  }
});
// when the number is high
//   else if (guess > secretNumber) {
//     if (score > 1) {
//       document.querySelector(".msg").textContent = "Its too high , guess lower";
//       score--;
//       document.querySelector(".score").textContent = score;
//     } else {
//       btn.disabled = true;
//       document.querySelector(".msg").textContent = "You lost the game";
//       document.querySelector(".score").textContent = 0;
//     }
//   }

//   // when number is low
//   else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector(".msg").textContent = "Its too low , guess higher";
//       score--;
//       document.querySelector(".score").textContent = score;
//     } else {
//       btn.disabled = true;
//       document.querySelector(".msg").textContent = "You lost the game";
//       document.querySelector(".score").textContent = 0;
//     }
//   }
// });

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector(".msg").textContent = "💭 Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").value = "";
  document.querySelector(".number").style.fontSize = "8rem";
  document.querySelector(".msg").style.fontSize = "3rem";
});
