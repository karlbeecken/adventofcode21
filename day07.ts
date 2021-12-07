import day07data from "./data/day07data";

const data = day07data.split(",").map((x) => parseInt(x));
const testdata = [16, 1, 2, 0, 4, 2, 7, 1, 2, 14];

function difference(a: number, b: number) {
  return Math.abs(a - b);
}

let fuel = new Array(data.length);

data.forEach((x) => {
  let currentFuel = 0;

  data.forEach((y) => {
    currentFuel += difference(x, y);
  });

  fuel.push({ currentFuel, x });
});

console.log(fuel.sort((a, b) => a.currentFuel - b.currentFuel)[0]);

let newFuel = new Array();
let max = Math.max(...data);

for (let x = 0; x < max; x++) {
  let currentFuel = 0;

  data.forEach((y) => {
    for (let i = 1; i <= difference(x, y); i++) {
      currentFuel += i;
    }
  });

  newFuel.push({ currentFuel, x });
}

console.log(newFuel.sort((a, b) => a.currentFuel - b.currentFuel)[0]);
