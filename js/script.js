const submitBtm = document.getElementById("submitBtn");
const resetBtn = document.getElementById("resetBtn");

let passenger = document.querySelector("#passenger");
let distance = document.querySelector("#distance");
let age = document.querySelector("#age");

let passengerValue;
let distanceValue;
let ageValue;

submitBtm.addEventListener("click", function(e){

    e.preventDefault();

    console.log("Dati form")

    passengerValue = passenger.value;
    console.log(passengerValue);

    distanceValue = distance.value;
    console.log(distanceValue);

    ageValue = age.value;
    console.log(ageValue);

});

resetBtn.addEventListener("click", function(e){

    e.preventDefault();

    console.log("Dati resettati")

    passenger.value = "";
    distance.value = "";
    age.value = "";

    console.log(passenger.value);
    console.log(distance.value);
    console.log(age.value);

})

/* 
   Calcolo prezzo del viaggio:
    a) 0.21€ al km
    b) -20% se eta' < 18
    c) -40% se eta' > 65
*/

// Calcola il prezzo senza lo sconto
// const fullPrice = (distance * 0.21);
// console.log(`Il prezzo intero e' ${fullPrice} €.`);

// let discountPerc;
// let disocuntCheck = false;

// Verifica la correttezza dell'eta'
// if ((age > 0) && (age < 130)) {
//     if(age < 18) {
//         discountPerc = 20;
//         console.log(`Sei minorenne. Hai diritto ad uno sconto del ${discountPerc}%.`);
//         disocuntCheck = true;
//     }
//     else if (age >= 65){
//         discountPerc = 40;
//         console.log(`Sei over 65. Hai diritto ad uno sconto del ${discountPerc}%.`);
//         disocuntCheck = true;
//     }
//     else {
//         console.log("Per la tua fascia d'eta' non sono riservati sconti.");
//     }

    // Calcola il valore dello sconto (se lo sconto e' applicabile)
    // let discount = 0
    // if (disocuntCheck) {
    //     discount = fullPrice * (discountPerc / 100);
    //     console.log(`Il tuo sconto equivale a ${discount.toFixed(2)} €.`);
    // }

    // Calcola il prezzo finale
//     let price = fullPrice - discount;
//     console.log(`Il totale e' ${price.toFixed(2)} €.`);

// }
// else {
//     console.log("Inserisci un eta' valida!");
// }