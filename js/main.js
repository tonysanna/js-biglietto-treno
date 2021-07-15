var prezzoBigliettoByKm = 0.21;

var casualAge = parseInt(prompt("Inserisci la tua età"));

var distanza = parseInt(prompt("Inserisci il numero dei Km del tuo viaggio"));

if (casualAge < 18) {
    var smallAgePrezzoBiglietto = prezzoBigliettoByKm * distanza * 0.8;
    document.getElementById('prezzoBiglietto').innerHTML = 'Il prezzo del bigletto: ' + smallAgePrezzoBiglietto.toFixed(2) +'€';
} else if (casualAge > 65) {
    var oldPrezzoBiglietto = prezzoBigliettoByKm * distanza * 0.6;
    document.getElementById('prezzoBiglietto').innerHTML = 'Il prezzo del bigletto: ' + oldAgePrezzoBiglietto.toFixed(2) +'€';
} else {
    var normalPrezzoBiglietto = prezzoBigliettoByKm * distanza;
    document.getElementById('prezzoBiglietto').innerHTML = 'Il prezzo del bigletto: ' + normalPrezzoBiglietto.toFixed(2) +'€';

}