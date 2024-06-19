import { useState } from "react";

export default function CounterApp() {

    const [counter, setCounter] = useState({
        counter1:10,
        counter2:20,
        cunter3:30
    });
  return (
    <>

        <h1>{counter.counter1} </h1>          
            <button onClick={() => setCounter({...counter, counter1: counter.counter1 + 1})}>+</button>
            {/* <button onClick={() => setCounter(counter - 1)}>-</button>            */}
    </>
  )
}
