// STEP 1
//class cat {
//    constructor(name, age) {
//        this.name = name
//    }
//}

//const myCat = new cat ('Midnight')

//const dog = class {
//    constructor(name) {
//        this.name = name
//    }
//}

//const myDog = new dog ('Odie')

// STEP 2
//class Cat {
//    constructor(name) {
//        this.name = name
//    }
//}

//const Dog = class {
//    constructor(name) {
//        this.name = name
//    }
//}

//const myCat = new Cat('Sophie')

//const myDog = new Dog('George')

// STEP 3
//class Animal {
//    constructor() {
//    }
//    messageDisplayed() {
//        console.log('The Animal has been created.')
//    }
//}

//const myAnimal = new Animal()
//myAnimal.messageDisplayed()

// STEP 4
//class Animal {
//    constructor(message) {
//        this.message = message
//    }
//    displayMessage() {
//        console.log(this.message)
//    }
//}

//const myAnimal = new Animal('The Animal has been created.')
//myAnimal.displayMessage()

// STEP 5
//class Animal {
//    constructor(type, breed, color, height, length) {
//        this.type = type
//        this.breed = breed
//        this.color = color
//        this.height = height
//        this.length = length
//    }
//}

//const myAnimal = new Animal('Gerbil', 'Fat Tailed', 'Gray', '4-in.', '2-in.')
//console.log(myAnimal)

// STEP 6
//class Animal {
//    constructor(type, breed, color, height, length) {
//        this.type = type
//        this.breed = breed
//        this.color = color
//        this.height = height
//        this.length = length
//    }
//}

//const myAnimal = new Animal('Dog', 'Jack-Russel Terrier', 'White & Brown', '10-in.', '18-in.')

//for(let property in myAnimal) {
//    console.log(`${property} ${myAnimal[property]}`)
//}

// STEP 7
//class Animal {
//    constructor(type, breed, color, height, length) {
//        this.type = type
//        this.breed = breed
//        this.color = color
//        this.height = height
//        this.length = length
//    }
//speak(){
//    if(this.type === 'Dog')
//        return `The ${this.color} dog is barking!`
//    else if(this.type === 'Cat') {
//        return `The ${this.color} cat is meowing!`
//        }
//    }
//}

//const myAnimalDog = new Animal('Dog', 'Jack-Russel Terrier', 'White & Brown', '10-in.', '18-in.')
//console.log(myAnimalDog.speak())
//const myAnimalCat = new Animal('Cat', 'Tabby', 'Orange', '7-in.', '15-in.')
//console.log(myAnimalCat.speak())

// STEP 8
class Animal {
    #type
    #breed
    #color
    #height
    #length

    constructor(type, breed, color, height, length) {
        this.#type = type
        this.#breed = breed
        this.#color = color
        this.#height = height
        this.#length = length
}
#checkType() {
    return this.#type === 'Dog' ? 'Dog' : 'Cat'
}

speak() {
    return `The ${this.#checkType()} has made a noise`
    }
}

const myAnimalDog = new Animal('Dog', 'Jack-Russel Terrier', 'White & Brown', '10-in.', '18-in.')
console.log(myAnimalDog.speak())

const myAnimalCat = new Animal('Cat', 'Tabby', 'Orange', '7-in.', '15-in.')
console.log(myAnimalCat.speak())
