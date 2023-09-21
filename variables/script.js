//Find errors and fix them

userName = "Brad";
userName = "Jenna";

function getUserNameLength(name) {
  return name.length;
}

console.log(getUserNameLength(userName) > 4);
// ^ Should log true

//iString function

function isString(data) {
  return typeof data === "string";
}

console.log(isString("Hello"));
// result should be true

console.log(isString(3));
// result should be false

console.log(isString(undefined));
// result should be false

console.log(isString(""));
// result should be true

console.log(isString("John" + "Doe"));
// result should be true
