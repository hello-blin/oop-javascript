// !!!!! Object Literals !!!!!

// const circle = {
//     radius: 1,
//     location: {
//         x: 1,
//         y: 1
//     },
//     draw: function(){
//         console.log('Drawing');
//     }
// };

// circle.draw();

// -------- Object Literals -------

// !!!!!!Factory Function!!!!!!
// function createCircle(radius) {
//   return  {
//     radius,
//     draw: function(){
//         console.log('draw');
//     }
//   };
// }

// const circle = createCircle(1)

// console.log(circle);

// ------Factory Function-------

// !!!!!!Constructor Function!!!!!!

// function Circle(radius){
//     // console.log('this: ', this); THIS
//     this.radius = radius;
//     this.draw = function(){
//         console.log('draw')
//     }
// }

// const another = Circle(1);
// console.log(another);

// !!!!!!Constructor Function!!!!!!

// Some of Built in Constructors
// new String(); // '', "", ``
// new Boolean(); // true, false, null, undefined
// new Number(); // 1,2,3

function Circle(radius) {
  // console.log('this: ', this); THIS
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

Circle.call({}, 1);
Circle.apply({}, [1]);


// const another = new Circle(1);
