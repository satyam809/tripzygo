import React from 'react'
import Link from 'next/dist/client/link'
import Head from 'next/dist/shared/lib/head'


export default function madhya_pradesh() {
    return (
        <div>
            <Head>
                <title>TripzyGo - Heritage Tourism</title>
                <meta name="description" content="Best travel agency in Gurgaon that offers affordable holiday packages. Choose from our best vacation packages and let us help you plan the perfect trip. " />
                <link rel="icon" href="/icon.png" />

            </Head>
            <section className="breadcrumb-main pb-20 pt-14" style={{ backgroundImage: "url(/images/banner_images/mp_banner.jpg)" }}>
                <div class="section-shape section-shape1 top-inherit bottom-0" style={{ backgroundImage: "url(/images/shape8.png)" }}></div>
                <div className="breadcrumb-outer">
                    <div className="container">
                        <div className="breadcrumb-content text-center">
                            <h1 className="mb-3">Heritage Tourism</h1>
                            <nav aria-label="breadcrumb" className="d-block">
                                <ul className="breadcrumb">

                                    <div className='text-white'>Step back in time and discover rich cultural heritage</div><br />

                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="dot-overlay"></div>
            </section>

            {/* <section className="our-team pb-0 pt-6">
                <div className="container">

                    <div className="section-title mb-6 w-75 mx-auto text-center">
                        <h2 className="mb-1">Madhya Pradesh <span className="theme">Tourism</span></h2>
                        <p>Madhya Pradesh, a central Indian state known as the "Heart of India,",  is known for its rich cultural heritage, historical monuments, natural beauty, wildlife, and vibrant tribal culture. Madhya Pradesh tourism offers a plethora of experiences to its visitors, from exploring ancient forts and temples to wildlife safaris and adventure activities.</p>
                    </div>

                </div>
            </section> */}
            <div class="container my-4">
                <div class="row">
                    <div class="col-lg-6">
                        <img class="" src="/images/mp/1.png" />
                    </div>

                    <div class="col-lg-6">
                        <div class="p-5">
                            <h2 className="mb-1">Heritage <span className="theme">Tourism</span></h2>
                            <p>Madhya Pradesh, also known as the "Heart of India," is a state steeped in history and cultural heritage. From ancient temples to grand palaces, Madhya Pradesh boasts a wealth of heritage sites that tell the story of its rich past.</p>
                            <p>The state is a treasure trove of heritage tourism destinations, offering visitors a chance to step back in time and explore India's rich cultural heritage. Whether you're interested in ancient temples of medieval fortresses, Madhya Pradesh has something for everyone.</p>
                            <div className="register-login d-flex align-items-center">


                                <Link href="/contact" >
                                    <a className="nir-btn white" >Enquire now!</a>
                                </Link>


                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <section className="trending recent-articles pb-4 pt-4 "  >
                <div className="container delightfulContainer">
                    <div className="section-title mb-6 w-75 mx-auto text-center">
                        <h2 className="mb-1">Popular Heritage Tourist Destinations in <span className="theme">Madhya Pradesh</span></h2>
                        {/* <div>Let yourself be amazed by the wonders of this land!</div> */}
                    </div>
                    <div class="container my-4">
                        <div class="row">
                         
                            <div class="col-lg-6">
                                <div class="p-5">
                                    <h2 className="mb-1">Khajuraho <span className="theme">Temples</span></h2>
                                    <p>One of the most popular heritage sites in Madhya Pradesh is the Khajuraho temples, a group of 10th-century temples known for their intricate carvings and sculptures. These temples are a UNESCO World Heritage Site and attract visitors from around the world.</p>

                                </div>
                            </div>
                            <div class="col-lg-6">
                                <img class="" src="/images/mp/Khajuraho te.png" />
                            </div>

                        </div>
                    </div><br/>
                    <div class="container my-4">
                        <div class="row">
                            <div class="col-lg-6">
                                <img class="" src="/images/mp/Sanchi Stupa.png" />
                            </div>

                            <div class="col-lg-6">
                                <div class="p-5">
                                    <h2 className="mb-1">Sanchi <span className="theme">Stupa</span></h2>
                                    <p> The stupa dates back to the 3rd century BCE and is one of the oldest stone structures in India. It features intricate carvings and sculptures that depict the life and teachings of Buddha.</p>

                                </div>
                            </div>

                        </div>
                    </div><br/>
                    <div class="container my-4">
                        <div class="row">
                          

                            <div class="col-lg-6">
                                <div class="p-5">
                                    <h2 className="mb-1">Gwalior <span className="theme">Fort</span></h2>
                                    <p>This imposing hill fort dates back to the 8th century and was once a seat of power for several Indian dynasties. The fort is home to several palaces and temples, each with its own unique history and architectural style. Visitors can explore the fort's many chambers and courtyards, getting a glimpse into the lives of India's royal families.</p>

                                </div>
                            </div>

                            <div class="col-lg-6">
                                <img class="" src="/images/mp/Gwalior Fort.png" />
                            </div>

                        </div>
                    </div><br/>
                    <div class="container my-4">
                        <div class="row">
                            <div class="col-lg-6">
                                <img class="" src="/images/mp/Mandu.png" />
                            </div>

                            <div class="col-lg-6">
                                <div class="p-5">
                                    <h2 className="mb-1">Mandu <span className="theme"></span></h2>
                                    <p>Mandu, also known as the "City of Joy," is another popular heritage site in Madhya Pradesh. This abandoned city dates back to the 6th century and is home to several historic monuments and ruins. Visitors can explore the city's many palaces, mosques, and gardens, marveling at the intricate architecture and rich history of this once-thriving city.</p>

                                </div>
                            </div>

                        </div>
                    </div><br/>
                    <div class="container my-4">
                        <div class="row">
                           
                            <div class="col-lg-6">
                                <div class="p-5">
                                    <h2 className="mb-1">Orchha <span className="theme"></span></h2>
                                    <p>A small town known for its grand palaces and temples, and Bhopal's Old City, a labyrinth of narrow lanes and alleys that showcase the unique blend of Hindu and Islamic architecture.</p>

                                </div>
                            </div>
                            <div class="col-lg-6">
                                <img class="" src="/images/mp/Orchha.png" />
                            </div>

                        </div>
                    </div>
                </div>
            </section>




        </div>
    )
}



