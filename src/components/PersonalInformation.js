import React from "react";

const PersonalInformation = (props) => (
    <div className="personal-information">
      <h1>{props.name}</h1>
      <ul>
        <li>{props.email}</li>
        <li><a href={props.github}>GitHub</a></li>
        <li><a href={props.linkedin}>LinkdIn</a></li>
      </ul>
    </div>
  );

export default PersonalInformation;