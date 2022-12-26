import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {DiGithubAlt} from 'react-icons/di'
import {AiOutlineDribbbleSquare} from 'react-icons/ai'

//ikonas vajadzētu nomainīt uz savām

const headerSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com" target='_blank'><BsLinkedin/></a>
        <a href="https://www.github.com" target='_blank'><DiGithubAlt/></a>
        <a href="https://www.dribble.com" target='_blank'><AiOutlineDribbbleSquare/></a>
      
    </div>
  )
}

export default headerSocials