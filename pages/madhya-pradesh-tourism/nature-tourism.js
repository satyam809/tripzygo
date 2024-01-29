import React from 'react'
import Link from 'next/dist/client/link'
import Head from 'next/dist/shared/lib/head'


export default function madhya_pradesh() {
    return (
        <div>
            <Head>
                <title>TripzyGo - Natura Tourism</title>
                <meta name="description" content="Best travel agency in Gurgaon that offers affordable holiday packages. Choose from our best vacation packages and let us help you plan the perfect trip. " />
                <link rel="icon" href="/icon.png" />

            </Head>
            <section className="breadcrumb-main pb-20 pt-14" style={{ backgroundImage: "url(/images/banner_images/mp_banner.jpg)" }}>
                <div class="section-shape section-shape1 top-inherit bottom-0" style={{ backgroundImage: "url(/images/shape8.png)" }}></div>
                <div className="breadcrumb-outer">
                    <div className="container">
                        <div className="breadcrumb-content text-center">
                            <h1 className="mb-3">Nature Tourism</h1>
                            <nav aria-label="breadcrumb" className="d-block">
                                <ul className="breadcrumb">

                                    <div className='text-white'>Connect with nature and rejuvenate your senses</div><br />

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
                        <img class="" src="/images/mp/6.jpg" />
                    </div>

                    <div class="col-lg-6">
                        <div class="p-5">
                            <h2 className="mb-1">Nature <span className="theme">Tourism</span></h2>
                            <p>Madhya Pradesh, located in central India, is known for its natural beauty and wildlife, making it an ideal destination for nature tourism. The state is home to several national parks, wildlife sanctuaries, and natural reserves that provide visitors with a chance to experience the beauty of nature up close. It is known for its scenic beauty and natural attractions.</p>
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
                        <h2 className="mb-1">Here are some of the top scenic destinations in <span className="theme">Madhya Pradesh</span></h2>
                        {/* <div>Let yourself be amazed by the wonders of this land!</div> */}
                    </div>
                    <div class="container my-4">
                        <div class="row">
                         
                            <div class="col-lg-6">
                                <div class="p-5">
                                    <h2 className="mb-1">Pachmarhi <span className="theme"></span></h2>
                                    <p>Pachmarhi is a hill station located in the Satpura Range of Madhya Pradesh. The town is known for its scenic beauty, waterfalls, and ancient caves. The town is also a popular destination for trekking and adventure sports.</p>

                                </div>
                            </div>
                            <div class="col-lg-6">
                                <img class="" src="/images/mp/4.jpg" />
                            </div>

                        </div>
                    </div><br/>
                    <div class="container my-4">
                        <div class="row">
                            <div class="col-lg-6">
                                <img class="" src="/images/mp/5.jpg" />
                            </div>

                            <div class="col-lg-6">
                                <div class="p-5">
                                    <h2 className="mb-1">Bhedaghat <span className="theme"></span></h2>
                                    <p>Bhedaghat is a small town near Jabalpur that is known for its natural beauty. The town is situated on the banks of the Narmada River, and it is home to the famous Marble Rocks. Tourists can take a boat ride to see the Marble Rocks and enjoy the scenic beauty of the river.</p>

                                </div>
                            </div>

                        </div>
                    </div><br/>
                    <div class="container my-4">
                        <div class="row">
                          

                            <div class="col-lg-6">
                                <div class="p-5">
                                    <h2 className="mb-1">Amarkantak <span className="theme"></span></h2>
                                    <p>Amarkantak is a pilgrim town located in the Vindhya and Satpura mountain ranges. The town is known for its natural beauty, including waterfalls, streams, and forests. The town is also the source of two major rivers in India, the Narmada and the Son.</p>

                                </div>
                            </div>

                            <div class="col-lg-6">
                                <img class="" src="/images/mp/6.jpg" />
                            </div>

                        </div>
                    </div><br/>
                    <div class="container my-4">
                        <div class="row">
                            <div class="col-lg-6">
                                <img class="" src="/images/mp/7.jpg" />
                            </div>

                            <div class="col-lg-6">
                                <div class="p-5">
                                    <h2 className="mb-1">Kanha National <span className="theme">Park</span></h2>
                                    <p>Kanha National Park is a popular destination for nature tourism. It is home to the rare species of Barasingha or Swamp Deer, along with tigers, leopards, and other animals. The park also has a diverse flora and fauna, and visitors can enjoy wildlife safaris and nature walks.</p>

                                </div>
                            </div>

                        </div>
                    </div><br/>
                    <div class="container my-4">
                        <div class="row">
                           
                            <div class="col-lg-6">
                                <div class="p-5">
                                    <h2 className="mb-1">Satpura National <span className="theme">Park</span></h2>
                                    <p> Satpura National Park is a lesser-known national park in Madhya Pradesh, but it is still worth a visit. The park is home to tigers, leopards, and other wildlife, and it offers a unique experience of camping and trekking in the forest</p>

                                </div>
                            </div>
                            <div class="col-lg-6">
                                <img class="" src="/images/mp/8.jpg" />
                            </div>

                        </div>
                    </div>
                </div>
            </section>




        </div>
    )
}



