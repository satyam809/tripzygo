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
import LocationMap from '../../components/Package_Description/locationMap';
import RelatedPackage from "../../components/Package_Description/RelatedPackages"
import axios from 'axios';
import { useEffect } from 'react'
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

                <title>TripzyGo - Book Bali Tour Package For Couple From India - Bali Trip For Couple</title>
                <meta name="description" content="Get a romantic Bali tour package for couple from India. We offer soulmate special Bali holidays from India. Book your dream Bali trip for couple now!" />
                <meta name="keywords" content="Bali tour package for couple from India, Bali holidays from India, Bali trip for couple" />
                <link rel="icon" href="/icon.png" />
                <link rel="canonical" href="https://www.tripzygo.in/packages/blissful-bali-tour-package-for-couple-from-india" />
                <meta property="og:url" content="https://www.tripzygo.in/packages/blissful-bali-tour-package-for-couple-from-india" />
                <meta property="og:title" content="Book Bali Tour Package For Couple From India - Bali Trip For Couple" />
                <meta property="og:description" content="Get a romantic Bali tour package for couple from India. We offer soulmate special Bali holidays from India. Book your dream Bali trip for couple now!" />
                <meta property="og:image" content="https://www.tripzygo.in/images/international_packages/blissful_bali_tour_package_for_couple_from_india/1.webp" />
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
                                        <h2 className="mb-1">Blissful Bali Tour Package For Couple From India </h2>

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
                                                        <img className='blog_image' src="/images/international_packages/blissful_bali_tour_package_for_couple_from_india/1.webp" alt="Bali tour package for couple from India" />

                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/blissful_bali_tour_package_for_couple_from_india/2.webp" alt="Bali tour package for couple from India" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/blissful_bali_tour_package_for_couple_from_india/3.webp" alt="Bali holidays from India" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/blissful_bali_tour_package_for_couple_from_india/4.webp" alt="Bali holidays from India" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/blissful_bali_tour_package_for_couple_from_india/5.webp" alt="Bali trip for couple" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/blissful_bali_tour_package_for_couple_from_india/6.webp" alt="Bali trip for couple" />
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
                                                        <img className='blog_image' src="/images/international_packages/blissful_bali_tour_package_for_couple_from_india/1.webp" alt="Bali tour package for couple from India" />

                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/blissful_bali_tour_package_for_couple_from_india/2.webp" alt="Bali tour package for couple from India" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/blissful_bali_tour_package_for_couple_from_india/3.webp" alt="Bali holidays from India" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/blissful_bali_tour_package_for_couple_from_india/4.webp" alt="Bali holidays from India" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/blissful_bali_tour_package_for_couple_from_india/5.webp" alt="Bali trip for couple" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/blissful_bali_tour_package_for_couple_from_india/6.webp" alt="Bali trip for couple" />
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
                                                            <h5 className="mb-2">Blissful Bali Tour Package For Couples From India</h5>
                                                            <p >If you are looking to escape the hustle and bustle of city life, Bali is the perfect destination.
                                                                With its stunning beaches and lush green forests, Bali is a paradise on earth. I&#39;ve written this
                                                                article to share my experiences while on my trip, as well as some tips and advice for those
                                                                planning a trip to Bali. When planning your trip to Bali, make sure to factor in the time
                                                                necessary to travel between the different areas of the island. Bali is huge, so it&#39;s easy to get
                                                                lost if you&#39;re not familiar with the layout. However, the fun and excitement that you are going
                                                                to experience in Bali are definitely worth everything.</p>



                                                        </section>
                                                        <section className='set_padding'>
                                                            <p >When in Bali, you can always enjoy a lot of activities and have the most wonderful memories
                                                                of your life. On your trip to Bali, you can visit the stunning rice terraces of Gandharva
                                                                Mahameru. Not only this but when you go on a trip to Bali with your family or friends you can
                                                                also hike to the top of Mount Batur. Along with that, you have the advantage to explore the
                                                                rice fields of Kintamani. On your amazing holiday trip to Bali, you can also relax on the
                                                                beautiful beaches of Seminyak and Padang Bai. Not only this, you have the privilege to stay
                                                                in a villa in Ubud and enjoy a traditional Balinese dance performance. Then there are several
                                                                beautiful, sacred, and peaceful Buddhist temples in Ubud.</p>
                                                            <p >Along with this, the food at Bali is scrumptious one that you can ever have! While you could
                                                                be enjoying your adventurous and amazing trip to Bali on your holidays, you can also enjoy
                                                                a delicious dinner at a local restaurant in Denpasar. If you are very tired of your work life and
                                                                you are on a holiday trip to Bali to relax your mind and body, then Bali is the perfect place for
                                                                you. Here you can spend the night at a nearby yoga retreat center where you can learn a lot
                                                                of new things and give yourself a good relax.</p>
                                                            <p >So wait for no further and grab this best Bali tour package from India and have the most
                                                                awaited holiday trip to Bali. Enjoy life in Bali and get to know the rich culture and traditions of
                                                                the place. Bali has a lot in store for everyone visiting there. Especially for couples, a trip to
                                                                Bali is a good way to begin their new journey together. Also, this amazing holiday tour
                                                                package to Bali from India is available to you at decent prices. Not only this but you will also
                                                                be offered discounts and the best deals that would automatically make your trip to Bali an
                                                                amazing one and you are going to create ample beautiful memories with your friends and
                                                                family members.</p>
                                                            <p>So, without waiting, take this amazing and the best tour package for Bali. Get in touch with a
                                                                TripzyGo tour executive now and have the best Bali package booked for yourself on the best
                                                                deals. The tour plan is made available to you and it can be customized as per your
                                                                requirements.</p>



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
                                                <div>When you’re thinking about a romantic getaway, that too your honeymoon, there could be nothing more magical and mesmerising than Bali trip for couple.</div>
                                                <div class="mb-0"> An international location, this place will take you and your partner to a whole other enchanting experience with its magical beaches, volcanoes, and temples.</div>
                                                <div>It would be the best destination when you’re planning to go between April to October because Bali is in all its charm, beauty, and glory at this time with sweet showers of rain and pleasant weather. </div>
                                                <div>This time around Bali is also cheaper with the shopkeepers and vendors being more generous with their prices due to sales and promotions looking at the full season of the place.</div>
                                                <div>At this time of the year, you can also witness the Kite Festival in Bali and have some soothing time flying kites with your partner.</div>
                                                <div>With every amazing things to do and witness in Bali, there could not be a more ideal Honeymoon Package than this which contains everything that will make your trip to Bali a heavenly experience, making you feel as if you’re in a Lover’s Paradise.</div>
                                                <div>So, what’s the wait? Book your Bali tour package for couple from India now and surprise your partner with amazing Bali holidays from India!</div>
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
                                                <td><i class="fa fa-inr pink mr-1" aria-hidden="true"></i> Total Tour Cost : INR 16,700/-*</td>
                                                <td><i class="fa fa-bed pink mr-1" aria-hidden="true"></i> Hotel : 3 star</td>
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
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> The rest of theday is at leisure. You can explore the local market of Bali and buy souvenirs for your loved ones.</div>
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
                                                                        <h5 className="mb-0">Which types of clothes can we wear in Bali?</h5>
                                                                    </div>
                                                                    <div className="accrodion-content" style={{ display: "block" }} >
                                                                        <div className="inner">
                                                                            <div className="mb-0">Bali allows you to wear anything you want. There are no restrictions. But when you visit the temple in Bali, both men and women should be covered and ignore the flimsy clothes. Putting a sarong or a scarf under the temple is compulsory.</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accrodion">
                                                                    <div className="accrodion-title rounded">
                                                                        <h5 className="mb-0">What are the best things to do in Bali? </h5>
                                                                    </div>
                                                                    <div className="accrodion-content" style={{ display: "none" }} >
                                                                        <div className="inner">
                                                                            <div className="mb-0">The Island of Bali is one the top holiday destinations in the world and has a long list of fun things to do in Bali; that you can enjoy with your family or partner. You can try the following outdoor fun: </div>
                                                                            <div>●	Rush on the Bali Swing</div>
                                                                            <div>●	Trek to Mount Batur</div>
                                                                            <div>●	Chilling out under the beautiful Tegenungan Waterfall</div>
                                                                            <div>●	Enjoy Bali safari and Marine park</div>
                                                                            <div>●	Surfing on waves</div>
                                                                            <div>●	Visit on Tegallalang Rice Terraces</div>
                                                                            <div className="mb-0">To enjoy all these adventurous things, pick the best Bali holidays from India.</div>

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accrodion">
                                                                    <div className="accrodion-title rounded">
                                                                        <h5 className="mb-0">Can we enjoy kayaking and canoeing in Bali?</h5>
                                                                    </div>
                                                                    <div className="accrodion-content" style={{ display: "none" }} >
                                                                        <div className="inner">
                                                                            <div className="mb-0">Yes, Bali also offers water sports like kayaking and canoeing. The east coast of Bali is known for its attractive sights and kayaking activity. Many tour operators and travel agencies provide activities like kayaking and canoeing. </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accrodion">
                                                                    <div className="accrodion-title rounded">
                                                                        <h5 className="mb-0">How can I plan a  Bali trip for a couple?</h5>
                                                                    </div>
                                                                    <div className="accrodion-content" style={{ display: "none" }} >
                                                                        <div className="inner">
                                                                            <div className="mb-0">To enjoy the Bali trip with a couple, go for a Bali tour package from India, offering the best itineraries, accommodations, great destinations, perfect outdoor activities, and a lot more. It eliminates the hassle of finding the best hotels, resorts, etc., that fit your budget. Tripzygo International offers Blissful Bali Tour Package For Couple From India, with a customized option. </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accrodion">
                                                                    <div className="accrodion-title rounded">
                                                                        <h5 className="mb-0">Can we enjoy casinos in Bali?</h5>
                                                                    </div>
                                                                    <div className="accrodion-content" style={{ display: "none" }} >
                                                                        <div className="inner">
                                                                            <div className="mb-0">Unfortunately, Bali has no casinos. There are no casinos or poker rooms here, in fact, activities like gambling and betting are illegal in Bali. As believed, these games are against their religion. </div>
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