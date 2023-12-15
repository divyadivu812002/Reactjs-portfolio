import React from "react"
import {Link} from "react-scroll";
import "./TopContent.css";
const TopContent = () => {
  return (
    <div className="topcontent">
        <div className="topcontent__container">
            <h1>DIVYA.P</h1>
            <p>An Aspiring Software developer</p>
            <a href="https://drive.google.com/file/d/1E-eyq8ZZLRaJVjVFM2MciVg5SiY7oXFe/view?usp=drivesdk">
                <button className="topcontent__downloadButton">Download CV</button>
            </a>
            <Link to="projects" smooth={true} duration={500}>
                <button className="topcontent__workButton">My Work</button>
            </Link>

        </div>

    </div>
  )
}
export default TopContent
