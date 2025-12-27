import React from 'react'
import './MyWork.css'
import theme_pattern from '../../Assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../Assets/arrow_icon.svg'

const MyWork = () => {

    return (
        <div id='work' className='mywork'>
            <div className="mywork-title">
                <h1>Projects</h1>
                <img src={theme_pattern} alt="" />
            </div>

            <div className="mywork-container">
                {mywork_data.map((work, index) => {
                    return (
                        <div className="mywork-card" key={index}>
                            <img src={work.w_img} alt={work.w_name} key={index} />
                            <div className='mywork-card-content'>
                                <p className='mywork-card-title'>{work.w_name}</p>
                                <p className='mywork-card-desc'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptatibus minus non rem consequuntur repellat facilis. Ea libero itaque ab beatae doloribus suscipit temporibus soluta.</p>
                                <div className='mywork-card-button-sec'>
                                    <button className="mywork-card-button">Live Demo</button>
                                    <button className="mywork-card-button secondary">Source Code</button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

            <div className="mywork-showmore">
                <p>Show More</p>
                <img src={arrow_icon} alt="" />
            </div>


        </div>
    )
}

export default MyWork


