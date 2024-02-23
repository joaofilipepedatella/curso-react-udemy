import "./App.css";

//4 - importação de componentes
import FirstComponent from "./components/FirstComponent";

//5 - desestruturando props
import SecondComponent from "./components/SecondComponent";
import Destructuring, { Category } from "./components/Destructuring";

//6 - useState
import State from "./components/State";
import { createContext } from "react";

//11 - utilizando contexto
import Context from "./components/Context";

//9 - type
type textOrNull = string | null;

//10 - context
interface IAppContext {
  language: string;
  framework: string;
  projects: number;
}

export const AppContext = createContext<IAppContext | null>(null);

function App() {
  //1 - variaveis
  const name: string = "Joao";
  const age: number = 34;
  const isStudying: boolean = true;

  //2 - funções
  const userGreeting = (name: string): string => {
    return `Olá, ${name}!`;
  };

  //9 - type
  const myText: textOrNull = "Tem algum texto aqui";
  let mySecontText: textOrNull = null;
  //mySecontText = "opa";

  //10 - context
  const contextValue: IAppContext = {
    language: "JavaScript",
    framework: "Express",
    projects: 5,
  };

  return (
    <AppContext.Provider value={contextValue}>
    <>
      <h1>TypeScript com React</h1>
      <h2>Nome: {name}</h2>
      <p>Idade: {age}</p>
      {isStudying && (
        <div>
          <p>Está estudando!</p>
        </div>
      )}
      <h3>{userGreeting(name)}</h3>
      <FirstComponent />
      <SecondComponent name="Segundo" />
      <Destructuring
        title="Primeiro post"
        content="Algum conteúdo"
        commentsQty={10}
        tags={["ts", "js", "react"]}
        category={Category.TS}
      />
      <Destructuring
        title="Segundo post"
        content="Outro conteúdo"
        commentsQty={5}
        tags={["php", "python", "sql"]}
        category={Category.PY}
      />
      <State />
      {myText && <p>Tem texto na variavel</p>}
      {mySecontText && <p>Tem texto na variavel</p>}
      <Context />
    </>
    </AppContext.Provider>
  );
}

export default App;
