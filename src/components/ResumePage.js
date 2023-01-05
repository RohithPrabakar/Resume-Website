import React from 'react';
import '../Styles/ResumePage.css';
import PersonalInformation from './PersonalInformation';
import Experience from './Experience';
import Education from './Education';
import Tagline from './Tagline';
import Projects from './Projects';
import Skills from './Skills';
import Certification from './Certification';

const ResumePage = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const personal_info = {
    name:"Rohith Prabakar",
    email:"prohith02@gmail.com",
    github:"https://github.com/RohithPrabakar",
    linkedin:"www.linkedin.com/in/prohith02" 
  }
  
  const tagline = "Passionate Computer Engineering student (3.67 GPA) with experience working with computer networking and skilled in programming and deploying web application on AWS platform. Seeking to use proven skills in JavaScript and AWS services to effectively serve your company."

  const project = [
  {
    name: 'Recipe website',
    description: 'Full stack website with CRUD application',
    details: [' Using EJS for front-end and bootstrap framework for styling',' MongoDB, express to make CRUD operations in the application', 'GitHub repository to store the code'],
    github_link: 'https://github.com/RohithPrabakar/Cooking-Recipe'
  },
  {
    name: 'Weather Forecast Website',
    description: 'Full stack website with api requests',
    details: ['Uses HTML and CSS for frontend',' Express is used to make calls to the API in RapidAPI', 'GitHub repository to store the code'],
    github_link: 'https://github.com/RohithPrabakar/The-Weather-Project'
  }]

  const skills = [
    {
      name: "AWS",
      skills: ['EC2', 'VPC', 'Lambda', 'ECS', 'IAM', 'RDS', 'DynamoDB', 'S3', 'Route 53', 'Cloudfront', 'API Gateway', 'SNS']
    },
    {
      name:"Languages",
      skills:['Python', 'Javascript (React, Express)','C++', 'SQL (MSQL)', 'NoSQL (MongoDB)']
    },
    {
      name: "Tools",
      skills:['Git', 'Github', 'Bootstrap']
    }
  ]

  const certification = [
    {
      name: 'AWS Certified Cloud Practitioner	(CLF-C01)',
      issuedDate: "Dec 27, 2022",
      validation: "# Y0CZ0932YN41Q93H",
      image: '../Images/aws-certified-cloud-practitioner.png'
    }
  ]

  const experience = [
    {
      position: 'Building Manager',
      location: 'Quintyne Hall, Farmingdale, NY',
      date: 'September 2022 - Current',
      details: ['Greet students and visitors at the front desk; address all questions and concerns', 'Hand out recreational equipment; check building equipment for any issues', 'Maintain rooms for upcoming reservations; unlock/lock rooms when necessary', ' Complete daily building walkthrough to ensure security and building rules are followed by occupants']
    },
    {
      position: 'Unit Tester Intern',
      location: 'Yercadu Electronics, Chennai, TN, India',
      date: 'December 2020 – January 2021',
      details: ['Worked with the developers to identify the design/development errors, resolve them, and to get the software released to integration and system testing', 'Wrote test protocols to cover different scenarios with different test strategies', 'Collaborated with 3 interns and a senior tester to brainstorm and implement tests in different phases.']
    },
    {
      position: 'Web Developer',
      locaation: 'Sri Boghar Polytechnic College, Panthanenthal, TN, India',
      date: 'October 2018 - January 2019',
      details: ['Developed a landing web page using HTML/CSS and JavaScript.','Gathered user requirements, and built, and maintained code for the app.','Designed the web page better than the previous one resulting in 20% more inquiries through the website.']
    }
  ]

  const education = [
    {
      degree: 'Bachelor of Science in Computer Engineering Tech',
      college: 'Farmingdale State College, Farmingdale, NY',
      graduationDate: 'Expected Graduation Date: May 2023',
      coursework: ['UNIX Operating Systems', 'Data Communications & Network', 'Advanced Networking', 'Data Structures'],
      honors: ['President’s List, 2021',  'Dean’s List, 2022', 'Cum Laude (3.67/4.0 GPA)']
    }
  ]

  return (
  <div className={`resume-page ${isDarkMode ? 'dark' : 'light'}`}>
    <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
    <PersonalInformation 
        name={personal_info.name}
        email={personal_info.email}
        github={personal_info.github}
        linkedin={personal_info.linkedin}  
    />
    <Tagline
    content = {tagline}
    />
    <Projects
      projects = {project}
    />
    <Skills
      skills = {skills}
    />
    <Certification
      certs = {certification}
    />
    <Experience 
      exps = {experience}
    />
    <Education 
      educ = {education}
    />
    <h1>{isDarkMode}</h1>
  </div>
  )};

export default ResumePage;
