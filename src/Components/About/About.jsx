import React from 'react'
import './About.css'
import theme_pattern from '../../Assets/theme_pattern.svg'
import profile_image from '../../Assets/DP.jpg'

const About = () => {
    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h1>About Me</h1>
                <img src={theme_pattern} alt="img" />
            </div>
            <div className="about-section">
                <div className="about-left">
                    <img src={profile_image} alt="Profile" />
                </div>

                <div className="about-right">
                    <div className="about-para">
                        <p>
                            I am a MERN Stack Developer with a strong foundation in JavaScript and modern web development. I specialize in building end-to-end web applications using React.js, Node.js, Express, and MongoDB, and I am currently pursuing an MSc in Computer Science.
                        </p>
                        <p>
                            My passion for technology is reflected not only in my academic background but also in the projects and internships I have completed, where I apply dedication, curiosity, and problem-solving skills to every task.
                        </p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill">
                            <p>HTML & CSS</p>
                            <hr style={{ width: "50%" }} />
                        </div>
                        <div className="about-skill">
                            <p>React JS</p>
                            <hr style={{ width: "70%" }} />
                        </div>
                        <div className="about-skill">
                            <p>JavaScript</p>
                            <hr style={{ width: "60%" }} />
                        </div>
                        <div className="about-skill">
                            <p>NLP & AI</p>
                            <hr style={{ width: "50%" }} />
                        </div>
                    </div>
                </div>

            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>5+</h1>
                    <p>Projects Completed</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>10+</h1>
                    <p>Certificate Completed</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>4+</h1>
                    <p>Programming Lang</p>
                </div>
            </div>
        </div>
    )
}

export default About