import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { getRandomCompetitors } from "../../services/getRandomCompetitors/getRandomCompetitors"
import cats from "../../data/cats.json"
import { won, counted, reseted, Winner } from "./catmashSlice"
import { CatCard } from "../../components/CatCard/CatCard"
import styles from "./Catmash.module.css"
import { ResultButton } from "../../components/ResultButton/ResultButton"
import { RootState } from "../../app/store"
import { ResetButton } from "../../components/ResetButton/ResetButton.js"
export const Catmash = () => {
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

  const winners = useAppSelector((state: RootState) => state.winnersList)

  const dispatch = useAppDispatch()

  const handleClick = (selected: Winner) => {
    dispatch(won(selected))
    dispatch(counted())
  }

  return (
    <>
      <div className={styles.container}>
        <div
          className={styles.left}
          onClick={() => {
            handleClick(first)
          }}
        >
          <CatCard image={first.url} alt={first.id} />
        </div>
        <div className={styles.middle}>
          <ResetButton onclick={() => dispatch(reseted())} />
        </div>
        <div
          className={styles.right}
          onClick={() => {
            handleClick(second)
          }}
        >
          <CatCard image={second.url} alt={second.id} />
        </div>
      </div>
      <ResultButton counter={winners.counter} />
    </>
  )
}
