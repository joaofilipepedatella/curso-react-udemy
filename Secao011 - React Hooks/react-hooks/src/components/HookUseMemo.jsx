import {useState, useEffect, useMemo} from 'react'

const HookUseMemo = () => {

  const [number, setNumber] = useState(0)

  //const premiumNumbers = [ "0", "100", "200" ] -> gera erro

  const premiumNumbers = useMemo(() => {
    return [ "0", "100", "200" ]
  }, [])

  useEffect(() => {
    console.log("Premium number foi alterado!")
  }, [premiumNumbers]) 
  // com o array de dep, nao re-renderiza o useEffect
  // pois o valor esta dentro do useMemo


  return (
    <div>
      <h2>useMemo</h2>

      <input type="text" onChange={(e) => setNumber(e.target.value)} />
      {premiumNumbers.includes(number) ? <p>Acertou o numero</p> : "" }
      <hr />
    </div>
  )
}

export default HookUseMemo