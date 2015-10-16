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


// shoeDeck holds/handles playable deck 
var deckCount = 1;
var gameShoe = [];
var playDeck;

var shoeDeck = {
	// deck52: [],
	// deckShuffled: [],
	// // this goes into gameDeck
	// shuffle: function(deck52) {
	// 	for (var j, x, i = deck52.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	// 		deckShuffled[x];
	// 	return deckShuffled;
	// },
	deck: gameDeck,
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
// --x--shuffle/randomize (already included in shoeDeck{} object)
// gameDeck function, gives deck52 an array -----------------------<<<<<<<still true??????
// softAce function controls ace value (ace = 11; if hand + ace > 21, ace = 1)
// --x--dealCards takes 2 cards from shoe, gives them to playerHand (splice()) and dealerHand

// betting functions
// --x--placeBet.click takes var userInput bet, subtracts userInput from bankRoll, adds userInput to playerBet, displays in player bet div, calls deal cards
// --x--calcPlayer sums current playerHand[x], calculates after 2 cards dealt, and hit
	// --x--if (initial) playerHand = 21, player wins (1.5x bet) 
	// --x--if playerHand > 21, Bust!
// hitOrStand
// --x--hit.click user after 2 card dealt if want to hit (+1 card) or stand.click stand calls dealerPlay
	// >>b1>> after first 2 cards dealt, user has double down option (can also double down on split), then calcPlayer (doubleDown gives 1 card, can't hit anymore)
	// >>b1>> split function if 2 initial cards === value > splits hand to var splitHand, runs hitOrStand for each card in splitHand
// dealerPlay hits until hand <= 17
	// also calcDealer using dealerHand
	// combine calcPlayer/hit/stand
// --x--compareHand compares current playerHand to dealer:
	// if calcPlayer < 21 && > calcDealer, player wins, add bet x2 to bankRoll 
	// if calcPlayer < 21 && < calcDealer, dealer wins

// game functions
// startGame.click, takes user inputs (human players, ai) and waits for placeBet.click (game-setup && start button disappears)
	// alert('Please enter your bet')
// resetGame.click, sets all game-inputs and bets to null, resets funds, goes to pre-startGame screen


// gameDeck gives back 52 card deck, with correct BJ values
// note: tie cards to playDeck
function gameDeck() {										//<<<<<<<<<<<
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
    	// console.log(cards);
    	return cards;
	}
	// deck();
	playDeck = deck();

	window.onload = function() {

		for(var i = 0; i < playDeck.length; i++) {
			div = document.createElement('div');
			div.className = 'card';
			var $div = $('body').add('div').addClass('card');	


			if (myDeck[i].suit == 'Diamonds') {
				var ascii_char = '♦';
			} else {
				var ascii_char = '&' + myDeck[i].suit.toLowerCase() + ';';
			}

			div.innerHTML = '' + myDeck[i].name + '' + ascii_char + '';
			document.body.appendChild(div);
	}

}
};

// set as function in playerHand, where checks cards in hand, for x < playerHand.length, if playerHand[x] === card.name('A'), replace value to 11
// refactor after calcPlayer done
// handles Ace behaviour
function softAce() {
	for (var x = 0; x < playerHand.length; x++) {
		if (playerHand[x] === card.name('A')) {
			if (calcPlayer > 21) {
				card.name('A').value // change to 1;
			}
		}
	}
};

// dealCards gives 2 cards to each player, then to dealer; splice b/c need to retain order (already shuffled)
// add parent loop that goes through playersAtTable
function dealCards() {
	for (var x = 0; x <= 2; x++) {
		playerHand[x] = gameShoe.splice(x); // unshift?
	}

	for (var x = 0; x <= 2; x++) {
		dealerHand[x] = gameShoe.splice(x); // unshift?
	}
	console.log(playerHand);
	console.log(dealerHand);
};


// placeBet function handles user bet input, bankroll update, bet display, card deal start
$('#bet-button').click(function() {
	console.log('bet works');
	var userInput = $('#bet-button').value; //not .innerHTML right?
	
	bankRoll -= userInput;
	playerBet = userInput;

	$('#player-bet').innerHTML = userInput;

	dealCards();
});

// takes playerHand and sums +after hits  
function calcPlayer() {
	if (playerHand[0].value + playerHand[1].value === 21) {
		bankroll += ((userInput * 1.5) + userInput);
		// reset bet, reset hand
		alert('BlackJack!');
	}

	var handTotal;
	for (var x = 0; x < playerHand.length; x++) {
		handTotal += playerHand[x].value;
	}
	console.log(handTotal)

	if (handTotal > 21) {
		alert('Player Bust! Learn to count')
	}
	// return handTotal
};

$('#hit-button').click(function() {
	// console.log('hit works');
	for (hitCount = 0; hitCount; hitCount = playerHand.length) {
		playerHand[hitCount] = gameShoe.splice(x);
	}
});

$('#stand-button').click(function() {
	// console.log('stand works');		bankroll += ((userInput * 1.5) + userInput);
		// reset bet, reset hand
		alert('BlackJack!');
	dealerPlay(); //with settimeout
});

/////////////
// function hitOrStand() {
// 	if (playerHand.length === 2) {
// 		setTimeout(function() {
// 			alert("Boom!");
// 		}, 2000);
// 	}
// };
/////////////

// dealer hits until dealerHand[i].value sum < 17
function dealerPlay() {								//<<<<<<<<<<<
	var handTotal;

	// count that counts dealer hand value 
	for (var x = 0; x < dealerHand.length; x++) {
		handTotal += dealerHand[x].value;
	}

	if (handTotal 17 )

	// gives dealer cards
	for (var i = 0; i < 17; i++) {
		dealerHand[i] = gameShoe.splice(x);
	}

	console.log(handTotal)

	if (handTotal > 21) {
		alert('Computer Bust! Player wins')
	}
};

// compares current playerHand to dealer:
function compareHand() {
	if (calcPlayer(handTotal) <= 21 && calcPlayer(handTotal) > calcDealer(handTotal)) {
		bankroll += (userInput * 2);
		// reset bet, reset hand
		alert('You Won!');
	} else if (calcPlayer(handTotal) < 21 && calcPlayer(handTotal) < calcDealer(handTotal)) {
		bankroll -= userInput;
		// reset bet, reset hand
		alert('Dealer wins.');
	} else if (calcPlayer(handTotal) <= 21 && calcPlayer(handTotal) === calcDealer(handTotal)) {
		bankRoll += userInput;
		// reset bet, reset hand
		alert('Push.');
	}
};





var body = document.querySelector('body');
console.log('body');
//////////////////////////////////////////
//////////////////////////////////////////
// MISC NOTES //
// fund/bet changes as diff player takes turn
// do i need an empty array for house$ (user money lost)?
// difference btw reset button, and win hand (just resets bet + hand, add winnings to bankRoll)
// make each function an object, create new js for window.onload, load objects values(functions)