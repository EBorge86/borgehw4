const r = Number(prompt("Enter the circle radius:"));

// TODO: create the circle object here
const circle = {
circumference: function () {
  let circumferenceCircle = 2 * Math.PI * r;
    return circumferenceCircle;
  },
  area: function () {
    let AreaCircle = Math.PI * r * r;
    return AreaCircle;
  },
};

console.log(`Its circumference is ${circle.circumference()}`);
console.log(`Its area is ${circle.area()}`);
