// This is the constructor function
function car(branch, model, year) {
  this.branch = branch;
  this.model = model;
  this.year = year;
}

// This is how can we create an instance of a new object using the constructor function
var myCar = new car("Audi","Q5",2022);