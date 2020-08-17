//prashant naganaboyina
//we wanna see how many games we have to play to get gold1.
//need 100 lp per division, plus winning 2/3 of the promos.
//we gain 21 lp per win, lose 19 per loss.
//have a 54% wr
//chance to autofill/not get mid is, lets say is around 20%. in that case it is a dodge.
//while div != gold 1, run the function that keeps on going until you reach promos.
//then run the promo games, if you fail lp loss if you win move up division.

let lpGain = 21; //how much LP do you gain per win?
let lpLoss = 17; //how much LP do you lose per loss?
let gameCounter = 0; //dont change this!!!
let promoWon = 0; //dont change this!!!
let tempLoss = 0; //dont change this!!!
let numDiv = 0; //dont change this!!!
let currentDiv = "Gold" + (3-numDiv).toString(); //What is your current rank? Replace Gold w rank and 3 with division.
let currentLp = 55; //what is current LP?
let totalGames = 0; //dont change this!!!
let winLossArray = [];
for (let x = 0; x < 100; x++){
    if (x <= 54){ //change 54 to your winrate
        winLossArray[x] = 'lpGain';
    }
    if (x >= 55){ //your winrate + 1;
        winLossArray[x] = 'lpLoss';
    }
}


for (let n = 0; n <= 100000; n++){ //you can change how many trials you want to run, I recommend this amount though.
    while (currentDiv != "Gold1"){ //change to goal rank
        currentDiv = "Gold" + (3-numDiv).toString();
        divisionGames();
    }
    console.log("Total Games ("+n+"): " + gameCounter);
    totalGames += gameCounter;
    reset();
}
console.log("Average Amount of Games: " + (totalGames/100000)); //amnt of trials


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

function reset(){ //change to your preferences
    lpGain = 21;
    lpLoss = 17;
    gameCounter = 0;
    promoWon = 0;
    tempLoss = 0;
    numDiv = 0;
    currentDiv = "Gold" + (3-numDiv).toString();
    currentLp = 55;
}