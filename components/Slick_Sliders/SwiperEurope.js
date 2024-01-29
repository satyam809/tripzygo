import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/dist/client/link'
import SwiperNav from "./SwiperNav"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

export default function App() {
  const [swiper, setSwiper] = useState(null);

  const handleSwiper = (swiper) => {
    setSwiper(swiper);
  };
  return (
    <>
      <section className="trending pb-3 pt-0" style={{ backgroundImage: "url(images/shape-1.png)", backgroundPosition: "center" }}>
        <div className="container delightfulContainer" >
          <div className="mb-0 mx-auto">
            <h3 className="mb-1" style={{ fontSize: "20px", color: "black" }}>European Escapes</h3>
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
                  <Link href='/international-tour-packages/switzerland-tour-packages'>
                    <a><img src='/images/european/Switzerland.jpg' id='Section5_click1' className='rounded'></img></a>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link href='/international-tour-packages/italy-tour-packages'>
                    <a><img src='/images/european/Italy.jpg' id='Section5_click2' className='rounded'></img></a>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link href='/international-tour-packages/france-tour-packages'>
                    <a><img src='/images/european/france.jpg' id='Section5_click3' className='rounded'></img></a>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link href='/international-tour-packages/iceland-tour-packages'>
                    <a><img src='/images/european/Iceland.jpg' id='Section5_click4' className='rounded'></img></a>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link href='/international-tour-packages/czech-republic-tour-packages'>
                    <a><img src='/images/european/Czechrepublic.jpg' id='Section5_click5' className='rounded'></img></a>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link href='/international-tour-packages/norway-tour-packages'>
                    <a><img src='/images/european/Norway.jpg' id='Section5_click6' className='rounded'></img></a>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link href='/international-tour-packages/netherlands-tour-packages'>
                    <a><img src='/images/european/Netherlands.jpg' id='Section5_click7' className='rounded'></img></a>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link href='/international-tour-packages/greece-tour-packages'>
                    <a><img src='/images/european/Greece.jpg' id='Section5_click8' className='rounded'></img></a>
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
                  <Link href='/international-tour-packages/switzerland-tour-packages'>
                    <a><img src='/images/european/Switzerland.jpg' id='Section5_click1' className='rounded'></img></a>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link href='/international-tour-packages/italy-tour-packages'>
                    <a><img src='/images/european/Italy.jpg' id='Section5_click2' className='rounded'></img></a>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link href='/international-tour-packages/france-tour-packages'>
                    <a><img src='/images/european/france.jpg' id='Section5_click3' className='rounded'></img></a>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link href='/international-tour-packages/iceland-tour-packages'>
                    <a><img src='/images/european/Iceland.jpg' id='Section5_click4' className='rounded'></img></a>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link href='/international-tour-packages/czech-republic-tour-packages'>
                    <a><img src='/images/european/Czechrepublic.jpg' id='Section5_click5' className='rounded'></img></a>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link href='/international-tour-packages/norway-tour-packages'>
                    <a><img src='/images/european/Norway.jpg' id='Section5_click6' className='rounded'></img></a>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link href='/international-tour-packages/netherlands-tour-packages'>
                    <a><img src='/images/european/Netherlands.jpg' id='Section5_click7' className='rounded'></img></a>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link href='/international-tour-packages/greece-tour-packages'>
                    <a><img src='/images/european/Greece.jpg' id='Section5_click8' className='rounded'></img></a>
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
