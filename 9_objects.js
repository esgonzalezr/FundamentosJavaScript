//An object in JS is the representation of an object of the real life with their features
//i.e: A car in the real life has: wheels, doors, glasses, color, height, branch, model, year, etc.
//In an object, is possible to declare functions as part of the features of that object

//Declaration of an object
var myCar = {
    branch: "Audi",
    model: "Q5 Luxury",
    year: 2021,
    carDetails: function(){
        console.log(`It's a car ${this.branch} ${this.model} ${this.year}`)
    }
};

//Retreiving information of the object
myCar.branch;

//Retreiving information of the function in the object
myCar.carDetails();