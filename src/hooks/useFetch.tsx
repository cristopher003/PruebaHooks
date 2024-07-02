import  { useEffect, useState } from 'react'

export interface getFetch{
    data:any,
    loading:boolean,
    error:any
}

export const useFetch = (url:string) => {
   
    const initialState:getFetch= {
      data:null,
      loading:true,
      error:null
    }
    const [state, setstate] = useState(initialState);

    useEffect(() => {
      getFetch();
    }, [url])
    
    const getFetch= async() => {
    
      setstate(initialState);
      try {
        const res= await fetch(url);
        // seep
        // await new Promise(resolve => setTimeout(resolve, 2000));;
        
        const data= await res.json();
        setstate({
          data,
          loading:false,
          error:null
        })
      } catch (error :any) {
        setstate({
          data:null,
          loading:false,
          error:error.message
        })
      }
    
    }
    
  return {
    data:state.data,
    loading:state.loading,
    error:state.error
  }
}
