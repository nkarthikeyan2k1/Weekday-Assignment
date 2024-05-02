import React,{useState,useEffect, useCallback} from "react";
import {getJobsDetail} from "../services/APIServices";
import InfiniteScroll from "../shared/components/InfiniteScroll";
import JobCard from "../shared/components/JobCard";
import JobsFilter from "../shared/components/JobsFilter";

function CandidateApplication(){

    //State declartions
    const [jobData,setJobData]=useState({
        jdList:[],
        totalCount:0
    });
    const [loading,setLoading]=useState(false)

    const [payload,setPayload]=useState({limit:12,offset:0});

    
    // To handel the API calls
    useEffect(()=>{
        fetchData()
    },[payload])



    const fetchData=async()=>{
        setLoading(true)
        try{
            const response=await getJobsDetail(payload);
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
        setLoading(false)
    }
        const loadMore=useCallback(()=>{
            setPayload((pre)=>({...pre,offset:pre.offset+pre.limit}))
        },[payload])

    return(
        <div id="Candidate_Application" className="container">
        <JobsFilter />
        <InfiniteScroll loadMore={loadMore} />
        <div className="App">
            {/* {loading && <h2>...Loading</h2>} */}
        </div>
        {jobData && jobData.totalCount>0 ? <JobCard jobData={jobData}/>: <div className="App">
            <img src="https://jobs.weekday.works/_next/static/media/nothing-found.4d8f334c.png" width="150" height="150" />
            <h2>No Jobs available for this category at the moment</h2>
        </div>}
        </div>
    )
}

export default CandidateApplication;