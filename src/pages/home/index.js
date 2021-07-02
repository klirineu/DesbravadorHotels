import { Link } from "react-router-dom"

import "./index.css"

function Home() {


  return (
    <div className="home">
      {"header"}
      <header>
        <div>
          <h1>Find place that gives you ultimate calm</h1>
        </div>
      </header>
      {"campo de busca"}
      <div className="busca">
        <div>
          <select name="endereco">
            <option value="SF, USA - 2 Jan 18 to Jan 23">SF, USA - 2 Jan 18 to Jan 23</option>
          </select> <input className="select" type="text" placeholder="Guests"/><br />

          <input type="text" placeholder="Date" /> <input className="select" type="text" placeholder="Nights"/>
          <br />
          <Link to="/hoteis"><button className="btn-grad">Search a room</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Home