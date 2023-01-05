import React from 'react';
import certificateImage from '../Images/aws-certified-cloud-practitioner.png'
const Certification = ({certs}) => (
    <div className='section'>
        <h2>Certifications</h2>
        {certs.map(cert => {
            return(
                <div className='certification'>
                    <h3>{cert.name}</h3>
                    <p>{cert.issuedDate}</p>
                    <p>Validation {cert.validation}</p>
                    <img src={certificateImage} alt='AWS Cloud Practitioner Certificate'></img>
                </div>
            )
        })}
    </div>
);

export default Certification;