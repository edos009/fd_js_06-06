//! Цыкл while
/*
while (condition) {
  //iteration
}
*/

//? Example 1

// const MAX_SIZE = 10;
// let count = 0;

/*
while (count <= MAX_SIZE) {
  if (count % 2 === 1) {
    console.log(count);
  }
  count++;
}
*/

/*
while (true) {
  if (count % 2 === 0) {
    count++;
    continue;
  }
  
  console.log(count++);
  if (count >= MAX_SIZE) {
    break;
  }
}
*/

//? Example 2

/*
const PIN = "1111";
const MAX_TRY = 3;
let countTry = 1;

while (true) {
  let userInputPin = prompt("Input your PIN: ");
  if (countTry < MAX_TRY) {
    countTry++;

    if (userInputPin === PIN) {
      console.log(userInputPin);
      break;
    }
  } else {
    console.log("Try later!");
    break;
  }
}
*/

//! Цыкл do while
/*
do {
  //iteration
} while (condition);
*/

