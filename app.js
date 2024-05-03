let kvaics = document.getElementById("ko")
let papper = document.getElementById("papir")
let ovlo = document.getElementById("ollo")

let eredmeny= document.getElementById("eredmeny")
let pontdiv = document.getElementById("pont")
let geppont = document.getElementById("geppont")

let pontszam=0;
let gepPontszam=0;

function ko(){
    koimg.style.border="2px solid red"
    papirimg.style.border="none";
    olloimg.style.border="none";
}
function papir(){
    koimg.style.border="none"
    papirimg.style.border="2px solid red";
    olloimg.style.border="none";
}
function ollo(){
    koimg.style.border="none"
    papirimg.style.border="none";
    olloimg.style.border="2px solid red";
}


function jatek(jatekos)
{
    let lehetosegek=["ko","papir","ollo"]
    let gepvalasztasa= lehetosegek[Math.floor(Math.random()*lehetosegek.length)]


    let gepvalasztasaelem=document.getElementById("gepValasztas")
    switch (gepvalasztasa) {
        case "ko":
            gepvalasztasaelem.src="./ko.webp"
            break;
        case "papir":
            gepvalasztasaelem.src="./papir.png"
            break;
        case "ollo":
            gepvalasztasaelem.src="./ollo.webp"
            break;
        default:
            gepvalasztasa.src=""
            break;
    }

}