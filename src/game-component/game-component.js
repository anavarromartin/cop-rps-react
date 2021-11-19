import RpsThrowComponent from "../rps-throw-component/rps-throw-component";
import {playGame} from "../rps-game-service/rps-game-service";
import {useState} from "react";

const machineLearningAIComputeGeneratedThrow = ()  => ["rock", "paper", "scissors"][getRandomInt(3)]

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

export const GameComponent = ({getOpponentThrow = machineLearningAIComputeGeneratedThrow}) => {

    const [selectedThrow, setSelectedThrow] = useState(null)
    const [gameResult, setGameResult] = useState(null)

    const gameResults = {
        "win": "You win!",
        "lose": "You lose :(",
        "tie": "It's a draw"
    }

    const play = () => {
        const opponentThrow = getOpponentThrow()
        setGameResult(
            gameResults[playGame(selectedThrow, opponentThrow)]
        )
    }

    return <div>
        <RpsThrowComponent didThrow={setSelectedThrow} />
        <button onClick={play}>play</button>
        <p>{gameResult}</p>
    </div>
}