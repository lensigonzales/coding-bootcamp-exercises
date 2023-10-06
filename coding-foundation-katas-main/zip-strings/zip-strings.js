function zipStrings(strA, strB) {
  //if the first string is shorter than 2 characters or if the second string is empty then concatenate both strings
  if (strA.length < 2 || strB.length === 0) {
    return strA.concat(strB);
  }
  //parse both strings to arrays
  const arrayA = strA.split("");
  const arrayB = strB.split("");
  //get the longest length of the two arrays
  const longestLength = Math.max(strA.length, strB.length);
  //create a new Array with the longest length of the two strings
  let result = Array(longestLength).fill();
  //iterate over the new array and add elements of first and second array alternately
  result = result.map((el, index) => [arrayA[index], arrayB[index]]);
  //parse the array to a string and remove the commas and return
  return result.join(",").replace(/,/g, "");
}
