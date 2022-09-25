"use strict";

const dogsJulia = [3, 5, 2, 12, 7];
const dogsKate = [4, 1, 15, 8, 3];

const checkDogs = function (dogsJulia, dogsKate) {
  const catsJulia = dogsJulia.slice();
  //const onlyDogsJulia = catsJulia.splice(1, 2);
  const onlyDogsJulia = catsJulia.slice(1, 3);

  const both = onlyDogsJulia.concat(dogsKate);
  console.log(both);
  both.forEach(function (dog, i) {
    const adult =
      dog >= 3
        ? `Dog number ${i + 1} is an adult`
        : `Dog number ${i + 1} is still a puppy 🐶`;
    console.log(adult);
  });
};

// checkDogs(dogsJulia, dogsKate);

const dogAges1 = [5, 2, 4, 1, 15, 8, 3];

const calcAvarageHumanAge = function (ages) {
  const humanAges = ages
    .map(function (age) {
      if (age <= 2) {
        return 2 * age;
      } else {
        return 16 + age * 4;
      }
    })
    .filter((age) => age >= 18)
    .reduce((acc, age, _, ages) => {
      console.log(age);
      let len = 0;
      len = ages.length;
      acc += age;
      return acc;
    }, 0);
  console.log(humanAges);
};
calcAvarageHumanAge(dogAges1);
