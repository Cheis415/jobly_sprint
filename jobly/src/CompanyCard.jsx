
import React from 'react';
import JoblyApi from './api';

function CompanyCard({name, handle, description, logoUrl}) {

                        
    return (
        <div>
           <h1>{handle}</h1>
           <h3> {name} </h3>
           <p> {description} </p>
           <img src={logoUrl} />
        </div>
    );
}

// CompanyCard.defaultProps = {handle: "arnold-berger-townsend",
//                             name: "Arnold, Berger, and Townsend",
//                             description: "Kind crime at perhaps beat. Enjoy deal purpose serve begin or thought. Congress everything miss tend.",
//                             logoUrl: null                        
//                      }

export default CompanyCard;