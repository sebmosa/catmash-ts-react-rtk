import { useState } from "react"
import { useAppDispatch } from "../../app/hooks"
import { getRandomCompetitors } from "../../services/getRandomCompetitors/getRandomCompetitors"
import cats from "../../data/cats.json"
import { won, counted, Winner } from "./catmashSlice"
import { CatCard } from "../../components/CatCard/CatCard"
import styles from "./Catmash.module.css"
export const Catmash = () => {
  const [_, setWinner] = useState<Winner>()
  const competitors = getRandomCompetitors(cats.images)

  const first = {
    id: competitors[0].id,
    url: competitors[0].url,
    points: 0,
  }

  const second = {
    id: competitors[1].id,
    url: competitors[1].url,
    points: 0,
  }

  const dispatch = useAppDispatch()

  const handleClick = (selected: Winner) => {
    setWinner(selected)
    dispatch(won(selected))
    dispatch(counted())
  }

  return (
    <>
      <div className={styles.container}>
        <div
          className={styles.left}
          onClick={(event) => {
            event.preventDefault()
            handleClick(first)
          }}
        >
          <CatCard image={first.url} alt={first.id} />
        </div>
        <div
          className={styles.right}
          onClick={(event) => {
            event.preventDefault()
            handleClick(second)
          }}
        >
          <CatCard image={second.url} alt={second.id} />
        </div>
      </div>
    </>
  )
}
