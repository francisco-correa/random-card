//  definir arrays
let card = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"]
let suite = ['&spades;', '&clubs;', '&hearts;', '&diams;']

// funcion para generar indice string, random es número
function randomCardNumber(a) {
    return card[a]
}

function randomSuiteNumber(b) {
    return suite[b]
}
// random card y random suite (número)
// DOM card y suite (inyección HTML - funcion - (numero->string) )
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