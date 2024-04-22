
// An object to keep track of the player's choices and game state
var gameState = {
    hasStarted: false,
    groupStageResult: '',
	lastSixteenResult: '',
	quarterResult: '',
	semiResult: '',
	finalResult: '',
    // ... other state variables as needed
};

// Functions related to the initial start page
function startGame() {
    gameState.hasStarted = true;
    window.location.href = 'group-stage.html'; // Redirect to the game page
}

function viewReferences() {
    // Logic to show references, this could open a modal or redirect to a references page
    window.location.href = 'references.html';
}

// Functions related to the game logic
function chooseStrategyA() {
    gameState.groupStageResult = 'win';
    window.location.href = 'last-sixteen.html';
    // Redirect or update the page based on the game state
}

function chooseStrategyB() {
    gameState.groupStageResult = 'loss';
    window.location.href = 'group-exit.html';
    // Redirect or update the page based on the game state
}

function chooseStrategyC() {
    gameState.lastSixteenResult = 'win';
    window.location.href = 'quarters.html';
    // Redirect or update the page based on the game state
}

function chooseStrategyD() {
    gameState.lastSixteenResult = 'loss';
    window.location.href = 'sixteen-exit.html';
    // Redirect or update the page based on the game state
}

function chooseStrategyE() {
    gameState.quarterResult = 'win';
    window.location.href = 'semis.html';
    // Redirect or update the page based on the game state
}

function chooseStrategyF() {
    gameState.quarterResult = 'loss';
    window.location.href = 'quarters-exit.html';
    // Redirect or update the page based on the game state
}

function chooseStrategyG() {
    gameState.semiResult = 'win';
    window.location.href = 'final.html';
    // Redirect or update the page based on the game state
}

function chooseStrategyH() {
    gameState.semiResult = 'loss';
    window.location.href = 'semis-exit.html';
    // Redirect or update the page based on the game state
}

function chooseStrategyI() {
    gameState.finalResult = 'win';
    window.location.href = 'win.html';
    // Redirect or update the page based on the game state
}

function chooseStrategyJ() {
    gameState.finalResult = 'loss';
    window.location.href = 'final-exit.html';
    // Redirect or update the page based on the game state
}

function startAgain() {
	window.location.href = 'index.html';
}

// Wait for the DOM to load before assigning event listeners
document.addEventListener('DOMContentLoaded', function() {
    var startGameButton = document.getElementById('start-game');
    var viewReferencesButton = document.getElementById('view-references');
    var option1Button = document.getElementById('option1');
    var option2Button = document.getElementById('option2');
	var option3Button = document.getElementById('option3');
	var option4Button = document.getElementById('option4');
	var option5Button = document.getElementById('option5');
	var option6Button = document.getElementById('option6');
	var option7Button = document.getElementById('option7');
	var option8Button = document.getElementById('option8');
	var option9Button = document.getElementById('option9');
	var option10Button = document.getElementById('option10');
	var startAgainButton = document.getElementById('start-again');

    // Buttons
    if (startGameButton) {
        startGameButton.addEventListener('click', startGame);
    }

    if (viewReferencesButton) {
        viewReferencesButton.addEventListener('click', viewReferences);
    }

    if (option1Button) {
        option1Button.addEventListener('click', chooseStrategyA);
    }

    if (option2Button) {
        option2Button.addEventListener('click', chooseStrategyB);
    }
	
	if (option3Button) {
        option3Button.addEventListener('click', chooseStrategyC);
    }
	
	if (option4Button) {
        option4Button.addEventListener('click', chooseStrategyD);
    }
	
	if (option5Button) {
        option5Button.addEventListener('click', chooseStrategyE);
    }
	
	if (option6Button) {
        option6Button.addEventListener('click', chooseStrategyF);
    }
	
	if (option7Button) {
        option7Button.addEventListener('click', chooseStrategyG);
    }
	
	if (option8Button) {
        option8Button.addEventListener('click', chooseStrategyH);
    }
	
	if (option9Button) {
        option9Button.addEventListener('click', chooseStrategyI);
    }
	
	if (option10Button) {
        option10Button.addEventListener('click', chooseStrategyJ);
    }
	
	if (startAgainButton) {
		startAgainButton.addEventListener('click', startAgain);
	}
});
