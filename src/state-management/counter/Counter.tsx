// import useCounter from "./useCounter";
import counterStore from "./store";

const Counter = () => {
  // const { value, dispatch } = useCounter();
  const { counter, increment, reset } = counterStore();

  return (
    <div>
      Counter ({counter})
      <button onClick={increment} className="btn btn-primary mx-1">
        Increment
      </button>
      <button onClick={reset} className="btn btn-primary mx-1">
        Reset
      </button>
    </div>
  );
};

export default Counter;
