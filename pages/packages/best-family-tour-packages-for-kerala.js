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

                <title>TripzyGo - Book the Affordable & Best Family Tour Packages For Kerala - Kerala Family Vacation Package</title>
                <meta name="description" content="Looking for a budget family trip to Kerala? Get the best family tour packages for Kerala & enjoy with your family. Book Kerala family vacation package now!" />
                <meta name="keywords" content="best family tour packages for kerala, budget family trip to kerala, kerala family vacation package" />
                <link rel="icon" href="/icon.png" />
                <link rel="canonical" href="https://www.tripzygo.in/packages/best-family-tour-package-to-dubai" />
                <meta property="og:url" content="https://www.tripzygo.in/packages/best-family-tour-packages-for-kerala" />
                <meta property="og:title" content="Book the Affordable & Best Family Tour Packages For Kerala - Kerala Family Vacation Package" />
                <meta property="og:description" content="Looking for a budget family trip to Kerala? Get the best family tour packages for Kerala & enjoy with your family. Book Kerala family vacation package now!" />
                <meta property="og:image" content="https://www.tripzygo.in/images/domestic/best_family_tour_packages_for_kerala/1.webp" />
            </Head>
<ShareButton/>
<PopularityWidget packageCount="67" progressBarPercentage="70%"/>
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
                                        <h2 className="mb-1">Best Family Tour Packages For Kerala</h2>

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
                                                        <img className='blog_image' src="/images/domestic/best_family_tour_packages_for_kerala/1.webp" alt="kerala family vacation package" />

                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/best_family_tour_packages_for_kerala/2.webp" alt="kerala family vacation package" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/best_family_tour_packages_for_kerala/3.webp" alt="budget family trip to kerala" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/best_family_tour_packages_for_kerala/4.webp" alt="budget family trip to kerala" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/best_family_tour_packages_for_kerala/5.webp" alt="best family tour packages for kerala" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/best_family_tour_packages_for_kerala/6.webp" alt="best family tour packages for kerala" />
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
                                                        <img className='blog_image' src="/images/domestic/best_family_tour_packages_for_kerala/1.webp" alt="kerala family vacation package" />

                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/best_family_tour_packages_for_kerala/2.webp" alt="kerala family vacation package" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/best_family_tour_packages_for_kerala/3.webp" alt="budget family trip to kerala" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/best_family_tour_packages_for_kerala/4.webp" alt="budget family trip to kerala" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/best_family_tour_packages_for_kerala/5.webp" alt="best family tour packages for kerala" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/best_family_tour_packages_for_kerala/6.webp" alt="best family tour packages for kerala" />
                                                    </div>
                                                </SwiperSlide>

                                            </Swiper>





                                        </div>

                                    </div>
                                </div>



                                <div className="description mb-2">
                                    <div className="row">
                                        <div className="col-lg-12 col-md-6 mb-2 ">
                                            <div className="desc-box bg-grey p-4 rounded ">
                                                <h5 class="mb-2">Overview</h5>
                                                <div>Wish to go on a family vacation but you are quite tight on the budget? Well, this budget family trip to Kerala can be just the thing for you.</div>
                                                <div class="mb-0">A family vacation to Kerala sounds perfect to spend some time with your family in close vicinity to nature.</div>
                                                <div>Kerala is a gorgeous and beautiful city and it will be exciting to witness that beauty with your family, away from the hustle and bustle of your daily life.</div>
                                                <div>Enjoy a walk with your family in the beautiful tea and coffee gardens of Kerala or have a unique and wonderful stay in the houseboats. </div>
                                                <div>Have exotic lunches and dinners enjoying the authentic cuisine of Kerala in an authentic style. </div>
                                                <div>Kerala is a place that has so much to offer and the beauty is something you will love to behold.</div>
                                                <div>Enjoy everything in Kerala with your family on an amazing family vacation.</div>
                                                <div>Book this budget family tour package for Kerala now.</div>
                                            </div>
                                        </div>


                                    </div>
                                </div>

                                <div className="tour-includes mb-4">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td><i className="fa fa-clock-o pink mr-1" aria-hidden="true"></i> Days : 6 Nigths/ 7 Days</td>
                                                <td><i class="fa fa-group pink mr-1" aria-hidden="true"></i> People : 1</td>
                                            </tr>
                                            <tr>
                                                <td><i class="fa fa-inr pink mr-1" aria-hidden="true"></i> Total Tour Cost : INR 22,000/-* </td>
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
                                                    <h5 class="mb-0"><span>Day 1</span> - Chennai - Tirupati</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "block" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Pickup at Chennai Railway Station transfer to Tirupati Hotel of you choice from list of our associated hotels by AC Cab. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Hotel Check in and fresh up. Proceed to darshan of Srinivasa Mangapuram Temple and Tiruchanuru (Goddess Padmavati) Temple and Local Temples.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Overnight Stay at the hotel.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion active">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 2</span> - Tirupati</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After Complimentary Breakfast at Hotel proceed for Shri Balaji Darshan. Post Balaji Darshan, time for sightseeing around Tirumala Hills & have lunch at Tirumala. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Return to Hotel at Tirupati have small rest and proceed to Shree Kalahasti (Lord Shiva) Temple or Kanipakam (Lord Ganesha) Temple based on your interest, post darshan move back to Hotel for rest.</div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 3</span> - Tirupati – Pondicherry</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After breakfast check-out from the hotel and drive to Pondicherry; on arrival check-in into hotel.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Afternoon, you will be taken for a local sightseeing tour of Pondicherry. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Pondicherry, known as ‘The French Riviera of the East’, was a French colony until it was integrated into India as a Union territory in 1954.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> The town still remarkably preserves its French heritage in its many colonial monuments, cuisines, language, customs and traditions.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Places of tourist interest include the Sree Aurobindo Ashram, Auroville, The French Institute and the Raj Nivas.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Overnight stay at hotel.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 4</span> - Thanjavur</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After breakfast, proceed to Thenjavur. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Thanjavur has been the capital of mighty Cholas for centuries. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Therefore it is only natural that the city has remained the focal point of cultural movement and activities in the peninsular India. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Sri Brihadeswara temple,the palace, art gallery back to hotel and stay overnight.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 5</span> - Rameswaram</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After breakfast check out from Hotel and drive to Rameshwaram, on arrival check into Hotel. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Visit famous Ramanathaswamy  Temple, Agnitheertham, Ramjharoka Temple, Dhanushkodi (Optional) and Adam’s Bridge.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Overnight stay in Rameshwaram.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 6</span> - Madurai</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After breakfast check out and proceed to Madurai – one of the most important ancient cities of magnificent temples.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> The Meenakshi temple is located at the heart of the city and is the hub of the religious and cultural life of the city. Check into hotel and relax. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Evening visit famous Sree Meenakshi temple with gopurams covered from top to bottom in a breath taking profusion of multi-colored images of gods, goddesses, animals and mythical figures.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Back to hotel and stay overnight. </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 7</span> - Madurai – Departure</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After Brekfast check out and drive & dropped to the airport/railway station.</div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div class="col-lg-12 col-md-6 mb-2">
                                            <div class="desc-box bg-grey p-4 rounded">
                                                <h5 class="mb-2">Inclusions</h5>
                                                <ul>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Accommodation on twin sharing basis at the above mentioned hotels or similar</li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Meal plan will be on as per mentioned above</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> All transfers and sightseeing by AC vehicle( Etios ) (At disposal - As per the itinerary from 08.00 AM to 07.00 PM)</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> All toll, parking fee, driver bata & fuel cost</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> GST</li>


                                                </ul>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-6 mb-2">
                                            <div class="desc-box bg-grey p-4 rounded">
                                                <h5 class="mb-2">Exclusions</h5>
                                                <ul>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Meals not mentioned in the itinerary</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Entry fees to monuments and palaces</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Anything not mentioned in the inclusions</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Porterage at hotels and airports, tips, insurance, laundry, liquors, wine, etc</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> All items of personal nature</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Any cost arising due to natural calamities like landslides, roadblocks, etc</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Any increase in taxes or fuel leading to an increase in surface transport</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Only non AC rooms are provided in Munnar And Thekkady as they are hill Stations</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Ayurveda Charges</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Mandatory X- Mas / New Year Eve Supplementary charges , that should be paid by the guest directly to the hotels concerned.</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Early Check in Charges</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-6 mb-2">
                                            <div class="desc-box bg-grey p-4 rounded">
                                                <h5 class="mb-2">Things To Do</h5>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Take a Scenic Train Ride Through Kerala</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Cruise the Backwaters on a Houseboat</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> See Exotic Flower Garden of Munnar</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Watch the Martial Art Form of Kalaripayattu</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Watch a Snake Boat Race</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> See Exotic Flower Garden of Munnar</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Try hands on Traditional Kerala Fishing</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i>  Walk Between Tea Gardens, Munnar</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Surf At The Beaches of Varkala</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Go For A Jeep Safari in Periyar Jungle</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Kerala's Lunch On A Banana Leaf</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Experience the Musical Sound of Falling Water At Athirapally Falls</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Experience Paragliding In Kerala</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Houseboat Cruise in Kumarakom and Alleppey</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Take An Elephant Ride In Munnar</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Experience Shikara Ride In Backwaters</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="single-map mb-4">
                                    <h4>Map</h4>
                                    <div class="map rounded overflow-hidden">
                                        <div style={{ width: "100%" }}>
                                            <iframe class=" rounded overflow-hidden" height="400" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4016664.3063345025!2d73.88293947310464!3d10.538127377774241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0812ffd49cf55b%3A0x64bd90fbed387c99!2sKerala!5e0!3m2!1sen!2sin!4v1661253136245!5m2!1sen!2sin"></iframe>
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