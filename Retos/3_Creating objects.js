//Create a loop where the user can add new cars to an array of objects
function createNewCar(branch, model, year) {
  this.branch = branch;
  this.model = model;
  this.year = year;
}

var numberOfCars = prompt(
  "Please insert the number of cars which you want to add."
);
var carsArray = [];
var counter = 1;
var branch;
var model;
var year;
var car;

while (carsArray.length < numberOfCars) {
  alert(`Please introduce the details of the car number ${counter}`);
  branch = prompt("Please introduce the branch:");
  model = prompt("Please introduce the model:");
  year = prompt("Please introduce the year:");
  carsArray.push(new createNewCar(branch, model, year));
  counter += 1;
}
