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

                <title>TripzyGo - Egypt Tour Package - A Historic Trip To Egypt From India</title>
                <meta name="description" content="Plan your trip to Egypt from India with our customized packages. We offer a wide range of Egypt tour itinerary. Choose your Egypt tour package from India now." />
                <meta name="keywords" content="Egypt tour package from India, trip to Egypt from India, Egypt tour itinerary" />
                <link rel="icon" href="/icon.png" />
                <link rel="canonical" href="https://www.tripzygo.in/packages/egypt-tour-package-from-india" />
                <meta property="og:url" content="https://www.tripzygo.in/packages/egypt-tour-package-from-india" />
                <meta property="og:title" content="Egypt Tour Package - A Historic Trip To Egypt From India" />
                <meta property="og:description" content="Plan your trip to Egypt from India with our customized packages. We offer a wide range of Egypt tour itinerary. Choose your Egypt tour package from India now." />
                <meta property="og:image" content="https://www.tripzygo.in/images/international_packages/egypt_tour_package_from_india_a_historic_cruise_experience/1.webp" />
            </Head>
<ShareButton/>
<PopularityWidget packageCount="75" progressBarPercentage="75%"/>
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
                                        <h2 className="mb-1">Egypt Tour Package From India</h2>

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
                                                        <img className='blog_image' src="/images/international_packages/egypt_tour_package_from_india_a_historic_cruise_experience/1.webp" alt="Egypt tour package from India" />

                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/egypt_tour_package_from_india_a_historic_cruise_experience/2.webp" alt="Egypt tour package from India" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/egypt_tour_package_from_india_a_historic_cruise_experience/3.webp" alt="trip to Egypt from India" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/egypt_tour_package_from_india_a_historic_cruise_experience/4.webp" alt="trip to Egypt from India" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/egypt_tour_package_from_india_a_historic_cruise_experience/5.webp" alt="Egypt tour itinerary" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/egypt_tour_package_from_india_a_historic_cruise_experience/6.webp" alt="Egypt tour itinerary" />
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
                                                        <img className='blog_image' src="/images/international_packages/egypt_tour_package_from_india_a_historic_cruise_experience/1.webp" alt="Egypt tour package from India" />

                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/egypt_tour_package_from_india_a_historic_cruise_experience/2.webp" alt="Egypt tour package from India" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/egypt_tour_package_from_india_a_historic_cruise_experience/3.webp" alt="trip to Egypt from India" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/egypt_tour_package_from_india_a_historic_cruise_experience/4.webp" alt="trip to Egypt from India" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/egypt_tour_package_from_india_a_historic_cruise_experience/5.webp" alt="Egypt tour itinerary" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/egypt_tour_package_from_india_a_historic_cruise_experience/6.webp" alt="Egypt tour itinerary" />
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
                                                <div>Egypt is famous for its history and culture. </div>
                                                <div class="mb-0">There are age-old, ancient pyramids and sphinx monuments in Egypt.</div>
                                                <div>There are also wonderful museums where you can witness the history of Egypt. </div>
                                                <div> Additionally, other things that are famous in Egypt are Nile and cruises.</div>
                                                <div>So, a cruise experience on your trip to Egypt from India is one of the best things you can have there. </div>
                                                <div>Do it with an amazing Egypt tour itinerary designed for our amazing Egypt tour package from India.</div>
                                                <div>With the most amazing things covered in our Egypt tour package from India, we can promise you the most memorable and cherishing moments on your unforgettable trip to Egypt from India.</div>
                                                <div>Get in touch with us now and book the one of the most happening trips you’re ever going to have in your life with every great things to see and do in Egypt covered in the itinerary.</div>
                                            </div>
                                        </div>


                                    </div>
                                </div>

                                <div class="tour-includes mb-4">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td><i class="fa fa-clock-o pink mr-1" aria-hidden="true"></i> Days : 8 Nights/ 9 Days </td>
                                                <td><i class="fa fa-group pink mr-1" aria-hidden="true"></i> People : 1</td>

                                            </tr>
                                            <tr>
                                                <td><i class="fa fa-inr pink mr-1" aria-hidden="true"></i> Total Tour Cost : INR 80,000/-* </td>
                                                <td><i class="fa fa-bed pink mr-1" aria-hidden="true"></i> Hotel : 4 star</td>
                                            </tr>
                                            <tr>
                                                <td><i class="fa fa-inr pink mr-1" aria-hidden="true"></i> Total Tour Cost : INR 88,695/-*</td>
                                                <td><i class="fa fa-bed pink mr-1" aria-hidden="true"></i> Hotel : 5 star</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div class="description mb-2">
                                    <div class="row">


                                        <div id="iternary" class="accrodion-grp faq-accrodion mb-4" data-grp-name="faq-accrodion" >
                                            <div class="accrodion active">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 1</span> - Arrive Cairo</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "block;" }}>
                                                    <div class="inner">
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Arrival to Cairo airport, our representative will meet you in the airport then you will be transferred by an A/C car to your hotel.</div>
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i>  Evening trip to attend Dinner Cruise  for 2 Hours including oriental Show and Tanura Show  Overnight in Cairo.1</div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 2</span> -  Aswan - Nile Cruise</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none;" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Breakfast at hotel,  transfer to cairo airport , take the flight to aswan, Arrival  to Aswan Airport around 09:00 ,  transfer to visit  the High Dam, the Granite Quarries & the Temple of Philae.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Transfer to the Nile Cruise check inn ,  Lunch on board.  Dinner and overnight in Aswan.1.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 3</span> - Nile Cruise, Aswan </h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none;" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Breakfast on board.  Optional Tour Departure to visit the Temples of Abu Simbel.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> The colossal Temple of Abu Simbel built by Ramses II (XIXth. Dynasty) and lately saved from inundation of the Nile waters in among the glories of ancient Egyptian monuments.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> The temples were built out of a sandstone rock cliff, and representation of the deities to which each was dedicated is carved on its huge façade. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Nearby, also saved, lies the small Temple of the King's wife Nefertari, dedicated to the goddess Hathor. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Back to Aswan. 2.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 4</span> - Nile Cruise,  Edfu, Kom Ombo</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none;" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Breakfast on board. Visit the Temple of Horus in Edfu. Sail to Kom Ombo. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Lunch on board. Visit the Temple shared by the two Gods Sobek & Haroeris in Kom Ombo. Afternoon Tea. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Overnight in Kom Ombo.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Dinner and Overnight on Board.3.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 5</span> - Nile Cruise, Luxor </h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none;" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Breakfast on board. Transfer to Visit Luxor Temple from outside to see its courtyard and the granite statues of Ramses the Great. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Proceed to Karnak temples. (Optional) Hot Balloon ( 90$ ): Should you want to make your stay in Luxor an unforgettable.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Drifting peacefully over the Valley of King and the Mountain on the Nobles. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> The flight is approximately 30:45 minutes depend on the weather Visit </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> The West Bank – the Valley of the Kings. King Tut’s tomb is with extra ticket. Colossi of Memnon and The Temple of Queen Hatshepsut at El Deir El Bahari. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> LUXOR – Hurghada Disembarkation. Transfer to Hurghada 260 k.m. in Private Bus .arrival around 20:00 Check inn , soft all ink. ( Lunch , Dinner and Breakfast).1</div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 6</span> - Hurghada</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none;" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Free at Leisure enjoy Sandy Beach with Warm and Clear Water of Red Sea. H.B..2</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 7</span> - Hurghada- Cairo </h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none;" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Breakfast at Hotel ransfer to blue bus station to take the vip bus comfort to cairo at 14:00.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Arrive to cairo transfer to hotel overnight at steigenberger. B.B. 1.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 8</span> -  The Pyramids Tour </h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none;" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Breakfast. Start your tour visiting the Egyptian Museum of antiquities.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> On display is rare collection of 5000 years of art the largest most precious collection of Egyptian art in the world.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Including an exhibit dedicated to the Tutankhamen collection of treasures, gold, and jewelry.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Visit the Great Pyramids - Cheops, Chephren & Mykerions & Sphinx. Back to the hotel. Overnight in Cairo. 2.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 9</span> - Alexandria Day Tour </h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none;" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Breakfast , transfer to Visit  Alex. ( 260 K.M.) . </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Al Montazah Palace , Alexandia Bibioltak the Great one at the World ,city tour   , Fourt of Qitbay from outside, Lunch in Local Restaurant,and after transfer back to Cairo3.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 10</span> - Cairo, Final Departure</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none;" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Breakfast at Hotel, check out .</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Transfer to Cairo Airport for Final Departure according to your Flight Plan.</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-6 mb-2">
                                            <div class="desc-box bg-grey p-4 rounded">
                                                <h5 class="mb-2">Inclusions</h5>
                                                <ul>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> 4 Nights hotel accommodation in Cairo on bed and breakfast basis</li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Steignberger  el Tahrer</li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> 3 Nights on Cruise board (Luxor & Aswan) full board . (  Breakfast, Lunch and Dinner5*)</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> 2 Nights IN 5* Hotel in Hurghada  soft all inclusive</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> One Way Domestic Flight from Cairo to Aswan</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> 1 Day tour in Cairo</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> 1 Day Tour to Alexandria</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> All entrance Fees During all Sightseeing in Cairo , Luxor and Awan</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> All transfers in Cairo, Luxor, Aswan, Hurghada PRIVATE</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> Transfer from Luxor to Hurghdada in Private Bus</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> Transfer from Hurghada to Cairo by Blue Bus comfort </li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> Daily 4 Bottle of Water 500 ML per Person. (in Cairo and Nile Cruise ,in Hurghada all soft drinks are included.)</li>
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
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> International Flights  </li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Entry Visa</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> X-Mass Dinner 24-12 </li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Tipping only for the Nile Cruise Staff.(10$ should be paid to the Guide Directly.)</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Personal items</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Any other items not mentioned</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Any Optional tours</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Drinks during meals</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-6 mb-2">
                                            <div class="desc-box bg-grey p-4 rounded">
                                                <h5 class="mb-2">Things To Do</h5>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Animal Care, Luxor – Volunteer</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Hurghada – Go Scuba Diving</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Giza – Learn To Make Papyrus</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i>  Egyptian Museums – Take A Guided Tour</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Islamic Cairo – Shop For Leather, Jewels, And Perfumes</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Giza – Go Camel Riding At Sunset</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Royal Jewelry Museum – Marvel At Unique Jewels</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Corniche, Alexandria – Take A Leisurely Walk</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Zawiyyet al-Mayyiteen – Explore The City Of The Dead</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Mt. Sinai – Hike To The Top</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Khan El-Khalili Bazaar – Buy Souvenirs</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Djoser Pyramid – Explore Earth’s Oldest Stone-cut Monument</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Karnak Temples– Pay Your Respects To The Pharaohs</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> The Nile – Sail On A Lit River Cruise</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Abu Simbel Temples – Take A Day Tour</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Heracleion – Dive To The Lost City Under The Sea</div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="single-map mb-4">
                                    <h4>Map</h4>
                                    <div class="map rounded overflow-hidden">
                                        <div style={{ width: "100%" }}>
                                            <iframe class=" rounded overflow-hidden" height="400" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7290573.081382147!2d26.380291144279877!3d26.844718475551225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14368976c35c36e9%3A0x2c45a00925c4c444!2sEgypt!5e0!3m2!1sen!2sin!4v1664538564654!5m2!1sen!2sin"></iframe>
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