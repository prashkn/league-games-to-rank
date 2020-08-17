# League of Legends Average Games to Rank
Predicts how many games you will have to play to reach a certain rank. User can change how many trials to run and their current rank, LP, and winrate.
<br>
Let say you are gold 4, and want to be gold 1. Simply enter your rank goal, current rank, winrate, and how much LP you win and lose a game, and the program will predict how many games you will have to play to win.
<br>
<br>
**How League Ranking Works**
<br>
There are 9 ranks. There are 4 divisions. Each rank has the 4 divisions. The ranks are Iron, Bronze, Silver, Gold, Platium, Diamond, Master, Grand Master, Challenger. The divisions go in descending order. i.e: Gold 2 is higher up than Gold 4, but Platinum 3 is higher than Gold 2.
<br>
Each win and loss wins or loses you "lp". You need 100 lp to advance to your promos. In your promos, you must win 2 out of 3 games to advance to the next division.
<br>
<br>
**How the Program Work**
<br>
We want the program to keep on running until the goal rank is met. 
<br>
We also need a loop to keep running until we reach 100 lp. So while the LP is under 100 we will keep on "playing games". An array is made with 100 elements. If the winrate is 55%, then 55 elements are "wins" and 45 elements are "loses". A random number generator picks a random element from the array, deciding whether the game played is a win or loss. You win x, or lose y lp points every game. 
<br>
We run this loop until we hit the promos. When we hit promos we do almost the same thing. Instead we run three games and keep track of how many of those 3 games we win. If we win 2 or more games, you move up a division and your lp goes down to 0lp. If we lose, our lp is 100-(amount of games lost * loss LP).
<br>
The divison loop and the promo loop is ran until we reach the division we want. Once the program is finished, we print out how many games it took. Then we run this program 10,000 times, and print the average amount of games it will take to reach our desired rank.
