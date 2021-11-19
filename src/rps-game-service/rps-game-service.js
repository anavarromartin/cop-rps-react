export const playGame = (player, opponent) => {
    const scenarios = {
        "paper": {
            "rock": "win",
            "paper": "tie",
            "scissors": "lose"
        },
        "rock": {
            "scissors": "win",
            "rock": "tie",
            "paper": "lose"
        },
        "scissors": {
            "paper": "win",
            "scissors": "tie",
            "rock": "lose"
        }
    };

    return scenarios[player][opponent];
}