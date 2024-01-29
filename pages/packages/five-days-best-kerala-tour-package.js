import React from 'react'
import Packages_Form from '../../components/Contact_Forms/packages_form';
import Head from "next/dist/shared/lib/head";
import { useState } from "react";
import RelatedPackage from "../../components/Package_Description/RelatedPackages"
import { useEffect } from 'react'
import Carousel from '../../components/Package_Description/descriptionCarousel';
import LocationMap from '../../components/Package_Description/locationMap';
import axios from 'axios';
import ShareButton from '../../components/Package_Description/shareButton';
import PopularityWidget from '../../components/Package_Description/popularityWidget';

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
            Kerala is a perfect destination for travelers who are looking for the best backwaters, beaches, hill stations, and wildlife. Kerala has a rich culture and heritage that is worth exploring. The Alleppey backwaters in Kerala are one of the most popular attractions in this state. You can enjoy boat rides through these waterways and see some of the most beautiful scenery on earth. If you are looking for a more adventurous trip, then you should go on a backwater safari where you will be able to see some wildlife as well with our best Kerala tour package.
        </p>
        <p className="extra-content">
            Alleppey backwaters in Kerala is a beautiful tourist place to visit. It is one of the most popular tourist destinations in Kerala. Tourists can explore the vast expanse of lakes and rivers by houseboat or canoe with the best Kerala holiday package. They also have access to a variety of resorts that offer accommodation on houseboats or on land.
        </p>
        <p className="extra-content">
            Munnar the extremely beautiful hill station in Kerala is honored by nature. The pleasant hills, stunning cliffs, rambling tea, spice plantation, lakes, and waterfalls, you simply name it the spot is like a paradise, and explore it with the best Kerala holiday package. It has a charming and positive climate over time. The lovely scene makes Munnar one of the most loved destinations for some national and international vacationers.
        </p>
        <p className="extra-content">
            Thekkady is a genuine heaven for nature sweethearts and is one of the most mind-blowing vacation destinations in 'God's Own Nation', Kerala. This radiant tourist location with its cool environment, all-encompassing vistas, undulated backwoods covered in lavish vegetation, and quiet feeling attracts a lot of travelers from across the world, making it one of the most preferred holiday locations in the Southern territory of Kerala.
        </p>

        <p className="extra-content">
            The best Kerala tour package will help you experience the best of Kerala tourism. You can enjoy the beauty of this place with the best Kerala holiday package that suits your budget and preferences.
        </p>
    </div>
    const linkName = readMore ? 'Read Less' : 'Read More'
    return (
        <div>
            <Head>

                <title>TripzyGo - Alleppey Backwaters in Kerala and Much More - Best Kerala Holiday Package</title>
                <meta name="description" content="Explore the beautiful Alleppy backwaters in Kerala and a lot more with this amazing and best Kerala tour package. Book the Kerala Holiday package now." />
                <meta name="keywords" content="Alleppey backwaters in Kerala, best Kerala tour package, best kerala holiday package" />
                <link rel="icon" href="/icon.png" />
                <link rel="canonical" href="https://www.tripzygo.in/packages/five-days-best-kerala-tour-package" />
                <meta property="og:url" content="https://www.tripzygo.in/packages/five-days-best-kerala-tour-package" />
                <meta property="og:title" content="Alleppey Backwaters in Kerala and Much More - Best Kerala Holiday Package" />
                <meta property="og:description" content="Explore the beautiful Alleppy backwaters in Kerala and a lot more with this amazing and best Kerala tour package. Book the Kerala Holiday package now." />
                <meta property="og:image" content="https://www.tripzygo.in/images/domestic/best_kerala_tour_package_for_an_exciting_time_amidst_beauty_and_nature/1.webp" />
            </Head>
            <ShareButton />
            <PopularityWidget packageCount="75" progressBarPercentage="85%" />
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
                                        <h2 className="mb-1">Five Days Best Kerala Tour Package</h2>

                                    </div>
                                </div>
                                <div className="description-images mb-4 overflow-hidden">
                                    <div className="thumbnail-images position-relative">
                                        <div className="rounded overflow-hidden">
                                            <Carousel
                                                imageLink1="/images/domestic/best_kerala_tour_package_for_an_exciting_time_amidst_beauty_and_nature/1.webp"
                                                imageLink2="/images/domestic/best_kerala_tour_package_for_an_exciting_time_amidst_beauty_and_nature/2.webp"
                                                imageLink3="/images/domestic/best_kerala_tour_package_for_an_exciting_time_amidst_beauty_and_nature/3.webp"
                                                imageLink4="/images/domestic/best_kerala_tour_package_for_an_exciting_time_amidst_beauty_and_nature/4.webp"
                                                imageLink5="/images/domestic/best_kerala_tour_package_for_an_exciting_time_amidst_beauty_and_nature/5.webp"
                                                imageLink6="/images/domestic/best_kerala_tour_package_for_an_exciting_time_amidst_beauty_and_nature/6.webp"
                                                alt1="family kerala tour package"
                                                alt2="family kerala tour package"
                                                alt3="Alleppey backwaters in Kerala"
                                                alt4="Alleppey backwaters in Kerala"
                                                alt5="best kerala holiday package"
                                                alt6="best kerala holiday package"
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
                                                    <p>Kerala is a state in India and is one of the most beautiful states in the country. It is also known as God's Own Country. Kerala has many tourist attractions like Alleppey backwaters in Kerala, Fort Kochi, Munnar Hill station, Thekkady elephant safari park, and much more which makes this state a perfect destination for tourists from all over the world. Kerala is one of the most popular states in India to visit. The state is blessed with a rich culture, natural beauty, and amazing people. There are many reasons to visit Kerala and we will help you explore the best Kerala tour package and the best Kerala holiday packages.....</p>
                                                    {readMore && extraContent}
                                                    <a className="read-more-link" onClick={() => { setReadMore(!readMore) }}><h6 style={{ float: "right", margin: "-10px", fontSize: "13px" }}>{linkName}</h6></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="description mb-2">
                                    <div className="row">
                                        <div class="col-lg-12 col-md-6 mb-2 ">
                                            <div class="desc-box bg-grey p-4 rounded ">
                                                <h5 class="mb-2">Overview</h5>
                                                <div> Kerala is a beautiful place.</div>
                                                <div class="mb-0"> Be it the tea and coffee gardens of Kerala, the boat houses, or just the simple view of the scenic beauty all around the place, a trip to Kerala is one of the most naturistic experiences you can have.</div>
                                                <div> You have the chance to make new memories with beautiful, close to nature moments in Kerala and the calm and peace of the place is just serene and something we all seek in life.</div>
                                                <div> With all of that, there remains no reason as to why a Kerala trip should not be on the charts.</div>
                                                <div> Have the most amazing time in the Alleppey backwaters in Kerala along with visit to national parks of Kerala, Munnar, and other places included in the tour itinerary of this best Kerala tour package customised just for you.</div>
                                                <div> Book the package now.</div>
                                            </div>
                                        </div>


                                    </div>
                                </div>

                                <div className="tour-includes mb-4">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td><i class="fa fa-clock-o pink mr-1" aria-hidden="true"></i> Package Category : Luxury</td>
                                                <td><i class="fa fa-group pink mr-1" aria-hidden="true"></i> People : 1</td>

                                            </tr>
                                            <tr>
                                                <td><i class="fa fa-inr pink mr-1" aria-hidden="true"></i> Total Tour Cost : INR 23,750/-* </td>
                                                <td><i className="fa fa-clock-o pink mr-1" aria-hidden="true"></i> Days : 4 NIGHTS/5 DAYS</td>
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
                                                    <h5 class="mb-0"><span>Day 1</span>  Cochin – Munnar</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Cochin – After breakfast check out from the hotel and transfer to Munnar.</div>
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
                                                    <h5 class="mb-0"><span>Day 2</span> - Munnar</h5>
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
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> Bedroom : 01 Double Rooms </li>


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
                                                <div>As we contemplate 'God's Own Country’, Kerala, we generally imagine the backwaters, houseboats, and sea shores. What we don't think about is the wide variety of luxurious Kerala food. From Karimeen Pollicahthu to Puttu, from Appam to different kinds of fish and some famous food in Kerala, the choices are endless. Practically every one of the Malayalam foods is made in coconut oil, which thus gives an exceptionally true taste...</div>
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
                                                                <h5 className="mb-0">How Best Kerala Tour Packages Are Useful?</h5>
                                                            </div>
                                                            <div className="accrodion-content" style={{ display: "block" }} >
                                                                <div className="inner">
                                                                    <div className="mb-0">Of course! Kerala tour packages are reliable and useful for everyone as they are customised as per the traveler's needs. It will help you to experience the best vacation with the best visiting places & things to do in Kerala. These packages are designed as per the budget & needs of the clients.</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="accrodion">
                                                            <div className="accrodion-title rounded">
                                                                <h5 className="mb-0">What can we see in 5 Days with the best Kerala Tour Packages? </h5>
                                                            </div>
                                                            <div className="accrodion-content" style={{ display: "none" }} >
                                                                <div className="inner">
                                                                    <div className="mb-0">Although there is a lot to see in Kerala, 5 days will be good to experience the best of the destination. Our travel packages include the best itinerary to spend 5 days in Kerala & also assures a pleasant and comfortable journey.</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="accrodion">
                                                            <div className="accrodion-title rounded">
                                                                <h5 className="mb-0">Do Best Kerala Tour Packages Include Air Tickets?</h5>
                                                            </div>
                                                            <div className="accrodion-content" style={{ display: "none" }} >
                                                                <div className="inner">
                                                                    <div className="mb-0">Most travel packages include this. It is better to make sure before selecting it. </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="accrodion">
                                                            <div className="accrodion-title rounded">
                                                                <h5 className="mb-0">Can the customer get the Best Kerala Tour Packages customised as per their convenience?</h5>
                                                            </div>
                                                            <div className="accrodion-content" style={{ display: "none" }} >
                                                                <div className="inner">
                                                                    <div className="mb-0">Definitely, you are free to modify or customization. You can include or exclude places, activities, transport, amenities, etc., according to your budget and needs</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="accrodion">
                                                            <div className="accrodion-title rounded">
                                                                <h5 className="mb-0">Is a houseboat tour also a part of the best Kerala tour packages?</h5>
                                                            </div>
                                                            <div className="accrodion-content" style={{ display: "none" }} >
                                                                <div className="inner">
                                                                    <div className="mb-0">All this information is mentioned in itineraries. You can find <a href="/blogs/twenty-best-top-things-to-do-in-kerala-activities-you-should-not-miss-on-your-trip" style={{ color: "Red" }} target="_blank">things to do in Kerala's</a>section. Along with these activities. There is a long list of Kerala's best destinations, food items, beaches, etc.</div>
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
