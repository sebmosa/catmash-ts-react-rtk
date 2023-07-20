import styles from "./ResetButton.module.css"

interface IReset {
  onclick: () => void
}

export const ResetButton = ({ onclick }: IReset) => {
  return (
    <button className={styles.reset} onClick={onclick}>
      Reset
    </button>
  )
}
