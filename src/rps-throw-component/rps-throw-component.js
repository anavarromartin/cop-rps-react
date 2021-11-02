// show 3 buttons with 3 throws
// when one of them is selected we communicate what the selection was
import styles from "./rps-throw-component.module.css"

const RpsThrowComponent = ({didThrow = () => {}}) => {
    return <div className={styles.throwsContainer}>
        <div className={styles.throwButton} onClick={() => didThrow("rock")}>✊</div>
        <div className={styles.throwButton} onClick={() => didThrow("paper")}>✋</div>
        <div className={styles.throwButton} onClick={() => didThrow("scissors")}>✌️</div>
    </div>
}

export default RpsThrowComponent