import Head from 'next/head'
import Link from 'next/dist/client/link'
import React from "react";
import { Modal, ModalBody } from "reactstrap";
import HomeModal from '../components/CommonModal'
import SearchData from "../components/SearchBar/searchbar.json";
import SearchBar from "../components/SearchBar/SearchBar";
import SlickHoneymoonSlider from '../components/Slick_Sliders/SlickDestinationsSlider';
import SlickTestimonialSlider from '../components/Slick_Sliders/SlickTestimonialSlider';
import SlickLastMinuteSlider from '../components/Slick_Sliders/SlickLastMinuteSlider';
import SlickCommitmentSlider from '../components/Slick_Sliders/SlickCommitmentSlider';
import SlickTrendingSlider from '../components/Slick_Sliders/SlickTrendingSlider';
import SlickPartnerSlider from '../components/Slick_Sliders/slickPartnerSlider';
import Ourblogs from "../components/Blogs/ourblogs";
import Ourpartners from "../components/OurPartners";


export default function Home() {
    const [modalOpen, setModalOpen] = React.useState(false);
    const [modalOpen1, setModalOpen1] = React.useState(false);
    const [modalOpen2, setModalOpen2] = React.useState(false);

    return (
        <div>
            <Head>
                <title>TripzyGo - Best Travel Company in Gurgaon for the Best Holiday Package</title>
                <meta name="description" content="TripzyGo International is the Best Travel Agency in Gurgaon that offers the best holiday packages at affordable prices. Book your customized best tour packages." />
                <meta name="keywords" content="best tour packages, best travel agency in gurgaon, best holiday packages" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                <link rel="canonical" href="https://www.tripzygo.in" />
                <link rel="icon" href="/icon.png" />
            </Head>
            <div>
            {/* <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="/images/test.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="/images/a/resize-5.webp" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="/images/a/resize-5.webp" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div> */}

                <HomeModal ImageLink="/images/popup/Loviest Honeymoon.webp" alt="best travel agency in gurgaon" />
                <section className="banner" >
                    <div className="banner-main">

                        <div className="video-banner">
                            {/* <img src="images/a/resize-5.webp" alt="image" /> */}
                        </div>
                        <div className="dot-overlay"></div>

                        <div className="banner-content ">
                            <div class="card11">
                                <h2 style={{ color: "white" }}>Travel Around for

                                    <div class="scrolling-words-container">
                                        <div class="scrolling-words-box">
                                            <ul>
                                                <li >Experiences</li>
                                                <br></br>
                                                <li >Moments</li>
                                                <br></br>
                                                <li >Adventures</li>
                                                <br></br>
                                                <li >Feelings</li>
                                                <br></br>
                                                <li >Experiences</li>
                                            </ul>
                                        </div>

                                    </div>
                                </h2>
                            </div>
                            <div className="mb-4 text-white">Cast a Spell for Exciting Vacations with Customised Tour Packages! </div>
                            {/* <Link href="/packages" >
                                <a className="nir-btn white" >Explore Our Tour Packages</a>
                            </Link> */}
                            <SearchBar placeholder="Search Destination" data={SearchData} />
                        </div>
                        {/* <ShareButton packageUrl="google.com"></ShareButton> */}
                    </div>
                </section>
{/* 
                <section className="our-team pb-4 pt-6">
                    <div className="container delightfulContainer">
                        <div className="row align-items-center">
                            <div className="col-lg-5">
                                <div className="section-title text-lg-start text-center">
                                    <h4 className="mb-1 theme1">Journey to Joy</h4>
                                    <h1 style={{fontSize:"38px"}}>Best Holiday Packages <span className="theme">
                                    Crafted For Wanderers</span></h1>
                                    <div className="mb-4">The world awaits! Be ready to venture beyond the ordinary and create unimaginable
experiences by booking our customised tour packages. Trust us to create a journey that outshines your expectations and sets the stage for a phenomenal chapter in your life. At TripzyGo, every trip is a tale waiting to be told, so let us change your wanderlust into wanderlove!
</div>
                                </div>
                            </div>
                            <div className="col-lg-7 ">
                                <div className="row team-main">
                                    <div className='my-content'  >
                                        <div className='carouse_div'>
                                            <SlickPartnerSlider></SlickPartnerSlider>
                                        </div>
                                    </div>
                                    <Link href="/beach-tour-packages">
                                        <div className="col-lg-4 col-md-6 mb-4 resp travel-card">
                                            <div className="team-list bg-white rounded">
                                                <div className="team-image">
                                                    <img src="images/team/beach.webp" alt="beach tour packages" />
                                                </div>
                                                <div className="team-content text-center p-2 bg-theme">
                                                    <h5 className="mb-0 white">Beaches</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                    <Link href="/hill-station-tour-packages">
                                        <div className="col-lg-4 col-md-6 mb-4 resp travel-card">
                                            <div className="team-list bg-white rounded">
                                                <div className="team-image">
                                                    <img src="images/team/hill-station.webp" alt="hill station tour packages" />
                                                </div>
                                                <div className="team-content text-center p-2 bg-theme">
                                                    <h5 className="mb-0 white">Hill Station</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                    <Link href="/luxury-tour-packages">
                                        <div className="col-lg-4 col-md-6 mb-4 resp travel-card">
                                            <div className="team-list bg-white rounded">
                                                <div className="team-image">
                                                    <img src="images/team/luxury.webp" alt="luxury tour packages" />
                                                </div>
                                                <div className="team-content text-center p-2 bg-theme">
                                                    <h5 className="mb-0 white">Luxury Vacation</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
                {/* <div className='my-content'  >
                <div className='carouse_div animated.infinite'>
                    <div class="container">
                        <section class="trending pt-8 pb-2 discount-action pb-0" style={{ backgroundImage: "url(images/landing/independence_mobile.png)", borderRadius: "10px"}}>
                            <div class="call-banner pb-10">
                                <div class="trend-content w-75 mx-auto text-center px-5 mb-0" style={{ position: "relative", top: "40px" }}>
                                  
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div> */}
            {/* <div class="container resp">
                <section class="trending pt-8 pb-2 discount-action pb-0" style={{ backgroundImage: "url(images/landing/independence.png)", borderRadius: "10px",height: "279px" }}>
                    <div class="call-banner pb-10">
                        <div class="trend-content w-100 mx-auto text-center px-5 mb-0" style={{ position: "relative", top: "40px" }}>
                          
                        </div>
                    </div>
                </section>
            </div> */}

                <section className="trending pb-4 pt-4" style={{ backgroundImage: "url(images/shape-1.png)", backgroundPosition: "center" }}>
                    <div className="container delightfulContainer">
                        <div className="section-title mb-6 w-100 mx-auto text-center">
                            <h4 className="mb-1 theme1">Popular and Trending</h4>
                            <h2 className="mb-1">Best <span className="theme">Travel Packages</span></h2>
                            <div> Enroute a delightful journey to trending destinations with our customized tour packages</div>

                        </div>

                        <div className="row align-items-center">
                            <Link href="/international-tour-packages/europe-tour-packages">
                                <div className="col-lg-5 mb-4 resp">
                                    <div className="trend-item1">
                                        <div className="trend-image itemswiper position-relative rounded">
                                            <img className="trend-banner" src="images/destination/Europe.jpg" alt="Europe" />
                                            <div className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index">
                                                <div className="trend-content-title">
                                                    {/* <h5 className="mb-0"><a href="tour-grid.html" className="theme1">England</a></h5> */}
                                                    <h4 className="mb-0 white">Europe</h4>
                                                </div>
                                                {/* <span className="white bg-theme p-1 px-2 rounded">46 Packages</span> */}
                                            </div>
                                            <div className="color-overlay"></div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <div className="col-lg-7 resp">
                                <div className="row">
                                    <Link href="/international-tour-packages/bali-tour-packages">
                                        <div className="col-lg-6 col-md-6 col-sm-6 mb-4">
                                            <div className="trend-item1">
                                                <div className="trend-image position-relative rounded">
                                                    <img src="images/destination/Bali.jpg" alt="Bali" />
                                                    <div className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index">
                                                        <div className="trend-content-title">
                                                            {/* <h5 className="mb-0"><a href="tour-grid.html" className="theme1">Florida</a></h5> */}
                                                            <h4 className="mb-0 white">Bali</h4>
                                                        </div>
                                                        {/* <span className="white bg-theme p-1 px-2 rounded">4 Packages</span> */}
                                                    </div>
                                                    <div className="color-overlay"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                    <Link href="/international-tour-packages/thailand-tour-packages">
                                        <div className="col-lg-6 col-md-6 col-sm-6 mb-4">
                                            <div className="trend-item1">
                                                <div className="trend-image position-relative rounded">
                                                    <img src="images/destination/Thailand.webp" alt="Thailand" />
                                                    <div className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index">
                                                        <div className="trend-content-title">
                                                            {/* <h5 className="mb-0"><a href="tour-grid.html" className="theme1">Tokyo</a></h5> */}
                                                            <h4 className="mb-0 white">Thailand</h4>
                                                        </div>
                                                        {/* <span className="white bg-theme p-1 px-2 rounded">15 Packages</span> */}
                                                    </div>
                                                    <div className="color-overlay"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                    <Link href="/international-tour-packages/dubai-tour-packages">
                                        <div className="col-lg-6 col-md-6 col-sm-6 mb-4">
                                            <div className="trend-item1">
                                                <div className="trend-image position-relative rounded">
                                                    <img src="images/destination/Dubai.jpg" alt="Dubai" />
                                                    <div className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100">
                                                        <div className="trend-content-title">
                                                            {/* <h5 className="mb-0"><a href="tour-grid.html" className="theme1">Moscow</a></h5> */}
                                                            <h4 className="mb-0 white">Dubai</h4>
                                                        </div>
                                                        {/* <span className="white bg-theme p-1 px-2 rounded">2 Packages</span> */}
                                                    </div>
                                                    <div className="color-overlay"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>

                                    <Link href="/international-tour-packages/singapore-tour-packages">
                                        <div className="col-lg-6 col-md-6 col-sm-6 mb-4">
                                            <div className="trend-item1">
                                                <div className="trend-image position-relative rounded">
                                                    <img src="images/destination/Singapore.jpg" alt="Singapore"/>
                                                    <div className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index">
                                                        <div className="trend-content-title">
                                                            {/* <h5 className="mb-0"><a href="tour-grid.html" className="theme1">Italy</a></h5> */}
                                                            <h4 className="mb-0 white">Singapore</h4>
                                                        </div>
                                                        {/* <span className="white bg-theme p-1 px-2 rounded">13 Packages</span> */}
                                                    </div>
                                                    <div className="color-overlay"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className='my-content'  >
                                <div className='carouse_div animated.infinite'>
                                    <SlickTrendingSlider></SlickTrendingSlider>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="trending pb-4 pt-1" style={{ backgroundImage: "url(images/shape-1.png)", backgroundPosition: "center" }}>
                    <div className="container delightfulContainer" >
                        <div className="section-title mb-6  mx-auto text-center">
                            <h4 className="mb-1 theme1">Soulmate Special</h4>
                            <h3 className="mb-1" style={{ fontSize: "35px" }}>Top Romantic <span className="theme"> Honeymoon Destinations</span></h3>
                            <div>For the perfect start to your new life together, we have you covered with the<br /> best romantic honeymoon destinations</div>
                        </div>
                        <div className='container'>
                            <div className="col-lg-12 ">
                                <SlickHoneymoonSlider
                                    package1Image="/images/landing/Switzerland.jpg"
                                    package2Image="/images/landing/Maldives.webp"
                                    package3Image="/images/landing/turkey.jpg"
                                    package4Image="/images/landing/Vietnam.jpg"
                                    package5Image="/images/landing/kashmir.jpg"
                                    package6Image="/images/landing/Kerala.webp"
                                    package1Name="Switzerland"
                                    package2Name="Maldives"
                                    package3Name="Turkey"
                                    package4Name="Vietnam"
                                    package5Name="Kashmir"
                                    package6Name="Kerala"
                                    package1Link="/international-tour-packages/switzerland-tour-packages"
                                    package2Link="/international-tour-packages/maldives-tour-packages"
                                    package3Link="/international-tour-packages/turkey-tour-packages"
                                    package4Link="/international-tour-packages/vietnam-tour-packages"
                                    package5Link="/india-tour-packages/kashmir-tour-packages"
                                    package6Link="/india-tour-packages/kerala-tour-packages" />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="trending pb-4 pt-1" style={{ backgroundImage: "url(images/shape-1.png)", backgroundPosition: "center" }}>
                    <div className="container delightfulContainer" >
                        <div className="section-title mb-6  mx-auto text-center">
                            <h4 className="mb-1 theme1">Winter's Wonderland</h4>
                            <h3 className="mb-1" style={{ fontSize: "35px" }}>Choose from the <span className="theme">Best Destinations</span></h3>
                            <div>Make your winter break one to remember! Get our winter getaway deals and enjoy the best of winter wonderlands with us.</div>
                        </div>
                        <div className='container'>
                            <div className="col-lg-12 ">
                                <SlickHoneymoonSlider
                                    package1Image="/images/landing/Dubai.jpg"
                                    package2Image="/images/landing/Singapore.jpg"
                                    package3Image="/images/landing/Maldives.jpg"
                                    package4Image="/images/landing/Rajasthan.jpg"
                                    package5Image="/images/landing/Andaman.jpg"
                                    package6Image="/images/landing/Kerala.jpg"
                                    package1Name="Dubai"
                                    package2Name="Singapore"
                                    package3Name="Maldives"
                                    package4Name="Rajasthan"
                                    package5Name="Andaman"
                                    package6Name="Kerala"
                                    package1Link="/international-tour-packages/dubai-tour-packages"
                                    package2Link="/international-tour-packages/singapore-tour-packages"
                                    package3Link="/international-tour-packages/maldives-tour-packages"
                                    package4Link="/india-tour-packages/rajasthan-tour-packages"
                                    package5Link="/india-tour-packages/andaman-tour-packages"
                                    package6Link="/india-tour-packages/kerala-tour-packages" />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="trending pb-4 pt-1" id="swiper-container" style={{ backgroundImage: "url(images/shape4.png)" }}>
                    <div className="container delightfulContainer">
                        <div className="row align-items-center justify-content-between">
                            <div className="col-lg-12 mb-4">
                                <div className="banner-content w-75 mx-auto">
                                    <div className="banner-content-in text-center">
                                        <h4 className="mb-1 theme1 mt-4">Delightful Discounts</h4>
                                        <h2 className="mb-1">Last <span className="theme">Minute Deals</span></h2>
                                        <div>Leverage great discount on the best travel packages by grabbing out special last minute deals. Book your dream vacation with our customized tour packages available at discounted prices</div>
                                    </div>

                                </div>
                            </div>
                            <div className='my-content'>
                                <div className='carouse_div'>
                                    <SlickLastMinuteSlider></SlickLastMinuteSlider>
                                </div>
                            </div>
                            <div className="col-lg-5">
                            </div>
                        </div>
                        <div className="trend-box resp">
                            <div class="row">
                                <div class="col-lg-4 mb-4">
                                    <div class="trend-item1 rounded box-shadow bg-white">
                                        <div class="trend-image position-relative">
                                            <img src="images\flights\Plane.jpg" alt="flight booking" onClick={() => setModalOpen(!modalOpen)} class="" />
                                            <Modal size="sm" toggle={() => setModalOpen(!modalOpen)} isOpen={modalOpen}>
                                                <div className=" modal-header border-0">
                                                    <h4 className=" modal-title" id="exampleModalLabel">
                                                        Fly high anytime, to anywhere for anything
                                                    </h4>
                                                    <button style={{ background: "transparent" }}
                                                        aria-label="Close"
                                                        className=" close"
                                                        type="buFly high anytime, to anywhere for anythingtton"
                                                        onClick={() => setModalOpen(!modalOpen)}
                                                    >
                                                        <span aria-hidden={true}><i class="fa fa-close"></i></span>
                                                    </button>
                                                </div>
                                                <ModalBody>
                                                    <h5 className=" modal-title mx-4" id="exampleModalLabel">
                                                        Save Upto 25% Off

                                                    </h5><br />
                                                    <p className="mx-4">Handling flight costs for your trips is a bit of a headache. You book ahead of time, look for last minute deals, and find million other ways to save on your flight bookings. Well, there’s no need for any such hassle or flight booking drama at all. You just need to reach out to TripzyGo for cheap domestic flights.</p>
                                                    <p className="mx-4">At TripzyGo, we have exclusive benefits on domestic flight bookings. With us, you get up to 40% discounts on your flight bookings. Could there be a better deal than this? Stop the hassles and start the savings with TripzyGo.</p><br />
                                                    <div class="col-lg-12 text-center">
                                                        <a href="contact" class="nir-btn">Grab Deal</a>


                                                    </div>
                                                </ModalBody>
                                            </Modal>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6 mb-4">
                                    <div class="trend-item1 rounded box-shadow">
                                        <div class="trend-image position-relative">
                                           <img src="images\flights\winter.jpg" alt="winter" class="" onClick={() => setModalOpen1(!modalOpen1)} />
                                            {/* <Modal size="sm" toggle={() => setModalOpen1(!modalOpen1)} isOpen={modalOpen1}>
                                                <div className=" modal-header border-0">
                                                    <h4 className=" modal-title" id="exampleModalLabel">
                                                        Maldives Honeymoon
                                                    </h4>
                                                    <button style={{ background: "transparent" }}
                                                        aria-label="Close"
                                                        className=" close"
                                                        type="button"
                                                        onClick={() => setModalOpen1(!modalOpen1)}
                                                    >
                                                        <span aria-hidden={true}><i class="fa fa-close"></i></span>
                                                    </button>
                                                </div>
                                                <ModalBody>
                                                    <h5 className=" modal-title mx-4" id="exampleModalLabel">
                                                        Up to 25% Off
                                                    </h5><br />
                                                    <p className="mx-4">Maldives and Honeymoon are synonyms to each other. You talk about your honeymoon, you think about the Maldives. It’s such a beautiful place after all. It’s one of the best honeymoon destinations you can ever find. So, having offers to visit this enchanting and hot island on your honeymoon are a treat.</p>
                                                    <p className="mx-4">We offer you that treat with amazing offers on Maldives honeymoon packages. Get up to 25% off on any Maldives honeymoon package that you pick out for a romantic and special honeymoon with your partner.</p>
                                                    <br />
                                                    <div class="col-lg-12 text-center">
                                                        <a href="contact" class="nir-btn">Grab Deal</a>
                                                    </div>
                                                </ModalBody>
                                            </Modal> */}
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6 mb-4">
                                    <div class="trend-item1 rounded box-shadow">
                                        <div class="trend-image position-relative">
                                            <img src="images\flights\Europe.jpg" alt="Europe trip" onClick={() => setModalOpen2(!modalOpen2)} class="" />
                                            <Modal size="sm" toggle={() => setModalOpen2(!modalOpen2)} isOpen={modalOpen2}>
                                                <div className=" modal-header border-0">
                                                    <h4 className=" modal-title" id="exampleModalLabel">
                                                        Trip to Europe
                                                    </h4>
                                                    <button style={{ background: "transparent" }}
                                                        aria-label="Close"
                                                        className="close"
                                                        type="button"
                                                        onClick={() => setModalOpen2(!modalOpen2)}
                                                    >
                                                        <span aria-hidden={true}><i class="fa fa-close"></i></span>
                                                    </button>
                                                </div>
                                                <ModalBody>
                                                    <h5 className=" modal-title mx-4" id="exampleModalLabel">
                                                        Up to 25% Off

                                                    </h5><br />
                                                    <p className="mx-4">A trip to Europe is a fascinating adventure, whether you plan it with family, friends, or partner. However, you don’t want to burn a hole in your pocket while fulfilling your fantasy of a Europe trip. Well, we have got you covered.</p>
                                                    <p className="mx-4">Enjoy the best of your days in Europe with the best of the offers on Europe tour package designed and customised especially for you by travel experts and specialists at TripzyGo. Book the offer before it expires. Europe, after all, is calling out to you.</p>
                                                    <br />
                                                    <div class="col-lg-12 text-center">
                                                        <a href="contact" class="nir-btn">Grab Deal</a>
                                                    </div>
                                                </ModalBody>
                                            </Modal>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-12 text-center">
                                    <a href="contact" class="nir-btn">Grab Deals</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                <section className="about-us pb-4 pt-1" style={{ backgroundImage: "url(images/shape4.png)", backgroundPosition: "center" }}>
                    <div className="container">

                        <div className="section-title mb-6 w-50 mx-auto text-center">
                            <h4 className="mb-1 theme1">Our Commitment</h4>
                            <h2 className="mb-1">Why <span className="theme">Choose Us</span></h2>
                            <div>We are amazing to travel with and through multiple commitments we make your trips the most memorable experience of your life
                            </div>
                        </div>

                        <div className='my-content'  >
                            <div className='carouse_div animated.infinite'>
                                <SlickCommitmentSlider></SlickCommitmentSlider>
                            </div>
                        </div>

                        <div className="why-us resp" >
                            <div className="why-us-box">
                                <div className="row">
                                    <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
                                        <div className="why-us-item text-center p-4 py-5 border rounded bg-white">
                                            <div className="why-us-content">
                                                <div className="why-us-icon">
                                                    {/* <i className="icon-flag theme"></i> */}
                                                    <img src="images/web icons 32/customized-tour-packages.png" alt="customised tour packages" />

                                                </div><br />
                                                <h4><a>Customised Tour Packages</a></h4>
                                                <p className="mb-0">With us, you will have best travel packages that are perfectly catered to your specific travel needs and requirements.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
                                        <div className="why-us-item text-center p-4 py-5 border rounded bg-white">
                                            <div className="why-us-content">
                                                <div className="why-us-icon">
                                                    {/* <i className="fa fa-inr  theme"></i> */}
                                                    <img src="images/web icons 32/budgeted-tours.png" alt="budget holiday tour packages" />

                                                </div><br />
                                                <h4><a>Budgeted Tours</a></h4>
                                                <p className="mb-0">Our customized tour packages take care of your budget and do not burn a hole in your pocket.</p>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
                                        <div className="why-us-item text-center p-4 py-5 border rounded bg-white">
                                            <div className="why-us-content">
                                                <div className="why-us-icon">
                                                    {/* <i className="icon-support theme"></i> */}
                                                    <img src="images/web icons 32/dedicated-support.png" alt="best tour packages" />

                                                </div><br />
                                                <h4><a>Dedicated Support</a></h4>
                                                <p className="mb-0">Our travel executive will be with you every step of the way to assist with your touring needs and requirements.</p>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
                                        <div className="why-us-item text-center p-4 py-5 border rounded bg-white">
                                            <div className="why-us-content">
                                                <div className="why-us-icon">
                                                    {/* <i className="icon-globe theme"></i> */}
                                                    <img src="images/web icons 32/World-wide-touring.png" alt="best tour operators in gurgaon" />
                                                </div><br />
                                                <h4><a>World-wide Touring</a></h4>
                                                <p className="mb-0">With us, you can travel domestically and internationally with all the convenience, comfort, and planning.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="white-overlay"></div>
                </section>
                <Ourpartners />
                <Ourblogs />

                <section className="trending pb-4 pt-1" style={{ backgroundImage: "url(images/shape-1.png)", backgroundPosition: "center" }}>
                    <div className="container delightfulContainer" >
                        <div className="section-title mb-6 w-75 mx-auto text-center">
                            <h4 className="mb-1 theme1">Happy Travellers </h4>
                            <h2 className="mb-1">Client's <span className="theme">Testimonials</span></h2>
                            <div>We offer the very finest cultural tours and holidays but we are always trying to improve
                            </div>
                        </div>
                        <div className='container'>
                            <div className="col-lg-12 ">
                                <SlickTestimonialSlider />
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </div>

    )
}
