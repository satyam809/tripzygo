import React from "react";
import Link from "next/dist/client/link";
import { colors } from "@material-ui/core";



export default function Footer() {
    return (
        <div>
            <footer
                className="pt-4 pb-5"
                style={{ backgroundImage: "url(/images/background_pattern.webp)" }}
            >
                {/* <div class="insta-main pb-10">
          <div class="container">
            <div class="insta-inner">
           
              <div class="row attract-slider">
                <div class="col-md-3 col-sm-6">
                  <div class="insta-image rounded">
                    <a href="gallery.html"><img src="/shimla.webp" alt="insta" /></a>
                  </div>
                </div>
                <div class="col-md-3 col-sm-6">
                  <div class="insta-image rounded">
                    <a href="gallery.html"><img src="/shimla.webp" alt="insta" /></a>
                  </div>
                </div>
                <div class="col-md-3 col-sm-6">
                  <div class="insta-image rounded">
                    <a href="gallery.html"><img src="/shimla.webp" alt="insta" /></a>
                  </div>
                </div>
                <div class="col-md-3 col-sm-6">
                  <div class="insta-image rounded">
                    <a href="gallery.html"><img src="/shimla.webp" alt="insta" /></a>
                  </div>
                </div>
                <div class="col-md-3 col-sm-6">
                  <div class="insta-image rounded">
                    <a href="gallery.html"><img src="/shimla.webp" alt="insta" /></a>
                  </div>
                </div>
                <div class="col-md-3 col-sm-6">
                  <div class="insta-image rounded">
                    <a href="gallery.html"><img src="/shimla.webp" alt="insta" /></a>
                  </div>
                </div>
                <div class="col-md-3 col-sm-6">
                  <div class="insta-image rounded">
                    <a href="gallery.html"><img src="/shimla.webp" alt="insta" /></a>
                  </div>
                </div>
                <div class="col-md-3 col-sm-6">
                  <div class="insta-image rounded">
                    <a href="gallery.html"><img src="/shimla.webp" alt="insta" /></a>
                  </div>
                </div>
                <div class="col-md-3 col-sm-6">
                  <div class="insta-image rounded">
                    <a href="gallery.html"><img src="/shimla.webp" alt="insta" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
                {/* <ul class="menu">
          <li class="menu__item"><a class="menu__link" href="#">Dubai Tour Packages</a></li>
          <li class="menu__item"><a class="menu__link" href="#">Kerala Tour Packages</a></li>
          <li class="menu__item"><a class="menu__link" href="#">Bali Tour Packages</a></li>
          <li class="menu__item"><a class="menu__link" href="#">Maldives Tour Packages</a></li>
          <li class="menu__item"><a class="menu__link" href="#">Thailand Tour Packages</a></li>
          <li class="menu__item"><a class="menu__link" href="#">Shimla Tour Packages</a></li>


        </ul> */}
                <div className="footer-upper pb-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-12 pe-4 mb-2">
                                <div className="footer-about">
                                    <img src="/logo1.webp" alt="tripzygo" style={{ height: "35px" }} />
                                    {/* <img src="/logo 2.png" alt="tripzygo" style={{ height: "50px" }} /> */}

                                    <br />
                                    <br />

                                    <ul>
                                        <li className="white">

                                            <a href="https://wa.me/+917814694248?text=Hi"><i className="fab fa-whatsapp " style={{ fontSize: "18px" }} white aria-hidden="true"></i>&nbsp;&nbsp; +91 78146-94248</a>
                                        </li>
                                        <br />
                                        <a href="tel: +91 74940-09400"><li className="white">
                                            <i className="fa fa-phone white fa-rotate-90"></i> &nbsp;
                                            +91 74940-09400
                                        </li></a>
                                        <br />

                                        <li className="white">
                                            <i className="fa fa-map-marker-alt white"></i> &nbsp;
                                            &nbsp; H.Q. - 4th floor Pratibha Tower,  South City 1,  Sector 41 Gurgaon, Haryana 122022
                                        </li>
                                        <br />
                                        {/* <li className="white">
                                            <i className="fa fa-map-marker-alt white"></i> &nbsp;
                                            &nbsp; H.Q. - Office No 336-37-38, Tricity Plaza, Peer Muchalla, Zirakpur, Punjab -140603
                                        </li>
                                        <br /> */}

                                        <li className="white"><a href="mailto:info@tripzygo.in">
                                            <i className="fa fa-envelope white"></i> &nbsp; &nbsp;
                                            info@tripzygo.in</a>
                                        </li>
                                        <br />

                                    </ul>
                                </div>
                            </div>

                            <div className="container col-lg-8 col-md-5 d-flex p-0 mx-0">
                                <div className="col-lg-4 col-sm-6 ">
                                    <div className="footer-links">
                                        <h3 className="white">Quick links</h3>
                                        <ul>
                                            <li>
                                                <Link href="/about">
                                                    <a>About Us</a>
                                                </Link>
                                            </li>

                                            <li>
                                                {" "}
                                                <Link href="/privacy-policy">
                                                    <a>Privacy Policy</a>
                                                </Link>
                                            </li>
                                            <li>
                                                {" "}
                                                <Link href="/terms-conditions">
                                                    <a>Terms &amp; Conditions</a>
                                                </Link>
                                            </li>
                                            <li>
                                                {" "}
                                                <Link href="/cancellation-policy">
                                                    <a>Cancellation Policy</a>
                                                </Link>
                                            </li>
                                            <li>
                                                {" "}
                                                <Link href="/payment">
                                                    <a>Payment Details</a>
                                                </Link>
                                            </li>
                                            <li>
                                                {" "}
                                                <Link href="/visa">
                                                    <a>Visa</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="footer-links">
                                        <h3 className="white">Tours</h3>
                                        <ul className="mb-1">

                                            <li>
                                                <Link href="/india-tour-packages/shimla-tour-packages">
                                                    <a>Shimla</a>
                                                </Link>
                                            </li>

                                            <li>
                                                <Link href="/international-tour-packages/bali-tour-packages">
                                                    <a>Bali</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/international-tour-packages/thailand-tour-packages">
                                                    <a>Thailand</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/international-tour-packages/japan-tour-packages">
                                                    <a>Japan</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/india-tour-packages/manali-tour-packages">
                                                    <a>Manali</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/international-tour-packages/vietnam-tour-packages">
                                                    <a>Vietnam</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/international-tour-packages/amsterdam-tour-packages">
                                                    <a>Amsterdam</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="footer-links">
                                        <h3 className="white">Categories</h3>
                                        <ul className="mb-1">

                                            <li>
                                                <Link href="/packages">
                                                    <a>Packages</a>
                                                </Link>
                                            </li>

                                            <li>
                                                <Link href="/blogs">
                                                    <a>Blogs</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/contact">
                                                    <a>Contact</a>
                                                </Link>
                                            </li>

                                        </ul>
                                        <img src="/iata logo.webp" alt="IATA accredited" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-upper pb-0">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-5 col-sm-12 pe-4 mb-2">
                <div className="footer-about">
                <div className="footer-links">
                    <h3 className="white">India Tour Packages</h3>
                    <a href="/india-tour-packages/andaman-tour-packages" target="_blank">Andaman Tour Packages</a> | <a href="/india-tour-packages/auli-tour-packages" target="_blank">Auli Tour Packages</a> | <a href="/india-tour-packages/dehradun-tour-packages" target="_blank">Dehradun Tour Packages</a> | <a href="/india-tour-packages/gangtok-tour-packages" target="_blank">Gangtok Tour Packages</a> | <a href="/india-tour-packages/goa-tour-packages" target="_blank">Goa Tour Packages</a> | <a href="/india-tour-packages/himachal-tour-packages" target="_blank">Himachal Pradesh Tour Packages</a> | <a href="/india-tour-packages/jaipur-tour-packages" target="_blank">Jaipur Tour Packages</a> | <a href="/india-tour-packages/jaisalmer-tour-packages" target="_blank">Jaisalmer Tour Packages</a> | <a href="/india-tour-packages/jim-corbett-tour-packages" target="_blank">Jim Corbett Tour Packages</a> | <a href="/india-tour-packages/jodhpur-tour-packages" target="_blank">Jodhpur Tour Packages</a> | <a href="/india-tour-packages/kashmir-tour-packages" target="_blank">Kashmir Tour Packages</a> | <a href="/india-tour-packages/kedarnath-tour-packages" target="_blank">Kedarnath Tour Packages</a> | <a href="/india-tour-packages/kerala-tour-packages" target="_blank">Kerala Tour Packages</a> | <a href="/india-tour-packages/leh-ladakh-tour-packages" target="_blank">Ladakh Tour Packages</a> | <a href="/india-tour-packages/manali-tour-packages" target="_blank">Manali Tour Packages</a> | <a href="/india-tour-packages/meghalaya-tour-packages" target="_blank">Meghalaya Tour Packages</a> | <a href="/india-tour-packages/mount-abu-tour-packages" target="_blank">Mount Abu Tour Packages</a> | <a href="/india-tour-packages/mussoorie-tour-packages" target="_blank">Mussoorie Tour Packages</a> | <a href="/india-tour-packages/nainital-tour-packages" target="_blank">Nainital Tour Packages</a> | <a href="/india-tour-packages/rajasthan-tour-packages" target="_blank">Rajasthan Tour Packages</a> | <a href="/india-tour-packages/shimla-tour-packages" target="_blank">Shimla Tour Packages</a> | <a href="/india-tour-packages/sikkim-tour-packages" target="_blank">Sikkim Tour Packages</a> | <a href="/india-tour-packages/srinagar-tour-packages" target="_blank">Srinagar Tour Packages</a> | <a href="/india-tour-packages/udaipur-tour-packages" target="_blank">Udaipur Tour Packages</a> | <a href="/india-tour-packages/uttarakhand-tour-packages" target="_blank">Uttarakhand Tour Packages</a> | <a href="/india-tour-packages/gulmarg-tour-packages" target="_blank">Gulmarg Tour Packages</a>

                    
                  </div>
                  <div className="gap"></div>
                  <div className="footer-links">
                    <h3 className="white">International Tour Packages</h3>
                    <a href="/international-tour-packages/amsterdam-tour-packages" target="_blank">Amsterdam Tour Packages</a> | <a href="/international-tour-packages/austria-tour-packages" target="_blank">Austria Tour Packages</a> | <a href="/international-tour-packages/bali-tour-packages" target="_blank">Bali Tour Packages</a> | <a href="/international-tour-packages/bangkok-tour-packages" target="_blank">Bangkok Tour Packages</a> | <a href="/international-tour-packages/cairo-tour-packages" target="_blank">Cairo Tour Packages</a> | <a href="/international-tour-packages/czech-republic-tour-packages" target="_blank">CZech Republic Tour Packages</a> | <a href="/international-tour-packages/dubai-tour-packages" target="_blank">Dubai Tour Packages</a> | <a href="/international-tour-packages/egypt-tour-packages" target="_blank">Egypt Tour Packages</a> | <a href="/international-tour-packages/europe-tour-packages" target="_blank">Europe Tour Packages</a> | <a href="http://www.tripzygo.in/international-tour-packages/france-tour-packages" target="_blank">France Tour Packages</a> | <a href="/international-tour-packages/germany-tour-packages" target="_blank">Germany Tour Packages</a> | <a href="/international-tour-packages/greece-tour-packages" target="_blank">Greece Tour Packages</a> | <a href="/international-tour-packages/hungary-tour-packages" target="_blank">Hungary Tour Packages</a> | <a href="/international-tour-packages/iceland-tour-packages" target="_blank">Iceland Tour Packages</a> | <a href="/international-tour-packages/italy-tour-packages" target="_blank">Italy Tour Packages</a> | <a href="/international-tour-packages/krabi-tour-packages" target="_blank">Krabi Tour Packages</a> | <a href="/international-tour-packages/london-tour-packages" target="_blank">London Tour Packages</a> | <a href="/international-tour-packages/malaysia-tour-packages" target="_blank">Malaysia Tour Packages</a> | <a href="/international-tour-packages/maldives-tour-packages" target="_blank">Maldives Tour Packages</a> | <a href="/international-tour-packages/netherlands-tour-packages" target="_blank">Netherlands Tour Packages</a> | <a href="/international-tour-packages/norway-tour-packages" target="_blank">Norway Tour Packages</a> | <a href="/international-tour-packages/paris-tour-packages" target="_blank">Paris Tour Packages</a> | <a href="/international-tour-packages/pattaya-tour-packages" target="_blank">Pattaya Tour Packages</a> | <a href="/international-tour-packages/phuket-tour-packages" target="_blank">Phuket Tour Packages</a> | <a href="/international-tour-packages/singapore-tour-packages" target="_blank">Singapore Tour Packages</a> | <a href="/international-tour-packages/singapore-tour-packages" target="_blank">Spain Tour Packages</a> | <a href="/international-tour-packages/spain-tour-packages" target="_blank">Switzerland Tour Packages</a> | <a href="/international-tour-packages/thailand-tour-packages" target="_blank">Thailand Tour Packages</a> | <a href="/international-tour-packages/turkey-tour-packages" target="_blank">Turkey Tour Packages</a> | <a href="/international-tour-packages/united-kingdom-tour-packages" target="_blank">United Kingdom Tour Packages</a> | <a href="/international-tour-packages/vietnam-tour-packages" target="_blank">Vietnam Tour Packages</a> | <a href="/international-tour-packages/east-europe-tour-packages" target="_blank">East Europe Tour Packages</a> | <a href="/international-tour-packages/japan-tour-packages" target="_blank">Japan Tour Packages</a>

                  </div>
              
                </div>
                
              </div>

              
            </div>
          </div>
        </div>

                <div className="footer-copyright">
                    <div className="container">
                        <div className="copyright-inner rounded p-3 d-md-flex align-items-center justify-content-between">
                            <img
                                src="/images/footer/footer_card1.webp"
                                style={{ height: "40px" }}
                                alt="Best tour packages"
                            />

                            <div className="copyright-text ">
                                <div className="m-0 white">
                                    2023 TripzyGo. All rights reserved.
                                </div>
                            </div>
                            <div className="social-links">
                                <ul>
                                    <li>
                                        <a
                                            href="https://www.facebook.com/tripzygo"
                                            target="_blank"
                                            className="white"
                                        >
                                            <i className="fab fa-facebook" aria-hidden="true"></i>
                                        </a>
                                    </li>
                                    &nbsp;
                                    <li>
                                        <a
                                            href="https://in.pinterest.com/TripzyGo/"
                                            target="_blank"
                                            className="white"
                                        >
                                            <i className="fab fa-pinterest" aria-hidden="true"></i>
                                        </a>
                                    </li>
                                    &nbsp;
                                    <li>
                                        <a
                                            href="https://www.instagram.com/tripzygo.official/"
                                            target="_blank"
                                            className="white"
                                        >
                                            <i className="fab fa-instagram" aria-hidden="true"></i>
                                        </a>
                                    </li>
                                    &nbsp;
                                    <li>
                                        <a
                                            href="https://www.linkedin.com/company/81812786/admin/"
                                            target="_blank"
                                            className="white"
                                        >
                                            <i className="fab fa-linkedin " aria-hidden="true"></i>
                                        </a>
                                    </li>
                                    &nbsp;
                                    <li>
                                        <a
                                            href="https://www.youtube.com/@travelwithtripzygo"
                                            target="_blank"
                                            className="white"
                                        >
                                            <i className="fab fa-youtube" aria-hidden="true"></i>
                                        </a>
                                    </li>
                                    &nbsp;
                                    <li>
                                        <a
                                            href="https://twitter.com/tripzy_go"
                                            target="_blank"
                                            className="white"
                                        >
                                            <i className="fab fa-twitter" aria-hidden="true"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>



                <div id="particles-js"></div>
            </footer>

            {/* <div id="back-to-top">
        <a href="#"></a>
      </div> */}

            {/* <div class="wrapper">
                <div id="main-div">
                    <div id="main-button" class="wave">
                        <i class="fas fa-comments "></i>
                    </div>
                    <Link href="/contact"><button><img src="/images/user-headset-support.png" style={{ height: "15px", marginRight: "5px" }}></img>Free Consultation&nbsp;</button></Link>
                    <a href="mailto:info@tripzygo.in" class="telegram-color"><i class="fas fa-envelope"></i></a>
                    <a href="https://wa.me/+919988449074" class="whatsapp-color"><i class="fab fa-whatsapp"></i></a>
                    <a href="tel: +91 74940-09400" class="messenger-color"><i class="fas fa-phone-alt"></i></a>
                </div>
            </div> */}
        </div >
    );
}
