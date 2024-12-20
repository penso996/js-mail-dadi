// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

const userRandomNumber = Math.floor(Math.random() * 6) + 1;
console.log("Il numero random che ti è stato assegnato è: " + userRandomNumber);

const pcRandomNumber = Math.floor(Math.random() * 6) + 1;
console.log("Il numero random assegnato al computer è: " + pcRandomNumber);

if (userRandomNumber > pcRandomNumber) {
    console.log("Hai vinto!");
}
else if (pcRandomNumber > userRandomNumber) {
    console.log("Hai perso!");
}
else {
    console.log("C'è stato un pareggio! Riaggiorna la pagina per tentare la fortuna.");
}