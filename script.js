// Array of numbers
let numbers = [1, 2, 3, 4, 5];

// Using a for loop
let sumForLoop = 0;
for (let i = 0; i < numbers.length; i++) {
    sumForLoop += numbers[i];
}
console.log("Sum using for loop:", sumForLoop);

// Using a for...of loop
let sumForOfLoop = 0;
for (let number of numbers) {
    sumForOfLoop += number;
}
console.log("Sum using for...of loop:", sumForOfLoop);

// Using the forEach method
let sumForEach = 0;
numbers.forEach(function(number) {
    sumForEach += number;
});
console.log("Sum using forEach method:", sumForEach);

// Alternatively, using an arrow function with forEach
let sumForEachArrow = 0;
numbers.forEach(number => sumForEachArrow += number);
console.log("Sum using forEach method with arrow function:", sumForEachArrow);
