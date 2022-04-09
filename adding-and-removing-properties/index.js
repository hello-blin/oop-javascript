function createCircle(radius) {
  return  {
    radius,
    draw: function(){
        console.log('draw');
    }
  };
}

const circle = createCircle(10)

circle.location = {x: 1};