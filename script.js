// Original actions and body parts
const actions = [
    "Kiss", "Deep tongue", "Suck", "Lick", "Lick", "Lick",
    "Nibble", "Finger", "Rub", "Thrust", "Play with a Nose", "Bite gently", 
    "Tease", "Massage", "Spank", "Spit", "Explore with hands", "Gently scratch", "Kiss all over", "Whisper softly",
];

const bodyParts = [
    "Lips", "Neck", "Boobs", "Nipples", "Clit", "Pussy", "Pussy", "Pussy", 
    "G-spot", "Inner thighs", "Ass", "Ass", "Ass", "Dick", "Cock tip", 
    "Balls", "Balls", "Butt", "Back", "Ears", "Tongue", "Tongue", 
    "Tongue", "Tongue", "Tongue", "Feet", "Feet", "Hands", "Stomach", 
    "Shoulders", "Wrists", "Elbows", "Knees", "Toes", "Cheeks", 
    "Arms"
];

const timeDurations = [];
for (let i = 30; i <= 120; i += 5) {
    timeDurations.push(i);
}

let currentPlayer = 'Male'; // Starts with Male
let maleName = '';
let femaleName = '';

// Event listener for the start game
document.getElementById('start-game').addEventListener('click', () => {
    // Get player names
    maleName = document.getElementById('male-name').value;
    femaleName = document.getElementById('female-name').value;

    if (maleName === '' || femaleName === '') {
        alert('Please enter both names!');
    } else {
        // Hide input page and show game page
        document.getElementById('input-page').style.display = 'none';
        document.getElementById('game-page').style.display = 'block';
        updateTurnIndicator();
    }
});

// Function to update the turn indicator based on the current player
function updateTurnIndicator() {
    const turnIndicator = document.getElementById('turn-indicator');
    if (currentPlayer === 'Male') {
        turnIndicator.textContent = `${maleName}'s Turn`;
    } else {
        turnIndicator.textContent = `${femaleName}'s Turn`;
    }
}

// Function to roll the dice
function rollDice() {
    // Roll dice
    const action = actions[Math.floor(Math.random() * actions.length)];
    const bodyPart = bodyParts[Math.floor(Math.random() * bodyParts.length)];
    const time = timeDurations[Math.floor(Math.random() * timeDurations.length)];

    // Display results
    document.getElementById('dice-1').textContent = action;
    document.getElementById('dice-2').textContent = bodyPart;
    document.getElementById('dice-3').textContent = `${time} sec`;

    // Trigger dice roll animation
    document.getElementById('dice-1').classList.add('roll');
    document.getElementById('dice-2').classList.add('roll');
    document.getElementById('dice-3').classList.add('roll');

    // Remove the roll class after animation ends
    setTimeout(() => {
        document.getElementById('dice-1').classList.remove('roll');
        document.getElementById('dice-2').classList.remove('roll');
        document.getElementById('dice-3').classList.remove('roll');
    }, 1000);

    // Log the turn result
    logTurn(action, bodyPart, time);

    // Change player turn after each roll
    currentPlayer = (currentPlayer === 'Male') ? 'Female' : 'Male';
    updateTurnIndicator();
}

// Log Turn
function logTurn(action, bodyPart, time) {
    const turnLog = document.getElementById('turn-log');
    const logEntry = document.createElement('li');
    logEntry.textContent = `${currentPlayer === 'Male' ? maleName : femaleName} - ${action} ${bodyPart} for ${time} sec`;
    turnLog.appendChild(logEntry);
    turnLog.scrollTop = turnLog.scrollHeight;
}

// Event listener for the roll dice button
document.getElementById('roll-dice').addEventListener('click', rollDice);
