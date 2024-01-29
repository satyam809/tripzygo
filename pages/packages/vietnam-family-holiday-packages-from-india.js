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

                <title>TripzyGo - Get Vietnam Family Holiday Packages From India - Best Family Vacations In Vietnam</title>
                <meta name="description" content="Get Vietnam family holiday packages from India. Book the best family vacations in Vietnam to get exciting deals on Vietnam family tour package from India." />
                <meta name="keywords" content="vietnam family holiday packages from India, best family vacations in vietnam, vietnam family tour package from india" />
                <link rel="icon" href="/icon.png" />
                <link rel="canonical" href="https://www.tripzygo.in/packages/vietnam-family-holiday-packages-from-india" />
                <meta property="og:url" content="https://www.tripzygo.in/packages/vietnam-family-holiday-packages-from-india" />
                <meta property="og:title" content="Get Vietnam Family Holiday Packages From India - Best Family Vacations In Vietnam" />
                <meta property="og:description" content="Get Vietnam family holiday packages from India. Book the best family vacations in Vietnam to get exciting deals on Vietnam family tour package from India." />
                <meta property="og:image" content="https://www.tripzygo.in/images/international_packages/vietnam_family_holiday_packages_from_india/1.webp" />
            </Head>
<ShareButton/>
<PopularityWidget packageCount="77" progressBarPercentage="75%"/>
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
                                        <h2 className="mb-1">Vietnam Family Holiday Packages From India</h2>

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
                                                        <img className='blog_image' src="/images/international_packages/vietnam_family_holiday_packages_from_india/1.webp" alt="vietnam family holiday packages from India" />

                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/vietnam_family_holiday_packages_from_india/2.webp" alt="vietnam family holiday packages from India" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/vietnam_family_holiday_packages_from_india/3.webp" alt="best family vacations in vietnam" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/vietnam_family_holiday_packages_from_india/4.webp" alt="best family vacations in vietnam" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/vietnam_family_holiday_packages_from_india/5.webp" alt="vietnam family tour package from india" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/vietnam_family_holiday_packages_from_india/6.webp" alt="vietnam family tour package from india" />
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
                                                        <img className='blog_image' src="/images/international_packages/vietnam_family_holiday_packages_from_india/1.webp" alt="vietnam family holiday packages from India" />

                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/vietnam_family_holiday_packages_from_india/2.webp" alt="vietnam family holiday packages from India" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/vietnam_family_holiday_packages_from_india/3.webp" alt="best family vacations in vietnam" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/vietnam_family_holiday_packages_from_india/4.webp" alt="best family vacations in vietnam" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/vietnam_family_holiday_packages_from_india/5.webp" alt="vietnam family tour package from india" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/vietnam_family_holiday_packages_from_india/6.webp" alt="vietnam family tour package from india" />
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
                                                <div>Thinking of a family holiday to an affordable place? Well, you can have the best family vacations in Vietnam. Vietnam is a beautiful country with amazing culture and delicious cuisines. The beaches, rivers, and other natural attractions in Vietnam are breathtaking and you can have a great time enjoying at the beaches looking at the sea and rivers of the country.</div>
                                                <div class="mb-0">You can also take your family to the holy and peaceful abode in Buddhist pagodas for a calming and relaxing time, and there is a lot more to do on your family vacations to Vietnam.</div>
                                                <div>This amazing Vietnam family holiday package from India offers you all of that at a cheap and affordable price for the most amazing experiences on your Vietnam family vacations.</div>
                                                <div>Have the most amazing vacations of your life and make your trip memorable by booking this amazing Vietnam family holiday package from India.</div>
                                            </div>
                                        </div>


                                    </div>
                                </div>


                                <div class="tour-includes mb-4">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td><i className="fa fa-clock-o pink mr-1" aria-hidden="true"></i> Days : 11 Nights/12 Days</td>
                                                <td><i class="fa fa-group pink mr-1" aria-hidden="true"></i> People : 1</td>

                                            </tr>
                                            <tr>
                                                <td><i class="fa fa-inr pink mr-1" aria-hidden="true"></i> Total Tour Cost : INR 54,998/-*</td>
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
                                                    <h5 class="mb-0"><span>Day 1</span> - Hanoi: Arrival and day at leisure</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "block;" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Upon your arrival in Hanoi with your better half, an agent’s representative will meet you at the airport and transfer you to the hotel. Register yourself at the reception and relax in your room.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Your day is at leisure and you can spend it as per your convenience. Visit the local markets and enjoy a romantic dinner. Come back to the hotel and snuggle the night away.</div>


                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 2</span> - Hanoi: Scintillating city tour</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none;" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Have a terrific morning meal and go out for sightseeing around Hanoi. Go to the final resting place of Vietminh leader, Ho Chi Minh. Also go to One Pillar Pagoda, President Palace, and the Temple of Literature with your partner, and get acquainted with the local traditions and customs.</div>
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Visit The Quan Thanh Pagoda Next, stop by The Tran Quoc Pagoda. Sample lunch at an Indian restaurant before heading to the Hoa Lo Prison Museum with a look at the turbulent history of Vietnamese independence.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> End your day with the water puppet show and get back to the hotel for a good night's rest.</div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 3</span> - Hanoi: Halong Bay day cruise</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none;" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Enjoy a refreshing day cruise as part of your Vietnam Laos tour.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Enjoy a filling breakfast and journey to Ha Long Bay with your partner for a four-hour cruise. Delight in the scenery and appreciate the lengthy drive as you are later welcomed on board.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Look forward to taking in the spectacular views as you cruise along the picturesque landscapes on this cruise highlight. You will have a pleasant meal at your own expense before continuing your ride to the limestone caves. You'll be escorted back to the harbour to relax in your hotel in Hanoi for one more night.</div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 4</span> - Ho Chi Minh City: Transfer and half day city tour</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none;" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Enjoy a healthy breakfast, check out of the hotel, get taken to the airport terminal in order to board your flight to Ho Chi Minh city. Upon arrival, register yourself at the reception and pre-equip for a tour of the local art galleries and boutiques. Appreciate Vietnamese contemporary art and learn more about the local, contemporary scene.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Alternatively, you can decide to take a one-half day tour of the Cu Chi tunnels. Comprising more than 200 km of underground tunnels, the Cu Chi Tunnels network included innumerable trap doors, storage sites, weapon factories, field hospitals, and control centers. Displayed life during the Vietnam War, the tunnels will give you a unique and intriguing experience.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Travel back to the hotel in Ho Chi Minh city and revel in the fresh night.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 5</span> - Ho Chi Minh City: Enchanting city tour</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none;" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> First stop is at the Old Saigon Post Office, a typical colonial French building which attracts tourists with its architecture.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> You will be navigated to the Notre Dame Cathedral, Opera House, Dong Khou Street, and the Ben Thanh market where you can purchase souvenirs.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Treat yourself to a delightful meal at a local restaurant and then you will be taken to the Chinatown. Buy a fantastic gift for your loved one and pay for your own shopping back at the Chinatown. Your last stop of the day is Thien Hau Pagoda, a temple devoted to Chinese marine deity, Mazu, where you can receive blessings for good marital relationships.</div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 6</span> - Siem Reap: Transfer and local sightseeing</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none;" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Enjoy a hearty breakfast and get to the airport to board your flight. Relax on the trip to Siem Reap. Upon arriving in Siem Reap, a local citizen representative will have your passport at the hotel and then take you from there.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Artisan D' Angkor is a traditional handicrafts center where you can learn about the wood and stone carving process. At the Killing Fields, you'll find a distinctive glass memorial stupa that contains the bones of victims of the Khmer Rouge from the late 1970s.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> You'll be able to enjoy dinner at a nearby restaurant while watching a performance in the traditional Apsara Dance Show. Return to the hotel in the afternoon for a relaxing night of sleep.</div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 7</span> - Siem Reap: Historical tour of Angkor Thom</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none;" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Have a breakfastand & gear up until you come to the Angkor Thom South Gate. You will go to the Bayon Temple, the Royal Enclosure, the Phimeanakas, and the Leper King Terrace. Allow your love to bloom among the debris and be captivated by this antiquated architecture.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Continue your visit to Ta Prohm, which is the most atmospheric ruin at Angkor. After a delectable lunch, resume your sightseeing.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Visit Thommanon, a temple located east of the Gate of Victory of Angkor Thom, with your loved one. Stop by Chau Say Tevoda, Ta Keo, and the grand Angkor Wat temple complex. Head for Bakheng Hill for a breathtaking view of the sunset, which is the perfect endpoint to this exciting day. Don't forget to visit Phnom Bakheng as well.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Enjoy a buffet dinner and accompanying traditional Apsara Dance Show. You can also visit Pub Street and Angkor Night Market to enjoy the Cambodian nightlife.</div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 8</span> - Siem Reap: Trip to Floating village</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none;" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Have a good breakfast and head on to bring a wander around the Floating Village on the Tonlé Sap Lake with your significant other. Ride in a traditional boat on the lake to enjoy views of the shimmering floating villages, huge water traps, and monumental wooden houses.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Enjoy a delectable lunch, and then you will enjoy an exciting journey to the Pouk district. Go to the Angkor Silk Farm where you will be educated about the breeding and extraction of silkworms. Also, buy some souvenirs for your family. On the return trip, stop at the Western Baray, which is great for photo ops.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Come back to the hotel for a mouth-watering dinner.</div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 9</span> - Luang Prabang</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none;" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Before heading to the airport, you may wish to check out the local markets nearby. You will end your honeymoon in Vietnam and Laos when you board your flight to Luang Prabang.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Enjoy your day at leisure after registering at the reception. This historical city can be explored with your partner at the Handicraft Night Market.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Get back to your hotel room and spend the rest of the night with your partner.</div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 10</span> - Luang Prabang: Bewitching local sightseeing</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none;" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Visit the renowned Royal Palace Museum, which houses an impressive art collection. Take a luxury cruise on the Mekong River, which includes a scenic view of the countryside. Venture to the amazing Pak Ou Caves, which are renowned for their religious significance.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Pay a visit to the town of Ban Xang Hai, and access the renowned Buddhist temple Wat Xiengthong for the promise of great blessings. Your next stop of the day is the Traditional Arts and Ethnology Center for an in-depth study of the culture of Laos. Finally, see Wat Siphouthabaht, for a beautiful sunset.</div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 11</span> - Historical and cultural sightseeing</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none;" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Wake up early and participate in the local lavender devotee community by observing the morning rituals of the saffron-clad monks on their way to a service. Also connect with the local shopping experience near the Palace of Versailles to get a firsthand feel for the community.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Return to the hotel for a delectable breakfast, then relax in your room for a while. Proceed to Phousi Hills which offer a breathtaking view of the city and the Mekong River. Your next stop for the day is Wat Visoun, the oldest temple in the city which used to be a home to Buddha Prabang ages ago.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Visit the Kuang Si Waterfall and the Kuang Si Waterfalls Butterfly Park on the final day of your honeymoon and spend time thinking back on the wonderful time you have spent together. Come back to your hotel.</div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 12</span> - Time to goodbye</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none;" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> On the final day of your honeymoon, you will be greeted at the camp's capitán and informed about your upcoming jungle safari. Enjoy a scenic cruise at the end of your honeymoon, and go on a relaxing boat trip to the Tad Sae waterfall.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Stop by the Elephant Village Restaurant, where a buffet lunch is served, before trying a walk. You may also visit the crypt of Henri Mouhot, the first European to rediscover Angkor Wat. Go for your flight to Siem Reap as your honeymoon in Cambodia, Vietnam, and Laos conclude.</div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-6 mb-2">
                                            <div class="desc-box bg-grey p-4 rounded">
                                                <h5 class="mb-2">Inclusions</h5>
                                                <ul>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Private transfers</li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> English speaking guide</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> Accommodation with breakfast at mentioned hotels</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> Meals (Food only/No drinks) as mentioned in program</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> All Entrance fees for the trip as mentioned in programmer</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> In tour flight: Hanoi - Ho Chi Minh - Siem Reap by Vietnam Airlines, Siem Reap - Luang Prabang by Cambodia Angkor Air</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> Service charges, room tax, & baggage handling2 mineral water bottles daily/person</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> All taxes</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> 24x7 support during the tour</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> Local guides</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> Chauffeur for the tour</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> Special assistance in each city for smooth check-ins</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> VISA on arrival guaranteed letter</li>

                                                </ul>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-6 mb-2">
                                            <div class="desc-box bg-grey p-4 rounded">
                                                <h5 class="mb-2">Exclusions</h5>
                                                <ul>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> International flights & departure taxes</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Personal expenses, tips, and gratuities</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Travel insurance</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Beverages</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Other services not mentioned in inclusions</li>

                                                </ul>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-6 mb-2">
                                            <div class="desc-box bg-grey p-4 rounded">
                                                <h5 class="mb-2">Things To Do</h5>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> In Halong Sound, You Can Journey and Kayak</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Experience Cruising in Mekong Delta</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Taste Vietnamese Cuisine</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Crawl Through the Cu Chi Tunnel</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Living with the Authentic Shows in Hỏa Lò Jail</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Enjoy the Melodic Event at Saigon Show House</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Experience the Sizzling Nightlife of Ho Chi Minh City</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Try Climbing and Cycling at Mai Chau</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Shop the Best Silk Materials in Hoi an</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="single-map mb-4">
                                    <h4>Map</h4>
                                    <div class="map rounded overflow-hidden">
                                        <div style={{ width: "100%" }}>
                                            <iframe class=" rounded overflow-hidden" height="400" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15738110.955688218!2d96.86305347702816!3d15.628352495661526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31157a4d736a1e5f%3A0xb03bb0c9e2fe62be!2sVietnam!5e0!3m2!1sen!2sin!4v1668068461073!5m2!1sen!2sin"></iframe>
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