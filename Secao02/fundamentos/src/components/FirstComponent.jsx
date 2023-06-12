//arquivo de estilo

import MyComponent from "./MyComponent"

const FirstComponent = () => {
    //essa funcao faz isso

    /* 
    Multi line
     */

    return (
        <div>
            {/* Algum Comentario */}
            <h1>Meu Primeiro Componente</h1>
            <p className="teste">Texto de teste para className</p>
            <MyComponent />
        </div>
    )
}

export default FirstComponent
