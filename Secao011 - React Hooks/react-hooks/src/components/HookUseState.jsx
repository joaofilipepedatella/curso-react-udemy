import { useState } from "react";

const HookUseState = () => {
  //1 - useState

  let userName = "Joao";

  const [name, setName] = useState("Matheus");

  const changeName = () => {
    userName = "Joao Filipe";

    setName("Matheus Battisti");

    /* console.log(userName); */
  };

  /* console.log(name); */

  //2 - useState e Input

  const [age, setAge] = useState(18);

  const handleSubmit = (e) => {
    e.preventDefault();

    //envio a uma API
    console.log(age);
  };

  return (
    <div>
      {/* 1- useState */}

      <h2>useState</h2>

      <p>Variavel: {userName}</p>
      <p>useState: {name}</p>
      <button onClick={changeName}>mudar nomes</button>

      {/* 2- useState e Input */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input type="submit" value="Enviar" />
      </form>
      <p>Voce tem {age} anos</p>
      <hr />
    </div>
  );
};

export default HookUseState;
