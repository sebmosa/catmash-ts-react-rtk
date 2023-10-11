import { Link } from "react-router-dom"
import styles from "./ResultButton.module.css"

interface Counter {
  counter: number
}

export const ResultButton = ({ counter }: Counter) => {
  return (
    <section className={styles.result}>
      <Link className={styles.link} to="results">
        Voir les plus beaux chats
        <p className={styles.counter}>{counter} Votes</p>
      </Link>
    </section>
  )
}
