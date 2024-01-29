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

                <title>TripzyGo - Romantic Auli Tour Package For Couple - Auli Honeymoon Trip</title>
                <meta name="description" content="Be ready to experience the best Auli Honeymoon trip. Get your hands on this fabulous Auli tour package for couple and book Auli honeymoon tour package now." />
                <meta name="keywords" content="auli tour package for couple, auli honeymoon tour package, , auli honeymoon trip" />
                <link rel="icon" href="/icon.png" />
                <link rel="canonical" href="https://www.tripzygo.in/packages/best-selling-auli-tour-package-for-couple" />
                <meta property="og:url" content="https://www.tripzygo.in/packages/best-selling-auli-tour-package-for-couple" />
                <meta property="og:title" content="Romantic Auli Tour Package For Couple - Auli Honeymoon Trip" />
                <meta property="og:description" content="Be ready to experience the best Auli Honeymoon trip. Get your hands on this fabulous Auli tour package for couple and book Auli honeymoon tour package now." />
                <meta property="og:image" content="https://www.tripzygo.in/images/domestic/best_selling_auli_tour_package_for_couple/1.webp" />
            </Head>
<ShareButton/>
<PopularityWidget packageCount="77" progressBarPercentage="75%"/>
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
                                        <h2 className="mb-1">Best Selling Auli Tour Package For Couple</h2>

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
                                                        <img className='blog_image' src="/images/domestic/best_selling_auli_tour_package_for_couple/1.webp" alt="auli tour package for couple" />

                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/best_selling_auli_tour_package_for_couple/2.webp" alt="auli tour package for couple" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/best_selling_auli_tour_package_for_couple/3.webp" alt="auli honeymoon tour package" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/best_selling_auli_tour_package_for_couple/4.webp" alt="auli honeymoon tour package" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/best_selling_auli_tour_package_for_couple/5.webp" alt="auli honeymoon trip" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/best_selling_auli_tour_package_for_couple/6.webp" alt="auli honeymoon trip" />
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
                                                        <img className='blog_image' src="/images/domestic/best_selling_auli_tour_package_for_couple/1.webp" alt="auli tour package for couple" />

                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/best_selling_auli_tour_package_for_couple/2.webp" alt="auli tour package for couple" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/best_selling_auli_tour_package_for_couple/3.webp" alt="auli honeymoon tour package" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/best_selling_auli_tour_package_for_couple/4.webp" alt="auli honeymoon tour package" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/best_selling_auli_tour_package_for_couple/5.webp" alt="auli honeymoon trip" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/best_selling_auli_tour_package_for_couple/6.webp" alt="auli honeymoon trip" />
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
                                                <div>Thinking of a honeymoon? How about going to a place that has everything from snowy slopes to green meadows and Himalayan views, romantic vistas, cable cars, and everything that attracts a tourist? You can find it all in Auli. </div>
                                                <div class="mb-0">This amazing ski resort is perfect for a great honeymoon experience especially when you take our intelligibly crafted Auli tour package for couple.</div>
                                                <div>This Auli tour package for couple is designed with the best itinerary that offers visit to the most romantic places in Auli along with most romantic things to do in the place.</div>
                                                <div>With this Auli tour package for couple, you will have the best honeymoon experience of your life with honeymoon memories that will stay with you for an eternity.</div>
                                                <div>Don’t wait up. Book this amazing Auli tour package for couple now to go on the best honeymoon of your life to a wonderful, snowy, and cool place.</div>
                                            </div>
                                        </div>


                                    </div>
                                </div>

                                <div className="tour-includes mb-4">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td><i className="fa fa-clock-o pink mr-1" aria-hidden="true"></i> Days : 4 Nights/5 Days</td>
                                                <td><i class="fa fa-group pink mr-1" aria-hidden="true"></i> People : 1</td>

                                            </tr>
                                            <tr>
                                                <td><i class="fa fa-inr pink mr-1" aria-hidden="true"></i> Total Tour Cost : INR 20,989/-*   </td>
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
                                                    <h5 class="mb-0"><span>Day 1</span> - Delhi to Haridwar</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "block" }}>
                                                    <div class="inner">
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> You will get transferred from Delhi to Haridwar.</div>
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After reaching Haridwar, check-in to the hotel and take some rest. Pay visit to the Vaishno Devi Temple, Daksheshwar Mahadev Temple to feel spiritual peace.</div>
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Visit Mansa Devi Temple situated on a hilltop and offers panoramic view of Haridwar City. Later on in the evening, soak in the spiritual peace while experiencing the famous Ganga Aarti. </div>
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Take a holy dip in Har ki Pauri, return back to the hotel. </div>
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Stay overnight at hotel in Haridwar.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 2</span> – Joshimath </h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Wake up to a beautiful morning view and have a mouth-watering breakfast and complete the check–out formalities. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Embark on your journey towards Joshimath. Take a short stopover at Devprayag and witness the Holy Sangam where Alaknanda and Bhagirathi River come together to form Ganga on your way to Joshimath.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Pass through Karnaprayag & Rudraprayag to reach Joshimath. After this, check-in to the hotel and take some rest.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Stay overnight at the hotel in Joshimath.</div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 3</span>  –  Auli Sightseeing</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Wake up early to a beautiful morning view, have a healthy & delicious breakfast and get ready for a full-day scenic tour to Auli.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> There are two options to reach Auli: you can drive to Auli by road or you can take the 4-kilometer long gondola ride from Joshimath to Auli.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Auli's beautiful lake offers a refreshing breeze as you stroll along it or indulge in adventurous activities such as skiing, sledding, and more.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> The Gorson Bugyal at 3056 meters above sea level is another notable attraction in Auli, or you may choose to trek further until Chattarkund, located in the heart of a dense forest and renowned for its sweet water.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> In the evening, head back to Joshimath to stay overnight in a hotel.</div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 4</span> - Auli to Rishikesh</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Have a mouth-watering breakfast at hotel and then check out.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> The majestic Nanda Devi Parbat can then be bid adieu before you start your journey to Rishikesh.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After reaching hotel, check-in and take some rest.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Don’t forget to feel the spiritual vibes during the holy Ganga Aarti at Triveni Ghat In the evening, if time allows.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Return back to the hotel and enjoy your overnight stay in Rishikesh.</div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 5</span> - Rishikesh to Delhi</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Holy chants fill the air as soon as you wake up in the morning.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Have a tasty breakfast and then check out from the hotel.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Admire the scenic beauty from Ram Jhula & Laxman Jhula in Rishikesh before leaving the spiritual city.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Then, set off your journey back to Delhi.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> From here on, conclude your tour with beautiful & fun memories on reaching your desired destination in Delhi.</div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-6 mb-2">
                                            <div class="desc-box bg-grey p-4 rounded">
                                                <h5 class="mb-2">Inclusions</h5>
                                                <ul>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> An experienced and TripzyGo certified Team Captain for the entire journey</li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Stay in comfortable and hygienic hotels at each place on sharing basis</li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Complete travel in a sanitised vehicle as per the itinerary</li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Sightseeing as per the itinerary</li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> River rafting in Rishikesh at no additional cost</li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> All applicable fuel, toll tax and parking fee</li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> An experienced driver for the entire journey</li>


                                                </ul>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-6 mb-2">
                                            <div class="desc-box bg-grey p-4 rounded">
                                                <h5 class="mb-2">Exclusions</h5>
                                                <ul>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Airfare </li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Lunch & services other than mentioned</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Expenses of personal nature such as laundry expenses, telephone charges etc</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Other services not mentioned in inclusions</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-6 mb-2">
                                            <div class="desc-box bg-grey p-4 rounded">
                                                <h5 class="mb-2">Things To Do</h5>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Experience Thrill at Skiing</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Enjoy Adventurous Auli Gorson Trek</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Spend Night Under Stars While Camping</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Try Cable Car Ride</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Must Try Bird Watching</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Stroll Around Chattrakund Lake</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Try Adventurous Hiking</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i>  Witness the Beauty While on Trishul Peak</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Spend a Day at Nanda Devi National Park</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Go on Kuari Pass Trek for Beautiful Views</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Have a Taste of Local Cuisine</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Make a Visit to Chenab Lake</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Experience Joshimath's Village Life</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Must Visit Auli Artificial Lake</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="single-map mb-4">
                                    <h4>Map</h4>
                                    <div class="map rounded overflow-hidden">
                                        <div style={{ width: "100%" }}>
                                            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7308190.844275631!2d69.37606700830034!3d26.569849199676863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396a3efaf7e30e37%3A0xb52b9b4506c088e5!2sRajasthan!5e0!3m2!1sen!2sin!4v1660319810574!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>  */}
                                            <iframe class=" rounded overflow-hidden" height="400" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27493.30874903555!2d79.53464023476373!3d30.530550249684683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f50aafcc75db9%3A0xdc3ec1a504bf4830!2sAuli%2C%20Auli%20Laga%20Salude%2C%20Uttarakhand%20246443!5e0!3m2!1sen!2sin!4v1667812595589!5m2!1sen!2sin" ></iframe>
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