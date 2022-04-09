// let x = {value: 5};
// let y = x;
// x.value = 20;

// console.log(`y: ${y}, x: ${x}`);

////////////////////////////////
// By this code below we can understand that primitives are copied by their value
// let number = 10;

// function increase(number){
//     number++
// }

// increase(number)
// console.log(number);

////////////////////////////////

////////////////////////////////
/*Here we turn the number variable to an object and we can see that the object 
type copy the reference so the function can do its work */

let number = { value: 10 };

function increase(number) {
    number.value++;
  }


increase(number);
console.log(number);
