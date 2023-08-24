import { Catmash } from "../features/catmash/Catmash.js"

function App() {
  return (
    <div className="App">
      <main className="main">
        <h1 className="title">CAT MASH</h1>
        <p className="notice">
          Quelle est le chat le plus mignon?
          <span className="notice-next">Cliquez sur l'image pour choisir.</span>
        </p>
        <Catmash />
      </main>
    </div>
  )
}

export default App
