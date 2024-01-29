import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from "next/dist/client/link";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import SwiperNav from "./SwiperNav"


// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

export default function App() {
  const [swiper, setSwiper] = useState(null);

  const handleSwiper = (swiper) => {
    setSwiper(swiper);
  };
  return (
    <>
      <section className="trending pb-4 pt-4" style={{ backgroundImage: "url(images/shape-1.png)", backgroundPosition: "center" }}>
        <div className="container delightfulContainer" >
          <div className="mb-0 mx-auto">
            <h3 className="mb-1" style={{ fontSize: "20px", color: "black" }}>South East Asia</h3>
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
                <Link href='/international-tour-packages/bangkok-tour-packages'>
                  <a><img src='/images/southeast/1.jpg' id='Section9_click1' className='rounded'></img></a>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                <Link href='/international-tour-packages/bali-tour-packages'>
                <a><img src='/images/southeast/2.jpg' id='Section9_click2' className='rounded'></img></a>
                  </Link>
                </SwiperSlide>
                
                <SwiperSlide>
                <Link href='/international-tour-packages/phuket-tour-packages'>
                <a><img src='/images/southeast/3.jpg' id='Section9_click3' className='rounded'></img></a>
                  </Link>
                </SwiperSlide>
              
                <SwiperSlide>
                <Link href='/international-tour-packages/malaysia-tour-packages'>
                <a><img src='/images/southeast/5.jpg' id='Section9_click4' className='rounded'></img></a>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                <Link href='/international-tour-packages/singapore-tour-packages'>
                <a><img src='/images/southeast/6.jpg' id='Section9_click5' className='rounded'></img></a>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                <Link href='/international-tour-packages/vietnam-tour-packages'>
                <a><img src='/images/southeast/7.jpg' id='Section9_click6' className='rounded'></img></a>
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
                <Link href='/international-tour-packages/bangkok-tour-packages'>
                  <a><img src='/images/southeast/1.jpg' id='Section9_click1' className='rounded'></img></a>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                <Link href='/international-tour-packages/bali-tour-packages'>
                <a><img src='/images/southeast/2.jpg' id='Section9_click2' className='rounded'></img></a>
                  </Link>
                </SwiperSlide>
                
                <SwiperSlide>
                <Link href='/international-tour-packages/phuket-tour-packages'>
                <a><img src='/images/southeast/3.jpg' id='Section9_click3' className='rounded'></img></a>
                  </Link>
                </SwiperSlide>
              
                <SwiperSlide>
                <Link href='/international-tour-packages/malaysia-tour-packages'>
                <a><img src='/images/southeast/5.jpg' id='Section9_click4' className='rounded'></img></a>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                <Link href='/international-tour-packages/singapore-tour-packages'>
                <a><img src='/images/southeast/6.jpg' id='Section9_click5' className='rounded'></img></a>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                <Link href='/international-tour-packages/vietnam-tour-packages'>
                <a><img src='/images/southeast/7.jpg' id='Section9_click6' className='rounded'></img></a>
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
