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

                <title>TripzyGo - Exciting Trip To Cairo with the best Cairo Tour Package  </title>
                <meta name="description" content="Looking for an exciting Cairo Tour Package from India? Check our affordable Cairo Tour Package! Get ready for the adventure of a lifetime on your trip to Cairo." />
                <meta name="keywords" content="Cairo Tour Package from India, Cairo tour package, trip to Cairo" />
                <link rel="icon" href="/icon.png" />
                <link rel="canonical" href="https://www.tripzygo.in/packages/cheap-holiday-package-to-cairo" />
                <meta property="og:url" content="https://www.tripzygo.in/packages/cheap-holiday-package-to-cairo" />
                <meta property="og:title" content="Exciting Trip To Cairo with the best Cairo Tour Package " />
                <meta property="og:description" content="Looking for an exciting Cairo Tour Package from India? Check our affordable Cairo Tour Package! Get ready for the adventure of a lifetime on your trip to Cairo." />
                <meta property="og:image" content="https://www.tripzygo.in/images/international_packages/cairo_tour_package_an_entry_into_history/1.webp" />
            </Head>
<ShareButton/>
<PopularityWidget packageCount="71" progressBarPercentage="70%"/>
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
                                        <h2 className="mb-1">Cheap Holiday Package To Cairo</h2>

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
                                                        <img className='blog_image' src="/images/international_packages/cairo_tour_package_an_entry_into_history/1.webp" alt="Cairo Tour Package from India" />

                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/cairo_tour_package_an_entry_into_history/2.webp" alt="Cairo Tour Package from India" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/cairo_tour_package_an_entry_into_history/3.webp" alt="Cairo tour package" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/cairo_tour_package_an_entry_into_history/4.webp" alt="Cairo tour package" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/cairo_tour_package_an_entry_into_history/5.webp" alt=" trip to Cairo" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/cairo_tour_package_an_entry_into_history/6.webp" alt=" trip to Cairo" />
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
                                                        <img className='blog_image' src="/images/international_packages/cairo_tour_package_an_entry_into_history/1.webp" alt="Cairo Tour Package from India" />

                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/cairo_tour_package_an_entry_into_history/2.webp" alt="Cairo Tour Package from India" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/cairo_tour_package_an_entry_into_history/3.webp" alt="Cairo tour package" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/cairo_tour_package_an_entry_into_history/4.webp" alt="Cairo tour package" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/cairo_tour_package_an_entry_into_history/5.webp" alt=" trip to Cairo" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/cairo_tour_package_an_entry_into_history/6.webp" alt=" trip to Cairo" />
                                                    </div>
                                                </SwiperSlide>

                                            </Swiper>





                                        </div>

                                    </div>
                                </div>



                                <div class="description mb-2">
                                    <div class="row">
                                        <div class="col-lg-12 col-md-6 mb-2 ">
                                            <div class="desc-box bg-grey p-4 rounded ">
                                                <h5 class="mb-2">Overview</h5>
                                                <div>Pyramids and Sphinx, these words immediately take us to Egypt.</div>
                                                <div class="mb-0"> When you think of a trip to that place, what could be better than being in a place that captures the great pyramid of King Khufu and the oldest and biggest Sphinx ever.</div>
                                                <div>Well, if you’re trying to guess, we are talking about the Giza Pyramids Complext in Cairo.</div>
                                                <div>That would definitely be the most wonderful part of your Cairo trip. </div>
                                                <div>Not only that, but there are many more amazing places to visit in Cairo like other pyramids and sphinx, museums, etc.</div>
                                                <div>A trip to Cairo would be a wholesome and learning experience where you can know all about the great Egyptian culture and history.</div>
                                                <div>This Cairo Tour Package from India will offer you everything you seek on a wholesome trip to Cairo.</div>
                                                <div>The trip will leave you with memories and moments of a lifetime. Don’t wait up. Book your Cairo tour package now.</div>
                                            </div>
                                        </div>


                                    </div>
                                </div>

                                <div class="tour-includes mb-4">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td><i className="fa fa-clock-o pink mr-1" aria-hidden="true"></i> Days : 3 Nights/ 4 Days </td>
                                                <td><i class="fa fa-group pink mr-1" aria-hidden="true"></i> People : 1</td>

                                            </tr>
                                            <tr>
                                                <td><i class="fa fa-inr pink mr-1" aria-hidden="true"></i> Total Tour Cost : INR 79,200/-*</td>
                                                <td><i class="fa fa-bed pink mr-1" aria-hidden="true"></i> Hotel : 3 star</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div class="description mb-2">
                                    <div class="row">


                                        <div id="iternary" class="accrodion-grp faq-accrodion mb-4" data-grp-name="faq-accrodion" >
                                            <div class="accrodion active">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 1</span> - Arrival Cairo</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "block" }}>
                                                    <div class="inner">
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Arrival to Cairo airport, our representative will meet you in the airport then you will be transferred by an A/C car to your hotel.</div>
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Evening trip to attend Dinner Cruise  for 2 Hours including oriental Show and Tanura Show  Overnight in Cairo.</div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 2</span> - Cairo</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Breakfast. Start your tour visiting the Great Pyramids - Cheops, Chephren & Mykerions & Sphinx.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Then transfer to visit the step pyramids of zoser in Sakkara the first stone Building in the world, Memphis the first and the oldest  capital of Egypt.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Back to the hotel.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Overnight in Cairo.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 3</span> - Cairo</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Breakfast. Start your tour visiting the Egyptian Museum of antiquities. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> On display is rare collection of 5000 years of art the largest most precious collection of Egyptian art in the world.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Including an exhibit dedicated to the Tutankhamen collection of treasures, gold, and jewelry.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After a short drive to Old Cairo to  visit the hiding place of the holy family in Egypt on which place an old church ( Abu Serga ) is standing and the hanging church where the seat of the patriarch of Alexandria stayed for around 5 centuries then the oldest synagogue in Egypt and finally  Citadel of the Sultan Saladdin and Alabaster Mosque .</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Transfer back to hotel , overnight at hotel.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 4</span> - Depart Cairo</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Breakfast at Hotel , then Transfer to Visit Sultan Hassan Mosque , king Farouk mausoleum, the King of Egypt tell 1952 ,visit almoaez street with the oldest and the most Famous Mosques in Cairo. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Then drive to visit khan el khalily bazar. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Final Departure to Cairo Airport.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Check out from the hotel after breakfast then transfer back to Airport for your flight back.</div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div class="col-lg-12 col-md-6 mb-2">
                                            <div class="desc-box bg-grey p-4 rounded">
                                                <h5 class="mb-2">Inclusions</h5>
                                                <ul>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> 3 Nights hotel accommodation in Cairo on bed and breakfast basis</li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> 3 Day tour in Cairo</li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Entry Visa to Egypt, you don’t have to apply at the Egyptian Consulate</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> 1Dinner at Nile Cruise</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> All entrance Fees  During all Sightseeing in Cairo</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> All transfers in Private Vip mini Bus Model 2021</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> Daily 4 Bottle of Water 500 ML per Person</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> All your tours and excursions are by an A/C vehicle</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> English speaking expert guide</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> Our prices include all taxes and services</li>

                                                </ul>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-6 mb-2">
                                            <div class="desc-box bg-grey p-4 rounded">
                                                <h5 class="mb-2">Exclusions</h5>
                                                <ul>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> International Flights </li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Lunch & Dinner</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Personal items</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Tipping</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Any other items not mentioned</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Any Optional tours</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Drinks during meals</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-6 mb-2">
                                            <div class="desc-box bg-grey p-4 rounded">
                                                <h5 class="mb-2">Things To Do</h5>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> The Pyramids of Giza</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Egyptian Museum</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Islamic Cairo</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i>  Salah El Din Citadel</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Al-Muizz Li-Din Allah Al-Fatima Street</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Climb the Minaret at Bab Zuweila</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Khan El-Khalili</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Mosque-Madrassa of Sultan Hassan and Al-Rifa’I Mosque</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="single-map mb-4">
                                    <h4>Map</h4>
                                    <div class="map rounded overflow-hidden">
                                        <div style={{ width: "100%" }}>
                                            <iframe class=" rounded overflow-hidden" height="400" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d170128.7706423073!2d16.239975070708756!3d48.22082857344756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d079e5136ca9f%3A0xfdc2e58a51a25b46!2sVienna%2C%20Austria!5e0!3m2!1sen!2sin!4v1661766437778!5m2!1sen!2sin"></iframe>
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