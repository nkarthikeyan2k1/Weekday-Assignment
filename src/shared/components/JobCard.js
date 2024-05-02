import React from "react";

function JobCards({jobData}){

    return(
        <>
        <section>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                {jobData.jdList.map((item)=>(
                        <div key={item.jdUid} className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                            <div className="card h-100 job-card">
                            <div className="card-body">
                                <div className="d-flex alihn-items-center ps-1">
                                    <img src=""  alt="logo" />
                                    <div className="job-info text-capitalize" style={{marginLeft:"10px"}}>
                                        <h2>company name</h2>
                                        <h3>{item.jobRole}</h3>
                                        <p>{item.location}</p>
                                    </div>
                                </div>
                                <p>Estimated Salary: {`₹${item.minJdSalary||0} - ${item.maxJdSalary} LPA`}
                                <span aria-label="Offered salary range" class=""> ✅</span>
                                </p>
                                <div className="about-company mb-3">
                                    <h6>About Company</h6>
                                    <div className="opacityEffect">
                                        <p><strong>About us</strong></p>
                                        <p className="notes"><span>{item.jobDetailsFromCompany.slice(0,300)}</span></p>
                                        <div className="App"><a>Show More</a></div>
                                    </div>
                                </div>
                                <div className="job-info">
                                <h3>Minimum Experience</h3>
                                <h2>{item.minExp||'--'} years</h2>
                            </div>
                            </div>
                            <button className="btn Easy-apply">⚡ Easy Apply</button>
                            <button className="btn Referral">Unlock referral asks</button>
                            {/* <div className="card-footer">
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </div> */}
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
        </section>
        </>
    )
}

export  default React.memo(JobCards);