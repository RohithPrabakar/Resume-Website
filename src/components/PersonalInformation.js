import React from "react";
import '../Styles/PersonalInformation.css';
const PersonalInformation = (props) => (
    <div className="secion PersonalInformation">
      <h1>{props.name}</h1>
      <ul>
        <li><a href="\">{props.email}</a></li>
        <li><a href={props.github}>GitHub </a></li>
        <li><a href={props.linkedin}>LinkdIn</a></li>
      </ul>
    </div>
  );

export default PersonalInformation;