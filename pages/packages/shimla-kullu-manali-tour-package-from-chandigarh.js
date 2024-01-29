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

                <title>TripzyGo - Best Shimla Kullu Manali Tour By Car From Chandigarh</title>
                <meta name="description" content="Plan Himachal tour package from Chandigarh. Get Shimla Kullu Manali budget tour package! This Shimla Kullu Manali tour by car takes you to the best attractions." />
                <meta name="keywords" content="Himachal tour package from Chandigarh, Shimla Kullu Manali budget tour package, Shimla Kullu Manali tour by car" />
                <link rel="icon" href="/icon.png" />
                <link rel="canonical" href="https://www.tripzygo.in/packages/shimla-kullu-manali-tour-package-from-chandigarh" />
                <meta property="og:url" content="https://www.tripzygo.in/packages/shimla-kullu-manali-tour-package-from-chandigarh" />
                <meta property="og:title" content="Best Shimla Kullu Manali Tour By Car From Chandigarh" />
                <meta property="og:description" content="Plan Himachal tour package from Chandigarh. Get Shimla Kullu Manali budget tour package! This Shimla Kullu Manali tour by car takes you to the best attractions." />
                <meta property="og:image" content="https://www.tripzygo.in/images/domestic/shimla_kullu_manali_tour_package_from_chandigarh/1.webp" />
            </Head>
            <ShareButton />
            <PopularityWidget packageCount="61" progressBarPercentage="60%" />
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
                                        <h2 className="mb-1">Shimla Kullu Manali Tour Package From Chandigarh</h2>

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
                                                        <img className='blog_image' src="/images/domestic/shimla_kullu_manali_tour_package_from_chandigarh/1.webp" alt="Himachal tour package from Chandigarh" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/shimla_kullu_manali_tour_package_from_chandigarh/2.webp" alt="Himachal tour package from Chandigarh" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/shimla_kullu_manali_tour_package_from_chandigarh/3.webp" alt="Shimla Kullu Manali budget tour package" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/shimla_kullu_manali_tour_package_from_chandigarh/4.webp" alt="Shimla Kullu Manali budget tour package" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/shimla_kullu_manali_tour_package_from_chandigarh/5.webp" alt="Shimla Kullu Manali tour by car" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/shimla_kullu_manali_tour_package_from_chandigarh/6.webp" alt="Shimla Kullu Manali tour by car" />
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
                                                        <img className='blog_image' src="/images/domestic/shimla_kullu_manali_tour_package_from_chandigarh/1.webp" alt="Himachal tour package from Chandigarh" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/shimla_kullu_manali_tour_package_from_chandigarh/2.webp" alt="Himachal tour package from Chandigarh" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/shimla_kullu_manali_tour_package_from_chandigarh/3.webp" alt="Shimla Kullu Manali budget tour package" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/shimla_kullu_manali_tour_package_from_chandigarh/4.webp" alt="Shimla Kullu Manali budget tour package" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/shimla_kullu_manali_tour_package_from_chandigarh/5.webp" alt="Shimla Kullu Manali tour by car" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/shimla_kullu_manali_tour_package_from_chandigarh/6.webp" alt="Shimla Kullu Manali tour by car" />
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
                                                            <h5 className="mb-2">Shimla Kullu Manali Tour Package From Chandigarh</h5>
                                                            <p>The Shimla Kullu Manali Tour Package From Chandigarh is a perfect way to explore the stunning beauty of the Himachal Pradesh region in North India. This Himachal tour package from Chandigarh is designed to give you a comprehensive experience of these popular hill stations, including Shimla, Kullu, and Manali. The Shimla Kullu Manali tour by car begins from Chandigarh, a bustling city that serves as a gateway to the mountains. The package includes transportation in a comfortable and air-conditioned vehicle from Chandigarh to Shimla, where you will spend the first two nights of your trip. You will have the opportunity to explore the charming colonial architecture of Shimla, including the iconic Mall Road and Ridge, and visit the famous Jakhu Temple. You can also indulge in some shopping and enjoy the local cuisine in this charming hill station.

                                                            </p>

                                                        </section>
                                                        <section className='set_padding'>
                                                            <p>The Shimla Kullu Manali budget tour package then takes you to Kullu, where you will experience the scenic beauty and some of the most beautiful valleys and rivers in the region. You can explore the stunning natural beauty of the region by taking a stroll in the picturesque village of Naggar or by visiting the famous Kullu Shawl Factory. You can also try some adventure activities such as river rafting, trekking, or paragliding. Manali is a popular hill station that is famous for its snow-capped peaks, stunning valleys, and glistening rivers. You can visit the famous Hadimba Temple and Vashisht hot springs, explore the local markets, and indulge in adventure activities such as skiing, snowboarding, or paragliding.

                                                            </p>
                                                            <p>The Himachal tour package from Chandigarh also includes accommodation in comfortable and well-appointed hotels, where you can relax and unwind after a day of exploring. The hotels are selected based on their location, quality of service, and amenities, ensuring that you have a comfortable and enjoyable stay. Throughout the Shimla Kullu Manali tour by car, you will have a dedicated and knowledgeable driver who will guide you through the region and take you to all the popular attractions. You can also customize your itinerary to include additional activities and destinations based on your preferences.

                                                            </p>
                                                            <p>In conclusion, the Shimla Kullu Manali Tour Package From Chandigarh is a perfect way to explore the stunning beauty of the Himachal Pradesh region in North India. With comfortable transportation, flexible itineraries, and a range of exciting activities, this package offers an enjoyable and fulfilling experience that is perfect for all types of travelers. Whether you are a nature lover, an adventure enthusiast, or a culture seeker, this tour package has something for everyone.

                                                            </p>
                                                            {/* <p>In conclusion, the Shimla Kullu Manali tour package offers a luxurious and unforgettable experience that is perfect for those who want to explore the natural beauty, culture, and adventure activities of Shimla, Kullu, and Manali in style. With luxurious accommodations, fine dining, exciting activities, and comfortable transportation, this package offers a perfect way to escape from the hustle and bustle of city life and enjoy the serene beauty of the hill stations.
                                                            </p> */}
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
                                                <div>A trip to Himachal is on everyone’s bucket list.</div>
                                                <div class="mb-0">And why wouldn’t it be? Himachal is full of beautiful and mesmerising hill stations that offer an amazing and picturesque view of wonderful landscapes that take you to an altogether different world.</div>
                                                <div > Enjoy this fantasising experience with this amazing premium Himachal tour package from Chandigarh that takes you to the beautiful hill stations  Kullu, Manali, Shimla of Himachal.</div>
                                                <div>With this Shimla Kullu Manali tour package you will enjoy a great 6 Days and 5 Nights amidst the enchanting serenity of these beautiful hill stations.</div>
                                                <div>So, don’t wait up. Book your Shimla Kullu Manali tour by car now by getting in touch with a TripzyGo travel executive.</div>
                                            </div>
                                        </div>


                                    </div>
                                </div>

                                <div class="tour-includes mb-4">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td><i class="fa fa-clock-o pink mr-1" aria-hidden="true"></i> Package Category : Premium</td>
                                                <td><i class="fa fa-group pink mr-1" aria-hidden="true"></i> People : 1</td>
                                            </tr>
                                            <tr>
                                                <td><i class="fa fa-map-signs pink mr-1" aria-hidden="true"></i> Shimla : The Royal Regency / Sukh Sagar regency / Baljees Regency Or Similar</td>
                                                <td><i class="fa fa-map-signs pink mr-1" aria-hidden="true"></i> Manali : Whistling Pine Resorts / Vivaan Resorts / Himalayan Height Or Similar</td>

                                            </tr>
                                            <tr>
                                                <td><i className="fa fa-clock-o pink mr-1" aria-hidden="true"></i> Days : 5 Nights/6 Days</td>
                                                <td><i class="fa fa-inr pink mr-1" aria-hidden="true"></i> Total Tour Cost : 19,600/-* </td>

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
                                                    <h5 class="mb-0"><span>Day 2</span> - Shimla – Kullu – Manali (250 Kms)</h5>
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
                                                    <h5 class="mb-0"><span>Day 5</span> - Manali – Solang Valley </h5>
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
                                                                        <h5 className="mb-0 px-3">Can we book the Himachal tour package from Chandigarh?</h5>
                                                                    </div>
                                                                    <div className="accrodion-content" style={{ display: "block" }} >
                                                                        <div className="inner">
                                                                            <div className="mb-0 ">Of course, the booking of the package is also possible from Chandigarh.</div>

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accrodion ">
                                                                    <div className="accrodion-title rounded">
                                                                        <h5 className="mb-0 px-3"> Can Shimla Kullu Manali Budget Tour Package Get Customised?</h5>
                                                                    </div>
                                                                    <div className="accrodion-content" style={{ display: "none" }} >
                                                                        <div className="inner">
                                                                            <div className="mb-0 ">Yes, you can customize it as per your need and purpose. But for this contact the travel operator in advance.</div>
                                                                            {/* <div className="mb-0 ">Day 2: After a sumptuous breakfast, a ride waits for Kufri, Wildlife Zoo, where you can get acquainted with wildlife such as Antelopes, Felines, and birds, and also visit Jhakho temple and local area and market.</div>
                                                                            <div className="mb-0 ">Day 3: After breakfast, move towards Manali, where on the way, visit Kullu Valley, Pandoh Dam, Sunder Nagar Lake, Hanogi Mata Temple, Kullu Vaishno Devi Temple, and some shopping. After reaching Manali, you can do activities like river rafting here.</div>
                                                                            <div className="mb-0 ">Day 4: Sightseeing of Hidimba Devi Temple, Countryside and Temple, Hot Spring, Van Vihar, Manali Market, The Mall, and Tibetan Monastery. You can buy some souvenirs from here as a sign of Himachal. </div>
                                                                            <div className="mb-0 ">Day 5: On Day 5, enter the beautiful Solang Valley. Get thrilled with adventure activities like skiing, horse riding, ropeway, paragliding, and zorbing. The favorable climate creates an atmosphere where the best of leisure time can be enjoyed. </div>
                                                                            <div className="mb-0 ">Day 6: On the last day, go to Kullu, adjacent to Manali, and spend time among the beautiful valleys. After sightseeing, you can also shop in the local market. Enjoy the variety of tastes in street food and restaurants, and check in towards your hotel. Check out the Itinerary section on the Shimla Kullu Manali tour package for more clarity.</div> */}


                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accrodion ">
                                                                    <div className="accrodion-title rounded">
                                                                        <h5 className="mb-0 px-3">Is Shimla Kullu Manali tour by car safe?</h5>
                                                                    </div>
                                                                    <div className="accrodion-content" style={{ display: "none" }} >
                                                                        <div className="inner">
                                                                            <div className="mb-0">If you use your vehicle and are an expert in driving, it is safe for you. Because here you get hilly and narrow roads on which the challan can be full of risk. But you can also hire trained drivers. And enjoy the blissful journey.</div>
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
                                                                        <h5 className="mb-0 px-3"> Which are the religious spots in Shimla?</h5>
                                                                    </div>
                                                                    <div className="accrodion-content" style={{ display: "none" }} >
                                                                        <div className="inner">
                                                                            <div className="mb-0 ">Shimla has religious spots like Anand Vilas, Kali Bari Temple, Sankat Mochan Temple, Tara Devi Temple, Bhim Kali Temple, etc.</div>


                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accrodion ">
                                                                    <div className="accrodion-title rounded">
                                                                        <h5 className="mb-0 px-3">Will there be a parking facility in the hotels given inside the packages?</h5>
                                                                    </div>
                                                                    <div className="accrodion-content" style={{ display: "none" }} >
                                                                        <div className="inner">
                                                                            <div className="mb-0 ">Although it depends on the hotels. But most of the hotels provide parking facilities.</div>


                                                                        </div>
                                                                    </div>
                                                                </div>
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




