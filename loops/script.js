// TODO: Implement the oddNumbers function
function oddNumbers(num1, num2) {
  let result = "";

  if (num1 < 0 || num2 < 0) {
    return (result = "negative number not allowed");
  }

  for (let i = num1; i <= num2; i++) {
    if (i % 2 != 0) {
      result += i + ",";
    }
  }
  return result;
}

console.log(oddNumbers(0, 4));
// result should be: 1,3

console.log(oddNumbers(10, 33));
// result should be: 11,13,15,17,19,21,23,25,27,29,31,33

console.log(oddNumbers(9, 12));
// result should be: 9,11

// TODO: Implement the charCount function
function charCount(str, char) {
  if (char.length > 1) {
    return;
  }
  let countedChars = 0;
  for (index = 0; index <= str.length; index++) {
    if (str[index] == char) {
      countedChars++;
    }
  }
  return countedChars;
}

console.log(charCount("hello", "l"));
// result should be: 2

console.log(charCount("mama", "m"));
// result should be: 2

console.log(charCount("Resümee", "e"));
// result should be: 3
