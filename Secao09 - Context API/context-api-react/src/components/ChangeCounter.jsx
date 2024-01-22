/* 3 - Alterando o contexto */

import { useCounterContext } from "../hooks/useCounterContext";

const ChangeCounter = () => {
  const { counter, setCounter } = useCounterContext();

  return (
    <div>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Add value to counter
      </button>
    </div>
  );
};

export default ChangeCounter;
