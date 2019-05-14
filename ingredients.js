var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

console.log("WHILE LOOP INGREDIENTS:")
var counter = 0;
while (counter < ingredients.length) {
  console.log(ingredients[counter])
  counter++;
}
console.log("FOR LOOP INGREDIENTS:")
for (i = 0; i < ingredients.length; i++){
  console.log(ingredients[i]);
}
console.log("BACKWARD INGREDIENT LIST:")
for (i = (ingredients.length) - 1; i > -1; i--) {
  console.log(ingredients[i]);
}

