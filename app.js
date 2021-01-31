//  arrays definition
let card = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"]
let suite = ['&spades;', '&clubs;', '&hearts;', '&diams;']

// a function in order to generate string-index (random is a number)
function randomCardNumber(a) {
    return card[a]
}

function randomSuiteNumber(b) {
    return suite[b]
}
// random card y random suite (number)
// DOM card & suite (HTML inyection - function - (number to string))
// colors '&hearts;', '&diams;' = red
// rotate bottom-suite to 180 degrees
window.onload = () => {
    randomCard = Math.floor(Math.random() * card.length);
    randomSuite = Math.floor(Math.random() * suite.length);
    document.getElementById("number").innerHTML = randomCardNumber(randomCard);
    document.getElementById("top-suite").innerHTML = randomSuiteNumber(randomSuite);
    document.getElementById("bottom-suite").innerHTML = randomSuiteNumber(randomSuite);
    if (suite[randomSuite] == '&hearts;' || suite[randomSuite] == '&diams;') {
        document.getElementById("top-suite").style.color = "#ff0000";
        document.getElementById("bottom-suite").style.color = "#ff0000";
    }
    document.getElementById("bottom-suite").style.transform = "rotate(180deg)";

}