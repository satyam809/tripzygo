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

                <title>TripzyGo - Affordable Maldives Luxury Tour Package - Luxury Trip To Maldives</title>
                <meta name="description" content="Get the best deals on Maldives Luxury Tour Package to enjoy your vacations. Enjoy your luxury trip to Maldives with affordable packages. Book now & save more!" />
                <meta name="keywords" content="maldives luxury tour package, luxury trip to maldives" />
                <link rel="icon" href="/icon.png" />
                <link rel="canonical" href="https://www.tripzygo.in/packages/exquisite-maldives-luxury-tour-package" />
                <meta property="og:url" content="https://www.tripzygo.in/packages/exquisite-maldives-luxury-tour-package" />
                <meta property="og:title" content="Affordable Maldives Luxury Tour Package - Luxury Trip To Maldives" />
                <meta property="og:description" content="Get the best deals on Maldives Luxury Tour Package to enjoy your vacations. Enjoy your luxury trip to Maldives with affordable packages. Book now & save more!" />
                <meta property="og:image" content="https://www.tripzygo.in/images/international_packages/exquisite_maldives_luxury_tour_package/1.webp" />
            </Head>
            <ShareButton />
            <PopularityWidget packageCount="71" progressBarPercentage="80%" />
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
                                        <h2 className="mb-1">Exquisite Maldives Luxury Tour Package</h2>

                                    </div>
                                </div>
                                <div className="description-images mb-4 overflow-hidden">
                                    <div className="thumbnail-images position-relative">
                                        <div className="rounded overflow-hidden">

                                            <Carousel
                                                imageLink1="/images/international_packages/exquisite_maldives_luxury_tour_package/1.webp"
                                                imageLink2="/images/international_packages/exquisite_maldives_luxury_tour_package/2.webp"
                                                imageLink3="/images/international_packages/exquisite_maldives_luxury_tour_package/3.webp"
                                                imageLink4="/images/international_packages/exquisite_maldives_luxury_tour_package/4.webp"
                                                imageLink5="/images/international_packages/exquisite_maldives_luxury_tour_package/5.webp"
                                                imageLink6="/images/international_packages/exquisite_maldives_luxury_tour_package/6.webp"
                                                alt1="maldives luxury tour package"
                                                alt2="maldives luxury tour package"
                                                alt3="maldives luxury tour package"
                                                alt4="luxury trip to maldives"
                                                alt5="luxury trip to maldives"
                                                alt6="luxury trip to maldives">
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
                                                            <h5 className="mb-2">Exquisite Maldives Luxury Tour Package</h5>
                                                            <p >Maldives is an escape from the chaotic and stressful city life. The beautiful white sand and
                                                                cool blue beaches along with crystalline lagoons are the ultimate source of peace and calm
                                                                for anyone wanting to experience leisure and fun away from the crowd. The lavish water
                                                                villas, blooming reef fishes, and all the adventurous water activities that you have the
                                                                privilege to enjoy in the Maldives are going to give you super amazing memories for a
                                                                lifetime.</p>
                                                            <p >The beauty of this place gets better defined by the waves crashing against the shore and the
                                                                mesmerizing sound that they create thereafter. You can also experience reef sharks and
                                                                corals gracing underwater on this floating island. Maldives is full of world-famous attractions
                                                                that make your holidays and vacation on this island even more interesting and better. Here,
                                                                you get to explore HP Reef and Banana Reef which are two of the best diving destinations.</p>


                                                        </section>
                                                        <section className='set_padding'>
                                                            <p >Then you can surely visit the Mulee’age Palace and National Museum which offer an insight
                                                                into the glorious past of the Maldives. For tourists who visit the Maldives due to spirituality,
                                                                there is the Grand Friday Mosque and Islamic Centre. Maldives is also known for its
                                                                shopping destinations such as Majeedhee Magu and STO Trade Centre makes for amazing
                                                                shopping destinations where can you always find super amazing products and a variety of
                                                                things to purchase for your friends and family.</p>
                                                            <p >With enough said, I think there is no reason to wait for and have an amazing and fun trip to
                                                                Maldives as soon as possible. With this awesome Maldives luxury tour package you are sure
                                                                to have a luxury trip to Maldives and your fun and enjoyment are going to become ten times
                                                                more than you have ever experienced. There is so much that you find new in the Maldives.
                                                                The white sand and blue beaches together add a lot of beauty to the place. Maldives is an
                                                                amazing place to visit with your friends and family members during holidays.</p>
                                                            <p >With the amazing Maldives luxury tour package, you will have a beautiful trip. The corals and
                                                                the range of fishes that you can find in the Maldives are incomparable. Maldives is the
                                                                perfect destination for all those who want a good break in life and a fantastic vacation. This
                                                                tour package comes with an easy-to-understand tour plan that will let you know everything
                                                                that you can do on your trip to Maldives and all the fun that is yours to experience. You can
                                                                also choose to customize the tour plan as per your requirements.</p>
                                                            <p >So, wait no more and book the luxurious Maldives tour package and get the best discounts
                                                                and deals on the package. The package is budget-friendly and this package is going to turn
                                                                your trip to Maldives into the best trip of your life. On this trip, you have a chance to create
                                                                innumerable memories and have an awesome time. So, without waiting take this amazing
                                                                and the best tour package for the Maldives. Get in touch with a TripzyGo tour executive now
                                                                and have the best Maldives package booked for yourself on the best deals.</p>


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
                                                <div>Maldives is a gorgeous and an enchanting place where you can have the most unique and mesmerizing experiences. Be it on the beaches of Maldives or in the resorts of the island country, Maldives is a treat for anyone looking out for a luxury holiday.</div>
                                                <div className="mb-0">This exquisite Maldives luxury tour package is designed to offer you that luxury and comfort that you seek and deserve on your luxury trip to Maldives.</div>
                                                <div>Go on a luxurious vacation to Maldives and enjoy the lavishness and richness of the place having appetizing foods of different cuisines, enjoying different adventures, and chilling at the beaches with this amazing Maldives luxury tour package designed with the most amazing tour itinerary of the best things to do in Maldives.</div>
                                                <div>Don’t wait up, book this package now by getting in touch with a TripzyGo travel executive and go on your luxury trip to Maldives.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="tour-includes mb-4">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td><i className="fa fa-clock-o pink mr-1" aria-hidden="true"></i> Days : 3 Nights / 4 Days</td>
                                                <td><i className="fa fa-group pink mr-1" aria-hidden="true"></i> People : Per Couple</td>

                                            </tr>
                                            <tr>
                                                <td><i className="fa fa-inr pink mr-1" aria-hidden="true"></i> Total Tour Cost: INR 2,16,000/-* </td>
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
                                <div className="description mb-2">
                                    <div className="row">


                                        <div id="iternary" className="accrodion-grp faq-accrodion mb-4" data-grp-name="faq-accrodion" >
                                            <div className="accrodion">
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
                                                        <div>The Maldives is a tropical country in the Indian Sea, encircled by the excess of 1,000 coral islands, it's known for its sea shores, occupied fish markets, cafés, and shops. Discussing the best restaurants in Maldives, they are famous for the fish and the ocean side....</div>
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
                                                                <div className="accrodion">
                                                                    <div className="accrodion-title rounded">
                                                                        <h5 className="mb-0">How to plan a luxury trip to Maldives?</h5>
                                                                    </div>
                                                                    <div className="accrodion-content" style={{ display: "block" }} >
                                                                        <div className="inner">
                                                                            <div className="mb-0">To plan a luxury trip to Maldives, you can follow Tripzgo.in Maldives luxury tour package. There are many types of these packages, which come with customized options.</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accrodion">
                                                                    <div className="accrodion-title rounded">
                                                                        <h5 className="mb-0">What are the most important things to keep in mind while planning a trip to Maldives?</h5>
                                                                    </div>
                                                                    <div className="accrodion-content" style={{ display: "none" }} >
                                                                        <div className="inner">
                                                                            <div className="mb-0">Plan your Maldives journey according to the weather. November to April is the peak month, during which everything is pricy. So it would be better to plan a trip before the peak season or in the off-season.</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accrodion">
                                                                    <div className="accrodion-title rounded">
                                                                        <h5 className="mb-0">Which is the one place that one must visit while coming to Maldives?</h5>
                                                                    </div>
                                                                    <div className="accrodion-content" style={{ display: "none" }} >
                                                                        <div className="inner">
                                                                            <div className="mb-0">The Bioluminescent Beach, is the place that completes the trip to Maldives. Watching plankton emit luminescent toxins in the dark is an experience beyond comprehension. This is one of the most unique things in the Maldives.</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accrodion">
                                                                    <div className="accrodion-title rounded">
                                                                        <h5 className="mb-0">Is it allowed to wear a bikini on the beaches of Maldives?</h5>
                                                                    </div>
                                                                    <div className="accrodion-content" style={{ display: "none" }} >
                                                                        <div className="inner">
                                                                            <div className="mb-0">Maldives is an Islamic country that follows an orthodox culture. That's why it is not allowed to wear a bikini on every beach. But there are some "bikini beaches" specifically for tourists to visit.</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accrodion">
                                                                    <div className="accrodion-title rounded">
                                                                        <h5 className="mb-0">Does Maldives allow drone photography?</h5>
                                                                    </div>
                                                                    <div className="accrodion-content" style={{ display: "none" }} >
                                                                        <div className="inner">
                                                                            <div className="mb-0">Many resorts in the Maldives have a "no drone" policy to promote the protection of their guests' privacy. Violation of this can also make you eligible for severe punishment. So, kindly avoid doing this.</div>
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
                                <LocationMap mapLink="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8159086.322151871!2d68.73855895375104!3d3.113522111614398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x24b599bfaafb7bbd%3A0x414509e181956289!2sMaldives!5e0!3m2!1sen!2sin!4v1670327153633!5m2!1sen!2sin"></LocationMap>
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
