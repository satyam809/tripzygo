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

                <title>TripzyGo - Perfect Family Kerala Trip With Kerala Family Holiday Package </title>
                <meta name="description" content="Plan your perfect family holiday in Kerala. We make your family Kerala trip a memorable one with our best Kerala Family Holiday Package. Book now and save more!" />
                <meta name="keywords" content="kerala family holiday package, family kerala trip, family holiday in kerala" />
                <link rel="icon" href="/icon.png" />
                <link rel="canonical" href="https://www.tripzygo.in/packages/exotic-kerala-family-holiday-package" />
                <meta property="og:url" content="https://www.tripzygo.in/packages/exotic-kerala-family-holiday-package" />
                <meta property="og:title" content="Perfect Family Kerala Trip With Kerala Family Holiday Package " />
                <meta property="og:description" content="Plan your perfect family holiday in Kerala. We make your family Kerala trip a memorable one with our best Kerala Family Holiday Package. Book now and save more!" />
                <meta property="og:image" content="https://www.tripzygo.in/images/domestic/exotic_kerala_family_holiday_package/1.webp" />
            </Head>
<ShareButton/>
<PopularityWidget packageCount="65" progressBarPercentage="60%"/>
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
                                        <h2 className="mb-1">Exotic Kerala Family Holiday Package</h2>

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
                                                        <img className='blog_image' src="/images/domestic/exotic_kerala_family_holiday_package/1.webp" alt="family holiday in kerala" />

                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/exotic_kerala_family_holiday_package/2.webp" alt="family holiday in kerala" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/exotic_kerala_family_holiday_package/3.webp" alt="family kerala trip" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/exotic_kerala_family_holiday_package/4.webp" alt="family kerala trip" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/exotic_kerala_family_holiday_package/5.webp" alt="kerala family holiday package" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/exotic_kerala_family_holiday_package/6.webp" alt="kerala family holiday package" />
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
                                                        <img className='blog_image' src="/images/domestic/exotic_kerala_family_holiday_package/1.webp" alt="family holiday in kerala" />

                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/exotic_kerala_family_holiday_package/2.webp" alt="family holiday in kerala" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/exotic_kerala_family_holiday_package/3.webp" alt="family kerala trip" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/exotic_kerala_family_holiday_package/4.webp" alt="family kerala trip" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/exotic_kerala_family_holiday_package/5.webp" alt="kerala family holiday package" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/exotic_kerala_family_holiday_package/6.webp" alt="kerala family holiday package" />
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
                                                <div>Kerala is a beautiful place with mesmerizing views. </div>
                                                <div class="mb-0"> From beautiful tea gardens and coffee gardens to the amazing houseboats with a view of the still lake all around, the beauty of Kerala is breathtaking.</div>
                                                <div>The food here is also great and enjoying the authentic South Indian cuisine in a South Indian style is just a different experience altogether.</div>
                                                <div>How about having this experience with your family on a lovely family holiday in Kerala? Doesn’t a family kerala trip sound like a great idea?</div>
                                                <div>Well, it sure does, especially when the trip is so cheap and has got so much to offer.</div>
                                                <div>Go on the most amazing and thrilling trip of your life with your family and have the most amazing days in the beautiful city of Kerala.</div>
                                                <div>This fantastic trip package to Kerala is all you need.</div>
                                                <div>Book the exotic Kerala family holiday package now by getting in touch with a TripzyGo travel executive.</div>
                                            </div>
                                        </div>


                                    </div>
                                </div>

                                <div class="tour-includes mb-4">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td><i className="fa fa-clock-o pink mr-1" aria-hidden="true"></i> Days : 6 Nigths/ 7 Days</td>
                                                <td><i class="fa fa-group pink mr-1" aria-hidden="true"></i> People : 1</td>
                                            </tr>
                                            <tr>
                                                <td><i class="fa fa-inr pink mr-1" aria-hidden="true"></i> Total Tour Cost : INR 20,100/-* </td>
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
                                                    <h5 class="mb-0"><span>Day 1</span> - Kochi – Munnar</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "block;" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Arrival at Kochi Airport / Railway station in the morning, meet & transfer to Munnar, Enroute you can enjoy the scenic views of hill stations with striking greenery, small waterfalls & tea plantations. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Check into hotel at 12 noon and visit Rajamala (Eravikulam National Park) & Munnar Town. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Stay overnight in Munnar hotel</div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 2</span> - Munnar</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none;" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Visit at Mattuppetty lake, Echo point, Kundala dam & Top station which is known as historic transshipment location for tea at 1700 meter above sea level. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Stay overnight in Munnar hotel.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 3</span> - Munnar – Thekkady</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none;" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After breakfast proceed for the sightseeing tour of Thekkady - one of the world's most fascinating wild life reserves. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> The Periyar wild life sanctuary in Thekkady is spread across 777 sq km of which 360 sq km is thick ever green forest.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Noted for its geomorphology, diversity of wild life and scenic beauty, the sanctuary was declared a Tiger Reserve in 1978.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Optional activities like Boating at Periyar Lake, Spice Plantation visit and Elephant Ride can be done at an extra cost.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Overnight stay is arranged in Thekkady.</div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 4</span> - Thekkady - Alleppey</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none;" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Check out from hotel after breakfast, proceed to Alleppey,Check into a hotel Sightseeing through backwaters and explore the picturesque canals and lagoons.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Evening go to Famous Alleppey Beach, Stay overnight in Alleppey hotel.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 5</span> - Alleppey – Kovalam </h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none;" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Check out from houseboat/hotel after breakfast, proceed to Kovalam, a beach town which also known as the paradise of the south. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Check into a hotel at 12 noon, Visit Kovalam beach in the evening.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Stay overnight in Kovalam hotel.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 6</span> - Kovalam - Trivandrum </h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none;" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Visit Sree Padmanabha Swamy temple – Famed as the icon of the Trivandrum city & The World's richest temple, Napier Museum, Kerala Museum, Zoological park & Sree Chitra Art Gallery which displays a rare collection of mural & miniature paintings.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Back to Kovalam & Stay overnight in hotel.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 7</span> - Kovalam - Trivandrum (Departure)</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none;" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Check out from hotel, proceed to Trivandrum, dropping at Trivandrum Airport / Railway station.</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-6 mb-2">
                                            <div class="desc-box bg-grey p-4 rounded">
                                                <h5 class="mb-2">Inclusions</h5>
                                                <ul>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Accommodation on twin sharing basis at the above mentioned hotels or similar</li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Meal plan will be on as per mentioned above</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> All transfers and sightseeing by AC vehicle( Etios ) (At disposal - As per the itinerary from 08.00 AM to 07.00 PM)</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> All toll, parking fee, driver bata & fuel cost</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> GST</li>


                                                </ul>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-6 mb-2">
                                            <div class="desc-box bg-grey p-4 rounded">
                                                <h5 class="mb-2">Exclusions</h5>
                                                <ul>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Meals not mentioned in the itinerary</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Entry fees to monuments and palaces</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Anything not mentioned in the inclusions</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Porterage at hotels and airports, tips, insurance, laundry, liquors, wine, etc</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> All items of personal nature</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Any cost arising due to natural calamities like landslides, roadblocks, etc</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Any increase in taxes or fuel leading to an increase in surface transport</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Only non AC rooms are provided in Munnar And Thekkady as they are hill Stations</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Ayurveda Charges</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Mandatory X- Mas / New Year Eve Supplementary charges , that should be paid by the guest directly to the hotels concerned.</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Early Check in Charges</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-6 mb-2">
                                            <div class="desc-box bg-grey p-4 rounded">
                                                <h5 class="mb-2">Things To Do</h5>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Take a Scenic Train Ride Through Kerala</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Cruise the Backwaters on a Houseboat</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> See Exotic Flower Garden of Munnar</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Watch the Martial Art Form of Kalaripayattu</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Watch a Snake Boat Race</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> See Exotic Flower Garden of Munnar</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Try hands on Traditional Kerala Fishing</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i>  Walk Between Tea Gardens, Munnar</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Surf At The Beaches of Varkala</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Go For A Jeep Safari in Periyar Jungle</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Kerala's Lunch On A Banana Leaf</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Experience the Musical Sound of Falling Water At Athirapally Falls</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Experience Paragliding In Kerala</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Houseboat Cruise in Kumarakom and Alleppey</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Take An Elephant Ride In Munnar</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Experience Shikara Ride In Backwaters</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="single-map mb-4">
                                    <h4>Map</h4>
                                    <div class="map rounded overflow-hidden">
                                        <div style={{ width: "100%" }}>
                                            <iframe class=" rounded overflow-hidden" height="400" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4016664.3063345025!2d73.88293947310464!3d10.538127377774241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0812ffd49cf55b%3A0x64bd90fbed387c99!2sKerala!5e0!3m2!1sen!2sin!4v1661253136245!5m2!1sen!2sin"></iframe>
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