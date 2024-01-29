// SwiperNav.js
import React from 'react';

const SwiperNav = ({ swiper }) => {
  return (
    <div className="swiper-nav-btns">
      {swiper && (
        <>
        <div>
          <button className='testtt1' onClick={() => swiper.slidePrev()}><i class="fa fa-angle-left" aria-hidden="true"></i></button>
          <button className='testtt' onClick={() => swiper.slideNext()}><i class="fa fa-angle-right" aria-hidden="true"></i></button>
        </div>
        </>
      )}
    </div>
  );
};

export default SwiperNav;
