
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
import Carousel from '../../components/Package_Description/descriptionCarousel';
import LocationMap from '../../components/Package_Description/locationMap';
import RelatedPackage from "../../components/Package_Description/RelatedPackages"
import axios from 'axios';
import { useEffect } from 'react'
export default function test() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [obj, setObj] = useState({});
    const getAllPackages = async () => {
        try {
            const url = `https://backend.tripzygo.in/packages?limit=12&destination_search=Maldives`;
            const { data } = await axios.get(url);
            setObj(data);
        } catch (err) {
        }
    };
    useEffect(() => {
        getAllPackages();
    });
    return (
        <div>
            <Head>

                <title>TripzyGo - Romantic Maldives Packages For Couple - Couple Trip To Maldives</title>
                <meta name="description" content="Book a romantic maldives packages for couple. Enjoy a luxury honeymoon trip to maldives with your partner. Plan your couple trip to maldives now. Contact us!" />
                <meta name="keywords" content="honeymoon trip to Maldives, romantic Maldives packages for couple, couple trip to Maldives" />
                <link rel="icon" href="/icon.png" />
                <link rel="canonical" href="https://www.tripzygo.in/packages/romantic-maldives-package-for-couple" />
                <meta property="og:url" content="https://www.tripzygo.in/packages/romantic-maldives-package-for-couple" />
                <meta property="og:title" content="Romantic Maldives Packages For Couple - Couple Trip To Maldives" />
                <meta property="og:description" content="Book a romantic maldives packages for couple. Enjoy a luxury honeymoon trip to maldives with your partner. Plan your couple trip to maldives now. Contact us!" />
                <meta property="og:image" content="https://www.tripzygo.in/images/international_packages/romantic_maldives_package_for_couple/1.webp" />
            </Head>
            <ShareButton />
            <PopularityWidget packageCount="75" progressBarPercentage="75%" />
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
                                        <h2 className="mb-1">Romantic Maldives Package For Couple</h2>

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
                                                        <img className='blog_image' src="/images/international_packages/romantic_maldives_package_for_couple/1.webp" alt="honeymoon trip to Maldives" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/romantic_maldives_package_for_couple/2.webp" alt="honeymoon trip to Maldives" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/romantic_maldives_package_for_couple/3.webp" alt="romantic Maldives packages for couple" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/romantic_maldives_package_for_couple/4.webp" alt="romantic Maldives packages for couple" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/romantic_maldives_package_for_couple/5.webp" alt="couple trip to Maldives" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/romantic_maldives_package_for_couple/6.webp" alt="couple trip to Maldives" />
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
                                                        <img className='blog_image' src="/images/international_packages/romantic_maldives_package_for_couple/1.webp" alt="honeymoon trip to Maldives" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/romantic_maldives_package_for_couple/2.webp" alt="honeymoon trip to Maldives" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/romantic_maldives_package_for_couple/3.webp" alt="romantic Maldives packages for couple" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/romantic_maldives_package_for_couple/4.webp" alt="romantic Maldives packages for couple" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/romantic_maldives_package_for_couple/5.webp" alt="couple trip to Maldives" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/romantic_maldives_package_for_couple/6.webp" alt="couple trip to Maldives" />
                                                    </div>
                                                </SwiperSlide>
                                            </Swiper>





                                        </div>

                                    </div>
                                </div>
                                <div className="description mb-2">
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 mb-2 ">
                                            <div className="desc-box bg-grey p-2 rounded ">
                                                <div class="container">

                                                    <article>
                                                        <input type="checkbox" className='checkbox' id="read_more" role="button" />
                                                        <label for="read_more" onclick=""><span>Read More</span><span>Read Less</span></label>

                                                        <section className='set_padding'>
                                                            <h5 className="mb-2">Romantic Maldives Package For Couple</h5>
                                                            <p >A Romantic Maldives Package For Couple is a vacation package designed specifically for couples who want to experience the romantic beauty of the Maldives. The Maldives is a tropical paradise located in the Indian Ocean, known for its crystal clear waters, white sandy beaches, and lush vegetation. This package offers couples the opportunity to escape the daily grind and enjoy each other's company in a secluded and picturesque setting.</p>
                                                            <p>The package typically includes accommodation in a luxurious resort, and a variety of activities and excursions that are perfect for couples. These activities may include romantic dinners on the beach, spa treatments, snorkeling or scuba diving excursions, and sunset cruises. Some packages may also include a private boat tour, allowing couples to explore the Maldives' vast network of lagoons and atolls. The Maldives is home to a wide variety of marine life and coral reefs, making it a popular destination for snorkeling and diving. Couples can explore the vibrant coral gardens and see a variety of colorful fish and other sea creatures. Many of the resorts also offer snorkeling and diving equipment rental, so couples can explore the underwater world without needing to bring their own gear.</p>

                                                        </section>
                                                        <section className='set_padding'>
                                                            <p >The Maldives is also known for its world-class spa treatments, and many of the resorts offer couples' spa packages. These packages may include massages, facials, and other treatments that are designed to relax and rejuvenate. Many of the resorts also feature indoor and outdoor relaxation areas where couples can unwind and enjoy the tropical surroundings. The spa treatments offered in Maldives are specially curated and designed to provide maximum relaxation and rejuvenation to the couples. The therapists are well-trained and use natural products and techniques that are gentle on the skin and leave you feeling refreshed and rejuvenated.</p>
                                                            <p >Accommodation in Maldives is a treat in itself, many of the resorts in Maldives offer overwater villas that offer stunning views of the crystal clear water and the surrounding islands. These villas typically feature large windows, private decks, and plunge pools. Some even come with glass floors, allowing couples to watch the fish swimming below. The villas are spacious and well-appointed, providing couples with all the comfort and amenities they need for a perfect romantic getaway.</p>

                                                            <p >In addition to these romantic activities, couples for honeymoon trip to Maldives can also enjoy a variety of other activities such as sunset cruises, island hopping, and excursions to local island villages. These excursions allow couples to experience the local culture and see firsthand how the Maldivians live. The Maldives is an archipelago of more than a thousand islands, each island has its unique culture, traditions and customs. Island hopping is an excellent way to explore the local culture and get a taste of the Maldivian way of life. </p>

                                                            <p>Overall, a Romantic Maldives Package For Couple is the perfect way for couples to experience the beauty and romance of the Maldives. With luxurious accommodation, a variety of romantic activities, and beautiful natural surroundings, couples can create lasting memories together in this tropical paradise.</p>
                                                        </section>
                                                    </article>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="description mb-2">
                                    <div class="row">
                                        <div class="col-lg-12 col-md-6 mb-2 ">
                                            <div class="desc-box bg-grey p-4 rounded ">
                                                <h5 class="mb-2">Overview</h5>
                                                <div>Maldives is a hot and trending location for a honeymoon and it never gets old.</div>
                                                <div class="mb-0">Why would it when there are so many romantic beaches and lovely landscapes where couples can openly snuggle and snog each other.</div>
                                                <div>The place is also a land of culture and it’s great to know how vibrant it is.</div>
                                                <div>With greenery all around, sunny beaches, soothing landscapes, and vibrant culture, a honeymoon trip to Maldives is worth every penny.</div>
                                                <div>Moreover, the best part is that it doesn’t cost a lot and you can take it even if you’re on a budget, especially if you take up the any of the romantic Maldives packages for couple with TripzyGo.</div>
                                                <div>Keeping cost in mind, this 4 Nights 5 Days romantic Maldives Package for couple is designed to offer you a great honeymoon experience at a budgeted cost.</div>
                                                <div>With a stay in a deluxe 5 star room and multiple things for comfort along with an excellent travel itinerary and schedule, this package has everything you need to have a great honeymoon.</div>
                                                <div>Book the couple trip to Maldives now for an amazing experience that will make your honeymoon more memorable and lovable. </div>
                                            </div>
                                        </div>


                                    </div>
                                </div>

                                <div class="tour-includes mb-4">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td><i className="fa fa-clock-o pink mr-1" aria-hidden="true"></i> Days : 03 Nights/ 04Days</td>
                                                <td><i class="fa fa-group pink mr-1" aria-hidden="true"></i> People : 1</td>

                                            </tr>
                                            <tr>
                                                <td><i class="fa fa-inr pink mr-1" aria-hidden="true"></i> Total Tour Cost : INR 39,030/-*  </td>
                                                <td><i class="fa fa-bed pink mr-1" aria-hidden="true"></i> Hotel : 4 star</td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>


                                <div class="tabs-navbar bg-white sticky bordernone py-2">
                                    <ul id="tabs" class="nav nav-tabs bordernone mb-0 overflow-visible ">
                                        <div class="scrollmenu container px-0 py-1">
                                            <a class="scroller-item2 col-lg-2  py-1" href="#iternary">Itinerary</a>
                                            <a class="scroller-item2 col-lg-2 py-1 " href="#inclusions">Inclusions</a>
                                            <a class="scroller-item2 col-lg-2 py-1 " href="#exclusions">Exclusions</a>
                                            <a class="scroller-item2 col-lg-2 py-1 " href="#things-to-do">Things to Do</a>
                                            <a class="scroller-item2 col-lg-2 py-1 " href="#places-to-eat" >Food</a>
                                            <a class="scroller-item2 col-lg-2 py-1 " href="#faq">FAQ’s</a>

                                        </div>
                                    </ul>
                                </div>
                                <div class="description mb-2">
                                    <div class="row">


                                        <div id="iternary" class="accrodion-grp faq-accrodion mb-4" data-grp-name="faq-accrodion" >
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 1</span> -  Arrival Maldives</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "block" }}>
                                                    <div class="inner">
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Malé International Airport and Hotel Transfer Via Speedboat.</div>
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After landing at Velana International Airport in Malé, our representative would welcome you with warm greetings.</div>
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After giving your luggage, followed by l ading in the speedboat, enjoy the speedboat ride for a few minutes to get transferred to your accommodation.</div>
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Once you reach, complete the check-in formalities at your resort.</div>
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Put your backpack for a while and relax in your room.</div>
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> If you want, you can ask the resort staff to give you a mini-tour of the property.</div>
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> You can hang out outside your property in the afternoon or evening .</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 2</span> - Watersports and Island Hopping</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Treat your tastebuds to the flavorsome breakfast, and then head out to spend the full day at the beaches. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Whether y u are with your soulmate or family or friends, or even solo, fun frolic moments are guaranteed because the sand is pristine at the Malé.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Beaches of Male You can cruise the islands surrounding the Malé for a change on a speedboat.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> You will have the full day at your leisure. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Make sure you wake up early and start your day by plunging into the blue waters for the swim, followed by snorkeling, scuba diving, banana boat ride, etc.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Photograph yourself in the pink and orange-hued backdrops of Malé landscape either at the beaches or on the island hopping expedition.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> As day 2 of your trip to Maldives ends, return to the hotel for savoring the toothsome dinner and overnight sleep.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 3</span> - Enjoy the Day At Your Convenience</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Wake up to the hearty meal at your preferred waking time.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Afterward, lace up your boots because day 3 is again reserved for enjoying at your own convenienc count by discovering something unique other than the beaches and waters Marvel the elegance of dozens of the Mosques in the Malé. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Learn about the historical treasures of Maldives at the Museums.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Inhale fresh air amidst the lush greenery at the Sultan Park (Rasrani Bageecha), and end your evening with a shopping exc local markets to buy Maldivan handicrafts and stuff.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 4</span> - Malé International Airport</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Bow down your head at the sapphire blue waters of the last time all around you because, after a lip-smacking breakfast and check-out procedure, you will be escorted to the Velana International Airport to fly back to your home with a bag full of Maldives holiday memories.</div>

                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div class="col-lg-12 col-md-6 mb-2" id='inclusions'>
                                            <div class="desc-box bg-grey p-4 rounded">
                                                <h5 class="mb-2">Inclusions</h5>
                                                <ul>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Daily 4 Bottle of Water 500 ML per Person</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-6 mb-2" id='exclusions'>
                                            <div class="desc-box bg-grey p-4 rounded">
                                                <h5 class="mb-2">Exclusions</h5>
                                                <ul>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Flights, Trains, Ferries  tc</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Monument Entrance Fees & Camera Fees</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Personal Expenses - Laundry, Shopping, Telephone bills, tips etc</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Adventure Activities - Safari, Rides, Surfing, Paragliding etc</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Any Extra services - Permits, Volvo Luggage Charges, Heater, Meals etc</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Anything else not listed in above details</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-6 mb-2" id='things-to-do'>
                                            <div class="desc-box bg-grey p-4 rounded">
                                                <h5 class="mb-2">Things To Do</h5>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Scuba Diving at Maaya Thila</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Enjoy Sunset Cruise</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Maldives Island Hopping Tour</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i>  Visit Glowing Beach on Vaadhoo Island</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Surfing in the Maldives</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Indulge in Spa Treatment at Adaaran Prestige Vadoo</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Stay in a Overwater Bungalow like Six Senses Laamu</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Stroll at Hulhumale Beach</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Explore the Capital Island Male</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Water Skiing at Meeru Island Resort & Spa</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Take a Helicopter Tour of Maldives</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Party at Subsix</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Snorkeling at Maafushi Island</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Skydiving in Maldives </div>

                                            </div>
                                        </div>
                                        <div className="description mb-2" id="places-to-eat">
                                            <div className="row">
                                                <div className="col-lg-12 col-md-12 mb-2 ">
                                                    <div className="desc-box bg-grey p-4 rounded ">
                                                        <h5 className="mb-2">Best Cafes</h5>
                                                        <div>The Maldives is a tropical country in the Indian Sea, encircled by the excess of 1,000 coral islands, it's known for its sea shores, occupied fish markets, cafés, and shops. Discussing the best restaurants in Maldives, they are famous for the fish and the ocean side.....</div>
                                                        <a href="/blogs/ten-best-places-to-eat-in-maldives-for-every-taste-and-budget" className="read-more-link" target="_blank" ><button class="white bg-theme p-1 px-2" style={{ float: "right", margin: "-10px", fontSize: "11px" }}>Read More</button></a>

                                                    </div>
                                                </div>


                                            </div>
                                        </div>

                                        <div className="description mb-2" id="faq">
                                            <div className="row">
                                                <div className="col-lg-12 col-md-12 mb-2 ">
                                                    <div className="desc-box bg-grey p-4 rounded ">
                                                        <h5 className="mb-2">FAQs</h5>
                                                        <div className="row">


                                                            <div id="iternary" className="accrodion-grp faq-accrodion mb-4" data-grp-name="faq-accrodion" >
                                                                <div className="accrodion ">
                                                                    <div className="accrodion-title rounded">
                                                                        <h5 className="mb-0 px-3">What's in the romantic destination Maldives?</h5>
                                                                    </div>
                                                                    <div className="accrodion-content" style={{ display: "block" }} >
                                                                        <div className="inner">
                                                                            <div className="mb-0 ">Couples come to Maldives and must visit Manta Point, Bandara Kilhi Lake, Dhadimagi Kilhi, Banana Reef, HP Reef, and Paradise Island Resort Maldives. For more information, see the option of Romantic Maldives Package for Couples.</div>

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accrodion ">
                                                                    <div className="accrodion-title rounded">
                                                                        <h5 className="mb-0 px-3">When should couples visit Maldives? </h5>
                                                                    </div>
                                                                    <div className="accrodion-content" style={{ display: "none" }} >
                                                                        <div className="inner">
                                                                            <div className="mb-0 ">All times are favorable to visit the Maldives. Couples come here every month for honeymoons and romantic getaways. If you like to take a sun bath or soak up, then mid-November to March is a good month with the sun. But for water sports like jet-skiing, windsurfing, diving, and snorkeling, then May to November will be the best.</div>

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accrodion ">
                                                                    <div className="accrodion-title rounded">
                                                                        <h5 className="mb-0 px-3"> Will vegetarian dishes also be available in the Maldives?</h5>
                                                                    </div>
                                                                    <div className="accrodion-content" style={{ display: "none" }} >
                                                                        <div className="inner">
                                                                            <div className="mb-0"> Many restaurants in the Maldives also serve vegetarian food according to the customer's demand.</div>
                                                                            {/* <div className="mb-0">• Sushi</div>
                                                                    <div className="mb-0">• Ramen</div>
                                                                    <div className="mb-0">• Tempura</div>
                                                                    <div className="mb-0">• Yakitori</div>
                                                                    <div className="mb-0">• Udon</div>
                                                                    <div className="mb-0">• Sashimi</div>
                                                                    <div className="mb-0">• Mochi</div>
                                                                    <div className="mb-0">• Macha</div> */}

                                                                            {/* <div className="mb-0">These are just a few examples of the many delicious and unique foods you can find in Japan.</div> */}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accrodion ">
                                                                    <div className="accrodion-title rounded">
                                                                        <h5 className="mb-0 px-3">What is the currency of the Maldives? Will Indian rupees be accepted there?</h5>
                                                                    </div>
                                                                    <div className="accrodion-content" style={{ display: "none" }} >
                                                                        <div className="inner">
                                                                            <div className="mb-0 "> Maldivian rufiyaa is the currency here. No, Indian rupees will be invalid here.</div>

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accrodion ">
                                                                    <div className="accrodion-title rounded">
                                                                        <h5 className="mb-0 px-3">Is Paradise Island Resort include Romantic Maldives Packages for Couples?</h5>
                                                                    </div>
                                                                    <div className="accrodion-content" style={{ display: "none" }} >
                                                                        <div className="inner">
                                                                            <div className="mb-0 ">Yes, Paradise Island Resort is included in Romantic Maldives Packages. </div>

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <LocationMap mapLink="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8159086.303178883!2d68.7399088777782!3d3.1135245610135382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x24b599bfaafb7bbd%3A0x414509e181956289!2sMaldives!5e0!3m2!1sen!2sin!4v1663652641939!5m2!1sen!2sin"></LocationMap>
                            </div>
                        </div>
                        <div className="col-lg-4 pe-lg-4">
                            <div class="sidebar-sticky">
                                <div class="list-sidebar">
                                    <div class="sidebar-item">
                                        <Packages_Form></Packages_Form>
                                        <RelatedPackage packages={obj.packages ? obj.packages : []}></RelatedPackage>
                                    </div>
                                </div>
                            </div>
                        </div>
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
