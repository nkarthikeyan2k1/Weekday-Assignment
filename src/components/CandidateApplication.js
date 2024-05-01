import React,{useState,useEffect, useCallback} from "react";
import APIServices from "../services/APIServices";
import InfiniteScroll from "../shared/components/InfiniteScroll";
import JobCard from "../shared/components/JobCard";

function CandidateApplication(){

    //State declartions
    const [jobData,setJobData]=useState({
        jdList:[],
        totalCount:0
    });

    const [payload,setPayload]=useState({limit:10,offset:0});

    
    // To handel the API calls
    useEffect(()=>{
        fetchData()
    },[payload])



    const fetchData=async()=>{
        try{
            const response=await APIServices.getJobsDetail(payload);
            const {jdList,totalCount}=response.data;
            setJobData((prev)=>(
                {
                    jdList:[...prev.jdList,...jdList],
                    totalCount:totalCount
                }
            ))
        }catch(error){
            console.log('error',error)
        }
    }
        const loadMore=useCallback(()=>{
            setPayload((pre)=>({...pre,offset:pre.offset+pre.limit}))
        },[payload])

    return(
        <>
        <InfiniteScroll loadMore={loadMore} />
        <JobCard jobData={jobData}/>
        <span onClick={loadMore}>hellow world</span>
        </>
    )
}

export default CandidateApplication;