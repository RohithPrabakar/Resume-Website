import React from 'react';

const Certification = ({certs}) => (
    <div className='certifications'>
        <h2>Certifications</h2>
        {certs.map(cert => {
            return(
                <div className='certification'>
                    <h3>{cert.name}</h3>
                    <p>{cert.issuedDate}</p>
                    <p>Validation {cert.validation}</p>
                    <img src={cert.image}></img>
                </div>
            )
        })}
    </div>
);

export default Certification;