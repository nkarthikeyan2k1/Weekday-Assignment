import React from "react";
import {useSelector } from 'react-redux'

function JobCards(){

    const jobData=useSelector(state=>state.jobData)
    const filtersData = useSelector(state => state.filtersData);
    
    // To hanfel the api data with the based on the activated filter details
    const filterJobs = (jobList, filtersData) => {
        const filteredJobs = jobList.filter((job) => {
            if (filtersData.jobRole.length > 0) {
                const jobRoleMatch = filtersData.jobRole.some(item => (item.value).toLowerCase() === (job[item.name]).toLowerCase());
                if (!jobRoleMatch) return false;
            }
            if (filtersData.empCount.length > 0) {
            }
            if (filtersData.minExp !== null) {
                const experienceMatch = filtersData.minExp.value >= job.minExp;
                if (!experienceMatch) return false;
            }
            if (filtersData.remote.length > 0) {
                const remoteMatch = filtersData.remote.some(item => (item.value).toLowerCase() === (job.location).toLowerCase());
                if (!remoteMatch) return false;
            }
            if (filtersData.minJdSalary !== null) {
                const salaryMatch = filtersData.minJdSalary.value <= job.minJdSalary;
                if (!salaryMatch) return false;
            }
            if (filtersData.companyName !== null) {
                const companyNameMatch =  ((job.companyName).toLowerCase()).includes((filtersData.companyName).toLowerCase());
                if (!companyNameMatch) return false;
            }
            return true;
        });
    
        return filteredJobs;
    };
    
    const filteredJobs = filterJobs(jobData.jdList, filtersData);
    

    return(
        <>
        <section>
        {filteredJobs && filteredJobs.length>0  ? (<div className="container">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                 {filteredJobs.map((item)=>(
                        <div key={item.jdUid} className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                            <div className="card h-100 job-card">
                            <div className="card-body">
                                <div className="posted-time mb-1">
                                    <p>⏳ Posted 10 days ago</p>
                                </div>
                                <div className="d-flex alihn-items-center ps-1">
                                    <img height="50" width="50" src={item.logoUrl} alt="logo" />
                                    <div className="job-info text-capitalize" style={{marginLeft:"10px"}}>
                                        <h2>{item.companyName}</h2>
                                        <h3>{item.jobRole}</h3>
                                        <p>{item.location}</p>
                                    </div>
                                </div>
                                <p>Estimated Salary: {`₹${item.minJdSalary||0} - ${item.maxJdSalary} LPA`}
                                <span aria-label="Offered salary range"> ✅</span>
                                </p>
                                <div className="about-company mb-3">
                                    <h6>About Company</h6>
                                    <div className="opacityEffect">
                                        <p><strong>About us</strong></p>
                                        <p className="notes"><span>{item.jobDetailsFromCompany.slice(0,200)}</span></p>
                                        <div className="App"><a>Show More</a></div>
                                    </div>
                                </div>
                                <div className="job-info">
                                <h3>Minimum Experience</h3>
                                <h2>{item.minExp||0} years</h2>
                            </div>
                            </div>
                            <button className="btn Easy-apply">⚡ Easy Apply</button>
                            <button className="btn Referral">Unlock referral asks</button>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>):( <div className="App">
                    <img alt="img" src="https://jobs.weekday.works/_next/static/media/nothing-found.4d8f334c.png" width="150" height="150" />
                    <h2>No Jobs available for this category at the moment</h2>
                </div>)}
        </section>
        </>
    )
}

export  default React.memo(JobCards);