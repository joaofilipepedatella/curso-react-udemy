import {useState} from 'react'
import { usePrevious } from '../hooks/usePrevious'

const HookCustom = () => {

  const [number, setNumber] = useState(0)
  const previousValue = usePrevious(number)


  return (
    <div>
      <h2>Custom Hook</h2>
      <p>Numero Atual: {number}</p>
      <p>Numero Anterior: {previousValue}</p>
      <button onClick={() => setNumber(Math.random())} >Alterar</button>
      <hr />
    </div>
  )
}

export default HookCustom