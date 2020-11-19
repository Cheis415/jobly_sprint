import React, { useState, useEffect } from "react";
import JoblyApi from "./api";
import JobCard from './JobCard';
import Search from "./Search";



function Jobs() {
  const [jobs, setJobs] = useState(null);

  useEffect(function getJobsOnMount() {
    search();
  }, []);

  async function search(title) {
    let result = await JoblyApi.getJobs(title);
    setJobs(result);
    console.log(result);  
  }

  if (!jobs) return "Loading....";
  
  return (
    
      
      <div>
           <Search search={search} />
        {jobs.length
            ? (
                <div>
                  {jobs.map(j => (
                      <JobCard

                          company_handle={j.company_handle}
                          title={j.title}
                          salary={j.salary}
                          equity={j.equity}
                      />
                  ))}
                </div>
            ) : (
                <p className="lead">Sorry, no results were found!</p>
            )}
       </div>
  );
}

export default Jobs;