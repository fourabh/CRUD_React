import React from 'react'
import "./Resume.css";

const Resume = ({experience,education,skills,resume}) => {

    // const {year,company,role} = experience;
    const {year, company, role} = experience[0]

  return (
    <>
  
  <div id="header" />
  <div className="left" />
  <div className="stuff">
    <br />
    <br />
    <h1>Resume</h1>
    <h2>Emily</h2>
    <hr />
    <br />
    <p className="head">Interests</p>
    <ul>
      <li>Drawing</li>
      <li>Photography</li>
      <li>Design</li>
      <li>Programming</li>
      <li>Computer Science</li>
    </ul>
    <p className="head">Skills</p>
    <ul>
      <li>Web Design with HTML &amp; CSS</li>
      <li>{skills}</li>
    </ul>
    <p className="head">Education</p>
    <ul>
      <a href="http://www.wiltonhighschool.org/pages/Wilton_High_School">
        <li>Wilton High School</li>
      </a>
      {/*Link*/}
      <a href="https://www.silvermineart.org/">
        <li>Silvermine School of Arts</li>
      </a>
      <li>Codeacademy</li>
      <li>{education}</li>
    </ul>
    <p className="head">Experience</p>
    <ul>
      <li>Student Technology Intern for Wilton School District</li>
      <li>Babysitter</li>   
      <li>Company : {company}</li>
      <li>Role : {role}</li>
      <li>Year : {year}</li>
    </ul>
    <p className="head">Extracurriculars</p>
    <ul>
      <li>Recycling Club</li>
      <li>Gardening Club</li>
      <li>Book Club</li>
    </ul>
  </div>
  <div className="right" />
  <div id="footer">
    <h2 id="name">Emily</h2>
  </div>
</>

  )
}

export default Resume
