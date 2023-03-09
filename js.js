function Czas() {
    const today = new Date();
    let godz = today.getHours();
    let min = today.getMinutes();
    let sek = today.getSeconds();

    document.getElementById("godz").innerHTML = godz;

    if(sek < 10){
        document.getElementById("sek").innerHTML = ("0"+sek);
    }
    else{
    document.getElementById("sek").innerHTML = sek;
    }
    if(min < 10){
        document.getElementById("min").innerHTML = ("0"+min);
    }
    else{
    document.getElementById("min").innerHTML = min;
    }
    if(godz < 10){
        document.getElementById("godz").innerHTML = ("0"+godz);
    }
    else{
    document.getElementById("godz").innerHTML = godz;
    }
    
}

function F5() {
    setTimeout(() => {
        Czas();
        F5();
    }, 1000);
}

