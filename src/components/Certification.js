import React from 'react';
import certificateImage from '../Images/aws-certified-cloud-practitioner.png'
const Certification = ({certs}) => (
    <div className='section'>
        <h2>Certifications</h2>
        {certs.map((cert,index) => {
            return(
                <div key={index} className='certification'>
                    <h3>{cert.name}</h3>
                    <div className='item'>
                        <div className='left'>
                            <img src={certificateImage} alt='AWS Cloud Practitioner Certificate'></img>
                        </div>
                        <div className='right'>
                            <p>{cert.issuedDate}</p>
                            <p>Validation {cert.validation}</p>
                        </div>
                    </div>
                </div>
            )
        })}
    </div>
);

export default Certification;