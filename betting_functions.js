// console.log('sim sim salabim');

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

////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////

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
	};

	// if (handTotal 17 )

	// gives dealer cards
	for (var i = 0; i < 17; i++) {
		dealerHand[i] = gameShoe.splice(x);
	};

	console.log(handTotal)

	if (handTotal > 21) {
		alert('Computer Bust! Player wins')
	};
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





// var body = document.querySelector('body');
// console.log(body);