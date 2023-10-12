import { Link } from "react-router-dom"
import { Result } from "../features/catmash/Result"
import ArrowLeft from "../../public/arrow-left.svg"

export const Results = () => {
  return (
    <div className="Result">
      <main className="main">
        <h1 className="title">CAT MASH</h1>
        <Link className="backlink" to="/">
          <img src={ArrowLeft} alt="back to app page" />
          {`Retourner au match`}
        </Link>
        <Result />
      </main>
    </div>
  )
}
