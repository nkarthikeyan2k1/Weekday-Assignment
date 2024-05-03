import React,{ useEffect, useState } from "react";
import { throttleFunction } from "../../services/UtlitsServices";

const InfiniteScroll=({loadMore})=>{

  const [scroll,setScroll]=useState({
    inner:window.innerHeight,
    // top:Math.trunc(document.documentElement.scrollTop),
    top:window.scrollY,
    off:document.documentElement.offsetHeight
  })

    useEffect(()=>{
      document.addEventListener('scroll',throttleHandelScroll,{passive:true})
        return ()=>document.removeEventListener('scroll',throttleHandelScroll)
    },[loadMore])

    const handelScroll=()=>{
      setScroll({
        inner:window.innerHeight,
      // top:Math.trunc(document.documentElement.scrollTop),
      top:window.scrollY,
      off:document.documentElement.offsetHeight
      })
          if (window.innerHeight + window.scrollY !== document.documentElement.offsetHeight) {
            return;
          }
          loadMore();
    }

    // handel the scroll evevnt repeted check using the throllefunction
    const throttleHandelScroll=throttleFunction(handelScroll,500)

    return <div style={{position:"fixed",zIndex:"999",background:"aliceblue"}} >
      scroll {scroll.inner} { scroll.top} {scroll.off} <br />
      checking {scroll.inner+scroll.top}'===' {scroll.off}
      </div>
}

export default React.memo(InfiniteScroll);