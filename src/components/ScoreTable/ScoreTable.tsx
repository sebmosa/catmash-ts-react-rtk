import styles from "./ScoreTable.module.css"

export interface Competitor {
  id: string
  url: string
  points: number
}

interface Competitors {
  competitors: Competitor[]
  max: number
}

export const ScoreTable = ({ competitors, max }: Competitors) => {
  return (
    <div className={styles.content}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Image</th>
            <th>Id</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {competitors.map((competitor) => (
            <tr
              key={competitor.id}
              className={competitor.points === max ? styles.winner : ""}
            >
              <td>
                <img src={competitor.url} alt={competitor.id} />
              </td>
              <td>{competitor.id}</td>
              <td>{competitor.points}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={5}></td>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}
