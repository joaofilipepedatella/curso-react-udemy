import { useState } from "react"

const ConditionalRender = () => {

    const [x] = useState(true) //dependendo do valor (true/false)

    const [name, setName] = useState("Matheus")

  return (
    <div>
        <h1>Isso sera exibido?</h1>             {/* um desses sera exibido */}
        {x && <p>Se x for true, sim!</p>}       {/* True */}
        {!x && <p>Agora x eh falso!</p>}        {/* False */}

        <h1>If Ternario</h1>
        <p>condicao ? (bloco1) : (bloco2)</p>
        {name === "Joao" ? (
            <div>
                <p>O nome eh Joao</p>
            </div>
        ) : (
            <div>
                <p>Nome nao encontrado!</p>
            </div>
        )}
        <button onClick={() => setName("Joao")}>Mudar nome</button>
    </div>
  )
}

export default ConditionalRender