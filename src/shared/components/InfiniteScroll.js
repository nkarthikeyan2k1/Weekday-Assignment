import React, { useEffect, useState } from "react";
import { throttleFunction } from "../../services/UtlitsServices";

const InfiniteScroll = ({ loadMore }) => {
  useEffect(() => {
    document.addEventListener("scroll", throttleHandelScroll, {
      passive: true,
    });
    return () => document.removeEventListener("scroll", throttleHandelScroll);
  }, [loadMore]);

  const handelScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    const innerHeight = window.innerHeight;
    const offsetHeight = document.documentElement.offsetHeight;

    if (
      scrollTop >= offsetHeight - innerHeight - 1 &&
      scrollTop <= offsetHeight - innerHeight + 1
    ) {
      loadMore();
    }
    return;
  };

  // handel the scroll evevnt repeted check using the throllefunction
  const throttleHandelScroll = throttleFunction(handelScroll, 500);
};

export default React.memo(InfiniteScroll);
