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

                <title>TripzyGo - Book Bali Couple Tour Package From India - Couple Trip To Bali</title>
                <meta name="description" content="Escape to Bali is the perfect place for a romantic holiday. Choose Bali couple tour package from India and enjoy lovely vacation. Plan your couple trip to Bali." />
                <meta name="keywords" content="Bali couple tour package from India, couple trip to bali, best Bali tour package from India" />
                <link rel="icon" href="/icon.png" />
                <link rel="canonical" href="https://www.tripzygo.in/packages/bali-couple-tour-package-from-india" />
                <meta property="og:url" content="https://www.tripzygo.in/packages/bali-couple-tour-package-from-india" />
                <meta property="og:title" content="Book Bali Couple Tour Package From India - Couple Trip To Bali" />
                <meta property="og:description" content="Escape to Bali is the perfect place for a romantic holiday. Choose Bali couple tour package from India and enjoy lovely vacation. Plan your couple trip to Bali." />
                <meta property="og:image" content="https://www.tripzygo.in/images/international_packages/bali_couple_tour_package_from_india_for_a_romantic_honeymoon/1.webp" />
            </Head>
<ShareButton/>
<PopularityWidget packageCount="77" progressBarPercentage="85%"/>
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
                                        <h2 className="mb-1">Bali Couple Tour Package From India</h2>

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
                                                        <img className='blog_image' src="/images/international_packages/bali_couple_tour_package_from_india_for_a_romantic_honeymoon/1.webp" alt="Bali couple tour package from India" />

                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/bali_couple_tour_package_from_india_for_a_romantic_honeymoon/2.webp" alt="Bali couple tour package from India" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/bali_couple_tour_package_from_india_for_a_romantic_honeymoon/3.webp" alt="couple trip to bali" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/bali_couple_tour_package_from_india_for_a_romantic_honeymoon/4.webp" alt="couple trip to bali" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/bali_couple_tour_package_from_india_for_a_romantic_honeymoon/5.webp" alt="best Bali tour package from India" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/bali_couple_tour_package_from_india_for_a_romantic_honeymoon/6.webp" alt="best Bali tour package from India" />
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
                                                        <img className='blog_image' src="/images/international_packages/bali_couple_tour_package_from_india_for_a_romantic_honeymoon/1.webp" alt="Bali couple tour package from India" />

                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/bali_couple_tour_package_from_india_for_a_romantic_honeymoon/2.webp" alt="Bali couple tour package from India" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/bali_couple_tour_package_from_india_for_a_romantic_honeymoon/3.webp" alt="couple trip to bali" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/bali_couple_tour_package_from_india_for_a_romantic_honeymoon/4.webp" alt="couple trip to bali" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/bali_couple_tour_package_from_india_for_a_romantic_honeymoon/5.webp" alt="best Bali tour package from India" />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div>
                                                        <img className='blog_image' src="/images/international_packages/bali_couple_tour_package_from_india_for_a_romantic_honeymoon/6.webp" alt="best Bali tour package from India" />
                                                    </div>
                                                </SwiperSlide>

                                            </Swiper>





                                        </div>

                                    </div>
                                </div>



                                <div className="description mb-2">
                                    <div className="row">
                                        <div className="col-lg-12 col-md-6 mb-2 ">
                                            <div className="desc-box bg-grey p-4 rounded ">
                                                <h5 class="mb-2">Overview</h5>
                                                <div>Bali is a beautiful place where you can have the most romantic and mesmerising moments with your partner. </div>
                                                <div class="mb-0">Whether you chill or walk around the beaches, indulge in water activities and sports, go for a shopping spree in the markets of Bali, there’s everything fun, romantic, and enchanting to do in this amazing place.</div>
                                                <div>So, why should your next holiday not be to Bali, especially when you’re going out as a couple.</div>
                                                <div>With our amazing Bali couple tour package from India, you will have the most amazing couple trip to bali, an experience that you will cherish with your partner for a lifetime.</div>
                                                <div>So, don’t wait up. Book the experience now by booking the best Bali honeymoon package from India with a TripzyGo travel specialist.</div>
                                            </div>
                                        </div>


                                    </div>
                                </div>

                                <div className="tour-includes mb-4">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td><i className="fa fa-clock-o pink mr-1" aria-hidden="true"></i> Days : 04 Nights/ 05Days</td>
                                                <td><i class="fa fa-group pink mr-1" aria-hidden="true"></i> People : 1</td>

                                            </tr>
                                            <tr>
                                                <td><i class="fa fa-inr pink mr-1" aria-hidden="true"></i> Total Tour Cost : INR 16,800/-*</td>
                                                <td><i class="fa fa-bed pink mr-1" aria-hidden="true"></i> Hotel : 4 star</td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                                <div class="description mb-2">
                                    <div class="row">


                                        <div id="iternary" class="accrodion-grp faq-accrodion mb-4" data-grp-name="faq-accrodion" >
                                            <div class="accrodion active">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 1</span> - Arrive in Bali</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "block" }}>
                                                    <div class="inner">
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Upon your arrival at the Bali Airport, our tour representative will meet you at the airport and helps you with an assisted transfer to the hotel. </div>
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> As you re at the airport, notice that it is a wonderful example of traditional culture, simplicity, and modernity. </div>
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Continue to the hotel. </div>
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> On the way, you come across a huge statue of war scene between Karna and Gatotkacha from the Hindu epic, Mahabharata.</div>
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After completing the check-in formalities, the day is now at leisure. </div>
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Explore this beautiful and tranquil island on your own.</div>
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Overbnight stay at Bali.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 2</span>  - Full Day Benoa Beach in Bali</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Post breakfast on day 2, h ad to Tanjung Benoa beach for partaking in water sports, away from the chaos of the city life. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> The beach is located northwards of Nusa Dua and offers several watersports activitie such as banana boat ride, jet skiing, and parasailing. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> The shores also have several restaurants and beach shacks where you can enjoy drinks and sumptuous delicacies of your choice.  </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> The evening is scheduled for a visit to southern Bali, offering an insight into the region's soul.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Visit the popular Uluwatu temple, placed on a cliffto , at a height of 825 feet. From the temple, relish the views of the sprawling Indian Ocean and the sun setting on the horizon. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Those who are not interested in Parasailing will wait for the rest to finish the activity.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Later on, you can enjoy Kecak Dance performance (optional), after sunset. Kecak and Fire Dance is dreamlike and transports you into another world.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> As the episode of Lanka Dehan from Ramayana is being showcased, listen to the gripping chant of Kecak, Kecak' in the background.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Return to the hotel in the stay at the hotel in Bali.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 3</span> - Bali - Kintamani Volcano Tour & Ubud Village</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> In the morning, enjoy breakfast. Later, enjoy an excursion to the Kintamani Volcano.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> This is one of the most popular day tours in Bali, offering a sneak- peek into the life of the Balinese people.  </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> During the tour, visit the Batuan village which is known for traditional batik and hand weavings, Mas village is known for wood carvin s and then drive past Celuk village, known for silver and gold works. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Next, the visit is to the popular historical and ancient Hindu temples of Bali.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Now, visit Mount Batur and Lake Batur in Kintamani village for treating eyes to the breathtaking views of the surroundings. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> The day comes to an end in the popular Ubud market. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Get your hands on some wonderful souvenirs.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Later on, if you want, you can attend Barong Dance performance in Kintamani (optional). </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> This is an extraordinary Balinese dance performance of about an hour, showcasing an ever on-going hypothetical war between goodness and badness.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Return to the hotel after t Bali.</div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 4</span> - Day At leisure</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> On the 4th day of the tour, after having a sumptuous breakfast, the rest of the day is at your leisure.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> You can enjoy your time in the room or you can stroll around the market, it is your choice. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Overnight stay in the illa in Bali.</div>

                                                    </div>
                                                </div>
                                            </div>

                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 5</span> - Departure from Bali</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Today is the last day of your tour. Enjoy your breakfast.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> The rest of theday is at leisure. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> You can explore the local market of Bali and buy souvenirs for your loved ones.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Later on, get timely transferred to the airport to board the flight for your onward journey.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Tour ends but Sweet Memories Always Remains same.</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-6 mb-2">
                                            <div class="desc-box bg-grey p-4 rounded">
                                                <h5 class="mb-2">Inclusions</h5>
                                                <ul>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> 05 Nights Accommodation</li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> BB Basis</li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Meet & Greet assistance at the airport and transfer directly to your hotel, Day at leisure</li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Return Airport & Inter Hotel transfer by Pvt Basis</li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> 02 Hours of Authentic Balinese Massage</li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Uluwatu sunset temple Tour including Kecak dance</li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Full Day Kintamani tour with Ubud Village on Pvt Basis</li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Half Day Tour with Benoa water sports including 1 x roun of Banana boat, Parasailing / flying fish and Jet skii (parasailing subject to weather) on private transfers</li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Transfers with air-conditioned vehicle</li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> English speaking driver cum guide assistance</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-6 mb-2">
                                            <div class="desc-box bg-grey p-4 rounded">
                                                <h5 class="mb-2">Exclusions</h5>
                                                <ul>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Flights, Trains, Ferries etc</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Monument Entrance Fees & Camera Fees</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Personal Expenses - Laundry, Shopping, Telephone bills, tips etc</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Adventure Activities - Safari, Rides, Surfing, Paragliding etc</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Any Extra services - Permits, Volvo Luggage Charges, Heater, Meals etc</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Anything else not listed in above details</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-6 mb-2">
                                            <div class="desc-box bg-grey p-4 rounded">
                                                <h5 class="mb-2">Things To Do</h5>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Swoosh on the Bali Swing</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Journey to Mount Batur</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Witness the Lovely Tegenungan Cascade</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Wonder about Tanah Parcel Sanctuary</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Investigate Bali Safari and Marine Park</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Surfing at Kuta</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Drink from the Waters at Goa Gajah</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i>  Visit Tegallalang Rice Porches</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Experience Untamed life at Bali Zoo</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Visit Ulun Danu Sanctuary</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Go for a Sprinkle at Waterbom</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i>  Have Some good times at Ubud Monkey Woods</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Chill at Sundays Ocean side Club</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Investigate the Bali Bird Park</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Go through a Day at Tukad Cepung Cascade</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Wonder about Uluwatu Sanctuary</div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="single-map mb-4">
                                    <h4>Map</h4>
                                    <div class="map rounded overflow-hidden">
                                        <div style={{ width: "100%" }}>
                                            <iframe class=" rounded overflow-hidden" height="400" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1010295.9966397727!2d114.51106202453335!3d-8.45371377682995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd141d3e8100fa1%3A0x24910fb14b24e690!2sBali%2C%20Indonesia!5e0!3m2!1sen!2sin!4v1663652178795!5m2!1sen!2sin" ></iframe>
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