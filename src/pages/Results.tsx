import { Link } from "react-router-dom"
import { Result } from "../features/catmash/Result"
import ArrowLeft from "../assets/arrow-left.svg?react"

export const Results = () => {
  return (
    <div className="Result">
      <main className="main">
        <h1 className="title">CAT MASH</h1>
        <Link className="backlink" to="/">
          <ArrowLeft />
          {`Retourner au match`}
        </Link>
        <Result />
      </main>
    </div>
  )
}
