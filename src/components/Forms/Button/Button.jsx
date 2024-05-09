import styles from "./Button.module.css"

const Button = ({id, value}) => {
    return(
        <div className={styles.Button}>
            <button id={id}>{value}</button>
        </div>
    )
}

export default Button