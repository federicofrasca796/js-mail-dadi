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
    // console.log(emailCheck)
    const body = document.querySelector('body');

    //controllo se l'elemento dell'array attualmente selezionato combaci con l'email inserita dall'utente
    if (email === emailCheck){
        // console.log('Sei dentro')
        
        //mostra a schermo l'esito del check.
        const Pass = `<h1><i>${email}</i> è nella mia lista. Sei dentro!</h1>`;
        // body.insertAdjacentHTML('afterbegin', Pass); //NOT WORKING
        body.innerHTML = Pass
        
    } else {
        // console.log('Sei fuori')
        
        //mostra a schermo l'esito del check.
        const notPass = `<h1>Non ho mai sentito parlare di <i>${email}</i>, mi spiace sei fuori. </h1>`;
        body.innerHTML = notPass
    }
    
}

//if (email === allowedUsers[])


/*
GIOCO DEI DADI
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/