import React from 'react'
import './Testimonials.css'
import AVATAR1 from '../../assets/avatar1.jpg'
import AVATAR2 from '../../assets/avatar2.jpg'
import AVATAR3 from '../../assets/avatar3.jpg'
import AVATAR4 from '../../assets/avatar4.jpg'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';


const myAvatars = [
  {
    avatar:AVATAR1,
    names: 'Francesca Idembi',
    review :'She is a natural when it comes to coding my project was completed in ample time no back and forth between us highly recommend her'
  },
  {
    avatar:AVATAR2,
    names :'Monica Gift',
    review : 'Easy to work with completes a project on time and also recommends improvements '
  },
  {
    avatar:AVATAR3,
    names:'John Dosey',
    review: 'Loved how she did my project will highly consider'
  },
  {
    avatar :AVATAR4,
    names:'Mike Mwangi',
    review:'Highly professional production of high quality and time efficient'
  },

];




const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

        
        <Swiper className="mySwiper container testimonials__container" pagination={true} modules={[Pagination]} spaceBetween={40} slidesPerView={1}>
         { myAvatars.map(({avatar,names,review},index)=>{
          return (
            <SwiperSlide key={index} className='testimonial'>
          <div className='client__avatar'>
          <img src={avatar} alt="Avatar 1" />
            </div>
            <h5 className='client__name'>{names}</h5>
            <small className='client__review'>{review} </small>
         </SwiperSlide>
         )
         })
        }

         
        </Swiper>
    </section>
  )
}

export default Testimonials