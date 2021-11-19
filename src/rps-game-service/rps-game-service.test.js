import {playGame} from "./rps-game-service";

describe("rps game service", () => {
    test("paper wins against rock", () => {
        expect(playGame("paper", "rock")).toEqual("win");
    })
    test("paper loses against scissors", () => {
        expect(playGame("paper", "scissors")).toEqual("lose");
    })

    test("rock wins against scissors", () => {
        expect(playGame("rock", "scissors")).toEqual("win");
    })

    test("rock loses against paper", () => {
        expect(playGame("rock", "paper")).toEqual("lose");
    })


    test("scissors wins against paper", () => {
        expect(playGame("scissors", "paper")).toEqual("win");
    });


    test("scissors loses against rock", () => {
        expect(playGame("scissors", "rock")).toEqual("lose");
    });

    ["rock", "paper", "scissors"].forEach(thr0w => (
        test(`${thr0w} ties against ${thr0w}`, () => {
            expect(playGame(thr0w, thr0w)).toEqual("tie")
        })
    ))
})