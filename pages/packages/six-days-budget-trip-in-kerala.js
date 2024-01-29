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
            From exciting beaches where you can chill in the warm sand and enjoy coconut water to lush green forests where you can go trekking to backwaters where you can rent a houseboat and enjoy a wonderful stay in the midst of the rivers, there is everything in Kerala.
            Thinking about the money now? Well, you don’t have to worry about that either because you can easily go on a low budget trip in Kerala with out Best Kerala tour package.
        </p>
        <p className="extra-content">
            This best Kerala tour package is designed for a low budget trip in Kerala taking you to the most amazing, most beautiful, and best places to visit in Kerala.
            This 6 days low budget trip in Kerala will take you to the best places to visit in Kerala such as the Alleppey backwaters where you can enjoy in the houseboats and even have authentic South Indian food in traditional South Indian style on banana leaves, Munnar where you can enjoy and chill at the beaches, as well as the forests in Kerala where you can have fun trekking along the different routes and paths in Kerala.
        </p>
        <p className="extra-content">
            The best Kerala tour package can also be designed to take you to the other best places to visit in Kerala such as Wayanad, Thekkaddy, Kochi, and more. The entire low budget trip in Kerala can be customized within this amazing and best Kerala tour package.
        </p>
        <p className="extra-content">
            With this best Kerala tour package, you will have the most amazing days of your life in the most amazing cities in South India. Not to forget, you can also visit the beautiful tea and coffee plantations in Kerala which the state is famous for and even get the best tea and coffee home from there. The best part is you can get different flavors of tea and coffee and each flavor is soothing and mesmerizing.
        </p>

        <p className="extra-content">
            With all such things in Kerala, you really don’t want to miss out on this best Kerala tour package designed to take you to the best places to visit in Kerala, especially when it is available at such low price that you can easily have a low budget trip in Kerala.
        </p>
        <p className="extra-content">
            So, don’t worry about the budget, don’t worry about the itinerary, don’t worry about anything at all, just pack your bags and simply go on this amazing low budget trip in Kerala to the most beautiful, mesmerizing, and best places to visit in Kerala with this amazing and best Kerala tour package.
        </p>
        <p className="extra-content">
            Don’t wait up. Get in touch with a TripzyGo travel executive to book your best Kerala tour package for a low budget trip in Kerala at the most amazing deals and offers.
        </p>
    </div>
    const linkName = readMore ? 'Read Less' : 'Read More'
    return (
        <div>
            <Head>

                <title>TripzyGo - Glorious Kerala Tour Package For A Low Budget Trip In Kerala</title>
                <meta name="description" content="Best Kerala Tour Package - Plan your low budget trip in Kerala. We have a special tour package for you which includes the best places to visit in Kerala." />
                <meta name="keywords" content="low budget trip in kerala, best places to visit in kerala, best kerala tour package" />
                <link rel="icon" href="/icon.png" />
                <link rel="canonical" href="https://www.tripzygo.in/packages/six-days-budget-trip-in-kerala" />
                <meta property="og:url" content="https://www.tripzygo.in/packages/six-days-budget-trip-in-kerala" />
                <meta property="og:title" content="Glorious Kerala Tour Package For A Low Budget Trip In Kerala" />
                <meta property="og:description" content="Best Kerala Tour Package - Plan your low budget trip in Kerala. We have a special tour package for you which includes the best places to visit in Kerala." />
                <meta property="og:image" content="https://www.tripzygo.in/images/domestic/budget_trip_in_kerala_with_the_best_kerala_tour_package/1.webp" />
            </Head>
<ShareButton/>
<PopularityWidget packageCount="61" progressBarPercentage="60%"/>
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
                                        <h2 className="mb-1">6 Days Kerala tour | Embarking on a Tropical Paradise</h2>

                                    </div>
                                </div>

                                <div className="description-images mb-4 overflow-hidden">
                                    <div className="thumbnail-images position-relative">
                                        <div className="rounded overflow-hidden">
                                            <Carousel
                                                imageLink1="/images/domestic/budget_trip_in_kerala_with_the_best_kerala_tour_package/1.webp"
                                                imageLink2="/images/domestic/budget_trip_in_kerala_with_the_best_kerala_tour_package/2.webp"
                                                imageLink3="/images/domestic/budget_trip_in_kerala_with_the_best_kerala_tour_package/3.webp"
                                                imageLink4="/images/domestic/budget_trip_in_kerala_with_the_best_kerala_tour_package/4.webp"
                                                imageLink5="/images/domestic/budget_trip_in_kerala_with_the_best_kerala_tour_package/5.webp"
                                                imageLink6="/images/domestic/budget_trip_in_kerala_with_the_best_kerala_tour_package/6.webp"
                                                alt1="Kerala trip plan for 6 days"
                                                alt2="Kerala trip plan for 6 days"
                                                alt3="best places to visit in Kerala"
                                                alt4="best places to visit in Kerala"
                                                alt5="best Kerala tour package"
                                                alt6="best Kerala tour package"
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
                                                    <p>Kerala is a state with mesmerizing and breathtaking views and no one would ever want to miss out on an exciting trip to such a wonderful and aesthetic state. Be it the beauty of Kerala or its culture, everything is just adorable in the state and there are many best places to visit in Kerala......</p>
                                                    {readMore && extraContent}
                                                    <a className="read-more-link" onClick={() => { setReadMore(!readMore) }}><h6 style={{ float: "right", margin: "-10px", fontSize: "13px" }}>{linkName}</h6></a>
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
                                                <div>Sometimes, you want to plan a trip but are quite tight on budget. </div>
                                                <div class="mb-0">Well, there’s nothing to be sad about that because with TripzyGo you can have budget trips of all kinds. </div>
                                                <div>This amazing Kerala tour package is designed for a low budget trip in Kerala so that you can enjoy the best of this peaceful and serene place even when you’re quite in a pinch.</div>
                                                <div>With the best places to visit in Kerala on the tour itinerary and a visit to the most beautiful city in Kerala, Munnar, this Kerala tour package takes you on a wholesome experience in the entire state on your budget trip in Kerala.</div>
                                                <div>Be ready for a great and one of a kind experience with this amazing and best Kerala tour package.</div>
                                                <div>Book your package now.</div>
                                            </div>
                                        </div>


                                    </div>
                                </div>

                                <div class="tour-includes mb-4">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td><i class="fa fa-clock-o pink mr-1" aria-hidden="true"></i> Package Category : Standard</td>
                                                <td><i class="fa fa-group pink mr-1" aria-hidden="true"></i> People : 1</td>

                                            </tr>
                                            <tr>
                                                <td><i class="fa fa-inr pink mr-1" aria-hidden="true"></i> Total Tour Cost : INR 15,750/-*</td>
                                                <td><i className="fa fa-clock-o pink mr-1" aria-hidden="true"></i> Days : 5 Nights/ 6 Days </td>
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
                                                    <h5 class="mb-0"><span>Day 1</span> - Cochin  </h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "block" }}>
                                                    <div class="inner">
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Arrival at Cochin and transfer to hotel.</div>
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Check in at Hotel. </div>
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> In Cochin Visit the Dutch Palace-built by the Portuguese in 1557 and subsequently renovated by the Dutch after 1663.</div>
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> The murals are perhaps the best in India. </div>
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Jewish Synagogue - built in 1568 and the oldest Synagogue in the Commonwealth are at Mattancherry. St. Francis .</div>
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Church - built in 1510 and the oldest European church in India, Chinese Fishing Nets- introduced by the court of Kublai </div>
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Khan can be seen in Fort Cochin. Fort Cochin Beach etc. Overnight stay at Cochin</div>


                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 2</span> - Cochin – Munnar</h5>
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
                                            <div class="accrodion">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 3</span> - Munnar</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After breakfast proceed for sightseeing.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Maduppatty dam, Echo Point, Kundalay Dam, Pothenmedu View Point, Blossom Park etc are some of the highlights of the sightseeing. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Shopping & overnight stay at Munnar</div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 4</span> - Munnar – Thekkady</h5>
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
                                                    <h5 class="mb-0"><span>Day 5</span> - Thekkady – Alleppey/Kumarakom </h5>
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
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 6</span> -  Departure Day</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Cochin (Tour Ends) - Morning have breakfast at resort later check out Hotel and drive to Airport / Railway Station for departure.</div>
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
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Take a scenic train ride through Kerala to witness the beautiful landscapes.</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Cruise the backwaters on a houseboat to enjoy the serene surroundings.</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Visit the exotic flower garden of Munnar and immerse yourself in the fragrance of the flowers.</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Watch the martial art form of Kalaripayattu to witness the ancient traditions of Kerala.</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Watch a snake boat race to witness the unique culture of Kerala.</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Try your hands at traditional Kerala fishing to experience the local way of life.</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Walk between tea gardens in Munnar to explore the beauty of nature.</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Surf at the beaches of Varkala to experience the thrill of adventure.</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Go for a jeep safari in Periyar Jungle to spot wildlife in their natural habitat.</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Enjoy Kerala's lunch on a banana leaf to experience the authentic cuisine of Kerala.</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Experience the musical sound of falling water at Athirapally Falls to witness the beauty of nature.</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Try paragliding in Kerala to experience the thrill of adventure.</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Enjoy a houseboat cruise in Kumarakom and Alleppey to witness the beauty of the backwaters.</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Take an elephant ride in Munnar to experience the majestic creature up close.</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Experience a shikara ride in the backwaters to enjoy the peaceful surroundings.</div>
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
                                                                <h5 className="mb-0">What are the best honeymoon destinations in Munnar for children? </h5>
                                                            </div>
                                                            <div className="accrodion-content" style={{ display: "block" }} >
                                                                <div className="inner">
                                                                    <div className="mb-0">Best honeymoon destinations in Munnar for children are:</div>
                                                                    <p className="extra-content text-justify"><strong className='strongfont'>• </strong>Tea Garden</p>
                                                                    <p className="extra-content text-justify"><strong className='strongfont'>• </strong>Top Station</p>
                                                                    <p className="extra-content text-justify"><strong className='strongfont'>• </strong>Attukal Waterfall</p>
                                                                    <p className="extra-content text-justify"><strong className='strongfont'>• </strong>Rajamalai National Park</p>
                                                                    <p className="extra-content text-justify"><strong className='strongfont'>• </strong>Mattupatty Dam</p>
                                                                    <p className="extra-content text-justify"><strong className='strongfont'>• </strong>Kundala Dam Lake</p>
                                                                    <p className="extra-content text-justify"><strong className='strongfont'>• </strong>Photo Point</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="accrodion">
                                                            <div className="accrodion-title rounded">
                                                                <h5 className="mb-0">What are the waterfalls around Munnar?</h5>
                                                            </div>
                                                            <div className="accrodion-content" style={{ display: "none" }} >
                                                                <div className="inner">
                                                                    <div className="mb-0"> Munnar is one of the most beautiful places in Kerala. It hosts multiple waterfalls. Thoovanam Waterfalls, Kuthumkal Waterfall, Chinnakanal, and Power House Waterfall are such whose beauty will make you crazy. Nyayamakad Waterfall, Attukal Waterfall, Lakkam Waterfalls, Cheeyappara Waterfalls, and Valara Waterfalls can allure. All of these are near Munnar, so you must visit here.</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="accrodion">
                                                            <div className="accrodion-title rounded">
                                                                <h5 className="mb-0">Can a Low Budget Trip in Kerala Be Satisfying?</h5>
                                                            </div>
                                                            <div className="accrodion-content" style={{ display: "none" }} >
                                                                <div className="inner">
                                                                    <div className="mb-0">Absolutely, it can be. You may have to compromise on 1 or 2 destinations and activities, but the accommodation will definitely be of good quality.</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="accrodion">
                                                            <div className="accrodion-title rounded">
                                                                <h5 className="mb-0"> What amazing things to do in Kerala for an adventurous trip?</h5>
                                                            </div>
                                                            <div className="accrodion-content" style={{ display: "none" }} >
                                                                <div className="inner">
                                                                    <div className="mb-0">Kerala is a destination that attracts people from all walks of life. That's why categorize the holiday according to your wish, such as romantic, relaxing, etc., but for adventurous vacations, you can go with these activities:
                                                                        <p className="extra-content text-justify"><strong className='strongfont'>• </strong>Parasailing</p>
                                                                        <p className="extra-content text-justify"><strong className='strongfont'>• </strong>Cycling </p>
                                                                        <p className="extra-content text-justify"><strong className='strongfont'>• </strong>Paragliding </p>
                                                                        <p className="extra-content text-justify"><strong className='strongfont'>• </strong>Trekking</p>
                                                                        <p className="extra-content text-justify"><strong className='strongfont'>• </strong>Tree House Stay </p>
                                                                        <p className="extra-content text-justify"><strong className='strongfont'>• </strong>Kayaking </p>
                                                                        <p className="extra-content text-justify"><strong className='strongfont'>• </strong>Snorkelling </p>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="accrodion">
                                                            <div className="accrodion-title rounded">
                                                                <h5 className="mb-0">Is December a good month to visit Munnar?</h5>
                                                            </div>
                                                            <div className="accrodion-content" style={{ display: "none" }} >
                                                                <div className="inner">
                                                                    <div className="mb-0">Absolutely, December i.e., winter is perfect to explore Munnar. Because this is when the weather is pleasant. Hence, outdoor activities and sightseeing become even more pleasurable.</div>
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
