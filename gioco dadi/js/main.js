
/*
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



let numeroCasuale;

for(let i = 1; i <= 6; i++){
  numeroCasuale = Math.floor(Math.random() * 6) + 1;
}

console.log(`Giocata computer: ${numeroCasuale}`);

let numeroUtente = parseInt(prompt('Scrivi un numero da 1 a 6'));
console.log(`Giocata utente: ${numeroUtente}`);


if(numeroCasuale > numeroUtente){
  console.log('Il computer vince!');
}else if (numeroCasuale < numeroUtente){
  console.log('Utente vince!');
}else if (numeroCasuale == numeroUtente){
  console.log('Partita finita in pari!');
}





