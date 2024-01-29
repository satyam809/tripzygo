import React from 'react'
import Packages_Form from '../../components/Contact_Forms/packages_form';
import ShareButton from '../../components/Package_Description/shareButton';
import PopularityWidget from '../../components/Package_Description/popularityWidget';

import Head from "next/dist/shared/lib/head";
import { useState } from "react";
import RelatedPackage from "../../components/Package_Description/RelatedPackages"
import { useEffect } from 'react'
import Carousel from '../../components/Package_Description/descriptionCarousel';
import LocationMap from '../../components/Package_Description/locationMap';
import axios from 'axios';


export default function test() {
    const [obj, setObj] = useState({});
    const getAllPackages = async () => {
        try {
            const url = `https://backend.tripzygo.in/packages?limit=12&destination_search=Kerala`;
            const { data } = await axios.get(url);
            setObj(data);
        } catch (err) {
        }
    };
    useEffect(() => {
        getAllPackages();
    });
    const [readMore, setReadMore] = useState(false);

    const extraContent = <div>
        <p className="extra-content">
            This best Kerala tour package for 4 days is customized and designed to give you that very experience of a brilliant trip to Kerala where you will get a chance to explore the most beautiful places to visit in Kerala.
        </p>
        <p className="extra-content">
            Be it the Alleppey backwaters, Munnar, Thekaddy, Wayanad, Kochi, or any of the other places to visit in Kerala, you can have the most amazing experiences of your life in this beautiful and amazing state in each of its cities covered in the brilliantly customized itinerary of this Best Kerala tour package for 4 days.
        </p>
        <p className="extra-content">
            With amazing time in the houseboats in backwaters of Alleppey where you can also enjoy the authentic taste of the cuisines of Kerala in an authentic cultural Kerala style. Having meals on Banana leaves in the authentic and cultural style of Kerala will be an amazing and unforgettable experience on your trip to Kerala in this Kerala tour package.
        </p>
        <p className="extra-content">
            This Kerala tour package is designed to take you to the most amazing places to visit in Kerala with the most intelligently designed tour itinerary that covers the best of the state on even a trip as small as 4 days.
        </p>

        <p className="extra-content">
            You will visit places like Munnar, where you can witness all the beauty and culture of Kerala. You can have an amazing time in the Alleppey backwater which is one of the most beautiful and popular places to visit in Kerala. You will also get a chance to visit the beautiful, happening, and romantic beaches of Kerala where you can chill, have fun, and enjoy water sports and adventures.
        </p>
        <p className="extra-content">
            There are also forests in Kerala that you can visit for fun and adventure. The best part of the trip to Kerala planned in this amazing Kerala tour package is the visit to tea and coffee plantations.
        </p>
        <p className="extra-content">
            Kerala is known for its tea and coffee and it’s a blessing and mesmerizing feeling to go witness all these tea and coffee plantations in Kerala where you can see people working in their authentic style, handpicking the best tea leaves and coffee grounds for preparing the best tea and coffee that you can brew and enjoy.
        </p>
        <p className="extra-content">
            With all these attractions and places to visit in Kerala, there remains no reason for you to not consider this best Kerala tour package right away.
        </p>
        <p className="extra-content">
            This Kerala tour package will take you on your best trip to South India. So, don’t wait up. Just get your phone, get in touch with a TripzyGo travel executive, and book this best Kerala tour package right away at the most special deals and offers.
        </p>
    </div>
    const linkName = readMore ? 'Read Less' : 'Read More'
    return (
        <div>
            <Head>

                <title>TripzyGo - Splendid Kerala Tour Package To Take You To The Best Places To Visit In Kerala</title>
                <meta name="description" content="Best Kerala Tour Package - Are you looking for the best places to visit in Kerala? Then look no further than our Splendid Kerala Tour Package. Book now. " />
                <meta name="keywords" content="places to visit in Kerala, best Kerala tour package, Kerala tour package" />
                <link rel="icon" href="/icon.png" />
                <link rel="canonical" href="https://www.tripzygo.in/packages/kerala-trip-plan-for-four-days" />
                <meta property="og:url" content="https://www.tripzygo.in/packages/kerala-trip-plan-for-four-days" />
                <meta property="og:title" content="Splendid Kerala Tour Package To Take You To The Best Places To Visit In Kerala" />
                <meta property="og:description" content="Best Kerala Tour Package - Are you looking for the best places to visit in Kerala? Then look no further than our Splendid Kerala Tour Package. Book now. " />
                <meta property="og:image" content="https://www.tripzygo.in/images/domestic/kerala_tour_package_with_best_places_to_visit_in_kerala/1.webp" />
            </Head>
<ShareButton/>
<PopularityWidget packageCount="69" progressBarPercentage="70%"/>
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
                                        <h2 className="mb-1">4 Days Kerala tour | Journey through Nature's Paradise</h2>

                                    </div>
                                </div>
                                <div className="description-images mb-4 overflow-hidden">
                                    <div className="thumbnail-images position-relative">
                                        <div className="rounded overflow-hidden">
                                            <Carousel
                                                imageLink1="/images/domestic/kerala_tour_package_with_best_places_to_visit_in_kerala/1.webp"
                                                imageLink2="/images/domestic/kerala_tour_package_with_best_places_to_visit_in_kerala/2.webp"
                                                imageLink3="/images/domestic/kerala_tour_package_with_best_places_to_visit_in_kerala/3.webp"
                                                imageLink4="/images/domestic/kerala_tour_package_with_best_places_to_visit_in_kerala/4.webp"
                                                imageLink5="/images/domestic/kerala_tour_package_with_best_places_to_visit_in_kerala/5.webp"
                                                imageLink6="/images/domestic/kerala_tour_package_with_best_places_to_visit_in_kerala/6.webp"
                                                alt1="places to visit in Kerala"
                                                alt2="places to visit in Kerala"
                                                alt3="best Kerala tour package"
                                                alt4="best Kerala tour package"
                                                alt5="Kerala tour package"
                                                alt6="Kerala tour package"
                                            >
                                            </Carousel>
                                        </div>
                                    </div>
                                </div>
                                <div className="description mb-2">
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 mb-2 ">
                                            <div className="desc-box bg-grey p-4 rounded ">
                                                <div className="App">
                                                    <h5 className="mb-2">Why to Visit Kerala?</h5>
                                                    <p>Kerala is a beautiful place, the God’s own state, it’s no less than a heaven with its beautiful tea and coffee plantations, beaches, forests, and backwaters. Add to all of this the fun of chilling at the beaches, trekking down the forests, visiting the tea and coffee plantations, enjoying a houseboat in the backwaters, and your entire Kerala trip is an experience full of moments and memories......</p>
                                                    {readMore && extraContent}
                                                    <a className="read-more-link" onClick={() => { setReadMore(!readMore) }}><h6 style={{ float: "right", margin: "-10px", fontSize: "13px" }}>{linkName}</h6></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="description mb-2">
                                    <div className="row">
                                        <div className="col-lg-12 col-md-6 mb-2 ">
                                            <div className="desc-box bg-grey p-4 rounded ">
                                                <h5 class="mb-2">Overview</h5>
                                                <div>Kerala is a beautiful city to visit. A trip to Kerala is always a wholesome experience, especially if you have the most beautiful city in Kerala like Munnar and Alleppey in your tour itinerary. </div>
                                                <div class="mb-0"> Additionally, you can plan some more beautiful places to visit in Kerala in your trip package to make the entire tour a more wholesome and memorable experience.</div>
                                                <div>Have the most amazing 5 days in Kerala with this best Kerala tour package designed with the most amazing travel itinerary and schedule, customisable for your needs, accommodating every special need that you may have.</div>
                                                <div>Book your Kerala tour package now. </div>
                                            </div>
                                        </div>


                                    </div>
                                </div>

                                <div className="tour-includes mb-4">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td><i class="fa fa-clock-o pink mr-1" aria-hidden="true"></i> Package Category : Standard</td>
                                                <td><i class="fa fa-group pink mr-1" aria-hidden="true"></i> People : 1</td>


                                            </tr>
                                            <tr>
                                                <td><i class="fa fa-inr pink mr-1" aria-hidden="true"></i> Total Tour Cost : INR 11,950/-*</td>
                                                <td><i className="fa fa-clock-o pink mr-1" aria-hidden="true"></i> Days : 3 NIGHTS/4 DAYS</td>
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
                                        <div id="iternary" class="accrodion-grp faq-accrodion mb-4" data-grp-name="faq-accrodion" >
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 1</span> - Cochin – Munnar</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Munnar – After breakfast check out from the hotel and transfer to Munnar.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Munnar is 1800 mts above sea level and also the place of South India's highest peak (Anamudi-2695 mts).</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> On the way visit Valara, Cheeyappara waterfalls & Tea Plantations. On arrival at Munnar transfer to Hotel. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Check in at Hotel. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Afternoon visit Rajamala (Eravikulam National Park - open as per the directions by the forest authorities ),the best place to see Nilgiri Tahr (Hermitragus Hilarious)- the mountain goat of South India & Tea Museum. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Evening have a short visit at Munnar town.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> You can see the beautiful tea estates like a green paradise. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Overnight stay at Munnar.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 2</span> Munnar</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After breakfast proceed for sightseeing.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Maduppatty dam, Echo Point, Kundalay Dam, Pothenmedu View Point, Blossom Park etc are some of the highlights of the sightseeing. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Shopping & overnight stay at Munnar</div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 3</span> - Munnar – Thekkady</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Morning have breakfast at resort later check out resort and drive to Thekkady. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Thekkady is a world famous wildlife sanctuary and it is also called as Periyar. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> On arrival check in Hotel </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Afternoon proceed for a game viewing cruise on the Periyar Lake. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Here you will be able to see a large variety of wildlife, which include elephants, monkeys, deer, wild boar etc evening you can take a Elephant ride at Periyar wild life and rest of the day is at leisure. </div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 4</span> - Thekkady – Alleppey/Kumarakom </h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After breakfast check out from the hotel and transfer to Alleppey/Kumarakom. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Check in at the resort.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Later proceed to visit Alleppey backwaters. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Take a cruise (Optional – Own Cost) through the rich and splendid backwater. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Just relax at the boat.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> It will be a unique and exclusive experience in your lifetime.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> You will be cruising along the village sides and paddy fields witnessing the core life of the Kerala villages.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Overnight stay at Alleppey/Kumarakom.</div>

                                                    </div>
                                                </div>
                                            </div>


                                        </div>
                                        <div class="col-lg-12 col-md-6 mb-2" id="inclusions">
                                            <div class="desc-box bg-grey p-4 rounded">
                                                <h5 class="mb-2">Inclusions</h5>
                                                <ul>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Arrival and departure assistance </li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Welcome Drink on arrival at all the hotels </li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Accommodation on twin sharing basis  </li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> Meal plan will be on CP (Room + Breakfast) at all the hotels </li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> All transfers and sightseeing by AC Vehicles (At disposal - As per the itinerary from 08.00 AM to 07.00 PM)</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> Pick up & Drop is from Cochin   </li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> All toll, parking fee, driver bata & fuel cost.  </li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> Bedroom : 01 Double Rooms</li>


                                                </ul>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-6 mb-2" id="exclusions">
                                            <div class="desc-box bg-grey p-4 rounded">
                                                <h5 class="mb-2">Exclusions</h5>
                                                <ul>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Air Fare / Train fare /Bus fare are not included in the package</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> GST</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Anything mention in the inclusions</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Water activities</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-6 mb-2" id="things-to-do">
                                            <div class="desc-box bg-grey p-4 rounded">
                                                <h5>Things To Do</h5>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Adventure Sports: Participate in Action-Packed Activities Explore the history of Shri Hari Yoga Ashram and practise yoga</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Waterfalls: Enjoy the Music Temples: Go to the Almighty Museum of Himachal Culture & Folk Art </div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Manali Wildlife Sanctuary: Go on a Yak Adventure</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Sher-e-Punjab: Savour Some Delectable Cuisine</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Vashist Hot Water Springs for Meditation and Relaxation by Astrid Gufa After riding a bike via Rohtang Pass, hike to the summit of Beas Kund. Consider taking a restorative bath</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> The Manikaran Gurudwara: Bathe in Sulfuric Water The Tibetan Monastery: Visit for Peace and Pleasure</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> For the Love of Art: Naggar Castle; Zorbing: A Fun and Exciting Activity; Trek to See a Mesmerizing Landscape At Bhrigu Lake</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Seek Lord Shiva's blessings at the Gauri Shankar Temple. Manu Market: Buy Everything You Want</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="description mb-2" id="places-to-eat">
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 mb-2 ">
                                            <div className="desc-box bg-grey p-4 rounded ">
                                                <h5 className="mb-2">Best Cafes</h5>
                                                <div>As we contemplate 'God's Own Country’, Kerala, we generally imagine the backwaters, houseboats, and sea shores. What we don't think about is the wide variety of luxurious Kerala food. From Karimeen Pollicahthu to Puttu, from Appam to different kinds of fish and some famous food in Kerala, the choices are endless. Practically every one of the Malayalam foods is made in coconut oil, which thus gives an exceptionally true taste of famous food in Kerala. ...</div>
                                                <a href="/blogs/thirteen-best-places-to-eat-in-kerala-like-a-local" className="read-more-link" target="_blank" ><button class="white bg-theme p-1 px-2" style={{ float: "right", margin: "-10px", fontSize: "11px" }}>Read More</button></a>

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
                                                                <h5 className="mb-0">How To Plan a 4 Days Kerala Trip?</h5>
                                                            </div>
                                                            <div className="accrodion-content" style={{ display: "block" }} >
                                                                <div className="inner">
                                                                    <div className="mb-0">To see the best part of Kerala in 4 days, you can go with our Kerala tour packages, which comes according to different budgets and requirements, including famous places in Kerala. We always make sure to take care of every arrangement from accommodation to food, & transport, etc</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="accrodion">
                                                            <div className="accrodion-title rounded">
                                                                <h5 className="mb-0">Can We Plan Kerala Trip For 4 Days For a Honeymoon?</h5>
                                                            </div>
                                                            <div className="accrodion-content" style={{ display: "none" }} >
                                                                <div className="inner">
                                                                    <div className="mb-0">Yes, with our Best Kerala Tour Packages, you can customize your honeymoon & can include the places to visit in Kerala according to your interest. Get the best booking assistance with us. </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="accrodion">
                                                            <div className="accrodion-title rounded">
                                                                <h5 className="mb-0"> What are some of the famous places to visit with the Kerala tour package? </h5>
                                                            </div>
                                                            <div className="accrodion-content" style={{ display: "none" }} >
                                                                <div className="inner">
                                                                    <div className="mb-0">Kerala tour package’s itineraries have all the top destinations, like Munnar, Thekkady, Alleppey, etc. But you can always customize your tour package according to your interest and budget. Tripzygo’s tour operators are always open to give you suggestions and will assist you accordingly.</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="accrodion">
                                                            <div className="accrodion-title rounded">
                                                                <h5 className="mb-0">Is it possible to visit the top places of Kerala like Munnar and Alleppey in 3 to 4 days?</h5>
                                                            </div>
                                                            <div className="accrodion-content" style={{ display: "none" }} >
                                                                <div className="inner">
                                                                    <div className="mb-0">Kerala is God's own country and places like Munnar and Alleppey are here to prove it. It can also be seen in 3 to 4 days if you take Kerala Holiday Packages. This package covers the best tourist attractions of Munnar and Alleppey with comfortable amenities. You also get the facility to add more destinations to explore the most beautiful places of Kerala.</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="accrodion">
                                                            <div className="accrodion-title rounded">
                                                                <h5 className="mb-0"> What is special about Best Kerala Tour Packages?</h5>
                                                            </div>
                                                            <div className="accrodion-content" style={{ display: "none" }} >
                                                                <div className="inner">
                                                                    <div className="mb-0"> It has the best of everything as it caters to all the customer's needs. With this, the visitors get amazingly categorized hotels, delightful destinations, mouth-watering cuisine, and excellent local transport and transfers, which makes it the best.</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <LocationMap mapLink="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4016664.3063345025!2d73.88293947310464!3d10.538127377774241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0812ffd49cf55b%3A0x64bd90fbed387c99!2sKerala!5e0!3m2!1sen!2sin!4v1661253136245!5m2!1sen!2sin"></LocationMap>
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
