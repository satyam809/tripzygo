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
            <h3 className="mb-1" style={{ fontSize: "20px", color: "black" }}>Best of India</h3>
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
                <Link href='/india-tour-packages/kashmir-tour-packages'>
                  <a><img src='/images/domestic/Kashmir.jpg' id='Section7_click1' className='rounded'></img></a>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                <Link href='/india-tour-packages/kerala-tour-packages'>
                <a><img src='/images/domestic/Kerala.jpg' id='Section7_click2' className='rounded'></img></a>
                  </Link>
                </SwiperSlide>
                
                <SwiperSlide>
                <Link href='/india-tour-packages/rajasthan-tour-packages'>
                <a><img src='/images/domestic/Rajasthan.jpg' id='Section7_click3' className='rounded'></img></a>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                <Link href='/india-tour-packages/leh-ladakh-tour-packages'>
                <a><img src='/images/domestic/Lehladakh.jpg' id='Section7_click4' className='rounded'></img></a>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                <Link href='/india-tour-packages/andaman-tour-packages'>
                <a><img src='/images/domestic/Andaman.jpg' id='Section7_click5' className='rounded'></img></a>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                <Link href='/india-tour-packages/himachal-tour-packages'>
                <a><img src='/images/domestic/Himachal.jpg' id='Section7_click6' className='rounded'></img></a>
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
                <Link href='/india-tour-packages/kashmir-tour-packages'>
                  <a><img src='/images/domestic/Kashmir.jpg' id='Section7_click1' className='rounded'></img></a>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                <Link href='/india-tour-packages/kerala-tour-packages'>
                <a><img src='/images/domestic/Kerala.jpg' id='Section7_click2' className='rounded'></img></a>
                  </Link>
                </SwiperSlide>
                
                <SwiperSlide>
                <Link href='/india-tour-packages/rajasthan-tour-packages'>
                <a><img src='/images/domestic/Rajasthan.jpg' id='Section7_click3' className='rounded'></img></a>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                <Link href='/india-tour-packages/leh-ladakh-tour-packages'>
                <a><img src='/images/domestic/Lehladakh.jpg' id='Section7_click4' className='rounded'></img></a>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                <Link href='/india-tour-packages/andaman-tour-packages'>
                <a><img src='/images/domestic/Andaman.jpg' id='Section7_click5' className='rounded'></img></a>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                <Link href='/india-tour-packages/himachal-tour-packages'>
                <a><img src='/images/domestic/Himachal.jpg' id='Section7_click6' className='rounded'></img></a>
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
