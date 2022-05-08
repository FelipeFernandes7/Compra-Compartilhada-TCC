import React from "react"
import styles from '../styles/loading.module.css';

export function Loading(){
    return(
        <div className={styles.container}>
            <div className={styles.spinner} ></div> 
            </div>
    )
}

export default Loading;