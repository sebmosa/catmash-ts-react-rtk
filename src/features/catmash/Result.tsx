import { useAppSelector } from "../../app/hooks.js"
import { RootState } from "../../app/store.js"
import { ScoreTable } from "../../components/ScoreTable/ScoreTable.js"

export const Result = () => {
  const winnersList = useAppSelector((state: RootState) => state.winnersList)

  const winners = winnersList.winners
    .map((cat) => ({
      id: cat.id,
      url: cat.url,
      points: cat.points,
    }))
    .sort((a, b) => b.points - a.points)

  const maxScore = winners[0].points

  const isEmpty = winnersList.winners.length === 0

  return (
    <>
      {isEmpty ? (
        <p className="info">Commencer une battle pour voir les résultats</p>
      ) : (
        <ScoreTable competitors={winners} max={maxScore} />
      )}
    </>
  )
}
