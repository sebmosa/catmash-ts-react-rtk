import { Link } from "react-router-dom"
import styles from "./ResultButton.module.css"

interface Counter {
  counter: number
}

export const ResultButton = ({ counter }: Counter) => {
  return (
    <div className={styles.container}>
      <Link className={styles.link} to="results">
        Voir les plus beaux chats
        <div className={styles.counter}>{counter} Votes</div>
      </Link>
    </div>
  )
}
