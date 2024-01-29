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

                <title>TripzyGo - Book Turkey Package From India With Best Itinerary For 7 Days</title>
                <meta name="description" content="Get an amazing travel itinerary for 7 days with our Turkey tour. Be ready for an exciting trip to Turkey with Turkey package from India. Book now." />
                <meta name="keywords" content="turkey travel itinerary for 7 days, Turkey tour package from India, Turkey package from India" />
                <link rel="icon" href="/icon.png" />
                <link rel="canonical" href="https://www.tripzygo.in/packages/turkey-package-from-india" />
                <meta property="og:url" content="https://www.tripzygo.in/packages/turkey-package-from-india" />
                <meta property="og:title" content="Book Turkey Package From India With Best Itinerary For 7 Days" />
                <meta property="og:description" content="Get an amazing travel itinerary for 7 days with our Turkey tour. Be ready for an exciting trip to Turkey with Turkey package from India. Book now." />
                <meta property="og:image" content="https://www.tripzygo.in/images/international_packages/turkey_package_from_india_perfect_escape_getaway/1.webp" />
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
                                        <h2 className="mb-1">Turkey Package from India</h2>

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
                                                        <img className='blog_image' src="/images/international_packages/turkey_package_from_india_perfect_escape_getaway/1.webp" alt="turkey travel itinerary for 7 days" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/turkey_package_from_india_perfect_escape_getaway/2.webp" alt="turkey travel itinerary for 7 days" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/turkey_package_from_india_perfect_escape_getaway/3.webp" alt="Turkey tour package from India" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/turkey_package_from_india_perfect_escape_getaway/4.webp" alt="Turkey tour package from India" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/turkey_package_from_india_perfect_escape_getaway/5.webp" alt="Turkey package from India" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/turkey_package_from_india_perfect_escape_getaway/6.webp" alt="Turkey package from India" />
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
                                                        <img className='blog_image' src="/images/international_packages/turkey_package_from_india_perfect_escape_getaway/1.webp" alt="turkey travel itinerary for 7 days" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/turkey_package_from_india_perfect_escape_getaway/2.webp" alt="turkey travel itinerary for 7 days" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/turkey_package_from_india_perfect_escape_getaway/3.webp" alt="Turkey tour package from India" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/turkey_package_from_india_perfect_escape_getaway/4.webp" alt="Turkey tour package from India" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/turkey_package_from_india_perfect_escape_getaway/5.webp" alt="Turkey package from India" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/turkey_package_from_india_perfect_escape_getaway/6.webp" alt="Turkey package from India" />
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
                                                <div>Turkey is best known for its royalty.</div>
                                                <div class="mb-0">However, that royalty can be very exciting to witness. </div>
                                                <div>Whether you go for shopping in the popular Turkish bazaars, fill your mouth with sweet Turkish delights and Baklavas, or indulge in a bath in hammams, everything is royally enjoyable. </div>
                                                <div>So, a turkey travel itinerary for 7 days will be perfect if you seek an escape.</div>
                                                <div>Have that option open with our amazing Turkey tour package from India that will take you on a royal ride.</div>
                                                <div>Don’t wait up. Get in touch with a TripzyGo travel specialist now and book your Turkey package from India for a royal and majestic vacation.</div>
                                            </div>
                                        </div>


                                    </div>
                                </div>

                                <div class="tour-includes mb-4">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td><i className="fa fa-clock-o pink mr-1" aria-hidden="true"></i> Days : 6 nights/ 7 days</td>
                                                <td><i class="fa fa-group pink mr-1" aria-hidden="true"></i> People : 1</td>

                                            </tr>
                                            <tr>
                                                <td><i class="fa fa-inr pink mr-1" aria-hidden="true"></i> Total Tour Cost : INR 62,822/-*</td>
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
                                                    <h5 class="mb-0"><span>Day 1</span> - Arrival at Istanbul</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "block" }}>
                                                    <div class="inner">
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Upon our arrival at Istanbul International Airport, your guide will meet, assist and transfer you to the hotel.</div>
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Istanbul was the capital city of Byzantium & Roman Empires and Ottoman State.</div>
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> It is a most fascinating city, which actually crosses two continents Europe and Asia.</div>
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> It is a city of amalgamation of museums, bazaars, minarets, mosques, churches, palaces, and restaurants catering to every one’s taste, customs and fifteen million people.</div>
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Overnight in Istanbul.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 2</span>  - Istanbul City Tour </h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After breakfast, you will be transferred to the sparkling blue waters of the Gulf of Thailand by a speedboat, and arrive at the idyllic Coral Island (Koh Lan), where you will spend the day luxuriating under the welcoming tropical sun.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> You can lounge, swim, snorkel or simply enjoy the sun at the island’s immaculate golden beaches. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> You all have the option of viewing the beautiful coral formations around the island either through a glass-bottom boat or by diving in. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Upon your return from the island, you will enjoy a scrumptious Indian lunch at Pattaya.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Coral Island tour on join/shared speed boat will stop for Parasailing for those who are interested. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Those who are not interested in Parasailing will wait for the rest to finish the activity.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Travel tip : Don’t forget to carry your swimsuit, sunscreen and towel.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Evening is free at leisure.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Overnight in Pattaya.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 3</span> - Istanbul Bosphorus Cruise</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After breakfast enjoy BOSPORUS BY BOAT; a traditional excursion by boat along the waterway separating Europe and Asia.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> The shore lined with old wooden villas, palaces of marble, fortresses, and small fishing villages.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> During the excursion, you will see the magnificent sights of the following attractions from your boat.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> See Dolmabahce Palace, and further along, the parks and imperial pavilions of Yildiz Palace.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> On the coastal edge of this park, is Ciragan Palace, 300 meters of its marble facade faces the shore. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> At Ortakoy a great variety of artists, gather every sunday to display their work along the street.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Ortakoy is a symbol of tolerance with a church, a mosque and a synagogue existing side by side for centuries. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> RUMELI FORTRESS (view from boat), Built by Mehmet the Conqueror in 1452 prior to the conquest of Istanbul was completed in only four months to control and protect the infamous Bosporus passage.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> It is one of the most beautiful works of military architecture anywhere in the world.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> BEYLERBEYI PALACE (view from boat), is the summer residence of Ottoman sultans exists in its original renovated glory featuring original antique furniture and magnificent gardens with the Harem on the Asian side of Istanbul.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Lunch break at the Turkish restaurant.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After the lunch we will then take you to the GRAND SPICE BAZAAR, which is a unique atmosphere with reasonable prices for your shopping.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Here you will find; Exotic Spices and Herbs, Turkish Baklava, Turkish Delights, Turkish Coffee, nuts and fruits, small souvenirs such as Ceramic Handicrafts, Evil Eyes totems, all naturel olive oil, soaps and many other goods in Souvenir Shops and stores. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After the tour transfer to Istanbul Airport for domestic flight to Izmir.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Transfer from airport and check in to your hotel in Kusadasi. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Dinner and overnight in Kusadasi.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 4</span> - Antalya Old City Tour and Waterfalls</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After breakfast drive to Antalya Old City ( Kaleiçi ) Marina, Clock Tower, Hadrian's Gate, Broken Minaret, Hıdırlık Tower: Kaleici is a small historic part of Antalyas modern city, also known as the Old City of Antalya. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> In history it was once the sprawling modern Roman town, then the Byzantine Empire, then Seljuks, and finally the Ottoman Turkish town. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> The Hadrian's Gate (or Hadrianus Gate or The Three Gates is a triumphal arch which was built in the name of the Roman emperor Hadrian. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Antalya's broken wonder is the Broken Minaret of the Korkut Mosque, which itself was built originally as a Roman temple in the 2nd century AD, and thus did not have a minaret at all.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Hıdırlık Tower is a landmark tower of tawny stone in Antalya, Turkey, where Kaleiçi meets Karaalioglu Park.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> It is believed to be built in Hellenistic era on a square plan and later turned into circular tower in 2nd century AD and was used as either a fortification or a lighthouse in the past.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> We have lunch at the hotel and than depart for  Duden Waterfalls. All the streams of the region aim at finding their way into the Mediterranean and they pour down the slopes of the Taurus, sometimes overland sometimes underground and reaching their destination, result in lovely waterfalls, of which there are more than twenty. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After tour come back to hotel and rest of day is yours.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Overnight in Antalya.</div>



                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 5</span> -  Antalya - Konya – Cappadocia</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After breakfast early in the morning at 08:00 drive to Konya, 2.5 hour later we have break for coffee and after some rest drive to Konya for lunch at 13:00 pm. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After the lunch visit the imposing green - tiled Mausoleum of Mevlana, the mystic founder of the Sufi sect (Whirling Dervishes). </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After the Konya Mevlana tour drive to Cappadocia. Arrival to Cappadocia around 18:30 pm. and check into your hotel. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Please Note: This tour will be done by domestic flight from Antalya to Cappadocia if we can not reach the minimum 6 guests per departure.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Kindly note that in that case Antalya to Cappadocia domestic flight is included in given rate and lunch will be excluded.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Please Note: If you wish to join our optional activity of Cappadocia Hor Air Ballooning for tomorrow, please contact with your guide and register because it will take place early the next morning. </div>
                                                        <h5 class="mb-0">OPTIONAL CAPPADOCIA TURKISH NIGHT SHOW:</h5>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> During the evening at 19:30 PM.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> we have an Optional Tour to enjoy our Turkish Night Shows, which are traditions that have survived from the Ottoman Empire to the present day. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> You may have great fun in the real caves, with the rich Anatolian food menu, unlimited local alcoholic and non-alcoholic drinks, belly dance show, Turkish Folklore show, DJ Performance and warm service of Anatolian Hospitality.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Overnight in Cappadocia. </div>



                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 6</span> - Cappadocia Tour</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> For our guests who will experience the Hot Air Balloon Tour, we will pick you up from your hotel in the most beautiful and unique area of the world at 05:30 am in the morning before the sunrise. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> And we will go to the area where hundreds of Hot Air Balloon will take off through the air.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> We will watch the sunrise over those splendid fairy chimneys and valleys that impress people with their exquisiteness.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After making our flight in about 1 hour, we will celebrate our experience with champagne when we land and collect our flight certificate.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Then we will return to our hotel and have our delicious breakfast.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After breakfast at 09:30 depart for Cappadocia Tour. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> We will drive you to Ozkonak Underground City, one of the best preserved Underground cities in Cappadocia.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After Underground City tour, you visit Goreme Open Air Museum, the Heart of Cappadocia.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Goreme Open Air Museum is famous for frescoes dating to 10th century describing the life of Jesus Christ and monks. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Next stop is Cavusin, which is an abandoned village with old cave Greek houses.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After Cavusin you go to the restaurant in Avanos to have lunch.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After lunch, you visit a pottery work shop, to see how to make potteries.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Then you go to Love Valley. Love Valley Cappadocia is a hidden valley with scenic formations to say the least.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Despite the resemblance to man hood, these amazing rock formations are far from man-made. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Next stop is Devrent Valley, which is also called Imagination Valley, where you can see natural rock formations looking like animals. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Last stop is Three Beauties, three beautiful fairy chimneys with their hats, which is the symbol of Cappadocia. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> This tour will end approximately at 18.00 and you will be returned back to your hotel. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Overnight in Cappadocia. </div>



                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 7</span>  - Cappadocia to Istanbul - End of the Tour </h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After breakfast you will have free time in Cappadocia.  </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Today we will depart for Kayseri Airport for our domestic flight to Istanbul and then back to home. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> We hope your tour was a memorable one and we would like to see you in the future in one of our tours again. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Have a nice trip back home and thanks for choosing One Above.</div>

                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div class="col-lg-12 col-md-6 mb-2">
                                            <div class="desc-box bg-grey p-4 rounded">
                                                <h5 class="mb-2">Inclusions</h5>
                                                <ul>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> 3 nights hotel in Istanbul</li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> 3 nights hotel in Antalya</li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> 6 open buffet breakfasts</li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Guided Istanbul City Tour</li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Guided Istanbul Bosphorus Cruise Tour</li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Antalya City tour with Duden Waterfall</li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Guided Pamukkale Tour </li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Transportation in a fully air - conditioned, non - smoking coach</li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Professional English - speaking tour guides</li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Return airport transfer</li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> All entrance fees mentioned in the itinerary</li>

                                                </ul>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-6 mb-2">
                                            <div class="desc-box bg-grey p-4 rounded">
                                                <h5 class="mb-2">Exclusions</h5>
                                                <ul>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> International flights</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Optional Tours (Hot air Balloon)</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Insurance: All types</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Turkey entry visa</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Items of a personal nature such as alcoholic drinks, cold drinks, laundry</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Any others expenses which are not mentioned at the included section</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Domestic flight from Istanbul to Cappadocia</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Domestic flight from Kayseri Airport to Istanbul</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Arrival airport transfer to Kayseri / Nevsehir airport</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-6 mb-2">
                                            <div class="desc-box bg-grey p-4 rounded">
                                                <h5 class="mb-2">Things To Do</h5>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Pamukkale Warm Pools: Take A Characteristic Sauna</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Goreme Public Park: Investigate Limestone Arrangements</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Cemberlitas Hamami: Partake in A Turkish Shower</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i>  Dervish: Watch The Holy Dance</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Vestiges Of Ephesus: Visit The Remnants</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Nargile Bars: Attempt Turkish Tobacco</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Archeological Site Of Troy: An Outing Back In Time</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Kapali Carsisi: Gather Ancient rarities</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Mount Nemrut: Go Climbing</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> The Bosphorus Ship Ride: See The Perspectives!</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Ankara Palace: Return to The Set of experiences
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="single-map mb-4">
                                    <h4>Map</h4>
                                    <div className="map rounded overflow-hidden">
                                        <div style={{ width: "100%" }}>

                                            <iframe class=" rounded overflow-hidden" height="400" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12743709.802596606!2d26.175838542265982!3d38.75780273089606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b0155c964f2671%3A0x40d9dbd42a625f2a!2sTurkey!5e0!3m2!1sen!2sin!4v1663870020352!5m2!1sen!2sin" ></iframe>


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
