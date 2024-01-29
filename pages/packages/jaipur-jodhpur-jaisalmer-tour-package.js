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

                <title>TripzyGo - Book Jaipur Jodhpur Jaisalmer Tour With The Best Itinerary - Amazing Rajasthan Tours</title>
                <meta name="description" content="Plan Jaipur Jodhpur Jaisalmer Tour with the best itinerary. Visit amazing Rajasthan and explore forts, palaces, and havelis. Book your amazing Rajasthan tours." />
                <meta name="keywords" content="amazing rajasthan tours, jaipur jodhpur jaisalmer tour itinerary, jaipur jodhpur jaisalmer tour" />
                <link rel="icon" href="/icon.png" />
                <link rel="canonical" href="https://www.tripzygo.in/packages/jaipur-jodhpur-jaisalmer-tour-package" />
                <meta property="og:url" content="https://www.tripzygo.in/packages/jaipur-jodhpur-jaisalmer-tour-package" />
                <meta property="og:title" content="Book Jaipur Jodhpur Jaisalmer Tour With The Best Itinerary - Amazing Rajasthan Tours" />
                <meta property="og:description" content="Plan Jaipur Jodhpur Jaisalmer Tour with the best itinerary. Visit amazing Rajasthan and explore forts, palaces, and havelis. Book your amazing Rajasthan tours." />
                <meta property="og:image" content="https://www.tripzygo.in/images/domestic/jaipur_jodhpur_jaisalmer_tour_package/1.webp" />
            </Head>
<ShareButton/>
<PopularityWidget packageCount="65" progressBarPercentage="65%"/>
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
                                        <h2 className="mb-1">Jaipur Jodhpur Jaisalmer Tour Package</h2>

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
                                                        <img className='blog_image' src="/images/domestic/jaipur_jodhpur_jaisalmer_tour_package/1.webp" alt="jaipur jodhpur jaisalmer tour" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/jaipur_jodhpur_jaisalmer_tour_package/2.webp" alt="jaipur jodhpur jaisalmer tour" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/jaipur_jodhpur_jaisalmer_tour_package/3.webp" alt="Jaipur Jodhpur Jaisalmer tour package" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/jaipur_jodhpur_jaisalmer_tour_package/4.webp" alt="Jaipur Jodhpur Jaisalmer tour package" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/jaipur_jodhpur_jaisalmer_tour_package/5.webp" alt="jaipur jodhpur jaisalmer tour itinerary" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/jaipur_jodhpur_jaisalmer_tour_package/6.webp" alt="jaipur jodhpur jaisalmer tour itinerary" />
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
                                                        <img className='blog_image' src="/images/domestic/jaipur_jodhpur_jaisalmer_tour_package/1.webp" alt="jaipur jodhpur jaisalmer tour" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/jaipur_jodhpur_jaisalmer_tour_package/2.webp" alt="jaipur jodhpur jaisalmer tour" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/jaipur_jodhpur_jaisalmer_tour_package/3.webp" alt="Jaipur Jodhpur Jaisalmer tour package" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/jaipur_jodhpur_jaisalmer_tour_package/4.webp" alt="Jaipur Jodhpur Jaisalmer tour package" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/jaipur_jodhpur_jaisalmer_tour_package/5.webp" alt="jaipur jodhpur jaisalmer tour itinerary" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/jaipur_jodhpur_jaisalmer_tour_package/6.webp" alt="jaipur jodhpur jaisalmer tour itinerary" />
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
                                            <div>Being princely cities in the ancient times, Jaipur Jodhpur Jaisalmer are cities with rich history and culture and unmatched luxury.</div>
                                            <div class="mb-0"> With beautiful forts and palaces, vast deserts, boutique hotels, and a lot more, these cities speak of their luxuries in everything they have to offer. </div>
                                            <div> So, a Jaipur Jodhpur Jaisalmer tour is a princely experience making you feel as if you have stepped into a kingdom.</div>
                                            <div>Experience this amazing feeling on a 6 Days Jaipur Jodhpur Jaisalmer tour designed especially for luxury, comfort, and convenience </div>
                                            <div>With a well-planned Jaipur Jodhpur Jaisalmer tour itinerary, you will see the best places in these cities and have the time of your life by enjoying the luxury of the boutique hotels, the lavishness of the amazing cuisines, and the history and culture of the forts and palaces here.</div>
                                            <div>Enroute a journey that you will cherish for a lifetime by booking this Jaipur Jodhpur Jaisalmer tour package now!</div>
                                        </div>

                                    </div>
                                </div>

                                <div className="tour-includes mb-4">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td><i className="fa fa-clock-o pink mr-1" aria-hidden="true"></i> Days : 5 nights/ 6 days</td>
                                                <td><i class="fa fa-group pink mr-1" aria-hidden="true"></i> People : 1</td>


                                            </tr>
                                            <tr>
                                                <td><i class="fa fa-inr pink mr-1" aria-hidden="true"></i> Total Tour Cost : INR 33,500/-*</td>
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
                                                    <h5 class="mb-0"><span>Day 1</span> - Arrival at Jaipur </h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "block" }}>
                                                    <div class="inner">
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Welcome to the 'Pink City of India'.</div>
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Reach Jaipur, where a representative will help you is transferred to the hotel.</div>
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> On reaching the hotel, complete the check-in process and take some rest.</div>
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Once ready, you can depart for a sightseeing tour of Jaipur.</div>
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> You can explore the rich history of Jaipur as you proceed to visit the City Palace and Museum along with Jantar Mantar, which is a heritage site with fixed instruments for making astronomical observations.</div>
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> In the evening, you can proceed for a photo stop at Hawa Mahal and opt to explore the nearby markets.</div>
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Don't forget to visit Albert Hall where you can roam around and savor delicious street food..</div>
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Then you can visit the famous Moti Doongri Ganesh Temple located on the hilltop and the beautiful Birla Mandir that is made solely of white marble.</div>
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Later in the evening, you can proceed back to your hotel.</div>
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Overnight stay at the hotel in Jaipur.</div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 2</span> - Sightseeing in Jaipur  </h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Explore Amber Fort’s Sheesh Mahal, a Heart-Throb of Bollywood Films.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Have a hearty breakfast before embarking on the full-day sightseeing tour to Jaipur.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> In the morning you can visit the Nahargarh Fort that offers some of the most stunning views of sunrise along with a panoramic view of all of Jaipur in its entire splendor.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After you are done exploring the beauty of Nahargarh Fort, you can proceed to Jaigarh Fort.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Jaigarh houses the massive 18th-century cannon, Jaivana Cannon, a projectile of which made a small lake in Chaksu after traveling approx. 35 Km.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Then you can visit the grand Amber Fort and Palace cradled on the top of the Aravali Hill overlooking the Pink City of Jaipur.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Here, you can take an Elephant Safari to the top of the Amber Fort and then visit the beautiful Sheesh Mahal where Bollywood legendary movie "Mughal-E-Azam's" song "Jab Pyar Kiya To Darna Kya" was shot.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Later in the evening, you can visit the traditional shopping mall where you can shop for beautiful souvenirs.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 3</span> - Jaipur to Jodhpur </h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Home to the Impregnable Mehrangarh Fort</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Enjoy a delicious breakfast in the morning and then get ready to transfer to Jodhpur.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> On reaching the hotel, complete the check-in process and take some rest.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Once ready, you can proceed to explore the stunning blue city of Jodhpur.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> You can visit the beautiful Umaid Bhavan Palace, which is built on a vast 26 acres and is one of the world's largest private residences.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Then you can proceed to the majestic Mehrangarh Fort that stands on a perpendicular cliff, four hundred feet above the skyline of Jodhpur.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> You can also visit the beautiful memorial made in marble, the Jaswant Thada, often described as the “Taj Mahal of Marwar”.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Later in the evening, return back to the hotel in Jodhpur for an overnight stay.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 4</span> - Jodhpur to Jaisalmer </h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i>  Travel to the Shimmering 'Golden City' of Rajasthan.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Start your next day with a delicious breakfast then get ready to transfer to Jaisalmer, also known as the Golden City.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Take a short stopover at the Jaisalmer War Memorial, which honours the contributions and sacrifices of war heroes, and traces the evolution of the Indian Army.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> On arrival in Jaisalmer, check in to your hotel and take some rest.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> The rest of the day is at leisure and you are free to explore the colorful markets and fairs.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Once you are done exploring the markets, return back to the hotel.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Overnight stay at the hotel in Jaisalmer.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 5</span> - Sightseeing in Jaisalmer </h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i>  Explore the Secrets Hidden Behind the Beautiful Sand Dunes.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After breakfast, you can proceed to uncover the secrets hidden behind the Golden Sands of the Thar Desert in Jaisalmer.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> You can visit the golden Jaisalmer Fort that looks like it has just risen from the sands with its golden limestone walls.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> And then, you can proceed to marvel at the beautiful royal Havelis including Patwon-Ki-Haveli, Nathmal-Ki-Haveli, and Salim Singh-Ki-Haveli that speaks of the royal past.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Dating back from the 12th to 15th century, these Havelis feature exquisite carvings and filigree work.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After experiencing the stunning architectural marvels you can take a short stopover at the beautiful Gadisar Lake that was once the only source of water in Jaisalmer.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> You can then depart for a camel ride to the beautiful Sam Sand Dunes overlooking a spectacular sunset.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After a wonderful camel safari, you can proceed to check in to the desert camps and enjoy folk performances by the locals while enjoying a bonfire.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Have a scrumptious and authentic Rajasthani meal.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Overnight stay at the Desert Camp in Jaisalmer.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 6</span> -Jaisalmer to Jaipur and Departure </h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> End of Trip With a Bag Full of Life Time Memories.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Wake up at your camps to a beautiful morning in the desert and enjoy a delicious breakfast.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Check out from the desert camps after packing your bags along with a bundle of memories.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> You can then proceed back towards Jaipur.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Conclude the tour with beautiful memories on reaching your desired destination in Jaipur for your onward journey.</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-6 mb-2">
                                            <div class="desc-box bg-grey p-4 rounded">
                                                <h5 class="mb-2">Inclusions</h5>
                                                <ul>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Sightseeing as per the itinerary </li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Breakfast & Dinner at the hotels mentioned </li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Accommodation for 05 nights/ 06 days on Triple sharing basis </li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> Parking and all transport related expense including Driver Services </li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> All toll taxes, parking fees, Fuel and driver's allowances • All Transport & Hotels Related Taxes </li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> A 24 - hour helpline  </li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> Welcome & Assistance on Arrival.  </li>



                                                </ul>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-6 mb-2">
                                            <div class="desc-box bg-grey p-4 rounded">
                                                <h5 class="mb-2">Exclusions</h5>
                                                <ul>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Air Fare / Train fare /Bus fare are not included in the package </li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> GST</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Anything mention in the inclusions </li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Entry ticket to palace visit </li>

                                                </ul>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-6 mb-2">
                                            <div class="desc-box bg-grey p-4 rounded">
                                                <h4>Things To Do</h4>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Learn how the famous Jaipur Blue Pottery is made without clay</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Taking an elephant ride to the top of the Amer Fort will give you a feel of being a Maharaja</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> 'Dal Baati Churma' is an authentic Rajasthani staple at Chokhi Dhani Village</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Explore the mammoth-sized Jaivana Cannon at Jaigarh, whose projectile made a small lake in Chaksu after traveling approximately 35 Km</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Find out why Kuldhara Village was cursed and abandoned over night by visiting the village</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> The Jodhpuri Mirchi Vada from Janta Sweets is world-famous for its taste</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Discover the mysterious origins of the Royal Enfield Bullet Motorcycle, a 350cc motorcycle with a power output of 35 horsepower</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="single-map mb-4">
                                    <h4>Map</h4>
                                    <div class="map rounded overflow-hidden">
                                        <div style={{ width: "100%" }}>
                                            <iframe class=" rounded overflow-hidden" height="400" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7308190.844275631!2d69.37606700830034!3d26.569849199676863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396a3efaf7e30e37%3A0xb52b9b4506c088e5!2sRajasthan!5e0!3m2!1sen!2sin!4v1660319810574!5m2!1sen!2sin"></iframe>
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
