
import React from 'react';


function CompanyCard({ handle, description, logoUrl}) {

                        
    return (
        <div>
           <h1>{handle}</h1>
           <p> {description} </p>
           <img src={logoUrl} />
        </div>
    );
}

export default CompanyCard;