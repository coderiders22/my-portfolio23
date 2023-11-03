import React from 'react'
import './Handles.css'
import { AiFillLinkedin, AiFillTwitterSquare } from 'react-icons/ai';
import { FaGithubSquare } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';


const Handles = () => {
  return (
    <section className='socials'>
      <a href="https://www.linkedin.com/in/manavrai/" target='_blank' rel="noopener noreferrer"><AiFillLinkedin className='icon' /></a>
      <a href="https://instagram.com/manav_rai1234?igshid=OGQ5ZDc2ODk2ZA==" target='_blank' rel="noopener noreferrer"><FaInstagram className='icon' /></a>

      <a href="https://github.com/coderiders22/" target='_blank' rel="noopener noreferrer"><FaGithubSquare className='icon' />
      </a>


    </section>
  )
}

export default Handles
