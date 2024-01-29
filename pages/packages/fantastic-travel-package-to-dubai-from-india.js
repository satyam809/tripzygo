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

                <title>TripzyGo - Best 6 Days Dubai Itinerary With Travel Package To Dubai </title>
                <meta name="description" content="Planning a trip to Dubai? Get your deluxe 6 days Dubai itninerary that includes the most famous places in Dubai. Book your travel package to dubai from india." />
                <meta name="keywords" content="travel package to dubai from india, 6 days dubai itinerary, most famous places in dubai" />
                <link rel="icon" href="/icon.png" />
                <link rel="canonical" href="https://www.tripzygo.in/packages/fantastic-travel-package-to-dubai-from-india" />
                <meta property="og:url" content="https://www.tripzygo.in/packages/fantastic-travel-package-to-dubai-from-india" />
                <meta property="og:title" content="Best 6 Days Dubai Itinerary With Travel Package To Dubai " />
                <meta property="og:description" content="Planning a trip to Dubai? Get your deluxe 6 days Dubai itninerary that includes the most famous places in Dubai. Book your travel package to dubai from india." />
                <meta property="og:image" content="https://www.tripzygo.in/images/international_packages/fantastic_travel_package_to_dubai_from_india/1.webp" />
            </Head>
<ShareButton/>
<PopularityWidget packageCount="79" progressBarPercentage="80%"/>
            <section className="breadcrumb-main pb-20 pt-14" style={{ backgroundImage: "url(/images/banner_images/about_us.webp)" }}>             <div className="breadcrumb-outer">
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
                                        <h2 className="mb-1">Fantastic Travel Package To Dubai From India</h2>

                                    </div>
                                </div>
                                <div className="description-//images mb-4 overflow-hidden">
                                    <div className="thumbnail-//images position-relative">
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
                                                        <img className='blog_image' src="/images/international_packages/fantastic_travel_package_to_dubai_from_india/1.webp" alt="travel package to dubai from india" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/fantastic_travel_package_to_dubai_from_india/2.webp" alt="travel package to dubai from india" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/fantastic_travel_package_to_dubai_from_india/3.webp" alt="travel package to dubai from india" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/fantastic_travel_package_to_dubai_from_india/4.webp" alt="travel package to dubai from india" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/fantastic_travel_package_to_dubai_from_india/5.webp" alt="travel package to dubai from india" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/fantastic_travel_package_to_dubai_from_india/6.webp" alt="travel package to dubai from india" />
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
                                                        <img className='blog_image' src="/images/international_packages/fantastic_travel_package_to_dubai_from_india/1.webp" alt="travel package to dubai from india" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/fantastic_travel_package_to_dubai_from_india/2.webp" alt="travel package to dubai from india" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/fantastic_travel_package_to_dubai_from_india/3.webp" alt="travel package to dubai from india" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/fantastic_travel_package_to_dubai_from_india/4.webp" alt="travel package to dubai from india" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/fantastic_travel_package_to_dubai_from_india/5.webp" alt="travel package to dubai from india" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/fantastic_travel_package_to_dubai_from_india/6.webp" alt="travel package to dubai from india" />
                                                    </div>
                                                </SwiperSlide>

                                            </Swiper>





                                        </div>

                                    </div>
                                </div>



                                <div className="description mb-2">
                                    <div className="row">
                                        <div class="col-lg-12 col-md-6 mb-2 ">
                                            <div class="desc-box bg-grey p-4 rounded ">
                                                <h5 class="mb-2">Overview</h5>
                                                <div>"The largest city in the United Arab Emirates, Dubai, is the best example of a unique fusion of its Bedouin tradition with an ultra-modern culture thanks to its bold architecture and extravagant style. </div>
                                                <div class="mb-0">With this traditional 6 days dubai itinerary in travel package to dubai from india, you can take a sumptuous look at the city's most well-known sights, such as the enchanting Jumeirah Mosque, the Mall of the Emirates, the Burj Al Arab, and many other most famous places in Dubai. </div>
                                                <div>This tour will provide you with an experience that is out of the ordinary, from exploring the cultural history and architectural brilliance it displays to cruising along the Dubai Marina canal with a view of flashing skyscrapers in a beautiful yacht.</div>
                                                <div>Wait till you are standing tall on the 124th level of the highest skyscraper in the world and capture this special moment in some one-of-a-kind /images amidst the panoramic views of Dubai city in this travel package to Dubai from India.</div>
                                            </div>
                                        </div>


                                    </div>
                                </div>

                                <div className="tour-includes mb-4">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td><i className="fa fa-clock-o pink mr-1" aria-hidden="true"></i> Days : 5Night / 6Days</td>
                                                <td><i class="fa fa-group pink mr-1" aria-hidden="true"></i> People : 2</td>

                                            </tr>
                                            <tr>
                                                <td><i class="fa fa-inr pink mr-1" aria-hidden="true"></i> Cost : INR 1,20,000/-* (Subject to availability)</td>
                                                <td><i class="fa fa-bed pink mr-1" aria-hidden="true"></i> Bedroom : 01 Double Rooms</td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>

                                <div className="description mb-2">
                                    <div className="row">




                                        <div id="iternary" class="accrodion-grp faq-accrodion mb-4" data-grp-name="faq-accrodion" >
                                            <div class="accrodion active">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 1</span> -  Arrival in Dubai </h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "block" }}>
                                                    <div class="inner">
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "130x" }}></i> Arrival in dubai international airport where our representative will escort you to your hotels.</div>
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "130x" }}></i> The day will be free for your self-time.</div>
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "130x" }}></i> Later on evening transfer to Dhow cruise.</div>
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "130x" }}></i> Go for an awesome experience of cruising with our Dhow cruise Marina tour.</div>
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "130x" }}></i> This two hours cruising tours has a complete package with entertainment, Buffet Dinner and beautiful scene of Burj Al Arab,Atlantis and Marina.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 2</span> - Dubai city tour + desert safari</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ dsiplay: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "130x" }}></i> After buffet breakfast we take you to dubai city tour. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "130x" }}></i> Drive through the city of skyscrapers with detailed information provided by our knowledgeable tour guides about every significant place of this emirate which includes Dubai creek , deira souks ,Jumeriah mosque and Atlantis the palm.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "130x" }}></i> In evening Desert safari tour Enjoy our desert safari tour that provide you an ultimate adventurous experience with Dune bashing on the sand dunes in a 4X4 vehicle, camel riding, various photographic opportunities, belly dancing show, Tanura dance show and BBQ dinner with vegetarian and non-vegetarian food options.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 3</span> – Adventure in Dubai</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ dsiplay: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "130x" }}></i> Dolphin show + Noon to evening Burjh khalifa + dubai quarium + underwater zoo.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "130x" }}></i> Exploring Dubai mall – attraction included the dubai aquarium , burjh khalifa and (Non – prime Hours ) complimentary dubai fountain show and underwater zoo.</div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 4</span> – Museum of future and dubai frame</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ dsiplay: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "130x" }}></i> Enjoy your buffet breakfast in hotel.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "130x" }}></i> After breakfast start your tour start from duabi museum of future. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "130x" }}></i> Museum of the Future is a place to experience what could be.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "130x" }}></i> Visitors are invited to explore immersive future environments designed to stimulate their senses and expand their minds.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "130x" }}></i> We aim to inspire every person who walks through our doors to become engaged and active participants in creating a better future</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "130x" }}></i> And in the evening : experience the beauty of dubai frame.</div>

                                                    </div>
                                                </div>
                                            </div>

                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 5</span> - Abu dhabi city tour with Ferrari world </h5>
                                                </div>
                                                <div class="accrodion-content" style={{ dsiplay: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "130x" }}></i> Abu Dhabi’s landmarks from Dubai can be a headache–especially when it’s very hot outside.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "130x" }}></i> This small-group tour eliminates the stress: whisking you to the dispersed sites by climate-controlled vehicle, with commentary on the attractions.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "130x" }}></i> Explore the Sheikh Zayed Grand Mosque and Heritage Village; see Ferrari World and other sights; and roam the Date Market for a hassle-free overview of the city.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 6</span> – Fly back home</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ dsiplay: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "130x" }}></i> Today is the last day of your tour. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "130x" }}></i> Enjoy your breakfast. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "130x" }}></i> Later on, get timely transferred to the airport to board the flight for your onward journey. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "130x" }}></i> Tour ends but Sweet Memories Always Remains same.</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-6 mb-2">
                                            <div class="desc-box bg-grey p-4 rounded">
                                                <h5 class="mb-2">Inclusions</h5>
                                                <ul>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> 05 nights’ accommodation at the mentioned hotel inclusive of buffet breakfast</li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> current applicable taxes& service charges</li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Arrival airport transfer from Dubai International airport to Dubai Hotel</li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Dubai city tour</li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Dhow cruise marina with dinner</li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Departure transfer from hotel to Dubai International airport</li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Burj Khalifa 124th with fountain show normal time ,Dubai aquarium + underwater zoo</li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Abu Dhabi city-tour</li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Desert Safari with BBQ dinner on Private basis (vehicle type-land cruiser or similar type of vehicle</li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Museum of future</li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Dubai frame</li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> All tours and transfer on sharing basis</li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Visa</li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Travels Insurance</li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Flight Cost</li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Value Added Tax (VAT)</li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> GST Included</li>

                                                </ul>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-6 mb-2">
                                            <div class="desc-box bg-grey p-4 rounded">
                                                <h5 class="mb-2">Exclusions</h5>
                                                <ul>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Tips and porter chargers</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Hotel Dirham Free </li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> 5% TCS ( Claimable) By Guest </li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Cost of any excursions not included package</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Early check in and late check out at the hotel as per availability (Extra Charges MayApply)</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Items of a personal nature such as phone calls, pay movies, room services, mini bars, laundries or 7) other expenditures during the tour</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Additional Costs due to Flight Cancellations, Road blocks, natural calamities</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Local taxes, if any</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Transfer Surcharges in case of public holiday</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Anything not mentioned in Inclusions Part</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Any expenses of personal nature viz. tips to driver & Guide</li>

                                                </ul>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-6 mb-2">
                                            <div class="desc-box bg-grey p-4 rounded">
                                                <h5 class="mb-2">Things To Do</h5>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "130x" }}></i> Explore Museum Of Future</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "130x" }}></i> Visit the Burj Khalifa</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "130x" }}></i> Visit Dubai Aquarium and Submerged Zoo</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "130x" }}></i> An evening of BBQ and desert safari</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "130x" }}></i> Take a tour of Dubai City Sightseeing</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "130x" }}></i> Take a ride at IMG Worlds of Adventure</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "130x" }}></i> Dubai Marina dinner cruise</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "130x" }}></i>  Check out Dubai Frame</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "130x" }}></i> The Green Planet by Meraas</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "130x" }}></i> Visit the Dubai Mall</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "130x" }}></i> Enjoy Skiing at Ski Dubai</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "130x" }}></i>  Laguna Waterpark offers water slides</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "130x" }}></i> Dolphin Show is fun to watch</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "130x" }}></i> Taking a skydive off Palm Jumeirah</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "130x" }}></i> Visit the Ferrari World</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "130x" }}></i>  Try Zip-lining at Dubai Marina</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "130x" }}></i> Experience Indoor Skydiving at Ifly Dubai</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "130x" }}></i> Go for a Hot Air Balloon ride</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "130x" }}></i> Take a tour of Dubai Miracle Garden</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="single-map mb-4">
                                    <h4>Map</h4>
                                    <div class="map rounded overflow-hidden">
                                        <div style={{ width: "100%" }}>

                                            <iframe class=" rounded overflow-hidden" height="400" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462560.3011839799!2d54.9472875269271!3d25.07638147181713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1664539622012!5m2!1sen!2sin" ></iframe>
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
