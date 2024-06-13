import React, { Suspense, lazy } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useSelector } from "react-redux";
import Fallback from "../../components/Fallback";
import JobShimmer from "./JobShimmer";
// import Jobs from "./Jobs";

const Jobs = lazy(() => import("./Jobs"));
function JobCards() {
  const jobData = useSelector((state) => state.jobData);
  const filtersData = useSelector((state) => state.filtersData);

  // To hanfel the api data with the based on the activated filter details
  const filterJobs = (jobList, filtersData) => {
    const filteredJobs = jobList.filter((job) => {
      if (filtersData.jobRole.length > 0) {
        const jobRoleMatch = filtersData.jobRole.some(
          (item) => item.value.toLowerCase() === job[item.name].toLowerCase()
        );
        if (!jobRoleMatch) return false;
      }
      if (filtersData.empCount.length > 0) {
      }
      if (filtersData.minExp !== null) {
        const experienceMatch = filtersData.minExp.value >= job.minExp;
        if (!experienceMatch) return false;
      }
      if (filtersData.remote.length > 0) {
        const remoteMatch = filtersData.remote.some(
          (item) => item.value.toLowerCase() === job.location.toLowerCase()
        );
        if (!remoteMatch) return false;
      }
      if (filtersData.minJdSalary !== null) {
        const salaryMatch = filtersData.minJdSalary.value <= job.minJdSalary;
        if (!salaryMatch) return false;
      }
      if (filtersData.companyName !== null) {
        const companyNameMatch = job.companyName
          .toLowerCase()
          .includes(filtersData.companyName.toLowerCase());
        if (!companyNameMatch) return false;
      }
      return true;
    });

    return filteredJobs;
  };

  const filteredJobs = filterJobs(jobData.jdList, filtersData);

  return (
    <>
      <section>
        {filteredJobs && filteredJobs.length > 0 ? (
          <div className="container">
            <div className="row row-cols-1 row-cols-md-3 g-4">
              {filteredJobs.map((item) => (
                <div
                  key={item.jdUid}
                  className="col-xl-4 col-lg-4 col-md-6 col-sm-12"
                >
                  <ErrorBoundary FallbackComponent={Fallback}>
                    <Suspense fallback={<div>...loadingJobs</div>}>
                      <Jobs item={item} />
                    </Suspense>
                  </ErrorBoundary>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="App">
            <img
              alt="img"
              src="https://jobs.weekday.works/_next/static/media/nothing-found.4d8f334c.png"
              width="150"
              height="150"
            />
            <h2>No Jobs available for this category at the moment</h2>
          </div>
        )}
      </section>
    </>
  );
}

export default React.memo(JobCards);
