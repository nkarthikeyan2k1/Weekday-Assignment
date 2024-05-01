import { useEffect, useRef } from "react";

const UseDebounce=(fun,delay)=>{
   
    const timerRef=useRef(null)
    
    useEffect(()=>{
        return()=>{
            if(timerRef.current){
                clearTimeout(timerRef.current);
            }
        }
    },[]);

    return (...args) => {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }
        timerRef.current = setTimeout(() => {
            fun(...args);
        }, delay);
    };
}

export default React.memo (UseDebounce);