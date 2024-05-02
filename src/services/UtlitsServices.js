const throttleFunction=(fun,delay=500)=>{
    let loading=false;
    return((...arg)=>{
        if(loading) return;
        loading=true;
        setTimeout(()=>{
            fun(...arg)
            loading=false;
        },delay)
    })
}

const debounceFunction=(fun,delay=500)=>{
    let timer;
    return((...arg)=>{
        if(timer) clearTimeout(timer)
        timer=setTimeout(()=>{
            fun(...arg)
        },delay)
    })
}

export {throttleFunction,debounceFunction}