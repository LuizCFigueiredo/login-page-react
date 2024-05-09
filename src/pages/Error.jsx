import React from 'react'
import styles from './Error.module.css'
import { MdErrorOutline } from "react-icons/md";

const Error = () => {
    return (
        <main className={styles.main}>
            <p>Ops, página não encontrada!</p>
            <span><MdErrorOutline /></span>
        </main>
    )
}

export default Error