// consegna dell'esercizio:
// Chiedi all’utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito19

// dichiarazione variabili
var nomeUtente, cognomeUtente, colorePreferito, numeroPreferito, passwordGenerata;

// per ciascuna variabile chiedo all'utente di inserirne il valore
nomeUtente = prompt('inserisci il tuo nome');
cognomeUtente = prompt('inserisci il tuo cognome');
colorePreferito = prompt('inserisci il tuo colore preferito');
numeroPreferito = prompt('inserisci il tuo numero preferito');

// unisco i valori ottenuti in un'unica stringa
passwordGenerata = nomeUtente + cognomeUtente + colorePreferito + numeroPreferito;

// modifico il file html di partenza per mostrare "la tua nuova passwrod è: passwordGenerata"
document.getElementById('password').innerHTML = 'La tua nuova password è: ' + passwordGenerata;
