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
import Carousel from '../../components/Package_Description/descriptionCarousel';
import LocationMap from '../../components/Package_Description/locationMap';
import RelatedPackage from "../../components/Package_Description/RelatedPackages"
import axios from 'axios';
import { useEffect } from 'react'
export default function test() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [obj, setObj] = useState({});
    const getAllPackages = async () => {
        try {
            const url = `https://backend.tripzygo.in/packages?limit=12&destination_search=Shimla`;
            const { data } = await axios.get(url);
            setObj(data);
        } catch (err) {
        }
    };
    useEffect(() => {
        getAllPackages();
    });
    return (
        <div>
            <Head>

                <title>TripzyGo - Exotic Shimla Kullu Manali Tour Package - Shimla Kullu Manali Tour For 6 Days</title>
                <meta name="description" content="Have the best Himachal Pradesh itinerary for 6 days with our Shimla Kullu Manali tour. Check out our super deluxe Shimla Kullu Manali tour package now." />
                <meta name="keywords" content="Shimla Kullu Manali tour package, Himachal Pradesh itinerary for 6 days, Shimla Kullu Manali tour" />
                <link rel="icon" href="/icon.png" />
                <link rel="canonical" href="https://www.tripzygo.in/packages/super-deluxe-shimla-kullu-manali-tour-package" />
                <meta property="og:url" content="https://www.tripzygo.in/packages/super-deluxe-shimla-kullu-manali-tour-package" />
                <meta property="og:title" content="Exotic Shimla Kullu Manali Tour Package - Shimla Kullu Manali Tour For 6 Days" />
                <meta property="og:description" content="Have the best Himachal Pradesh itinerary for 6 days with our Shimla Kullu Manali tour. Check out our super deluxe Shimla Kullu Manali tour package now." />
                <meta property="og:image" content="https://www.tripzygo.in/images/domestic/super_deluxe_shimla_kullu_manali_tour_package/1.webp" />
            </Head>
            <ShareButton />
            <PopularityWidget packageCount="67" progressBarPercentage="65%" />
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
                                        <h2 className="mb-1">Super Deluxe Shimla Kullu Manali Tour Package</h2>

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
                                                        <img className='blog_image' src="/images/domestic/super_deluxe_shimla_kullu_manali_tour_package/1.webp" alt="Shimla Kullu Manali tour package" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/super_deluxe_shimla_kullu_manali_tour_package/2.webp" alt="Shimla Kullu Manali tour package" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/super_deluxe_shimla_kullu_manali_tour_package/3.webp" alt="Himachal Pradesh itinerary for 6 days" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/super_deluxe_shimla_kullu_manali_tour_package/4.webp" alt="Himachal Pradesh itinerary for 6 days" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/super_deluxe_shimla_kullu_manali_tour_package/5.webp" alt="Shimla Kullu Manali tour" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/super_deluxe_shimla_kullu_manali_tour_package/6.webp" alt="Shimla Kullu Manali tour" />
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
                                                        <img className='blog_image' src="/images/domestic/super_deluxe_shimla_kullu_manali_tour_package/1.webp" alt="Shimla Kullu Manali tour package" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/super_deluxe_shimla_kullu_manali_tour_package/2.webp" alt="Shimla Kullu Manali tour package" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/super_deluxe_shimla_kullu_manali_tour_package/3.webp" alt="Himachal Pradesh itinerary for 6 days" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/super_deluxe_shimla_kullu_manali_tour_package/4.webp" alt="Himachal Pradesh itinerary for 6 days" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/super_deluxe_shimla_kullu_manali_tour_package/5.webp" alt="Shimla Kullu Manali tour" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/super_deluxe_shimla_kullu_manali_tour_package/6.webp" alt="Shimla Kullu Manali tour" />
                                                    </div>
                                                </SwiperSlide>
                                            </Swiper>





                                        </div>

                                    </div>
                                </div>

                                <div className="description mb-2">
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 mb-2 ">
                                            <div className="desc-box bg-grey p-2 rounded ">
                                                <div class="container">

                                                    <article>
                                                        <input type="checkbox" className='checkbox' id="read_more" role="button" />
                                                        <label for="read_more" onclick=""><span>Read More</span><span>Read Less</span></label>

                                                        <section className='set_padding'>
                                                            <h5 className="mb-2">Super Deluxe Shimla Kullu Manali Tour Package</h5>
                                                            <p>The Super Deluxe Shimla Kullu Manali Tour Package is an excellent option for travelers who want to explore the natural beauty, culture, and adventure activities of Shimla, Kullu, and Manali in comfort and style. This package offers a perfect combination of luxury accommodation, fine dining, and exciting activities, ensuring that you have an unforgettable and enjoyable experience. The Shimla Kullu Manali tour package includes accommodation in some of the most luxurious and well-appointed hotels and resorts in the region. You will have a range of options to choose from, including cozy rooms with stunning mountain views and lavish suites complete with private balconies and hot tubs. All of the hotels and resorts are equipped with modern amenities such as spas, gyms, swimming pools, and more, ensuring that you have everything you need to relax and unwind.
                                                            </p>
                                                            {/* <p>Families can take a boat trip to nearby islands, where they can explore the local culture and enjoy a picnic on the beach. The Maldives is also known for its beautiful sunsets, which can be enjoyed from the comfort of your resort or on a sunset cruise. The Maldives is also home to a number of excellent restaurants, which serve a variety of local and international cuisine.
                                                            </p>                                                        */}
                                                        </section>
                                                        <section className='set_padding'>
                                                            <p>Fine dining is also an important aspect of the Super Deluxe Shimla Kullu Manali Tour Package. You can expect to indulge in some of the most delectable cuisines on offer in the hill stations. You will have the opportunity to savor a range of culinary delights, from local Himachali dishes to international cuisine, all prepared with the finest ingredients and presented in exquisite settings.
                                                            </p>
                                                            <p>Aside from the luxurious accommodation and fine dining experiences, this Himachal Pradesh itinerary for 6 days also includes a range of exciting activities to keep you entertained throughout your stay. You can choose from various adventure sports, including trekking, paragliding, skiing, and river rafting, or enjoy a relaxing day of fishing, golfing, or simply exploring the region's stunning natural beauty. You can also experience the rich cultural heritage of the area by visiting ancient temples, churches, and monasteries, and participating in traditional folk dance and music performances.
                                                            </p>
                                                            <p>The Shimla Kullu Manali tour also includes transportation in a comfortable and air-conditioned vehicle throughout your journey. You will be picked up and dropped off at your desired location, and you will have a dedicated car and driver at your disposal throughout the tour. This allows you to travel at your own pace and ensures that you are always comfortable and well-rested.
                                                            </p>
                                                            <p>In conclusion, the Shimla Kullu Manali tour package offers a luxurious and unforgettable experience that is perfect for those who want to explore the natural beauty, culture, and adventure activities of Shimla, Kullu, and Manali in style. With luxurious accommodations, fine dining, exciting activities, and comfortable transportation, this package offers a perfect way to escape from the hustle and bustle of city life and enjoy the serene beauty of the hill stations.
                                                            </p>
                                                            {/* <p>Another important aspect to consider when planning a Maldives family tour package from India is the eco-tourism. The Maldives is known for its natural beauty and marine life, and there are a number of ways for families to experience and learn about the environment and conservation efforts in the Maldives. For example, families can visit marine protected areas, such as coral reef and turtle conservation areas, where they can learn about the importance of preserving the marine environment.
                                                            </p>
                                                            <p>In conclusion, a Maldives family tour package from India is a perfect opportunity for families to experience the natural beauty, luxury, and adventure of one of the world's most exclusive vacation destinations. The Maldives offers a wide range of activities and experiences for families, including swimming and snorkeling in crystal-clear waters, marine biology excursions, and luxury resorts, as well as beautiful sunsets, delicious food, and entertainment for children. With a perfect blend of relaxation, adventure, education and eco-friendly activities, this tour package is sure to make for a memorable and responsible family vacation. It is important to consider the time of year, budget, accommodation, transportation, culture, safety and eco-tourism when planning a Maldives family tour package from India.
                                                            </p> */}
                                                        </section>
                                                    </article>
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
                                                <div>Himachal is an enchanting beauty with mesmerising sights to cherish. </div>
                                                <div class="mb-0">When you’re in Himachal, everything simply feels magical.</div>
                                                <div class="mb-0"> Enjoy a delightful experience in Himachal with this super deluxe Shimla Kullu Manali tour package for 5 Nights and 6 Days.</div>
                                                <div>You’ll have the most amazing 6 Days of your life with a well-planned Himachal Pradesh itinerary for 6 days covering the best parts of Shimla and Kullu Manali.</div>
                                                <div>Be it with your partner, friends, or family, this Shimla Kullu Manali tour will be in the list of the most amazing trips of your life with many moments and memories to cherish for a life time.</div>
                                                <div>Don’t wait up. Book your tour package now to avail of the special deals and offers and enroute the most amazing trip of your life.</div>
                                            </div>
                                        </div>


                                    </div>
                                </div>

                                <div class="tour-includes mb-4">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td><i className="fa fa-clock-o pink mr-1" aria-hidden="true"></i> Days : Package Category : Super Deluxe</td>
                                                <td><i class="fa fa-clock-o  pink mr-1" aria-hidden="true"></i> 5 Nights/6 Days</td>
                                            </tr>
                                            <tr>
                                                <td><i class="fa fa-map-signs pink mr-1" aria-hidden="true"></i> Shimla : Satyam Paradise / Nirvana Hills / Swastik Inn Or Similar</td>
                                                <td><i class="fa fa-map-signs pink mr-1" aria-hidden="true"></i> Manali : Kullu Manali Inn / Naina Resorts & Cottages / New Harmony Inn Or Similar</td>

                                            </tr>
                                            <tr>
                                                <td><i class="fa fa-group pink mr-1" aria-hidden="true"></i> People : 1</td>
                                                <td><i class="fa fa-inr pink mr-1" aria-hidden="true"></i> Total Tour Cost : INR 15,700/-* </td>

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
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 1</span> - Chandigarh – Shimla (110 Kms)</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "block" }}>
                                                    <div class="inner">
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Day Services: Dinner, Stay & Car</div>
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After picking from Chandigarh Airport/Railway station, startyour wonderful vacation to Himachal starting from Shimla. </div>
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Reach Shimla and check-in into the pre-booked hotel for Overnight stay.</div>

                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Shimla renowned its name as Queen of hills due to its flattering sceneries and colonial heritage which has retained its charm from British India time to till now.</div>


                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 2</span> - Shimla – Kufri – Local – Shimla</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Day Services: Stay, Breakfast, Dinner & Car</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After breakfast, proceed to Kufri (22 Kms from Shimla). </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Kufri is an all season place – winters are packed with snow adventures while the summers are brimmed with colourful meadows.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Kufri also has a Himalayan Wildlife Zoo and Kufri Fun Park which will make the trip even more exciting (Entry & Activities at your own cost).</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After sightseeing, head back to Shimla.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> In the city we will visit the Indian Institute of Advance Study, the Mall, Johnnie’s Wax Museum, Scandal Point, Ridge, Gaiety Theatre, Heritage Museum, Lakkar Bazaar,Rani Jhansi Park and Christ Church.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Overnight stay in the Hotel.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 3</span> - Shimla – Kullu – Manali (250 Kms)</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Today morning after breakfast I checked out from the hotel and proceeded towards Manali. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Places to cover enroute will be Vaishno Devi Temple, Hanogi Mata Temple, Pandoh Dam & Sundar Nagar Lake.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Near Kullu, we will be visiting Pashmina Shawl showrooms and will try out our hands on white water River Rafting too. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Reach Manali followed by check-in into the hotel. Overnight stay will be in the hotel.</div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 4</span> -  Manali Local Sightseeing</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Day Services: Stay, Breakfast, Dinner & Car</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After freshening up, enjoy the  Manali Local Sightseeing tour. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Start your trip by covering Hadimba Devi Temple and Ghatotkacha Temple. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> The temples are dedicated to Mata Hadimba (the most worshipped deity in Himachal) and her son Ghatotkacha. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> The Clubhouse will be the next place to visit. Here, enjoy recreational activities such as Skating, disco, zipline, TT and much more.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Later bathe ourselves in Sage Vashisht’s Hot Springs containing Medical properties.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Right across the Hot spring are temples of Lord shiva and Lord Ram where one can pay a visit.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Overnight stay will be in a reserved Hotel.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 5</span> - Manali – Solang Valley</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Day Services: Stay, Breakfast, Dinner & Car</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Solang Valley (15 Kms from Manali) Summers or winters, this place never fails to fascinate the visitors. Summers offer enchanting greenery all around whereas the winters are blessed with amazing snowfalls.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> While visiting Solang Valley one should also try their hands on adventure activities as it is one of the best places for adventures near Manali.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i>  Clubhouse will be the next place to visit. Here, enjoy recreational activities such as Skating, disco, zipline, TT and much more.</div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 6</span> - Manali – Mandi – Chandigarh (320 Kms)
                                                    </h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Day Services: Breakfast & Car</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After breakfast, check out from the hotel & visit Near Kullu, we will be visiting Pashmina Shawl showrooms, Hanogi Mata Temple, Pandoh Dam & Sundar Nagar Lake.  </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After enjoying the outing drive to Chandigarh Airport / Railway Station for a drop with ever memorable moments of your exotic trip… </div>


                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-6 mb-2" id='inclusions'>
                                            <div class="desc-box bg-grey p-4 rounded">
                                                <h5 class="mb-2">Inclusions</h5>
                                                <ul>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Free pick up & drop services from Delhi.</li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Stay for 5 Nights on Double occupancy.</li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> MAP Meal Plan – 5 Breakfasts and 5 Dinners (Same as number of nights). </li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> Separate Sedan (2-4)/ Innova (5-6) Car according to the itinerary (NGT Terms will apply & A/C Will not be used in hilly areas). </li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> Transfer taxes, parking, fuel & driver charges.</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> Perking Tax, toll tax, Luxury Tax, Fuel Exp. Driver Exp. Etc. </li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> Bedroom : 01 Double Rooms</li>


                                                </ul>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-6 mb-2" id='exclusions'>
                                            <div class="desc-box bg-grey p-4 rounded">
                                                <h5 class="mb-2">Exclusions</h5>
                                                <ul>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Flights, Trains, Ferries etc.</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Monument Entrance Fees & Camera Fees. </li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Personal Expenses - Laundry, Shopping, Telephone bills, tips etc.</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Adventure Activities - Safari, Rides, Surfing, Paragliding etc.</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Any Extra services - Permits, Volvo Luggage Charges, Heater, Meals etc </li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Anything else not listed in above details.</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> 5% GST Extra. </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-6 mb-2" id='things-to-do'>
                                            <div class="desc-box bg-grey p-4 rounded">
                                                <h4>Things To Do</h4>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Create a peaceful image of Shimla with the Toy-Train Ride</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> As you navigate your raft through the glistening River Tattapani, you may control the paddle</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Skiing, tobogganing, and other adrenaline-pumping activities are available</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Trek to Shimla's highest point to find Lord Hanuman's lit statue</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Unwind at Cafe Simla Times with a hot cup of blended coffee</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Don't forget to purchase a distinctive wooden keepsake from Lakkar Bazar</div>
                                            </div>
                                        </div>
                                        <div className="description mb-2" id="places-to-eat">
                                            <div className="row">
                                                <div className="col-lg-12 col-md-12 mb-2 ">
                                                    <div className="desc-box bg-grey p-4 rounded ">
                                                        <h5 className="mb-2">Best Cafes</h5>
                                                        <div>A trip to the ‘queen of the hills is as yet a #1 among the majority since it offers pleasant perspectives as well as wonderful experiences. Try out these most aesthetic cafes in Shimla that will without a doubt add a rich flavor to your get-away......</div>
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
                                                                <div className="accrodion ">
                                                                    <div className="accrodion-title rounded">
                                                                        <h5 className="mb-0 px-3">Is Super Deluxe Shimla Kullu Manali Tour Package and Premium Package the same?</h5>
                                                                    </div>
                                                                    <div className="accrodion-content" style={{ display: "block" }} >
                                                                        <div className="inner">
                                                                            <div className="mb-0 ">No, both are separate packages and are available at different rates.</div>

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accrodion ">
                                                                    <div className="accrodion-title rounded">
                                                                        <h5 className="mb-0 px-3"> What will be included Himachal Pradesh itinerary for 6 days?</h5>
                                                                    </div>
                                                                    <div className="accrodion-content" style={{ display: "none" }} >
                                                                        <div className="inner">
                                                                            <div className="mb-0 ">Day 1: Arrive at Shimla airport/railway/Volvo station and enjoy lush greenery, snow-capped mountains, vintage architecture, cafes, and panoramic views.</div>
                                                                            <div className="mb-0 ">Day 2: After a sumptuous breakfast, a ride waits for Kufri, Wildlife Zoo, where you can get acquainted with wildlife such as Antelopes, Felines, and birds, and also visit Jhakho temple and local area and market.</div>
                                                                            <div className="mb-0 ">Day 3: After breakfast, move towards Manali, where on the way, visit Kullu Valley, Pandoh Dam, Sunder Nagar Lake, Hanogi Mata Temple, Kullu Vaishno Devi Temple, and some shopping. After reaching Manali, you can do activities like river rafting here.</div>
                                                                            <div className="mb-0 ">Day 4: Sightseeing of Hidimba Devi Temple, Countryside and Temple, Hot Spring, Van Vihar, Manali Market, The Mall, and Tibetan Monastery. You can buy some souvenirs from here as a sign of Himachal. </div>
                                                                            <div className="mb-0 ">Day 5: On Day 5, enter the beautiful Solang Valley. Get thrilled with adventure activities like skiing, horse riding, ropeway, paragliding, and zorbing. The favorable climate creates an atmosphere where the best of leisure time can be enjoyed. </div>
                                                                            <div className="mb-0 ">Day 6: On the last day, go to Kullu, adjacent to Manali, and spend time among the beautiful valleys. After sightseeing, you can also shop in the local market. Enjoy the variety of tastes in street food and restaurants, and check in towards your hotel. Check out the Itinerary section on the Shimla Kullu Manali tour package for more clarity.</div>


                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accrodion ">
                                                                    <div className="accrodion-title rounded">
                                                                        <h5 className="mb-0 px-3">Shimla Kullu Manali tour can be done in the Monson? </h5>
                                                                    </div>
                                                                    <div className="accrodion-content" style={{ display: "none" }} >
                                                                        <div className="inner">
                                                                            <div className="mb-0">No visitors should avoid traveling here in the monsoon. Due to being a hilly area, there is heavy rain, resulting in the risk of landslides increasing. Due to this, traffic jams at various places can be seen, and the roads get damaged.</div>
                                                                            {/* <div className="mb-0">• Naggar</div>
                                                                            <div className="mb-0">• Manikaran</div>
                                                                            <div className="mb-0">• Manali</div>
                                                                            <div className="mb-0">• Mandi</div> */}
                                                                            {/* <div className="mb-0">• Udon</div>
                                                                    <div className="mb-0">• Sashimi</div>
                                                                    <div className="mb-0">• Mochi</div>
                                                                    <div className="mb-0">• Macha</div> */}

                                                                            {/* <div className="mb-0">These are just a few examples of the many delicious and unique foods you can find in Japan.</div> */}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accrodion ">
                                                                    <div className="accrodion-title rounded">
                                                                        <h5 className="mb-0 px-3"> Is 6 days enough for the Shimla Kullu Manali tour?</h5>
                                                                    </div>
                                                                    <div className="accrodion-content" style={{ display: "none" }} >
                                                                        <div className="inner">
                                                                            <div className="mb-0 ">Exactly 5 to 6 days can cover all these three destinations perfectly. </div>


                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {/* <div className="accrodion ">
                                                                    <div className="accrodion-title rounded">
                                                                        <h5 className="mb-0 px-3">What to shop in Manali?</h5>
                                                                    </div>
                                                                    <div className="accrodion-content" style={{ display: "none" }} >
                                                                        <div className="inner">
                                                                            <div className="mb-0 ">Shawls, Tweed jackets, Artificial jewelry, and Tibetan handicrafts are some things that one must buy when coming to Manali.</div>


                                                                        </div>
                                                                    </div>
                                                                </div> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <LocationMap mapLink="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3472229.600687405!2d75.05721468826009!3d31.801858998424375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390453c367f901f7%3A0x7cfe04c5564b7725!2sHimachal%20Pradesh!5e0!3m2!1sen!2sin!4v1678948728751!5m2!1sen!2sin"></LocationMap>
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




