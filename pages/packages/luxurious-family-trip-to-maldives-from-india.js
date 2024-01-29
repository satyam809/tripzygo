
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

                <title>TripzyGo - Book The Best Family Trip/Tour To Maldives From India</title>
                <meta name="description" content="Take the best family trip/tour to Maldives from India with us. We'll take care of everything from flights to hotels. Search for your perfect package, now!" />
                <meta name="keywords" content="family trip to maldives from india, family tour to maldives" />
                <link rel="icon" href="/icon.png" />
                <link rel="canonical" href="https://www.tripzygo.in/packages/london-paris-amsterdam-trip-for-couples" />
                <meta property="og:url" content="https://www.tripzygo.in/packages/luxurious-family-trip-to-maldives-from-india" />
                <meta property="og:title" content="Book The Best Family Trip/Tour To Maldives From India " />
                <meta property="og:description" content="Take the best family trip/tour to Maldives from India with us. We'll take care of everything from flights to hotels. Search for your perfect package, now!" />
                <meta property="og:image" content="https://www.tripzygo.in/images/international_packages/luxurious_family_trip_to_maldives_from_india/1.webp" />
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
                                        <h2 className="mb-1">Luxurious Family Trip To Maldives From India</h2>

                                    </div>
                                </div>
                                <div className="description-images mb-4 overflow-hidden">
                                    <div className="thumbnail-images position-relative">
                                        <div className="rounded overflow-hidden">

                                            <Carousel
                                                imageLink1="/images/international_packages/luxurious_family_trip_to_maldives_from_india/1.webp"
                                                imageLink2="/images/international_packages/luxurious_family_trip_to_maldives_from_india/2.webp"
                                                imageLink3="/images/international_packages/luxurious_family_trip_to_maldives_from_india/3.webp"
                                                imageLink4="/images/international_packages/luxurious_family_trip_to_maldives_from_india/4.webp"
                                                imageLink5="/images/international_packages/luxurious_family_trip_to_maldives_from_india/5.webp"
                                                imageLink6="/images/international_packages/luxurious_family_trip_to_maldives_from_india/6.webp"
                                                alt1="family trip to maldives from india"
                                                alt2="family trip to maldives from india"
                                                alt3="family trip to maldives from india"
                                                alt4="family tour to maldives"
                                                alt5="family tour to maldives"
                                                alt6="family tour to maldives">
                                            </Carousel>
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
                                                            <h5 className="mb-2">Luxurious Family Trip To Maldives From India</h5>
                                                            <p>A luxurious family trip to Maldives from India is a once in a lifetime opportunity to experience the beauty and luxury of one of the world's most exclusive vacation destinations. The Maldives is an archipelago of 26 coral atolls located in the Indian Ocean, south of India and Sri Lanka. It is known for its crystal clear waters, white sandy beaches, and abundant marine life, making it a popular destination for tourists seeking a tropical paradise.
                                                            </p>
                                                            <p>The Maldives is particularly popular among families, as it offers a wide range of activities and experiences that are suitable for all ages. One of the most popular activities is swimming and snorkeling in the crystal-clear waters, where you can see an array of colorful fish and coral reefs. The Maldives is also home to a variety of water sports, such as windsurfing, kiteboarding, and jet-skiing, which are perfect for more adventurous family members.
                                                            </p>                                               </section>
                                                        <section className='set_padding'>
                                                            <p>For those looking for a more relaxed experience, the Maldives also offers a range of spa treatments and massages, as well as yoga and meditation classes. The Maldives is also home to several luxury resorts, which offer a range of amenities and services, including private beaches, swimming pools, and spas. These resorts are designed to provide a luxurious and comfortable experience for families, and often feature activities and entertainment for children.
                                                            </p>
                                                            <p>One of the most unique aspects of the Maldives is its location in the middle of the Indian Ocean, which makes it a perfect destination for those interested in marine biology. The Maldives is home to a diverse range of marine life, including turtles, sharks, manta rays, and whale sharks, which can be observed on a variety of diving and snorkeling excursions.
                                                            </p>
                                                            <p>The Maldives is also known for its beautiful sunsets, which can be enjoyed from the comfort of your resort or on a sunset cruise. The Maldives is also home to a number of excellent restaurants, which serve a variety of local and international cuisine.
                                                            </p>
                                                            <p>When planning a luxurious family trip to the Maldives from India, it is important to consider the time of year you plan to travel. The Maldives has a tropical climate, with two monsoon seasons, which can affect the weather and sea conditions. The best time to visit the Maldives is between December and April, when the weather is dry and sunny, and the sea is calm.
                                                            </p>
                                                            <p>In conclusion, a luxurious family trip to the Maldives from India is an unforgettable experience that offers a combination of natural beauty, luxury, and adventure. The Maldives is a perfect destination for families looking for a tropical paradise, with crystal-clear waters, white sandy beaches, and an abundance of marine life. The Maldives also offers a range of activities and experiences, including water sports, spa treatments, and marine biology excursions, as well as luxury resorts, beautiful sunsets, and delicious food. If you are planning a family trip to the Maldives, it is important to consider the time of year, as the weather and sea conditions can vary depending on the monsoon seasons.
                                                            </p>
                                                        </section>
                                                    </article>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="description mb-2">
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 mb-2 ">
                                            <div className="desc-box bg-grey p-4 rounded ">
                                                <h5 className="mb-2">Overview</h5>
                                                <div>Maldives is an enchanting and beautiful island country, perfect for spending some quality time with your family. You can chill at the cool, breezy beaches of the place, go to the Maldives markets for shopping sprees, enjoy in the wonderful resorts of Maldives, have fruitful and fulfilling dinners in amazing restaurants and do a lot more things that give you unique and unforgettable experiences in this amazing island country.</div>
                                                <div className="mb-0">Have all these experiences in Maldives with this amazing family trip to Maldives from India package designed with the most amazing tour itinerary for a fulfilling Maldives tour from India.</div>
                                                <div>With this Maldives family tour package, you will have the most amazing things to do in Maldives with the most amazing places to visit in the wonderful island country.</div>
                                                <div>So, don’t wait up. Book this Maldives tour package now by getting in touch with a TripzyGo travel executive and have the best time with your family on a unique and enchanting tour.</div>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="tour-includes mb-4">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td><i className="fa fa-clock-o pink mr-1" aria-hidden="true"></i> Days : 3 Nights / 4 Days</td>
                                                <td><i className="fa fa-group pink mr-1" aria-hidden="true"></i> People : 1</td>

                                            </tr>
                                            <tr>
                                                <td><i className="fa fa-inr pink mr-1" aria-hidden="true"></i> Total Tour Cost: INR 80,600/-* </td>
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


                                        <div id="iternary" className="accrodion-grp faq-accrodion mb-4" data-grp-name="faq-accrodion" >
                                            <div className="accrodion ">
                                                <div className="accrodion-title rounded">
                                                    <h5 className="mb-0"><span>Day 1</span> - Arrival in Maldives</h5>
                                                </div>
                                                <div className="accrodion-content" style={{ display: "block" }} >
                                                    <div className="inner">
                                                        <div className="mb-0"><i className="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Upon arriving in the Maldives, transfer to your resort.</div>
                                                        <div className="mb-0"><i className="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Explore the sights and attractions available around you at leisure.</div>
                                                        <div className="mb-0"><i className="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Stay overnight at Maldives</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accrodion ">
                                                <div className="accrodion-title rounded">
                                                    <h5 className="mb-0"><span>Day 2</span>  - Maldives</h5>
                                                </div>
                                                <div className="accrodion-content" style={{ display: "none" }}>
                                                    <div className="inner">
                                                        <div className="mb-0"><i className="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After delicious breakfast, you will explore the Maldives.</div>
                                                        <div className="mb-0"><i className="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Rest of the time at leisure. Enjoy a romantic time with your partner, either in a pool villa or wherever you want.</div>
                                                        <div className="mb-0"><i className="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Stay overnight at Maldives.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accrodion">
                                                <div className="accrodion-title rounded">
                                                    <h5 className="mb-0"><span>Day 3</span> -  Maldives</h5>
                                                </div>
                                                <div className="accrodion-content" style={{ display: "none" }}>
                                                    <div className="inner">
                                                        <div className="mb-0"><i className="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Either relax at leisure with your partner or add an activity to your complete your day.</div>
                                                        <div className="mb-0"><i className="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Stay overnight at Maldives.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accrodion ">
                                                <div className="accrodion-title rounded">
                                                    <h5 className="mb-0"><span>Day 4</span> - Maldives</h5>
                                                </div>
                                                <div className="accrodion-content" style={{ display: "none" }}>
                                                    <div className="inner">
                                                        <div className="mb-0"><i className="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After breakfast, check out from the resort to begin your journey back home with a bag full of cherished memories.</div>
                                                    </div>
                                                </div>
                                            </div>



                                        </div>
                                        <div className="col-lg-12 col-md-6 mb-2" id='inclusions'>
                                            <div className="desc-box bg-grey p-4 rounded">
                                                <h5 className="mb-2">Inclusions</h5>
                                                <ul>
                                                    <li className="d-block "><i className="fa fa-check pink mr-1"></i> Welcome drink on arrival</li>
                                                    <li className="d-block "><i className="fa fa-check pink mr-1"></i> Daily Breakfast</li>
                                                    <li className="d-block "><i className="fa fa-check pink mr-1"></i> All sightseeing as per itinerary</li>
                                                    <li className="d-block "><i className="fa fa-check pink mr-1"></i> All Taxes included in the package (Bed Tax, GST and Service Charges by the resort)</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-6 mb-2" id='exclusions'>
                                            <div className="desc-box bg-grey p-4 rounded">
                                                <h5 className="mb-2">Exclusions</h5>
                                                <ul>
                                                    <li className="d-block "><i className="fa fa-close pink mr-1"></i> Airfare</li>
                                                    <li className="d-block "><i className="fa fa-close pink mr-1"></i> 3.50 % Service Tax extra on all the above mentioned rates</li>
                                                    <li className="d-block "><i className="fa fa-close pink mr-1"></i> Any expense of personal nature.</li>
                                                    <li className="d-block "><i className="fa fa-close pink mr-1"></i> Optional tour/activity cost.</li>



                                                </ul>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-12 mb-2" id='things-to-do'>
                                            <div class="desc-box bg-grey p-4 rounded">
                                                <h5 class="mb-2">Things To Do</h5>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Scuba Diving at Maaya Thila</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Enjoy Sunset Cruise</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Maldives Island Hopping Tour</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Visit Glowing Beach on Vaadhoo Island</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Surfing in the Maldives</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Indulge in Spa Treatment</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Stay in a Overwater Bungalow</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i>  Stroll at Hulhumale Beach</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Explore the Capital Island Male</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Explore the Capital Island Male</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Take a Helicopter Tour of Maldives</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i>  Snorkeling at Maafushi Island</div>


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
                                                                        <h5 className="mb-0 px-3">How to book a Luxurious Family Trip To Maldives From India?</h5>
                                                                    </div>
                                                                    <div className="accrodion-content" style={{ display: "block" }} >
                                                                        <div className="inner">
                                                                            <div className="mb-0 ">Click on Tripzygo.in and search in the Packages section for a Luxurious family trip to the Maldives from India. There are many other packages available here that may be reliable for you.</div>

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accrodion ">
                                                                    <div className="accrodion-title rounded">
                                                                        <h5 className="mb-0 px-3">Is Maldives the perfect destination for a family trip?</h5>
                                                                    </div>
                                                                    <div className="accrodion-content" style={{ display: "none" }} >
                                                                        <div className="inner">
                                                                            <div className="mb-0 ">Maldives is one of the best destinations in the world. The beautiful beaches and waterfalls here can mesmerize anyone with their magic. Apart from this, people often go here for scuba diving and to enjoy natural luxury. The Maldives is a famous family destination due to its stunning views of sunsets across the Indian Ocean. Talk about the flavors here, you will want to taste such different and delicious dishes. Overall, Maldives is a complete package of fun and entertainment.</div>



                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accrodion ">
                                                                    <div className="accrodion-title rounded">
                                                                        <h5 className="mb-0 px-3"> When is the best time to visit Maldives to avoid crowds?</h5>
                                                                    </div>
                                                                    <div className="accrodion-content" style={{ display: "none" }} >
                                                                        <div className="inner">
                                                                            <div className="mb-0">If you want to avoid the crowd, then you can visit the beaches of Maldives from May to November. Keep in mind that these months are the rainiest, and storms are frequent, which can ruin your whole day. Booking of resorts and hotels is also less in these months.</div>
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
                                                                        <h5 className="mb-0 px-3">Can I take a pet on a family tour to Maldives?</h5>
                                                                    </div>
                                                                    <div className="accrodion-content" style={{ display: "none" }} >
                                                                        <div className="inner">
                                                                            <div className="mb-0 ">No, unfortunately, you cannot travel with your pets in the Maldives. Dogs are only permitted on boats and liveaboards.</div>


                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accrodion ">
                                                                    <div className="accrodion-title rounded">
                                                                        <h5 className="mb-0 px-3">What is the best destination in Maldives to visit with family?</h5>
                                                                    </div>
                                                                    <div className="accrodion-content" style={{ display: "none" }} >
                                                                        <div className="inner">
                                                                            <div className="mb-0 ">Maldives has 5 best family destinations:</div>

                                                                            ●   Malé Atoll<br />
                                                                            ●	Sun Island<br />
                                                                            ●	Fihalhohi Island<br />
                                                                            ●	Mirihi Island<br />
                                                                            ●	Veligandu Island Beach



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
