// EXO 2
function priceOfMangoes(quantity, price) {
  const nbrOffreeMongoes = Math.floor(quantity / 3);
  const totalCost = quantity * price - nbrOffreeMongoes * price;
  return totalCost;
}
console.log(priceOfMangoes(6, 2));

// EXO 3
function getASCII(c) {
  if (c.length > 1) {
    return "invalid";
  }

  return c.charCodeAt();
}

console.log(getASCII("c"));
// EXO 4
const sheeps = [
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  true,
];

function countSheeps(sheeps) {
  let present = sheeps.filter((sheep) => {
    return sheep == true;
  });
  return present.length;
}
console.log(countSheeps(sheeps));

// EXO 4
const firstArray = [
  "bitcoin",
  "take",
  "over",
  "the",
  "world",
  "maybe",
  "who",
  "knows",
  "perhaps",
];
const secondArray = [
  "turns",
  "out",
  "random",
  "test",
  "cases",
  "are",
  "easier",
  "than",
  "writing",
  "out",
  "basic",
  "ones",
];

function twoSort(s) {
  s.sort();
  return s[0].split("").join("***");
}
console.log(twoSort(secondArray));

const numberArray = [1, 2, 3, 6, 4];
numberArray.sort((a, b) => {
  if (a % 2 === 0 && b % 2 !== 0) {
    return -1;
  } else if (a % 2 !== 0 && b % 2 === 0) {
    return 1;
  } else {
    return a - b;
  }
});

console.log(numberArray);
