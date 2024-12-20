// Mail
// Crea una lista di email di invitati ad una festa.
// Chiedi all'utente la sua email,
// Controlla che sia nella lista di chi può accedere,
// Stampa un messaggio appropriato sull'esito del controllo, utilizzando un ciclo for.

const allowedEmails = ["andrea.penso@gmail.com", "simone.icardi@gmail.com", "luigi.micco@gmail.com"];

const userMail = prompt("Inserire la propria eMail");
console.log("La eMail che hai inserito è: " + userMail);

let isAllowed = false;
for (let i = 0; i < allowedEmails.length; i++) {
    if (userMail === allowedEmails[i]) {
        isAllowed = true;
    }
}

if (isAllowed === true) {
    console.log("Entra pure, sei nella lista!");
}
else {
    console.log("Mi dispiace, non sei invitato.");
}