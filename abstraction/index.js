function Circle(radius) {
  this.radius = radius;

  let defaultLocation = { x: 0, y: 0 };
  let computeOptimumLocation = function (factor) {};
  
  this.draw = function () {
    this.computeOptimumLocation();
    console.log("Drawo");
  };
}

let circle = new Circle(10);
