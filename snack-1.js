// 1. Funzione che somma due numeri
function sum(a, b) {
    return a + b;
}

// Test della funzione somma
console.log("Somma di 5 e 3:", sum(5, 3)); // Output: 8

// 2. Array (longBooks) con i libri che hanno più di 300 pagine
const longBooks = books.filter(book => book.pages > 300);

console.log("Libri con più di 300 pagine:", longBooks);
// Output: [{ title: "Advanced JS", pages: 500, ... }, { title: "CSS Secrets", pages: 320, ... }]

// 3. Array (longBooksTitles) che contiene solo i titoli dei libri in longBooks
const longBooksTitles = longBooks.map(book => book.title);

console.log("Titoli dei libri con più di 300 pagine:", longBooksTitles);
// Output: ["Advanced JS", "CSS Secrets"]

// 4. Stampare in console ogni titolo
console.log("Stampo ogni titolo:");
longBooksTitles.forEach(title => console.log(title));
// Output:
// Advanced JS
// CSS Secrets