
// Bot Antworten beim Spielen von Schere,Stein,Papier
function getBotResponse(input) {
    //rock paper scissors
    if (input == "Stein") {
        return "Papier";
    } else if (input == "Papier") {
        return "Schere";
    } else if (input == "Schere") {
        return "Stein";
    }

    // einfache Antworten
    if (input == "Hallo") {
        return "Moin !";
    } else if (input == "Tschüss") {
        return "Einen schönen Tag noch !";
    } else {
        return "Versuch etwas anderes zu fragen !";
    }
}