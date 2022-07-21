
import React from "react";
import styles from '../styles/Question1.module.css'

export default function Question1(){
    return(
        <div className={styles.container}>
            <h2 className={styles.title}>Things a Product Advocate Might Do:</h2>
            <p className={styles.description}>
            <h3>The 3 things I would be most interested in doing</h3>

1. Empathize with customers <br></br>
2. Research the headquarters and ownership of a company to determine who to route it to <br></br>
3. Attend weekly enablement meetings to level up your product and sales knowledge <br></br>
<br></br>
<h3>The 3 things I would be least interested in doing</h3>

1. Evaluate OSS sponsorship applications <br></br>
2. Research and organize notes to ensure Account Executives are prepared for calls <br></br>
3. Evaluate an application to help determine if it's commercial or not            </p>
        </div>
    )
}