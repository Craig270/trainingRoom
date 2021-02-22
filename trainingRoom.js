// 4a. New function named processSplicedValue that takes 3 parameters (array, the index of the element to be spliced from the array, and a callback function). Inside function, use the first two parameters to splice an element from array.Inside the function, call the callback function and pass the spliced value into it.Outside of the function, create an array of strings, call processSplicedValue, and pass in the array you just created, an index number, and console.log into it.

const heroList = [
  "Captain America",
  "Falcon",
  "Ironman",
  "Spider-Man",
  "Hulk",
  "Thor",
  "War Machine",
  "Black Widow",
  "Black Panther",
  "Doctor Strange",
];

console.log(heroList);

function bestHero(me) {
  console.log(`The best hero is ${me}`);
}

function processSplicedValue(array, spliceInd, functionProcess) {
  var hero = processSplicedValueList.splice(spliceInd, 1);
  functionProcess(hero);
}

console.log(9 + 9);
// processSplicedValue called with console.log.
processSplicedValue(processSplicedValueList, 5, console.log);

// processSplicedValue called with an alert.
processSplicedValue(processSplicedValueList, 4, alert);

// pass in an anonymous arrow function that alerts the spliced value.
processSplicedValue(processSplicedValueList, 0, (x) => alert(x));

//pass in a custom function of your choice that you should create and name.
console.log(processSplicedValueList);
processSplicedValue(processSplicedValueList, 0, bestHero);
