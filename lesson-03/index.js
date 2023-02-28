// Scope 1

const university = "Leiden University";

function randomGenerator() {
  // Scope 2 
  //.....
  const name = "sadra"
  console.log({ university });
  // console.log("Funtional Scope: ", this)  
  return 'T'
}

var age = 60;

{
  // Scope 3
  age = 25;
  console.log({ age });
  console.log(" Another one: ", this)
}

console.log("Age after updating: ", age)

randomGenerator();
console.log(this)

// "this" is a reference point to the entity which is defining the scope.


