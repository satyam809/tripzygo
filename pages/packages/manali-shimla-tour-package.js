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
            const url = `https://backend.tripzygo.in/packages?limit=12&destination_search=Shimla`;
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
            This Shimla Manali Package is designed to take you to this amazing Shimla Manali tour where you can have the best moments and make the best memories of your life living all the adventures that these amazing and beautiful hill stations have to offer.
        </p>
        <p className="extra-content">
            We have designed this package with the most amazing Shimla Manali tour itinerary taking you to the best places of Shimla and Manali. Whether it’s the wonderful and adventurous treks in Shimla and Manali or the mesmerizing views of these breathtaking and beautiful hill stations, the Shimla Manali tour itinerary in this Manali Shimla tour package covers everything so that you can witness and enjoy the best of Shimla and Manali on your trip.
        </p>
        <p className="extra-content">
            You can also go for other adventures such as river rafting, skiing, etc., on your Shimla Manali tour, and let the adventurer in you explore everything that is to explore out there in these gorgeous, beautiful, mesmerizing, and breathtaking hill stations.
        </p>
        <p className="extra-content">
            The best part of your Shimla Manali tour will be the visit to the temples in these hill stations. These hill stations are full of cultural and regional significance and it’s an amazing experience to learn all the cultural and religious history of the place. You can visit the numerous temples of the place and learn the stories that every temple has to it. Most importantly you will have the chance to go to the holy Hidimba temple, the only temple of a demon that exists. It would be an experience for you to know all about this temple and visit it and spend some time in the place.
        </p>

        <p className="extra-content">
            This Manali Shimla tour package also includes the best places to visit in Shimla and Manali in its tour itinerary and has the best things to do in Shimla and Manali planned for you. Additionally, this Manali Shimla tour package is designed with the most unique stays and accommodations for you where you can live comfortably and luxuriously on your trip.
        </p>
        <p className="extra-content">
            With all of that this Shimla Manali package is the perfect option for you for the most amazing, happening, and exciting trip to two amazing hill stations that are full of beauty and liveliness.
        </p>
        <p className="extra-content">
            You will feel mesmerized and lively on this Shimla Manali tour that we have designed keeping in mind all the touring requirements and needs. This Shimla Manali package is all you need for the most amazing touring experience of your life for the best adventures and memories of a tour.
        </p>
        <p className="extra-content">
            So, don’t wait up. Get this Shimla Manali package now at the best deals and offers by getting in touch with a TripzyGo travel executive who will be available for you every step of the way in your trip planning as well as during the tour.
        </p>

    </div>
    const linkName = readMore ? 'Read Less' : 'Read More'
    return (
        <div>
            <Head>

                <title>TripzyGo - Manali Shimla Tour Package At Best Price - Shimla Manali Tour</title>
                <meta name="description" content="Have an exciting Shimla Manali Tour with this affordable Manali Shimla Tour Package. Enjoy the beauty of the mountains with Shimla Manali Package. Book now." />
                <meta name="keywords" content="Manali Shimla Tour Package, Shimla Manali Package, Shimla Manali tour" />
                <link rel="icon" href="/icon.png" />
                <link rel="canonical" href="https://www.tripzygo.in/packages/manali-shimla-tour-package" />
                <meta property="og:url" content="https://www.tripzygo.in/packages/manali-shimla-tour-package" />
                <meta property="og:title" content=" Manali Shimla Tour Package At Best Price - Shimla Manali Tour" />
                <meta property="og:description" content="Have an exciting Shimla Manali Tour with this affordable Manali Shimla Tour Package. Enjoy the beauty of the mountains with Shimla Manali Package. Book now." />
                <meta property="og:image" content="https://www.tripzygo.in/images/domestic/manali_shimla_tour_package/1.webp" />
            </Head>
<ShareButton/>
<PopularityWidget packageCount="75" progressBarPercentage="70%"/>
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
                                        <h2 className="mb-1">Manali Shimla Tour Package</h2>

                                    </div>
                                </div>


                                <div className="description-images mb-4 overflow-hidden">
                                    <div className="thumbnail-images position-relative">
                                        <div className="rounded overflow-hidden">
                                            <Carousel
                                                imageLink1="/images/domestic/manali_shimla_tour_package/1.webp"
                                                imageLink2="/images/domestic/manali_shimla_tour_package/6.webp"
                                                imageLink3="/images/domestic/manali_shimla_tour_package/2.webp"
                                                imageLink4="/images/domestic/manali_shimla_tour_package/3.webp"
                                                imageLink5="/images/domestic/manali_shimla_tour_package/4.webp"
                                                imageLink6="/images/domestic/manali_shimla_tour_package/5.webp"
                                                alt1="Manali Shimla Tour Package"
                                                alt2="Manali Shimla Tour Package"
                                                alt3="Shimla Manali Package"
                                                alt4="Shimla Manali Package"
                                                alt5="Shimla Manali tour"
                                                alt6="Shimla Manali tour">
                                            </Carousel>
                                        </div>
                                    </div>
                                </div>
                                <div className="description mb-2">
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 mb-2 ">
                                            <div className="desc-box bg-grey p-4 rounded ">
                                                <div className="App">
                                                    <h5 className="mb-2">Why to Visit Shimla?</h5>
                                                    <p>A Shimla Manali tour is a dream for everyone, especially trekking enthusiasts and adventurers, and why shouldn’t it be? After all, the place is full of mountains and cliffs to climb upon and there are breathtaking views that mesmerise you and take you into trance.....</p>
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
                                                <div>It’s the monsoon season and the best time to visit Shimla Manali. Are you also craving for a Shimla Manali trip? </div>
                                                <div class="mb-0">Well, this Manali Shimla Tour Package is all you need then! A complete 5 Nights 6 Days escape into the most wonderful hill stations famous for their picturesque landscapes and mesmerising beauty.</div>
                                                <div>Starting from Delhi, directly taking you to Manali, and then to Shimla, you’re going to love the ride on this super deluxe Manali Shimla Tour Package with stops at the most ideal locations in both the hill stations.</div>
                                                <div>Be it sightseeing, fine dining, unique stay, this Shimla Manali Package is packed with everything you need for a fun-loving Shimla Manali tour.</div>
                                                <div>Whether you go with your family, friends, or partner, this tour package is great for everyone and you will love the experience we create for you.</div>
                                                <div>What are you waiting for? Book your Manali Shimla Tour Package now and enroute the most beautiful and enchanting trip of your life.</div>

                                            </div>
                                        </div>


                                    </div>
                                </div>

                                <div class="tour-includes mb-4">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td><i class="fa fa-clock-o pink mr-1" aria-hidden="true"></i> Package Category : Super Deluxe</td>
                                                <td><i class="fa fa-bed pink mr-1" aria-hidden="true"></i> Bedroom : 01 Double Rooms</td>
                                            </tr>
                                            <tr>
                                                <td><i class="fa fa-map-signs pink mr-1" aria-hidden="true"></i> Shimla : Satyam Paradise / Nirvana Hills /Swastik inn Or Similar</td>
                                                <td><i class="fa fa-map-signs pink mr-1" aria-hidden="true"></i> Manali : Kullu Manali Inn / Naina Resorts & Cottages / New Harmony Inn Or Similar</td>

                                            </tr>
                                            <tr>
                                                <td><i className="fa fa-clock-o pink mr-1" aria-hidden="true"></i> Days : 5 Nights/6 Days</td>
                                                <td><i class="fa fa-inr pink mr-1" aria-hidden="true"></i> Total Tour Cost : INR 29,500/-*</td>

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
                                            <div class="accrodion">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 1</span> - Delhi – Manali (OVERNIGHT JOURNEY)</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "block" }}>
                                                    <div class="inner">
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Day Services: Volvo Only</div>
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> We will receive you in New-Delhi at Volvo pick-up point. </div>
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Your journey into the sparkling land of Himachal Pradesh starts from here.</div>
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> The overnight journey takes you through cities and your morning will be greeted with the fresh air of Manali.</div>
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Exotic Manali offers something special for everyone. </div>
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> It gives peace to mediators; inspiration to artists, daring Activities for adventure Seekers and this list just goes on.</div>
                                                        <div className="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> As soon as you enter into the terrains of Manali, you will feel the cool breeze already taking all your stress away and surprising you from its jaw- dropping landscapes.</div>


                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 2</span> - Arrival in Manali + Local city tour</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Day Services: Stay, Dinner & Car</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Major Attractions: Hadimba Mata Temple, Club House, Tibetan Monastery, Vashisht’s Hot Springs.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Upon reaching Manali Stop, our team will greet you and transfer you to the hotel (Check in time will be 12:00 noon and early check-in will be subject to availability and an extra charge applies).</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Wake up to the beauty of Manali, after Lunch, proceed for the day tour which includes your local sightseeing.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Every new beginning should be honored with folded hands and so the first place to visit will be Hadimba Mata Temple along with Ghatotkacha Temple then a short visit to Club House where you can enjoy some Indoor activities and then further to Tibetan Monastery.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Later take a bath in Sage Vashisht’s Hot Springs containing Medical properties (Do carry a towel).</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Right across the Hot spring are temples of Lord Shiva and Lord Ram .</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Evening you are free to roam on the famed Mall Road and indulge in local shopping and alsotry some of the native cuisines. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Return to the hotel for dinner and overnight stay.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 3</span> - Manali – Solang Valley or Atal Tunnel</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Day Services: Stay, Breakfast, Dinner & Car</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Major Attractions: Solang Valley, Adventure activities.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After breakfast it is time for some adventures!</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Wake up to the sweet sound of nature and after breakfast head towards Solang Valley. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> This valley is famous for its adventure activities and you can try your hand at Paragliding, Zorbing, ATV Rides, Horse-riding,Trail-rides and so much more. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Before indulging in these activities make sure to understand all safety protocols and measures.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 4</span> - Day Tour To Kullu -Naggar

                                                    </h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Day Services: Stay, Breakfast, Dinner & Car</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Major Attractions: Kullu Pashmina Shawl showrooms.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> White Water River Rafting and Paragliding, Naggar Castle, Roerich Art Gallery.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After breakfast, visit Kullu (40 Kms from Manali) while on the way taking a halt at Kullu Pashmina Shawl showrooms. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> White water River Rafting will be the highlight of the tour, so do not miss it. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Resume your trip to Naggar (20 Kms from Manali). </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Reach and admire the heritage of Naggar Castle.  </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> This castle was once the abode of Kullu Raja and is now a hotspot for National & International Movie shootings. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Later we will drive to Roerich Art Gallery while enroute catching the glimpses of Tripura Sundri Temple (one of the 51 Shakti Peethas).</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> This gallery is one of the places where you can find original paintings of famous Russian Painter Nicholas Roerich,Later returned to Manali while taking a stroll at Trout Fish Farm.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> In this farm, one can order fresh trout platters while enjoying their time in the midst of birds and flowers. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Overnight stay willbe at Manali hotel.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Note: Roerich Art Gallery is closed every Monday.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 5</span> - Manali – Shimla

                                                    </h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Day Services: Stay, Breakfast, Dinner & Car</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Major Attractions: Enroute Mata Vaishno Devi Temple kullu, Hanogi Mata, Pandoh Dam and Sundernagar Lake.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Today after your breakfast, check out from the hotel and head towards “The Queen of Hills”- Shimla, a deluxe bus / cab on a sharing basis.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> On the way make a short halt at Mata Vaishno Devi Temple kullu and get the glimpses of the Pandoh Dam,Hanogi Mata and Sundernagar Lake, Upon arrival, check-in to your pre-booked hotel for a healthy meal and a comfortable stay.</div>


                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 6</span> - Kufri + Shimla local</h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Day Services: Stay, Breakfast, Dinner and Car</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Major Attractions: Himalayan wildlife zoo, Kufri Fun Park, Scandal Point, Ridge, Gaiety Theatre, Heritage Museum, Lakkar Bazaar, Rani Jhansi Park and Christ Church.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Today explore the Capital City of Himachal Pradesh. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After a scrumptious breakfast, head towards Kufri.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Kufri is a world famous destination which attracts everyone. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Here you can partake in adventure activities such as Horse-riding, Cycling, Yak-riding, Zip-lining, Tobogganing and so much more, or simply enjoy the open meadows, with majestic mountainous peaks and relax. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Later head back to the main town of Shimla and cover places like Scandal Point, Ridge,  Gaiety , Theatre, Heritage Museum, Lakkar Bazaar, Rani Jhansi Park and Christ Church.  </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Later back to the hotel for dinner and overnight stay.</div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accrodion ">
                                                <div class="accrodion-title rounded">
                                                    <h5 class="mb-0"><span>Day 7</span> - Departure Day </h5>
                                                </div>
                                                <div class="accrodion-content" style={{ display: "none" }}>
                                                    <div class="inner">
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Day Services: Breakfast & Volvo</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After your breakfast, check out from the hotel and head towards the Volvo Stand on the given time for your onward journey to Delhi.</div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> This completes your Glory of Shimla and Manali Holiday Package with Bharat Booking Holidays with beautiful and everlasting memories. </div>
                                                        <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> We hope that you make us a part of another journey in the future.</div>


                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-6 mb-2" id="inclusions">
                                            <div class="desc-box bg-grey p-4 rounded">
                                                <h5 class="mb-2">Inclusions</h5>
                                                <ul>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> AC Volvo seats (2 seats) from Delhi to Manali and Shimla to Delhi for each traveler </li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Complimentary Pick up from Manali Volvo Stop to Hotel on Arrival day and Drop at Shimla Volvo Stop from hotel on Departure Day. </li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Welcome Drink on Arrival </li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> 5 Night Accommodation on Double Occupancy for 2 pax, (1 Basic category rooms) </li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> MAP Meal Plan – 5 Breakfasts, 5 Dinners for each person.</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> Use of Individual cab Alto / Eon as per below itinerary but NGT T&C Apply.</li>
                                                    <li class="d-block"><i class="fa fa-check pink mr-1"></i> Transfers from Manali to Shimla on a sharing basis/Deluxe Bus. </li>
                                                    <li class="d-block "><i class="fa fa-check pink mr-1"></i> Taxes & Expenditures Included: Parking, Toll Tax, Luxury Tax, Green Tax, Fuel Exp. and Driver Exp.</li>


                                                </ul>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-6 mb-2" id="exclusions">
                                            <div class="desc-box bg-grey p-4 rounded">
                                                <h5 class="mb-2">Exclusions</h5>
                                                <ul>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Air Fare / Train Fare.</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Monument Entrance Fee / Camera Fees. </li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Any Adventure Activities and Personal Expenses</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Heater Charges in Hotels & Volvo Luggage Charges & Coolie Charges etc.</li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> Early Check inn, Late Check outs and Anything else not mentioned in the Inclusion Section. </li>
                                                    <li class="d-block "><i class="fa fa-close pink mr-1"></i> GST : 5% GST Extra</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-6 mb-2" id="things-to-do">
                                            <div class="desc-box bg-grey p-4 rounded">
                                                <h5>Things To Do</h5>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> As you river raft on the chilly Beas River, take control of your paddle</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Paragliding, zorbing, and other adrenaline-pumping activities may be found at Solang Valley</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Unwind at Cafe Simla Times with a hot cup of blended coffee</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Must-do Adventure in Kufri, the Highest Go-Kart Track in the World</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Visit the Himalayan National Park to see Exceptionally Rare Mammals</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Warm, clear rivers in the Vashisth Village's unspoiled valleys can let you escape the cold of Manali</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="description mb-2" id="places-to-eat">
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 mb-2 ">
                                            <div className="desc-box bg-grey p-4 rounded ">
                                                <h5 className="mb-2">Best Cafes</h5>
                                                <div>A trip to the ‘queen of the hills is as yet a #1 among the majority since it offers pleasant perspectives as well as wonderful experiences. Try out these most aesthetic cafes in Shimla that will without a doubt add a rich flavor to your get-away....</div>
                                                <a href="/blogs/ten-most-aesthetic-cafes-in-shimla-with-incredible-views-and-delicious-food" className="read-more-link" target="_blank" ><button class="white bg-theme p-1 px-2" style={{ float: "right", margin: "-10px", fontSize: "11px" }}>Read More</button></a>

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
                                                                <h5 className="mb-0">Can Manali Shimla Tour Package be customized?</h5>
                                                            </div>
                                                            <div className="accrodion-content" style={{ display: "block" }} >
                                                                <div className="inner">
                                                                    <div className="mb-0">Yes, the Manali Shimla tour package is customizable according to the visitor's choice and budget. Get the best booking assistance with us.</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="accrodion">
                                                            <div className="accrodion-title rounded">
                                                                <h5 className="mb-0">Is the Hot air Balloon Ride included in the Manali Shimla Tour Package?</h5>
                                                            </div>
                                                            <div className="accrodion-content" style={{ display: "none" }} >
                                                                <div className="inner">
                                                                    <div className="mb-0">No Outdoor activities are not included in this package. But it can be included in your request for which extra charges will be paid by the client.</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="accrodion">
                                                            <div className="accrodion-title rounded">
                                                                <h5 className="mb-0">What are the best places for shopping in Manali? </h5>
                                                            </div>
                                                            <div className="accrodion-content" style={{ display: "none" }} >
                                                                <div className="inner">
                                                                    <div className="mb-0">You can go to Old Manali Market, Himachal Emporium, Tibetan Market, Manu Market, The Mall Road, and Bhuttico for shopping.</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="accrodion">
                                                            <div className="accrodion-title rounded">
                                                                <h5 className="mb-0">Is Shimla Manali Tour Package the right option for camping in Shimla?</h5>
                                                            </div>
                                                            <div className="accrodion-content" style={{ display: "none" }} >
                                                                <div className="inner">
                                                                    <div className="mb-0"> It will be best to check the inclusions in the travel itinerary before booking the tour package.. You can also demand and add it to your trip packages accordingly.</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="accrodion">
                                                            <div className="accrodion-title rounded">
                                                                <h5 className="mb-0">Will vegetarian food be available in Manali?</h5>
                                                            </div>
                                                            <div className="accrodion-content" style={{ display: "none" }} >
                                                                <div className="inner">
                                                                    <div className="mb-0">Absolutely, Manali serves a variety of cuisine, including vegetarian. Whenever you visit, try rice, curry, curd, and sweetened rice.</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <LocationMap mapLink="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3472104.418748328!2d75.05085023035727!3d31.805190146663996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390453c367f901f7%3A0x7cfe04c5564b7725!2sHimachal%20Pradesh!5e0!3m2!1sen!2sin!4v1661253400401!5m2!1sen!2sin"></LocationMap>
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
