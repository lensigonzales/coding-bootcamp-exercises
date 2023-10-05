/* Be Concise */
function find(arr, el) {
  const i = arr.indexOf(el);
  return i > -1 ? i : "Not found";
}

/* Reverse Name */
function nameShuffler(str) {
  const toArray = str.split(" ");
  return toArray.reverse().join(" ");
}

/* BMI calculation */
function bmi(weight, height) {
  const bmi = weight / Math.pow(height, 2);
  switch (true) {
    case bmi <= 18.5:
      return "Underweight";
    case bmi <= 25.0:
      return "Normal";
    case bmi <= 30.0:
      return "Overweight";
    case bmi > 30:
      return "Obese";
    default:
      return "Normal";
  }
}

/* Opposite Number */

function opposite(number) {
  return number < 0 ? -number : -number;
}

/* console.log(opposite(1));
console.log(opposite(12525220.3325)); */

/* Who is the killer? */

function killer(suspectInfo, dead) {
  //for in loop durch das Object iterieren
  for (let suspect in suspectInfo) {
    //values von suspectInfo speichern in sawPeople
    const sawPeople = suspectInfo[suspect];
    if (dead.every((deadPerson) => sawPeople.includes(deadPerson))) {
      return suspect;
    }
  }
}

const suspects = {
  James: ["Jacob", "Bill", "Lucas"],
  Johnny: ["David", "Kyle", "Lucas"],
  Peter: ["Lucy", "Kyle"],
};

const dead = ["Bill", "Lucas"];

const suspects2 = { Brad: [], Megan: ["Ben", "Kevin"], Finn: [] };
const dead2 = ["Ben"];

/* console.log(killer(suspects, dead));
console.log(killer(suspects2, dead2)); */

/* Dislike vs. Like */

function likeOrDislike(buttons) {
  return buttons.reduce(
    (acc, current) => (acc === current ? "Nothing" : current),
    "Nothing"
  );
}

/* console.log(likeOrDislike(["Like", "Like"])); //--> Nothing
console.log(likeOrDislike(["Like", "Like", "Dislike"])); // Dislike
console.log(
  likeOrDislike(["Dislike", "Dislike", "Dislike", "Like", "Like", "Like"]) //Like
); */

/* Cat Years, Dog Years */

const humanYearsCatYearsDogYears = function (humanYears) {
  let catYears = 0;
  let dogYears = 0;
  for (let i = 1; i <= humanYears; i++) {
    if (i === 1) {
      catYears = 15;
      dogYears = 15;
    } else if (i === 2) {
      catYears += 9;
      dogYears += 9;
    } else {
      catYears += 4;
      dogYears += 5;
    }
  }
  return [humanYears, catYears, dogYears];
};

/* console.log(humanYearsCatYearsDogYears(1)); // --> [1,15,15]
console.log(humanYearsCatYearsDogYears(2)); // --> [2,24,24]
console.log(humanYearsCatYearsDogYears(10)); // --> [10,56,64] */

/* Traffic Light */

function updateLight(current) {
  switch (current) {
    case "green":
      return "yellow";
    case "yellow":
      return "red";
    case "red":
      return "green";
    default:
      return;
  }
}
/* console.log(updateLight("green")); // "yellow"
console.log(updateLight("yellow")); // "red"
console.log(updateLight("red")); // "green" */

/* TODO Alphabet Wars */

function alphabetWar(fight) {
  let scoreLeft = 0;
  let scoreRight = 0;

  fight = fight.split();

  const teamLeft = {
    w: 4,
    p: 3,
    b: 2,
    s: 1,
  };
  const teamRight = {
    m: 4,
    q: 3,
    d: 2,
    z: 1,
  };

  const charsLeft = fight.filter((char) =>
    Object.keys(teamLeft).includes(char) ? char : false
  );

  return "Let's fight again!";
}

//alphabetWar("vhwpsdx");

/* Band Name Generator */

function bandNameGenerator(str) {
  if (str[0] !== str[str.length - 1]) {
    const firstLetter = str[0].toUpperCase();
    const remaining = str.slice(1);
    return "The " + firstLetter + remaining;
  } else {
    const copyWord = str.slice(1);
    const firstLetter = str[0].toUpperCase();
    const remaining = str.slice(1);
    return firstLetter + remaining + copyWord;
  }
}

//console.log(bandNameGenerator("road"));
//console.log(bandNameGenerator("alaska"));

/* Weird words */

function nextLetter(str) {
  //str = str.split("");
  let newString = "";
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  for (let i = 0; i < str.length; i++) {
    if (str[i].toUpperCase === str[i]) {
      let lowerCase = str[i].toLowerCase();
      let index = alphabet.indexOf(lowerCase);
      newString += alphabet[index + 1].toUpperCase();
    } else {
      let index = alphabet.indexOf(str[i]);
      newString += alphabet[index + 1];
    }
    //str.splice(str[i], 1, alphabet[index + 1]);
  }
  return newString;
}

//console.log(nextLetter("heLlo"));

/* Divide & Conquer */

function divCon(x) {
  let countStrings = 0;
  let countNum = 0;
  for (let numberEntry of x) {
    if (typeof numberEntry === "string") {
      countStrings += parseInt(numberEntry);
    } else {
      countNum += numberEntry;
    }
  }
  return countNum - countStrings;
}

//console.log(parseInt("a"));

/* TODO: Generate Hashtag */

function generateHashtag(str) {
  if (str.length === 0 || str.replace(/\s/g, "").length === 0) {
    return false;
  }

  str = str.split(" ").filter((word) => word);

  const capitalizedWords = str
    .map((el) => el[0].toUpperCase() + el.substring(1))
    .join("");
  if (capitalizedWords.length < 140) {
    return "#" + capitalizedWords;
  }
  return false;
}

//console.log(generateHashtag("code" + " ".repeat(140) + "wars"));

/* Valid Parentheses */
function validParentheses(parenStr) {
  let result = 0;
  if (parenStr[0] === ")" || parenStr.length > 100) {
    return false;
  } else if (parenStr.length === 0) {
    return true;
  }
  for (let i = 0; i < parenStr.length; i++) {
    if (parenStr[i] === "(") {
      result++;
    } else if (result === 0 && parenStr[i] === ")") {
      return false;
    } else {
      result--;
    }
  }
  return result === 0 ? true : false;
}

//console.log(validParentheses("()(())((()))(())()")); //true
//console.log(validParentheses("()()(")); //false
//console.log(validParentheses(")(")); //false
console.log(
  validParentheses(
    "((()))(())((()(())()()))((((())))()())(((()()(()))(())((())))()((()())(()()()(()()))))((()()()()))()"
  )
); //true

/* Descending Order Integers */

function descendingOrder(num) {
  const numArray = num.toString().split("");
  numArray.sort((num1, num2) => num2 - num1);
  return parseInt(numArray.join(""));
}

//console.log(descendingOrder(1021)); //2110
//console.log(descendingOrder(5461)); //6541

/* Mumbling */

function accum(charChain) {
  charChain = charChain.toLowerCase();
  let result = "";

  for (let i = 0; i < charChain.length; i++) {
    let char = charChain[i];
    result += char.toUpperCase() + char.repeat(i) + "-";
  }

  return result.substring(0, result.length - 1);
}
//toUpperCase char and save in result
//add repeat char times index of char
//end string with "-"
//wenn last char then don't end with "-"
//return string

console.log(accum("ZpglnRxqenU")); //Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu

/*Highest & Lowest */
function highAndLow(numbers) {
  numbers = numbers.split(" ").sort((num1, num2) => num2 - num1);
  return `${numbers[0]} ${numbers[numbers.length - 1]}`;
}

console.log(highAndLow("1 2 3 4 5")); // return "5 1"
console.log(highAndLow("1 2 -3 4 5")); // return "5 -3"
console.log(highAndLow("1 9 3 4 -5")); // return "9 -5"
