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
  //console.log(creditCardNumbers.length);
    for (index = (creditCardNumbers.length - 1); index >= 0 ; index -= 2) {
      let newNumber = creditCardNumbers[index] * 2;
      console.log(newNumber);
    }
}
