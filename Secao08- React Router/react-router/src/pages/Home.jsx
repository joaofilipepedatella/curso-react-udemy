import { Link } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"

import './Home.css'

const Home = () => {
  //3 - carregamento de dados
  const url = 'http://localhost:3000/products'

  const {data: items, loading, error} = useFetch(url)


  return (
    <div>
      <h1>Produtos</h1>
      {loading && <p>Carregando...</p>}
      {error && <p>{error}</p>}
      <ul className="products">
        {items && items.map(item => (
          <li key={item.id}>
            <h2>{item.name}</h2>
            <p>R${item.price}</p>
            {/* 4 - Rota Dinamica */}
            <Link to={`/products/${item.id}`}>Detalhes</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home