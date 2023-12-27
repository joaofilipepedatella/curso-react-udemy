const TemplateExpressions = () => {

    const name = "Joao Filipe"
    const data = {
        age: 33,
        job: "Programador",
    }

    return (
        <div>
            <h1>Ola {name}, tudo bem?</h1>
            <p>Voce tem {data.age} anos, e atua como {data.job}.</p>
            <p>{4 + 4}</p>
            <p>{console.log("JSX React")}</p>
        </div>
    )
}

export default TemplateExpressions