import React from 'react';
import { Element } from 'react-scroll';
import Project from '../Project/Project';
import "./ProjectContainer.css";
const ProjectContainer = () => {
    const projects=[
        {
            img:"https://wallpapercave.com/wp/wp4770065.jpg",
            title:"Cryptography Using Python",
            desc:
            "It is an Encryption and Decryption application which will be developed using python and is used to encrypt any type of file based on AES Standards and the files that  are encrypted using this script can also able to decrypt it. We can encrypt and decrypt any type of file .",
            link:"www.google.com",
        },
        {
            img:"https://nevonprojects.com/wp-content/uploads/2022/01/IV-Bag-alert-web-main.jpg",
            title:"Saline Monitoring System Using IOT",
            desc:
            "The Saline Monitoring and automatic alert system was developed in order to protect the patient and to provide them with safety during saline feeding hours. It is designed to monitor the weight of the container in order to ensure that the correct amount of saline is being used. The system utilizes a load cell to measure the weight and a micro controller to read and write the process.",
            link:"www.google.com",
        },
    ];
  return (
<Element className="projectcontainer" id="projects">
    <h1>Projects</h1>
    <p>Here are some projects which I have done.</p>
    <div className='projectcontainer__projects'>
    {
    projects.map((project,index) => {
        return(
            <Project
             key={index} 
             img={project.img} 
             title={project.title} 
             desc={project.desc} 
             link={project.link} 
             />
        )
    })
}
    </div>
</Element>
  )
}

export default ProjectContainer