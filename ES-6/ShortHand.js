//ShortHand of key value pair if the key and varoiable name is same

let cat = 'Meow';
let dog = "woof";
let bird = "peet peet";

//ES-5 ways

let animals = {
    cat: cat,
    dog: dog,
    bird: bird
}

//ES-6 use just short hand to print values by just putting key of same name
let animalsES6 = {
    cat,
    dog,
    bird,
    lion: "Lion name"
}

console.log(animals);
console.log(animalsES6);