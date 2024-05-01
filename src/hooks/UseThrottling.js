import React,{ useEffect,useRef } from "react";

const UseThrottling=(fun,delay)=>{

    const lastExecutedTimeRef = useRef(Date.now());

    useEffect(() => {
        const handler = setTimeout(() => {
          if (Date.now() - lastExecutedTimeRef.current >= delay) {
            fun();
            lastExecutedTimeRef.current = Date.now();
          }
        }, delay - (Date.now() - lastExecutedTimeRef.current));
    
        return () => clearTimeout(handler);
      }, [fun, delay]);
}

export default React.memo(UseThrottling);