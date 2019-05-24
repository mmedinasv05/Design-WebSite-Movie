function mostrar(e){
    if(e == "topRated") {
        document.getElementById('topRated').setAttribute('style','display:block;');
        document.getElementById('newReleases').setAttribute('style','display:none;');
        document.getElementById('comingSoon').setAttribute('style','display:none;');
    }
    if(e == "newReleases") {
        document.getElementById('topRated').setAttribute('style','display:none;');
        document.getElementById('newReleases').setAttribute('style','display:block;');
        document.getElementById('comingSoon').setAttribute('style','display:none;');
        
    }
    if(e == "comingSoon") {
        document.getElementById('topRated').setAttribute('style','display:none;');
        document.getElementById('newReleases').setAttribute('style','display:none;');
        document.getElementById('comingSoon').setAttribute('style','display:block;');
        
    }
}

function validar(){
    var name = document.getElementById('recipient-name').value;
    var email = document.getElementById('recipient-email').value;
    var msg = document.getElementById('message-text').value;

    if(name === "") {
        alert("el campo nombre esta vacio");
        return false;
    }
    if(email === "") {
        alert("el campo correo esta vacio");
        return false;
    }
    if(msg === "") {
        alert("Escriba un mensaje por favor");
        return false;
    }
}