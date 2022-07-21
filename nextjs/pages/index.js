
import Link from "next/link"
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>

      <main className={styles.main}>
        <h2 className={styles.title}>
        Product Advocate Position Assignment for Vercel using Next.js
        </h2>

        <div className={styles.grid}>
          <Link href="https://github.com/virtualnadeem" >
            <a className={styles.card}>
            <h2>Nadeem's GitHub &rarr;</h2>
            </a>
          </Link>

          <Link href="/Question1" >
          <a className={styles.card}>
            <h2>Question1 &rarr;</h2>
            </a>
          </Link>

          <Link
            href="Question2"
            
          >
            <a className={styles.card}>
            <h2>Question2 &rarr;</h2>
            </a>
          </Link>

          <Link
            href="Question3"
            
          >
            <a className={styles.card}>
            <h2>Question3 &rarr;</h2>
            </a>
          </Link>

          <Link
            href="Question4"
            
          >
            <a className={styles.card}>
            <h2>Question4 &rarr;</h2>
            </a>
          </Link>

          <Link
            href="Question5"
            
          >
            <a className={styles.card}>
            <h2>Question5 &rarr;</h2>
            </a>
          </Link>



        </div>
      </main>
    </div>
  )
}