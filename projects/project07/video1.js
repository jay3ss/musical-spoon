/*
let name = "Daniel";
let eyeColor01 = "Blue";
let age01 = 27;

let name02 = "John";
let eyColor02 = "Brown";
let age02 = 35;

let name03 = "Jane";
let eyeColor03 = "Brown";
let age03 = 47;

let updateAge = function(age) {
	return ++age;
}
*/

/*
let person = new Object();

person.name = "Daniel";
person.eyeColor = "Blue";
person.age = 27;
person.updateAge = function () {
	return ++person.age;
}

console.log(person.age);
person.updateAge();
console.log(person.age);
*/

let person = {
	name: "Daniel",
	eyeColor: "Blue",
	age: 27,
	updateAge: function() {
		return ++person.age;
	}
}
