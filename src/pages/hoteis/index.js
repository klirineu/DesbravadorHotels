import { useState, useEffect } from "react"

import api from "../../services/api"

import "./index.css"

import capa from "../../assets/capa.jpg"
import funil from "../../assets/funil.png"
import estrela from "../../assets/estrela.png"

function Hoteis () {
  const [hoteis, setHoteis] = useState([])

      /**função para buscar hoteis ao renderizar a página */
      useEffect(() => { 
        async function getHoteis() {
          await api.get("/srle/listing/v1/brands/hotels.com").then(result => {
            console.log(result.data.data.body.searchResults.results)
            setHoteis(result.data.data.body.searchResults.results)
          })
        }
        getHoteis()
      }, [])

  return (
    
    <div className="hoteis">
      {" seleção de endereço "}
      <div className="busca">
        <select name="endereco">
          <option value="SF, USA - 2 Jan 18 to Jan 23">SF, USA - 2 Jan 18 to Jan 23</option>
        </select>
        <div>
          <img src={funil} alt="funil" /><strong>Order</strong>
        </div>
      </div>
      {"lista de hoteis e resorts"}
      <div className="lista-hoteis">
        {"card"}
        <ul>{hoteis.map(hotel => (
          
          <li key={hotel.id}>
            {"imagem do card"}
            <div  className="img" style={{backgroundImage: `url(${capa})`}}>
              <div>
                <h1 className="nome">{hotel.name}</h1>
                <div><img src={estrela} alt="" /><h1 className="classificacao">{hotel.starRating}</h1></div>
              </div>
            </div>
            {"detalhes do card"}
            <div className="detalhes">
              <h2 className="endereco">{hotel.address.streetAddress}</h2>
              <h2>{hotel.neighbourhood}</h2>
              <h2>No prepayment</h2>
            </div>

            <h2 className="preco">{hotel.ratePlan === undefined ? <strong>$500,00</strong>  : hotel.ratePlan.price.current}</h2>
          </li>
          
        ))}</ul>
      </div>
    </div>
  )
}

export default Hoteis