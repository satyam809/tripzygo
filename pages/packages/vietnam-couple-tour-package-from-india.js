import React from 'react'
import Packages_Form from '../../components/Contact_Forms/packages_form';
import ShareButton from '../../components/Package_Description/shareButton';
import PopularityWidget from '../../components/Package_Description/popularityWidget';

import Head from "next/dist/shared/lib/head";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from "swiper";
import 'swiper/css';
import { Navigation, Pagination, A11y } from 'swiper';
import { FreeMode, Thumbs } from "swiper";
import { useRef, useState } from "react";
SwiperCore.use([Pagination, Autoplay]);

export default function test() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <div>
            <Head>

                <title>TripzyGo - Affordable Vietnam Couple Tour Package From India - Vietnam Vacations For Couples</title>
                <meta name="description" content="Budget-friendly Vietnam couple tour packages. Get the best deals on a couple trip to Vietnam from India. Book now Vietnam vacations for couples and save more." />
                <meta name="keywords" content="vietnam couple tour package from india, vietnam vacations for couples, couple trip to vietnam from india" />
                <link rel="icon" href="/icon.png" />
                <link rel="canonical" href="https://www.tripzygo.in/packages/vietnam-couple-tour-package-from-india" />
                <meta property="og:url" content="https://www.tripzygo.in/packages/vietnam-couple-tour-package-from-india" />
                <meta property="og:title" content=" Affordable Vietnam Couple Tour Package From India - Vietnam Vacations For Couples" />
                <meta property="og:description" content="Budget-friendly Vietnam couple tour packages. Get the best deals on a couple trip to Vietnam from India. Book now Vietnam vacations for couples and save more." />
                <meta property="og:image" content="https://www.tripzygo.in/images/international_packages/vietnam_couple_tour_package_from_india/1.webp" />
            </Head>
<ShareButton/>
<PopularityWidget packageCount="71" progressBarPercentage="70%"/>
            <section className="breadcrumb-main pb-20 pt-14" style={{ backgroundImage: "url(/images/banner_images/about_us.webp)" }}>
                <div className="breadcrumb-outer">
                    <div className="container">
                        <div className="breadcrumb-content text-center">
                            <h1 className="mb-3">Package Details</h1>
                            <nav aria-label="breadcrumb" className="d-block">
                                <ul className="breadcrumb">
                                    <li className="breadcrumb-item active" aria-current="page">Get Ready For A  Trip Around The World</li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="dot-overlay"></div>
            </section>



            <section className="trending pt-6 pb-0 bg-lgrey">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="single-content">
                                <div className="single-full-title mb-2 pb-2">
                                    <div className="single-title">
                                        <h2 className="mb-1">Vietnam Couple Tour Package From India</h2>

                                    </div>
                                </div>
                                <div className="description-images mb-4 overflow-hidden">
                                    <div className="thumbnail-images position-relative">
                                        <div className="rounded overflow-hidden">

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
                                                        <img className='blog_image' src="/images/international_packages/vietnam_couple_tour_package_from_india/1.webp" alt="vietnam couple tour package from india" />

                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/vietnam_couple_tour_package_from_india/2.webp" alt="vietnam couple tour package from india" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/vietnam_couple_tour_package_from_india/3.webp" alt="vietnam vacations for couples" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/vietnam_couple_tour_package_from_india/4.webp" alt="vietnam vacations for couples" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/vietnam_couple_tour_package_from_india/5.webp" alt="couple trip to vietnam from india" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/vietnam_couple_tour_package_from_india/6.webp" alt="couple trip to vietnam from india" />
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
                                                        <img className='blog_image' src="/images/international_packages/vietnam_couple_tour_package_from_india/1.webp" alt="vietnam couple tour package from india" />

                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/vietnam_couple_tour_package_from_india/2.webp" alt="vietnam couple tour package from india" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/vietnam_couple_tour_package_from_india/3.webp" alt="vietnam vacations for couples" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/vietnam_couple_tour_package_from_india/4.webp" alt="vietnam vacations for couples" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/vietnam_couple_tour_package_from_india/5.webp" alt="couple trip to vietnam from india" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/vietnam_couple_tour_package_from_india/6.webp" alt="couple trip to vietnam from india" />
                                                    </div>
                                                </SwiperSlide>
                                            </Swiper>





                                        </div>

                                    </div>
                                </div>



                                <div class="description mb-2">
                                    <div class="row">
                                        <div class="col-lg-12 col-md-6 mb-2 ">
                                            <div class="desc-box bg-grey p-4 rounded ">
                                                <h5 class="mb-2">Overview</h5>
                                                <div>Thinking of a romantic getaway with your partner? How about planning Vietnam vacations for couples. You and your friends can have the most amazing time in Vietnam with your partners and it can be a trip with memories of a lifetime.</div>
                                                <div class="mb-0">On your Vietnam vacations for couples, you can chill at the beaches, enjoy romantic dates with lavish and delicious Vietnamese cuisine on your plates, go around the bustling and ancient cities of Vietnam, and even seek some peace and calm in the Buddhist pagodas.</div>
                                                <div>With amazing culture, food, cities, and friendly people, Vietnam is a great place for vacations for couples and you will enjoy a lot on a couple trip to Vietnam, especially when you take our Vietnam couple tour package from India.</div>
                                                <div>This Vietnam couple tour package from India has the most amazing tour itinerary taking you to the most romantic places in Vietnam.</div>
                                                <div>Don’t wait up. Book the amazing Vietnam Couple Tour Package From India now by getting in touch with a TripzyGo travel executive.</div>
                                            </div>
                                        </div>


                                    </div>
                                </div>


                                <div class="tour-includes mb-4">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td><i className="fa fa-clock-o pink mr-1" aria-hidden="true"></i> Days : 5 Nights/6 Days</td>
                                                <td><i class="fa fa-group pink mr-1" aria-hidden="true"></i> People : 1</td>

                                            </tr>
                                            <tr>
                                                <td><i class="fa fa-inr pink mr-1" aria-hidden="true"></i> Total Tour Cost : INR 96,500/-*</td>
                                                <td><i class="fa fa-bed pink mr-1" aria-hidden="true"></i> Bedroom : 01 Double Rooms</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div class="description mb-2">
                                    <div class="row">


                                        <div id="iternary" class="accrodion-grp faq-accrodion mb-4" data-grp-name="faq-accrodion" >
                                            <div class="accrodion active">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 1</span> - Arrival at Vietnam</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "block;" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> You will be met at the airport by your private driver, who will take you to your hotel in Hanoi.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Once check-in formalities have been completed, you can relax and freshen up in preparation for the next day's excursions.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Take in the historic relics, architectural charms, and other tourist attractions of the city as you stroll through its streets.</div>


                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 2</span> -  A Scenic Road Journey</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none;" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> The second day of your 5 nights 6 days Vietnam honeymoon begins with a delicious breakfast before boarding a shuttle bus for a scenic road trip. </div>
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> While traveling to Halong Bay, admire the picturesque rice farms of the red river delta. After reaching Halong Bay, take a cruise on a beautiful traditional junk and enjoy a splendid day with your significant other.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Among the breathtaking views of the Lagoon, relish a delicious seafood dinner. From the boat, take a luxurious excursion. Return to the boat for a luxurious overnight stay.</div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 3</span> - Reach Hanoi </h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none;" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Today wake up early for a lesson in Tai Chi or just to catch the sunrise while you eat breakfast on your Vietnam honeymoon. On this day of your 5 nights 6 days, the boat will sail back to the port while stopping at Cave of Surprises.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> From this point onward, it will be a direct sailing back to the main harbor in Hanoi and return is scheduled for around 4:30. Check into the hotel and relax until your next evening excursion.</div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 4</span> - Fly to Ho Chi Minh</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none;" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> This tour package offers you 5 nights of accommodations, 6 days of sightseeing, as well as a transfer to the airport upon checkout. This is included in this exciting itinerary. You will find numerous restaurants to choose from both on and off site to satisfy any appetite while on your vacation.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After airport arrival, you will be greeted by your driver who will have to be escorting you to your hotel of stay. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Post check in formalities, proceed with the day as per your choice. Explore the local attractions or stay at the hotel.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 5</span> - Trip to Mekong Delta</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none;" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Start your day with a hearty breakfast and prepare for an exciting trip to the Mekong Delta. Today you leave for the town of My Tho but you'll return by boat via Sampan then continue around the dragon, unicorn, phoenix islands before heading back home.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Visit the Unicorn Island, enjoy folk and tropical culture, and experience orchards. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Get a closer look at the fruit plantations by looking around and taking a ride on the hand-rowed sampan through the Thoi Son Canal. Marvel at the natural beauty of Vietnam's countryside</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> A trip to Honey Bee farm is always worth it and will allow you to experience a traditional drink. Keep up with your energy levels by having a quick lunch afterwards.</div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 6</span> - Back to home</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none;" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Enjoy your last meal in Vietnam, and check out from the hotel as this day marks as the last day of your Vietnam honeymoon. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After check out, explore the city if time allows before boarding your flight. Shops souvenirs for friends and family.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Later on transfer to the airport and board flight back home.</div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-6 mb-2">
                                            <div class="desc-box bg-grey p-4 rounded">
                                                <h5 class="mb-2">Inclusions</h5>
                                                <ul>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Private transportation</li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Entrance fee to any applicable tourist sites</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> All transfers with our A/C transport</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> English Speaking Guide</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> Meals (as mentioned below)</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> Boat cruise</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> Cool water and tissue</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> Government tax</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> Service charge</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> Accommodations</li>

                                                </ul>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-6 mb-2">
                                            <div class="desc-box bg-grey p-4 rounded">
                                                <h5 class="mb-2">Exclusions</h5>
                                                <ul>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> International flight ticket</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Domestic Flight HAN</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Late checkout</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Other meals not mentioned</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Tips & personal expenses</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Laundry</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Other not stated in inclusionsTravel insurance</li>

                                                </ul>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-6 mb-2">
                                            <div class="desc-box bg-grey p-4 rounded">
                                                <h5 class="mb-2">Things To Do</h5>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Take a Romantic Walk on the white sands of Sao ocean side, Phu Quoc Island</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Sail along the waters of Halong Bay</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Visit Valley of love, Da Lat</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Experience the nightlife of Ho Chi Minh City</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Pay a Visit to the incredible Ngoc Son Temple, Hanoi</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Crawl through the Cu Chi Tunnel Tunnel</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Enjoy the mineral hot springs of Binh Chau</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Snorkel the completely clear waters of Con Dao</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Romantic candlelit evening in Hoi An</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Enjoy Climbing on Heaven’s Gate of Sapa</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Visit Vietnam’s ‘Golden Bridge’, Danang</div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="single-map mb-4">
                                    <h4>Map</h4>
                                    <div class="map rounded overflow-hidden">
                                        <div style={{ width: "100%" }}>
                                            <iframe class=" rounded overflow-hidden" height="400" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15738110.955688218!2d96.86305347702816!3d15.628352495661526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31157a4d736a1e5f%3A0xb03bb0c9e2fe62be!2sVietnam!5e0!3m2!1sen!2sin!4v1668068461073!5m2!1sen!2sin"></iframe>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 pe-lg-4"><Packages_Form></Packages_Form></div>
                    </div>
                </div>
            </section>
            <br /><br />
            <script src="/js/jquery-3.5.1.min.js"></script>
            <script src="/js/bootstrap.min.js"></script>
            <script src="/js/particles.js"></script>
            <script src="/js/particlerun.js"></script>
            <script src="/js/plugin.js"></script>
            {/* <script src="/js/main.js"></script> */}
            <script src="/js/custom-accordian.js"></script>
            <script src="/js/custom-nav.js"></script>
            <script src="/js/custom-navscroll.js"></script>
        </div>

    )
}