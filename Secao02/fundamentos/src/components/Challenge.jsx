const Challenge = () => {
    const n1 = 5
    const n2 = 9


    return (
        <div>
            <div className="n1">O Primeiro numero eh: {n1}</div>
            <div className="n2">O segundo numero eh: {n2}</div>
            <button onClick={() => console.log(n1 + n2)}>Some os dois numeros</button>
        </div>
    )
}

export default Challenge