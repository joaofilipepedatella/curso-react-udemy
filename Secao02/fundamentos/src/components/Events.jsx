const Events = () => {

    const handleMyEvent = (e) => {
        console.log(e)

        console.log("Ativou o Evento")
    }

    const renderSomething = (x) => {
        if(x){
            return <h1>Renderizando Isso</h1>
        }else{
            return <h1>Tambem posso renderizar isso!</h1>
        }
    }

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique Aqui!</button>
            </div>
            <div>
                <button onClick={() => console.log("Clicou! XD")}>Clique aqui tambem!</button>
                <button onClick={() => {
                    if(true) {
                        console.log("Coisa demais pra por num codigo, ne? xD")
                    }
                }}>Clica aqui, por favor!</button>
            </div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    )
}

export default Events