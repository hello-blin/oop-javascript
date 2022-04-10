function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("Drawww");
  };
}

const circle = new Circle(10);
/*To iterate throguh an object we can use FOR loop,
we can create a local variable inside
and use keyword 'in' which represents
every property inside the circle.
We can log also the values of these members using brackets which we put in the key variable so it implements the property 
inside and we can produce or show the value
through this rule.
*/
for (let key in circle) {
  if (typeof circle[key] !== "function") console.log(key, circle[key]);
}
Object.keys(circle); //Another method of getting all keys in an object

if ("radius" in circle) console.log("Circle has a radius");
