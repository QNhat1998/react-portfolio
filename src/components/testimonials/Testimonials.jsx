import React from 'react'
import './testimonials.css'
import AVTR1 from '../../asset/avatar1.jpg'
import AVTR2 from '../../asset/avatar2.jpg'
import AVTR3 from '../../asset/avatar3.jpg'
import AVTR4 from '../../asset/avatar4.jpg'

// Import Swiper React components
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination'

const data = [
  {
    avatar: AVTR1,
    name: 'Tina Snow',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur assumenda harum itaque. Suscipit ea consequatur laborum. Aperiam reprehenderit quidem nisi molestias ducimus. Mollitia, voluptates in? Esse molestias repudiandae pariatur omnis!'
  },
  {
    avatar: AVTR2,
    name: 'Shatta Wale',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur assumenda harum itaque. Suscipit ea consequatur laborum. Aperiam reprehenderit quidem nisi molestias ducimus. Mollitia, voluptates in? Esse molestias repudiandae pariatur omnis!'
  },
  {
    avatar: AVTR3,
    name: 'Kwame Despite',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur assumenda harum itaque. Suscipit ea consequatur laborum. Aperiam reprehenderit quidem nisi molestias ducimus. Mollitia, voluptates in? Esse molestias repudiandae pariatur omnis!'
  },
  {
    avatar: AVTR4,
    name: 'Nana Ama McBrown',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur assumenda harum itaque. Suscipit ea consequatur laborum. Aperiam reprehenderit quidem nisi molestias ducimus. Mollitia, voluptates in? Esse molestias repudiandae pariatur omnis!'
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className="container testimonials__container">
        {
          data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide className='testimonial'>
                <div className="client__avatar">
                  <img src={avatar} alt={avatar} />
                </div>
                <h5 className='client__name'>{name}</h5>
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

export default Testimonials