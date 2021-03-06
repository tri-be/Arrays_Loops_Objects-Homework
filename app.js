// Easy going

// 1. Write a for loop that will log the numbers 1 through 20.

// for (let i=1; i<=20; i++) {
// 	console.log(i);
// }

// Get Even

// 1. Write a for loop that will log only the even numbers in 0 through 200.

// for (let i=0; i<=200; i+=2) {
// 	console.log(i);
// }

// Excited Kitten

// 1. Write code that logs "Love me, pet me! HSSSSSS!" 20 times.
// 2. For every even number in your loop, log "...human...why you taking pictures of me?...",
// "...the catnip made me do it...", or "...why does the red dot always get away..." at random.

// for (let i=1; i<=40; i++) {
// 	if (i % 2 === 0) {
// 		if (Math.random() <= 0.395) {
// 			console.log("...human...why you taking pictures of me?...");
// 		} else if (0.395 < Math.random() <= 0.695) {
// 			console.log("...the catnip made me do it...");
// 		} else if (0.695 < Math.random() < 1) {
// 			console.log("...why does the red dot always get away...");
// 		} else {console.log("Math.random() error")} // confirmed something is slipping through my Math.random() usage
// 	} else {console.log("Love me, pet me! HSSSSSS!");}
// }

// FizzBuzz 

// 1. Write a javascript application that logs all numbers from 1 - 100.
// 2. If a number is divisible by 3 log "Fizz" instead of the number.
// 3. If a number is divisible by 5 log "Buzz" instead of the number.
// 4. If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number.

// for (let i=1; i<= 100; i++) {
// 	if (i % 3 === 0 && i % 5 === 0) {
// 		console.log("FizzBuzz");
// 	} else if (i % 3 === 0) {
// 		console.log("Fizz");
// 	} else if (i % 5 === 0) {
// 		console.log("Buzz");
// 	} else console.log(i);
// }

// Getting to Know you

// Use the following arrays to answer the questions below (name, age, hometown):

const kenny = ["Kenny", 1000, "Austin"];
const jimHaff = ["Jim H", 16, "All cities"];
const reuben = ["Reuben", 22, "Durham"];
const jimClark = ["Jim C", 186, "LA"];
const ryan = ["Ryan", 65, "Denver"];

// 1. Jim Clark decides that Kenny can't be named "Kenny" anymore. Remove "Kenny" from the kenny array and replace it with "Gameboy".
kenny.shift();
kenny.unshift("Gameboy");
console.log(kenny);
// 2. Jim Clark just had his birthday; change jimClark's array to reflect him being a year older. Don't just hard code 187--pretend that you didn't already know that his age is 186, and write your code to just make him a year older than whatever age he was.
jimClark.splice[2]++;
console.log(jimClark); // unsure about this one
// 3. Ryan is Batman maybe. Or possibly Robin. Change Ryan's hometown from "Denver" to "Gotham City".
ryan.splice(2, 1, "Gotham City");
console.log(ryan);
// 4. Reuben left Durham 5 years ago to come to Chicago. First, remove "Durham" from Reuben's array, and then add "Chicago". (Note: remove and then add is different from simply changing the value at that index.)
reuben.pop();
reuben.push("Chicago");
console.log(reuben);
// 5. Jim Haff could be literally anywhere in the world. Remove "All cities" from his array, then pick any 3 cities you like, and add them to Jim's array. If you did it in 3 lines of code that's fine, but see if you can do it in one line of code
jimHaff.pop()
jimHaff.push("Istanbul", "Seoul", "Paris");
console.log(jimHaff);
// Bonus: Whoops! Jim Haff is actually only allowed to be in one of two cities. Whatever the first of the 3 cities for Jim Haff is now, remove it from the array using .splice()




