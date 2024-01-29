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

                <title>TripzyGo - Book Affordable Darjelling Pelling Gangtok Tour - Darjelling Pelling Holiday Package</title>
                <meta name="description" content="We offers the best Darjelling Pelling Gangtok Tour with the perfect Darjelling Gangtok itinerary. Book your Darjelling Pelling holiday package and save more." />
                <meta name="keywords" content="darjelling pelling gangtok tour, darjelling gangtok itinerary, darjelling gangtok itinerary" />
                <link rel="icon" href="/icon.png" />
                <link rel="canonical" href="https://www.tripzygo.in/packages/delightful-darjeeling-pelling-gangtok-tour" />
                <meta property="og:url" content="https://www.tripzygo.in/packages/delightful-darjeeling-pelling-gangtok-tour" />
                <meta property="og:title" content="Book Affordable Darjelling Pelling Gangtok Tour - Darjelling Pelling Holiday Package" />
                <meta property="og:description" content="We offers the best Darjelling Pelling Gangtok Tour with the perfect Darjelling Gangtok itinerary. Book your Darjelling Pelling holiday package and save more." />
                <meta property="og:image" content="https://www.tripzygo.in/images/domestic/delightful_darjeeling_pelling_gangtok_tour/1.webp" />
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
                                        <h2 className="mb-1">Delightful darjeeling Pelling Gangtok Tour</h2>

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
                                                        <img className='blog_image' src="/images/domestic/delightful_darjeeling_pelling_gangtok_tour/1.webp" alt="darjeeling pelling gangtok tour" />

                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/delightful_darjeeling_pelling_gangtok_tour/2.webp" alt="darjeeling pelling gangtok tour" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/delightful_darjeeling_pelling_gangtok_tour/3.webp" alt="best darjeeling gangtok itinerary" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/delightful_darjeeling_pelling_gangtok_tour/3.webp" alt="best darjeeling gangtok itinerary" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/delightful_darjeeling_pelling_gangtok_tour/5.webp" alt="darjeeling gangtok itinerary" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/delightful_darjeeling_pelling_gangtok_tour/5.webp" alt="darjeeling gangtok itinerary" />
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
                                                        <img className='blog_image' src="/images/domestic/delightful_darjeeling_pelling_gangtok_tour/1.webp" alt="darjeeling pelling gangtok tour" />

                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/delightful_darjeeling_pelling_gangtok_tour/2.webp" alt="darjeeling pelling gangtok tour" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/delightful_darjeeling_pelling_gangtok_tour/3.webp" alt="best darjeeling gangtok itinerary" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/delightful_darjeeling_pelling_gangtok_tour/3.webp" alt="best darjeeling gangtok itinerary" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/delightful_darjeeling_pelling_gangtok_tour/5.webp" alt="darjeeling gangtok itinerary" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/domestic/delightful_darjeeling_pelling_gangtok_tour/5.webp" alt="darjeeling gangtok itinerary" />
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
                                                <div>A Darjeeling, Pelling, Gangtok tour is an experience that you should have at least once in your life. It is the best of Sikkim with all amazing things to witness and live. You can enjoy amidst the glaciers and meadows in an alpine and subtropical climate and it’s great to be in the vicinity of Kanchenjunga, the third largest peak in the world.</div>
                                                <div class="mb-0">Having an experience like such is like touring goals for many people and you must absolutely not miss it when you have a chance to live this experience at the most decent and affordable prices.</div>
                                                <div>Live the best experience in the amazing cities of Sikkim. Have the best time of your life with your friends, family, and partner in the amazing valleys of Darjeeling, Pelling, and Gangtok and enjoy the best vacation of your life.Surprise your touring partners with this amazing Darjeeling, Pelling, Gangtok holiday package.</div>
                                                <div>Book the package now.</div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div class="tour-includes mb-4">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td><i className="fa fa-clock-o pink mr-1" aria-hidden="true"></i> Days : 4 Nights / 5 Days</td>
                                                <td><i class="fa fa-group pink mr-1" aria-hidden="true"></i> People : 1</td>
                                            </tr>
                                            <tr>
                                                <td><i class="fa fa-inr pink mr-1" aria-hidden="true"></i> Total Tour Cost : INR 16,500/-* </td>
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
                                                    <h5 class="mb-0"><span>Day 1</span> - Gangtok</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "block" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Day Services:  Stay, Cab & Breakfast & Dinner Only</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Meet & Greet on arrival at NJP Railway Station / IXB Airport & transfer to Gangtok (5,500 ft.). On arrival Check-in to hotel & rest of the day at leisure. Overnight stay at Gangtok.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Gangtok, the captivating capital city of Sikkim, is somewhere like a lost kingdom, seeking the attention of travellers from around the world. Hardly explored by travellers; Gangtok proves to be one destination that is rich in history, culture and scenic beauty.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> An important trade centre between India and China for a long time; it is today a busy administrative and business centre and presents an interesting mix of cultures and communities. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> This holiday, if you wish to get completely drenched in the beauty of Sikkim, then this holiday package of five days and four nights, offered by Bharat Booking Holidays, will completely suit your taste and pocket.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Cleint Can Explore nearby by own your own.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Overnight Stay at Hotel.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 2</span> - Gangtok city tour</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Day Services: Breakfast, Stay, Cab </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> MajorAttractions:  Ganesh Tok, Tashi View Point,  Handicraft, Flower Show, Ropeway, Tibet logy, Chorten Stupa, Bakthang, Banjhakri Water Falls.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After a delicious breakfast, embark on a journey to explore the famous attractions of Gangtok, the capital city of Sikkim. First, visit the Bakthang Waterfalls which is quite wide and a great spot to take photographs. Next, you head to Tashi viewpoint for capturing far-reaching views of Mt.Kanchenjunga, the third highest mountains in the world.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> This point is also known for great sunrise views. Then head for Ganesh Tok, the Charming Hindu temple with mesmerizing hilltop views. After this, visit the Enchey Monastery which is believed to be the home of the protecting deities, Khangchendzonga and Yabdean. Enjoy a cable car ride on the Ropeway and catch the bird’s eye view of the surroundings.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Other Gangtok attractions to be covered are Directorate of Handicraft and Handloom, Do Drul Chorten Stupa, Institute of Tibetology, Flower Show, and Banjhakri Falls. After  sightseeing, drive back to the hotel. Stay overnight at the hotel.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> OVER NIGHT STAY AT HOTEL.</div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 3</span> - Gangtok - Pelling </h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Day Services: Breakfast, Stay, Cab & Dinner Only</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After breakfast start for Pelling (6,300 ft.). Enroute visit Samdruptse & Siddheshwar Dham (Chardham) is a huge pilgrimage cum cultural complex located atop Solophok hill in Namchi.On arrival check-in to your hotel.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Major Attractions: Darap village, Rimbi water Falls, Khecheopalri Lake & Khangchendzongha waterfalls, Pemayangtse Monastery, New Helipad Ground.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Pelling Half Day tour - Darap village, Rimbi water Falls, Khecheopalri Lake & Khangchendzongha waterfalls. In the afternoon, the 2nd half tour - Pemayangtse Monastery, and the New Helipad Ground. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> It is a popular destination for its natural scenic beauty and rich cultural heritage. From exploring natural wonders like lakes and waterfalls, engaging in shopping, to unveiling the secrets of historical ruins, there are tonnes of things to do in Pelling.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Overnight stay at Pelling.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 4</span> -  Pelling to Darjeeling </h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Day Services: Breakfast, Stay, Cab & Dinner Only</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After having a flavoursome breakfast you will be taken to Darjeeling from Pelling.Travel through trails decorated with the magical beauty of the Himalayas and the beautiful views of the valleys. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Do not forget to click pictures of the amazing snow covered peaks and the green hillsReach Darjeeling and check-in to the hotel, where you will have the evening free to spend on your leisure.You can explore the absolute delight of the Mall Road in Darjeeling and buy some unique treasures or relax at the hotel.Overnight stay at hotel.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> DARJEELING CITY TOUR -covering The Japanese Temple, Peace Pagoda, Zoological Park,Tea Gardens.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Half day city tour around Darjeeling covering The Japanese Temple and Peace Pagoda,outer view of Tea Garden (Chitrey) P.N. Zoological Park (Thursday close) Over Night Stay. </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 5</span> -  Departure from Darjeeling   </h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Day Services: Breakfast, Cab Only</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Today after breakfast, Check-out from the hotel and proceed from Darjeeling to Bagdogra Airport (IXB)/NJP (Railway Station)/Siliguri (for onward journey.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> End of tour with memorable moments..... </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-6 mb-2">
                                            <div class="desc-box bg-grey p-4 rounded">
                                                <h5 class="mb-2">Inclusions</h5>
                                                <ul>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Transfers from IXB/NJP Airport / Railway Station to Hotel & Vice Versa</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> Non Alcoholic (i.e. juice, Tea/ Coffee) Welcome Drink on arrival in the Hotel</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> Accommodation for 2 adults in one base category Room for 2 Nights</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> Meal Plan –3 Breakfasts</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> Individual cab for sightseeing & transfers</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> Transfer taxes, parking, fuel & driver charges</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-6 mb-2">
                                            <div class="desc-box bg-grey p-4 rounded">
                                                <h5 class="mb-2">Exclusions</h5>
                                                <ul>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Flights, Trains,  etc.</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Monument Entrance Fees,, Permit Charges & Camera Fees</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Personal Expenses like laundry, shopping, telephone bills, tips etc</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Adventure activities like Paragiliading, Sky ride, etc</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Any extra service: Permits, meals etc</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Anything else which is not listed in above details</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Sang-Ngag Choling (Sky Walk)</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-6 mb-2">
                                            <div class="desc-box bg-grey p-4 rounded">
                                                <h5 class="mb-2">Things To Do</h5>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Take a Closer Look at the Mountain Animal with Yak Safari</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Witness Gangtok at a Glance on Cable Ride </div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Enjoy Mountain Biking</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Taste the Local Cuisine of Gangtok</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Witness the Hues of Sunset at Tashi View Point</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Soak in the Beauty of Nathu La Pass </div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Explore the Nature at Shingba Rhododendron Sanctuary</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Try Your Hands on Skiing at Mt Katao</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Go River Rafting in Teesta River</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Trek the Peak at Sandakphu </div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Take a Joy Ride in the Toy Train</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Learn Mountaineering at Himalayan Mountaineering Institute</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Explore Wildlife in Padmaja Naidu Himalayan Zoological Park</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Watch the Sunrise from Tiger Hill </div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Relish Some Darjeeling’s Local Food </div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Live Close to Nature at Darjeeling Blossoms Eco-Tourism</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Enjoy Cottage Camping in Khambuhang Nature Holiday Camp </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="single-map mb-4">
                                    <h4>Map</h4>
                                    <div class="map rounded overflow-hidden">
                                        <div style={{ width: "100%" }}>
                                            <iframe class=" rounded overflow-hidden" height="400" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d905172.1500708293!2d87.90668463887086!3d27.598839620609066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e6a56a5805eafb%3A0xa4c4b857c39b5a04!2sSikkim!5e0!3m2!1sen!2sin!4v1666348624680!5m2!1sen!2sin" width="600" ></iframe>
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