import React from 'react'
import Link from 'next/dist/client/link'
import Head from 'next/dist/shared/lib/head'


export default function madhya_pradesh() {
    return (
        <div>
            <Head>
                <title>TripzyGo - Wildlife Tourism</title>
                <meta name="description" content="Best travel agency in Gurgaon that offers affordable holiday packages. Choose from our best vacation packages and let us help you plan the perfect trip. " />
                <link rel="icon" href="/icon.png" />

            </Head>
            <section className="breadcrumb-main pb-20 pt-14" style={{ backgroundImage: "url(/images/banner_images/mp_banner.jpg)" }}>
                <div class="section-shape section-shape1 top-inherit bottom-0" style={{ backgroundImage: "url(/images/shape8.png)" }}></div>
                <div className="breadcrumb-outer">
                    <div className="container">
                        <div className="breadcrumb-content text-center">
                            <h1 className="mb-3">Wildlife Tourism</h1>
                            <nav aria-label="breadcrumb" className="d-block">
                                <ul className="breadcrumb">

                                    <div className='text-white'>Experience the thrill of encountering exotic wildlife</div><br />

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
                        <img class="" src="/images/mp/satpura.png" />
                    </div>

                    <div class="col-lg-6">
                        <div class="p-1">
                            <h2 className="mb-1">Wildlife <span className="theme">Tourism</span></h2>
                            <p>Madhya Pradesh is a state in central India with a rich ecological diversity and is home to a variety of wildlife. Wildlife tourism in Madhya Pradesh is a popular activity for nature enthusiasts and adventure seekers who want to experience the region's rich biodiversity. Madhya Pradesh is home to several national parks and wildlife reserves. </p>
                            <p>Visitors can enjoy a variety of activities in these national parks, including jungle safaris, bird watching, and nature walks. Eco-lodges and resorts located near the parks offer comfortable accommodation and guided tours. Wildlife tourism in Madhya Pradesh is a great way to support conservation efforts and learn about the region's natural history.</p>
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
                        <h2 className="mb-1">Popular Wildlife Tourist Destinations in <span className="theme">Madhya Pradesh</span></h2>
                        {/* <div>Let yourself be amazed by the wonders of this land!</div> */}
                    </div>
                    <div class="container my-4">
                        <div class="row">
                         
                            <div class="col-lg-6">
                                <div class="p-5">
                                    <h2 className="mb-1">Bandhavgarh <span className="theme">National Park </span></h2>
                                    <p>Known for its high tiger population, this park is one of the best places in India to spot the big cat. Apart from tigers, Bandhavgarh is also home to a variety of other animals such as leopards, sloth bears, and Indian bison.</p>

                                </div>
                            </div>
                            <div class="col-lg-6">
                                <img class="" src="/images/mp/bhadavgarh.png" />
                            </div>

                        </div>
                    </div><br/>
                    <div class="container my-4">
                        <div class="row">
                            <div class="col-lg-6">
                                <img class="" src="/images/mp/pench.png" />
                            </div>

                            <div class="col-lg-6">
                                <div class="p-5">
                                    <h2 className="mb-1">Pench <span className="theme">National Park</span></h2>
                                    <p>Located on the border of Madhya Pradesh and Maharashtra, Pench is known for its diverse wildlife and scenic beauty. Visitors can spot tigers, leopards, and many species of birds in the park.</p>

                                </div>
                            </div>

                        </div>
                    </div><br/>
                    <div class="container my-4">
                        <div class="row">
                          

                            <div class="col-lg-6">
                                <div class="p-5">
                                    <h2 className="mb-1">Satpura <span className="theme">National Park</span></h2>
                                    <p>This park offers a unique wildlife experience as visitors can explore the jungle on foot or in a canoe. Apart from tigers, Satpura is also home to Indian gaurs, wild boars, and several species of primates.</p>

                                </div>
                            </div>

                            <div class="col-lg-6">
                                <img class="" src="/images/mp/satpura.png" />
                            </div>

                        </div>
                    </div><br/>
                    <div class="container my-4">
                        <div class="row">
                            <div class="col-lg-6">
                                <img class="" src="/images/mp/Panna National Park.png" />
                            </div>

                            <div class="col-lg-6">
                                <div class="p-5">
                                    <h2 className="mb-1">Panna <span className="theme">National Park</span></h2>
                                    <p>Known for its beautiful landscapes and waterfalls, Panna is home to tigers, leopards, and several species of deer. The park is also known for its diamond mines.</p>

                                </div>
                            </div>

                        </div>
                    </div><br/>
                    <div class="container my-4">
                        <div class="row">
                           
                            <div class="col-lg-6">
                                <div class="p-5">
                                    <h2 className="mb-1">Kanha <span className="theme">National Park </span></h2>
                                    <p>Another popular destination for tiger spotting, Kanha is also known for its lush forests and grasslands. The park is home to many species of animals such as wild dogs, jackals, and Indian foxes</p>

                                </div>
                            </div>
                            <div class="col-lg-6">
                                <img class="" src="/images/mp/Kanha National Park.png" />
                            </div>

                        </div>
                    </div>
                </div>
            </section>




        </div>
    )
}



