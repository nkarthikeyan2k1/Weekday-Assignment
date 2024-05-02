import React,{ useEffect } from "react";
import { throttleFunction } from "../../services/UtlitsServices";

const InfiniteScroll=({loadMore})=>{

    useEffect(()=>{
        window.addEventListener('scroll',throttleHandelScroll)
        return ()=>window.removeEventListener('scroll',throttleHandelScroll)
    },[loadMore])

    const handelScroll=()=>{
          if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) {
            return;
          }
          loadMore();
    }

    // handel the scroll evevnt repeted check using the throllefunction
    const throttleHandelScroll=throttleFunction(handelScroll,500)
}

export default React.memo(InfiniteScroll);