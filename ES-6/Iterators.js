// Iterators : filter, map, some and reduce

let persons = [
    {id : 1, name : "John",  tags : "javascript"},
    {id : 2, name : "Alice", tags : "javascript"},
    {id : 3, name : "Roger", tags : "java"},
    {id : 4, name : "Adam",  tags : "javascript"},
    {id : 5, name : "Alex",  tags : "java"}
];

// Filter : give me the list of persons who's tag is javascript
// persJavaScript is not manipulated in base object

let persJavaScript = persons.filter((person) => person.tags === "javascript");

console.log(persJavaScript);

// Map : give me the list of persons who's tag is javascript
// persJavaScript is not manipulated in base object

let persNamesJavaScript = persons.map((person) => person.tags === "javascript" ? person.name : "").filter(obj => obj != "");

// ? -> if, : -> else

console.log(persNamesJavaScript);

console.log(persons);

// Some : short circuit, when it finds value you are looking for it'll
//        stop there and return true/false

let hasPersonWithID10 = persons.some((person) => person.id === 10);

console.log(hasPersonWithID10);

let isBlaz = persons.some(person => person.name === "Blaz");

console.log(isBlaz);

// Reduce : iterates every object and takes the value returned from the first
//          operation as current object

var uniqueTags = persons.reduce((currentItem, personObj) => {
    currentItem[personObj.tags] = currentItem[personObj.tags] ? currentItem[personObj.tags] + 1 : 1;
    return currentItem;
}, {});

console.log(uniqueTags);

//list the person id's, having java as their tags
//find if there are csharp persons in list
//what is the tag of person with name adam

let javaTagsAndIds = persons.map((person) => person.tags === "java" ? person.id : "").filter(obj => obj != "");
console.log(javaTagsAndIds);

let isCSharp = persons.some(person => person.tags === "csharp");
console.log(isCSharp);

let personTag = persons.map((person) => person.name === "Adam" ? person.tags : "").filter(obj => obj != "");
console.log(personTag);


