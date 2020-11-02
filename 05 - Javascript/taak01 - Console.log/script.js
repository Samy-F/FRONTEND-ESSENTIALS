console.log('mijn naam is Samy');

let voornaam = 'Samy';
let achternaam = 'Farahat';
let leeftijd = 17;
let ikBenStemGerechtig = false;
let ikMagLegaalAlcoholKopen = false;
let ikMagBrommerRijden = false;
let SoftwareOntwikkeling = true;

let persoon = {
    voornaam: 'Samy',
    achternaam: 'Farahat',
    leeftijd: 17,
    ikBenStemGerechtig: false,
    ikMagLegaalAlcoholKopen: false,
    ikMagBrommerRijden: false,
    SoftwareOntwikkeling: true
};

console.log(persoon);
console.log(persoon.voornaam);
console.log(`Mijn naam is ${persoon.voornaam} ${persoon.achternaam} en mijn leeftijd is ${persoon.leeftijd} jaar`);

let mijnLeeftijd = 17;
let stemGerechtigeleeftijd = 18;

if(mijnLeeftijd >= stemGerechtigeleeftijd) {
    alert("Je mag stemmen met de verkiezingen");
}


let stopLichtKleur = "rood";

if(stopLichtKleur == 'rood') {
    console.log('je moet stoppen!')
} else {
    console.log('je kan doorrijden')
}