import React from 'react'
import Link from 'next/dist/client/link'
import Head from 'next/dist/shared/lib/head'


export default function madhya_pradesh() {
    return (
        <div>
            <Head>
                <title>TripzyGo - Madhya Pradesh Tourism</title>
                <meta name="description" content="Best travel agency in Gurgaon that offers affordable holiday packages. Choose from our best vacation packages and let us help you plan the perfect trip. " />
                <link rel="icon" href="/icon.png" />
                <meta property="og:url" content="https://www.tripzygo.in/madhya-pradesh-tourism" />
                <meta property="og:title" content="Madhya Pradesh Tourism" />
                <meta property="og:description" content="Best travel agency in Gurgaon that offers affordable holiday packages. Choose from our best vacation packages and let us help you plan the perfect trip. " />
                <meta property="og:image" content="https://www.tripzygo.in/images/banner_images/about_us.webp" />

            </Head>
            <section className="breadcrumb-main pb-20 pt-14" style={{ backgroundImage: "url(images/banner_images/mp_banner.jpg)" }}>
                <div class="section-shape section-shape1 top-inherit bottom-0" style={{ backgroundImage: "url(images/shape8.png)" }}></div>
                <div className="breadcrumb-outer">
                    <div className="container">
                        <div className="breadcrumb-content text-center">
                            <h1 className="mb-3">Madhya Pradesh Tourism</h1>
                            <nav aria-label="breadcrumb" className="d-block">
                                <ul className="breadcrumb">

                                    <div className='text-white'>The soul of India, Waiting To Be Discovered - Start Your Journey!</div><br />

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
            <div class="container my-0">
                <div class="row">

                    <div class="col-lg-6">
                        <div class="p-5 mt-0">
                            <h2 className="mb-1 tabview">Madhya Pradesh <span className="theme">Tourism</span></h2>
                            <p className='tabview'>Madhya Pradesh, a central Indian state known as the "Heart of India,",  is known for its rich cultural heritage, historical monuments, natural beauty, wildlife, and vibrant tribal culture. Madhya Pradesh tourism offers a plethora of experiences to its visitors, from exploring ancient forts and temples to wildlife safaris and adventure activities.</p>
                            <div className="register-login d-flex align-items-center">


                                <Link href="/contact" >
                                    <a className="nir-btn white" >Enquire now!</a>
                                </Link>


                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <img class="" src="/images/mp/mp.png" />
                    </div>
                </div>
            </div>

            <section className="trending recent-articles pb-4 pt-4 "  >
                <div className="container delightfulContainer">
                    <div className="section-title mb-6 w-75 mx-auto text-center">
                        <h2 className="mb-1">Explore the <span className="theme">Heart of India</span></h2>
                        <div>Let yourself be amazed by the wonders of this land!</div>
                    </div>
                    <div class="category-main-inner  pt-0">
                        <div class="row side-slider">
                            <div class="col-lg-2 col-md-6 my-4">
                                <div class="category-item box-shadow p-3 py-2 text-center bg-white rounded overflow-hidden">
                                    <div class="trending-topic-content">
                                        <img src="images/mp/culture.png" class="mb-1 d-inline-block" alt="" />
                                        <h4 class="mb-0"><a href='/madhya-pradesh-tourism/cultural-tourism' target="_blank">Culture</a></h4>
                                        <div className="register-login d-flex align-items-center text-center">
                                            
                                                <a href='/madhya-pradesh-tourism/cultural-tourism' target="_blank" className="nir-btn white" style={{marginLeft:"31px"}}>View</a>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-2 col-md-6 my-4">
                                <div class="category-item box-shadow p-3 py-2 text-center bg-white rounded overflow-hidden">
                                    <div class="trending-topic-content text-center">
                                        <img src="images/mp/heritage.png" class="mb-1 d-inline-block" alt="" />
                                        <h4 class="mb-0"><a href='/madhya-pradesh-tourism/heritage-tourism' target="_blank">Heritage</a></h4>
                                        <div className="register-login d-flex align-items-center text-center">
                                            
                                                <a href='/madhya-pradesh-tourism/heritage-tourism' target="_blank" className="nir-btn white" style={{marginLeft:"31px"}}>View</a>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-2 col-md-6 my-4">
                                <div class="category-item box-shadow p-3 py-2 text-center bg-white rounded overflow-hidden">
                                    <div class="trending-topic-content">
                                        <img src="images/mp/spiritual.png" class="mb-1 d-inline-block" alt="" />
                                        <h4 class="mb-0"><a href='/madhya-pradesh-tourism/spiritual-tourism' target="_blank">Spiritual</a></h4>
                                        <div className="register-login d-flex align-items-center text-center">
                                            
                                                <a href='/madhya-pradesh-tourism/spiritual-tourism' target="_blank" className="nir-btn white" style={{marginLeft:"31px"}}>View</a>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-2 col-md-6 my-4">
                                <div class="category-item box-shadow p-3 py-2 text-center bg-white rounded overflow-hidden">
                                    <div class="trending-topic-content">
                                        <img src="images/mp/nature.png" class="mb-1 d-inline-block" alt="" />
                                        <h4 class="mb-0"><a href='/madhya-pradesh-tourism/nature-tourism' target="_blank">Nature</a></h4>
                                        <div className="register-login d-flex align-items-center text-center">
                                            
                                                <a href='/madhya-pradesh-tourism/nature-tourism' target="_blank" className="nir-btn white" style={{marginLeft:"31px"}}>View</a>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-2 col-md-6 my-4">
                                <div class="category-item box-shadow p-3 py-2 text-center bg-white rounded overflow-hidden">
                                    <div class="trending-topic-content">
                                        <img src="images/mp/adventure.png" class="mb-1 d-inline-block" alt="" />
                                        <h4 class="mb-0"><a href='/madhya-pradesh-tourism/adventure-tourism' target="_blank">Adventure</a></h4>
                                        <div className="register-login d-flex align-items-center text-center">
                                            
                                                <a href='/madhya-pradesh-tourism/adventure-tourism' target="_blank" className="nir-btn white" style={{marginLeft:"31px"}}>View</a>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-2 col-md-6 my-4">
                                <div class="category-item box-shadow p-3 py-2 text-center bg-white rounded overflow-hidden">
                                    <div class="trending-topic-content">
                                        <img src="images/mp/tiger.png" class="mb-1 d-inline-block" alt="" />
                                        <h4 class="mb-0"><a href='/madhya-pradesh-tourism/wildlife-tourism' target="_blank">Wild Life</a></h4>
                                        <div className="register-login d-flex align-items-center text-center">
                                            
                                                <a href='/madhya-pradesh-tourism/wildlife-tourism' target="_blank" className="nir-btn white" style={{marginLeft:"31px"}}>View</a>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="trending recent-articles pb-4 pt-1 "  >
                <div className="container delightfulContainer">
                    <div className="section-title mb-6 w-75 mx-auto text-center">
                        <h2 className="mb-1">Why Visit <span className="theme">Madhya Pradesh</span></h2>
                        <div>Your one-stop destination for an unforgettable trip through India’s heartland!</div>
                    </div>
                    <div className="recent-articles-inner">
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="trend-item box-shadow bg-white mb-4 rounded overflow-hidden">
                                    <div className="trend-image">
                                        <img src="/images/mp/Wildlife.jpg" />
                                    </div>
                                    <div className="trend-content-main p-4 pb-2">
                                        <div className="trend-content">
                                            <h4 style={{ fontSize: "18px" }}>WILDLIFE</h4>
                                            <p>Madhya Pradesh is a wildlife lover's paradise with its numerous national parks and wildlife sanctuaries. The state is home to two of India's most famous national parks, Kanha and Bandhavgarh, which are renowned for their tiger sightings. Other popular parks include Pench, Satpura, Panna, and Madhav National Park. Apart from tigers, MP is also home to leopards various species.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="trend-item box-shadow bg-white mb-4 rounded overflow-hidden">
                                    <div className="trend-image">
                                        <img src="/images/mp/Heritage.jpg" />
                                    </div>
                                    <div className="trend-content-main p-4 pb-2">
                                        <div className="trend-content">
                                            <h4 style={{ fontSize: "18px" }}>HERITAGE</h4>
                                            <p>Madhya Pradesh has a rich history dating back to ancient times. It is home to some of the most magnificent historical monuments such as the Khajuraho temples, Sanchi Stupa, and the forts of Gwalior, Mandu, and Chanderi. The state is also known for its vibrant tribal culture, which is reflected in its colorful handicrafts, festivals, and traditional music and dance forms.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="trend-item box-shadow bg-white mb-4 rounded overflow-hidden">
                                    <div className="trend-image">
                                        <img src="/images/mp/Pilgrimage.jpg" />
                                    </div>
                                    <div className="trend-content-main p-4 pb-2">
                                        <div className="trend-content">
                                            <h4 style={{ fontSize: "18px" }}>PILGRIMAGE</h4>
                                            <p>Madhya Pradesh is known for its spiritual and religious significance, attracting pilgrims from all over India and the world. The state has a rich history of spirituality and is home to some of the most important pilgrimage sites in the country. With its numerous temples, ashrams, and holy rivers, Madhya Pradesh offers a peaceful and spiritual experience to all those who visit its sacred sites.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="trending recent-articles pb-4 pt-2 "  >
                <div className="container delightfulContainer">
                    <div className="section-title mb-6 w-75 mx-auto text-center">
                        <h2 className="mb-1">Brief overview of <span className="theme">Madhya Pradesh</span></h2>
                        <div>Let yourself be amazed by the wonders of this land!</div>
                    </div>
                    <div className="container">
                        <div className="payment-details px-2 mb-3 box-shadow">
                            <div className="row bank-details-row">
                                <div className="col-lg-6 col-md-6 col-sm-6 bank-details-col py-2 font-weight-bold">
                                    Category
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 bank-details-col py-2 font-weight-bold">
                                    Information
                                </div>
                            </div>
                            <div className="row bank-details-row">
                                <div className="col-lg-6 col-md-6 col-sm-6 bank-details-col py-2">
                                    Capital
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 bank-details-col py-2">
                                    Bhopal
                                </div>
                            </div>
                            <div className="row bank-details-row">
                                <div className="col-lg-6 col-md-6 col-sm-6 bank-details-col py-2">
                                    Largest city
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 bank-details-col py-2">
                                    Indore
                                </div>
                            </div>
                            <div className="row bank-details-row">
                                <div className="col-lg-6 col-md-6 col-sm-6 bank-details-col py-2">
                                    Official language
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 bank-details-col py-2">
                                    Hindi
                                </div>
                            </div>
                            <div className="row bank-details-row">
                                <div className="col-lg-6 col-md-6 col-sm-6 bank-details-col py-2">
                                    Other languages
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 bank-details-col py-2">
                                    English, Marathi
                                </div>
                            </div>
                            <div className="row bank-details-row">
                                <div className="col-lg-6 col-md-6 col-sm-6 bank-details-col py-2">
                                    Area
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 bank-details-col py-2">
                                    308,252 km²
                                </div>
                            </div>
                            <div className="row bank-details-row">
                                <div className="col-lg-6 col-md-6 col-sm-6 bank-details-col py-2">
                                    Population
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 bank-details-col py-2">
                                    83,423,602 (as of 2021)
                                </div>
                            </div>
                            <div className="row bank-details-row">
                                <div className="col-lg-6 col-md-6 col-sm-6 bank-details-col py-2">
                                    Tourist attractions
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 bank-details-col py-2">
                                    Khajuraho temples, Sanchi Stupa, Bandhavgarh National Park, Kanha National Park, Pachmarhi hill station, Gwalior Fort, Mandu historical site
                                </div>
                            </div>
                            <div className="row bank-details-row">
                                <div className="col-lg-6 col-md-6 col-sm-6 bank-details-col py-2">
                                    Famous festivals
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 bank-details-col py-2">
                                    Khajuraho Dance Festival, Lokrang Festival, Tansen Music Festival, Chethiyagiri Vihara Festival
                                </div>
                            </div>
                            <div className="row bank-details-row">
                                <div className="col-lg-6 col-md-6 col-sm-6 bank-details-col py-2">
                                    Climate
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 bank-details-col py-2">
                                    Tropical monsoon with three main seasons: summer (March-June), monsoon (July-September), winter (October-February)
                                </div>
                            </div>
                            <div className="row bank-details-row">
                                <div className="col-lg-6 col-md-6 col-sm-6 bank-details-col py-2">
                                    Cuisine
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 bank-details-col py-2">
                                    Traditional dishes include dal bafla, poha, bhutte ki kees, mawa-bati, and gajak
                                </div>
                            </div>
                            <div className="row bank-details-row">
                                <div className="col-lg-6 col-md-6 col-sm-6 bank-details-col py-2">
                                    Popular activities
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 bank-details-col py-2">
                                    Wildlife safaris, trekking, camping, temple visits, cultural experiences
                                </div>
                            </div>
                            <div className="row bank-details-row">
                                <div className="col-lg-6 col-md-6 col-sm-6 bank-details-col py-2">
                                    Major airports
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 bank-details-col py-2">
                                    Devi Ahilya Bai Holkar Airport (Indore), Raja Bhoj Airport (Bhopal)
                                </div>
                            </div>
                            <div className="row bank-details-row">
                                <div className="col-lg-6 col-md-6 col-sm-6 bank-details-col py-2">
                                    Railway stations
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 bank-details-col py-2">
                                    Major stations include Bhopal Junction, Indore Junction, Jabalpur Junction, and Gwalior Junction
                                </div>
                            </div>
                            <div className="row bank-details-row">
                                <div className="col-lg-6 col-md-6 col-sm-6 bank-details-col py-2">
                                    Road connectivity
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 bank-details-col py-2">
                                    Well-connected by national and state highways, with major bus terminals in Bhopal, Indore, and Jabalpur
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



        </div>
    )
}



