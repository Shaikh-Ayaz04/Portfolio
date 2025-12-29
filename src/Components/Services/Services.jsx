import React from 'react'
import './Education.css'
import theme_pattern from '../../Assets/theme_pattern.svg'
import Education_Data from '../../assets/eduction_data.js'
import Experience_Data from '../../assets/Experience_data.js'


const Services = () => {
  return (
    <div id='services' className='education'>
        <div className="services-title">
            <h1>Education</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="services-container">

            <div class="education-row">
                <div class="education-column">
                    <h3 class="title"> Education </h3>
                    <div class="education-box">
                        {Education_Data.map((edu, index) => (
                            <div class="education-content" key={index}>
                                <div class="content">
                                    <div class="year"> {edu.Year} | {edu.Degree} </div>
                                    <h3>{edu.Institution_Name}</h3>
                                    <p>{edu.description}</p>
                                    <div class="year"> Percentage : {edu.Percentage}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div class="education-column">
                    <h3 class="title"> Experience </h3>
                    <div class="education-box">
                        {Experience_Data.map((exp, index) => (
                            <div class="education-content" key={index}>
                                <div class="content">
                                    <div class="year">{exp.role}</div>
                                    <h3>{exp.company}</h3>
                                    <p>{exp.description}</p>
                                    <h3 className="year">{exp.duration}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services