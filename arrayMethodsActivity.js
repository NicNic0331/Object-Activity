let arr1 = ["Cecile", "Lone"];
let arr2 = ["Emil", "Tobias", "Linus"];
let result = arr1.concat(arr2); // Combine arrays arr1 and arr2 
console.log(result); // Output: ["Cecile", "Lone", "Emil", "Tobias", "Linus"]

let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi"); // Add "Kiwi" to the end.
console.log(fruits); // Output: ["Banana", "Orange", "Apple", "Mango", "Kiwi"]

let array1 = [1, 2, 3];
array1.unshift(4, 5); // Add "4" and "5" to the beginning
console.log(array1); // Output: [4, 5, 1, 2, 3]

fruits.pop(); // Remove the last element from the fruits array
console.log(fruits); // Output: ["Banana", "Orange", "Apple", "Mango"]

let array2 = [1, 2, 3];
array2.shift(); // Remove the first element from array2
console.log(array2); // Output: [2, 3]

fruits.sort(); // Sort the array alphabetically
console.log(fruits); // Output: ["Apple", "Banana", "Mango", "Orange"]

let newFruits = fruits.slice(1, 3); // Create a new array containing a portion of the fruits array
console.log(newFruits); // Output: ["Banana", "Mango"]

let months = ["Jan", "Mar", "April", "Jun"];
months.splice(1, 0, "Feb"); // Insert Feb starting at index 1 without removing any element
console.log(months); // Output: ["Jan", "Feb", "Mar", "April", "Jun"]
months.splice(4, 1, "May"); // Remove 1 element starting at index 4 and insert "May"
console.log(months); // Output: ["Jan", "Feb", "Mar", "Apr", "May"]