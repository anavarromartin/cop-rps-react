import {render, screen} from "@testing-library/react";
import RpsThrowComponent from "./rps-throw-component";

describe("Rps Throw Component", () => {
    test("throwing ✊ returns rock", done => {
        render(<RpsThrowComponent didThrow={(thr0w) => {
            expect(thr0w).toEqual("rock")
            done()
        }
        }/>)
        const rockButton = screen.getByText("✊")
        rockButton.click()
    })

    test("throwing ✋ returns paper", done => {
        render(<RpsThrowComponent didThrow={(thr0w) => {
            expect(thr0w).toEqual("paper")
            done()
        }
        }/>)
        const paperButton = screen.getByText("✋")
        paperButton.click()
    })

    test("throwing ✌️ returns scissors", done => {
        render(<RpsThrowComponent didThrow={(thr0w) => {
            expect(thr0w).toEqual("scissors")
            done()
        }
        }/>)
        const scissorsButton = screen.getByText("✌️")
        scissorsButton.click()
    })
})