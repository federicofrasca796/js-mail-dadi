/*
MAIL
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.
*/

// Strumenti: prompt | array (lista di chi può accedere) | IF condition | createElement (h1) -> innerHTML/insertAdjacentHTML
// imposto una lista (array) di email di utenti che possono accedere.
const allowedUsers = ['federico.frasca796@gmail.com', 'marianoilvillano@tiscali.it', 'tizianotutor@hotmail.com']
// console.log(allowedUsers);

// prendo l'email
const email = prompt("What's your email?")

//controllo se l'email inserita dall'utente rientra tra quelle concesse
for (let i = 0; i < allowedUsers.length; i++) {
    //creo una variabile che prenda tutti i singoli elementi dell'array allowedUsers
    const emailCheck = allowedUsers[i];
    
    //controllo se l'elemento dell'array attualmente selezionato combaci con l'email inserita dall'utente
    if (email === emailCheck){
        //mostra a schermo l'esito del check.
        //ATTENZIONE: potrebbe restituire tanti messaggi tanti quanti sono gli elementi dell'array. Se usassimo innerHTML questo andrebbe a sovrascrivere i messaggi, mostrandoci solo l'ultimo check...next problema: "L'ultimo check potrebbe non coincidere con l'email inserita, ma il prima check si."
        
    }
    
}

//if (email === allowedUsers[])


/*
GIOCO DEI DADI
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/