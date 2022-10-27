// Business logic
function isEmpty(testString) {
  return (testString.trim().length === 0);
}

function onlyNumbers(testString) {
  return /^[0-9]+$/.test(testString);
}

function checkAllNumbers (inputNumbers) {
  if (isEmpty(inputNumbers) || !onlyNumbers(inputNumbers)) {
    console.log("string has characters");
    return 0;
  }
  const creditCardNumbers = inputNumbers.trim().split("");
  let newArray = [];
    for (index = (creditCardNumbers.length - 1); index >= 0 ; index -= 2) {      
      let newNumber = creditCardNumbers[index] * 2;
      if (newNumber > 9) {
        let doubleDigit = String(newNumber).split('').reduce((acc, curr) => {return acc + Number(curr);},0);
        newArray.push(doubleDigit);
        console.log('double digit result: ' + doubleDigit);
      } else {
        newArray.push(newNumber);
      }
    }
    console.log(newArray);
}

// const digitOne = (newNumber[0];
//   console.log(newNumber[0]);
//   const digitTwo = newNumber[1];
//   console.log(newNumber[1]);