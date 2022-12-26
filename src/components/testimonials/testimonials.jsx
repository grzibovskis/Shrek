import React from 'react';
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';





const data = [
{
  avatar: AVTR1,
  name: 'Arthur',
  review: 'A wonderful Ogre, saved my life, appointed me as a King. Father figure.',
},
{
  avatar: AVTR2,
  name: 'Harold',
  review: 'I don\'t like his jokes.',
},
{
  avatar: AVTR3,
  name: 'Big Bad Wolf',
  review: 'I\'m not so bad. Shrek allowed me to stay at his place for a long time. Thoughts a lot about swamp construction.',
},
{
  avatar: AVTR4,
  name: 'Pinocchio',
  review: 'He paid my debts',
},
]

const testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
            modules={[Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar}/>
              </div>
              <h5 className='client_name'>{name}</h5>
              <small className='client__review'>
                {review}
              </small>
            </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default testimonials
