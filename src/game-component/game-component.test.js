import {render, screen} from "@testing-library/react";
import {GameComponent} from "./game-component";

describe("Game Component", () => {
    test("Given rock throw selected, when play button clicked and opponent throw is scissors, player wins", () => {
        render(<GameComponent getOpponentThrow={() => "scissors"}/>)
        const rockButton = screen.getByText("✊")
        rockButton.click()

        const playButton = screen.getByText("play");
        playButton.click();

        expect(screen.getByText("You win!")).toBeTruthy()
    })

    test("Given rock throw selected, when play button clicked and opponent throw is paper, player loses", () => {
        render(<GameComponent getOpponentThrow={() => "paper"}/>)
        const rockButton = screen.getByText("✊")
        rockButton.click()

        const playButton = screen.getByText("play");
        playButton.click();

        expect(screen.getByText("You lose :(")).toBeTruthy()
        expect(screen.queryByText("You win!")).not.toBeInTheDocument()
    })

    test("Given rock throw selected, when play button clicked and opponent throw is rock, player ties", () => {
        render(<GameComponent getOpponentThrow={() => "rock"}/>)
        const rockButton = screen.getByText("✊")
        rockButton.click()

        const playButton = screen.getByText("play");
        playButton.click();

        expect(screen.getByText("It's a draw")).toBeTruthy()
    })
})