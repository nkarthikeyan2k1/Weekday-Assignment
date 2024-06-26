import React, { useState, useEffect, useCallback, lazy, Suspense } from "react";
import { getJobsDetail } from "../services/APIServices";
import InfiniteScroll from "../shared/components/InfiniteScroll";
// import JobCard from "../shared/components/JobCard";
import JobsFilter from "../shared/components/JobsFilter";
import { useSelector, useDispatch } from "react-redux";
import { useTheme } from "../ThemeContext";
import { ErrorBoundary } from "react-error-boundary";
import Fallback from "../components/Fallback";
import LoadingBar from "./LoadingBar";
import JobShimmer from "../shared/components/JobShimmer";

const JobCard = lazy(() => import("../shared/components/JobCard"));

function CandidateApplication() {
  //State declartions
  // const [jobData,setJobData]=useState({
  //     jdList:[],
  //     totalCount:0
  // });
  const jobData = useSelector((state) => state.jobData);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [payload, setPayload] = useState({ limit: 12, offset: 0 });
  const { theme, toggleTheme } = useTheme();

  // To handel the API calls
  useEffect(() => {
    if (isLoading === false) fetchData();
  }, [payload]);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await getJobsDetail(payload);
      const { jdList, totalCount } = response.data;
      dispatch({
        type: "JOBSDETAILS",
        payload: {
          jdList: jdList,
          totalCount: totalCount,
        },
      });
    } catch (error) {
      console.error("error", error);
    }
    setIsLoading(false);
  };
  const loadMore = useCallback(() => {
    setPayload((pre) => ({ ...pre, offset: pre.offset + pre.limit }));
  }, []);

  return (
    <div id="Candidate_Application" className="container">
      <div className="modal-switch">
        <label>
          <input
            type="checkbox"
            defaultChecked={theme === "dark"}
            name="toggle"
            onChange={toggleTheme}
          />
          <span className="slider round">
            <img
              src={
                theme === "dark"
                  ? "../../../assets/img/Moon.png"
                  : "../../../assets/img/sun.png"
              }
              height="100%"
              width="100%"
              alt="IMG"
            />
          </span>
        </label>
      </div>
      <JobsFilter />
      {jobData?.totalCount > jobData?.jdList.length && (
        <ErrorBoundary fallback={Fallback}>
          <Suspense fallback={() => {}}>
            <InfiniteScroll loadMore={loadMore} />
          </Suspense>
        </ErrorBoundary>
      )}
      <ErrorBoundary FallbackComponent={Fallback} onReset={() => {}}>
        {/* <Suspense fallback={<LoadingBar isLoading={isLoading} />}> */}
        <Suspense>
          {jobData && jobData?.totalCount > 0 ? (
            <JobCard />
          ) : (
            !isLoading && (
              <div className="App">
                <img
                  alt="img"
                  src="https://jobs.weekday.works/_next/static/media/nothing-found.4d8f334c.png"
                  width="150"
                  height="150"
                />
                <h2>No Jobs available for this category at the moment</h2>
              </div>
            )
          )}
        </Suspense>
      </ErrorBoundary>
      {/* <LoadingBar isLoading={isLoading} /> */}
      {isLoading && <JobShimmer />}
    </div>
  );
}

export default CandidateApplication;
