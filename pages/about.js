import React from 'react'
import Link from 'next/dist/client/link'
import Head from 'next/dist/shared/lib/head'
import Ourpartners from "../components/OurPartners";
import SlickAboutSlider from '../components/Slick_Sliders/SlickAboutSlider';


export default function about() {
    return (
        <div>
            <Head>
                <title>TripzyGo - About Us | TripzyGo.in</title>
                <meta name="description" content="Best travel agency in Gurgaon that offers affordable holiday packages. Choose from our best vacation packages and let us help you plan the perfect trip. " />
                <link rel="icon" href="/icon.png" />
                <meta property="og:url" content="https://www.tripzygo.in/about" />
                <meta property="og:title" content="About Us" />
                <meta property="og:description" content="Best travel agency in Gurgaon that offers affordable holiday packages. Choose from our best vacation packages and let us help you plan the perfect trip. " />
                <meta property="og:image" content="https://www.tripzygo.in/images/banner_images/about_us.webp" />

            </Head>
            <section className="breadcrumb-main pb-20 pt-14" style={{ backgroundImage: "url(images/banner_images/about_us.webp)" }}>
                <div className="breadcrumb-outer">
                    <div className="container">
                        <div className="breadcrumb-content text-center">
                            <h1 className="mb-3">About Us</h1>
                            <nav aria-label="breadcrumb" className="d-block">
                                <ul className="breadcrumb">

                                    <div className='text-white'>Customised Travel Partners for Most Experiential Touring Experiences</div><br />

                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="dot-overlay"></div>
            </section>

            <section className="about-us pt-6" style={{ backgroundImage: "url(images/background_pattern.webp)", backgroundPosition: "bottom right" }}>
                <div className="container">
                    <div className="about-image-box">
                        <div className="row d-flex align-items-center justify-content-between">
                            <div className="col-lg-6 ps-4">
                                <div className="about-content text-center text-lg-start">
                                    <h4 className="theme d-inline-block mb-0">Get To Know Us</h4>
                                    <h2 className="border-b mb-2 pb-1">Making Trips A More Fulfilling and Memorable Experience</h2>
                                    <p className="border-b mb-2 pb-2">Trips and Outings are a time when you rekindle and rejoice by giving yourself a break from all the chaos of your busy and hectic life. So, it’s essential that the experiences on your trips are memorable and fulfilling. We help you create such experiences by designing the most amazing tours and travel packages for an experiential trip.</p>
                                    <p className="border-b mb-2 pb-2">TripzyGo is a family owned business that believes in offering the most fun and engaging ways for travel. We’re not just any other tour and travel agency. Instead, we are a philosophy with a strong passion and dedication towards delivering the most fun, engaging, fulfilling, and safest experiences to every customer associated with us.</p>
                                    <p className="border-b mb-2 pb-2">With TripzyGo, you will have the most experiential trips with customized packages perfectly suiting your travel needs and expectations.</p>
                                    <div className="register-login d-flex align-items-center">


                                        <Link href="/contact" >
                                            <a className="nir-btn white" >I Want to Discuss A Trip Now! </a>
                                        </Link>


                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-6 mb-4 pe-4">
                                <div className="about-image" style={{ animation: "none", background: "transparent" }}>
                                    <img src="images/travel.png" alt="travel packages" />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="white-overlay"></div>
            </section>


            {/* <section className="our-team pb-0 pt-6">
                <div className="container">

                    <div className="section-title mb-6 w-75 mx-auto text-center">
                        <h2 className="mb-1">Life at <span className="theme">TripzyGo</span></h2>
                        <p>Life at TripzyGo is magical where every employee is a wizard delivering magical journey to every person who comes its doors</p>
                    </div>
                    <div className="team-main">
                        <div className="row shop-slider">
                            <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
                                <div className="team-list rounded">
                                    <div className="team-image">
                                        <img src="images/team/1.webp" alt="team" />
                                    </div>

                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
                                <div className="team-list rounded">
                                    <div className="team-image">
                                        <img src="images/team/2.webp" alt="team" />
                                    </div>

                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
                                <div className="team-list rounded">
                                    <div className="team-image">
                                        <img src="images/team/3.webp" alt="team" />
                                    </div>

                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
                                <div className="team-list rounded">
                                    <div className="team-image">
                                        <img src="images/team/4.webp" alt="team" />
                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
                                <div className="team-list rounded">
                                    <div className="team-image">
                                        <img src="images/team/5.png" alt="team" />
                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
                                <div className="team-list rounded">
                                    <div className="team-image">
                                        <img src="images/team/6.png" alt="team" />
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section> */}
            <section className="trending pb-0 pt-6" style={{ backgroundImage: "url(images/shape-1.png)", backgroundPosition: "center" }}>
                <div className="container delightfulContainer" >
                    <div className="section-title mb-6 w-75 mx-auto text-center">
                        {/* <h4 className="mb-1 theme1">Happy Travellers </h4> */}
                        <h2 className="mb-1">Life at <span className="theme">TripzyGo</span></h2>
                        <div>Life at TripzyGo is magical where every employee is a wizard delivering magical journey to every person who comes its doors
                        </div>
                    </div>
                    <div className='container'>
                        <div className="col-lg-12 ">
                            <SlickAboutSlider />
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-us pb-0">
                <div className="container">

                    <div className="section-title mb-6 w-50 mx-auto text-center">
                        <h2 className="mb-1">TripzyGo <span className="theme"> for the Best Experiential Trips</span></h2>
                        <p>We are passionate about trips and dedicated to making them the best experiences of your life</p>
                    </div>


                    <div className="why-us">
                        <div className="why-us-box">
                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-sm-6 mb-4">
                                    <div className="why-us-item p-5 pt-6 pb-6 border rounded bg-white">
                                        <div className="why-us-content">
                                            <div className="why-us-icon">
                                                <img src="images/web icons 32/customized-trip-packages.png" alt="customized trip packages" />

                                            </div><br />
                                            <h4><a>Customized Trip Packages</a></h4>
                                            <p className="mb-2">We talk to you about your travel expectations and create a fully customized trip package to suit your needs.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 mb-4">
                                    <div className="why-us-item p-5 pt-6 pb-6 border rounded bg-white">
                                        <div className="why-us-content">
                                            <div className="why-us-icon">
                                                <img src="images/web icons 32/dedicated-travel-executive.png" alt="best tour packages" />

                                            </div><br />
                                            <h4><a>Dedicated Travel Executive</a></h4>
                                            <p className="mb-2">We assign a dedicated travel executive to help you with all the planning and preparation for your trip.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 mb-4">
                                    <div className="why-us-item p-5 pt-6 pb-6 border rounded bg-white">
                                        <div className="why-us-content">
                                            <div className="why-us-icon">
                                                <img src="images/web icons 32/experiental-trips.png" alt="travel agency in gurgaon" />

                                            </div><br />
                                            <h4><a>Experiential Travels</a></h4>
                                            <p className="mb-2">We plan your travels with fun and exciting activities to create a better and more fulfilling experience on your travels.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 mb-4">
                                    <div className="why-us-item p-5 pt-6 pb-6 border rounded bg-white">
                                        <div className="why-us-content">
                                            <div className="why-us-icon">
                                                <img src="images/web icons 32/domestic-and-international-tours.png" alt="best domestic and international tours" />

                                            </div><br />
                                            <h4><a>Domestic and International Tours</a></h4>
                                            <p className="mb-2">We help with both domestic and international tours to the most beautiful and charming travel destinations that you’re going to love.</p>
                                            {/* <p className="mb-0 theme">100+ Reviews</p> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 mb-4">
                                    <div className="why-us-item p-5 pt-6 pb-6 border rounded bg-white">
                                        <div className="why-us-content">
                                            <div className="why-us-icon">
                                                <img src="images/web icons 32/safe-trips.png" alt="safety trips" />

                                            </div><br />
                                            <h4><a>Safe Trips</a></h4>
                                            <p className="mb-2">Your safety and security are at the top of our list of priorities and concerns. We make sure that you’re always safe during your trips.</p>
                                            {/* <p className="mb-0 theme">100+ Reviews</p> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 mb-4">
                                    <div className="why-us-item p-5 pt-6 pb-6 border rounded bg-white">
                                        <div className="why-us-content">
                                            {/* <div className="why-us-icon mb-1">
                                        <i className="icon-compass theme"></i>
                                    </div> */}
                                            <div className="why-us-icon">
                                                <img src="images/web icons 32/affordable-packages.png" alt="budget tour packages" />

                                            </div><br />
                                            <h4><a>Affordable Packages</a></h4>
                                            <p className="mb-2">Trips can take a lot of money out of your pockets, however, that’s not going to happen when you take our packages. We make sure that the packages fit right within your budget.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <div className="pt-7">
                <Ourpartners />
            </div>
        </div>
    )
}



