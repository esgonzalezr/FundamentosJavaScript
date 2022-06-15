var itemArray = [
  { name: "Bycicle", cost: 3000 },
  { name: "TV", cost: 2500 },
  { name: "Book", cost: 320 },
  { name: "Mobile phone", cost: 10000 },
  { name: "Laptop", cost: 20000 },
  { name: "Keyboard", cost: 500 },
  { name: "Headphones", cost: 1700 },
];

// Method filter: This method filter data into an array through a condition; the condition should be a boolean expression. This method returns a new array. This method won't modify the original array.
var filterItemsArray = itemArray.filter(function (x) {
  return x.cost <= 5000;
});

//Map method: Will return a field list of the array selected. This method returns a new array. This method won't modify the original array.
var mapItemsArray = itemArray.map(function (x) {
  return x.cost;
});

//Find method: This method search into an array the exact data compared in the function expression. This method returns a new array and won't modify the original array.
var findItems = itemArray.find(function(item){
    return item.name == "Book";
});

//For each: Filter information without modifying the original array and only returns an object as a printable list.
itemArray.forEach(function(item){
    console.log(item.name);
});

//Some method: This method will return true or false as result of a boolean expression. This method returns a new array.
shiperItemArray = itemArray.some(function(item){
    return item.cost <= 700;
});