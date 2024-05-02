import React,{ useEffect } from "react";
import UseThrottling from "../../hooks/UseThrottling"; 

const InfiniteScroll=({loadMore})=>{

    useEffect(()=>{
        window.addEventListener('scroll',handelScroll)
        return ()=>window.removeEventListener('scroll',handelScroll)
    },[])

    const handelScroll=()=>{
      // const windowHeight = window.innerHeight;
      // const scrollTop = document.documentElement.scrollTop;
      // const documentHeight = document.documentElement.offsetHeight;
      
      // // Calculate the percentage of scroll completion
      // const scrollPercentage = (scrollTop + windowHeight) / documentHeight * 100;

      //  // Trigger loadMore when scrolled to 70% of the page height
      //  console.log('scrollPercentage',Math.floor(scrollPercentage))
      //   if (Math.floor(scrollPercentage) == 70) {
      //     loadMore();
      //   }

        if (
            window.innerHeight + document.documentElement.scrollTop
            === document.documentElement.offsetHeight
          ) {
            loadMore();
          }
    }

    const throttleHandelScroll=()=>{
      // console.log('rrr')
      //  UseThrottling(handelScroll,500);
       UseThrottling((()=>{
        console.log('throttle')
       }),1000);
    }
    // return <div>Your component content here</div>;
}

export default InfiniteScroll;