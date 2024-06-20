import React from 'react'
import { useFetch } from '../hooks/useFetch'
import useCounter from '../hooks/useCounter';

export const MultipleCustomHooks = () => {

// Suggested code may be subject to a license. Learn more: ~LicenseLog:1525381660.
    const {counter,increment,decrement}=useCounter(1);
    const{data,loading,error}=useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);

  return (
    <>
        <h1>Pokemon {counter}</h1>
        <button disabled={loading} onClick={()=>increment()}>Next</button>
        <button onClick={()=>counter>1?decrement():null}>Previous</button>
        <hr/>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        <pre>
            <h3>{data?.name}</h3>
            <img src={data?.sprites?.front_default} alt={data?.name}/>
        </pre>


    </>
  )
}
