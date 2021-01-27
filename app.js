//  definir arrays
let card = ["Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King"]
let suite = ['&spades;', '&clubs;', '&hearts;', '&diams;']

// funcion para generar indice string, random es número
function randomCardNumber(a) {
    return card[a]
}
function randomSuiteNumber(b) {
    return suite[b]
}
// random numero y random suite (número)
// DOM numero y suite (inyección HTML - funcion - (numero-string) )
// colores '&hearts;', '&diams;' = red
// rotar el suite_2 a 180 grados
window.onload = () => {
    randomCard = Math.floor(Math.random() * card.length);
    randomSuite = Math.floor(Math.random() * suite.length);
    document.getElementById("number").innerHTML = randomCardNumber(randomCard);
    document.getElementById("suite").innerHTML = randomSuiteNumber(randomSuite);
    document.getElementById("suite_2").innerHTML = randomSuiteNumber(randomSuite);
    if (suite[randomSuite] == '&hearts;' || suite[randomSuite] == '&diams;') {
        document.getElementById("suite").style.color = "#ff0000";
        document.getElementById("suite_2").style.color = "#ff0000";
    }
    document.getElementById("suite_2").style.transform = "rotate(180deg)";

}


// DOM - evento onload - suite - pinta
// other functions
//console.log(
//    Pinta: ${pinta[randomPinta]}
//    Numero: ${numero[randomPinta]}
//)