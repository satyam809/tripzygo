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
            const url = `https://backend.tripzygo.in/packages?limit=12&destination_search=Bangkok`;
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

                <title>TripzyGo - Book Thailand Trip - Bangkok And Pattaya Tour From India</title>
                <meta name="description" content="Plan a trip to Bangkok and Pattaya to experience the best of Thailand with our Bangkok and Pattaya tour from India. Book now and enjoy your travel to Bangkok!" />
                <meta name="keywords" content="trip to Bangkok and Pattaya, Bangkok and Pattaya tour from India, travel to bangkok" />
                <link rel="icon" href="/icon.png" />
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
                                        <h2 className="mb-1">A Fun Bangkok and Pattaya Tour From India </h2>
                                    </div>
                                </div>
                                <div className="description-images mb-4 overflow-hidden">
                                    <div className="thumbnail-images position-relative">
                                        <div className="rounded overflow-hidden">
                                            <Carousel
                                                imageLink1="/images/international_packages/a_fun_bangkok_and_pattaya_tour_from_india/1.webp"
                                                imageLink2="/images/international_packages/a_fun_bangkok_and_pattaya_tour_from_india/6.webp"
                                                imageLink3="/images/international_packages/a_fun_bangkok_and_pattaya_tour_from_india/2.webp"
                                                imageLink4="/images/international_packages/a_fun_bangkok_and_pattaya_tour_from_india/3.webp"
                                                imageLink5="/images/international_packages/a_fun_bangkok_and_pattaya_tour_from_india/4.webp"
                                                imageLink6="/images/international_packages/a_fun_bangkok_and_pattaya_tour_from_india/5.webp">
                                            </Carousel>
                                        </div>
                                    </div>
                                </div>
                                <div className="description mb-2">
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 mb-2 ">
                                            <div className="desc-box bg-grey p-4 rounded ">
                                                <div className="App">
                                                    <h5 className="mb-2">Why to Visit Bangkok?</h5>
                                                    <p>Kerala is a state in India and is one of the most beautiful states in the country. It is also known as God's Own Country. Kerala has many tourist attractions like Alleppey backwaters in Kerala, Fort Kochi, Munnar Hill station, Thekkady elephant safari park, and much more which makes this state a perfect destination for tourists from all over the world. Kerala is one of the most popular states in India to visit. The state is blessed with a rich culture, natural beauty, and amazing people. There are many reasons to visit Kerala and we will help you explore the best Kerala tour....</p>
                                                    {readMore && extraContent}
                                                    <a className="read-more-link" onClick={() => { setReadMore(!readMore) }}><h6 style={{ float: "right", margin: "-10px", fontSize: "13px" }}>{linkName}</h6></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="description mb-2">
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 mb-2 ">
                                            <div className="desc-box bg-grey p-4 rounded ">
                                                <h5 className="mb-2">Package Overview</h5>
                                                <div>When you talk about a fun trip, you really cannot let go of a travel to Bangkok and Pattaya.</div>
                                                <div className="mb-0">These are hot destinations for a fun-loving and exciting trip with everything very frank, open, and cool in the cities.</div>
                                                <div>Be it enjoying around the beaches or doing other fun things and adventurous activities, Bangkok and Pattaya are a hotspot for them.</div>
                                                <div>Even as a couple, you can enjoy in the openness of the place.</div>
                                                <div>With everything that Bangkok and Pattaya have to offer, you cannot miss out on a trip to Bangkok and Pattaya, especially when we have a special tour package to provide.</div>
                                                <div>Don’t miss the chance and book our amazing Bangkok and Pattaya tour from India now by getting in touch with a TripzyGo travel specialist.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tour-includes mb-2">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td><i className="fa fa-clock-o pink mr-1" aria-hidden="true"></i> 4Nights / 5 Days</td>
                                                <td><i className="fa fa-group pink mr-1" aria-hidden="true"></i> People : 1</td>
                                            </tr>
                                            <tr>
                                                <td><i className="fa fa-inr pink mr-1" aria-hidden="true"></i> Total Tour Cost : INR 12,500/-* </td>
                                                <td><i className="fa fa-bed pink mr-1" aria-hidden="true"></i> Hotel : 3 star</td>
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
                                                    <h5 className="mb-0"><span>Day 1</span> - Arrival Bangkok – Pattaya</h5>
                                                </div>
                                                <div className="accrodion-content" style={{ display: "block" }} >
                                                    <div className="inner">
                                                        <div className="mb-0"><i className="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Upon your arrival in Bangkok you will be transferred to Pattaya, which is a short 2 hours drive from Bangkok.</div>
                                                        <div className="mb-0"><i className="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Check in to the hotel .</div>
                                                        <div className="mb-0"><i className="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Time to relax!!</div>
                                                        <div className="mb-0"><i className="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> In the evening, we recommend that you take an optional tour of Alcazar Show(at additional cost).</div>
                                                        <div className="mb-0"><i className="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> The Alcazar Show a world-famous cabaret, which can give the Lido and Moulin Rouge of Paris, a run for their money, featuring a grand theatre with 1200 seats and thousands of watts of pulsating sound.</div>
                                                        <div className="mb-0"><i className="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Standard Check In time is 1400 Hours (Early Check-in is subject to availability).</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accrodion ">
                                                <div className="accrodion-title rounded">
                                                    <h5 className="mb-0"><span>Day 2</span>  - Pattaya - Coral Island with Lunch</h5>
                                                </div>
                                                <div className="accrodion-content" style={{ display: "none" }}>
                                                    <div className="inner">
                                                        <div className="mb-0"><i className="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After breakfast, you will be transferred to the sparkling blue waters of the Gulf of Thailand by a speedboat, and arrive at the idyllic Coral Island (Koh Lan), where you will spend the day luxuriating under the welcoming tropical sun.</div>
                                                        <div className="mb-0"><i className="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> You can lounge, swim, snorkel or simply enjoy the sun at the island’s immaculate golden beaches. </div>
                                                        <div className="mb-0"><i className="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> You all have the option of viewing the beautiful coral formations around the island either through a glass-bottom boat or by diving in. </div>
                                                        <div className="mb-0"><i className="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Upon your return from the island, you will enjoy a scrumptious Indian lunch at Pattaya.</div>
                                                        <div className="mb-0"><i className="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Coral Island tour on join/shared speed boat will stop for Parasailing for those who are interested. </div>
                                                        <div className="mb-0"><i className="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Those who are not interested in Parasailing will wait for the rest to finish the activity.</div>
                                                        <div className="mb-0"><i className="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Travel tip : Don’t forget to carry your swimsuit, sunscreen and towel.</div>
                                                        <div className="mb-0"><i className="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Evening is free at leisure.</div>
                                                        <div className="mb-0"><i className="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Overnight in Pattaya.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accrodion">
                                                <div className="accrodion-title rounded">
                                                    <h5 className="mb-0"><span>Day 3</span> - Pattaya - Day Free at Leisure</h5>
                                                </div>
                                                <div className="accrodion-content" style={{ display: "none" }}>
                                                    <div className="inner">
                                                        <div className="mb-0"><i className="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Today after breakfast, the day is at leisure for you.</div>
                                                        <div className="mb-0"><i className="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> You can either be on your own or you can book optional tour like Nong nooch village with us(Additional Cost ). </div>
                                                        <div className="mb-0"><i className="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> See the Nong Nooch Tropical Garden on a half-day tour from Pattaya. </div>
                                                        <div className="mb-0"><i className="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> The beautifully landscaped private park offers a glimpse of multiple themed gardens on shaded elevated walkways.</div>
                                                        <div className="mb-0"><i className="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> See the topiary garden, the orchid nursery, a recreation of Stonehenge and more! Watch daily performances including classNameical Thai dance and kickboxing as well as a popular elephant show.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accrodion ">
                                                <div className="accrodion-title rounded">
                                                    <h5 className="mb-0"><span>Day 4</span> - Bangkok Orientation & Temple Tour</h5>
                                                </div>
                                                <div className="accrodion-content" style={{ display: "none" }}>
                                                    <div className="inner">
                                                        <div className="mb-0"><i className="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Post a filling breakfast at the hotel, you check-out and drive back to Bangkok.</div>
                                                        <div className="mb-0"><i className="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> On the way, you shall proceed for a half-day city tour of Bangkok on a comfortable coach. </div>
                                                        <div className="mb-0"><i className="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> We start with Pattaya gems Gallery followed by fascinating temples around the capital (Bangkok) like the Wat Traimit housing a five-and-half ton golden Buddha statue and the Marble Temple. </div>
                                                        <div className="mb-0"><i className="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> The tour will give you an in-depth understanding of the traditions and culture of Bangkok.</div>
                                                        <div className="mb-0"><i className="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> The evening is free for shopping and chilling around the Bangkok streets.</div>
                                                        <div className="mb-0"><i className="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Overnight stay remains at your hotel in Bangkok.</div>
                                                        <div className="mb-0"><i className="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Optional with Additional Cost  :Chao Pharya Dinner Cruise- Welcome aboard a 2-hour extravagant journey down the Chao Phraya which divides ancient Thailand from the present day metropolis of Bangkok.</div>
                                                        <div className="mb-0"><i className="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> As you cruise along, delight in a delicious meal of Thai and international cuisine as an upbeat band plays in the background and you pass by famous landmarks.</div>
                                                        <div className="mb-0"><i className="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Pass by an illuminated Bangkok, which is simply mesmerizing with its glimmering lights that dance on the water's surface, and see ancient temples such as Wat Arun, known also as the Temple of Dawn.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accrodion ">
                                                <div className="accrodion-title rounded">
                                                    <h5 className="mb-0"><span>Day 5</span>  - Depart Bangkok</h5>
                                                </div>
                                                <div className="accrodion-content" style={{ display: "none" }}>
                                                    <div className="inner">
                                                        <div className="mb-0"><i className="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> After a buffet breakfast the day is free at leisure. </div>
                                                        <div className="mb-0"><i className="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Night you will be picked up for departure transfer to the airport for flight way back home.</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 mb-2" id="inclusions">
                                            <div className="desc-box bg-grey p-4 rounded">
                                                <h5 className="mb-2">Inclusions</h5>
                                                <ul>
                                                    <li className="d-block "><i className="fa fa-check pink mr-1"></i> Our prices include all taxes and services</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-6 mb-2" id="exclusions">
                                            <div className="desc-box bg-grey p-4 rounded">
                                                <h5 className="mb-2">Exclusions</h5>
                                                <ul>
                                                    <li className="d-block "><i className="fa fa-close pink mr-1"></i> Tips and porter chargers</li>
                                                    <li className="d-block "><i className="fa fa-close pink mr-1"></i> 5% TCS ( Claimable) By Guest</li>
                                                    <li className="d-block "><i className="fa fa-close pink mr-1"></i> Flight cost</li>
                                                    <li className="d-block "><i className="fa fa-close pink mr-1"></i> Cost of any excursions not included package</li>
                                                    <li className="d-block "><i className="fa fa-close pink mr-1"></i> Early check in and late check out at the hotel as per availability (Extra Charges MayApply)</li>
                                                    <li className="d-block "><i className="fa fa-close pink mr-1"></i> Items of a personal nature such as phone calls, pay movies, room services, mini barslaundries or other expenditures during the tour</li>
                                                    <li className="d-block "><i className="fa fa-close pink mr-1"></i> Additional Costs due to Flight Cancellations, Road blocks, natural calamities</li>
                                                    <li className="d-block "><i className="fa fa-close pink mr-1"></i> Local taxes, if any</li>
                                                    <li className="d-block "><i className="fa fa-close pink mr-1"></i> Transfer Surcharges in case of public holiday</li>
                                                    <li className="d-block "><i className="fa fa-close pink mr-1"></i> Anything not mentioned in Inclusions Part</li>
                                                    <li className="d-block "><i className="fa fa-close pink mr-1"></i> Any expenses of personal nature viz. tips to driver & Guide</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-6 mb-2" id="things-to-do">
                                            <div class="desc-box bg-grey p-4 rounded">
                                                <h5 class="mb-2">Things To Do</h5>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Explore Underwater World Pattaya</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Visit the Khao Chi Chan ("Buddha Mountain")</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Enjoy Pattaya Cabaret Show</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Get a taste of the Kaan Show Pattaya</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Take a trip to Pattaya Dolphin World</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Visit Wat Yansangwararam</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Visit Coral Island by boat</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i>  Visit Wat Pho To See The Leaning back Buddha</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Visit the Great Palace</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Ride the Sky Train</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Go on an outing around Chatuchak Market</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i>  Go on a Boat Outing along the Chao Phraya river</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Explore the Bangkok National Museum</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Dine out in Chinatown</div>
                                                <div class="mb-0"><i class="fa fa-arrow-right" aria-hidden="true" style={{ fontSize: "13px" }}></i> Enjoy Bangkok Nightlife</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="description mb-2" id="places-to-eat">
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 mb-2 ">
                                            <div className="desc-box bg-grey p-4 rounded ">
                                                <h5 className="mb-2">Best Cafes</h5>
                                                <div>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.Lorem ipsum, or lipsum as it is sometimes known...</div>
                                                <a href="/blogs/adventure_travel" className="read-more-link" target="_blank" ><button class="white bg-theme p-1 px-2" style={{ float: "right", margin: "-10px", fontSize: "11px" }}>Read More</button></a>

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
                                                                <h5 className="mb-0">Who We Are?</h5>
                                                            </div>
                                                            <div className="accrodion-content" style={{ display: "block" }} >
                                                                <div className="inner">
                                                                    <div className="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, inventore cumque veniam, praesentium velit incidunt rem quas a, quos eos ipsum, reprehenderit voluptatem.</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="accrodion">
                                                            <div className="accrodion-title rounded">
                                                                <h5 className="mb-0">Who We Are?</h5>
                                                            </div>
                                                            <div className="accrodion-content" style={{ display: "none" }} >
                                                                <div className="inner">
                                                                    <div className="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, inventore cumque veniam, praesentium velit incidunt rem quas a, quos eos ipsum, reprehenderit voluptatem.</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="accrodion">
                                                            <div className="accrodion-title rounded">
                                                                <h5 className="mb-0">Who We Are?</h5>
                                                            </div>
                                                            <div className="accrodion-content" style={{ display: "none" }} >
                                                                <div className="inner">
                                                                    <div className="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, inventore cumque veniam, praesentium velit incidunt rem quas a, quos eos ipsum, reprehenderit voluptatem.</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="accrodion">
                                                            <div className="accrodion-title rounded">
                                                                <h5 className="mb-0">Who We Are?</h5>
                                                            </div>
                                                            <div className="accrodion-content" style={{ display: "none" }} >
                                                                <div className="inner">
                                                                    <div className="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, inventore cumque veniam, praesentium velit incidunt rem quas a, quos eos ipsum, reprehenderit voluptatem.</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <LocationMap mapLink="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d496113.92041601305!2d100.3529071711315!3d13.72510879354118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d6032280d61f3%3A0x10100b25de24820!2sBangkok%2C%20Thailand!5e0!3m2!1sen!2sin!4v1663651979407!5m2!1sen!2sin"></LocationMap>
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
            <script src="/js/jquery-3.5.1.min.js"></script>
            <script src="/js/bootstrap.min.js"></script>
            <script src="/js/particles.js"></script>
            <script src="/js/particlerun.js"></script>
            <script src="/js/plugin.js"></script>
            <script src="/js/custom-accordian.js"></script>
            <script src="/js/custom-nav.js"></script>
            <script src="/js/custom-navscroll.js"></script>
        </div>

    )
}
