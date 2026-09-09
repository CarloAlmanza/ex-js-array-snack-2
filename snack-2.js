// 1. Array (availableBooks) con tutti i libri disponibili
const availableBooks = books.filter(book => book.available === true);

console.log("Libri disponibili:", availableBooks);
// Output: [{ title: "Advanced JS", ... }, { title: "CSS Secrets", ... }]

// 2. Array (discountedBooks) con i libri disponibili scontati del 20%
const discountedBooks = availableBooks.map(book => {
    // Estraggo il prezzo numerico
    const originalPrice = parseFloat(book.price);
    // Calcolo il prezzo scontato del 20%
    const discountedPrice = originalPrice * 0.8;
    // Arrotondo al centesimo
    const roundedPrice = Math.round(discountedPrice * 100) / 100;

    return {
        ...book, // Copio tutte le proprietà originali
        price: roundedPrice + '€' // Aggiorno solo il prezzo
    };
});

console.log("Libri scontati del 20%:", discountedBooks);
// Output: 
// [
//   { title: "Advanced JS", price: "20€", ... },
//   { title: "CSS Secrets", price: "6.4€", ... }
// ]

// 3. Primo elemento di discountedBooks che ha un prezzo intero (senza centesimi)
const fullPricedBook = discountedBooks.find(book => {
    const price = parseFloat(book.price);
    // Verifico se il prezzo è un numero intero (senza decimali)
    return Number.isInteger(price);
});

console.log("Primo libro con prezzo intero:", fullPricedBook);
// Output: { title: "Advanced JS", price: "20€", ... }