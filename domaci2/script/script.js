function promeni(f){
     if(f.glumci[0].checked){
         document.getElementById("slika").innerHTML = "<img src = 'img/igra/tony.jpg'>";
         document.getElementById("slika").style.display = 'inline';
     }
     if(f.glumci[1].checked){
        document.getElementById("slika").innerHTML = "<img src = 'img/igra/carmela.jpg'>";
        document.getElementById("slika").style.display = 'inline';
    }
    if(f.glumci[2].checked){
        document.getElementById("slika").innerHTML = "<img src = 'img/igra/cristopher.jpg'>";
        document.getElementById("slika").style.display = 'inline';
    }
    if(f.glumci[3].checked){
        document.getElementById("slika").innerHTML = "<img src = 'img/igra/jennifer.jpg'>";
        document.getElementById("slika").style.display = 'inline';
    }
    if(f.glumci[4].checked){
        document.getElementById("slika").innerHTML = "<img src = 'img/igra/silvio.jpg'>";
        document.getElementById("slika").style.display = 'inline';
    }
    if(f.glumci[5].checked){
        document.getElementById("slika").innerHTML = "<img src = 'img/igra/paulie.jpg'>";
        document.getElementById("slika").style.display = 'inline';
    }

}

function p(){
    document.getElementById("slika").style.display = 'none';
}

function info(){
    window.alert("Po ocenama serija Sopranovi zauzima 14. mesto sa prosecnom ocenom 9.2. Neke od serija sa visom ocenom su: Breaking Bad, Game of Thrones, The wire...");
}

var today = new Date();
var zadnjiemmy = new Date(2007,9,16);
var prviemmy = new Date(1999,9,12);
var gandolf = new Date(2000,3,13);
var s =  "Od prvog emija ove serije proslo je "+razlikaUDatumima(today,prviemmy)+" dana. Od poslednjeg "+razlikaUDatumima(today,zadnjiemmy)+". Dok je od nagrade Gandolfinija za glavnu ulogu proslo "+razlikaUDatumima(today,gandolf)+" dana.";

function razlikaUDatumima(date1,date2){
    return Math.abs(Math.round((date2-date1)/(1000*60*60*24)));
}

function datumi(){
    document.getElementById("story").innerHTML = s;
}

function scene(){
    var a = Math.floor(Math.random()*5);
    
    switch(a){
        case 0:
            document.getElementById("scena").innerHTML = "<img src = 'img/scene/0.jpg'>";
            break;
        case 1:
            document.getElementById("scena").innerHTML = "<img src = 'img/scene/1.jpg'>";
            break;
        case 2:
            document.getElementById("scena").innerHTML = "<img src = 'img/scene/2.jpg'>";
            break;
        case 3:
            document.getElementById("scena").innerHTML = "<img src = 'img/scene/3.jpg'>";
            break;
        case 4:
            document.getElementById("scena").innerHTML = "<img src = 'img/scene/4.jpg'>";
            break;
    }
}



















