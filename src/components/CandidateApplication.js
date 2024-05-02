import React,{useState,useEffect, useCallback} from "react";
import {getJobsDetail} from "../services/APIServices";
import InfiniteScroll from "../shared/components/InfiniteScroll";
import JobCard from "../shared/components/JobCard";
import JobsFilter from "../shared/components/JobsFilter";
import {useSelector, useDispatch} from 'react-redux'

function CandidateApplication(){

    //State declartions
    // const [jobData,setJobData]=useState({
    //     jdList:[],
    //     totalCount:0
    // });
    const jobData=useSelector(state=>state.jobData)
	const dispatch = useDispatch();
    const [isLoading,setIsLoading]=useState(false)
    const [payload,setPayload]=useState({limit:12,offset:0});

    
    // To handel the API calls
    useEffect(()=>{
        fetchData()
    },[payload])



    const fetchData=async()=>{
        setIsLoading(true)
        try{
            const response=await getJobsDetail(payload);
            const {jdList,totalCount}=response.data;
            dispatch({type:"JOBSDETAILS",payload:{
                jdList:jdList,
                totalCount:totalCount
            }})
            // setJobData((prev)=>(
            //     {
            //         jdList:[...prev.jdList,...jdList],
            //         totalCount:totalCount
            //     }
            // ))
        }catch(error){
            console.error('error',error)
        }
        setIsLoading(false)
    }
        const loadMore=useCallback(()=>{
            setPayload((pre)=>({...pre,offset:pre.offset+pre.limit}))
        },[])

    return(
        <div id="Candidate_Application" className="container">
        <JobsFilter />
        {jobData?.totalCount > jobData?.jdList.length && <InfiniteScroll loadMore={loadMore} />} 
        {jobData && jobData?.totalCount>0 ? 
            <div>
              <JobCard /> 
                <div className="d-flex justify-content-center">
                <div className={`loading-indicator${isLoading ? ' active' : ''}`}></div>
                </div>
            </div> : 
            <div className="App">
                <img alt="img" src="https://jobs.weekday.works/_next/static/media/nothing-found.4d8f334c.png" width="150" height="150" />
                <h2>No Jobs available for this category at the moment</h2>
            </div>}
        </div>
    )
}

export default CandidateApplication;