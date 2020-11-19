import React from 'react';



function JobCard({title, salary, company_handle, equity}) {

    return (
        <div>
           <h1>{title}  ${salary}</h1>
           <p>{company_handle}</p>
           <p>equity: {equity}</p>
        </div>
    );
}

// JobCard.defaultProps = {
//     title: "Camera operator",
//     salary: "130000",
//     company_handle: "arnold-berger-townsend",
//     equity: "0",

// }


export default JobCard
