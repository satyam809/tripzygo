import React from 'react'
import Link from 'next/dist/client/link'
import Head from 'next/dist/shared/lib/head'


export default function madhya_pradesh() {
    return (
        <div>
            <Head>
                <title>TripzyGo - Adventure Tourism</title>
                <meta name="description" content="Best travel agency in Gurgaon that offers affordable holiday packages. Choose from our best vacation packages and let us help you plan the perfect trip. " />
                <link rel="icon" href="/icon.png" />

            </Head>
            <section className="breadcrumb-main pb-20 pt-14" style={{ backgroundImage: "url(/images/banner_images/mp_banner.jpg)" }}>
                <div class="section-shape section-shape1 top-inherit bottom-0" style={{ backgroundImage: "url(/images/shape8.png)" }}></div>
                <div className="breadcrumb-outer">
                    <div className="container">
                        <div className="breadcrumb-content text-center">
                            <h1 className="mb-3">Adventure Tourism</h1>
                            <nav aria-label="breadcrumb" className="d-block">
                                <ul className="breadcrumb">

                                    <div className='text-white'>Feed your adventurous spirit and push your limits</div><br />

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
                        <img class="" src="/images/mp/9.jpg" />
                    </div>

                    <div class="col-lg-6">
                        <div class="p-5">
                            <h2 className="mb-1">Adventure <span className="theme">Tourism</span></h2>
                            <p>Madhya Pradesh is not just a land of heritage sites and scenic beauty, but it also offers a range of adventure activities for thrill-seekers. Here are some of the top adventure tourism activities in Madhya Pradesh.</p>
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
                        <h2 className="mb-1">Adventure activities you can do in <span className="theme">Madhya Pradesh</span></h2>
                        {/* <div>Let yourself be amazed by the wonders of this land!</div> */}
                    </div>
                    <div class="container my-4">
                        <div class="row">
                         
                            <div class="col-lg-6">
                                <div class="p-5">
                                    <h2 className="mb-1">River <span className="theme">Rafting</span></h2>
                                    <p>Madhya Pradesh has several rivers and streams that offer great opportunities for river rafting. The Narmada River, Betwa River, and Son River are popular rafting destinations in the state.</p>

                                </div>
                            </div>
                            <div class="col-lg-6">
                                <img class="" src="/images/mp/10.jpg" />
                            </div>

                        </div>
                    </div><br/>
                    <div class="container my-4">
                        <div class="row">
                            <div class="col-lg-6">
                                <img class="" src="/images/mp/11.jpg" />
                            </div>

                            <div class="col-lg-6">
                                <div class="p-5">
                                    <h2 className="mb-1">Trekking and <span className="theme">Camping</span></h2>
                                    <p>Madhya Pradesh has several scenic trekking routes that pass through hills, forests, and waterfalls. Pachmarhi, Satpura Range, and Mandla are some of the popular trekking destinations in the state. The state also offers camping experiences in the middle of the forest, allowing visitors to experience the raw beauty of nature.</p>

                                </div>
                            </div>

                        </div>
                    </div><br/>
                    <div class="container my-4">
                        <div class="row">
                          

                            <div class="col-lg-6">
                                <div class="p-5">
                                    <h2 className="mb-1">Rock <span className="theme">Climbing</span></h2>
                                    <p> Satpura Range, Pachmarhi, and Jabalpur are some of the popular destinations for rock climbing in Madhya Pradesh. These places offer a challenging yet thrilling experience for adventure enthusiasts.</p>

                                </div>
                            </div>

                            <div class="col-lg-6">
                                <img class="" src="/images/mp/12.jpg" />
                            </div>

                        </div>
                    </div><br/>
                    <div class="container my-4">
                        <div class="row">
                            <div class="col-lg-6">
                                <img class="" src="/images/mp/13.jpg" />
                            </div>

                            <div class="col-lg-6">
                                <div class="p-5">
                                    <h2 className="mb-1">Wildlife <span className="theme">Safaris</span></h2>
                                    <p>Madhya Pradesh has several national parks and wildlife sanctuaries, such as Kanha National Park, Bandhavgarh National Park, and Pench Tiger Reserve, which offer wildlife safaris to visitors. The safaris provide an opportunity to spot tigers, leopards, and other wildlife in their natural habitat.</p>

                                </div>
                            </div>

                        </div>
                    </div><br/>
                    <div class="container my-4">
                        <div class="row">
                           
                            <div class="col-lg-6">
                                <div class="p-5">
                                    <h2 className="mb-1">Paragliding<span className="theme"></span></h2>
                                    <p> Pachmarhi, Mandla, and Shivpuri are some of the popular destinations for paragliding in Madhya Pradesh. The state offers tandem paragliding experiences for those who want to enjoy the thrill of flying.</p>

                                </div>
                            </div>
                            <div class="col-lg-6">
                                <img class="" src="/images/mp/14.jpg" />
                            </div>

                        </div>
                    </div>
                </div>
            </section>




        </div>
    )
}



