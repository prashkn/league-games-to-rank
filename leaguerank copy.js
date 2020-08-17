//we wanna see how many games we have to play to get gold1.
//need 100 lp per division, plus winning 2/3 of the promos.
//we gain 21 lp per win, lose 19 per loss.
//have a 54% wr
//chance to autofill/not get mid is, lets say is around 20%. in that case it is a dodge.
//while div != gold 1, run the function that keeps on going until you reach promos.
//then run the promo games, if you fail lp loss if you win move up division.

let lpGain = 21;
let lpLoss = 17;
let gameCounter = 0;
let promoWon = 0;
let tempLoss = 0;
let numDiv = 0;
let currentDiv = "Gold" + (3-numDiv).toString();
let currentLp = 55;
let totalGames = 0;
let winLossArray = [];
for (let x = 0; x < 100; x++){
    if (x <= 54){
        winLossArray[x] = 'lpGain';
    }
    if (x >= 55){
        winLossArray[x] = 'lpLoss';
    }
}


for (let n = 0; n <= 100000; n++){
    while (currentDiv != "Gold1"){
        currentDiv = "Gold" + (3-numDiv).toString();
        divisionGames();
    }
    console.log("Total Games ("+n+"): " + gameCounter);
    totalGames += gameCounter;
    reset();
}
console.log("Average Amount of Games: " + (totalGames/100000));


function divisionGames(){
    while (currentLp < 100) {
        let randomPick = Math.floor(Math.random()*100);
        if (randomPick == 100) {randomPick = 99;}
        if (winLossArray[randomPick] == 'lpGain'){
            currentLp += lpGain;
        } else {
            currentLp -= lpLoss;
        }
        gameCounter++;
    }
    runPromos();
}

function runPromos(){
    for (let u = 0; u < 3; u++){
        randomPick = Math.floor(Math.random()*100);
        if (randomPick == 100) {randomPick = 99;}
        if (winLossArray[randomPick] == 'lpGain'){
            promoWon++;
        } else {
            tempLoss += lpLoss;
        }
        gameCounter++;
    }
    if (promoWon >= 2){
        currentLp = 0;
        numDiv++;
    } else {
        currentLp = 100 - tempLoss;
    }
    promoWon = 0;
}

function reset(){
    lpGain = 21;
    lpLoss = 17;
    gameCounter = 0;
    promoWon = 0;
    tempLoss = 0;
    numDiv = 0;
    currentDiv = "Gold" + (3-numDiv).toString();
    currentLp = 55;
}