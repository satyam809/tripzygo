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

                <title>TripzyGo - Book France Netherlands Tour Package - Vacation in France and Netherlands </title>
                <meta name="description" content="France Switzerland Italy tour package from India - We have the perfect France Switzerland Italy holiday package. Book now your France Italy Switzerland trip." />
                <meta name="keywords" content="france netherlands tour package, vacation in france and netherlands, holiday in france and netherlands" />
                <link rel="icon" href="/icon.png" />
                <link rel="canonical" href="https://www.tripzygo.in/packages/fantastic-france-netherlands-tour-package" />
                <meta property="og:url" content="https://www.tripzygo.in/packages/fantastic-france-netherlands-tour-package" />
                <meta property="og:title" content="Book France Netherlands Tour Package - Vacation in France and Netherlands " />
                <meta property="og:description" content="France Switzerland Italy tour package from India - We have the perfect France Switzerland Italy holiday package. Book now your France Italy Switzerland trip." />
                <meta property="og:image" content="https://www.tripzygo.in/images/international_packages/france_and_netherlands_tour_package_history_culture_and_romance_all_blended_in_one_exciting_trip/1.webp" />
            </Head>
<ShareButton/>
<PopularityWidget packageCount="75" progressBarPercentage="75%"/>
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
                                        <h2 className="mb-1">Fantastic France Netherlands Tour Package</h2>

                                    </div>
                                </div>
                                <div className="description-/images mb-4 overflow-hidden">
                                    <div className="thumbnail-/images position-relative">
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
                                                        <img className='blog_image' src="/images/international_packages/france_and_netherlands_tour_package_history_culture_and_romance_all_blended_in_one_exciting_trip/1.webp" alt="france netherlands tour package" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/france_and_netherlands_tour_package_history_culture_and_romance_all_blended_in_one_exciting_trip/2.webp" alt="france netherlands tour package" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/france_and_netherlands_tour_package_history_culture_and_romance_all_blended_in_one_exciting_trip/3.webp" alt="vacation in france and netherlands" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/france_and_netherlands_tour_package_history_culture_and_romance_all_blended_in_one_exciting_trip/4.webp" alt="vacation in france and netherlands" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/france_and_netherlands_tour_package_history_culture_and_romance_all_blended_in_one_exciting_trip/5.webp" alt="holiday in france and netherlands" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/france_and_netherlands_tour_package_history_culture_and_romance_all_blended_in_one_exciting_trip/6.webp" alt="holiday in france and netherlands" />
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
                                                        <img className='blog_image' src="/images/international_packages/france_and_netherlands_tour_package_history_culture_and_romance_all_blended_in_one_exciting_trip/1.webp" alt="france netherlands tour package" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/france_and_netherlands_tour_package_history_culture_and_romance_all_blended_in_one_exciting_trip/2.webp" alt="france netherlands tour package" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/france_and_netherlands_tour_package_history_culture_and_romance_all_blended_in_one_exciting_trip/3.webp" alt="vacation in france and netherlands" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/france_and_netherlands_tour_package_history_culture_and_romance_all_blended_in_one_exciting_trip/4.webp" alt="vacation in france and netherlands" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/france_and_netherlands_tour_package_history_culture_and_romance_all_blended_in_one_exciting_trip/5.webp" alt="holiday in france and netherlands" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/france_and_netherlands_tour_package_history_culture_and_romance_all_blended_in_one_exciting_trip/6.webp" alt="holiday in france and netherlands" />
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
                                                <div>Trips are for adding experiences and memories to life and the more experiences you can add, the better.  </div>
                                                <div class="mb-0">How about adding an experience that blends history, culture, and romance in one single tour package?</div>
                                                <div>Well, this special and exciting France and Netherlands tour package is designed for just that purpose. </div>
                                                <div>With a 5 Nights 6 Days package spread across stays in Amsterdam and Paris, you’ll have the time of your life on this trip.</div>
                                                <div>Enjoy the exciting and lively nightlife of Amsterdam, trailing your way through the beautiful canals and stunning architecture of the place while also learning the history behind those canals and architecture.</div>
                                                <div>Unwind your love and romance with your partner in the most romantic and beautiful city of Paris.</div>
                                                <div>With the perfect travel itinerary, this amazing France and Netherlands tour package is all you need for a lovely trip that would give you cherishable moments and memories for a lifetime.</div>
                                                <div>What are you waiting for? Book the tour package now by getting in touch with a TripzyGo travel executive.</div>
                                            </div>
                                        </div>


                                    </div>
                                </div>

                                <div className="tour-includes mb-4">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td><i className="fa fa-clock-o pink mr-1" aria-hidden="true"></i> Days : 5 Nights / 6 Days</td>
                                                <td><i class="fa fa-group pink mr-1" aria-hidden="true"></i> People : 1</td>

                                            </tr>
                                            <tr>
                                                <td><i class="fa fa-inr pink mr-1" aria-hidden="true"></i> Hotel  : 3 star</td>
                                                <td><i class="fa fa-inr pink mr-1" aria-hidden="true"></i> Total Tour Cost : INR 72,800/-* </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="description mb-2">
                                    <div className="row">



                                        <div id="iternary" class="accrodion-grp faq-accrodion mb-4" data-grp-name="faq-accrodion" >
                                            <div class="accrodion active">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 1</span> -  Arrival at Amsterdam</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "block" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i>  Meet and greet at Paris airport transfers to hotel , evening you will enjoy Amsterdam Canal Cruise.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i>  Overnight in hotel.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 2</span> - Amsterdam city tour </h5>
                                                </div>
                                                <div class="accrodion-content" stylee={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Morning breakfast at hotel.</div>
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Today you will enjoy the Volendam, Marken and Windmills Tour in Amsterdam.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Overnight in hotel.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 3</span> - Paris</h5>
                                                </div>
                                                <div class="accrodion-content" stylee={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Morning breakfast at hotel , after having morning breakfast at hotel you will be transfer to Paris from Amsterdam via train.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Evening for leisure , Overnight at hotel.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 4</span> - Paris city tour</h5>
                                                </div>
                                                <div class="accrodion-content" stylee={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Morning breakfast at hotel ,after having morning breakfast you will be transfer to Paris city tour, Overnight at hotel.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 5</span> - Cruise</h5>
                                                </div>
                                                <div class="accrodion-content" stylee={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Morning breakfast at hotel , after having morning breakfast at hotel so today you will enjoy 2nd level access of Eiffel Tower & Seine river cruise.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Overnight at hotel.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 6</span> - Transfer to Paris airport</h5>
                                                </div>
                                                <div class="accrodion-content" stylee={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Morning breakfast at hotel , after that you will be transfer to Paris airport,flight back to home.</div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div class="col-lg-12 col-md-6 mb-2">
                                            <div class="desc-box bg-grey p-4 rounded">
                                                <h5 class="mb-2">Inclusions</h5>
                                                <ul>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> 02 nights in Amsterdam</li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> 03 nights in Paris</li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Airport transfers</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> Paris - Amsterdam train tickets</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> Daily breakfast at hotel</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> Amsterdam Canal Cruise</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> Volendam, Marken and Windmills Tour in Amsterdam</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> Paris city tour ,Eiffel Tower tickets 2nd level</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> Tour to the Islands of Burano, Murano and Torcello in Venice</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> Vatican Museums, Sistine Chapel and St.Peter's Basilica in Rome</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-6 mb-2">
                                            <div class="desc-box bg-grey p-4 rounded">
                                                <h5 class="mb-2">Exclusions</h5>
                                                <ul>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Flight tickets </li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> PCR Test </li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Visa Fee (Directly payable at VFS at the time of biometric)</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Travel Insurance</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> TCS 5%</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Additional cost in case of Lockdown if any</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Tips and porter chargers. </li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Cost of any excursions not included package</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Early check in and late check out at the hotel as per availability (Extra Charges May Apply) </li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Items of a personal nature such as phone calls, pay movies, room services, mini bars laundries or other expenditures during the tour</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Additional Costs due to Flight Cancellations, Road blocks, natural calamities</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Local taxes, if any</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Transfer Surcharges in case of public holiday</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Anything not mentioned in Inclusions Part</li>

                                                </ul>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-6 mb-2">
                                            <div class="desc-box bg-grey p-4 rounded">
                                                <h5 class="mb-2">Things To Do</h5>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Watch the Nightfall from the Eiffel Pinnacle</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Take a Seine Stream Journey</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Walk around the Enchanting Old Quarters of Paris</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Make a Journey to Mont Holy person Michel</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Find the Appeal of Craftsmen's Towns in Provence</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Go to the Regal Melody at the Château de Versailles</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i>  Figure out how to Cook Exemplary French Food in Burgundy</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Climb the Cinque Terre</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Float through Venice in a Gondola</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Visit Tuscan Slope Towns by Bike or Vehicle</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Make Ideal Pasta in Florence</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> See a Show in Verona's Roman Field</div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="single-map mb-4">
                                    <h4>Map</h4>
                                    <div class="map rounded overflow-hidden">
                                        <div style={{ width: "110%" }}>

                                            <iframe class=" rounded overflow-hidden" height="400" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83998.76457430434!2d2.2769948739278623!3d48.85894658138313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis%2C%20France!5e0!3m2!1sen!2sin!4v1661765955570!5m2!1sen!2sin" width="600" ></iframe>
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
