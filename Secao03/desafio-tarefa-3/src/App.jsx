import { useState } from 'react'
import './App.css'

/* import da imagem em Assets */

import City from "./assets/city.jpg"
import ManageData from './components/ManageData'
import ListRender from './components/ListRender'
import ConditionalRender from './components/ConditionalRender'
import ShowUserName from './components/ShowUserName'
import CarDetails from './components/CarDetails'
import FragmentReact from './components/FragmentReact'
import Container from './components/Container'
import ExecuteFunction from './components/ExecuteFunction'
import Message from './components/Message'
import ChangeMessageState from './components/ChangeMessageState'
import UserDetails from './components/UserDetails'

function App() {
  // const [count, setCount] = useState(0)

  // const name = "Joaquim"
  const [userName] = useState("Maria") /* Metodo de useState */

  /* Metodo de Loop */
  const cars = [
    {id: 0, brand: "Ferrari", km: 0, color: "Vermelho", newCar: true},
    {id: 1, brand: "Honda", km: 28580, color: "Preto", newCar: false},
    {id: 2, brand: "Chevrolet", km: 234, color: "Azul", newCar: false}
  ]

  function showMessage() {
    console.log("Executou a funcao do elemento pai")
  }

  const [message, setMessage] = useState("")

  const handleMessage = (msg) => {
    setMessage(msg)
  }

  const users = [
    {id: 1, name:"Joao", age:33, job:"Programador"}, 
    {id: 2, name:"Anna Paula", age: 6, job:"Estudante"}, 
    {id: 3, name:"Marcello Henrique", age: 14, job: "Estudante"}
  ]

  return (
    <>
      <div>
        <h1>Secao 03</h1>

        {/* Imagem em Public */}
        <div>
          <img src="/img1.jpg" alt="Paisagem" />
        </div>

        {/* Imagem em Assets */}
        <div>
          <img src={City} alt="Cidade" /> {/* Imagem puxada pelo import da pasta assets */}
        </div>
        <ManageData />
        <ListRender />
        <ConditionalRender />

        {/* Props */}
        <ShowUserName name={userName} /> {/* Para valor direto (name = "Joao") e com constante: name = {name} */}
        
        {/* Destructuring */}
        <CarDetails id={3}brand="VW" km={10000} color="Azul" newCar={false}/> {/* Numeros tem q ser entre chaves */}
        
        {/* Reaproveitando */}
        <CarDetails id={4} brand="Fiat" km={0} color="Branco" newCar={true}/>
        <CarDetails id={5} brand="Toyota" km={35000} color="Preto" newCar={false}/>
        
        {/* Metodo de Loop em array de objetos (map) */}
        {cars.map((car) => (
          <CarDetails 
            key={car.id}
            brand={car.brand} 
            km={car.km} 
            color={car.color} 
            newCar={car.newCar} 
          />
        ))}

        {/* Fragment */}
        <FragmentReact propFragment="Prop Fragment"/>

        {/* Children */}
        <Container myValue="teste">
          <p>Este eh o conteudo do children</p>
        </Container>

        {/* executar funcao */}
        <ExecuteFunction myFunction={showMessage} />

        {/* State Lift */}
        <Message msg={message}/>
        <ChangeMessageState handleMessage={handleMessage} />

        {/* Desafio */}
        {users.map((user) => (
          <UserDetails 
          key={user.id} 
          name={user.name} 
          job={user.job} 
          age={user.age} />
        ))}
      </div>
    </>
  )
}

export default App
