// 1. Write a function, `AnimalTestUser`,
	//	that has one string parameter, `username`.
	//	It returns an object with a username property.
var AnimalTestUser = function(username) {
	var object = {};
    object.username = username;
	return object;
};

// ```javascript
// var testSheep = AnimalTestUser('CottonBall');
// console.log(testSheep); //{ username: 'CottonBall' }
// ```



// 2. In your `AnimalTestUser` function,
	// google the 'arguments' array
	//	create a check that sees how many arguments are passed.
	//	If there is more than one argument,
	//	create a property, `otherArgs` that is an array of the remaining arguments.
	//	Note: the `arguments` keyword is not a true array.
	//		it is an array-like object.

var AnimalTestUser = function(username) {
	//object literal
    var object = {};
    //create property in object
    object.username = username;
    //save arguments length into variable
    var argumentsPassed = arguments.length;
    //if there is more than argument, create 'otherArgs' property that is an array of the remaining arguments
	if (argumentsPassed > 0) {
		//create array to hold remaining arguments
		object.otherArgs = [];
		//loop through array and push remaining arguments into 'otherArgs' array
   		for (var i = 1; i < arguments.length; i++) {
    		object.otherArgs.push(arguments[i]);
		}
	}
	return object;
};

	// ```javascript
	// var testSheep = AnimalTestUser('CottonBall', {'loves dancing': true}, [1,2,3] );
	// console.log(testSheep); //{ username: 'CottonBall', otherArgs: [ {'loves dancing': true}, [1,2,3] ] }
	// 
// 3. Write a constructor function, `AnimalCreator`
	//		that returns a single animal object.
	//	The constructor function has 4 parameters:
	//		`username`, `species`, `tagline,` and `noises`.
	//	The animal object should have at least 5 properties:
	//		`username`, `species`, `noises`, `tagline`, and `friends`.
	//	The values should all be strings
	//		except `noises` and `friends`, which are arrays.


var AnimalCreator = function(username, species, tagline, noises) {
	var animal = {};
		animal.username = username;
		animal.species = species;
		animal.tagline = tagline;
	    animal.noises = noises;
		animal.friends = [];
	return animal;
};


var sheep = AnimalCreator('Cloud', 'sheep', 'You can count on me!', ['baahhh', 'arrgg', 'chewchewchew']);

var cow = AnimalCreator('Moo', 'cow', 'I make milk!', ['moo', 'moo', 'moo']);

var llama = AnimalCreator('Zeny', 'llama', 'I got a hump!', ['hump','hump','hump']);
	// console.log(sheep);
	//       // { username: 'Cloud',
	//       //  species: 'sheep',
	//       //  tagline: 'You can count on me!',
	//       //  noises: ['baahhh', 'arrgg', 'chewchewchew'],
	//       //  friends: []
	//       // }
	// ```

// 4. Write a function, `addFriend`
	//	that takes an animal object
	//		(like the one returned from the `AnimalCreator` function) and
	//	adds another animal object as a friend.

var addFriend = function(animal1,animal2){
	animal1.friends.push(animal2);
	console.log('animal1',animal1)
	return animal1;
};

	// ```javascript
addFriend(sheep, cow);
	//   console.log(sheep);
	//         // { username: 'Cloud',
	//         //  species: 'sheep',
	//         //  tagline: 'You can count on me!',
	//         //  noises: ['baahhh', 'arrgg', 'chewchewchew'],
	//         //  friends: [{username: 'Moo', species: 'cow'...}]
	//         // }
var threeAnimals = addFriend(sheep, llama);
console.log('all animals',threeAnimals);
	//   console.log(sheep);
	//         // { username: 'Cloud',
	//         //  species: 'sheep',
	//         //  tagline: 'You can count on me!',
	//         //  noises: ['baahhh', 'arrgg', 'chewchewchew'],
	//         //  friends: [{username: 'Moo', species: 'cow'...}, {username: 'Zeny', species: 'llama'...}]
	//         // }
	// ```



// 5. Change your `addFriend` function
	//	to only add the username of the friend,
	//	not the whole object.

	// ```javascript
	//   addFriend(sheep, cow);
	//   console.log(sheep);
	//         // { username: 'Cloud',
	//         //  species: 'sheep',
	//         //  tagline: 'You can count on me!',
	//         //  noises: ['baahhh', 'arrgg', 'chewchewchew'],
	//         //  friends: ['Moo']
	//         // }
	//   addFriend(sheep, llama);
	//   console.log(sheep);
	//         // { username: 'Cloud',
	//         //  species: 'sheep',
	//         //  tagline: 'You can count on me!',
	//         //  noises: ['baahhh', 'arrgg', 'chewchewchew'],
	//         //  friends: ['Moo', 'Zeny']
	//         // }
	// ```



// 6. Create a `myFarm` collection of at least 3 animal objects.
	//	Give them some friends using `addFriend`, too!

	// ```javascript
	// console.log(myFarm) //[{username: 'Cloud'...},{username: 'Zeny'...},{username: 'CottonBall'...}]
	// ```



// 7. Create a function, `addMatchesArray`,
	//	that takes a farm (array of animal objects) and
	//	adds a new property to each animal object called `matches`
	//		that is an empty array.
	//	Hint: you will need a loop.

	// ```javascript
	// addMatchesArray(myFarm);
	// console.log(myFarm[0]); // { username: 'Cloud',
	//         //  species: 'sheep',
	//         //  tagline: 'You can count on me!',
	//         //  noises: ['baahhh', 'arrgg', 'chewchewchew'],
	//         //  friends: ['Moo', 'Zeny'],
	//         //  matches: []
	//         // }
	// ```



// 8. Create a function, `giveMatches`,
	//	that takes a farm collection (aka an array of animal objects)
	//		that already has a matches property.
	//	It selects a name from the `friends` array and
	//		adds it to the `matches` array.
	//	You can choose how the selection is made
	//		(random, the first element, etc).
	//	Make sure all your animal objects have friends.

	// ```javascript
	// giveMatches(myFarm);
	// console.log(myFarm[0]); // { username: 'Cloud',
	//         //  species: 'sheep',
	//         //  tagline: 'You can count on me!',
	//         //  noises: ['baahhh', 'arrgg', 'chewchewchew'],
	//         //  friends: ['Moo', 'Zeny'],
	//         //  matches: ['Zeny']
	//         // }
	// ```


