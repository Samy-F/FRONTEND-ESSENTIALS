function $(x) {
    return document.querySelector(x);
}

let insert = () => {
    let persoon = {
        vnaam: prompt('Wat is je voornaam?'),
        anaam: prompt('Wat is je achternaam?'),
        email: prompt('Wat is je email?'),
        ltijd: prompt('Wat is je leeftijd?'),
        wplaats: prompt('Waar woon je?'),
        skills: prompt('Geef een coding skills een cijfer van (1 / 10)')
    }
    console.log(persoon);
    
    switch (Number(persoon.ltijd)) {
        case 16:
            document.body.style.backgroundColor = 'orange';
            break;
        case 17:
            //document.body.style.backgroundColor = 'blue';
            break;
        case 18:
            document.body.style.backgroundColor = 'gold';
            break;
        case 19:
            document.body.style.backgroundColor = '#4B5320';
            break;
    }
    
        
    $('#nav_name').innerHTML = `${persoon.vnaam} ${persoon.anaam}`;
    
    $('#vnaam').innerHTML = persoon.vnaam;
    $('#anaam').innerHTML = persoon.anaam;
    $('#email').innerHTML = persoon.email;
    $('#ltijd').innerHTML = persoon.ltijd;
    $('#wplaats').innerHTML = persoon.wplaats;
    $('#skills').innerHTML = persoon.skills;
    
}
    


insert();