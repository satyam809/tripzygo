import React from 'react'
import Packages_Form from '../../components/Contact_Forms/packages_form';
import ShareButton from '../../components/Package_Description/shareButton';
import PopularityWidget from '../../components/Package_Description/popularityWidget';

import Head from "next/dist/shared/lib/head";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from "swiper";
import 'swiper/css';
import { Navigation, Pagination, A11y } from 'swiper';
import { FreeMode, Thumbs } from "swiper";
import { useRef, useState } from "react";
SwiperCore.use([Pagination, Autoplay]);

export default function test() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <div>
            <Head>

                <title>TripzyGo - Luxury Jaipur Jodhpur Jaisalmer Tour Package - Rajasthan Tours</title>
                <meta name="description" content="Get a luxury tour of Rajasthan. Our Jaipur Jodhpur Jaisalmer Tour Package is perfect for those wanting to experience the best of what Rajasthan has to offer." />
                <meta name="keywords" content="luxury jaipur jodhpur jaisalmer tour package, luxury rajasthan tour, luxury tour of rajasthan" />
                <link rel="icon" href="/icon.png" />
                <link rel="canonical" href="https://www.tripzygo.in/packages/jaipur-jodhpur-jaisalmer-luxury-package" />
                <meta property="og:url" content="https://www.tripzygo.in/packages/jaipur-jodhpur-jaisalmer-luxury-package" />
                <meta property="og:title" content="Luxury Jaipur Jodhpur Jaisalmer Tour Package - Rajasthan Tours" />
                <meta property="og:description" content="Get a luxury tour of Rajasthan. Our Jaipur Jodhpur Jaisalmer Tour Package is perfect for those wanting to experience the best of what Rajasthan has to offer." />
                <meta property="og:image" content="https://www.tripzygo.in/images/beach_luxury_vacation/jaipur_jodhpur_jaisalmer_luxury_package/1.webp" />
            </Head>
<ShareButton/>
<PopularityWidget packageCount="65" progressBarPercentage="65%"/>
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
                                        <h2 className="mb-1">Jaipur Jodhpur Jaisalmer Luxury Package</h2>

                                    </div>
                                </div>
                                <div className="description-///images mb-4 overflow-hidden">
                                    <div className="thumbnail-///images position-relative">
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
                                                        <img className='blog_image' src="/images/beach_luxury_vacation/jaipur_jodhpur_jaisalmer_luxury_package/1.webp" alt="luxury jaipur jodhpur jaisalmer tour package" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/beach_luxury_vacation/jaipur_jodhpur_jaisalmer_luxury_package/2.webp" alt="luxury jaipur jodhpur jaisalmer tour package" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/beach_luxury_vacation/jaipur_jodhpur_jaisalmer_luxury_package/3.webp" alt="luxury rajasthan tour" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/beach_luxury_vacation/jaipur_jodhpur_jaisalmer_luxury_package/4.webp" alt="luxury rajasthan tour" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/beach_luxury_vacation/jaipur_jodhpur_jaisalmer_luxury_package/5.webp" alt="luxury tour of rajasthan" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/beach_luxury_vacation/jaipur_jodhpur_jaisalmer_luxury_package/6.webp" alt="luxury tour of rajasthan" />
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
                                                        <img className='blog_image' src="/images/beach_luxury_vacation/jaipur_jodhpur_jaisalmer_luxury_package/1.webp" alt="luxury jaipur jodhpur jaisalmer tour package" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/beach_luxury_vacation/jaipur_jodhpur_jaisalmer_luxury_package/2.webp" alt="luxury jaipur jodhpur jaisalmer tour package" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/beach_luxury_vacation/jaipur_jodhpur_jaisalmer_luxury_package/3.webp" alt="luxury rajasthan tour" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/beach_luxury_vacation/jaipur_jodhpur_jaisalmer_luxury_package/4.webp" alt="luxury rajasthan tour" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/beach_luxury_vacation/jaipur_jodhpur_jaisalmer_luxury_package/5.webp" alt="luxury tour of rajasthan" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/beach_luxury_vacation/jaipur_jodhpur_jaisalmer_luxury_package/6.webp" alt="luxury tour of rajasthan" />
                                                    </div>
                                                </SwiperSlide>

                                            </Swiper>





                                        </div>

                                    </div>
                                </div>



                                <div className="description mb-2">
                                    <div className="row">
                                        <div class="desc-box bg-grey p-4 rounded ">

                                            <h5 class="mb-2">Overview</h5>
                                            <div>Goa family tour packages  is often the first place that comes to mind when people are looking for a beautiful beach destination.Rajasthan is a state in India that's rich in culture and history.</div>
                                            <div class="mb-0"> It's often referred to as the "Cultural Capital of India" because of its Royal Palaces and Renovated Havelis.</div>
                                            <div>If you're looking to explore all that Rajasthan has to offer, our Jaipur tour package is the perfect way to do it.</div>
                                            <div>This package has been designed specifically so that you can experience all the amazing places Rajasthan has to offer.</div>
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
                                                <td><i class="fa fa-inr pink mr-1" aria-hidden="true"></i> Cost : INR 14,499/-* (Subject to availability)  </td>
                                                <td><i class="fa fa-bed pink mr-1" aria-hidden="true"></i> Bedroom : 01 Double Rooms</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="description mb-2">
                                    <div class="row">


                                        <div id="iternary" class="accrodion-grp faq-accrodion mb-4" data-grp-name="faq-accrodion">
                                            <div class="accrodion active">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 1</span> -  Arrival at Jaipur</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "block" }}>
                                                    <div class="inner">
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Meet a representative at a pre-decided location in Jaipur.</div>
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Get transferred to your pre-booked hotel where you can check-in and relax for some time.</div>
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Start your sightseeing by visiting Albert Hall where you can capture amazing clicks with pigeons.</div>
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> You can then take a short stopover at the iconic Hawa Mahal which is a symbol of Jaipur and then check on time at the world's biggest sundial in Jantar Mantar (Observatory).</div>
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Visit the current residence of the royal family - The City Palace and Museum that displays the weaponry and handlooms that were used by the royal family.</div>
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> In evening, visit Govind Dev Ji Temple and Local Market.</div>
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Return back to hotel for overnight stay.</div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 2</span> - Sightseeing in Jaipur </h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After breakfast start a full day of local sightseeing in Jaipur.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Dive into history by visiting the Amer Fort, which has witnessed a number of wars, royal celebrations and served as a residence to a number of rulers.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> You can then visit the Jaigarh Fort that houses one of the biggest cannons and the Nahargarh Fort from where you can enjoy stunning views of the city.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Take a photo stop at Jal Mahal to get some amazing clicks in a traditional Indian attire.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> You can also visit Birla Temple, a temple made with shimmering white marble and carved with various mythological events.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Return back to the hotel for an overnight stay at Jaipur.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 3</span> - Jaipur to Jodhpur</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Enjoy a delicious breakfast in the morning and then check out of the hotel.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Continue your drive towards Jodhpur. You will reach there by afternoon and check in.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Proceed towards the mighty Mehrangarh Fort that sits above a hill and is visible from throughout the city.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> You’ll also visit the “Taj Mahal of Marwar”, Jaswant Thada which is made up of white marble sheets.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> In the evening, head to Balsamand Lake located in the middle of a well-manicured garden.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> You can also visit the market at Ghanta Ghar where you can buy some authentic Jodhpuri handicrafts and Rajasthani Dresses.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Head back to the hotel for an overnight stay in Jodhpur.</div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 4</span> - Jodhpur to Jaisalmer</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Start your next day with a delicious breakfast then get ready to transfer to Jaisalmer, also known as the Golden City.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Take a short stopover at the Jaisalmer War Memorial, which honors the contributions and sacrifices of war heroes, and also traces the evolution of the Indian Army.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> On arrival in Jaisalmer, check in to your hotel and take some rest.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> You can then head to the Jaisalmer Fort that seems like it has just risen from the sands and offers stunning views of city.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Jaisalmer Fort is still a living fort with many houses and people living inside. Here you can shop for some amazing leather goods from the shop that line the streets.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Later, return back to the hotel for overnight stay.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 5</span> - Sightseeing in Jaisalmer </h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Wake up to a beautiful morning and enjoy your breakfast.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Start your sightseeing tour the city by visiting the beautiful Gadisar Lake where you can take a calming morning stroll.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> You can then visit Patwon ki Haveli, Nathmahal ki Haveli & Salim Singh ki Haveli which date back from the 12th to 15th century, & feature exquisite carvings and filigree work.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> In the afternoon, you’ll will head out towards the Sam Sand Dunes where you’ll check in to a desert camp.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Experience the exotic desert by Dune Bashing over the sand dunes & enjoy Camel Ride overlooking a spectacular sunset.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> You can then enjoy folk performances by the locals while enjoying a bonfire and an authentic Rajasthani meal.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Overnight stay at the Desert Camp in Jaisalmer.</div>


                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 6</span> -  Jaisalmer to Jodhpur</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After breakfast check out from the desert camps and you can then transfer to Jodhpur for your onward journey.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> This marks the end of your tour with wonderful memories.</div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div class="col-lg-12 col-md-6 mb-2">
                                            <div class="desc-box bg-grey p-4 rounded">
                                                <h5 class="mb-2">Inclusions</h5>
                                                <ul>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Airport / Railway Station pick up and drop as per your flight / train timings</li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Comfortable and hygienic Vehicle (SUV / Sedan / Tempo Traveler) as per the group size</li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Stay on a double (for couples & special requests) and triple sharing basis in hotels / camps</li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Breakfast (from Day 2 to Last Day as per itinerary)</li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Driver night charges & allowances, toll tax, parking charges, etc.</li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Experienced driver for the entire journey</li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Sightseeing as per itinerary</li>

                                                </ul>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-6 mb-2">
                                            <div class="desc-box bg-grey p-4 rounded">
                                                <h5 class="mb-2">Exclusions</h5>
                                                <ul>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Any meal unless specified above. </li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Any Air Fare/ Train Ticket.</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Any Guide Service. All entrances fees to monuments. </li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Personal nature expenses like telephone / laundry bills etc. </li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Airports tax and travel insurance etc.</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Services not specified above.</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> GST</li>


                                                </ul>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-6 mb-2">
                                            <div class="desc-box bg-grey p-4 rounded">
                                                <h4>Things To Do</h4>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Recognize the techniques used to create the renowned Jaipur Blue Pottery, which is made without clay</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Enter the Amer Fort in Maharaja fashion and ride an elephant to the pinnacle</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> At the Chokhi Dhani Village, savour the traditional dish "Dal Baati Churma" for a truly authentic Rajasthani experience</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Be amazed by the enormous Jaivana Cannon from the 18th century at Jaigarh, whose projectile created a small lake in Chaksu after travelling almost 200 feet. 35 Km</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Visit the Kuldhara Village to learn why the entire community was abandoned the following morning due to a curse</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Try Janta Sweets' renowned Jodhpuri Mirchi Vada to tantalise your palate</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Try Janta Sweets' renowned Jodhpuri Mirchi Vada to tantalise your palate</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="single-map mb-4">
                                    <h4>Map</h4>
                                    <div class="map rounded overflow-hidden">
                                        <div style={{ width: "100%" }}>
                                            <iframe class=" rounded overflow-hidden" height="400" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7308190.844275631!2d69.37606700830034!3d26.569849199676863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396a3efaf7e30e37%3A0xb52b9b4506c088e5!2sRajasthan!5e0!3m2!1sen!2sin!4v1660319810574!5m2!1sen!2sin" ></iframe>
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
