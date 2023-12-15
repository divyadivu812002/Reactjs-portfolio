import React from 'react';
import { Element } from 'react-scroll';
import{IconButton} from "@material-ui/core";
import { Instagram, LinkedIn} from "@material-ui/icons";
import"./Contact.css";
const Contact = () => {
  return (
    <Element className="contact" id="contact">
        <h1>Contact</h1>
        <div className='contact__container'>
            <p>
                Email: <span>divyadivu812002@gmail.com</span>
            </p>
            <div className='contact__icons'>
                <a href="https://www.linkedin.com/in/divya-p-934741267">
                <IconButton>
                   <LinkedIn/>
                </IconButton>
                </a>
                <a href="https://www.instagram.com/iam_divya._?igshid=OGQ5ZDc2ODk2ZA==">
                <IconButton>
                   <Instagram />
                </IconButton>
                </a>
            </div>
        </div>
    </Element>
  )
}

export default Contact;