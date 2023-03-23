// function main that return everything the functions below this.
function getMilk(money, costPerBottle){
  console.log("Buy " + calcBottles(money, costPerBottle) + " bottles of milk");
  return calChange(money, costPerBottle);
}
// this function return valor
function calcBottles(startingMoney, costPerBottle){
  var numberOfBottles = Math.floor(startingMoney / costPerBottle);
  return numberOfBottles;
}
//function retrun valor
function calChange(startingAnount, costPerBottle){
  var change = startingAnount % costPerBottle;
  return change;
}
//calling function main and return everything the function
console.log("Hello master , here is your " + getMilk(5, 3) + "change.");
