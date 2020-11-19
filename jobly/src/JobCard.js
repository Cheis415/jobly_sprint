import React from 'react';



function JobCard({title, salary, companyHandle, equity}) {
    let dollaz;
    if (salary) {
        dollaz = `$${salary}`
    }
    return (
        <div>
           <h1>{title}  {dollaz}</h1>
           <p>{companyHandle}</p>
           <p>equity: {equity}</p>
        </div>
    );
}

export default JobCard
