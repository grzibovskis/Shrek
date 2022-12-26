import React from 'react'
import './services.css'
import {AiOutlineCheck} from 'react-icons/ai'


const services = () => {
  return (
    <section id='services'>
      <h5>What i Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Princess Shipping</h3>
          </div>

          <ul className="service__list">
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>World wide.</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Any size.</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Fast delivery.</p>
            </li>
          </ul>
        </article>
        {/*=====================================*/}
        <article className="service">
          <div className="service__head">
            <h3>Swamp reconstruction</h3>
          </div>

          <ul className="service__list">
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Electricity.</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Energy allocation.</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Lifts and escalators.</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Facade engineering.</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Plumbing systems.</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Alarm systems.</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Humidity control.</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Water system.</p>
            </li>
          </ul>
        </article>
        {/*=================== End of Web development ==================*/}
        <article className="service">
          <div className="service__head">
            <h3>Tax collection</h3>
          </div>

          <ul className="service__list">
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Real Estate Tax collection.</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Local Business Tax collection.</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Attracting potential taxpayers.</p>
            </li>
          </ul>
        </article>
        {/*=====================================*/}
      </div>
    </section>
  )
}

export default services
