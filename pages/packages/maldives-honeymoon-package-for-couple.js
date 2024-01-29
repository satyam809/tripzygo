

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
            const url = `https://backend.tripzygo.in/packages?limit=12&destination_search=Maldives`;
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

                <title>TripzyGo - Book A Romantic Tour With Maldives Honeymoon Package For Couple</title>
                <meta name="description" content="Are your searching romantic things to do in Maldives? Our Maldives honeymoon package for couple is perfect fit. Book honeymoon trip to Maldives from India now." />
                <meta name="keywords" content="romantic things to do in Maldives, Maldives honeymoon package for couple, honeymoon trip to Maldives from India" />
                <link rel="icon" href="/icon.png" />
                <link rel="canonical" href="https://www.tripzygo.in/packages/maldives-honeymoon-package-for-couple" />
                <meta property="og:url" content="https://www.tripzygo.in/packages/maldives-honeymoon-package-for-couple" />
                <meta property="og:title" content="Book A Romantic Tour With Maldives Honeymoon Package For Couple" />
                <meta property="og:description" content="Are your searching romantic things to do in Maldives? Our Maldives honeymoon package for couple is perfect fit. Book honeymoon trip to Maldives from India now." />
                <meta property="og:image" content="https://www.tripzygo.in/images/international_packages/maldives_honeymoon_package_for_couple_a_perfect_honeymoon/1.webp" />
            </Head>
            <ShareButton />
            <PopularityWidget packageCount="79" progressBarPercentage="80%" />
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
                                        <h2 className="mb-1">Maldives Honeymoon Package for Couple</h2>

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
                                                        <img className='blog_image' src="/images/international_packages/maldives_honeymoon_package_for_couple_a_perfect_honeymoon/1.webp" alt="romantic things to do in Maldives" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/maldives_honeymoon_package_for_couple_a_perfect_honeymoon/2.webp" alt="romantic things to do in Maldives" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/maldives_honeymoon_package_for_couple_a_perfect_honeymoon/3.webp" alt="Maldives honeymoon package for couple" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/maldives_honeymoon_package_for_couple_a_perfect_honeymoon/4.webp" alt="Maldives honeymoon package for couple" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/maldives_honeymoon_package_for_couple_a_perfect_honeymoon/5.webp" alt="honeymoon trip to Maldives from India" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/maldives_honeymoon_package_for_couple_a_perfect_honeymoon/6.webp" alt="honeymoon trip to Maldives from India" />
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
                                                        <img className='blog_image' src="/images/international_packages/maldives_honeymoon_package_for_couple_a_perfect_honeymoon/1.webp" alt="romantic things to do in Maldives" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/maldives_honeymoon_package_for_couple_a_perfect_honeymoon/2.webp" alt="romantic things to do in Maldives" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/maldives_honeymoon_package_for_couple_a_perfect_honeymoon/3.webp" alt="Maldives honeymoon package for couple" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/maldives_honeymoon_package_for_couple_a_perfect_honeymoon/4.webp" alt="Maldives honeymoon package for couple" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/maldives_honeymoon_package_for_couple_a_perfect_honeymoon/5.webp" alt="honeymoon trip to Maldives from India" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/maldives_honeymoon_package_for_couple_a_perfect_honeymoon/6.webp" alt="honeymoon trip to Maldives from India" />
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
                                                            <h5 className="mb-2">Maldives Honeymoon Package for Couple - A Perfect Honeymoon</h5>
                                                            <p >A Maldives honeymoon package for a couple is the perfect way to start your life together as a married couple. The Maldives is an idyllic destination known for its crystal clear waters, white sandy beaches, and abundant marine life. The Maldives is a tropical paradise that offers a wide range of activities for couples to enjoy together, including swimming, snorkeling, diving, and island hopping.</p>
                                                            <p>The Maldives is made up of 26 atolls and over 1,000 islands, each offering its own unique charm and character. The Maldives is home to some of the most beautiful beaches in the world, with powdery white sands and crystal clear waters that are perfect for swimming and sunbathing. The Maldives is also known for its vibrant coral reefs, which are home to a wide variety of marine life, including colorful fish, turtles, and dolphins.</p>

                                                        </section>
                                                        <section className='set_padding'>
                                                            <p >A Maldives honeymoon package for a couple typically includes accommodations at a luxurious resort or hotel as well as meals and a variety of activities and excursions that are perfect for honeymoon couples. Many resorts in the Maldives offer overwater bungalows and villas, which provide couples with a romantic and secluded setting to enjoy their honeymoon. Some resorts also offer spa treatments and romantic dinners on the beach, making it the perfect place for couples to relax and unwind. The sunset cruises are also a popular activity among couples, as they provide a perfect opportunity to relax and unwind while watching the sunset over the Indian Ocean.</p>
                                                            <p >One of the most popular activities for couples to enjoy during their Maldives honeymoon is snorkeling or diving. The Maldives is home to some of the best snorkeling and diving spots in the world, with colorful coral reefs and an abundance of marine life. The Maldives is also a popular destination for honeymoon couples looking to go island hopping, as there are many beautiful and uninhabited islands to explore. The Maldives is also an ideal destination for water sports enthusiasts. The clear waters of the Maldives offer perfect conditions for activities like jet skiing, kite surfing, windsurfing, and parasailing. The resorts also offer a variety of water sports activities for couples to enjoy together.</p>

                                                            <p >Maldives is a place where you can relax and unwind, enjoy each other's company, and create memories that will last a lifetime. The Maldives is a tropical paradise that offers a wide range of activities for couples to enjoy together, making it the perfect honeymoon destination.</p>

                                                            <p>The Maldives Honeymoon package for couple is a perfect way to start your new life together as a married couple. A Maldives honeymoon package for a couple typically includes accommodations at a luxurious resort or hotel, as well as meals and activities. The Maldives is a perfect place for couples to relax, unwind and create memories that will last a lifetime. For the honeymoon couple, the opportunity to escape the daily grind and enjoy each other's company makes it way more special and memorable. So without giving a second thought just book a package now.</p>
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
                                                <div>When you are thinking of a honeymoon, you cannot miss out on considering Maldives.</div>
                                                <div class="mb-0">Maldives is a dream honeymoon destination for many, and why not? Afterall, there are so many romantic things to do in Maldives.</div>
                                                <div>You can snuggle and snog around the beaches, enjoy a romantic walk with your partner, indulge in amazing views of landscapes and sceneries, and the list could go on and on.</div>
                                                <div>With everything so beautiful and gorgeous in Maldives, you ought to take a honeymoon trip to Maldives from India, especially when we have it for you all customised at a reasonable price.</div>
                                                <div>Get in touch with TripzyGo travel specialist now and book an amazing Maldives honeymoon package for couple to take you on the most amazingly romantic affair of your life. </div>
                                            </div>
                                        </div>


                                    </div>
                                </div>

                                <div class="tour-includes mb-4">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td><i className="fa fa-clock-o pink mr-1" aria-hidden="true"></i> Days : 03 Nights/ 04Days</td>
                                                <td><i class="fa fa-group pink mr-1" aria-hidden="true"></i> People : Per Couple</td>

                                            </tr>
                                            <tr>
                                                <td><i class="fa fa-inr pink mr-1" aria-hidden="true"></i> Total Tour Cost : INR 45,000/-*  </td>
                                                <td><i class="fa fa-bed pink mr-1" aria-hidden="true"></i> Hotel : 4 star</td>
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
                                                    <h5 class="mb-0"><span>Day 1</span> -  Arrival Maldives</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "block" }} >
                                                    <div class="inner">
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Malé International Airport and Hotel Transfer Via Speedboat.</div>
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After landing at Velana International Airport in Malé, our representative would welcome you with warm greetings.</div>
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After giving your luggage, followed by l ading in the speedboat, enjoy the speedboat ride for a few minutes to get transferred to your accommodation.</div>
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Once you reach, complete the check-in formalities at your resort.</div>
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Put your backpack for a while and relax in your room.</div>
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> If you want, you can ask the resort staff to give you a mini-tour of the property.</div>
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> You can hang out outside your property in the afternoon or evening .</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 2</span> - Watersports and Island Hopping</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }} >
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Treat your tastebuds to the flavorsome breakfast, and then head out to spend the full day at the beaches. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Whether y u are with your soulmate or family or friends, or even solo, fun frolic moments are guaranteed because the sand is pristine at the Malé.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Beaches of Male You can cruise the islands surrounding the Malé for a change on a speedboat.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> You will have the full day at your leisure. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Make sure you wake up early and start your day by plunging into the blue waters for the swim, followed by snorkeling, scuba diving, banana boat ride, etc.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Photograph yourself in the pink and orange-hued backdrops of Malé landscape either at the beaches or on the island hopping expedition.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> As day 2 of your trip to Maldives ends, return to the hotel for savoring the toothsome dinner and overnight sleep.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 3</span> - Enjoy the Day At Your Convenience</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }} >
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Wake up to the hearty meal at your preferred waking time.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Afterward, lace up your boots because day 3 is again reserved for enjoying at your own convenienc count by discovering something unique other than the beaches and waters Marvel the elegance of dozens of the Mosques in the Malé. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Learn about the historical treasures of Maldives at the Museums.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Inhale fresh air amidst the lush greenery at the Sultan Park (Rasrani Bageecha), and end your evening with a shopping exc local markets to buy Maldivan handicrafts and stuff.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 4</span> - Malé International Airport</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }} >
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Bow down your head at the sapphire blue waters of the last time all around you because, after a lip-smacking breakfast and check-out procedure, you will be escorted to the Velana International Airport to fly back to your home with a bag full of Maldives holiday memories.</div>

                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div class="col-lg-12 col-md-6 mb-2" id='inclusions'>
                                            <div class="desc-box bg-grey p-4 rounded">
                                                <h5 class="mb-2">Inclusions</h5>
                                                <ul>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> All your tours and excursions are by an A/C vehicle</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-6 mb-2" id='exclusions'>
                                            <div class="desc-box bg-grey p-4 rounded">
                                                <h5 class="mb-2">Exclusions</h5>
                                                <ul>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Flights, Trains, Ferries  tc</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Monument Entrance Fees & Camera Fees</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Personal Expenses - Laundry, Shopping, Telephone bills, tips etc</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Adventure Activities - Safari, Rides, Surfing, Paragliding etc</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Any Extra services - Permits, Volvo Luggage Charges, Heater, Meals etc</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Anything else not listed in above details</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-6 mb-2" id='things-to-do'>
                                            <div class="desc-box bg-grey p-4 rounded">
                                                <h5 class="mb-2">Things To Do</h5>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Scuba Diving at Maaya Thila</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Enjoy Sunset Cruise</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Maldives Island Hopping Tour</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i>  Visit Glowing Beach on Vaadhoo Island</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Surfing in the Maldives</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Indulge in Spa Treatment at Adaaran Prestige Vadoo</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Stay in a Overwater Bungalow like Six Senses Laamu</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Stroll at Hulhumale Beach</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Explore the Capital Island Male</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Water Skiing at Meeru Island Resort & Spa</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Take a Helicopter Tour of Maldives</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Party at Subsix</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Snorkeling at Maafushi Island</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Skydiving in Maldives </div>

                                            </div>
                                        </div>
                                        <div className="description mb-2" id="places-to-eat">
                                            <div className="row">
                                                <div className="col-lg-12 col-md-12 mb-2 ">
                                                    <div className="desc-box bg-grey p-4 rounded ">
                                                        <h5 className="mb-2">Best Cafes</h5>
                                                        <div>The Maldives is a tropical country in the Indian Sea, encircled by the excess of 1,000 coral islands, it's known for its sea shores, occupied fish markets, cafés, and shops. Discussing the best restaurants in Maldives, they are famous for the fish and the ocean side.....</div>
                                                        <a href="/blogs/ten-best-places-to-eat-in-maldives-for-every-taste-and-budget" className="read-more-link" target="_blank" ><button class="white bg-theme p-1 px-2" style={{ float: "right", margin: "-10px", fontSize: "11px" }}>Read More</button></a>

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
                                                                        <h5 className="mb-0 px-3">What is the cost of the Maldives Honeymoon Package?</h5>
                                                                    </div>
                                                                    <div className="accrodion-content" style={{ display: "block" }} >
                                                                        <div className="inner">
                                                                            <div className="mb-0 ">Whenever there is talk of a honeymoon destination, Maldives is placed at the number 1 position. Different honeymoon packages are available to fulfill the wish of a romantic holiday, which starts from INR 36,000 for 3 Days and 4 Nights; you can also get customized at your convenience. </div>

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accrodion ">
                                                                    <div className="accrodion-title rounded">
                                                                        <h5 className="mb-0 px-3">What are the romantic things that can do in Maldives? </h5>
                                                                    </div>
                                                                    <div className="accrodion-content" style={{ display: "none" }} >
                                                                        <div className="inner">
                                                                            <div className="mb-0 ">Romantic things can do in Maldives are:</div>
  <div className="mb-0">● Scuba Diving at Maaya Thila</div>
                                                                    <div className="mb-0">●	Enjoy Sunset Cruise</div>
                                                                    <div className="mb-0">●	Maldives Island Hopping Tour</div>
                                                                    <div className="mb-0">●	Visit Glowing Beach on Vaadhoo Island</div>
                                                                    <div className="mb-0">●	Surfing in the Maldives</div>
                                                                    <div className="mb-0">●	Spa Treatment at Adaaran Prestige Vadoo</div>
                                                                    <div className="mb-0">●	Stay in an Overwater Bungalow like Six Senses Laamu</div>
                                                                    {/* <div className="mb-0">• Macha</div> */}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accrodion ">
                                                                    <div className="accrodion-title rounded">
                                                                        <h5 className="mb-0 px-3"> Can Couples Plan Adventure Holiday in Maldives?</h5>
                                                                    </div>
                                                                    <div className="accrodion-content" style={{ display: "none" }} >
                                                                        <div className="inner">
                                                                            <div className="mb-0"> Absolutely, You can plan an adventurous holiday with Maldives Honeymoon Package for Couples. There are many water sports and adventurous activities listed. You'll be thrilled to enjoy it.</div>
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
                                                                        <h5 className="mb-0 px-3">What are the best resorts in the Maldives for a honeymoon?</h5>
                                                                    </div>
                                                                    <div className="accrodion-content" style={{ display: "none" }} >
                                                                        <div className="inner">
                                                                            <div className="mb-0 "> Best resorts in the Maldives for a honeymoon are:</div>
<div className="mb-0">●	Six Senses Laamu</div>
                                                                    <div className="mb-0">●	Taj Exotica Resort & Spa</div>
                                                                    <div className="mb-0">●	Hurawalhi Island Resort</div>
                                                                    <div className="mb-0">●	Adaaran Prestige Water Villas </div>
                                                                    <div className="mb-0">●	JOALI</div>
                                                                    <div className="mb-0">●	You & Me Maldives</div>
                                                                    {/* <div className="mb-0">• Mochi</div>
                                                                    <div className="mb-0">• Macha</div> */}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accrodion ">
                                                                    <div className="accrodion-title rounded">
                                                                        <h5 className="mb-0 px-3">Which place is better for a honeymoon, Maldives or Mauritius?</h5>
                                                                    </div>
                                                                    <div className="accrodion-content" style={{ display: "none" }} >
                                                                        <div className="inner">
                                                                            <div className="mb-0 ">Of course, both places are full of tourist attractions. Both places have their specialty. As compared to Mauritius hotels, the rooms in Maldives resorts are more spacious and luxurious. Beach villas, bungalows, and overwater villas are expensive, but if you prefer quality, Maldives makes a better choice for an indulgent holiday.</div>

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
                                <LocationMap mapLink="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8159086.303178883!2d68.7399088777782!3d3.1135245610135382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x24b599bfaafb7bbd%3A0x414509e181956289!2sMaldives!5e0!3m2!1sen!2sin!4v1663652641939!5m2!1sen!2sin"></LocationMap>
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
