import React, {useState, useEffect } from "react";
import JoblyApi from "../api/api";
import JobCardList from "./JobCardList";
import LoadingSpinner from "../common/LoadingSpinner";

function JobList() {
    const [jobs, setJobs] = useState(null);

    useEffect(function getAllJobsOnMount() {
        search();
      }, []);

      /** Triggered by search form submit; reloads jobs. */
    async function search(title) {
        let jobs = await JoblyApi.getJobs(title);
        setJobs(jobs);
    }

    if (!jobs) return <LoadingSpinner />;

    return (
        <div className="JobList col-md-8 offsed-md-2">
            {jobs.length
                ? <JobCardList jobs={jobs} /> 
                : <p className="lead">Sorry, no results found.</p>
            }
        </div>
    );
}

export default JobList;