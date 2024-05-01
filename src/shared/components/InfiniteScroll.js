import React,{ useEffect } from "react";
import UseThrottling from "../../hooks/UseThrottling"; 

const InfiniteScroll=({loadMore})=>{

    useEffect(()=>{
        window.addEventListener('scroll',handelScroll)
        return ()=>window.removeEventListener('scroll',handelScroll)
    },[loadMore])

    const handelScroll=()=>{
        if (
            window.innerHeight + document.documentElement.scrollTop
            === document.documentElement.offsetHeight
          ) {
            loadMore();
          }
    }

    // const throttleHandelScroll=UseThrottling(handelScroll,1000)

}

export default React.memo(InfiniteScroll);