import styles from "./CatCard.module.css"

type Card = {
  image: string
  alt: string
}
export const CatCard = ({ image, alt }: Card) => {
  return (
    <img
      className={styles.image}
      width={400}
      height={300}
      src={image}
      alt={`random cat, it's cat ID:${alt}`}
    />
  )
}
