// Inserire n. km da percorrere
const distance = parseInt(prompt("Quanti km vuoi percorrere?"));

// Inserire eta' passeggero
const age = parseInt(prompt("Quanti anni hai?"));

console.log(`Dati viaggio:
            Km da percorrere: ${distance}
            Eta': ${age}`);


/* 
   Calcolo prezzo del viaggio:
    a) 0.21€ al km
    b) -20% se eta' < 18
    c) -40% se eta' > 65
*/

// Calcola il prezzo senza lo sconto
const fullPrice = (distance * 0.21);
console.log(`Il prezzo intero e' ${fullPrice} €.`);

let discountPerc;
let disocuntCheck = false;

// Verifica la correttezza dell'eta'
if ((age > 0) && (age < 130)) {
    if(age < 18) {
        discountPerc = 20; // -->  20%
        console.log(`Sei minorenne. Hai diritto ad uno sconto del ${discountPerc}%.`);
        disocuntCheck = true;
    }
    else if (age >= 65){
        discountPerc = 40; // -->  40%
        console.log(`Sei over 65. Hai diritto ad uno sconto del ${discountPerc}%.`);
        disocuntCheck = true;
    }
    else {
        console.log("Per la tua fascia d'eta' non sono riservati sconti.");
    }

    // Calcola il valore dello sconto (se lo sconto e' applicabile)
    let discount = 0
    if (disocuntCheck) {
        discount = fullPrice * (discountPerc / 100);
        console.log(`Il tuo sconto equivale a ${discount.toFixed(2)} €.`);
    }

    // Calcola il prezzo finale
    let price = fullPrice - discount;
    console.log(`Il totale e' ${price.toFixed(2)} €.`);

}
else {
    console.log("Inserisci un eta' valida!");
}