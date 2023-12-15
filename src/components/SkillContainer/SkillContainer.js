import React from 'react'
import {Element} from "react-scroll"
import skilling from "../../assets/istockphoto-811268074-612x612 (3).jpg";
import Linearprogress from"@material-ui/core/Linearprogress";
import "./SkillContainer.css";
const SkillContainer = () => {
  return (
    <Element className="skillcontainer" id="skills">
    <div className='skillcontainer__image'>
    <img src={skilling} alt="" />
    </div>
    <div className='skillcontainer__text'>
        <h2>SKILLSET</h2>
        <div className='skillcontainer__skillset'>
            <h5>Java</h5>
            <div className="skillcontainer__slider skillcontainer__slider1">
            <Linearprogress variant="determinate" value={90} />
            </div>  
            </div>
            <div className='skillcontainer__skillset'>
            <h5>python</h5>
            <div className="skillcontainer__slider skillcontainer__slider2">
            <Linearprogress variant="determinate" value={80} />
            </div>
            </div>
            <div className='skillcontainer__skillset'>
            <h5>React</h5>
            <div className="skillcontainer__slider skillcontainer__slider3">
            <Linearprogress variant="determinate" value={75} />
            </div>   
            </div>
            <div className='skillcontainer__skillset'>
            <h5>Internet Of Things</h5>
            <div className="skillcontainer__slider skillcontainer__slider4">
            <Linearprogress variant="determinate" value={80} />
            </div> 
            </div>
            <div className='skillcontainer__skillset'>
            <h5>HTML,CSS</h5>
            <div className="skillcontainer__slider skillcontainer__slider5">
            <Linearprogress variant="determinate" value={80} />
            </div> 
            </div>
            <div className='skillcontainer__skillset'>
            <h5>c</h5>
            <div className="skillcontainer__slider skillcontainer__slider6">
            <Linearprogress variant="determinate" value={75} />
            </div> 
            </div>

    </div>
    </Element>
  )
}

export default SkillContainer