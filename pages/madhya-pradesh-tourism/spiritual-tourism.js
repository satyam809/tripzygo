import React from 'react'
import Link from 'next/dist/client/link'
import Head from 'next/dist/shared/lib/head'


export default function madhya_pradesh() {
    return (
        <div>
            <Head>
                <title>TripzyGo - Spiritual Tourism</title>
                <meta name="description" content="Best travel agency in Gurgaon that offers affordable holiday packages. Choose from our best vacation packages and let us help you plan the perfect trip. " />
                <link rel="icon" href="/icon.png" />

            </Head>
            <section className="breadcrumb-main pb-20 pt-14" style={{ backgroundImage: "url(/images/banner_images/mp_banner.jpg)" }}>
                <div class="section-shape section-shape1 top-inherit bottom-0" style={{ backgroundImage: "url(/images/shape8.png)" }}></div>
                <div className="breadcrumb-outer">
                    <div className="container">
                        <div className="breadcrumb-content text-center">
                            <h1 className="mb-3">Spiritual Tourism</h1>
                            <nav aria-label="breadcrumb" className="d-block">
                                <ul className="breadcrumb">

                                    <div className='text-white'>Embark on a journey of self-discovery and inner peace</div><br />

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
                        <img class="" src="/images/mp/3.png" />
                    </div>

                    <div class="col-lg-6">
                        <div class="p-5">
                            <h2 className="mb-1">Spiritual <span className="theme">Tourism</span></h2>
                            <p>Madhya Pradesh is a state in central India that has a rich history of spirituality, and thus, it is an ideal destination for spiritual tourism. The state is home to several ancient temples, pilgrimage sites, and ashrams, attracting devotees from all over the world who seek solace and enlightenment.</p>
                            {/* <p>The state is a treasure trove of heritage tourism destinations, offering visitors a chance to step back in time and explore India's rich cultural heritage. Whether you're interested in ancient temples of medieval fortresses, Madhya Pradesh has something for everyone.</p> */}
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
                        <h2 className="mb-1">Popular Spiritual Tourist Destinations in <span className="theme">Madhya Pradesh</span></h2>
                        {/* <div>Let yourself be amazed by the wonders of this land!</div> */}
                    </div>
                    <div class="container my-4">
                        <div class="row">
                         
                            <div class="col-lg-6">
                                <div class="p-4">
                                    <h2 className="mb-1">Mahakaleshwar Jyotirlinga <span className="theme">Temple</span></h2>
                                    <p>One of the most famous pilgrimage sites in Madhya Pradesh is the Mahakaleshwar Jyotirlinga temple in Ujjain. It is one of the 12 Jyotirlingas in India and is considered one of the most sacred places for devotees of Lord Shiva. The temple's unique feature is that it houses one of the world's rarest Jyotirlingas, which is said to be swayambhu or self-manifested.</p>

                                </div>
                            </div>
                            <div class="col-lg-6">
                                <img class="" src="/images/mp/Mahakaleshwar Jyotirlinga temple.png" />
                            </div>

                        </div>
                    </div><br/>
                    <div class="container my-4">
                        <div class="row">
                            <div class="col-lg-6">
                                <img class="" src="/images/mp/Omkareshwar Jyotirlinga temple.png" />
                            </div>

                            <div class="col-lg-6">
                                <div class="p-4">
                                    <h2 className="mb-1">Omkareshwar Jyotirlinga <span className="theme">Temple</span></h2>
                                    <p>Another popular pilgrimage site in Madhya Pradesh is the Omkareshwar Jyotirlinga temple in Omkareshwar. The temple is located on an island in the Narmada river and is considered to be one of the holiest places in India. It is said that Lord Shiva himself resided on the island in the form of a lingam.</p>

                                </div>
                            </div>

                        </div>
                    </div><br/>
                    <div class="container my-4">
                        <div class="row">
                          

                            <div class="col-lg-6">
                                <div class="p-5">
                                    <h2 className="mb-1">Kandariya <span className="theme">Temple</span></h2>
                                    <p>The state is also home to the famous Kandariya Mahadeva temple, dedicated to Lord Shiva and built-in Nagara-style architecture.<br/><br/>

Apart from temples and ashrams, Madhya Pradesh is also home to several natural sites that are considered to be spiritually significant, such as the Pachmarhi hill station, which is said to be the abode of Lord Shiva, and the Amarkantak hill, which is considered to be the source of the holy rivers Narmada and Sone.</p>

                                </div>
                            </div>

                            <div class="col-lg-6">
                                <img class="" src="/images/mp/Kandariya Temple.png" />
                            </div>

                        </div>
                    </div><br/>
                 
                
                </div>
            </section>




        </div>
    )
}



