import { Link } from "react-router-dom"
import { Result } from "../features/catmash/Result"

export const Results = () => {
  return (
    <div className="Result">
      <main className="main">
        <h1 className="title">CAT MASH</h1>
        <section className="container">
          <Link className="backlink" to="/">
            {`< Back to the match !!!`}
          </Link>
          <Result />
        </section>
      </main>
    </div>
  )
}
