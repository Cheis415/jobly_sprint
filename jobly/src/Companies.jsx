import React, { useState } from "react";
import  JoblyApi  from "./api";
import axios from "axios";



function Companies() {
  const [companies, setCompanies] = useState(null);

  async function search(name) {
    let result = await JoblyApi.getCompanies(name);
    setCompanies(result)
    return companies.name;
  }

  return (
    <div className="App">
     <h1>{search("Arnold, Berger and Townsend")}</h1>
    
    </div>
  );
}

export default Companies;