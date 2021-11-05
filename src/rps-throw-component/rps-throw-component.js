// show 3 buttons with 3 throws
// when one of them is selected we communicate what the selection was
import styles from "./rps-throw-component.module.css"
import {useState} from "react";
import clsx from "clsx";

const RpsThrowComponent = ({
                               didThrow = () => {
                               }
                           }) => {

    const [thrown, setThrown] = useState(null)

    const handleThrow = (thr0w) => () => {
        didThrow(thr0w)
        setThrown(thr0w)
    }

    return <div className={styles.throwsContainer}>
        <ThrowButton isSelected={thrown === "rock"} handleClick={handleThrow("rock")}>
            ✊
        </ThrowButton>
        <ThrowButton isSelected={thrown === "paper"} handleClick={handleThrow("paper")}>
            ✋
        </ThrowButton>

        <ThrowButton isSelected={thrown === "scissors"} handleClick={handleThrow("scissors")}>
            ✌️
        </ThrowButton>

    </div>
}

const ThrowButton = ({isSelected, children, handleClick}) => (
    <div className={
        clsx(
            {
                [styles.throwButton]: true,
                [styles.throwButtonSelected]: isSelected
            }
        )
    } onClick={handleClick}>{children}</div>
)

export default RpsThrowComponent