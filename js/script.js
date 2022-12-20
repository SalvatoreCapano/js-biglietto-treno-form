// Pulsanti di submit e reset
const submitBtn = document.getElementById("submitBtn");
const resetBtn = document.getElementById("resetBtn");

// Inputs
let passenger = document.querySelector("#passenger");
let distance = document.querySelector("#distance");
let age = document.querySelector("#age");

// Variabili che in seguito conterranno il Value degli input
let passengerValue;
let distanceValue;
let ageValue;

// Sezione dell'HTML che contiene i biglietti
const ticketsSection = document.querySelector("#ticketsSection");

// In seguito al controllo dell'eta' conterra': Bambini | Standard | Anziani
let ticketType;

// Prezzo finale
let price = 0;

submitBtn.addEventListener("click", function(e){

    // Accesso ai value degli input
    console.log("Dati form")

    passengerValue = passenger.value;
    console.log(passengerValue);

    distanceValue = distance.value;
    console.log(distanceValue);

    ageValue = age.value;
    console.log(ageValue);

    // Controllo dell'inserimento dei dati
    if (passengerValue != "" && distanceValue != "" && ageValue != "") {
        e.preventDefault();

        ticketsSection.style.display = "block";

        /* 
        Calcolo prezzo del viaggio:
        a) 0.21€ al km
        b) -20% se eta' < 18
        c) -40% se eta' > 65
        */

        // Calcola il prezzo senza lo sconto
        const fullPrice = (distanceValue * 0.21);
        console.log(`Il prezzo intero e' ${fullPrice} €.`);

        // Percentuale di sconto da applicare
        let discountPerc;
        // Servira' per controllare se e' necessario applicare uno sconto o meno
        let disocuntCheck = false;

        // Verifica la correttezza dell'eta' e applica i relativi sconti
        if ((ageValue > 0) && (ageValue < 130)) {
            if(ageValue < 18) {
                discountPerc = 20;
                console.log(`Sei minorenne. Hai diritto ad uno sconto del ${discountPerc}%.`);
                disocuntCheck = true;
                ticketType = "bambini";
            }
            else if (ageValue >= 65){
                discountPerc = 40;
                console.log(`Sei over 65. Hai diritto ad uno sconto del ${discountPerc}%.`);
                disocuntCheck = true;
                ticketType = "anziani";
            }
            else {
                console.log("Per la tua fascia d'eta' non sono riservati sconti.");
                ticketType = "standard";
            }

            // Calcola il valore dello sconto (se lo sconto e' applicabile)
            let discount = 0
            if (disocuntCheck) {
                discount = fullPrice * (discountPerc / 100);
                console.log(`Il tuo sconto equivale a ${discount.toFixed(2)} €.`);
            }

            // Calcola il prezzo finale
            price = fullPrice - discount;
            console.log(`Il totale e' ${price.toFixed(2)} €.`);

        }
        else {
            console.log("Inserisci un eta' valida!");
        }

        // Genera un numero di carrozza casuale tra 1 e 10
        const carriageNumber = (Math.random() * (10 - 1) + 1).toFixed(0);
        console.log("Numero Carrozza: ", carriageNumber);

        // Genera un codice CP casuale tra 90000 e 99999
        const code = (Math.random() * (99999 - 90000) + 90000).toFixed(0);
        console.log("Codice CP: ", code);

        // Seleziona il container dei tickets e crea un elemento al suo interno
        const ticketsContainer = document.querySelector(".ticketsContainer");
        ticketsContainer.innerHTML = `<div class="ticketData">
                                
                                            <div class="ticketName">
                                                <h4>nome passeggero</h4>
                                                ${passengerValue}
                                            </div>

                                            <div class="ticketClass">
                                                <h4>offerta</h4>
                                                biglietto ${ticketType}
                                            </div>

                                            <div class="ticketCarriage">
                                                <h4>carrozza</h4>
                                                ${carriageNumber}
                                            </div>

                                            <div class="ticketCode">
                                                <h4>codice CP</h4>
                                                ${code}
                                            </div>

                                            <div class="ticketPrice">
                                                <h4>costo biglietto</h4>
                                                ${price.toFixed(2)}€
                                            </div>

                                        </div>`
    }

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

    ticketsSection.style.display = "none";

});