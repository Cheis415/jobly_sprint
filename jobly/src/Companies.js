import React, { useState, useEffect } from "react";
import JoblyApi from "./api";
import CompanyCard from './CompanyCard';
import Search from "./Search";

 function Companies() {

  let [companies, setCompanies] = useState(null);
  

  useEffect(function getCompaniesOnMount() {
    search();
  }, []);

  async function search(name) {
    let result = await JoblyApi.getCompanies(name);
    setCompanies(result);
  }

  if (!companies) return "Loading....";
      
  return (   
      
        <div>
           <Search searching={search} />
        {companies.length
            ? (
                <div>
                  {companies.map(c => (
                      <CompanyCard
                          key={c.handle}
                          handle={c.handle}
                          name={c.name}
                          description={c.description}
                          logoUrl={c.logoUrl}
                      />
                  ))}
                </div>
            ) : (
                <p className="lead">Sorry, no results were found!</p>
            )}
       </div>
  );
}

 

export default Companies;