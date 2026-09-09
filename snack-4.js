// 1. Array (ages) che contiene le età degli autori dei libri
const ages = books.map(book => book.author.age);

console.log("Età degli autori:", ages);
// Output: [35, 20, 17, 50]

// 2. Calcola la somma delle età (agesSum) usando reduce
const agesSum = ages.reduce((accumulator, currentAge) => accumulator + currentAge, 0);

console.log("Somma delle età:", agesSum);
// Output: 122

// 3. Stampa in console l'età media degli autori dei libri
const averageAge = agesSum / ages.length;

console.log("Età media degli autori:", averageAge);
// Output: 30.5