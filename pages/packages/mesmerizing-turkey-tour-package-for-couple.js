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

                <title>TripzyGo - Book Turkey Tour Package For Couple - Turkey Trip For Couple</title>
                <meta name="description" content="Looking for a honeymoon Turkey package ? We offer the most affordable Turkey tour package for couple. Enjoy a romantic Turkey trip for couple with us! Book now." />
                <meta name="keywords" content="Turkey package for couple, Turkey tour package for couple, turkey trip for couple" />
                <link rel="icon" href="/icon.png" />
                <link rel="canonical" href="https://www.tripzygo.in/packages/mesmerizing-turkey-tour-package-for-couple" />
                <meta property="og:url" content="https://www.tripzygo.in/packages/mesmerizing-turkey-tour-package-for-couple" />
                <meta property="og:title" content="Book Turkey Tour Package For Couple - Turkey Trip For Couple" />
                <meta property="og:description" content="Looking for a honeymoon Turkey package ? We offer the most affordable Turkey tour package for couple. Enjoy a romantic Turkey trip for couple with us! Book now." />
                <meta property="og:image" content="https://www.tripzygo.in/images/international_packages/mesmerizing_turkey_tour_package_for_couple/1.webp" />
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
                                        <h2 className="mb-1">Mesmerizing Turkey Tour Package For Couple</h2>

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
                                                        <img className='blog_image' src="/images/international_packages/mesmerizing_turkey_tour_package_for_couple/1.webp" alt="Turkey package for couple" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/mesmerizing_turkey_tour_package_for_couple/2.webp" alt="Turkey package for couple" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/mesmerizing_turkey_tour_package_for_couple/3.webp" alt="Turkey tour package for couple" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/mesmerizing_turkey_tour_package_for_couple/4.webp" alt="Turkey tour package for couple" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/mesmerizing_turkey_tour_package_for_couple/5.webp" alt="turkey trip for couple" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/mesmerizing_turkey_tour_package_for_couple/6.webp" alt="turkey trip for couple" />
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
                                                        <img className='blog_image' src="/images/international_packages/mesmerizing_turkey_tour_package_for_couple/1.webp" alt="Turkey package for couple" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/mesmerizing_turkey_tour_package_for_couple/2.webp" alt="Turkey package for couple" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/mesmerizing_turkey_tour_package_for_couple/3.webp" alt="Turkey tour package for couple" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/mesmerizing_turkey_tour_package_for_couple/4.webp" alt="Turkey tour package for couple" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/mesmerizing_turkey_tour_package_for_couple/5.webp" alt="turkey trip for couple" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/mesmerizing_turkey_tour_package_for_couple/6.webp" alt="turkey trip for couple" />
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
                                                <div>Turkey is a place for royals. </div>
                                                <div class="mb-0">If you want to have a luxury vacation, this is the place you must choose.</div>
                                                <div>With sweet Turkish delights, luxurious baths, and famous Turkish bazars, the place has a lot to explore and you will enjoy the exploration with your partner. </div>
                                                <div>You can indulge your partner in sweets, baths, and shopping. </div>
                                                <div>The hot air balloon ride is also a romantic affair. </div>
                                                <div>With all of that, you can have a great time with your partner in Turkey. </div>
                                                <div>To allow you enjoy that, here we are with an amazing Turkey package for couple including every royal and luxury activity to do in Turkey in the tour itinerary.</div>
                                                <div>Don’t wait up. Book this Turkey tour package for couple now and have the most amazing time of your life with many memories and moments to make on your trip.</div>
                                            </div>
                                        </div>


                                    </div>
                                </div>

                                <div class="tour-includes mb-4">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td><i className="fa fa-clock-o pink mr-1" aria-hidden="true"></i> Days : 8 Nights / 9 Days </td>
                                                <td><i class="fa fa-group pink mr-1" aria-hidden="true"></i> People : 1</td>

                                            </tr>
                                            <tr>
                                                <td><i class="fa fa-inr pink mr-1" aria-hidden="true"></i> Total Tour Cost : INR 1,20,950/-* </td>
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
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After breakfast, we have Istanbul City Tour.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Our first visit will be HIPPODROME. Ancient Hippodrome was the scene of chariot races, with the three monuments; the Obelisk of Theodosius, the bronze Serpentine Column and the Column of Constantine. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Than we will visit SULTANAHMET IMPERIAL MOSQUE. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Across from Hagia Sophia Grand Mosque, it was built in the 16th century by the architect Mehmet, is known as the BLUE MOSQUE because of its magnificent interior decoration of blue Iznik tiles.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Our next visit will be HAGIA SOPHIA GRAND MOSQUE. The Hagia Sophia Grand Mosque, previously known as the Church of Divine Wisdom, is simply the best of its kind! Hagia Sophia Grand Mosque is the greatest surviving example of Byzantine Architecture.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> For 1000 years, it was once the largest church in the world, decorated with stunning 6th century golden mosaics.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Today it is a mosque.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Lunch break at 13:00 pm.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After the lunch, One Above Group will take you to the ASIL EFENDI which is a unique atmosphere with reasonable prices for your shopping. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Here you will find; Exotic Spices and Herbs, Turkish Baklava, Turkish Delights, Turkish Coffee, nuts and fruits, small souvenirs such as Ceramic Handicrafts, Evil Eyes totems, all naturel olive oil, soaps and many other goods in Souvenir Shops and stores.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After the tour, transfer back to your hotel. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> OPTIONAL DINNER CRUISE ON THE BOSPHORUS TOUR: Tonight Between 19:30 to 23:30 we have an optional Entertaining Dinner Cruise program on the Bosphorus, where Europe and Asia are connected. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> You will spend an unforgettable night on the Bosphorus with dinner, unlimited local alcoholic and non-alcoholic & soft drinks, belly dance show, Turkish Folklore show, DJ Performance and great entertainment on Bosphorus Dinner Cruise.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> End of the entertainment at about midnight 00:00 am, transfer to your hotel.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Overnight in Istanbul.</div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 3</span>  - Gallipoli Tour</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> At 06:00 or 06:30 am we depart for Gallipoli in order to visit the battle fields.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Two hours later we will give you 20 minutes for relaxing in a restaurant area. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> We will arrive Gallipoli around 12:00 pm. and we will have lunch break, relax a little bit and then depart for the battle fields. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Visit Gabatepe Museum. Start visiting the fields with Ariburnu Cemetery and Anzac Cove because these are the places where the war had started. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Then Beach Cemetery, Lone Pine and Chunuck Bair.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After the tour we will drive you to the hotel.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Overnight in Canakkale.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 4</span>  - Troy Tour - Pergamon – Kusadasi</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> We depart at 08:30 and driving 30 minutes for to Troy.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Visit the famous archeological and mythological site of Troy, home of the Trojan Horse and Helen of Troy.  </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After Troy tour, 3 hour drive to Pergamon.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Lunch break around 13:00 pm. and after the lunch departure for tour of the magnificent acropolis of Pergamon. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Its impressive temples and library made it a renowned cultural and political centre at that times.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Bergamon is a famous city for its jewellery, stones and silver.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> So on the way, we will visit a jewellery center for 30 minutes.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Arrival to Kusadasi around 18:00 pm.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Overnight in Kusadasi.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 5</span> - Kusadasi - Ephesus Tour - Turkish Village Sirince</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After breakfast between 08:30 am, departure from hotel fully guided tour of Ephesus, one of the best-preserved ancient sites in the world en - route, visiting the Temple of Artemis, Curetes street, famous Roman baths, Celsus Library and Grand theatre.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Lunch break around 13:00 pm. After the lunch, we will visit a place, which continues to perform one of the oldest arts of Turkey; a carpet-weaving centre. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After lunch, we will do a Turkish Village Tour. Sirince’s construction style today belongs to Anatolian Greeks. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> The houses on the slope are all Orginal with their white paints. Sirince Village also has a fantastic reputation for making some of the best wines in Turkey - especially fruit wines.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> We will see the vineyards and it is time to learn how to make fruit wine.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> In the evening, you will be tested about your knowledge of making fruit wine.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> On the way, we will visit one of the famous leather production centers of the region, where you will have the opportunity to get a good factory rate. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> On this guided tour, you will avoid the constant nagging and sometimes bullying that is well known in the markets of Turkey.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Enabling you to enjoy the shopping experience whilst gaining the knowledge of the ancient craftsmen.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Overnight in Kusadasi.</div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 6</span> - Kusadasi - Pamukkale Tour</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> We depart for Pamukkale at 08:00 am.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Upon arrival to Pamukkale we have a lunch break until 13:30 pm. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Afterwards we shall visit the calcium terraces of Pamukkale (cotton castle) and the ruins of Hierapolis, then walk around this natural phenomenon and have the option of lying in the waters of the natural springs.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Denizli/Pamukkale means seaside in Turkish and is located on the Buyuk Menderes River.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> It is a growing industrial town, known for its textile industry and outlet shopping.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> You will visit one of the famous textile factories of Pamukkale. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> OPTIONAL TANDEM PARAGLIDING: After Pamukkale Trip, we recommend you to Optional Pamukkale Paragliding tour. Make your Pamukkale Tour unforgettable by participating in Pamukkale Tandem Paragliding Tour.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Enjoy a flight over the stunning and infamous White Mountain in Pamukkale and observe spectacular views over this unique area's attractions. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Tandem Paragliding in Pamukkale is an ideal alternative experience for those who wish to feel some excited moments.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> It can also be the perfect way to explore the attractions from above and appreciate the beauty of the natural scenery. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> This tour will end approximately 17.30 and then you will be back to your hotel.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> OPTIONAL HOT AIR BALLOON TOUR: As an option, the next day, we will have the opportunity to take a Hot Air Balloon Flight over .</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Pamukkale's unique white travertines early in the morning, if you want to experience this perfect and unique hot air balloon trip, please make your reservation before you go to Pamukkale.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Overnight in Pamukkale.</div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 7</span>  - Pamukkale to Antalya</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> For our dearest guests who experience the Hot Air Balloon Tour in Pamukkale, we will depart to the area where balloons take-off at 05:30 in the morning.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> On the the Balloon, you will witness the magnificent and unique view of nature by viewing the morning sunrise over the ancient city of Hierapolis and Cotton White Travertines which is listed as one of the best 7 wonders of the world and registered in the UNESCO heritage list.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After the Hot Air Balloon Excursion, we will celebrate our landing with champagne ceremony and return to the hotel for a delicious breakfast.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After breakfast, at 10:00 am. ,we depart for Antalya.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After 2 hour we will have coffee break, after coffee break then continue to Antalya.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Dinner and Overnight in Antalya.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 8</span>  - Antalya Old City Tour and Waterfalls</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After breakfast drive to Antalya Old City ( Kaleiçi ) Marina, Clock Tower, Hadrian's Gate, Broken Minaret, Hıdırlık Tower.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Kaleici is a small historic part of Antalyas modern city, also known as the Old City of Antalya.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> In history it was once the sprawling modern Roman town, then the Byzantine Empire, then Seljuks, and finally the Ottoman Turkish town.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> The Hadrian's Gate (or Hadrianus Gate or The Three Gates is a triumphal arch which was built in the name of the Roman emperor Hadrian.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Antalya's broken wonder is the Broken Minaret of the Korkut Mosque, which itself was built originally as a Roman temple in the 2nd century AD, and thus did not have a minaret at all.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Hıdırlık Tower is a landmark tower of tawny stone in Antalya, Turkey, where Kaleiçi meets Karaalioglu Park.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> It is believed to be built in Hellenistic era on a square plan and later turned into circular tower in 2nd century AD and was used as either a fortification or a lighthouse in the past.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> We have lunch at the hotel and than depart for  Duden Waterfalls.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> All the streams of the region aim at finding their way into the Mediterranean and they pour down the slopes of the Taurus, sometimes overland sometimes underground and reaching their destination, result in lovely waterfalls, of which there are more than twenty.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After tour come back to hotel and rest of day is yours.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Overnight in Antalya.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 9</span>  - Antalya to Istanbul - End of Tour </h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Today we depart for Antalya airport for our domestic flight to Istanbul and then back to home. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> We hope your tour was a memorable one and we would like to see you in the future in one of our tours again.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Have a nice trip back home and thanks for choosing One Above Turkey.</div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div class="col-lg-12 col-md-6 mb-2">
                                            <div class="desc-box bg-grey p-4 rounded">
                                                <h5 class="mb-2">Inclusions</h5>
                                                <ul>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Return Airport transfers</li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Daily breakfastat hotel</li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Istanbul City Tour</li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Gallipoli Tour</li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Troy Tour - Pergamon – Kusadasi</li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Kusadasi - Ephesus Tour - Turkish Village Sirince</li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Kusadasi - Pamukkale Tour</li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Antalya Old City Tour And Waterfalls</li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> GST & Visa Assisstance</li>


                                                </ul>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-6 mb-2">
                                            <div class="desc-box bg-grey p-4 rounded">
                                                <h5 class="mb-2">Exclusions</h5>
                                                <ul>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> International Flights  </li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Optional Tours</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Insurance: All types</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Turkey entry visa</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Items of a personal nature such as alcoholic drinks, cold drinks, laundry</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Any others expenses which are not mentioned at the included section</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Domestic flight ticket from Antalya to Istanbul</li>
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

                                            <iframe class=" rounded overflow-hidden" height="400" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12743709.802596604!2d26.17583854226598!3d38.75780273089607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b0155c964f2671%3A0x40d9dbd42a625f2a!2sTurkey!5e0!3m2!1sen!2sin!4v1663651634783!5m2!1sen!2sin"></iframe>

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
