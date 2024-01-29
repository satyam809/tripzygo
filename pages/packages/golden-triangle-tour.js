import React from 'react'
import Packages_Form from '../../components/Contact_Forms/packages_form';
import Head from "next/dist/shared/lib/head";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from "swiper";
import 'swiper/css';
import { Navigation, Pagination, A11y } from 'swiper';
import { FreeMode, Thumbs } from "swiper";
import { useRef, useState } from "react";
import ShareButton from '../../components/Package_Description/shareButton';
import PopularityWidget from '../../components/Package_Description/popularityWidget';
SwiperCore.use([Pagination, Autoplay]);

export default function test() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <div>
            <Head>

                <title>TripzyGo - Delhi Agra Jaipur Tour - Get Best Deals On Golden Triangle Tour </title>
                <meta name="description" content="Delhi Agra Jaipur Tour is the best way to explore the Golden Triangle of India. We offer the best Golden Triangle tour itinerary.  Book your tour today!" />
                <meta name="keywords" content="golden triangle tour, golden triangle india tour package, golden triangle tour itinerary" />
                <link rel="icon" href="/icon.png" />
                <link rel="canonical" href="https://www.tripzygo.in/packages/golden-triangle-tour" />
                <meta property="og:url" content="https://www.tripzygo.in/packages/golden-triangle-tour" />
                <meta property="og:title" content="Delhi Agra Jaipur Tour - Get Best Deals On Golden Triangle Tour " />
                <meta property="og:description" content="Delhi Agra Jaipur Tour is the best way to explore the Golden Triangle of India. We offer the best Golden Triangle tour itinerary.  Book your tour today!" />
                <meta property="og:image" content="https://www.tripzygo.in/images/domestic/jaipur_udaipur_tour_package/1.webp" />
            </Head>
<ShareButton/>
<PopularityWidget packageCount="75" progressBarPercentage="75%"/>
            <section className="breadcrumb-main pb-20 pt-14" style={{ backgroundImage: "url(/images/banner_images/about_us.webp)" }}>                <div className="breadcrumb-outer">
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
                                        <h2 className="mb-1">Golden Triangle Tour</h2>

                                    </div>
                                </div>
                                <div className="description-///images mb-4 overflow-hidden">
                                    <div className="thumbnail-///images position-relative">
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
                                                        <img className='blog_image' src="/images/domestic/jaipur_udaipur_tour_package/1.webp" alt="golden triangle tour" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/jaipur_udaipur_tour_package/2.webp" alt="golden triangle tour" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/jaipur_udaipur_tour_package/3.webp" alt="golden triangle india tour package" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/jaipur_udaipur_tour_package/4.webp" alt="golden triangle india tour package" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/jaipur_udaipur_tour_package/5.webp" alt="golden triangle tour itinerary" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/jaipur_udaipur_tour_package/6.webp" alt="golden triangle tour itinerary" />
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
                                                        <img className='blog_image' src="/images/domestic/jaipur_udaipur_tour_package/1.webp" alt="golden triangle tour" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/jaipur_udaipur_tour_package/2.webp" alt="golden triangle tour" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/jaipur_udaipur_tour_package/3.webp" alt="golden triangle india tour package" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/jaipur_udaipur_tour_package/4.webp" alt="golden triangle india tour package" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/jaipur_udaipur_tour_package/5.webp" alt="golden triangle tour itinerary" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/jaipur_udaipur_tour_package/6.webp" alt="golden triangle tour itinerary" />
                                                    </div>
                                                </SwiperSlide>

                                            </Swiper>





                                        </div>

                                    </div>
                                </div>



                                <div className="description mb-2">
                                    <div className="row">
                                        <div class="desc-box bg-grey p-4 rounded ">
                                            <h5 class="mb-2">Overview</h5>
                                            <div>Delhi-Agra-Jaipur, popularly known as the Golden Triangle, a trip to these three destinations is like being in a dream historic world.
                                            </div>
                                            <div>With their rich histories of many emperors and multiple forts, monuments, and palaces in their memories, the Golden Triangle Tour will be one of the best heritage trip experiences of your life where you not only explore these amazing cities but also their rich history and culture.</div>
                                            <div class="mb-0">Starting at Delhi, this amazing 4 Nights 5 Days Golden Triangle India tour package will include sightseeing in all the three cities along with exploration of the most famous forts, monuments, and palaces.</div>
                                            <div>Visit the deserts, forts, palaces, and everything luxurious, cultural, and traditional in these places to have the most fun-loving tour experiences. Also enjoy the amazing activities to do in the deserts such as camel ride, bonfire, etc., and tap your feet to cultural dance with all such activities included in your travel itinerary.</div>
                                            <div>Be it the Red Fort at Delhi, Taj Mahal at Agra, or Hawa Mahal at Jaipur, with this amazing Golden Triangle Tour Itinerary, you will get a chance to witness everything at its best.</div>
                                            <div> Ready yourself for the most amazing touring experience on a wonderful Golden Triangle tour planned and designed especially for you by TripzyGo.</div>
                                        </div>

                                    </div>
                                </div>

                                <div className="tour-includes mb-4">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td><i className="fa fa-clock-o pink mr-1" aria-hidden="true"></i> Days : 4 Nights / 5 Days</td>
                                                <td><i class="fa fa-group pink mr-1" aria-hidden="true"></i> People : 1</td>

                                            </tr>
                                            <tr>
                                                <td><i class="fa fa-inr pink mr-1" aria-hidden="true"></i> Total Tour Cost : INR 12,500/-* </td>
                                                <td><i class="fa fa-bed pink mr-1" aria-hidden="true"></i> Bedroom : 01 Double Rooms</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="description mb-2">
                                    <div class="row">


                                        <div id="iternary" class="accrodion-grp faq-accrodion mb-4" data-grp-name="faq-accrodion" >
                                            <div class="accrodion active">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 1</span> - Arrival at Delhi </h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "block" }}>
                                                    <div class="inner">
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Welcome to the Capital City of India.</div>
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Reach Delhi, where a representative will help you get transferred to the hotel.</div>
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> On reaching the hotel, complete the check-in process and take some rest.</div>
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Later in the afternoon, proceed to Jantar Mantar which is a huge observatory that contains astronomical structures and instruments, all of which are built entirely of masonry.</div>
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> You can then proceed to visit Raj Ghat, a memorial dedicated to Mahatma Gandhi at the west bank of the Yamuna River.</div>
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> You can also drive past Rajpath overlooking the Rashtrapati Bhawan and Parliament House and visit the India Gate.</div>
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Once you are done exploring Delhi, you can proceed back to the hotel.</div>
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Overnight stay at the hotel in Delhi.</div>


                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 2</span> - Delhi To Agra </h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i>  Home to Magnificent Taj, One of the Seven Wonders in the World.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Wake up in the morning, have a delicious breakfast and then you can get ready for a drive to another historical and romantic city of Agra.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> En route, you can visit Sikandara - a red sandstone and marble tomb built by Emperor Akbar himself.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> On arrival at Agra, check-in to your hotel and take some rest.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> In the afternoon you can visit the world famous Taj Mahal - the most precious gift of love built by Emperor Shah Jahan for his loving wife Mumtaz.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Further, you can also visit the Marble inlay making factories to see traditional workers making amazing marble crafts.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Once you are done exploring the beautiful city of Taj, you can return back to the hotel.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Overnight stay at the hotel in Agra.</div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 3</span> - Agra to Jaipur via Fatehpur Sikri </h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Welcome to the 'Pink City of India'.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Wake up in the morning, and after having a healthy breakfast you can visit Agra Fort before you leave for 'Pink City', Jaipur.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> En route to Jaipur, you can take a short stopover at Fatehpur Sikri - the capital of the Mughal Empire also known as the city of Victory.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Here you will be visiting the beautiful Buland Darwaza, which is one of the largest gateways in the world.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After you are done exploring Fatehpur Sikri, you can proceed to Jaipur.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> On arrival at Jaipur, check into your hotel and take some rest.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> The remaining day is at leisure and you can opt to explore the surroundings.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Overnight stay at the hotel in Jaipur.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 4</span> - Sightseeing in Jaipur </h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Explore Amber Fort’s Sheesh Mahal, a Heartthrob of Bollywood Films.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Have a hearty breakfast before embarking on the full-day sightseeing tour to Jaipur.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i>  You can visit the grand Amber Fort and Palace cradled on the top of Aravali Hill overlooking the Pink City of Jaipur.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Then you can proceed to Gaitore which is not only a royal cremation ground of Kachhwaha Rajputs but also an architectural marvel.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> On your way back, you can stop over at the beautiful Man Sagar Lake and admire the grand Jal Mahal palace made of Red Sandstone.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Later, you can explore the rich history of Jaipur as you proceed to City Palace and Museum and Jantar Mantar, which is a heritage site with fixed instruments for making astronomical observations.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> In the evening, you can proceed for a photo stop at Hawa Mahal and you can also opt to explore the nearby markets.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Once done exploring the city, you can proceed back to your hotel.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Overnight stay at the hotel in Jaipur.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 5</span> - Jaipur to Delhi and Departure </h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> End of Trip With a Bag Full of Life Time Memories.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Wake up to a beautiful sunrise and have a healthy breakfast.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Pack your bags along with a bundle of cherished memories and head back to Delhi. Conclude the tour on reaching your desired destination in Delhi for your onward journey</div>

                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div class="col-lg-12 col-md-6 mb-2">
                                            <div class="desc-box bg-grey p-4 rounded">
                                                <h5 class="mb-2">Inclusions</h5>
                                                <ul>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> 04 Nights’ Accommodation using Double Sharing Room as per above mentioned Hotels</li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Daily Meals – Daily Breakfast and Dinner in above mentioned Hotels </li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Airport / hotel transfers + city tour + Drives as per the itinerary by Air – Conditioned (Sedan/Suv/Tempo) Car </li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> All currently applicable taxes, however, any other tax as and when levied by the Government shall be extra </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-6 mb-2">
                                            <div class="desc-box bg-grey p-4 rounded">
                                                <h5 class="mb-2">Exclusions</h5>
                                                <ul>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Any meal unless specified above </li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Any Air Fare/ Train Ticket. </li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Any Guide Service</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> All entrances fees to monuments. </li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Personal nature expenses like telephone / laundry bills etc </li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Airports tax and travel insurance etc.   </li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Services not specified above.</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-6 mb-2">
                                            <div class="desc-box bg-grey p-4 rounded">
                                                <h4>Things To Do</h4>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> At the Rashtrapati Bhawan, you can attend the unique ceremony of the changing of the guard</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Enjoy walking down the colorful Art Street in Lodi Colony, which is decorated with vibrant mural</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> You can learn about the history of the fort by watching the Light and Sound Show at Agra Fort</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Experience the Taj Mahal as painted by the rising sun on a morning boat ride on the Yamuna River</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Visit Kalakriti Convention Center to watch the popular Musical Drama of the Taj Mahal's story</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> You can learn how to make the famous Jaipur Blue Pottery without using clay</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Visit Jaigarh, where a projectile from the 18th-century Jaivana cannon created a small lake in Chaksu after traveling approximately 35 Km</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="single-map mb-4">
                                    <h4>Map</h4>
                                    <div class="map rounded overflow-hidden">
                                        <div style={{ width: "100%" }}>
                                            <iframe class=" rounded overflow-hidden" height="400" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448181.16373980255!2d76.81305986487548!3d28.647279935996227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1661253658057!5m2!1sen!2sin"  ></iframe>
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
