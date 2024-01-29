import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import SwiperNav from "./SwiperNav"


// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import { Link } from '@material-ui/core';

export default function App() {
  const [swiper, setSwiper] = useState(null);

  const handleSwiper = (swiper) => {
    setSwiper(swiper);
  };
  return (
    <>
      <section className="trending pb-0 pt-0" style={{ backgroundImage: "url(images/shape-1.png)", backgroundPosition: "center" }}>
        <div className="container delightfulContainer" >
          <div className="mb-0 mx-auto">
            <h3 className="mb-1" style={{ fontSize: "20px", color: "black" }}>Dubai Delights</h3>
          </div>
          <div className=' resp'>
            <div className="col-lg-12 ">
            <SwiperNav swiper={swiper}></SwiperNav>

              <Swiper

                slidesPerView={4.8}
                spaceBetween={20}
                freeMode={true}
                onSwiper={handleSwiper}

                // pagination={{
                //   clickable: true,
                // }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                <Link href='https://www.tripzygo.in/package/1357-dubais-luxurious-family-adventure-flight-inclusive-creating-magic' target='_blank'>

                <a> <img src='/images/dubai/1.jpg' id='Section8_click1' className='rounded'></img></a>
                  </Link>
                </SwiperSlide>
               
                
                <SwiperSlide>
                <Link href='https://www.tripzygo.in/package/1178-the-perfect-family-getaway-to-dubai-unlock-exclusive-savings' target='_blank'>

                <a><img src='/images/dubai/3.jpg' id='Section8_click2' className='rounded'></img></a>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                <Link href='https://www.tripzygo.in/package/1181-discover-dubai-an-exclusive-male-only-journey' target='_blank'>

                <a> <img src='/images/dubai/4.jpg' id='Section8_click3' className='rounded'></img></a>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                <Link href='https://www.tripzygo.in/package/1515-embrace-dubai-solo-7-day-adventure-with-up-to-20-off' target='_blank'>

                <a> <img src='/images/dubai/5.jpg' id='Section8_click4' className='rounded'></img></a>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                <Link href='https://www.tripzygo.in/package/1512-arabian-affection-in-style-a-luxurious-dubai-odyssey-with-up-to-20-discount' target='_blank'>

                <a> <img src='/images/dubai/6.jpg' id='Section8_click5' className='rounded'></img></a>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                <Link href='https://www.tripzygo.in/package/1584-5-day-dubai-tour-with-exclusive-savings-at-palm-atlantis' target='_blank'>

                <a><img src='/images/dubai/7.png' id='Section8_click6' className='rounded'></img></a>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link href=' https://www.tripzygo.in/package/1585-explore-dubai-in-style-a-7-day-tour-with-atlantis-stay' target='_blank'>
                  <a><img src='/images/dubai/2.jpg' id='Section8_click7' className='rounded'></img></a>
                  </Link>
                </SwiperSlide>
               
              </Swiper>

            </div>
          </div>
          <div className='my-content'  >
                    <div className=' animated.infinite'>
                    <Swiper
                slidesPerView={1.8}
                spaceBetween={20}
                freeMode={true}
                // pagination={{
                //   clickable: true,
                // }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
              >
                 <SwiperSlide>
                <Link href='https://www.tripzygo.in/package/1357-dubais-luxurious-family-adventure-flight-inclusive-creating-magic' target='_blank'>

                <a> <img src='/images/dubai/1.jpg' id='Section8_click1' className='rounded'></img></a>
                  </Link>
                </SwiperSlide>
               
                
                <SwiperSlide>
                <Link href='https://www.tripzygo.in/package/1178-the-perfect-family-getaway-to-dubai-unlock-exclusive-savings' target='_blank'>

                <a><img src='/images/dubai/3.jpg' id='Section8_click2' className='rounded'></img></a>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                <Link href='https://www.tripzygo.in/package/1181-discover-dubai-an-exclusive-male-only-journey' target='_blank'>

                <a> <img src='/images/dubai/4.jpg' id='Section8_click3' className='rounded'></img></a>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                <Link href='https://www.tripzygo.in/package/1515-embrace-dubai-solo-7-day-adventure-with-up-to-20-off' target='_blank'>

                <a> <img src='/images/dubai/5.jpg' id='Section8_click4' className='rounded'></img></a>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                <Link href='https://www.tripzygo.in/package/1512-arabian-affection-in-style-a-luxurious-dubai-odyssey-with-up-to-20-discount' target='_blank'>

                <a> <img src='/images/dubai/6.jpg' id='Section8_click5' className='rounded'></img></a>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                <Link href='https://www.tripzygo.in/package/1584-5-day-dubai-tour-with-exclusive-savings-at-palm-atlantis' target='_blank'>

                <a><img src='/images/dubai/7.png' id='Section8_click6' className='rounded'></img></a>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link href=' https://www.tripzygo.in/package/1585-explore-dubai-in-style-a-7-day-tour-with-atlantis-stay' target='_blank'>
                  <a><img src='/images/dubai/2.jpg' id='Section8_click7' className='rounded'></img></a>
                  </Link>
                </SwiperSlide>
              </Swiper>

                    </div>
                </div>
        </div>
      </section>

    </>
  );
}
