import React, { useContext } from 'react'
import { UserContext } from './context/UserContext';

export const LoginPage = () => {

  const{ user,setUser }=useContext(UserContext);

  return (
    <>
    <div>LoginPage</div>
    <pre>
      {JSON.stringify(user, null, 2)}
    </pre>

    <button onClick={()=>setUser({ id:"1",name:"cristopher"  })} className='btn btn-primary'>Establecer usuario</button>
    </>
  )
}
