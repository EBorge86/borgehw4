const values=[3,11,7,2,9,10]
let sum = 0;
values.forEach(value => {
  sum += value;
});
let max = values[0]
for (let i = 1; i < values.length; i++) {
  if (values[i] > max) {
    max = values[i];
  }
}
let min = values[0]
for (let i = 1; i < values.length; i++) {
  if (values[i] < min) {
    min = values[i];
  }
}
console.log("sum = ",sum)
console.log("min = ",min)
console.log("max = ",max)