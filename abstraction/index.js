function Circle(radius) {
  this.radius = radius;

  let defaultLocation = { x: 0, y: 0 };

  this.getDefaultLocation = function (){
      return defaultLocation;
  }

  this.draw = function () {
    console.log("Drawo");
  };
}


let circle = new Circle(10);
circle.getDefaultLocation();
circle.draw();
