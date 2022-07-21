
import React from "react";
import styles from '../styles/Question3.module.css'

export default function Question3(){
    return(
        <div className={styles.container}>
            <h2 className={styles.title}>Add a temporary redirect to your Next/Vercel project</h2>
            <p className={styles.description}>
            Added a temporary in-app redirect to my project by redirecting /hello-vercel to https://vercel.com            </p>
        </div>
    )
}