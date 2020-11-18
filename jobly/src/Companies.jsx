import React, { useState } from "react";
import JoblyApi from "./api";
import CompanyCard from './CompanyCard';

 function Companies() {

  let [companies, setCompanies] = useState(null);
  
  // name: "Arnold, Berger, and Townsend",
  // description: "Kind crime at perhaps beat. Enjoy deal purpose serve begin or thought. Congress everything miss tend.",
  // logoUrl: null }]);

  // async function search(name) {
  //   let result = await JoblyApi.getCompanies(name);
  //   setCompanies(result);
  //   console.log(result);  
  // }
    async function myFunction() {
      console.log(await JoblyApi.getCompanies());
     let companies = await JoblyApi.getCompanies();
     setCompanies(companies);
    }


       
  return (   
      <div>
          {companies.map(c => (
                      <CompanyCard
                          handle={c.handle}
                          name={c.name}
                          description={c.description}
                          logoUrl={c.logoUrl}
                      />
                  ))}               
       </div>
  );
}

 

export default Companies;