
import useCounter from "../hooks/useCounter.tsx";

export const CounterCustomHook = () => {

    const {counter, increment, decrement, reset} = useCounter(5);
  return (
    <>
        <h1>Counter Custom Hook {counter} </h1>
        <hr/>
        <button onClick={()=>increment()}>+</button>
        <button onClick={reset}>Reset</button>
        <button onClick={decrement}>-</button>
    </>
  )
}
