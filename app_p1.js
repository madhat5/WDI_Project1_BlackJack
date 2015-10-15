console.log('sim sim salabim');

// BlackJack vs1. //

//////////////////////////////////////////
//////////////////////////////////////////
// Variables //

// deck vars
// object gameDeck{} with key deck52(calls deckOfCards), shoe, and funtions() 
// array of card objects deckOfCards
// empty array deckShuffled
// array shoe (takes x number of deckShuffled)
// function() takes deck * x, shuffles and pushes to shoe  

// player vars 
// array playersAtTable, holds 4max player(call dealer then b2 = aiHand)
// object player{} with key bankRoll (set arbitrarily), playerBet, playerHand
// array playerHand holds player cards from dealCards

// dealer vars
// array dealerHand holds dealer cards from dealCards
// >>>>b2>> aiHand for user option play with ai/players vs dealer mix 

// // gameDeck holds/handles playable deck 
var deckCount = 1;
var gameShoe = [];

var gameDeck = {
	deck52: [],
	deckShuffled: [],
	shuffle: function(deck52) {
		for (var j, x, i = deck52.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
			deckShuffled[x]
		return deckShuffled;
	};
	shoe: function() {
		for (var x = 0; x <= deckCount; x++) {
			gameShoe[x] = deckShuffled.pop()
		}
		return gameShoe;
	},
};

//////////////////////////////////////////
//////////////////////////////////////////
// Functions //

// card functions
// --x--shuffle/randomize (already included in gameDeck{} object)
// createDeck function, gives deck52 an array
// softAce function controls ace value (ace = 11; if hand + ace > 21, ace = 1)
// dealCards takes 2 cards from shoe, gives them to playerHand (splice()) and dealerHand

// betting functions
// placeBet takes var userInput bet, subtracts userInput from bankRoll, adds userInput to playerBet, displays in bet input, calls 
// calcHand sums current playerHand[x], calculates after 2 cards dealt, and hit
	// if (initial) playerHand = 21, player wins (1.5x bet) 
	// if playerHand > 21, Bust!
// hitOrStand asks user after 2 card dealt if want to hit (+1 card) or stay (break) 
	// >>b1>> after first 2 cards dealt, user has double down option (can also double down on split)
	// >>b1>> split function if 2 initial cards === value > splits hand to var splitHand, runs hitOrStand for each card in splitHand
// compareHand compares current player hand to dealer:
	// if playerHand < 21 && > dealerHand, player wins, add bet x2 to bankRoll 
	// if playerHand < 21 && < dealerHand, dealer wins

// game functions
// startGame.click, takes user inputs (human players, ai) and waits for placeBet.click 
// resetGame.click, sets all game-inputs and bets to null, resets funds, goes to pre-startGame screen





//////////////////////////////////////////
//////////////////////////////////////////
// MISC NOTES //
// fund/bet changes as diff player takes turn
// do i need an empty array for house$ (user money lost)?