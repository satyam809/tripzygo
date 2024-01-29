import Head from 'next/head'
import Link from 'next/dist/client/link'
import React from "react";
import HomeModal from '../components/CommonModal'
import SearchData from "../components/SearchBar/searchbar.json";
import SearchBar from "../components/SearchBar/SearchBar";
import SlickHoneymoonSlider from '../components/Slick_Sliders/SlickDestinationsSlider';
import SlickNewTestimonial from '../components/Slick_Sliders/SlickNewTestimonial';
import Typewritter from '../components/Slick_Sliders/Typewritter';
import SwiperEurope from '../components/Slick_Sliders/SwiperEurope';
import SlickBannerHome from '../components/Slick_Sliders/SlickBannerHome';
import SlickPriceSlider from '../components/Slick_Sliders/SlickPriceSlider';
import SlickVisa from '../components/Slick_Sliders/SlickVisa';
import SwiperTypeofInterest from '../components/Slick_Sliders/SwiperTypeofInterest';
import Ourblogs from "../components/Blogs/ourblogs";
import SwiperDomestic from "../components/Slick_Sliders/SwiperDomestic";
import SwiperDubai from "../components/Slick_Sliders/SwiperDubai";
import SwiperSoutheast from "../components/Slick_Sliders/SwiperSoutheast";
import PopularPackage from "../components/Packages_SFSP/PopularPackages_home";



export default function Home() {
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
                {/* <HomeModal ImageLink="/images/popup/Loviest Honeymoon.webp" alt="best travel agency in gurgaon" /> */}

                <section class="banner overflow-hidden">
                    <div class="banner-main resp" style={{ height: "400px" }}>
                        <div class="banner-image video-banner1">
                            {/* <div class="video-banner1">

                            </div> */}
                            <div class="dot-overlay"></div>
                        </div>
                        <div class="banner-content">

                            <h2 className="mb-0 white font-weight-bold">
                                Discover the World with us!
                            </h2>
                            <Typewritter></Typewritter><br />
                            <SearchBar data={SearchData} />


                        </div>

                    </div>
                    <div className='my-content'  >
                        <div className=' animated.infinite'>
                            <div class="banner-main" style={{ height: "300px" }}>
                                <div class="banner-image video-banner1">
                                    {/* <div class="video-banner1">

                            </div> */}
                                    {/* <div class="dot-overlay"></div> */}
                                </div>
                                <div class="banner-content">

                                    <h2 className="mb-0 white">
                                        Discover the World with us!
                                    </h2>
                                    <Typewritter></Typewritter>
                                    <SearchBar data={SearchData} />


                                </div>

                            </div>

                        </div>
                    </div>
                    <footer class="footer resp" style={{ backgroundColor: "black", height: "50px" }}>
                        <div class="container">
                            <div class="row mb-2">
                                <div class="col-6 col-sm-6 col-md-4 mt-2 col-lg-3 text-center text-sm-start">
                                    <div class="information text-center">
                                        <p class="text-white" id="font-size-sm1"><img style={{ height: "20px" }} src='/homepageads.jpg' />&nbsp;4.5&nbsp;<span class="fa fa-star  checked" style={{ color: "#FFA500" }}></span>&nbsp;rated</p>
                                        {/* <p id="font-size-sm"><i class="fa fa-clock-o" aria-hidden="true"></i>&nbsp;&nbsp;about</p> */}
                                    </div>
                                </div>
                                <div class="col-6 col-sm-6 col-md-4 mt-2 col-lg-3 text-center text-sm-start">
                                    <div class="resources text-center">
                                        <p class=" text-white " id="font-size-sm1"><i class="fa fa-check-circle" style={{ color: "#FFA500" }}></i>&nbsp;100% Customised Trips</p>
                                        {/* <p id="font-size-sm"><i class="fa fa-calendar" aria-hidden="true"></i>&nbsp;&nbsp;about</p> */}
                                    </div>
                                </div>
                                <div class="col-6 col-sm-6 col-md-4 mt-2 col-lg-3 text-center text-sm-start">
                                    <div class="social text-center">
                                        <p class=" text-white " id="font-size-sm1"><i class="fa fa-check-circle" style={{ color: "#FFA500" }}></i>&nbsp;95% Visa Success Rate</p>
                                        {/* <p id="font-size-sm"><i class="fa fa-plane" aria-hidden="true"></i>&nbsp;&nbsp;INR about</p> */}
                                    </div>
                                </div>
                                <div class="col-6 col-sm-6 col-md-6 mt-2 col-lg-3 text-center text-sm-start">
                                    <div class="contact text-center">
                                        <p class=" text-white " id="font-size-sm1"><i class="fa fa-check-circle" style={{ color: "#FFA500" }}></i>&nbsp;24x7 Support</p>
                                        {/* <p id="font-size-sm">absolute</p> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>
                    <div className='my-content'  >
                        <div className=' animated.infinite'>
                            <footer class="footer " style={{ backgroundColor: "black", height: "50px" }}>
                                <div class="container">
                                    <div class="row mb-2">
                                        <div class="col-6 col-sm-6 col-md-4 mt-2 col-lg-3 text-sm-start">
                                            <div class="information text-center">
                                                <p class="text-white" id="font-size-sm1"><img style={{ height: "18px" }} src='/homepageads.jpg' />&nbsp;4.5&nbsp;<span class="fa fa-star  checked" style={{ color: "#FFA500" }}></span>&nbsp;rated</p>

                                                {/* <p id="font-size-sm"><i class="fa fa-clock-o" aria-hidden="true"></i>&nbsp;&nbsp;about</p> */}
                                            </div>
                                        </div>
                                        <div class="col-6 col-sm-6 col-md-4 mt-2 col-lg-3 text-sm-start">
                                            <div class="resources">
                                                <p class=" text-white" style={{ marginLeft: "-30px" }} id="font-size-sm1"><i class="fa fa-check-circle" style={{ color: "#FFA500" }}></i>&nbsp;100% Customised Trips</p>
                                                {/* <p id="font-size-sm"><i class="fa fa-calendar" aria-hidden="true"></i>&nbsp;&nbsp;about</p> */}
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </footer>

                        </div>
                    </div>
                </section>

                {/* 
                <section className="trending pb-4 pt-4" style={{ backgroundImage: "url(images/shape-1.png)", backgroundPosition: "center" }}>
                    <div className="container delightfulContainer">
                        <div className="section-title mb-4 w-100 mx-auto text-center">
                            <h2 className="mb-1">Best <span className="theme">Travel Packages</span></h2>

                        </div>

                        <div className="row align-items-center">

                            <SlickTrendingSlider></SlickTrendingSlider>

                           
                        </div>
                    </div>
                </section> */}
                <SlickPriceSlider></SlickPriceSlider>
                
                <section className="trending pb-4 pt-1" style={{ backgroundImage: "url(images/shape-1.png)", backgroundPosition: "center" }}>
                    <div className="container delightfulContainer" >
                        <div className='container'>
                            <div className="col-lg-12 ">
                                <SlickBannerHome
                                    package1Image="images/homepagebanner/endofseason.jpg"
                                    package2Image="images/homepagebanner/Phuketkrabi.jpg"
                                    package3Image="images/homepagebanner/Andaman.jpg"
                                    package4Image="images/homepagebanner/bali.jpg"
                                    Link1="https://www.tripzygo.in/package/1620-relaxing-east-europe-group-tour-all-inclusive-with-indian-meals"
                                    Link2="https://www.tripzygo.in/package/1201-5n-6d-luxury-retreat-in-krabi-and-phuket"
                                    Link3="https://www.tripzygo.in/package/1401-andaman-memories-with-friends-4-nights-of-bliss-with-exclusive-discounts"
                                    Link4="https://www.tripzygo.in/package/448-bali-trip---your-extraordinary-honeymoon-tour"
                                />
                            </div>
                        </div>
                    </div>
                </section>
             
                <SlickVisa></SlickVisa>

                <section className="trending pb-6 pt-6 resp" style={{ backgroundColor: "#ddf1f5", backgroundImage: "url(images/shape-1.png)", backgroundPosition: "center" }}>
                    <div className="mb-2  mx-auto">
                        {/* <h4 className="mb-1 theme1">Soulmate Special</h4> */}
                        <h3 className="mb-1 ml-5" style={{ fontSize: "20px", color: "black" }}>Top Destinations for a Quick Getaway</h3>
                        <div className='ml-5' style={{ color: "black" }}>Ideal for 3-5 days trip</div>
                    </div>
                    <div className='section4'>
                        <div class="card_dest">
                            <div class="card__img">
                                <Link href='/international-tour-packages/singapore-tour-packages'>
                                    <a><img className='img_dest' id='Section3_click1' src='/images/idealduration/singaporeweb.jpg' alt="Singapore" /></a>
                                </Link>

                            </div>
                        </div>
                        <div class="card_dest">
                            <div class="card__img">
                                <Link href='/international-tour-packages/dubai-tour-packages'>
                                    <a><img className='img_dest' id='Section3_click2' src='/images/idealduration/Dubaiweb.jpg' alt="Eiffel Tower" /></a>
                                </Link>
                                {/* <div class="card__overlay">
                                    <h2>Paris</h2>
                                    <p>Eiffel Tower</p>
                                </div> */}
                            </div>
                        </div>
                        <div class="card_dest">
                            <div class="card__img">
                                <Link href='/international-tour-packages/thailand-tour-packages'>
                                    <a><img className='img_dest' id='Section3_click3' src="/images/idealduration/Thailandweb.jpg" alt="Colosseum" /></a>

                                </Link>
                            </div>
                        </div>
                        <div class="card_dest">
                            <div class="card__img">
                                <Link href='/international-tour-packages/bali-tour-packages'>
                                    <a><img className='img_dest' id='Section3_click4' src="/images/idealduration/Baliweb.jpg" alt="Pisa Tower" /></a>
                                </Link>

                            </div>
                        </div>
                        <div class="card_dest">
                            <div class="card__img">
                                <Link href='/international-tour-packages/malaysia-tour-packages'>
                                    <a><img className='img_dest' id='Section3_click5' src="/images/idealduration/malaysiaweb.jpg" alt="" /></a>
                                </Link>

                            </div>
                        </div>
                        <div class="card_dest">
                            <div class="card__img">
                                <Link href='/international-tour-packages/vietnam-tour-packages'>
                                    <a><img className='img_dest' id='Section3_click6' src="/images/idealduration/Vietnamweb.jpg" alt="Sydney Opera House" /></a>
                                </Link>

                            </div>
                        </div>
                    </div>
                </section>
                <div className='my-content'  >
                    <section className="trending pb-2 pt-6" style={{ backgroundColor: "#ddf1f5", backgroundImage: "url(images/shape-1.png)", backgroundPosition: "center" }}>
                        <div className="mb-2  mx-auto">
                            {/* <h4 className="mb-1 theme1">Soulmate Special</h4> */}
                            <h3 className="mb-1 text-center" style={{ fontSize: "20px", color: "black" }}>Top Destinations for a Quick Getaway</h3>
                            <div className='text-center' style={{ color: "black" }}>Ideal for 3-5 days trip</div>
                        </div>
                        <div className="col-lg-12 web_padding pb-2 pt-1">
                            <div className="row budget_center ">

                                <div className="col-4 col-md-2 mb-2">
                                    <Link href='/international-tour-packages/dubai-tour-packages'>
                                        <a id='Section3_mob_click1'><img className='mb-1' style={{ borderRadius: "25px" }} src='/images/idealduration/Dubai.png'></img>


                                            <p className='font-weight-bold' style={{ color: "black", textAlign: "center" }}>Dubai</p></a>
                                    </Link>
                                </div>
                                <div className="col-4 col-md-2 mb-2">
                                    <Link href='/international-tour-packages/bali-tour-packages'>
                                        <a id='Section3_mob_click2'><img className='mb-1' style={{ borderRadius: "25px" }} src='/images/idealduration/Bali.png'></img>
                                            <p className='font-weight-bold' style={{ color: "black", textAlign: "center" }}>Bali</p></a>
                                    </Link>
                                </div>
                                <div className="col-4 col-md-2 mb-2">
                                    <Link href='/international-tour-packages/maldives-tour-packages'>
                                        <a id='Section3_mob_click3'><img className='mb-1' style={{ borderRadius: "25px" }} src='/images/idealduration/maldives.png'></img>
                                            <p className='font-weight-bold' style={{ color: "black", textAlign: "center" }}>Maldives</p></a>
                                    </Link>

                                </div>
                                <div className="col-4 col-md-2 mb-2">
                                    <Link href='/india-tour-packages/andaman-tour-packages'>
                                        <a id='Section3_mob_click4'><img className='mb-1' style={{ borderRadius: "25px" }} src='/images/idealduration/Andaman.jpg'></img>
                                            <p className='font-weight-bold' style={{ color: "black", textAlign: "center" }}>Andaman</p></a>
                                    </Link>
                                </div>
                                <div className="col-4 col-md-2 mb-2">
                                    <Link href='/international-tour-packages/singapore-tour-packages'>
                                        <a id='Section3_mob_click5'><img className='mb-1' style={{ borderRadius: "25px" }} src='/images/idealduration/Singapore.png'></img>
                                            <p className='font-weight-bold' style={{ color: "black", textAlign: "center" }}>Singapore</p></a>
                                    </Link>
                                </div>
                                <div className="col-4 col-md-2 mb-2">
                                    <Link href='/india-tour-packages/kashmir-tour-packages'>
                                        <a id='Section3_mob_click6'><img className='mb-1' style={{ borderRadius: "25px" }} src='/images/idealduration/Kashmir.jpg'></img>
                                            <p className='font-weight-bold' style={{ color: "black", textAlign: "center" }}>Kashmir</p></a>
                                    </Link>
                                </div>
                                <div className="col-4 col-md-2 mb-2">
                                    <Link href='/international-tour-packages/thailand-tour-packages'>
                                        <a id='Section3_mob_click7'><img className='mb-1' style={{ borderRadius: "25px" }} src='/images/idealduration/Thailand.png'></img>
                                            <p className='font-weight-bold' style={{ color: "black", textAlign: "center" }}>Thailand</p></a>
                                    </Link>
                                </div>
                                <div className="col-4 col-md-2 mb-2">
                                    <Link href='/india-tour-packages/rajasthan-tour-packages'>
                                        <a id='Section3_mob_click8'><img className='mb-1' style={{ borderRadius: "25px" }} src='/images/idealduration/Rajasthan.jpg'></img>
                                            <p className='font-weight-bold' style={{ color: "black", textAlign: "center" }}>Rajasthan</p></a>
                                    </Link>
                                </div>
                                <div className="col-4 col-md-2 mb-2">
                                    <Link href='/international-tour-packages/vietnam-tour-packages'>
                                        <a id='Section3_mob_click9'><img className='mb-1' style={{ borderRadius: "25px" }} src='/images/idealduration/Vietnam.png'></img>
                                            <p className='font-weight-bold' style={{ color: "black", textAlign: "center" }}>Vietnam</p></a>
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </section>
                </div>


                <SwiperTypeofInterest></SwiperTypeofInterest>
              
                <SwiperEurope></SwiperEurope>
                <PopularPackage></PopularPackage>

                

                <section className="trending pb-2 pt-6" style={{ backgroundImage: "url(images/shape-1.png)", backgroundPosition: "center" }}>
                    <div className="container delightfulContainer" >
                        {/* <div className="section-title mb-6  mx-auto text-center">
                            <h3 className="mb-1" style={{ fontSize: "35px" }}>Choose from the <span className="theme">Best Destinations</span></h3>
                        </div> */}
                        <div className='container pt-3 text-center' style={{ backgroundColor: "#e0faee", borderRadius: "20px" }}>
                            <h3 className="mb-0 black" style={{ fontSize: "22px" }}>Holidays For Every</h3>
                            <h5 style={{ fontSize: "36px", fontFamily: "Satisfy",color:"#e53f32" }}>Budget</h5>

                            <div className="col-lg-12 web_padding pb-4 pt-1">
                                <div className="row budget_center ">

                                    <div className="col-6 col-md-2 mb-2">
                                        <Link href='/tour-packages-under-15000'>
                                            <a><img src='/images/budget/1.png' id='Section6_click1'></img></a>
                                        </Link>
                                    </div>
                                    <div className="col-6 col-md-2 mb-2">
                                        <Link href='/tour-packages-under-30000'>
                                            <a><img src='/images/budget/2.png'id='Section6_click2'></img></a>
                                        </Link>
                                    </div>
                                    <div className="col-6 col-md-2 mb-2">
                                        <Link href='/tour-packages-under-50000'>
                                            <a><img src='/images/budget/3.png' id='Section6_click3'></img></a>
                                        </Link>
                                    </div>
                                    <div className="col-6 col-md-2 mb-2">
                                        <Link href='/tour-packages-under-75000'>
                                            <a><img src='/images/budget/4.png' id='Section6_click4'></img></a>
                                        </Link>
                                    </div>
                                    <div className="col-6 col-md-2 mb-2">
                                        <Link href='/tour-packages-under-1-lakh'>
                                            <a><img src='/images/budget/5.png' id='Section6_click5'></img></a>
                                        </Link>
                                    </div>
                                    <div className="col-6 col-md-2 mb-2">
                                        <Link href='/tour-packages-under-4-lakh'>
                                            <a><img src='/images/budget/6.png' id='Section6_click6'></img></a>
                                        </Link>
                                    </div>
                                </div>

                            </div>
                            {/* <div className='my-content'  >
                                <div className='carouse_div animated.infinite'>
                                  <SlickPriceSlider></SlickPriceSlider>
                                </div>
                            </div> */}
                        </div>

                    </div>
                </section>
                <SwiperDomestic></SwiperDomestic>
                <section className="trending pb-4 pt-1" style={{ backgroundImage: "url(images/shape-1.png)", backgroundPosition: "center" }}>
                    <div className="container delightfulContainer" >
                        {/* <div className=" mb-2 mx-auto">
                            <h3 className="mb-1" style={{ fontSize: "20px" }}>Best <span className="theme">Travel Packages</span></h3>
                        </div> */}

                        <div className="trend-item1">
                            <div className="trend-image position-relative rounded">
                               <Link href='/contact'>
                                <img src='/images/a/Whyus1.jpg' />
                                </Link>
                                {/* <div className="color-overlay"></div> */}
                            </div>

                        </div>
                        
                    </div>
                </section>
                <SwiperDubai></SwiperDubai>
                <SwiperSoutheast></SwiperSoutheast>
                {/* <section className="trending pb-4 pt-1" style={{ backgroundImage: "url(images/shape-1.png)", backgroundPosition: "center" }}>
                    <div className="container delightfulContainer" >
                   
                        <div class="row">
                            <div class="col-md-6 order-md-6">

                                <img src="/vector.png" alt="Tripzygo" class="w-100" />
                            </div>
                            <div class="col-md-6 order-md-1">

                                <div class="row align-items-center h-70">
                                    <div class="row pt-2">
                                        <div class="col-lg-12 col-md-6 col-sm-6 mb-3">
                                            <div class="counter-item pe-4 d-flex align-items-center">
                                              
                                                <i class="fa fa-hand-pointer-o bg-theme p-3 rounded me-3 white  fa-2x"></i>
                                                <div class="counter-content">
                                                    <h4 class="mb-0">A Simple 'Hello'</h4>
                                                    <p class="m-0">Kickstart your travel plans by sending us your detailed query through our Website, or WhatsApp. </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-6 col-sm-6 mb-3">
                                            <div class="counter-item pe-4 d-flex align-items-center">
                                               
                                                <i class="fa fa-phone bg-theme p-3 rounded me-3 white  fa-2x"></i>

                                                <div class="counter-content">
                                                    <h4 class="mb-0">Let's Connect & Know You Better</h4>
                                                    <span class="m-0">Our team will reach out to discuss your preferences, ensuring we understand your travel aspirations. </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-6 col-sm-6 mb-3">
                                            <div class="counter-item pe-4 d-flex align-items-center">
                                                <i class="icon-clock bg-theme p-3 rounded me-3 white fa-2x"></i>
                                                <div class="counter-content">
                                                    <h4 class="mb-0">Packages Tailored Just for You</h4>
                                                    <span class="m-0">Together, we'll craft a personalized package just for you tailoring every detail to suit your preferences.</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-6 col-sm-6 mb-3">
                                            <div class="counter-item pe-4 d-flex align-items-center">
                                                
                                                <i class="fa fa-plane bg-theme p-3 rounded me-3 white  fa-2x"></i>

                                                <div class="counter-content">
                                                    <h4 class="mb-0">Taadaa! It's a Perfect Match</h4>
                                                    <span class="m-0">Sit back and relax as we handle the rest. With your bags packed start your dream journey now.</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>


                            </div>

                        </div>
                    </div>
                </section> */}
                <section className="trending pb-4 pt-1" style={{ backgroundImage: "url(images/shape-1.png)", backgroundPosition: "center" }}>
                    <div className="container delightfulContainer" >
                       

                        <div className="trend-item1 resp">
                            <div className="trend-image position-relative rounded">

                                <img src='/images/a/process.jpg' />

                                {/* <div className="color-overlay"></div> */}
                            </div>

                        </div>
                        <div className='my-content'  >
                        <div className="trend-item1">
                            <div className="trend-image position-relative rounded">

                                <img src='/images/a/processmobile.jpg' />

                                {/* <div className="color-overlay"></div> */}
                            </div>

                        </div>
                        </div>
                    </div>
                </section>


             


                {/* <Ourpartners /> */}
                <Ourblogs />

                {/* <section className="trending pb-4 pt-2" style={{ backgroundImage: "url(images/shape-1.png)", backgroundPosition: "center" }}>
                    <div className="container delightfulContainer" >
                        <div className="section-title mb-6 w-75 mx-auto text-center">
                            <h4 className="mb-1 theme1">Happy Travellers </h4>
                            <h2 className="mb-0">Client's <span className="theme">Testimonials</span></h2>
                          
                        </div>
                        <div className='container'>
                            <div class="testimonial">
                                <div class="container">
                                    <div class="testimonial__inner">
                                        <div class="testimonial-slider">
                                            <SlickNewTestimonial />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}

            </div>
        </div>

    )
}
