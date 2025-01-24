import { CounterContext } from "./CounterProvider";
import { useContext } from "react";

const useCounter = () => useContext(CounterContext);

export default useCounter;
