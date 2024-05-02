import React,{ useEffect,useRef, useState } from "react";

const UseThrottling=(fun,delay)=>{

  const [throttleFunction,setThrottleFunction]=useState();  
  const lastExecutedTimeRef = useRef(Date.now());

  // console.log('funwww',fun)
  // return fun()

    useEffect(() => {
      console.log('useeffect',fun)
        const handler = setTimeout(() => {
          if (Date.now() - lastExecutedTimeRef.current >= delay) {
              setThrottleFunction(fun)
              fun()
              lastExecutedTimeRef.current = Date.now();
          }
        }, delay - (Date.now() - lastExecutedTimeRef.current));
    
        return () => clearTimeout(handler);
      }, [fun, delay]);

  
}

export default UseThrottling;