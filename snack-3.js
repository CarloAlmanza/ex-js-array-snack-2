// 1. Array (authors) che contiene gli autori dei libri
const authors = books.map(book => book.author);

console.log("Autori:", authors);
// Output: 
// [
//   { name: 'Alice', age: 35 },
//   { name: 'Bob', age: 20 },
//   { name: 'Alice', age: 17 },
//   { name: 'Charlie', age: 50 }
// ]

// 2. Variabile booleana per verificare se tutti gli autori sono maggiorenni
const areAuthorsAdults = authors.every(author => author.age >= 18);

console.log("Tutti gli autori sono maggiorenni?", areAuthorsAdults);
// Output: false (perché Alice ha 17 anni)

// 3. Ordina l'array authors in base all'età (senza creare un nuovo array)
if (areAuthorsAdults) {
    // Se tutti sono maggiorenni -> ordine crescente
    authors.sort((a, b) => a.age - b.age);
} else {
    // Se c'è almeno un minorenne -> ordine decrescente
    authors.sort((a, b) => b.age - a.age);
}

console.log("Autori ordinati per età:", authors);
// Output (decrescente perché c'è un minorenne):
// [
//   { name: 'Charlie', age: 50 },
//   { name: 'Alice', age: 35 },
//   { name: 'Bob', age: 20 },
//   { name: 'Alice', age: 17 }
// ]