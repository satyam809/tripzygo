import React from 'react'
import Packages_Form from '../../components/Contact_Forms/packages_form';
import Head from "next/dist/shared/lib/head";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from "swiper";
import 'swiper/css';
import { useEffect } from 'react'
import RelatedPackage from "../../components/Package_Description/RelatedPackages"
import { Navigation, Pagination, A11y } from 'swiper';
import { FreeMode, Thumbs } from "swiper";
import { useRef, useState } from "react";
import LocationMap from '../../components/Package_Description/locationMap';
import axios from 'axios';
import ShareButton from '../../components/Package_Description/shareButton';
import PopularityWidget from '../../components/Package_Description/popularityWidget';
SwiperCore.use([Pagination, Autoplay]);

export default function test() {
    const [obj, setObj] = useState({});
    const getAllPackages = async () => {
        try {
            const url = `https://backend.tripzygo.in/packages?limit=12&destination_search=Himachal Pradesh`;
            const { data } = await axios.get(url);
            setObj(data);
        } catch (err) {
        }
    };
    useEffect(() => {
        getAllPackages();
    });
    const [readMore, setReadMore] = useState(false);
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const extraContent = <div>
        <p className="extra-content">
            Undoubtedly, Himachal Pradesh is one of the finest tourist destinations for summer and winter. You can experience panoramic vistas and tranquil landscapes in places like Shimla, Manali, Kullu, and many more. Hence, Shimla Manali trip is the most preferable and likable. Yearly many people choose the best travel package for Shimla Manali tour and cherish the moment.
        </p>
        <p className="extra-content">
            The ‘summer capital of British India’ Shimla has now diverted into a tourist-satisfying hill station in north India. Shimla is the shimmering capital of the attractive Himachal Pradesh and is well-known as the best tourist place in the country. The best travel package for Shimla Manali tour includes a destination like Shimla, from which you can see Shimla's shimmer shining.  Alternatively, Manali is located on the banks of the Beas River, and welcomes you to enjoy many adventure activities such as trekking, climbing, mountain biking, Paragliding, and skiing. Place the best travel package for Shimla Manali tour if you want to relish the outdoor fun and activities.
        </p>
        <p className="extra-content">
            Without any second opinion, Shimla and Manali are a visual treat to all its watchers and tourists. The best part of these hill stations is their temperature, which provides favorable temperatures to experience snow or pleasant summer. And to appreciate the enjoyable weather, nothing is better than the Shimla and Manali tour package. Himachal is indeed a heaven for travelers who always expect and desire to experience a divine feeling, even without spending extra pennies and paying a visit to foreign destinations in search of that. You can also relish the feeling by selecting the best travel package for Shimla Manali tour.
        </p>
        <p className="extra-content">
            The appealing natural looks of the Himalayan destinations emerge to everyone for many reasons. The absolute winner of the city's frozen mountains captivates spirited skiers to get lost in their wanderlust; Shimla and Manali tour package helps you to catch the fascinating sights, where you feel free like a happy bird.
        </p>
        <p className="extra-content">
            Indeed Shimla and Manali have everything. The most favored hill stations among tourists Shimla and Manali, are located just 2 hours from Chandigarh and just 6 hours from Delhi, and the best travel package for Shimla Manali tour can help to easy to reach there. Whether it is to see the richness of the Himalayan heritage or to feel the essence of the colonial era of the 19th century, the best travel package for Shimla Manali tour is the finest way to experience the blend of neo-gothic culture.
        </p>
        <p className="extra-content">
            Under the best travel package for Shimla Manali tour, you get incredible accommodation options, itineraries, a ticket booking facility, food, sightseeing, and so on. An impeccable and comfortable journey around bewitching snow-covered peaks with lush greenery can fantasize with some best travel package for Shimla Manali tour, which comes with customized options.

        </p>

    </div>
    const linkName = readMore ? 'Read Less' : 'Read More'
    return (
        <div>
            <Head>

                <title>TripzyGo - Book Best 6 Days Travel Package For Shimla Manali Tour </title>
                <meta name="description" content="We have the best travel package for Shimla Manali Tour. Go on this 6 days adventurous Shimla Manali trip with our amazing Shimla Manali Tour Package. Grab now." />
                <meta name="keywords" content="best travel package for shimla manali tour, shimla and manali tour package, shimla manali trip" />
                <meta property="og:url" content="https://www.tripzygo.in/packages/luxury-shimla-manali-tour-package" />
                <meta property="og:title" content="Book Best 6 Days Travel Package For Shimla Manali Tour " />
                <meta property="og:description" content="We have the best travel package for Shimla Manali Tour. Go on this 6 days adventurous Shimla Manali trip with our amazing Shimla Manali Tour Package. Grab now." />
                <meta property="og:image" content="https://www.tripzygo.in/images/domestic/luxury_shimla_manali_tour_package/1.webp" />
                <link rel="canonical" href="https://www.tripzygo.in/packages/luxury-shimla-manali-tour-package" />
                <link rel="icon" href="/icon.png" />

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
                                        <h2 className="mb-1">Luxury Shimla Manali Tour Package</h2>

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
                                                        <img className='blog_image' src="/images/domestic/luxury_shimla_manali_tour_package/1.webp" alt="Shimla and Manali tour package" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/luxury_shimla_manali_tour_package/2.webp" alt="Shimla and Manali tour package" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/luxury_shimla_manali_tour_package/3.webp" alt="best travel package for shimla manali tour" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/luxury_shimla_manali_tour_package/4.webp" alt="best travel package for shimla manali tour" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/luxury_shimla_manali_tour_package/5.webp" alt="Shimla Manali Trip" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/luxury_shimla_manali_tour_package/6.webp" alt="Shimla Manali Trip" />
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
                                                        <img className='blog_image' src="/images/domestic/luxury_shimla_manali_tour_package/1.webp" alt="Shimla and Manali tour package" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/luxury_shimla_manali_tour_package/2.webp" alt="Shimla and Manali tour package" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/luxury_shimla_manali_tour_package/3.webp" alt="best travel package for shimla manali tour" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/luxury_shimla_manali_tour_package/4.webp" alt="best travel package for shimla manali tour" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/luxury_shimla_manali_tour_package/5.webp" alt="Shimla Manali Trip" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/luxury_shimla_manali_tour_package/6.webp" alt="Shimla Manali Trip" />
                                                    </div>
                                                </SwiperSlide>
                                            </Swiper>





                                        </div>

                                    </div>
                                </div>

                                <div className="description mb-2">
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 mb-2 ">
                                            <div className="desc-box bg-grey p-4 rounded ">
                                                <div className="App">
                                                    <h5 className="mb-2">Why to Visit Shimla Manali?</h5>
                                                    <p>Are you fond of picnic dates or missing sunny summer days? Himachal is the destination that fulfills your holiday purpose. Himachali land welcomes you to magical destinations like Shimla and Manali, where snowy valleys and pleasant weather await you, knowing it yet failing to explore it. Pick the best travel package for Shimla Manali tour, which assists you like a tour guide and introduces the incredible destinations of the Shimla and Manali trip. </p>
                                                    {readMore && extraContent}
                                                    <a className="read-more-link" onClick={() => { setReadMore(!readMore) }}><h6 style={{ float: "right", margin: "-10px", fontSize: "13px" }}>{linkName}</h6></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div class="description mb-2">
                                    <div class="row">
                                        <div class="col-lg-12 col-md-6 mb-2 ">
                                            <div class="desc-box bg-grey p-4 rounded ">
                                                <h5 class="mb-2">Overview</h5>
                                                <div>A Shimla Manali Trip is on everyone’s bucket list. </div>
                                                <div class="mb-0">It would be a pleasure to experience this trip in all its luxury, won’t it?</div>
                                                <div>This Shimla and Manali tour package brings you that very special luxury and comfort for your Shimla Manali Trip.</div>
                                                <div>Have the pleasure of being in the luxury hotels in Shimla and Manali which offer a unique stay experience and embark on a luxury journey sightseeing every beautiful and picturesque part of these hill stations.</div>
                                                <div>With a well-planned travel itinerary and luxurious accommodations and other facilities, this Shimla and Manali package is designed for your royal comfort and convenience for 5 Nights and 6 Days.</div>
                                                <div>Enjoy and make the best of your Shimla Manali Trip.</div>
                                                <div>Book your Shimla Manali Tour Package now.</div>
                                            </div>
                                        </div>


                                    </div>
                                </div>

                                <div class="tour-includes mb-4">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td><i class="fa fa-clock-o pink mr-1" aria-hidden="true"></i> Package Category : Luxury</td>
                                                <td><i class="fa fa-bed pink mr-1" aria-hidden="true"></i> Bedroom : 01 Double Rooms</td>
                                            </tr>
                                            <tr>
                                                <td><i class="fa fa-map-signs pink mr-1" aria-hidden="true"></i> Shimla : Hotel Ameera / Jade Wine Resorts / Alpine Retreat Or Similar</td>
                                                <td><i class="fa fa-map-signs pink mr-1" aria-hidden="true"></i> Manali : Manali Valley Resorts / Snow Peak retreat / Thomas Villa Or Similar</td>

                                            </tr>
                                            <tr>
                                                <td><i className="fa fa-clock-o pink mr-1" aria-hidden="true"></i> Days : 5 Nights/6 Days</td>
                                                <td><i class="fa fa-inr pink mr-1" aria-hidden="true"></i> Total Tour Cost : INR 35,400/-*</td>


                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="tabs-navbar bg-white sticky bordernone py-2">
                                    <ul id="tabs" class="nav nav-tabs bordernone mb-0 overflow-visible ">
                                        <div class="scrollmenu container px-0 py-1">
                                            <a class="scroller-item2 col-lg-2  py-1" href="#iternary">Itinerary</a>
                                            <a class="scroller-item2 col-lg-2 py-1 " href="#inclusions">Inclusions</a>
                                            <a class="scroller-item2 col-lg-2 py-1 " href="#exclusions">Exclusions</a>
                                            <a class="scroller-item2 col-lg-2 py-1 " href="#things-to-do">Things to Do</a>
                                            <a class="scroller-item2 col-lg-2 py-1 " href="#places-to-eat" >Food</a>
                                            <a class="scroller-item2 col-lg-2 py-1 " href="#faq">FAQ’s</a>

                                        </div>
                                    </ul>
                                </div>

                                <div class="description mb-2">
                                    <div class="row">


                                        <div id="iternary" class="accrodion-grp faq-accrodion mb-4" data-grp-name="faq-accrodion" >
                                            <div class="accrodion">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 1</span> - Delhi – Manali (530 KMS/ 12-14 HRS) (OVERNIGHT JOURNEY)</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "block" }}>
                                                    <div class="inner">
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Day Services: Volvo Only</div>
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> We will receive you in New-Delhi at Volvo pick-up point. </div>
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Your journey into the sparkling land of Himachal Pradesh starts from here.</div>
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> The overnight journey takes you through cities and your morning will be greeted with the fresh air of Manali.</div>
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Exotic Manali offers something special for everyone. </div>
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> It gives peace to mediators; inspiration to artists, daring Activities for adventure Seekers and this list just goes on.</div>
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> As soon as you enter into the terrains of Manali, you will feel the cool breeze already taking all your stress away and surprising you from its jaw- dropping landscapes.</div>


                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 2</span> - Arrival in Manali + Local city tour(3 - 4 HRS TOUR)</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Day Services: Stay, Dinner & Car</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Major Attractions: Hadimba Mata Temple, Club House, Tibetan Monastery, Vashisht’s Hot Springs.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Upon reaching Manali Stop, our team will greet you and transfer you to the hotel (Check in time will be 12:00 noon and early check-in will be subject to availability and an extra charge applies).</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Wake up to the beauty of Manali, after Lunch, proceed for the day tour which includes your local sightseeing.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Every new beginning should be honored with folded hands and so the first place to visit will be Hadimba Mata Temple along with Ghatotkacha Temple then a short visit to Club House where you can enjoy some Indoor activities and then further to Tibetan Monastery.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Later take a bath in Sage Vashisht’s Hot Springs containing Medical properties (Do carry a towel).</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Right across the Hot spring are temples of Lord Shiva and Lord Ram .</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Evening you are free to roam on the famed Mall Road and indulge in local shopping and alsotry some of the native cuisines. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Return to the hotel for dinner and overnight stay.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 3</span> - Manali – Solang Valley or Atal Tunnel</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Day Services: Stay, Breakfast, Dinner & Car</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Major Attractions: Solang Valley, Adventure activities.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After breakfast it is time for some adventures!</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Wake up to the sweet sound of nature and after breakfast head towards Solang Valley. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> This valley is famous for its adventure activities and you can try your hand at Paragliding, Zorbing, ATV Rides, Horse-riding,Trail-rides and so much more. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Before indulging in these activities make sure to understand all safety protocols and measures.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 4</span> - Day Tour To Kullu -Naggar

                                                    </h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Day Services: Stay, Breakfast, Dinner & Car</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Major Attractions: Kullu Pashmina Shawl showrooms.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> White Water River Rafting and Paragliding, Naggar Castle, Roerich Art Gallery.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After breakfast, visit Kullu (40 Kms from Manali) while on the way taking a halt at Kullu Pashmina Shawl showrooms. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> White water River Rafting will be the highlight of the tour, so do not miss it. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Resume your trip to Naggar (20 Kms from Manali). </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Reach and admire the heritage of Naggar Castle.  </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> This castle was once the abode of Kullu Raja and is now a hotspot for National & International Movie shootings. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Later we will drive to Roerich Art Gallery while enroute catching the glimpses of Tripura Sundri Temple (one of the 51 Shakti Peethas).</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> This gallery is one of the places where you can find original paintings of famous Russian Painter Nicholas Roerich,Later returned to Manali while taking a stroll at Trout Fish Farm.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> In this farm, one can order fresh trout platters while enjoying their time in the midst of birds and flowers. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Overnight stay willbe at Manali hotel.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Note: Roerich Art Gallery is closed every Monday.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 5</span> - Manali – Shimla (240 KMS/7-8 HRS)</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Day Services: Stay, Breakfast, Dinner & Car</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Major Attractions: Enroute Mata Vaishno Devi Temple kullu, Hanogi Mata, Pandoh Dam and Sundernagar Lake.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Today after your breakfast, check out from the hotel and head towards “The Queen of Hills”- Shimla, a deluxe bus / cab on a sharing basis.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> On the way make a short halt at Mata Vaishno Devi Temple kullu and get the glimpses of the Pandoh Dam,Hanogi Mata and Sundernagar Lake, Upon arrival, check-in to your pre-booked hotel for a healthy meal and a comfortable stay.</div>


                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 6</span> - Kufri + Shimla local
                                                    </h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Day Services: Stay, Breakfast, Dinner and Car</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Major Attractions: Himalayan wildlife zoo, Kufri Fun Park, Scandal Point, Ridge, Gaiety Theatre, Heritage Museum, Lakkar Bazaar, Rani Jhansi Park and Christ Church.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Today explore the Capital City of Himachal Pradesh. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After a scrumptious breakfast, head towards Kufri.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Kufri is a world famous destination which attracts everyone. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Here you can partake in adventure activities such as Horse-riding, Cycling, Yak-riding, Zip-lining, Tobogganing and so much more, or simply enjoy the open meadows, with majestic mountainous peaks and relax. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Later head back to the main town of Shimla and cover places like Scandal Point, Ridge,  Gaiety , Theatre, Heritage Museum, Lakkar Bazaar, Rani Jhansi Park and Christ Church.  </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Later back to the hotel for dinner and overnight stay.</div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 7</span> - Departure day  (DAY JOURNEY)
                                                    </h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Day Services: Breakfast & Volvo</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After your breakfast, check out from the hotel and head towards the Volvo Stand on the given time for your onward journey to Delhi.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> This completes your Glory of Shimla and Manali Holiday Package with Bharat Booking Holidays with beautiful and everlasting memories. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> We hope that you make us a part of another journey in the future.</div>


                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-6 mb-2" id='inclusions'>
                                            <div class="desc-box bg-grey p-4 rounded">
                                                <h5 class="mb-2">Inclusions</h5>
                                                <ul>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> AC Volvo seats (2 seats) from Delhi to Manali and Shimla to Delhi for each traveler </li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Complimentary Pick up from Manali Volvo Stop to Hotel on Arrival day and Drop at Shimla Volvo Stop from hotel on Departure Day. </li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Welcome Drink on Arrival </li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> 5 Night Accommodation on Double Occupancy for 2 pax, (1 Basic category rooms) </li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> MAP Meal Plan – 5 Breakfasts, 5 Dinners for each person.</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> Use of Individual cab Alto / Eon as per below itinerary but NGT T&C Apply.</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> Transfers from Manali to Shimla on a sharing basis/Deluxe Bus. </li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Taxes & Expenditures Included: Parking, Toll Tax, Luxury Tax, Green Tax, Fuel Exp. and Driver Exp.</li>


                                                </ul>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-6 mb-2" id='exclusions'>
                                            <div class="desc-box bg-grey p-4 rounded">
                                                <h5 class="mb-2">Exclusions</h5>
                                                <ul>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Air Fare / Train Fare.</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Monument Entrance Fee / Camera Fees. </li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Any Adventure Activities and Personal Expenses</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Heater Charges in Hotels & Volvo Luggage Charges & Coolie Charges etc.</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Early Check inn, Late Check outs and Anything else not mentioned in the Inclusion Section. </li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> 5% GST Extra</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-6 mb-2" id='things-to-do'>
                                            <div class="desc-box bg-grey p-4 rounded">
                                                <h4>Things To Do</h4>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> As you river raft on the chilly Beas River, take control of your paddle</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Paragliding, zorbing, and other adrenaline-pumping activities may be found at Solang Valley</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Unwind at Cafe Simla Times with a hot cup of blended coffee</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Must-do Adventure in Kufri, the Highest Go-Kart Track in the World</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Visit the Himalayan National Park to see Exceptionally Rare Mammals</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Warm, clear rivers in the Vashisth Village's unspoiled valleys can let you escape the cold of Manali</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="description mb-2" id="places-to-eat">
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 mb-2 ">
                                            <div className="desc-box bg-grey p-4 rounded ">
                                                <h5 className="mb-2">Best Cafes</h5>
                                                <div>A trip to the ‘queen of the hills is as yet a #1 among the majority since it offers pleasant perspectives as well as wonderful experiences. Try out these most aesthetic cafes in Shimla that will without a doubt add a rich flavor to your get-away....</div>
                                                <a href="/blogs/ten-most-aesthetic-cafes-in-shimla-with-incredible-views-and-delicious-food" className="read-more-link" target="_blank" ><button class="white bg-theme p-1 px-2" style={{ float: "right", margin: "-10px", fontSize: "11px" }}>Read More</button></a>

                                            </div>
                                        </div>


                                    </div>
                                </div>
                                <div className="description mb-2" id="faq">
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 mb-2 ">
                                            <div className="desc-box bg-grey p-4 rounded ">
                                                <h5 className="mb-2">FAQs</h5>
                                                <div className="row">
                                                    <div id="iternary" className="accrodion-grp faq-accrodion mb-4" data-grp-name="faq-accrodion" >
                                                        <div className="accrodion">
                                                            <div className="accrodion-title rounded">
                                                                <h5 className="mb-0">How To Plan For Shimla Manali Trip?</h5>
                                                            </div>
                                                            <div className="accrodion-content" style={{ display: "block" }} >
                                                                <div className="inner">
                                                                    <div className="mb-0">For the best Shimla Manali trip, go for the Luxury Shimla Manali Tour Package. By choosing this, you are sure to have a comfortable journey as it provides you with the finest accommodation, selected destinations, transport, transfer facilities, delectable cuisine, and many more, which is enough for a perfect trip. That's why more and more people choose these packages.</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="accrodion">
                                                            <div className="accrodion-title rounded">
                                                                <h5 className="mb-0"> Is it possible to change the shimla and manali tour package?</h5>
                                                            </div>
                                                            <div className="accrodion-content" style={{ display: "none" }} >
                                                                <div className="inner">
                                                                    <div className="mb-0">Of course, these packages are flexible and keep changing as per the customer's needs. Customers must contact their travel operator in advance for changes. </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="accrodion">
                                                            <div className="accrodion-title rounded">
                                                                <h5 className="mb-0"> What are some of the famous places to visit with the Kerala tour package? </h5>
                                                            </div>
                                                            <div className="accrodion-content" style={{ display: "none" }} >
                                                                <div className="inner">
                                                                    <div className="mb-0">Kerala tour package’s itineraries have all the top destinations, like Munnar, Thekkady, Alleppey, etc. But you can always customize your tour package according to your interest and budget. Tripzygo’s tour operators are always open to give you suggestions and will assist you accordingly.</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="accrodion">
                                                            <div className="accrodion-title rounded">
                                                                <h5 className="mb-0">Which are the best spots for Shimla and Manali?</h5>
                                                            </div>
                                                            <div className="accrodion-content" style={{ display: "none" }} >
                                                                <div className="inner">
                                                                    <div className="mb-0">Coming to Shimla, The Ridge, Jakhoo Hill & Temple, Mall Road, Kalka-Shimla Railway, Kufri, Christ Church, Green Valley, etc., are places considered to be the best. While in Manali Hadimba Temple, Solang Valley, Jogini Waterfalls, Manu Temple, The Manali Gompa, Bhrigu Lake, etc., add to the beauty of Manali. For more details, pick the best travel package for the Shimla Manali tour.</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="accrodion">
                                                            <div className="accrodion-title rounded">
                                                                <h5 className="mb-0"> Delicious dishes which must-try on Shimla Manali trip?</h5>
                                                            </div>
                                                            <div className="accrodion-content" style={{ display: "none" }} >
                                                                <div className="inner">
                                                                    <div className="mb-0">Shimla serves a variety of cuisines, where you may be in a dilemma as to what to eat and what not. But taste Madra, Dhaam, Sidu, Thukpa, Babru, Chha Gosht.</div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="accrodion">
                                                            <div className="accrodion-title rounded">
                                                                <h5 className="mb-0"> Are all the hotels in the Luxury Shimla Manali Tour Package luxurious?</h5>
                                                            </div>
                                                            <div className="accrodion-content" style={{ display: "none" }} >
                                                                <div className="inner">
                                                                    <div className="mb-0">All the hotels or resorts are grand and luxurious precisely as the name suggests. That's why they have been kept in the luxury category. Not only hotels but all the service is also included in the package, it is magnificent.</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <LocationMap mapLink="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3472104.418748328!2d75.05085023035727!3d31.805190146663996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390453c367f901f7%3A0x7cfe04c5564b7725!2sHimachal%20Pradesh!5e0!3m2!1sen!2sin!4v1661253400401!5m2!1sen!2sin"></LocationMap>

                            </div>
                        </div>
                        <div className="col-lg-4 pe-lg-4">
                            <div class="sidebar-sticky">
                                <div class="list-sidebar">
                                    <div class="sidebar-item">
                                        <Packages_Form></Packages_Form>
                                        <RelatedPackage packages={obj.packages ? obj.packages : []}></RelatedPackage>
                                    </div>
                                </div>
                            </div>
                        </div>

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
