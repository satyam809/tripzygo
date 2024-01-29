import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from "swiper";
import 'swiper/css';
import { Navigation, Pagination,Autoplay} from 'swiper/modules';
import { FreeMode, Thumbs } from "swiper/modules";
SwiperCore.use([Pagination, Autoplay]);
import { useState } from 'react';

export default function descriptionCarousel(props) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <>
            <Swiper
                style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                }}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                loop={true}
                spaceBetween={10}
                // navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
            >
                <SwiperSlide>
                    <div>
                        <img className='blog_image' src={props.imageLink1} alt={props.alt1} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img className='blog_image' src={props.imageLink2} alt={props.alt2} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img className='blog_image' src={props.imageLink3} alt={props.alt3} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img className='blog_image' src={props.imageLink4} alt={props.alt4} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img className='blog_image' src={props.imageLink5} alt={props.alt5} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img className='blog_image' src={props.imageLink6} alt={props.alt6} />
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className='gap'></div>
            <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                spaceBetween={0}
                slidesPerView={6}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div>
                        <img className='blog_image' src={props.imageLink1} alt={props.alt1} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img className='blog_image' src={props.imageLink2} alt={props.alt2} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img className='blog_image' src={props.imageLink3} alt={props.alt3} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img className='blog_image' src={props.imageLink4} alt={props.alt4} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img className='blog_image' src={props.imageLink5} alt={props.alt5} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img className='blog_image' src={props.imageLink6} alt={props.alt6} />
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}
