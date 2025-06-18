// 1.
/**
 * @param {{firstName: string, lastName:string}} person
 * @return {String}
 */
function getFullName(person) {
    return `${person.firstName} ${person.lastName}`;
};

// 2.
/**
 * @param {String} words
 * @return {String[]} - unique words sorted
 */
function filterUniqueWords(words) {
    const isUniqueWord = (arr, word) => arr.indexOf(word) === arr.lastIndexOf(word);
    return words.split(" ").filter((word, _, arr) => isUniqueWord(arr, word)).sort();
};

// 3.
/**
 * @param {{name: string, grades: number[]}[]} students 
 * @return {String}
 */
function getAverageGrade(students) {
    const getAverage = (grades) => grades.reduce((acc, curr) => acc + curr) / grades.length;
    return students.map((student) => {
        return {
            name: student.name,
            averageGrade: getAverage(student.grades)
        };
    });
};

// getFullName
const person1 = { firstName: "John", lastName: "Doe" };
const person2 = { firstName: "Jane", lastName: "Smith" };
const person3 = { firstName: "Alice", lastName: "Johnson" };
const person4 = { firstName: "Bob", lastName: "Brown" };

console.log("Full name:", getFullName(person1));
console.log("Full name:", getFullName(person2));
console.log("Full name:", getFullName(person3));
console.log("Full name:", getFullName(person4));
console.log('\n');


// filterUniqueWords
const words1 = "apple banana apple orange banana kiwi";
const words2 = "dog cat bird cat dog fish";
const words3 = "one two three four five six seven";
const words4 = "red blue green red yellow green";

console.log("Unique words:", filterUniqueWords(words1));
console.log("Unique words:", filterUniqueWords(words2));
console.log("Unique words:", filterUniqueWords(words3));
console.log("Unique words:", filterUniqueWords(words4));
console.log('\n');

// getAverageGrade
const students = [
    { name: "Alice", grades: [90, 85, 88, 92] },
    { name: "Bob", grades: [70, 75, 78, 72] },
    { name: "Charlie", grades: [100, 95, 98, 97] }
];

console.log("Average grade:", getAverageGrade(students));
