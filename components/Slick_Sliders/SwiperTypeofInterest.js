import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/dist/client/link'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

export default function App() {
    return (
        <>
            <section className="trending pb-4 pt-4 resp" style={{ backgroundImage: "url(images/shape-1.png)", backgroundPosition: "center" }}>
                        <div className="delightfulContainer" >
                            <div className=' pt-3' style={{ backgroundColor: "#f4edde" }}>
                                <h3 className="mb-0 ml-5" style={{ fontSize: "20px", color: "black" }}>In-Demand Categories</h3>
                                <div className='container pb-4 pt-4'>
                                    <div className="col-lg-12 ">

                                        <Swiper
                                            slidesPerView={4}
                                            spaceBetween={20}
                                            freeMode={true}
                                            // pagination={{
                                            //   clickable: true,
                                            // }}
                                            modules={[FreeMode, Pagination]}
                                            className="mySwiper"
                                        >
                                            <SwiperSlide>
                                                <Link href='/family-tour-packages'>
                                                <a><img src='/images/interest/Family.jpg' id='Section4_click1' className='rounded'></img></a>
                                                </Link>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                            <Link href='/couple-tour-packages'>
                                            <a><img src='/images/interest/Couple.jpg' id='Section4_click2' className='rounded'></img></a>
                                                </Link>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                            <Link href='/group-tour-packages'>
                                            <a><img src='/images/interest/Group.jpg' id='Section4_click3' className='rounded'></img></a>
                                                </Link>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                            <Link href='/honeymoon-tour-packages'>
                                            <a><img src='/images/interest/Honeymoon.jpg' id='Section4_click4' className='rounded'></img></a>
                                                </Link>
                                            </SwiperSlide>
                                           

                                        </Swiper>


                                    </div>
                                </div>
                            </div>

                        </div>
                    </section>
            <div className='my-content'  >
                <div className='animated.infinite'>
                    <section className="trending pb-4 pt-4" style={{ backgroundImage: "url(images/shape-1.png)", backgroundPosition: "center" }}>
                        <div className=" delightfulContainer" >
                            <div className=' pt-3' style={{ backgroundColor: "#f4edde" }}>
                                <h3 className="mb-0 text-center" style={{ fontSize: "20px", color: "black" }}>In-Demand Categories</h3>
                                <div className='pb-4 pt-4'>
                                    <div className="col-lg-12 ">

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
                                                <Link href='/family-tour-packages'>
                                                <a><img src='/images/interest/Family.jpg' id='Section4_click1' className='rounded'></img></a>
                                                </Link>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                            <Link href='/couple-tour-packages'>
                                            <a><img src='/images/interest/Couple.jpg' id='Section4_click2' className='rounded'></img></a>
                                                </Link>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                            <Link href='/group-tour-packages'>
                                            <a><img src='/images/interest/Group.jpg' id='Section4_click3' className='rounded'></img></a>
                                                </Link>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                            <Link href='/honeymoon-tour-packages'>
                                            <a><img src='/images/interest/Honeymoon.jpg' id='Section4_click4' className='rounded'></img></a>
                                                </Link>
                                            </SwiperSlide>

                                        </Swiper>


                                    </div>
                                </div>
                            </div>

                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}
