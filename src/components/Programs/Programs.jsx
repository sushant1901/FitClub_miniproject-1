import React from 'react'
import './Program.css';
import { programsData } from '../../data/programsData';
import RightArrow from '../../assets/rightArrow.png';

const Programs = () => {
    return (

        <div className="Programs" id="programs">
            {/* header */}
            <div className="programs-header">
                <sapn className='stroke-text'>Explore our</sapn>
                <sapn>Programs</sapn>
                <sapn className='stroke-text'>to shape you</sapn>
            </div>

            <div className="program-categories">
                {programsData.map((program) => (
                    <div className="category">
                        {program.image}
                        <span>{program.heading}</span>
                        <span>{program.details}</span>
                        <div className="join-now">
                            <span>Join Now</span>
                            <img src={RightArrow} alt="" />
                            
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default Programs
