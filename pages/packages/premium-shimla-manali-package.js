
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
                <title>TripzyGo - Grab The Best Shimla Manali Package - Shimla Manali Trip At Affordable Price</title>
                <meta name="description" content="Want to grab a Shimla Manali tour plan? Then get the most delightful Shimla Manali trip with an exciting and best Shimla Manali Package. Book your trip today!" />
                <meta name="keywords" content="Shimla Manali Trip, shimla manali tour plan, best Shimla Manali package" />
                <link rel="icon" href="/icon.png" />
                <link rel="canonical" href="https://www.tripzygo.in/packages/premium-shimla-manali-package" />
                <meta property="og:url" content="https://www.tripzygo.in/packages/premium-shimla-manali-package" />
                <meta property="og:title" content="Grab The Best Shimla Manali Package - Shimla Manali Trip At Affordable Price" />
                <meta property="og:description" content="Want to grab a Shimla Manali tour plan? Then get the most delightful Shimla Manali trip with an exciting and best Shimla Manali Package. Book your trip today!" />
                <meta property="og:image" content="https://www.tripzygo.in/images/domestic/premium_shimla_manali_package/1.webp" />
            </Head>
            <ShareButton />
            <PopularityWidget packageCount="65" progressBarPercentage="65%" />
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
                                        <h2 className="mb-1">Premium Shimla Manali Package</h2>

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
                                                        <img className='blog_image' src="/images/domestic/premium_shimla_manali_package/1.webp" alt="Shimla Manali Trip" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/premium_shimla_manali_package/2.webp" alt="Shimla Manali Trip" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/premium_shimla_manali_package/3.webp" alt="shimla manali tour plan" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/premium_shimla_manali_package/4.webp" alt="shimla manali tour plan" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/premium_shimla_manali_package/5.webp" alt="Shimla Manali package" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/premium_shimla_manali_package/6.webp" alt="Shimla Manali package" />
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
                                                        <img className='blog_image' src="/images/domestic/premium_shimla_manali_package/1.webp" alt="Shimla Manali Trip" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/premium_shimla_manali_package/2.webp" alt="Shimla Manali Trip" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/premium_shimla_manali_package/3.webp" alt="shimla manali tour plan" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/premium_shimla_manali_package/4.webp" alt="shimla manali tour plan" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/premium_shimla_manali_package/5.webp" alt="Shimla Manali package" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/premium_shimla_manali_package/6.webp" alt="Shimla Manali package" />
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
                                                            <h5 className="mb-2">Premium Shimla Manali Package</h5>
                                                            <p>If you are seeking a truly premium and indulgent experience in the picturesque hill stations of Shimla and Manali, then the Premium Shimla Manali Package is perfect for you. This package offers a personalized and exclusive experience, featuring luxury accommodation, fine dining, and a plethora of activities designed to leave you feeling rejuvenated and refreshed. The best Shimla Manali package includes accommodation in some of the most opulent luxury hotels and resorts in Shimla and Manali. You will have a wide range of options to choose from, including cozy rooms with stunning mountain views and lavish suites complete with private balconies and jacuzzis. All of the hotels and resorts are equipped with modern amenities such as spas, gyms, swimming pools, and more, ensuring that you will have everything you need to unwind and relax.

                                                            </p>
                                                            {/* <p>Families can take a boat trip to nearby islands, where they can explore the local culture and enjoy a picnic on the beach. The Maldives is also known for its beautiful sunsets, which can be enjoyed from the comfort of your resort or on a sunset cruise. The Maldives is also home to a number of excellent restaurants, which serve a variety of local and international cuisine.
                                                            </p>                                                        */}
                                                        </section>
                                                        <section className='set_padding'>
                                                            <p>Fine dining is also a crucial aspect of the Shimla Manali Trip. You can expect to indulge in some of the most delectable cuisines on offer in the hill stations. You will have the opportunity to savor a range of culinary delights, from local Himachali dishes to international cuisine, all prepared with the finest ingredients and presented in exquisite settings.

                                                            </p>
                                                            <p>Aside from the luxurious accommodation and fine dining experiences, the Shimla Manali tour plan also offers a wide range of activities to keep you entertained throughout your stay. You can choose from various adventure sports, including trekking, paragliding, skiing, and river rafting, or enjoy a relaxing day of fishing, golfing, or simply exploring the region's stunning natural beauty. You can also experience the rich cultural heritage of the area by visiting ancient temples, churches, and monasteries, and participating in traditional folk dance and music performances.

                                                            </p>
                                                            <p>In conclusion, if you're seeking an indulgent and luxurious escape to the stunning hill stations of Shimla and Manali, then the Premium Shimla Manali Package is the perfect choice for you. With its luxurious accommodation, fine dining, and a plethora of activities, this package offers an unforgettable and exclusive experience that is sure to leave you feeling refreshed and rejuvenated.

                                                            </p>
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
                                                <div>Shimla and Manali are beautiful hill stations,one of a kind, and a hot spot for every couple, bachelor, and family.  </div>
                                                <div class="mb-0">Be it couples, a group of friends, or family, everyone has a Shimla Manali Trip on thier mind</div>
                                                <div>This premium Shimla Manali tour package is designed to help you with your plans for a Shimla Manali trip.</div>
                                                <div>With exquisite benefits and luxurious settings, this premium tour package will offer you the best experience in Shimla and Manali as you witness the beautiful sights of landscapes and sceneries giving pleasure and relaxation to your mind and soul.</div>
                                                <div>Additionally, you’ll love the experience in five star hotels with premium accommodations as you make plans to rest for a while during your trip.</div>
                                                <div>Have the most amazing experience of your life on your Shimla Manali Trip, 6 days of pure bliss, fun, and enjoyment.</div>
                                                <div>Book your Shimla Manali tour package now.</div>
                                            </div>
                                        </div>


                                    </div>
                                </div>

                                <div class="tour-includes mb-4">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td><i class="fa fa-clock-o pink mr-1" aria-hidden="true"></i> Package Category : Premium </td>
                                                <td><i class="fa fa-bed pink mr-1" aria-hidden="true"></i> Bedroom : 01 Double Rooms</td>
                                            </tr>
                                            <tr>
                                                <td><i class="fa fa-map-signs pink mr-1" aria-hidden="true"></i> Shimla : The Royal Regency / Sukh Sagar regency / Baljees Regency Or Similar</td>
                                                <td><i class="fa fa-map-signs pink mr-1" aria-hidden="true"></i> Manali : Whistling Pine Resorts / Vivaan Resorts / Himalayan Height Or Similar</td>

                                            </tr>
                                            <tr>
                                                <td><i className="fa fa-clock-o pink mr-1" aria-hidden="true"></i> Days : 5 Nights/6 Days</td>
                                                <td><i class="fa fa-inr pink mr-1" aria-hidden="true"></i> Total Tour Cost : INR 39,200/-*</td>

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
                                                    <h5 class="mb-0"><span>Day 1</span> - Delhi – Manali </h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "block" }}>
                                                    <div class="inner">
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Day Services: Volvo Only</div>
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> We will receive you in New-Delhi at Volvo pick-up point. </div>
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Your journey into the sparkling land of Himachal Pradesh starts from here.</div>
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> The overnight journey takes you through cities and your morning will be greeted with the fresh air of Manali.</div>
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Exotic Manali offers something special for everyone. </div>
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> It gives peace to mediators; inspiration to artists, daring Activities for adventure Seekers and this list just goes on.</div>
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i>  As soon as you enter into the terrains of Manali, you will feel the cool breeze already taking all your stress away and surprising you from its jaw- dropping landscapes.</div>


                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 2</span> - Arrival in Manali + Local city tour</h5>
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
                                                    <h5 class="mb-0"><span>Day 5</span> - Manali – Shimla </h5>
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
                                                    <h5 class="mb-0"><span>Day 6</span> - Kufri + Shimla local</h5>
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
                                                    <h5 class="mb-0"><span>Day 7</span> - Departure day  </h5>
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
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-6 mb-2" id='things-to-do'>
                                            <div class="desc-box bg-grey p-4 rounded">
                                                <h5 class="mb-2">Things To Do</h5>
                                                {/* <h4>Things To Do</h4> */}
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> As you river raft on the chilly Beas River, take control of your paddle</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Paragliding, zorbing, and other adrenaline-pumping activities may be found at Solang Valley</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Unwind at Cafe Simla Times with a hot cup of blended coffee</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Must-do Adventure in Kufri, the Highest Go-Kart Track in the World</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Visit the Himalayan National Park to see Exceptionally Rare Mammals</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Warm, clear rivers in the Vashisth Village's unspoiled valleys can let you escape the cold of Manali</div>
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
                                                                        <h5 className="mb-0 px-3">Premium Shimla Manali Package Good For Honeymoon?</h5>
                                                                    </div>
                                                                    <div className="accrodion-content" style={{ display: "block" }} >
                                                                        <div className="inner">
                                                                            <div className="mb-0 ">Absolutely, This premium package is adopted by customers for all purposes. Feel free to buy it for an occasion like a honeymoon too.</div>

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accrodion ">
                                                                    <div className="accrodion-title rounded">
                                                                        <h5 className="mb-0 px-3">What things to carry during the Shimla Manali Trip?</h5>
                                                                    </div>
                                                                    <div className="accrodion-content" style={{ display: "none" }} >
                                                                        <div className="inner">
                                                                            <div className="mb-0 ">Sunscreen lotion & Moisturizing lotion, Heavy Woolen Clothing & socks, Good rubber-soled shoes, Personal Medication, a Camera with sufficient batteries and film/memory cards, Dark polarized Sun glasses with retainers, etc., must carry during the Shimla Manali trip.</div>



                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accrodion ">
                                                                    <div className="accrodion-title rounded">
                                                                        <h5 className="mb-0 px-3">How to execute shimla manali tour plan?</h5>
                                                                    </div>
                                                                    <div className="accrodion-content" style={{ display: "none" }} >
                                                                        <div className="inner">
                                                                            <div className="mb-0">If you plan yourself executing the shimla manali tour plan, it can be difficult, because many things have to be taken care of, such as reaching the destination, reliability of the accommodation, choosing the correct activities, etc. To get rid of this hassle, most people take the best Shimla Manali package, which boasts of all facilities like Airport Transfer, Hotel Stay, Best Sightseeing Destination, Private Cab, and Pick & Drop. </div>
                                                                            {/* <div className="mb-0">• Sushi</div>
                                                                    <div className="mb-0">• Ramen</div>
                                                                    <div className="mb-0">• Tempura</div>
                                                                    <div className="mb-0">• Yakitori</div>
                                                                    <div className="mb-0">• Udon</div>
                                                                    <div className="mb-0">• Sashimi</div>
                                                                    <div className="mb-0">• Mochi</div>
                                                                    <div className="mb-0">• Macha</div> */}

                                                                            {/* <div className="mb-0">These are just a few examples of the many delicious and unique foods you can find in Japan.</div> */}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accrodion ">
                                                                    <div className="accrodion-title rounded">
                                                                        <h5 className="mb-0 px-3">What is the distance between Shimla and Manali?</h5>
                                                                    </div>
                                                                    <div className="accrodion-content" style={{ display: "none" }} >
                                                                        <div className="inner">
                                                                            <div className="mb-0 ">By road distance between Shimla and Manali is 248 km, while it is only 126 km from the flight.</div>


                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accrodion ">
                                                                    <div className="accrodion-title rounded">
                                                                        <h5 className="mb-0 px-3">Can the itinerary of the Premium Shimla Manali Package be changed?</h5>
                                                                    </div>
                                                                    <div className="accrodion-content" style={{ display: "none" }} >
                                                                        <div className="inner">
                                                                            <div className="mb-0 ">You can customize this Premium Shimla Manali Package as per your requirements.</div>


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




