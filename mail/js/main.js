
/*
Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che “cosa” ci serve?
Consigli del giorno:
1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
3. si ma noi cosa vogliamo fare?
4. torniamo a scrivere in italiano
5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo “a mano”
Buon lavoro e buon divertimento! :faccia_leggermente_sorridente:
** BONUS: Usiamo un input e un bottone per inserire la mail e poi mostriamo i risultati in pagina. **
*/


/* cosa farei:
ho una lista di email.
chiedo la mail all'utente.
scorro la lista
    se la mail è diversa da elemento lista.
    se l'ho trovata ok.
    altrimenti messaggio di errore.
*/

let listaMail = ['gigi.rossi@evviva.it', 'mario.bianchi@oiboi.com', 'bianca.verdi@lala.com'];

const richiestaMail = prompt('Inserisci la tua mail');

let mailTrovata;

for (let i = 0; i <= listaMail.length - 1; i++){
  
  if( richiestaMail == listaMail[i] ){
    mailTrovata = listaMail[i];
    console.log(`Mail inserita: ${mailTrovata}`);
  }

}

if( mailTrovata == richiestaMail){
  console.log(`La mail: ${mailTrovata} è stata accettata.`);
}else{
   console.log('Email non valida');
}



