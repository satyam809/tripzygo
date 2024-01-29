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

                <title>TripzyGo - Grab Shimla Kullu Manali Tour Package By Car From Chandigarh</title>
                <meta name="description" content="Planning a adventurous road trip to Shimla Kullu Manali tour by car from Chandigarh. Book Shimla Kullu Manali tour package now. Contact us to book your tour now." />
                <meta name="keywords" content="Shimla Kullu Manali tour package from Chandigarh, Shimla Kullu Manali tour by car, Shimla Kullu Manali tour package" />
                <link rel="icon" href="/icon.png" />
                <link rel="canonical" href="https://www.tripzygo.in/packages/splendid-shimla-kullu-manali-tour-by-car" />
                <meta property="og:url" content="https://www.tripzygo.in/packages/splendid-shimla-kullu-manali-tour-by-car" />
                <meta property="og:title" content="Grab Shimla Kullu Manali Tour Package By Car From Chandigarh" />
                <meta property="og:description" content="Planning a adventurous road trip to Shimla Kullu Manali tour by car from Chandigarh. Book Shimla Kullu Manali tour package now. Contact us to book your tour now." />
                <meta property="og:image" content="https://www.tripzygo.in/images/domestic/splendid_shimla_kullu_manali_tour_by_car/1.webp" />
            </Head>
            <ShareButton />
            <PopularityWidget packageCount="63" progressBarPercentage="60%" />
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
                                        <h2 className="mb-1">Splendid Shimla Kullu Manali Tour By Car</h2>

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
                                                        <img className='blog_image' src="/images/domestic/splendid_shimla_kullu_manali_tour_by_car/1.webp" alt="Shimla Kullu Manali tour package from Chandigarh" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/splendid_shimla_kullu_manali_tour_by_car/2.webp" alt="Shimla Kullu Manali tour package from Chandigarh" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/splendid_shimla_kullu_manali_tour_by_car/3.webp" alt="Shimla Kullu Manali tour by car" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/splendid_shimla_kullu_manali_tour_by_car/4.webp" alt="Shimla Kullu Manali tour by car" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/splendid_shimla_kullu_manali_tour_by_car/5.webp" alt="Shimla Kullu Manali tour package" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/splendid_shimla_kullu_manali_tour_by_car/6.webp" alt="Shimla Kullu Manali tour package" />
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
                                                        <img className='blog_image' src="/images/domestic/splendid_shimla_kullu_manali_tour_by_car/1.webp" alt="Shimla Kullu Manali tour package from Chandigarh" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/splendid_shimla_kullu_manali_tour_by_car/2.webp" alt="Shimla Kullu Manali tour package from Chandigarh" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/splendid_shimla_kullu_manali_tour_by_car/3.webp" alt="Shimla Kullu Manali tour by car" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/splendid_shimla_kullu_manali_tour_by_car/4.webp" alt="Shimla Kullu Manali tour by car" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/splendid_shimla_kullu_manali_tour_by_car/5.webp" alt="Shimla Kullu Manali tour package" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/splendid_shimla_kullu_manali_tour_by_car/6.webp" alt="Shimla Kullu Manali tour package" />
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
                                                            <h5 className="mb-2">Splendid Shimla Kullu Manali Tour By Car</h5>
                                                            <p>The Splendid Shimla Kullu Manali Tour By Car is an excellent package for those who want to explore the natural beauty, culture, and adventure activities of the hill stations of Shimla, Kullu, and Manali in a comfortable and hassle-free way. This Shimla Kullu Manali tour package offers a convenient and flexible option, allowing you to customize your itinerary to suit your preferences. The Shimla Kullu Manali tour package covers a range of exciting destinations, including the beautiful hill station of Shimla, the scenic Kullu Valley, and the stunning mountain landscapes of Manali. You will have the opportunity to explore the iconic attractions of these regions, including ancient temples, historical landmarks, and beautiful natural landscapes. You can also try various adventure activities such as trekking, river rafting, and skiing, depending on your interests and preferences.


                                                            </p>
                                                            {/* <p>Families can take a boat trip to nearby islands, where they can explore the local culture and enjoy a picnic on the beach. The Maldives is also known for its beautiful sunsets, which can be enjoyed from the comfort of your resort or on a sunset cruise. The Maldives is also home to a number of excellent restaurants, which serve a variety of local and international cuisine.
                                                            </p>                                                        */}
                                                        </section>
                                                        <section className='set_padding'>
                                                            <p>During the Shimla Kullu Manali tour by car, you will be accommodated in comfortable and well-appointed hotels, where you can relax and recharge after a day of exploring. The hotels are selected based on their location, quality of service, and amenities, ensuring that you have a comfortable and enjoyable stay. In conclusion, the Splendid Shimla Kullu Manali Tour By Car is an excellent choice for those who want to explore the beauty, culture, and adventure activities of Shimla, Kullu, and Manali in a comfortable and hassle-free way. With comfortable transportation, flexible itineraries, and comfortable accommodation, this Shimla Kullu Manali tour package offers an unforgettable and enjoyable experience that is perfect for all types of travelers.


                                                            </p>
                                                            {/* <p>Aside from the luxurious accommodation and fine dining experiences, the Shimla Manali tour plan also offers a wide range of activities to keep you entertained throughout your stay. You can choose from various adventure sports, including trekking, paragliding, skiing, and river rafting, or enjoy a relaxing day of fishing, golfing, or simply exploring the region's stunning natural beauty. You can also experience the rich cultural heritage of the area by visiting ancient temples, churches, and monasteries, and participating in traditional folk dance and music performances.

                                                            </p>
                                                            <p>In conclusion, if you're seeking an indulgent and luxurious escape to the stunning hill stations of Shimla and Manali, then the Premium Shimla Manali Package is the perfect choice for you. With its luxurious accommodation, fine dining, and a plethora of activities, this package offers an unforgettable and exclusive experience that is sure to leave you feeling refreshed and rejuvenated.

                                                            </p> */}
                                                            {/* <p>In addition, Maldives is also famous for its all-inclusive packages, which include accommodation, meals, and activities, making it easier for families to budget and plan their vacation. These packages can include activities such as snorkeling, diving, and water sports, providing an opportunity for families to experience all that the Maldives has to offer.
                                                            </p>
                                                            <p>Another important aspect to consider when planning a Maldives family tour package from India is the eco-tourism. The Maldives is known for its natural beauty and marine life, and there are a number of ways for families to experience and learn about the environment and conservation efforts in the Maldives. For example, families can visit marine protected areas, such as coral reef and turtle conservation areas, where they can learn about the importance of preserving the marine environment.
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
                                                <div>Himachal is a lovely place with beautiful mountains and picturesque views. So, a road trip to some of the best hill stations in Himachal is always a welcome plan.</div>
                                                <div class="mb-0">Plan your road trip now with this amazing Shimla Kullu Manali tour package from Chandigarh. The entire tour will be by car so that you can witness the beautiful sights that Shimla and Kullu Manali have to offer.
                                                    Delve into the beauty and solace of these beautiful and enchanting hill stations on a Shimla Kullu Manali tour by car with our amazing 5 Nights 6 Days tour package to Himachal.</div>
                                                <div>This tour will be the most memorable experience of your life with a well planned tour itinerary and other deluxe facilities to offer luxury and comfort on your tour as you cherish the beautiful and enchanting beauty of the hill stations.
                                                </div>
                                                <div>What are you waiting for? Book your Shimla Kullu Manali tour package now!</div>
                                            </div>
                                        </div>


                                    </div>
                                </div>

                                <div class="tour-includes mb-4">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td><i className="fa fa-group pink mr-1" aria-hidden="true"></i> Package Category : Deluxe</td>
                                                <td><i class="fa fa-group pink mr-1" aria-hidden="true"></i> People : 1</td>
                                            </tr>
                                            <tr>
                                                <td><i class="fa fa-map-signs pink mr-1" aria-hidden="true"></i> Shimla : Shimla Forest View / Shimla View Or Similar</td>
                                                <td><i class="fa fa-map-signs pink mr-1" aria-hidden="true"></i> Manali : Niyati Cottage / Mohan Palace / Hotel White Mountain Or Similar</td>

                                            </tr>
                                            <tr>
                                                <td><i class="fa fa-clock-o pink mr-1" aria-hidden="true"></i> Days : 5 Nights/6 Days</td>
                                                <td><i class="fa fa-inr pink mr-1" aria-hidden="true"></i> Total Tour Cost : INR 14,000/-*</td>

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
                                                    <h5 class="mb-0"><span>Day 1</span> - Chandigarh – Shimla (110 Kms)</h5>
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
                                                    <h5 class="mb-0"><span>Day 2</span> - Shimla – Kufri – Local – Shimla
                                                    </h5>
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
                                                    <h5 class="mb-0"><span>Day 5</span> - Manali – Solang Valley  </h5>
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
                                                    <h5 class="mb-0"><span>Day 6</span> - Manali – Mandi – Chandigarh (320 Kms)</h5>
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
                                                                        <h5 className="mb-0 px-3">Can a car be the correct choice for Chandigarh to Manali journey?</h5>
                                                                    </div>
                                                                    <div className="accrodion-content" style={{ display: "block" }} >
                                                                        <div className="inner">
                                                                            <div className="mb-0 ">Definitely, it can be a correct choice. The distance from Chandigarh to Manali is 306 km, approximately 8 hours. The Shimla Kullu Manali tour package has an option by which you can travel to Manali by car from Chandigarh to enjoy the panoramic view.</div>

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accrodion ">
                                                                    <div className="accrodion-title rounded">
                                                                        <h5 className="mb-0 px-3">How much time will it take from the Shimla Kullu Manali tour by car from Chandigarh?</h5>
                                                                    </div>
                                                                    <div className="accrodion-content" style={{ display: "none" }} >
                                                                        <div className="inner">
                                                                            <div className="mb-0 ">More than 12 hours. Tourists have to face long traffic jams on the National Highway. So it may take longer.</div>



                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accrodion ">
                                                                    <div className="accrodion-title rounded">
                                                                        <h5 className="mb-0 px-3">What are the major destination near Kullu? </h5>
                                                                    </div>
                                                                    <div className="accrodion-content" style={{ display: "none" }} >
                                                                        <div className="inner">
                                                                            <div className="mb-0"> Destination near Kullu are:</div>
                                                                            <div className="mb-0">• Naggar</div>
                                                                            <div className="mb-0">• Manikaran</div>
                                                                            <div className="mb-0">• Manali</div>
                                                                            <div className="mb-0">• Mandi</div>
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
                                                                        <h5 className="mb-0 px-3">Will outdoor activities be present in the Shimla Kullu Manali tour package?</h5>
                                                                    </div>
                                                                    <div className="accrodion-content" style={{ display: "none" }} >
                                                                        <div className="inner">
                                                                            <div className="mb-0 ">Yes, it includes adventurous activities like Paragliding, river rafting, camping, hot air balloon ride, helicopter ride, local sightseeing, and rental bike tour.</div>


                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accrodion ">
                                                                    <div className="accrodion-title rounded">
                                                                        <h5 className="mb-0 px-3">What to shop in Manali?</h5>
                                                                    </div>
                                                                    <div className="accrodion-content" style={{ display: "none" }} >
                                                                        <div className="inner">
                                                                            <div className="mb-0 ">Shawls, Tweed jackets, Artificial jewelry, and Tibetan handicrafts are some things that one must buy when coming to Manali.</div>


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




