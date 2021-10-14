/*
MAIL
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.
*/
// Strumenti: prompt | array (lista di chi può accedere) | IF condition | createElement (h1) -> innerHTML/insertAdjacentHTML

//Imposto una lista (array) di email di utenti che possono accedere.
const allowedUsers = ['federico.frasca796@gmail.com', 'marianoilvillano@tiscali.it', 'tizianotutor@hotmail.com'];

//Prendo l'email
const email = prompt("What's your email?");

//Imposto una variabile sentinella fuori dal ciclo for. Questo mi serve per poterla richiamare fuori, al termine del ciclo, quando dovrò stampare a schermo il risultato.
let check = false;

//Controllo se l'email inserita dall'utente rientra tra quelle concesse
for (let i = 0; i < allowedUsers.length; i++) {
    // controllo se l'elemento dell'array attualmente selezionato combaci con l'email inserita dall'utente
    if (email === allowedUsers[i]){
        check = true; 
    }
}

//Mostra a schermo l'esito del check.
// console.log(check);
if (check == true){
    const Pass = `Welcome back <i>${email}</i>, good to see you again.`;
    document.getElementById('mailResult').insertAdjacentHTML('afterbegin', Pass);
} else{
    const notPass = `I've never heard of <i>${email}</i>. Sorry, you're out.`;
    document.getElementById('mailResult').insertAdjacentHTML('afterbegin', notPass);
}



/*
GIOCO DEI DADI
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

//genero un numero random e lo inserisco dentro una variabile. Ripeto l'azione per due volte, una per il PC e una per il player.
// const playerValue = 
//controllo i due valori, se il valore uscito al player è maggiore di quello del PC, vince il player.
//altrimenti, vince il PC.


