import {useState, useEffect, useLayoutEffect} from "react";

const HookUseLayoutEffect = () => {

  const [name, setName] = useState("Nome 1")

  useEffect(() => {
    console.log("2")
    setName("Nome 3")
  }, [])

  useLayoutEffect(() => {
    console.log("1")
    setName("Nome 2")
  },[])

  console.log(name)

  return (
    <div>
      <h2>useLayoutEffect</h2>
      <p>Nome: {name}</p>
      <hr />
    </div>
  );
};

export default HookUseLayoutEffect;
