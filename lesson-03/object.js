
const _ = require("lodash");
/* 
 <key>: <value>
*/

const student = {
  name: "Hassan",
  address: "Tehran",
  age: 28, 
  courses: {
    currentlyActive: ["Dini"],
  },
  calculateAgeInSeconds: function () {
    console.log(" YAY, I'm running ");
    console.log(this);
    return 60 * 60 * 24 * 30 * 12 * this.age;
  }
}


student.age = 22;

console.log({ ageInSeconds: student.calculateAgeInSeconds() });


// Create a new function. Assign the function to student. 
// What will the "this" show you in the new function when running from student.




const artbitaryArray = [
  {
    name: "Amin", 
  },
  {
    name: "Ali", 
  },
  {
    name: "Sadra"
  }
];


console.log({ isAminHere: _.findIndex(artbitaryArray, { name: "Nima" }) > -1 })



