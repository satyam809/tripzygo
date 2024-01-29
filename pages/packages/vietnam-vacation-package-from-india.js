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

                <title>TripzyGo - Book Affordable Vietnam Vacation Package From India - Best 6 Days Vietnam Trip</title>
                <meta name="description" content="Get excited with Vietnam vacation packages from India. Book your 6 days Vietnam trip with us and enjoy your Vietnam vacation from India now. Contact us today!" />
                <meta name="keywords" content="vietnam vacation package from india, 6 days vietnam trip, vietnam vacation from india" />
                <link rel="icon" href="/icon.png" />
                <link rel="canonical" href="https://www.tripzygo.in/packages/vietnam-vacation-package-from-india" />
                <meta property="og:url" content="https://www.tripzygo.in/packages/vietnam-vacation-package-from-india" />
                <meta property="og:title" content="Book Affordable Vietnam Vacation Package From India - Best 6 Days Vietnam Trip" />
                <meta property="og:description" content="Get excited with Vietnam vacation packages from India. Book your 6 days Vietnam trip with us and enjoy your Vietnam vacation from India now. Contact us today!" />
                <meta property="og:image" content="https://www.tripzygo.in/images/international_packages/vietnam_vacation_package_from_india/1.webp" />
            </Head>
<ShareButton/>
<PopularityWidget packageCount="75" progressBarPercentage="75%"/>
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
                                        <h2 className="mb-1">Vietnam Vacation Package From India</h2>

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
                                                        <img className='blog_image' src="/images/international_packages/vietnam_vacation_package_from_india/1.webp" alt="vietnam vacation package from india" />

                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/vietnam_vacation_package_from_india/2.webp" alt="vietnam vacation package from india" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/vietnam_vacation_package_from_india/3.webp" alt="6 days vietnam trip" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/vietnam_vacation_package_from_india/4.webp" alt="6 days vietnam trip" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/vietnam_vacation_package_from_india/5.webp" alt="vietnam vacation from india" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/vietnam_vacation_package_from_india/6.webp" alt="vietnam vacation from india" />
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
                                                        <img className='blog_image' src="/images/international_packages/vietnam_vacation_package_from_india/1.webp" alt="vietnam vacation package from india" />

                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/vietnam_vacation_package_from_india/2.webp" alt="vietnam vacation package from india" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/vietnam_vacation_package_from_india/3.webp" alt="6 days vietnam trip" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/vietnam_vacation_package_from_india/4.webp" alt="6 days vietnam trip" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/vietnam_vacation_package_from_india/5.webp" alt="vietnam vacation from india" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/vietnam_vacation_package_from_india/6.webp" alt="vietnam vacation from india" />
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
                                                <div>Thinking of a cheap and long vacation? Vietnam can be the perfect place for you. This Vietnam vacation package from India will take you to an amazing 6 day Vietnam trip where you can enjoy and make memories of a lifetime in this amazing country with rich culture, good food, friendly people, ancient cities, and a lot more.</div>
                                                <div class="mb-0">You can learn about the culture of Vietnam and enjoy it by following some Vietnamese rituals and traditions. You can have amazing lunches and dinners having the taste of authentic, delicious, and lavish Vietnamese food and cuisine. You can go around the bustling and ancient cities of Vietnam to be amused by the old architectures and designs. And there is a lot more you can do on your Vietnam vacation from India, especially when it’s a long 6 day Vietnam trip.</div>
                                                <div>Have the best of Vietnam on your Vietnam vacation with this Vietnam Vacation Package from India.Don’t wait up! Book the Vietnam Vacation Package from India now.</div>
                                            </div>
                                        </div>


                                    </div>
                                </div>


                                <div class="tour-includes mb-4">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td><i className="fa fa-clock-o pink mr-1" aria-hidden="true"></i> Days : 5 Nights/6Days</td>
                                                <td><i class="fa fa-group pink mr-1" aria-hidden="true"></i> People : 1</td>

                                            </tr>
                                            <tr>
                                                <td><i class="fa fa-inr pink mr-1" aria-hidden="true"></i> Total Tour Cost : INR 25,500/-*</td>
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
                                                    <h5 class="mb-0"><span>Day 1</span> - Ho Chi Minh City: Arrival and pleasurable leisure time</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "block;" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> A representative of the agent will greet you with warmth of Vietnamese hospitality when you arrive in Ho Chi Minh City, also known as HCMC.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After that, you will be escorted to the hotel. Make your way to the hotel and complete the check-in process. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> There is leisure time remaining in the day. As a result, you can either relax at the hotel or explore the city on your own. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> As well as pho (the legendary rice-noodle soup), Bo la lot (betel leaf-wrapped spicy ground beef rolls), and seafood, authentic treats are also available.</div>


                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 2</span> - Ho Chi Minh City: Enjoy a day at historical marvels</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none;" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Get out of bed with a wholesome breakfast and set out to be acquainted with the history of HCMC with a guide. To begin with is Independence Palace, otherwise known as Reunification Palace.</div>
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Located close by are Notre Dame Cathedral, the Central Post Office, and the War Remnants Museum. Allow yourself to become absorbed by them, then get lunch at a local restaurant.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> The following part of the day's trip will take you to the Cu Chi Tunnels in your Ho Chi Minh City 2-day itinerary. These tunnels are a silent witness to the rigorous lives of soldiers fighting the Vietnam War there. An introductory video will be shown prior to entering these underground passages.</div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 3</span> - Phu Quoc: Arrival and free time</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none;" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Enjoy a breakfast, then head off to the hotel. Today, you will be taken to Phu Quoc, the paradise island off the shores of Cambodia in the Gulf of Thailand.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After you head to the airport to catch your flight to Phu Quoc, head to Phu Quoc Island. As soon as you arrive, check in to at the lodge and unwind according to your Vietnam 6 days itinerary. Here, you'll have lots of opportunities to spend the time relaxing.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Soak up the sun on the beach, kissed every now and then by the water's embrace or observe the Vietnamese way of life. Afterward, return to the resort for the night.</div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 4</span> - Phu Quoc</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none;" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Get your day started with a delicious breakfast and plan how you'll spend the rest of the day. There are a variety of activities to keep you occupied, aside from relaxing on the beach, on the island paradise. Take advantage of the fun-filled attractions here on your own. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Nature lovers can explore tourist spots like Suoi Da Ban and Suoi Tranh (waterfalls), pepper, cashew nut plantations, and Mount Chua. You should visit many landmarks here such as Dinh Cau Rock (Cua Temple), Coconut Tree Prison (Nha Lao Cay Dua Prison), and War Memorial. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Enjoy your leisure time on this day in Vietnam by visiting Fish sauce factories or watching Pearl Farming.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 5</span> - Phu Quoc: Another free day to delight</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none;" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After a wholesome breakfast, set off for another easy-going leisure day. You can start your day with visits to historical and cultural places like Sung Hung Pagoda, Hung Long Tu Pagoda, and Legend of the Magic Well. Visiting Phu Quoc National Park is also a great idea.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> You can take up water activities like squid fishing, snorkeling,  jet-skiing, wind sailing, and scuba diving. You can head to the early-morning Duong Dong Market for shopping to buy authentic items.</div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 6</span> - Departure day</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none;" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Have your breakfast and check out from the resort. You will be taken to the airport to catch flight to Ho Chi Minh City. From HCMC, board your flight back home with bag full of memories.</div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-6 mb-2">
                                            <div class="desc-box bg-grey p-4 rounded">
                                                <h5 class="mb-2">Inclusions</h5>
                                                <ul>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> All private transportation with guide</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> Accommodation shared in Double/ Twin room</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> All In-tour flights as per itinerary</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> Experienced English speaking guide</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> Private boat trip as per itinerary</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> Meals as per the itinerary</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> All sightseeing tickets</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> Tissues & water on coach</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> Services charges and government tax</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> Personalized single agent/single customer service</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> Charges after services confirmation</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> 24/7 support</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> Vietnam visa stamping fee</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> Visa On Arrival guaranteed letter</li>

                                                </ul>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-6 mb-2">
                                            <div class="desc-box bg-grey p-4 rounded">
                                                <h5 class="mb-2">Exclusions</h5>
                                                <ul>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> International flights & departure taxes</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Personal expenses, tips and gratuities</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Travel insurance</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Beverage</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Other services not mentioned above</li>

                                                </ul>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-6 mb-2">
                                            <div class="desc-box bg-grey p-4 rounded">
                                                <h5 class="mb-2">Things To Do</h5>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> In Halong Sound, You Can Journey and Kayak</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Experience Cruising in Mekong Delta</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Taste Vietnamese Cuisine</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Crawl Through the Cu Chi Tunnel</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Living with the Authentic Shows in Hỏa Lò Jail</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Enjoy the Melodic Event at Saigon Show House</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Experience the Sizzling Nightlife of Ho Chi Minh City</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Try Climbing and Cycling at Mai Chau</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Shop the Best Silk Materials in Hoi an</div>

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