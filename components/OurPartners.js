import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Scrollbar, A11y ,Autoplay} from 'swiper/modules';
import SwiperCore from "swiper";
SwiperCore.use([Autoplay]);

export default function ourpartners() {
    return (
        <section className="about-us pb-4 pt-1" >
            <div className="container delightfulContainer">

                <div className="section-title mb-6 w-75 mx-auto text-center">
                    <h4 className="mb-1 theme1">Our Partners</h4>
                    <h2 className="mb-1">We Partner  <span className="theme"> With The Best</span></h2>
                    <div>We have collaborations with the best partners in the travel industry so that we can create the most amazing touring experiences for you
                    </div>
                </div>

                <div className='my-content'  >
                    <div className='carouse_div animated.infinite'>
                        <Swiper
                            modules={[Navigation, A11y, Scrollbar]}
                            spaceBetween={50}
                            // slidesPerView={3}
                            navigation
                            autoplay={{
                                delay: 2000,
                                disableOnInteraction: false,
                            }}
                            effect="coverflow"
                            coverflowEffect={{
                                rotate: 0,
                                stretch: 0,
                                depth: 360,
                                modifier: 1,
                                slideShadows: false,
                            }}
                            loop={true}
                        // pagination={{ clickable: true }}
                        // scrollbar={{ draggable: true }}
                        >
                            <SwiperSlide>
                                <figure>
                                    <img src="images/collaborators/1.webp" alt="ITC Limited" />
                                </figure>
                            </SwiperSlide>
                            <SwiperSlide>

                                <figure>
                                    <img src="images/collaborators/2.webp" alt="Radisson Blu" />
                                </figure>
                            </SwiperSlide>
                            <SwiperSlide>
                                <figure>
                                    <img src="images/collaborators/3.webp" alt="The Lalit" />
                                </figure>
                            </SwiperSlide>
                            <SwiperSlide>
                                <figure>
                                    <img src="images/collaborators/4.webp" alt="Hyatt" />
                                </figure>
                            </SwiperSlide>
                            <SwiperSlide>
                                <figure>
                                    <img src="images/collaborators/5.webp" alt="JW Marriott" />
                                </figure>
                            </SwiperSlide>
                            <SwiperSlide>

                                <figure>
                                    <img src="images/collaborators/6.webp" alt="Le Meridien" />
                                </figure>
                            </SwiperSlide>
                            <SwiperSlide>

                                <figure>
                                    <img src="images/collaborators/7.webp" alt="Oberoi Hotels and Resorts" />
                                </figure>
                            </SwiperSlide>
                            <SwiperSlide>

                                <figure>
                                    <img src="images/collaborators/8.webp" alt="Lemontree Hotels" />
                                </figure>
                            </SwiperSlide>
                            <SwiperSlide>

                                <figure>
                                    <img src="images/collaborators/20.webp" alt="Sheraton" />
                                </figure>
                            </SwiperSlide>
                            <SwiperSlide>

                                <figure>
                                    <img src="images/collaborators/10.webp" alt="Taj Hotels" />
                                </figure>
                            </SwiperSlide>
                            <SwiperSlide>

                                <figure>
                                    <img src="images/collaborators/11.webp" alt="The Leela" />
                                </figure>
                            </SwiperSlide>
                            <SwiperSlide>

                                <figure>
                                    <img src="images/collaborators/12.webp" alt="Trident Hotels" />
                                </figure>
                            </SwiperSlide>
                            <SwiperSlide>

                                <figure>
                                    <img src="images/collaborators/13.webp" alt="Air Bnb" />
                                </figure>
                            </SwiperSlide>
                            <SwiperSlide>

                                <figure>
                                    <img src="images/collaborators/14.webp" alt="Go Stops" />
                                </figure>
                            </SwiperSlide>
                            <SwiperSlide>

                                <figure>
                                    <img src="images/collaborators/15.webp" alt="Zostel" />
                                </figure>
                            </SwiperSlide>
                            <SwiperSlide>

                                <figure>
                                    <img src="images/collaborators/16.webp" alt="Westin Hotels and Resorts" />
                                </figure>
                            </SwiperSlide>
                            <SwiperSlide>

                                <figure>
                                    <img src="images/collaborators/17.webp" alt="Treebo" />
                                </figure>
                            </SwiperSlide>
                            <SwiperSlide>

                                <figure>
                                    <img src="images/collaborators/18.webp" alt="Sarovar Hotels and Resorts" />
                                </figure>
                            </SwiperSlide>
                            <SwiperSlide>
                                <figure>
                                    <img src="images/collaborators/19.webp" alt="Fairmont Hotels and Resorts" />
                                </figure>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
                <div class="container resp">
                    <div class="row">

                        <div class="marquee-box">
                            <div class="marquee">
                                <figure>
                                    <img src="images/collaborators/1.webp" alt="ITC Limited" />
                                </figure>
                                <figure>
                                    <img src="images/collaborators/2.webp" alt="Radisson Blu" />
                                </figure>
                                <figure>
                                    <img src="images/collaborators/3.webp" alt="The Lalit" />
                                </figure>
                                <figure>
                                    <img src="images/collaborators/4.webp" alt="Hyatt" />
                                </figure>
                                <figure>
                                    <img src="images/collaborators/5.webp" alt="JW Marriott" />
                                </figure>
                                <figure>
                                    <img src="images/collaborators/6.webp" alt="Le Meridien" />
                                </figure>
                                <figure>
                                    <img src="images/collaborators/7.webp" alt="Oberoi Hotels and Resorts" />
                                </figure>
                                <figure>
                                    <img src="images/collaborators/8.webp" alt="Lemontree Hotels" />
                                </figure>
                                {/* <figure>
                        <img src="images/collaborators/9.webp" alt="" />							
						</figure> */}
                                <figure>
                                    <img src="images/collaborators/10.webp" alt="Taj Hotels" />
                                </figure>
                                <figure>
                                    <img src="images/collaborators/11.webp" alt="The Leela" />
                                </figure>
                                <figure>
                                    <img src="images/collaborators/12.webp" alt="Trident Hotels" />
                                </figure>
                                <figure>
                                    <img src="images/collaborators/13.webp" alt="Air Bnb" />
                                </figure>
                                <figure>
                                    <img src="images/collaborators/14.webp" alt="Go Stops" />
                                </figure>
                                <figure>
                                    <img src="images/collaborators/15.webp" alt="Zostel" />
                                </figure>
                                <figure>
                                    <img src="images/collaborators/16.webp" alt="Westin Hotels and Resorts" />
                                </figure>
                                <figure>
                                    <img src="images/collaborators/17.webp" alt="Treebo" />
                                </figure>
                                <figure>
                                    <img src="images/collaborators/18.webp" alt="Sarovar Hotels and Resorts" />
                                </figure>
                                <figure>
                                    <img src="images/collaborators/19.webp" alt="Fairmont Hotels and Resorts" />
                                </figure>
                                <figure>
                                    <img src="images/collaborators/20.webp" alt="Sheraton" />
                                </figure>
                            </div>
                            <div class="marquee">
                                <figure>
                                    <img src="images/collaborators/1.webp" alt="ITC Limited" />
                                </figure>
                                <figure>
                                    <img src="images/collaborators/2.webp" alt="Radisson Blu" />
                                </figure>
                                <figure>
                                    <img src="images/collaborators/3.webp" alt="The Lalit" />
                                </figure>
                                <figure>
                                    <img src="images/collaborators/4.webp" alt="Hyatt" />
                                </figure>
                                <figure>
                                    <img src="images/collaborators/5.webp" alt="JW Marriott" />
                                </figure>
                                <figure>
                                    <img src="images/collaborators/6.webp" alt="Le Meridien" />
                                </figure>
                                <figure>
                                    <img src="images/collaborators/7.webp" alt="Oberoi Hotels and Resorts" />
                                </figure>
                                <figure>
                                    <img src="images/collaborators/8.webp" alt="Lemontree Hotels" />
                                </figure>
                                {/* <figure>
                        <img src="images/collaborators/9.webp" alt="" />							
						</figure> */}
                                <figure>
                                    <img src="images/collaborators/10.webp" alt="Taj Hotels" />
                                </figure>
                                <figure>
                                    <img src="images/collaborators/11.webp" alt="The Leela" />
                                </figure>
                                <figure>
                                    <img src="images/collaborators/12.webp" alt="Trident Hotels" />
                                </figure>
                                <figure>
                                    <img src="images/collaborators/13.webp" alt="Air Bnb" />
                                </figure>
                                <figure>
                                    <img src="images/collaborators/14.webp" alt="Go Stops" />
                                </figure>
                                <figure>
                                    <img src="images/collaborators/15.webp" alt="Zostel" />
                                </figure>
                                <figure>
                                    <img src="images/collaborators/16.webp" alt="Westin Hotels and Resorts" />
                                </figure>
                                <figure>
                                    <img src="images/collaborators/17.webp" alt="Treebo" />
                                </figure>
                                <figure>
                                    <img src="images/collaborators/18.webp" alt="Sarovar Hotels and Resorts" />
                                </figure>
                                <figure>
                                    <img src="images/collaborators/19.webp" alt="Fairmont Hotels and Resorts" />
                                </figure>
                                <figure>
                                    <img src="images/collaborators/20.webp" alt="Sheraton" />
                                </figure>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            <div className="white-overlay"></div>
        </section>
    )
}
