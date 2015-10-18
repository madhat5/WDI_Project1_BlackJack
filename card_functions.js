console.log('sim sim salabim');

// card functions
// --x--shuffle/randomize (already included in shoeDeck{} object)
// --x--gameDeck function, gives deck52 an array -----------------------<<<<<<<still true??????
// softAce function controls ace value (ace = 11; if hand + ace > 21, ace = 1)
// --x--dealCards takes 2 cards from shoe, gives them to playerHand (splice()) and dealerHand

////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////

// console.log(playingCards);
// test();

// setup card-library js call here
$(document).ready(function() {
	// console.log(playingCards);
    var cardDeck = $("#cardDeck").playingCards();
    // cardDeck.spread(); // show it
	var hand = [];
	var handDealer =[]
	// console.log(handDealer);
	
	var showError = function(msg) {
		$('#error').html(msg).show();
		
		setTimeout(function() {
			$('#error').fadeOut('slow');
		},3000);
	};

	var showHand = function() {
		var el = $('#yourHand');
		el.html('');
		
		for(var i=0;i<hand.length;i++){
			el.append(hand[i].getHTML());
		};
	};

	var showDealer = function() {
		var el = $('#dealerHand');
		el.html('');
		
		for(var i=0;i<handDealer.length;i++){
			el.append(handDealer[i].getHTML());
		};
	};	

	var doShuffle = function() {
		cardDeck.shuffle();
		cardDeck.spread(); // update card table
	};
	
	var doDrawCard = function() {
		var c = cardDeck.draw();
		if (!c) {
			showError('no more cards');
			return;
		};

		// tried to do if statment for handing out cards
		// if ($('#draw').click(this)) {
		hand[hand.length] = c;
		showHand();
		// } else if ($('#stand').click(doStand)) {
		// 	dealerHand[dealerHand.length] = c;
		// 	showDealer();
		// }
	};

	var dealerDrawCard = function() {
		var c = cardDeck.draw();
		if (!c) {
			showError('no more cards');
			return;
		};

		handDealer[handDealer.length] = c;
		showDealer();
	};

	var doStand = function() {
		// console.log('hello')
		for (var x = 0; x < 4; x++) {
			dealerDrawCard();
		};
	};




	// takes >>>playerHand<<< and sums +after hit  
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

// use the below to figure out value so can modify value/ calculate winner 
	// var doOrderByRank = function() { 
	// 	cardDeck.orderByRank();
	// 	cardDeck.spread(); // update card table
	// };

	$('#shuffler').click(doShuffle);
	$('#draw').click(doDrawCard);
	$('#stand').click(doStand);	

	$('#shuffleDraw').click(function() {
		doShuffle();
		doDrawCard();
	});
	
	$('#addCard').click(function() {
		if(!hand.length) {
			showError('your hand is empty');
			return;
		};

		var c = hand.pop();
		showHand();
		cardDeck.addCard(c);
		cardDeck.spread();
	});
});



// // set as function in playerHand, where checks cards in hand, for x < playerHand.length, if playerHand[x] === card.name('A'), replace value to 11
// // refactor after calcPlayer done
// // handles Ace behaviour
// function softAce() {
// 	for (var x = 0; x < playerHand.length; x++) {
// 		if (playerHand[x] === card.name('A')) {
// 			if (calcPlayer > 21) {
// 				card.name('A').value // change to 1;
// 			}
// 		}
// 	}
// };

// // dealCards gives 2 cards to each player, then to dealer; splice b/c need to retain order (already shuffled)
// // add parent loop that goes through playersAtTable
// function dealCards() {
// 	for (var x = 0; x <= 2; x++) {
// 		playerHand[x] = gameShoe.splice(x); // unshift?
// 	}

// 	for (var x = 0; x <= 2; x++) {
// 		dealerHand[x] = gameShoe.splice(x); // unshift?
// 	}
// 	console.log(playerHand);
// 	console.log(dealerHand);
// };



// var body = document.querySelector('body');
// console.log(body);




////////////////////////////////////////////////////////////////////////////////////
// the gameDeck function below was a trial in generating my own deck. 
// It works until the display portion (DOM Manipulation)
// Solution: like the jquery library, i found a deck library on git which i cloned, then loaded

// // gameDeck gives back 52 card deck, with correct BJ values
// // note: tie cards to playDeck
// var gameDeck = function() {										//<<<<<<<<<<<
// 	function card(value, name, suit) {
// 		this.value = value;
// 		this.name = name;
// 		this.suit = suit;
// 	};
	
// 	function deck(){
// 		this.names = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
// 		this.values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11]
// 		this.suits = ['Hearts','Diamonds','Spades','Clubs'];
// 		var cards = [];
    
// 	    for( var x = 0; x < this.suits.length; x++ ) {
//     	    for( var i = 0; i < this.names.length; i++ ) {
//         	    cards.push( new card( this.values[i], this.names[i], this.suits[x]) ); // if doesn't work, change .values back to .value
//         	}
//     	};
//     	// console.log(cards);
//     	return cards;
// 	};
// 	// deck();
// 	playDeck = deck();
// 	console.log(playDeck.length);
// 	playDeck;

// 	var appendDeck = function() {

// 		for (var i = 0; i < playDeck.length; i++) {
// 			div = document.createElement('div');
// 			div.className = 'card';
// 			// var $div = $('body').add('div').addClass('card-deck');	
// 			// console.log($div);

// 			// add symbols for other suits
// 			if (playDeck[i].suit == 'Diamonds') {
// 				var ascii_char = '♦';
// 			} else {
// 				var ascii_char = '&' + playDeck[i].suit.toLowerCase() + ';';
// 			}

// 			div.innerHTML = '<span class="number">' + playdDeck[i].name + '</span><span class="suit">' + ascii_char + '</span>';
// 			document.body.appendChild(div);
// 			// $div.html('<span class="number">' + playDeck[i].name + '</span><span class="suit">' + ascii_char + '</span>');
// 		}
// 	};
// 	// appendDeck();
// };
////////////////////////////////////////////////////////////////////////////////////