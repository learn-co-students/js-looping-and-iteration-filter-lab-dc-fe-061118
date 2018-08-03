// Code your solution in this file
function findMatching (arr, str) {
  let selectDrivers = arr.filter(name=>findName(name, str));
  return selectDrivers
}

function findName (str1, str2) {
 if (str1.toLowerCase()===str2.toLowerCase()) return true;
 else return false;
}


function fuzzyMatch (arr, str) {
  let firstLetterDrivers = arr.filter(name=>firstLetters(name, str));
  return firstLetterDrivers
}

function firstLetters (name, namestart) {
  //this function needs to determine if name starts with namestart
  if (name.toLowerCase().indexOf(namestart.toLowerCase())===0) return true;
 else return false;
}


function matchName (arr, str) {
  let firstLetterDrivers = arr.filter(driver=>firstLetters(driver.name, str));
  return firstLetterDrivers
}