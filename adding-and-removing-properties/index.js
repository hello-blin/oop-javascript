function createCircle(radius) {
  return {
    radius,
    draw: function () {
      console.log("draw");
    },
  };
}

const circle = createCircle(10);

const propertyName = "location";

circle.location = { x: 1 }; //adding a new property by the key called location and it's value 1
circle["center"] = { u: 1 }; //another way adding a new property by the key called location and it's value 1 using brackets
// circle[propertyName] = {x: 1} //A special case using brackets is when we have a special

delete circle['center']; //Removing a property we use delete keyword before and we can use one of the 3 methods I showed you up.