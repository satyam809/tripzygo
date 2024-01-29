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

                <title>TripzyGo - Turkey Trip Package From India With 8 Days Turkey Itinerary</title>
                <meta name="description" content="Book your Turkey trip package from India with the well planned 8 days Turkey itinerary to give you best time. Grab this cool and exciting Turkey tour package." />
                <meta name="keywords" content="Turkey Trip package from India,  8 days Turkey itinerary, Turkey tour package" />
                <link rel="icon" href="/icon.png" />
                <link rel="canonical" href="https://www.tripzygo.in/packages/turkey-trip-package-from-india-with-eight-days-turkey-itinerary" />
                <meta property="og:url" content="https://www.tripzygo.in/packages/turkey-trip-package-from-india-with-eight-days-turkey-itinerary" />
                <meta property="og:title" content="Turkey Trip Package From India With 8 Days Turkey Itinerary" />
                <meta property="og:description" content="Book your Turkey trip package from India with the well planned 8 days Turkey itinerary to give you best time. Grab this cool and exciting Turkey tour package." />
                <meta property="og:image" content="https://www.tripzygo.in/images/international_packages/turkey_trip_package_from_india_with_8_days_turkey_itinerary/1.webp" />
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
                                        <h2 className="mb-1">Turkey Trip Package From India With 8 Days Turkey Itinerary</h2>

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
                                                        <img className='blog_image' src="/images/international_packages/turkey_trip_package_from_india_with_8_days_turkey_itinerary/1.webp" alt="Turkey Trip package from India" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/turkey_trip_package_from_india_with_8_days_turkey_itinerary/2.webp" alt="Turkey Trip package from India" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/turkey_trip_package_from_india_with_8_days_turkey_itinerary/3.webp" alt="8 days Turkey itinerary" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/turkey_trip_package_from_india_with_8_days_turkey_itinerary/4.webp" alt="8 days Turkey itinerary" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/turkey_trip_package_from_india_with_8_days_turkey_itinerary/5.webp" alt="Turkey tour package" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/turkey_trip_package_from_india_with_8_days_turkey_itinerary/6.webp" alt="Turkey tour package" />
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
                                                        <img className='blog_image' src="/images/international_packages/turkey_trip_package_from_india_with_8_days_turkey_itinerary/1.webp" alt="Turkey Trip package from India" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/turkey_trip_package_from_india_with_8_days_turkey_itinerary/2.webp" alt="Turkey Trip package from India" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/turkey_trip_package_from_india_with_8_days_turkey_itinerary/3.webp" alt="8 days Turkey itinerary" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/turkey_trip_package_from_india_with_8_days_turkey_itinerary/4.webp" alt="8 days Turkey itinerary" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/turkey_trip_package_from_india_with_8_days_turkey_itinerary/5.webp" alt="Turkey tour package" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/turkey_trip_package_from_india_with_8_days_turkey_itinerary/6.webp" alt="Turkey tour package" />
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
                                                <div>A Turkey Trip package from India will be a different kind of experience</div>
                                                <div class="mb-0">It’s a royal place and everything you do here is grand and luxurious.</div>
                                                <div>You can indulge in the royal hammam baths, have sweet delights of the famous Turkish sweets and bakalavas, and go for a shopping spree in the famous and popular Turkish bazars.</div>
                                                <div>The hot air balloon ride is another major attraction in Turkey and experiencing the ride is blissful experience. </div>
                                                <div>Enjoy all of it with our Turkey trip package from India designed with an extraordinary 8 days Turkey itinerary customised just for you.</div>
                                                <div>Book your Turkey tour package now by getting in touch with a TripzyGo travel specialist.</div>
                                            </div>
                                        </div>


                                    </div>
                                </div>

                                <div class="tour-includes mb-4">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td><i className="fa fa-clock-o pink mr-1" aria-hidden="true"></i> Days : 7 nights./ 8 days</td>
                                                <td><i class="fa fa-group pink mr-1" aria-hidden="true"></i> People : 1</td>

                                            </tr>
                                            <tr>
                                                <td><i class="fa fa-inr pink mr-1" aria-hidden="true"></i> Total Tour Cost : INR 73,499/-*</td>
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
                                                    <h5 class="mb-0"><span>Day 4</span> - Kusadasi - Ephesus Tour - Turkish Village Sirince</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After breakfast between 08:30 am, departure from hotel fully guided tour of Ephesus, one of the best-preserved ancient sites in the world en - route, visiting the Temple of Artemis, Curetes street, famous Roman baths, Celsus Library and Grand theatre.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Lunch break around 13:00 pm.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After the lunch, we will visit a place, which continues to perform one of the oldest arts of Turkey; a carpet-weaving centre. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After lunch, we will do a Turkish Village Tour. Sirince’s construction style today belongs to Anatolian Greeks.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> The houses on the slope are all Orginal with their white paints. Sirince Village also has a fantastic reputation for making some of the best wines in Turkey - especially fruit wines. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> We will see the vineyards and it is time to learn how to make fruit wine.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> In the evening, you will be tested about your knowledge of making fruit wine. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> On the way, we will visit one of the famous leather production centers of the region, where you will have the opportunity to get a good factory rate.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> On this guided tour, you will avoid the constant nagging and sometimes bullying that is well known in the markets of Turkey</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Last stop is Three Beauties, three beautiful fairy chimneys with their hats, which is the symbol of Cappadocia. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Enabling you to enjoy the shopping experience whilst gaining the knowledge of the ancient craftsmen. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Overnight in Kusadasi.</div>



                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 5</span>  - Kusadasi - Pamukkale Tour</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> We depart for Pamukkale at 08:00 am. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Upon arrival to Pamukkale we have a lunch break until 13:30 pm.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Afterwards we shall visit the calcium terraces of Pamukkale (cotton castle) and the ruins of Hierapolis, then walk around this natural phenomenon and have the option of lying in the waters of the natural springs.  </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Denizli/Pamukkale means sea side in Turkish and is located on the Buyuk Menderes River.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> It is a growing industrial town, known for its textile industry and outlet shopping.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> You will visit one of the famous textile factories of Pamukkale. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> This tour will end approximately 18.30 and you will be back to your hotel. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Overnight in Kusadasi.</div>
                                                        <h5 class="mb-0">OPTIONAL TANDEM PARAGLIDING: </h5>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After Pamukkale Trip, we recommend you to Optional Pamukkale Paragliding tour.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Make your Pamukkale Tour unforgettable by participating in Pamukkale Tandem Paragliding Tour.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Enjoy a flight over the stunning and infamous White Mountain in Pamukkale and observe spectacular views over this unique area's attractions.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Tandem Paragliding in Pamukkale is an ideal alternative experience for those who wish to feel some excited moments.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> It can also be the perfect way to explore the attractions from above and appreciate the beauty of the natural scenery. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> This tour will end approximately 17.30 and then you will be back to your hotel.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> We will stay in the thermal hotel, which has the most beautiful natural hot water of Pamukkale, and you can enjoy the hot thermal pool in the hotel. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After breakfast you will have free time in Cappadocia.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Today we will depart for Kayseri Airport for our domestic flight to Istanbul and then back to home. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> We hope your tour was a memorable one and we would like to see you in the future in one of our tours again. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Have a nice trip back home and thanks for choosing One Above. </div>


                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 6</span> - Kusadasi - Izmir to Nevsehir </h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After breakfast, we depart for İzmir Airport for our domestic flight to Cappadocia. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Transfer from Kayseri airport to your hotel. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> The rest of the day is yours to explore Cappadocia. </div>
                                                        <h5 class="mb-0">OPTIONAL CAPPADOCIA TURKISH NIGHT SHOW: </h5>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> During the evening at 19:30 PM., we have an Optional Tour to enjoy our Turkish Night Shows, which are traditions that have survived from the Ottoman Empire to the present day. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> You may have great fun in the real caves, with the rich Anatolian food menu, unlimited local alcoholic and non-alcoholic drinks, belly dance show, Turkish Folklore show, DJ Performance and warm service of Anatolian Hospitality.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Overnight in Cappadocia. </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 7</span> - Cappadocia Underground City </h5>
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
                                                    <h5 class="mb-0"><span>Day 8</span>  - Cappadocia to Istanbul - End of the Tour </h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After breakfast you will have free time in Cappadocia.  </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Today we will depart for Kayseri Airport for our domestic flight to Istanbul and then back to home. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> We hope your tour was a memorable one and we would like to see you in the future in one of our tours again. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Have a nice trip back home and thanks for choosing One Above Turkey.</div>

                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div class="col-lg-12 col-md-6 mb-2">
                                            <div class="desc-box bg-grey p-4 rounded">
                                                <h5 class="mb-2">Inclusions</h5>
                                                <ul>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> 2 nights hotel in Cappadocia  </li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> 2 nights hotel in Istanbul</li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> 3 nights hotel in Kusadasi</li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> 7 open buffet breakfasts</li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Guided Istanbul City Tour</li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Guided Istanbul Bosphorus Cruise Tour</li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Guided Ephesus and Sirince Village Tour </li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Guided Pamukkale and Hierapolis Tour</li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Cappadocia City Tour</li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Transportation in a fully air - conditioned, non - smoking coach</li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Professional English - speaking tour guides</li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Return airport transfer</li>


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
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Domestic flight from Istanbul to Izmir</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Domestic flight from Izmir to Kayseri / Nevsehir</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Domestic flight from Cappadocia to Istanbul</li>
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
