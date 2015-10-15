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


// gameDeck holds/handles playable deck 
var deckCount = 1;
var gameShoe = [];

var gameDeck = {
	deck52: [],
	deckShuffled: [],
	shuffle: function(deck52) {
		for (var j, x, i = deck52.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
			deckShuffled[x];
		return deckShuffled;
	},
	shoe: function() {
		for (var x = 0; x <= deckCount; x++) {
			gameShoe[x] = deckShuffled.pop(); //sinon use .splice(x)
		}
		return gameShoe;
	},
};


//////////////////////////////////////////
////////////////////////////////////////
// Functions //

// card functions
// --x--shuffle/randomize (already included in gameDeck{} object)
// createDeck function, gives deck52 an array
// softAce function controls ace value (ace = 11; if hand + ace > 21, ace = 1)
// dealCards takes 2 cards from shoe, gives them to playerHand (splice()) and dealerHand

// betting functions
// placeBet.click takes var userInput bet, subtracts userInput from bankRoll, adds userInput to playerBet, displays in player bet div, calls deal cards
// calcHand sums current playerHand[x], calculates after 2 cards dealt, and hit
	// if (initial) playerHand = 21, player wins (1.5x bet) 
	// if playerHand > 21, Bust!
// hitOrStand asks user after 2 card dealt if want to hit (+1 card) or stay (break) 
	// >>b1>> after first 2 cards dealt, user has double down option (can also double down on split), then calcHand (doubleDown gives 1 card, can't hit anymore)
	// >>b1>> split function if 2 initial cards === value > splits hand to var splitHand, runs hitOrStand for each card in splitHand
// dealerPlay hits until hand <= 17
// compareHand compares current player hand to dealer:
	// if playerHand < 21 && > dealerHand, player wins, add bet x2 to bankRoll 
	// if playerHand < 21 && < dealerHand, dealer wins

// game functions
// startGame.click, takes user inputs (human players, ai) and waits for placeBet.click (game-setup && start button disappears)
	// alert('Please enter your bet')
// resetGame.click, sets all game-inputs and bets to null, resets funds, goes to pre-startGame screen


// createDeck gives back 52 card deck, with correct BJ values
// note: tie cards to deck52
function createDeck() {
	function card(value, name, suit){
		this.value = value;
		this.name = name;
		this.suit = suit;
}
	
	function deck(){
		this.names = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
		this.value = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11]
		this.suits = ['Hearts','Diamonds','Spades','Clubs'];
		var cards = [];
    
	    for( var x = 0; x < this.suits.length; x++ ) {
    	    for( var i = 0; i < this.names.length; i++ ) {
        	    cards.push( new card( this.value[i], this.names[i], this.suits[x]) );
        	}
    	}
    	console.log(cards);
    	// return cards;
		// console.log(deck52);
		// return deck52;
	}
	deck();
};

// set as function in playerHand, where checks cards in hand, for x < playerHand.length, if playerHand[x] === card.name('A'), replace value to 11
// refactor after calcHand done
// handles Ace behaviour
function softAce() {
	for (var x = 0; x < playerHand.length; x++) {
		if (playerHand[x] === card.name('A')) {
			if (calcHand > 21) {
				card.name('A').value // change to 1;
			}
		}
	}
};

// dealCards gives 2 cards to each player,then to dealer
function dealCards() {
	for (var x = 0; x <= 2; x++) {
		playerHand[x] = gameShoe.splice(x);
	}
	console.log(playerHand);
};

// placeBet function handles user bet input, bankroll update, bet display, card deal start
$('#bet-button').click() {
	var userInput = $('#bet-button').value; //not .innerHTML right?
	
	bankRoll -= userInput;
	playerBet = userInput;

	$('#player-bet').innerHTML = userInput;

	dealCards();
}	


//////////////////////////////////////////
//////////////////////////////////////////
// MISC NOTES //
// fund/bet changes as diff player takes turn
// do i need an empty array for house$ (user money lost)?