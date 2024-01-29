import React from 'react'
import Packages_Form from '../../components/Contact_Forms/packages_form';
import Head from "next/dist/shared/lib/head";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from "swiper";
import 'swiper/css';
import { Navigation, Pagination, A11y } from 'swiper';
import { FreeMode, Thumbs } from "swiper";
import { useRef, useState } from "react";
SwiperCore.use([Pagination, Autoplay]);
import LocationMap from '../../components/Package_Description/locationMap';
import { useEffect } from 'react'
import RelatedPackage from "../../components/Package_Description/RelatedPackages"
import axios from 'axios';
import ShareButton from '../../components/Package_Description/shareButton';
import PopularityWidget from '../../components/Package_Description/popularityWidget';

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
    const extraContent = <div>
        <p className="extra-content">
            No doubt, the most fun-loving way to explore nature from the closest and learn about true Indian culture is to have a trip to the mountains. The Shimla Manali tour from Delhi is the best road trip that would lead you to the heart of nature, that is, the mesmerizing mountains of Shimla Manali. Not only is the fun limited to the road trip, but the Shimla-Manali tour is also loaded with a range of awesome activities to try on your vacation.

        </p>
        <p className="extra-content">
            So, what is the reason for you to wait and think? Pack your bags now and head towards the most memorable journey of your life. The overall tour is going to be amazing and unmatchable with this efficient and the best tour package for Shimla Manali. Click pictures, create memories and have the best days of your life on this Shimla Manali tour. You can always choose to roam around the local markets and get yourself appealing items.

        </p>
        <p className="extra-content">
            This Shimla Manali tour package is the best for everyone out there. With the most amazing deals, you have to pay a bare minimum amount and yet have all the fun that you might have experienced. There are ample different activities to try on your Shimla Manali tour by car. Water sports such as river rafting are the most enjoyable of all the activities. You can create unforgettable memories with your friends and family members by having a thrilling and adventurous paragliding experience. Adding onto this, trekking is always the savior. It becomes a fun-loving and exciting activity when it is done in groups.
        </p>
        <p className="extra-content">
            This Shimla Manali tour package offers the best Shimla Manali itinerary at the most budget-friendly prices. With this best tour package for Shimla Manali, you do not have to worry about cutting down on your savings as the whole tour can be arranged under your budget and you can have a great time altogether. On your Shimla Manali tour from Delhi by car, you can be without worries and have fun and thrill on your tour with the super good tour package for Shimla Manali.
        </p>
        <p className="extra-content">
            Having said enough, you are sure of experiencing immense fun, joy, and happiness on the best tour to Shimla Manali from Delhi by car. This tour package comes with a well-explained tour plan that lets you know about the thrill that you will be enjoying throughout. However, you can always choose to customize the tour plan according to your needs and preferences. So, without waiting take this amazing and the best tour package for Shimla Manali. Get in touch with a TripzyGo tour executive now and have the best Shimla Manali package booked for yourself on the best deals.



        </p>


    </div>
    const linkName = readMore ? 'Read Less' : 'Read More'
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <div>
            <Head>

                <title>TripzyGo - Grab Affordable Shimla Manali Tour Package From Delhi By Car</title>
                <meta name="description" content="Go on this amazing trip from Delhi to Manali and Shimla with our amazing Shimla Manali tour package. Book this splendid Shimla Manali Tour Package from Delhi." />
                <meta name="keywords" content="Shimla Manali tour package from Delhi, Shimla Manali tour package, delhi to manali shimla" />
                <meta property="og:url" content="https://www.tripzygo.in/packages/shimla-manali-tour-from-delhi-by-car" />
                <meta property="og:title" content="Grab Affordable Shimla Manali Tour Package From Delhi By Car " />
                <meta property="og:description" content="Go on this amazing trip from Delhi to Manali and Shimla with our amazing Shimla Manali tour package. Book this splendid Shimla Manali Tour Package from Delhi." />
                <meta property="og:image" content="https://www.tripzygo.in/images/domestic/shimla_manali_tour_from_delhi_by_car/1.webp" />
                <link rel="icon" href="/icon.png" />
                <link rel="canonical" href="https://www.tripzygo.in/packages/shimla-manali-tour-from-delhi-by-car" />

            </Head>
            <ShareButton/>
<PopularityWidget packageCount="69" progressBarPercentage="70%"/>
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
                                        <h2 className="mb-1">Shimla Manali Tour From Delhi By Car Ex- Delhi</h2>

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
                                                        <img className='blog_image' src="/images/domestic/shimla_manali_tour_from_delhi_by_car/1.webp" alt="Shimla Manali tour from Delhi by car" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/shimla_manali_tour_from_delhi_by_car/2.webp" alt="Shimla Manali tour from Delhi by car" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/shimla_manali_tour_from_delhi_by_car/3.webp" alt="shimla manali itinerary" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/shimla_manali_tour_from_delhi_by_car/4.webp" alt="shimla manali itinerary" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/shimla_manali_tour_from_delhi_by_car/5.webp" alt="best tour package for shimla and manali" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/shimla_manali_tour_from_delhi_by_car/6.webp" alt="best tour package for shimla and manali" />
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
                                                        <img className='blog_image' src="/images/domestic/shimla_manali_tour_from_delhi_by_car/1.webp" alt="Shimla Manali tour from Delhi by car" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/shimla_manali_tour_from_delhi_by_car/2.webp" alt="Shimla Manali tour from Delhi by car" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/shimla_manali_tour_from_delhi_by_car/3.webp" alt="shimla manali itinerary" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/shimla_manali_tour_from_delhi_by_car/4.webp" alt="shimla manali itinerary" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/shimla_manali_tour_from_delhi_by_car/5.webp" alt="best tour package for shimla and manali" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/shimla_manali_tour_from_delhi_by_car/6.webp" alt="best tour package for shimla and manali" />
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
                                                    <h5 className="mb-2">Shimla Manali Tour From Delhi By Car</h5>
                                                    <p>
                                                        Trips that are made to mountains by car are pretty interesting and incomparable. The fun you have while trying different food items on the roadside and the excitement of having a long drive with your friends is one of the best feelings in the world. The peace of listening to your favourite songs and talking with your companions is worth everything and you should often try it amidst your hectic work schedule.</p>
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
                                                <div>A road trip to Shimla and Manali - now that sounds like a plan! Make this plan real by booking our super deluxe Shimla Manali tour from Delhi by car.</div>
                                                <div class="mb-0">With the starting point at Delhi, this Shimla Manali package will offer you an experience of a lifetime as it will take you through the most amazing roads through Delhi, Shimla, and Manali offering the picturesque, mesmerising, and enchanting views of mountains, valleys, and landscapes.</div>
                                                <div class="mb-0">With everything well-planned and the most amazing shimla manali itinerary, you’ll be all set to add more experiences to your travel diaries with this amazing Shimla Manali trip. </div>
                                                <div>Book your Shimla Manali tour package by car for an unforgettable road trip now.</div>
                                            </div>
                                        </div>


                                    </div>
                                </div>

                                <div class="tour-includes mb-4">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td><i class="fa fa-clock-o pink mr-1" aria-hidden="true"></i> Package Category : Super DELUXE</td>
                                                <td><i class="fa fa-group pink mr-1" aria-hidden="true"></i> People : 1</td>
                                            </tr>
                                            <tr>
                                                <td><i class="fa fa-map-signs pink mr-1" aria-hidden="true"></i> Shimla : Satyam Paradise / Nirvana Hills / Swastik Inn Or Similar</td>
                                                <td><i class="fa fa-map-signs pink mr-1" aria-hidden="true"></i> Manali : Kullu Manali Inn / Naina Resorts & Cottages / New Harmony Inn Or Similar</td>
                                            </tr>
                                            <tr>
                                                <td><i className="fa fa-clock-o pink mr-1" aria-hidden="true"></i> Days : 5 Nights/6 Days</td>
                                                <td><i class="fa fa-inr pink mr-1" aria-hidden="true"></i> Total Tour Cost : INR 17,000/-*</td>

                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div class="description mb-2">
                                    <div class="row">
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

                                        <div id="iternary" class="accrodion-grp faq-accrodion mb-4" data-grp-name="faq-accrodion" >
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 1</span> - Delhi – Shimla (320 Kms)</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "block" }}>
                                                    <div class="inner">
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Day Services: Stay, Dinner & Car</div>
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After picking from Delhi Airport/Railway station, start your wonderful vacation to Himachal starting from Shimla. </div>
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Reach Shimla and check-in into the pre-booked hotel for Overnight stay. </div>
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Dinner &Overnight stay at the hotel.</div>
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
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> ufri also has a Himalayan Wildlife Zoo and Kufri Fun Park which will make the trip even more exciting (Entry & Activities at your own cost).</div>
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
                                                    <h5 class="mb-0"><span>Day 5</span> - Manali – Solang Valley + Club House</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Day Services: Stay, Breakfast, Dinner & Car</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Solang Valley (15 Kms from Manali) Wake up to the sweet sound of nature and after breakfast head towards Solang Valley.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> This valley is famous for its adventure activities and you can try your hand at Paragliding, Zorbing, ATV Rides, Horse-riding, Trail-rides and so much more.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Before indulging in these activities make sure to understand all safety protocols and measures.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Afterwards return to the hotel for dinner and a comfortable stay.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Please Note: Adventure activities will be at your own risk and cost.</div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 6</span> -Manali – Delhi (570 Kms)
                                                    </h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Day Services: Breakfast & Car</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After breakfast check out from the hotel and drive to Delhi Airport/ Railway Station for a drop with every memorable moment of your exotic trip.</div>

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
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> Bedroom : 01 Double Rooms </li>


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
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Adventure Sports: Engage in Exciting Activities Waterfalls: Take in the Music Temples: Visit the Almighty Museum of Himachal Culture & Folk Art: Investigate the history of Shri Hari Yoga Ashram and engage in some yoga</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Manali Wildlife Sanctuary: Yak Adventure Sher-e-Punjab: Enjoy Some Delicious Cuisine</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Astrid Gufa: Vashist Hot Water Springs for Meditation and Relaxation: Try a therapeutic bath</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Trek to the top of Beas Kund after riding a bike through Rohtang Pass</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Manikaran Gurudwara: Take A Bath in Sulfurous Water</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Monastery in Tibet: Visit For Serenity and Pleasure</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Zorbing: A Fun and Exciting Activity</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> For the Love of Art: Naggar Castle</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Trek To Witness A Mesmerizing Landscape At Bhrigu Lake</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Gauri Shankar Temple: Seek Lord Shiva's Blessings Manu Market: Shop Until You Drop</div>
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
                                                                <h5 className="mb-0"> At what time Shimla Manali tour from Delhi by car is completed?</h5>
                                                            </div>
                                                            <div className="accrodion-content" style={{ display: "block" }} >
                                                                <div className="inner">
                                                                    <div className="mb-0">Under Shimla Manali Tour Package, this journey will be completed in about 10 hours. You can also enjoy the journey by stopping at dhabas and hotels to eat and drink.</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="accrodion">
                                                            <div className="accrodion-title rounded">
                                                                <h5 className="mb-0"> Can an adventurous trip be wished for in Manali?</h5>
                                                            </div>
                                                            <div className="accrodion-content" style={{ display: "none" }} >
                                                                <div className="inner">
                                                                    <div className="mb-0">Absolutely, if you pick the best tour package for Shimla and Manali because there are many adventure activities in these packages, which are in Manali. A list of activities is marked, seeing which you can execute adventures.</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="accrodion">
                                                            <div className="accrodion-title rounded">
                                                                <h5 className="mb-0">Which season is best for the Shimla Manali tour?</h5>
                                                            </div>
                                                            <div className="accrodion-content" style={{ display: "none" }} >
                                                                <div className="inner">
                                                                    <div className="mb-0">Anytime you go to Shimla and Manali, you will come back refreshed. Here the summer months are likable, and the winters are also pleasant. So this place is good for both summer vacation and winter vacation. But avoid traveling in monsoon, else it can be risky.</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="accrodion">
                                                            <div className="accrodion-title rounded">
                                                                <h5 className="mb-0">Is it possible to change the Shimla Manali itinerary?</h5>
                                                            </div>
                                                            <div className="accrodion-content" style={{ display: "none" }} >
                                                                <div className="inner">
                                                                    <div className="mb-0"> Yes, it is Flexi and can be changed, as per your wish.</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="accrodion">
                                                            <div className="accrodion-title rounded">
                                                                <h5 className="mb-0">  What are the top romantic destinations of Shimla and Manali?</h5>
                                                            </div>
                                                            <div className="accrodion-content" style={{ display: "none" }} >
                                                                <div className="inner">
                                                                    <div className="mb-0">Newly married couples are often seen at the following places
                                                                        Chadwick Falls.
                                                                        Jakhu Temple.
                                                                        Naldehra.
                                                                        Kufri.
                                                                        Chail.
                                                                        The mall road.
                                                                        The Ridge.
                                                                        Naldehra Peak
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
