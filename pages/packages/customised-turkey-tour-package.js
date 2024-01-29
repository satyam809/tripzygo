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

                <title>TripzyGo - Book A Customised Turkey Tour Package For Couple - Turkey Honeymoon</title>
                <meta name="description" content="Plan a romantic getaway with a customised Turkey tour package for couple. With this Turkey package for couple you can explore all the best that Turkey has to offer." />
                <meta name="keywords" content="Turkey Tour Package, Turkey package for couple, customised turkey tour package" />
                <link rel="icon" href="/icon.png" />
                <link rel="canonical" href="https://www.tripzygo.in/packages/customised-turkey-tour-package" />
                <meta property="og:url" content="https://www.tripzygo.in/packages/customised-turkey-tour-package" />
                <meta property="og:title" content="Book A Customised Turkey Tour Package For Couple - Turkey Honeymoon" />
                <meta property="og:description" content="Plan a romantic getaway with a customised Turkey tour package for couple. With this Turkey package for couple you can explore all the best that Turkey has to offer." />
                <meta property="og:image" content="https://www.tripzygo.in/images/international_packages/a_luxurious_holiday_with_a_customised_turkey_tour_package/1.webp" />
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
                                        <h2 className="mb-1">Customised Turkey Tour Package</h2>

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
                                                        <img className='blog_image' src="/images/international_packages/a_luxurious_holiday_with_a_customised_turkey_tour_package/1.webp" alt="Turkey Tour Package" />

                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/a_luxurious_holiday_with_a_customised_turkey_tour_package/2.webp" alt="Turkey Tour Package" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/a_luxurious_holiday_with_a_customised_turkey_tour_package/3.webp" alt="Turkey package for couple" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/a_luxurious_holiday_with_a_customised_turkey_tour_package/4.webp" alt="Turkey package for couple" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/a_luxurious_holiday_with_a_customised_turkey_tour_package/5.webp" alt="Customised Turkey Tour Package" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/a_luxurious_holiday_with_a_customised_turkey_tour_package/6.webp" alt="Customised Turkey Tour Package" />
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
                                                        <img className='blog_image' src="/images/international_packages/a_luxurious_holiday_with_a_customised_turkey_tour_package/1.webp" alt="Turkey Tour Package" />

                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/a_luxurious_holiday_with_a_customised_turkey_tour_package/2.webp" alt="Turkey Tour Package" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/a_luxurious_holiday_with_a_customised_turkey_tour_package/3.webp" alt="Turkey package for couple" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/a_luxurious_holiday_with_a_customised_turkey_tour_package/4.webp" alt="Turkey package for couple" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/a_luxurious_holiday_with_a_customised_turkey_tour_package/5.webp" alt="Customised Turkey Tour Package" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/a_luxurious_holiday_with_a_customised_turkey_tour_package/6.webp" alt="Customised Turkey Tour Package" />
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
                                                <div>Turkey is a majestic place with everything luxury and royal to enjoy. </div>
                                                <div class="mb-0">The rich Turkish cuisines with sweet temptations like Turkish Delights and Baklavas, the royal Turkish baths called the Hammams, the famous Turkish Bazaar, there’s a lot to witness and enjoy in Turkey.</div>
                                                <div>Its food is delicious and appetising, especially the bread and the beer. The hot air balloon ride is also famous in Turkey and you must surely go for it once in your life.</div>
                                                <div>The entire time you’re in Turkey would be an experience of a lifetime for you with cherishing and unforgettable memories and moments.</div>
                                                <div>Enjoy that experience with a very special, affordable, and customised Turkey Tour Package designed by TripzyGo.</div>
                                                <div>With this 6 Nights and 7 Days Turkey package for couple, you’ll have the most amazing time of your life in a country so majestic, rich, and royal.</div>
                                                <div>What are you waiting for? Get in touch with a TripzyGo Travel Executive and book your Turkey tour package now!
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </div>

                                <div class="tour-includes mb-4">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td><i className="fa fa-clock-o pink mr-1" aria-hidden="true"></i> Days : 06 nights & 07 days</td>
                                                <td><i class="fa fa-group pink mr-1" aria-hidden="true"></i> People : 1</td>

                                            </tr>
                                            <tr>
                                                <td><i class="fa fa-inr pink mr-1" aria-hidden="true"></i> Total Tour Cost : INR 89,750/-*  </td>
                                                <td><i class="fa fa-bed pink mr-1" aria-hidden="true"></i> Bedroom : 01 Double Rooms</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div class="description mb-2">
                                    <div class="row">


                                        <div id="iternary" class="accrodion-grp faq-accrodion mb-4" data-grp-name="faq-accrodion">
                                            <div class="accrodion active">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 1</span> - Arrive at Istanbul</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "block" }}>
                                                    <div class="inner">
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Meet and greet at Istanbul airport transfers to hotel rest of the day free fo Leisure.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 2</span> - Istanbul</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i>  After breakfast proceed for Full Day City Tour with Hagia Sophia, Topkapi Palace and Grand Bazaar.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i>  Overnight stay at Istanbul hotel</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 3</span> - Dolmabahce Palace</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true"
                                                            style={{ fontSize: "13px" }}></i> After breakfast proceed for Europe and Asia Tour with Dolmabahce Palace, overnight stay at Istanbul hotel.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 4</span> -  Cappadocia</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true"
                                                            style={{ fontSize: "13px" }}></i> After breakast Check out from hotel proceed for Cappadocia check in at hotel rest of the day free for leisure.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 5</span> -  Cappadocia tour</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true"
                                                            style={{ fontSize: "13px" }}></i> After breakfast proceed forFull Day Cappadocia Tour with Goreme & Uchisar, Overnight stay at Cappadocia hotel.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 6</span> - Ihlara Valley tour</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true"
                                                            style={{ fontSize: "13px" }}></i> After breakfast proceed for Derinkuyu underground city and Ihlara Valley tour.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 7</span>- Transfer to airport</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true"
                                                            style={{ fontSize: "13px" }}></i> After breakfast transfers to airport to board your flight and fly back to India.</div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div class="col-lg-12 col-md-6 mb-2">
                                            <div class="desc-box bg-grey p-4 rounded">
                                                <h5 class="mb-2">Inclusions</h5>
                                                <ul>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Return Airport transfers</li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Daily breakfastat hotel. </li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Full Day Turkey City Tour with Hagia Sophia, Topkapi Palace and Grand Bazaar</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> Europe and Asia Tour with Dolmabahce Palace from Istanbul</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> Full Day Cappadocia Tour with Goreme & Uchisar</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> Derinkuyu underground city and Ihlara Valley tour feom Cappadocia</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> GST & Visa Assisstance</li>



                                                </ul>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-6 mb-2">
                                            <div class="desc-box bg-grey p-4 rounded">
                                                <h5 class="mb-2">Exclusions</h5>
                                                <ul>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Flight ticket</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> PCR Test </li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Visa Fee(Directly payable at VFS at the time of biometric)</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Travel Insurance</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> TCS 5%</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Additional costin case of Lockdown if any</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Tips and porterchargers. </li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Cost of anyexcursions not included package. </li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Early check inand late check out at the hotel as per availability (Extra Charges MayApply). </li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Items of apersonal nature such as phone calls, pay movies, room services, mini barslaundries or other expenditures during the tour.</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Additional Costsdue to Flight Cancellations, Road blocks, natural calamities. </li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Local taxes, ifany. </li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> TransferSurcharges in case of public holiday.</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Anything notmentioned in Inclusions Part.</li>

                                                </ul>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-6 mb-2">
                                            <div class="desc-box bg-grey p-4 rounded">
                                                <h5 class="mb-2">Things To Do</h5>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Pamukkale Warm Pools: Take A Characteristic Sauna</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Goreme Public Park: Investigate Limestone Arrangements</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Cemberlitas Hamami: Partake in A Turkish Shower</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Dervish: Watch The Holy Dance</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Vestiges Of Ephesus: Visit The Remnants</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Nargile Bars: Attempt Turkish Tobacco</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Archeological Site Of Troy: An Outing Back In Time</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i>  Kapali Carsisi: Gather Ancient rarities</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Mount Nemrut: Go Climbing</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> The Bosphorus Ship Ride: See The Perspectives!</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Ankara Palace: Return to The Set of experiences</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="single-map mb-4">
                                    <h4>Map</h4>
                                    <div class="map rounded overflow-hidden">
                                        <div style={{ width: "100%" }}>
                                            <iframe class=" rounded overflow-hidden" height="400" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12743709.802596604!2d26.17583854226598!3d38.75780273089607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b0155c964f2671%3A0x40d9dbd42a625f2a!2sTurkey!5e0!3m2!1sen!2sin!4v1661767056360!5m2!1sen!2sin"></iframe>
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