import React from 'react'
import './experience.css'
import {BsCheckCircleFill} from 'react-icons/bs'

const experience = () => {
  return (
    <section id='experience'>
      <h5>The skills i have</h5>
      <h2>My experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>King</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsCheckCircleFill className='experience__details-icon'/>
              <div>
                <h4>Guarding the castle</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsCheckCircleFill className='experience__details-icon'/>
              <div>
                <h4>Maintaining relationships with other King</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsCheckCircleFill className='experience__details-icon'/>
              <div>
                <h4>Tax collection</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsCheckCircleFill className='experience__details-icon'/>
              <div>
                <h4>Development of the education system</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>

        {/*================================*/}

        <div className="experience__backend">
          <h3>Swamp expert</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsCheckCircleFill className='experience__details-icon'/>
              <div>
                <h4>Fishing in swamp</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsCheckCircleFill className='experience__details-icon'/>
              <div>
                <h4>Thriving in swamp ecosystem</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsCheckCircleFill className='experience__details-icon'/>
              <div>
                <h4>Construction of the swamp</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsCheckCircleFill className='experience__details-icon'/>
              <div>
                <h4>Cooking</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default experience