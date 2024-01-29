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
import LocationMap from '../../components/Package_Description/locationMap';
import RelatedPackage from "../../components/Package_Description/RelatedPackages"
import axios from 'axios';
import { useEffect } from 'react'
SwiperCore.use([Pagination, Autoplay]);

export default function test() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [obj, setObj] = useState({});
    const getAllPackages = async () => {
        try {
            const url = `https://backend.tripzygo.in/packages?limit=12&destination_search=Bali`;
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

                <title>TripzyGo - Best Bali Tour Package From India - Book Holiday Trip To Bali</title>
                <meta name="description" content="If you're looking for relaxing Bali holidays. Then, we have the best Bali tour package from India for you. Plan your holiday trip to bali now. Contact us." />
                <meta name="keywords" content="Bali holidays from India, best Bali tour package from India, holiday trip to bali" />
                <link rel="icon" href="/icon.png" />
                <link rel="canonical" href="https://www.tripzygo.in/packages/best-bali-tour-package-from-india" />
                <meta property="og:url" content="https://www.tripzygo.in/packages/best-bali-tour-package-from-india" />
                <meta property="og:title" content="Best Bali Tour Package From India - Book Holiday Trip To Bali" />
                <meta property="og:description" content="If you're looking for relaxing Bali holidays. Then, we have the best Bali tour package from India for you. Plan your holiday trip to bali now. Contact us." />
                <meta property="og:image" content="https://www.tripzygo.in/images/international_packages/best_bali_tour_package_from_india_for_a_fun_vacation_and_holiday/1.webp" />
            </Head>
            <ShareButton />
            <PopularityWidget packageCount="85" progressBarPercentage="85%" />
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
                                        <h2 className="mb-1">Best Bali Tour Package From India </h2>

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
                                                        <img className='blog_image' src="/images/international_packages/best_bali_tour_package_from_india_for_a_fun_vacation_and_holiday/1.webp" alt="Bali holidays from India" />

                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/best_bali_tour_package_from_india_for_a_fun_vacation_and_holiday/2.webp" alt="Bali holidays from India" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/best_bali_tour_package_from_india_for_a_fun_vacation_and_holiday/3.webp" alt="best Bali tour package from India" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/best_bali_tour_package_from_india_for_a_fun_vacation_and_holiday/4.webp" alt="best Bali tour package from India" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/best_bali_tour_package_from_india_for_a_fun_vacation_and_holiday/5.webp" alt="holiday trip to bali" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/best_bali_tour_package_from_india_for_a_fun_vacation_and_holiday/6.webp" alt="holiday trip to bali" />
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
                                                        <img className='blog_image' src="/images/international_packages/best_bali_tour_package_from_india_for_a_fun_vacation_and_holiday/1.webp" alt="Bali holidays from India" />

                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/best_bali_tour_package_from_india_for_a_fun_vacation_and_holiday/2.webp" alt="Bali holidays from India" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/best_bali_tour_package_from_india_for_a_fun_vacation_and_holiday/3.webp" alt="best Bali tour package from India" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/best_bali_tour_package_from_india_for_a_fun_vacation_and_holiday/4.webp" alt="best Bali tour package from India" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/best_bali_tour_package_from_india_for_a_fun_vacation_and_holiday/5.webp" alt="holiday trip to bali" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/best_bali_tour_package_from_india_for_a_fun_vacation_and_holiday/6.webp" alt="holiday trip to bali" />
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
                                                            <h5 className="mb-2">Best Bali Tour Package From India for Fun Vacation</h5>
                                                            <p >The best Bali tour package from India is a mix of land and sea trips. The best way to
                                                                experience the culture, food, and sights of Bali is by flying into Denpasar (from India) and
                                                                opting for a rental car or bicycle to explore the island. A drive around the outskirts of
                                                                Denpasar will give you a flavor of the island, but once you get closer to the greatest cultural
                                                                centers like Kuta and Seminyak, you’ll want to take a tour. A trip to Bali is an experience so
                                                                wonderful and amazing that it is hard to explain it in words. The moments created on your
                                                                Bali trip are unforgettable and unmatchable.</p>



                                                        </section>
                                                        <section className='set_padding'>
                                                            <p >Bali is a beautiful and wonderful island and it is the perfect place that you can always choose
                                                                to explore on your own or with a tour. The options for eco-friendly tours vary depending on
                                                                your budget. For those looking for a more luxurious Bali tour, horseback riding, and elephant
                                                                trekking can all be arranged, among other activities. Luxury hotels abound on the island and
                                                                are perfect for rest following a more vigorous day of touring. If you are planning on traveling
                                                                independently, be sure to bring affordable food, water, and sunscreen, as well as clothing
                                                                that can adapt to a variety of climates. There are a lot of fun activities to enjoy in Bali no
                                                                matter if you visit the place alone or with your family.</p>
                                                            <p >You can go snorkeling at Blue Lagoon. For that who love animals and adventures, Bali has
                                                                its special Safari and Marine Park. Not only this, Bali is a place that lets you enjoy the
                                                                Sacred Monkey Forest Sanctuary. Every location in Bali is so beautiful and captivating that
                                                                you would just want to have your camera ready and click the best shot. Bali is a place where
                                                                you are sure to create innumerable memories and appreciate them forever in your life. For
                                                                pilgrims, Bali also has the Uluwatu Temple which is sacred and peaceful to visit on your trip.</p>
                                                            <p >Having said enough, what is stopping you from enjoying your Bali trip and going on the Bali
                                                                holidays from India? Bali is beautiful and one of the cleanest tourist destinations. A trip to
                                                                Bali is like giving relaxation to your eyes, mind, body, and soul altogether. And you can do
                                                                that by taking this best Bali tour package for couples from India. Couples can always explore
                                                                new and unseen locations in Bali and enhance their experience even more. They can click
                                                                mesmerizing pictures and do a lot of other activities in Bali.</p>
                                                            <p>This couple tour package to Bali from India comes with a tour plan wherein you will be
                                                                explained about everything that you will be able to enjoy on your tour. Not only this, this
                                                                amazing and best Bali tour package for couples from India is very affordable and absolutely
                                                                budget friendly for you. You can have it now to enjoy the best deals. So, without waiting,
                                                                take this amazing and the best tour package for Bali. Get in touch with a TripzyGo tour
                                                                executive now and have the best Bali package for couples booked for yourself on the best
                                                                deals.</p>
                                                        </section>
                                                    </article>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="description mb-2">
                                    <div className="row">
                                        <div className="col-lg-12 col-md-6 mb-2 ">
                                            <div className="desc-box bg-grey p-4 rounded ">
                                                <h5 class="mb-2">Overview</h5>
                                                <div>When you’re thinking about vacations and holidays, you want to spend your time at a cool and adventurous place which is also exciting and enchanting for you. </div>
                                                <div class="mb-0">Holiday trip to Bali is a blend of everything with amazing beaches, hot volcanoes, and other fantastic places and locations.</div>
                                                <div>Being in Bali, you can enjoy the sight of the volcanoes, indulge in water sports at the beaches, or just enjoy some fun activities at the beaches and other sites.</div>
                                                <div>Bali holidays from India will be one of the most wholesome experiences in your life. </div>
                                                <div>You definitely can’t miss out on this experience, especially when you have the best Bali tour package from India available at your disposal.</div>
                                                <div>Get in touch with a TripzyGo travel specialist and book a Bali tour package from India now for a fun vacation and holiday with your friends and family.</div>
                                            </div>
                                        </div>


                                    </div>
                                </div>

                                <div className="tour-includes mb-4">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td><i className="fa fa-clock-o pink mr-1" aria-hidden="true"></i> Days : 05 Nights/ 06Days</td>
                                                <td><i class="fa fa-group pink mr-1" aria-hidden="true"></i> People : 1</td>

                                            </tr>
                                            <tr>
                                                <td><i class="fa fa-inr pink mr-1" aria-hidden="true"></i> Total Tour Cost : INR 28,500/-* </td>
                                                <td><i class="fa fa-bed pink mr-1" aria-hidden="true"></i> Hotel : 5 star</td>
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
                                                    <h5 class="mb-0"><span>Day 1</span> - Arrive in Bali</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "block" }}>
                                                    <div class="inner">
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Upon your arrival at the Bali Airport, our tour representative will meet you at the airport and helps you with an assisted transfer to the hotel. </div>
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> As you re at the airport, notice that it is a wonderful example of traditional culture, simplicity, and modernity. </div>
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Continue to the hotel. </div>
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> On the way, you come across a huge statue of war scene between Karna and Gatotkacha from the Hindu epic, Mahabharata.</div>
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After completing the check-in formalities, the day is now at leisure. </div>
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Explore this beautiful and tranquil island on your own.</div>
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Overbnight stay at Bali.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 2</span>  - Full Day Benoa Beach in Bali</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Post breakfast on day 2, h ad to Tanjung Benoa beach for partaking in water sports, away from the chaos of the city life. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> The beach is located northwards of Nusa Dua and offers several watersports activitie such as banana boat ride, jet skiing, and parasailing. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> The shores also have several restaurants and beach shacks where you can enjoy drinks and sumptuous delicacies of your choice.  </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> The evening is scheduled for a visit to southern Bali, offering an insight into the region's soul.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Visit the popular Uluwatu temple, placed on a cliffto , at a height of 825 feet. From the temple, relish the views of the sprawling Indian Ocean and the sun setting on the horizon. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Those who are not interested in Parasailing will wait for the rest to finish the activity.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Later on, you can enjoy Kecak Dance performance (optional), after sunset. Kecak and Fire Dance is dreamlike and transports you into another world.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> As the episode of Lanka Dehan from Ramayana is being showcased, listen to the gripping chant of Kecak, Kecak' in the background.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Return to the hotel in the stay at the hotel in Bali.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 3</span> - Bali - Kintamani Volcano Tour & Ubud Village</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> In the morning, enjoy breakfast. Later, enjoy an excursion to the Kintamani Volcano.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> This is one of the most popular day tours in Bali, offering a sneak- peek into the life of the Balinese people.  </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> During the tour, visit the Batuan village which is known for traditional batik and hand weavings, Mas village is known for wood carvin s and then drive past Celuk village, known for silver and gold works. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Next, the visit is to the popular historical and ancient Hindu temples of Bali.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Now, visit Mount Batur and Lake Batur in Kintamani village for treating eyes to the breathtaking views of the surroundings. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> The day comes to an end in the popular Ubud market. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Get your hands on some wonderful souvenirs.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Later on, if you want, you can attend Barong Dance performance in Kintamani (optional). </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> This is an extraordinary Balinese dance performance of about an hour, showcasing an ever on-going hypothetical war between goodness and badness.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Return to the hotel after t Bali.</div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 4</span> - Transfer to Private Pool Villa </h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> On the 4th day of the tour, after having a sumptuous breakfast y u will be transferred to the private pool villa where you will spend your next 2 nights. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> You will have an assisted check-in at the Villa. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> The rest of the day is at your leisure. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> You can enjoy your time in the villa or you can st oll around the market, it is your choice.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> In the evening relax with authentic Balinese massage.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Have a scrumptious dinner at the Villa.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Overnight stay in the Vill in Bali.</div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 5</span> - Tanah Lot Sunset Tour</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> On the 5th day of the tour, you will have a delicious breakfast.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> The rest of the morning is at your leisure. In the afternoon, get ready for visiting the popular Tanah Lot Templ .</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> One of the most important landmarks in Bali, this temple is known for a stunning offshore setting and wonderful views of the sunset.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Located on the top of a cliff, this is an ancient Hindu sacred site with the sea waters in the background. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Close to the temple are several shops, restaurants, and a cultural park that hosts dance performances regularly.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Overnight stay at the Villa in Bali.</div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 6</span> - Departure from Bali</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Today is the last day of your tour. Enjoy your breakfast.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> The rest of theday is at leisure. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> You can explore the local market of Bali and buy souvenirs for your loved ones.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Later on, get timely transferred to the airport to board the flight for your onward journey.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Tour ends but memories always remains with you.</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-6 mb-2" id='inclusions'>
                                            <div class="desc-box bg-grey p-4 rounded">
                                                <h5 class="mb-2">Inclusions</h5>
                                                <ul>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> 05 Nights Accommodation</li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> BB Basis</li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Meet & Greet assistance at the airport and transfer directly to your hotel, Day at leisure</li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Return Airport & Inter Hotel transfer by Pvt Basis</li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> 02 Hours of Authentic Balinese Massage</li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Uluwatu sunset temple Tour including Kecak dance</li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Full Day Kintamani tour with Ubud Village on Pvt Basis</li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Half Day Tour with Benoa water sports including 1 x roun of Banana boat, Parasailing / flying fish and Jet skii (parasailing subject to weather) on private transfers</li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Transfers with air-conditioned vehicle</li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> English speaking driver cum guide assistance</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-6 mb-2" id='exclusions'>
                                            <div class="desc-box bg-grey p-4 rounded">
                                                <h5 class="mb-2">Exclusions</h5>
                                                <ul>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Flights, Trains, Ferries etc</li>
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
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Swoosh on the Bali Swing</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Journey to Mount Batur</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Witness the Lovely Tegenungan Cascade</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Wonder about Tanah Parcel Sanctuary</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Investigate Bali Safari and Marine Park</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Surfing at Kuta</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Drink from the Waters at Goa Gajah</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i>  Visit Tegallalang Rice Porches</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Experience Untamed life at Bali Zoo</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Visit Ulun Danu Sanctuary</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Go for a Sprinkle at Waterbom</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i>  Have Some good times at Ubud Monkey Woods</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Chill at Sundays Ocean side Club</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Investigate the Bali Bird Park</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Go through a Day at Tukad Cepung Cascade</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Wonder about Uluwatu Sanctuary</div>

                                            </div>
                                        </div>
                                        <div className="description mb-2" id="places-to-eat">
                                            <div className="row">
                                                <div className="col-lg-12 col-md-12 mb-2 ">
                                                    <div className="desc-box bg-grey p-4 rounded ">
                                                        <h5 className="mb-2">Best Cafes</h5>
                                                        <div>Bali is a fantastic location in Indonesia which makes for an ideal getaway destination decorated with sea shores and segregated at this point flawless islands. Bali and India have some normal things; however, food isn't one of them. For Indians visiting Bali for a honeymoon or a family vacation....</div>
                                                        <a href="/blogs/top-twelve-best-indian-restaurants-in-bali-a-guide-to-tastes-flavors" className="read-more-link" target="_blank" ><button class="white bg-theme p-1 px-2" style={{ float: "right", margin: "-10px", fontSize: "11px" }}>Read More</button></a>

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
                                                                        <h5 className="mb-0">Where is Bali situated?</h5>
                                                                    </div>
                                                                    <div className="accrodion-content" style={{ display: "block" }} >
                                                                        <div className="inner">
                                                                            <div className="mb-0">Bali is an island in the Indian Ocean and a province of Indonesia. It is located two miles east of Java.</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accrodion">
                                                                    <div className="accrodion-title rounded">
                                                                        <h5 className="mb-0">What are the popular places to travel to Bali?</h5>
                                                                    </div>
                                                                    <div className="accrodion-content" style={{ display: "none" }} >
                                                                        <div className="inner">
                                                                            <div className="mb-0">Whenever you plan a holiday trip to Bali, then definitely visit the prime locations of Bali like:</div>
                                                                            <div>●	Waterbom Bali.</div>
                                                                            <div>●	Sacred Monkey Forest Sanctuary. </div>
                                                                            <div>●	Wildlife Areas. </div>
                                                                            <div>●	Tegalalang Rice Terrace. </div>
                                                                            <div>●	Tanah Lot Temple. </div>
                                                                            <div>●	Uluwatu Temple. </div>
                                                                            <div>●	Bali Zoo. </div>
                                                                            <div>●	Campuhan Ridge Walk.</div>
                                                                            <div>●	Mount Batur. </div>

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accrodion">
                                                                    <div className="accrodion-title rounded">
                                                                        <h5 className="mb-0">What is the best way to visit Bali?</h5>
                                                                    </div>
                                                                    <div className="accrodion-content" style={{ display: "none" }} >
                                                                        <div className="inner">
                                                                            <div className="mb-0">Getting to Bali by sea is very popular as there are several cruise ships docked in Bali, but you board from Singapore or Sumatra first. However, the best way to travel to Bali is by air, as international and domestic flights arrive regularly at Denpasar International Airport.</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accrodion">
                                                                    <div className="accrodion-title rounded">
                                                                        <h5 className="mb-0">Is it possible to change the best Bali tour package from India?</h5>
                                                                    </div>
                                                                    <div className="accrodion-content" style={{ display: "none" }} >
                                                                        <div className="inner">
                                                                            <div className="mb-0">Of course, you can because these packages come with a customization option, so it is possible to modify them accordingly. </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accrodion">
                                                                    <div className="accrodion-title rounded">
                                                                        <h5 className="mb-0">How to plan Bali holidays from India?</h5>
                                                                    </div>
                                                                    <div className="accrodion-content" style={{ display: "none" }} >
                                                                        <div className="inner">
                                                                            <div className="mb-0">Whenever planning a holiday in Bali, remember the Best Bali Tour Packages from India that make your trip fun and impeccable. It gives you the best deals and discounts on a low budget. </div>
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
                                <LocationMap mapLink="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1010295.9966397727!2d114.51106202453335!3d-8.45371377682995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd141d3e8100fa1%3A0x24910fb14b24e690!2sBali%2C%20Indonesia!5e0!3m2!1sen!2sin!4v1663652178795!5m2!1sen!2sin"></LocationMap>

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