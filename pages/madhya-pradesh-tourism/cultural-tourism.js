import React from 'react'
import Link from 'next/dist/client/link'
import Head from 'next/dist/shared/lib/head'


export default function madhya_pradesh() {
    return (
        <div>
            <Head>
                <title>TripzyGo - Cultural Tourism</title>
                <meta name="description" content="Best travel agency in Gurgaon that offers affordable holiday packages. Choose from our best vacation packages and let us help you plan the perfect trip. " />
                <link rel="icon" href="/icon.png" />

            </Head>
            <section className="breadcrumb-main pb-20 pt-14" style={{ backgroundImage: "url(/images/banner_images/mp_banner.jpg)" }}>
                <div class="section-shape section-shape1 top-inherit bottom-0" style={{ backgroundImage: "url(/images/shape8.png)" }}></div>
                <div className="breadcrumb-outer">
                    <div className="container">
                        <div className="breadcrumb-content text-center">
                            <h1 className="mb-3">Cultural Tourism</h1>
                            <nav aria-label="breadcrumb" className="d-block">
                                <ul className="breadcrumb">

                                    <div className='text-white'>Experience the vibrant traditions and diverse cultures</div><br />

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
                        <img class="" src="/images/mp/2.png" />
                    </div>

                    <div class="col-lg-6">
                        <div class="p-5">
                            <h2 className="mb-1">Cultural <span className="theme">Tourism</span></h2>
                            <p>Madhya Pradesh is a state in central India that has a rich cultural heritage that has been preserved for centuries. The state is home to several ethnic groups, each with its unique culture, traditions, and art forms. Cultural tourism in Madhya Pradesh is an opportunity for visitors to experience and learn about the state's diverse cultural heritage.</p>
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
                        <h2 className="mb-1">Popular Cultural Tourist Destinations in <span className="theme">Madhya Pradesh</span></h2>
                        {/* <div>Let yourself be amazed by the wonders of this land!</div> */}
                    </div>
                    <div class="container my-4">
                        <div class="row">
                         
                            <div class="col-lg-6">
                                <div class="p-4">
                                    <h2 className="mb-1">Music & Dance <span className="theme">Forms</span></h2>
                                    <p>One of the most prominent aspects of Madhya Pradesh's culture is its traditional music and dance forms. The state has a rich history of classical music, with musicians like Tansen and Baiju Bawra hailing from the region. The state is home to several classical music festivals, including the Tansen Music Festival in Gwalior and the Ustad Allauddin Khan Sangeet Samaroh in Maihar. The state is also known for its traditional dance forms, such as the Gond tribal dance, the Kalbelia dance, and the famous Chhattisgarh folk dance.</p>

                                </div>
                            </div>
                            <div class="col-lg-6">
                                <img class="" src="/images/mp/Music & Dance Form.png" />
                            </div>

                        </div>
                    </div><br/>
                    <div class="container my-4">
                        <div class="row">
                            <div class="col-lg-6">
                                <img class="" src="/images/mp/Traditional handicrafts.png" />
                            </div>

                            <div class="col-lg-6">
                                <div class="p-4">
                                    <h2 className="mb-1">Traditional <span className="theme">Handicrafts</span></h2>
                                    <p> Madhya Pradesh is also home to several traditional crafts and art forms that have been practised for centuries. Visitors can explore the state's many craft villages, where artisans create beautiful handicrafts such as textiles, pottery, and woodwork. The Chanderi Weaving Cluster is one such village that is famous for its handwoven Chanderi sarees, which are considered to be some of the finest sarees in India.</p>

                                </div>
                            </div>

                        </div>
                    </div><br/>
                    <div class="container my-4">
                        <div class="row">
                          

                            <div class="col-lg-6">
                                <div class="p-5">
                                    <h2 className="mb-1">Ancient temples & <span className="theme">Shrines</span></h2>
                                    <p> Religion plays a significant role in Madhya Pradesh's culture, with several ancient temples and shrines dotting the state's landscape. The state is home to the famous Mahakaleshwar Jyotirlinga temple in Ujjain and the Omkareshwar Jyotirlinga temple in Omkareshwar, both of which are significant Hindu pilgrimage sites.</p>

                                </div>
                            </div>

                            <div class="col-lg-6">
                                <img class="" src="/images/mp/Ancient_temples.png" />
                            </div>

                        </div>
                    </div><br/>
                    <div class="container my-4">
                        <div class="row">
                            <div class="col-lg-6">
                                <img class="" src="/images/mp/Cuisine.png" />
                            </div>

                            <div class="col-lg-6">
                                <div class="p-5">
                                    <h2 className="mb-1">Cuisine <span className="theme"></span></h2>
                                    <p>Madhya Pradesh's cuisine is a fusion of several different flavors and influences, including Mughlai, Rajasthani, and Gujarati cuisines. The state is known for its spicy curries, kebabs, and snacks like poha, jalebi, and samosas. The state's street food is also a must-try, with dishes like bhutte ki kees, a corn-based snack, and chaat, a savory snack made with potatoes and chickpeas.</p>

                                </div>
                            </div>

                        </div>
                    </div><br/>
                
                </div>
            </section>




        </div>
    )
}



