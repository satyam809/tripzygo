import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import SearchData from "../SearchBar/searchbar.json";
import SearchBar from "../SearchBar/SearchBar";
// import SearchBarHeader from "../SearchBar/SearchBarHeader";
import { colors } from '@material-ui/core';
import GrouptourHeasder from "../../components/GrouptourHeasder";


export default function Header() {
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => {
        setIsVisible(!isVisible);
      };
      useEffect(() => {
        // Function to close the menu
        function closeMenu() {
          menu.style.top = '-100%'; // Close the menu
        }
    
        // Function to handle scroll events
        function handleScroll() {
          if (window.scrollY > 0) {
            // User is scrolling down, close the menu
            closeMenu();
          }
        }
    
        // Get references to the menu icon, menu, and header
        const menuIcon = document.getElementById('menu-icon');
        const menu = document.getElementById('header_menu');
        const header = document.querySelector('.main_header_area');
    
        // Add a click event listener to toggle the menu
        if (menuIcon) {
          menuIcon.addEventListener('click', function () {
            if (menu.style.top === '0px') {
              // Close the menu
              closeMenu();
            } else {
              // Open the menu
              menu.style.top = '0';
            }
          });
        }
    
        // Add a scroll event listener to the window
        window.addEventListener('scroll', handleScroll);
    
        // Add a scroll event listener to the header to close the menu when scrolled up
        if (header) {
          header.addEventListener('scroll', function () {
            if (window.scrollY === 0) {
              // User has scrolled back to the top, close the menu
              closeMenu();
            }
          });
        }
    
        // Initial call to handleScroll to close the menu if the user starts at a scrolled position
        handleScroll();
      }, []);

      
    return (
        <>

            <header className="main_header_area">
                {/* <div className="header-content py-1 bg-theme">
                    <div className="container d-flex align-items-center justify-content-between">
                        <div className="links">
                            <ul>
                                <li><a href="#" className="white"><i className="icon-calendar white"></i> Thursday, Mar 26, 2021</a>
                        </li>
                                <li><a href="mailto:info@tripzygo.in"><span className="white" style={{ fontSize: "12px" }}><i className="icon-envelope white"></i>&nbsp;&nbsp;Info@tripzygo.in</span ></a></li>

                                <li><a href="tel: +91 74940-09400"><span className="white" style={{ fontSize: "12px" }}><i className="fa fa-phone white fa-rotate-90 icon-phone trin-trin" ></i>&nbsp;&nbsp; +91 74940-09400</span ></a>
                                </li>
                                <li><a href="tel: +91 74940-09400" class="phone">
                                    <svg id="phone" x="0px" y="0px" viewBox="0 0 82 82"  >

                                        <path d="M64.5,78.2c1.7-1.9,3.6-3.6,5.4-5.4c2.6-2.7,2.7-5.9,0-8.6c-3.1-3.2-6.3-6.3-9.4-9.4
							c-2.6-2.6-5.8-2.6-8.4,0c-2,1.9-3.9,3.9-5.9,5.9c-0.1,0.1-0.3,0.2-0.4,0.3l-1.3,1.3c-0.4,0.2-0.7,0.2-1.2,0
							c-1.3-0.7-2.6-1.2-3.8-2c-5.7-3.6-10.5-8.2-14.7-13.4c-2.1-2.6-4-5.3-5.3-8.4c-0.2-0.5-0.2-0.9,0.1-1.3l1.3-1.3
							c0.1-0.1,0.1-0.2,0.2-0.3c0.6-0.6,1.2-1.1,1.8-1.7c1.4-1.3,2.7-2.7,4.1-4.1c2.7-2.7,2.7-5.9,0-8.6c-1.5-1.5-3.1-3.1-4.6-4.6
							c-1.6-1.6-3.2-3.2-4.8-4.8c-2.6-2.5-5.8-2.5-8.4,0c-2,1.9-3.9,3.9-5.9,5.9c-1.9,1.8-2.8,3.9-3,6.5c-0.3,4.1,0.7,8,2.1,11.8
							C5.2,43.8,9.6,50.7,15,57.1c7.2,8.6,15.9,15.4,26,20.4c4.6,2.2,9.3,3.9,14.4,4.2C58.9,81.8,62,81,64.5,78.2z"></path>
                                        <path d="M41.1,15.7
							c-0.7,0-1.5,0.1-2.2,0.4c-1.7,0.8-2.5,2.8-2,4.8c0.4,1.8,2,3,3.9,3c4.6,0.1,8.6,1.5,12,4.6c3.7,3.4,5.4,7.7,5.6,12.8
							c0,0.9,0.4,1.9,0.9,2.6c1.1,1.5,3,1.9,4.8,1.2c1.6-0.6,2.5-2,2.5-3.9c-0.1-7-2.6-12.9-7.5-18.1C54.1,18.4,48.1,15.8,41.1,15.7z"></path>
                                        <path d="M69,11.4c8.5,8.7,12.5,18.1,12.8,29.1c0.1,2.5-1.5,4.2-3.9,4.3c-2.6,0.1-4.3-1.4-4.4-4c-0.1-5.4-1.4-10.5-4-15.2
							C63.5,14.9,54.2,9.3,42,8.6c-1.4-0.1-2.6-0.2-3.6-1.3c-1.2-1.4-1.3-3-0.7-4.6c0.7-1.6,2-2.4,3.8-2.4c8,0.1,15.3,2.4,22,6.8
         C65.7,8.6,67.8,10.4,69,11.4z"></path>
                                    </svg>
                                    <span className="white">+91 74940-09400</span>
                                </a></li>
                                <li className="white"><i className="fa fa-phone white fa-rotate-90"></i> &nbsp;&nbsp;   +91 99884-49074</li><br/>

                                <li><span  className="white" style={{fontSize:"12px"}}>Sorry, we are under maintenance but we will be back shortly. For any queries, fill this contact form.</span >
                        </li>
                            </ul>
                        </div>
                        <div className="links float-right">
                            <ul>
                                <li><a href="https://wa.me/message/2QJMLO6UUTMHE1" target="_blank" className="white"><i className="fab fa-whatsapp" aria-hidden="true"></i></a></li>
                                <li><a href="https://www.instagram.com/tripzygo.official/" target="_blank" className="white"><img src='/images/social_icons/instagram.png' style={{ height: "20px" }}></img></a></li>

                                <li><a href="https://www.facebook.com/tripzygo" target="_blank" className="white"><img src='/images/social_icons/fb.png' style={{ height: "23px" }}></img></a></li>
                                <li><a href="https://www.linkedin.com/company/81812786/admin/" target="_blank" className="white"><img src='/images/social_icons/linkedin_145807.png' style={{ height: "20px" }}></img></a></li>
                                <li><a href="https://twitter.com/tripzy_go" target="_blank" className="white"><img src='/images/social_icons/twitter_3670151.png' style={{ height: "20px" }}></img></a></li>

                                <li><a href="https://www.youtube.com/@travelwithtripzygo" target="_blank" className="white"><img src='/images/social_icons/youtube_4494485.png' style={{ height: "20px" }}></img></a></li>
                                <li><a href="https://in.pinterest.com/TripzyGo/" target="_blank" className="white"><img src='/images/social_icons/pinterest_145808.png' style={{ height: "20px" }}></img></a></li>

                            </ul>
                        </div>
                    </div>
                </div> */}

                <div className="header_menu" id="header_menu">
                    <nav className="navbar navbar-default">
                        <div className="container">
                            <div className="navbar-flex d-flex align-items-right justify-content-between w-100 pb-2 pt-2" style={{ height: "68px" }} >

                                <div className="navbar-header ">
                                    <a className="navbar-brand" href="/">
                                        <img src="/logo.webp" alt="tripzygo" style={{ height: "25px" }} id='header_home' />
                                        {/* <img src="/logo 1.png" alt="tripzygo" style={{ height: "30px" }} /> */}

                                    </a>
                                </div>
                                {/* <div className='my-content'  >
                                <div className='carouse_div animated.infinite' style={{padding:"5px"}}>
                                <div className="navbar-header" style={{display:"flex"}}>
                                    <a className="navbar-brand" href="/">
                                        <img src="/logo.webp" alt="tripzygo" style={{ height: "19px" }} id='header_home' />
                                        
                                
                                    </a>&nbsp;&nbsp;&nbsp;&nbsp;
                                    <a id='header_phone_click' href="tel: +91 74-9400-9400"><span  style={{ fontSize: "18px", color:"#0d4980" , fontWeight:"bold"}}> +91 74940-09400</span ></a>
                                </div>
                                </div>
                            </div> */}
                                

                                <div className="navbar-collapse1 d-flex align-items-center" id="bs-example-navbar-collapse-1">
                                    <ul className="nav navbar-nav" id="responsive-menu">
                                        <li className="dropdown submenu active">
                                            <Link href="/" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                                <a>Home</a>
                                            </Link>

                                        </li>

                                        {/* <li><a href="about.html">About Us</a></li> */}
                                        <li class="submenu dropdown">
                                            <div class="dropdown-toggle navbarTourFix" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">PACKAGES</div>
                                            <ul class="dropdown-menu">
                                                 <li className="submenu dropdown">
                                            {/* <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Tours <i className="icon-arrow-down" aria-hidden="true"></i></a>  */}
                                            {/* <Link href="/packages" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                                <a>Packages </a>
                                            </Link> */}
                                                    <Link href="/india-tour-packages" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                                        <a>Domestic</a>

                                                    </Link>
                                                    <Link href="/international-tour-packages" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                                        <a>International</a>

                                                    </Link>

                                        </li>
                                                {/* <li class="submenu dropdown">
                                                    <a href="/india-tour-packages" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Domestic<i class="fa fa-angle-right" aria-hidden="true"></i></a>
                                                    <Link href="/india-tour-packages" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                                        <a>Domestic<i class="fa fa-angle-right" aria-hidden="true"></i></a>

                                                    </Link>
                                                    <ul class="dropdown-menu">
                                                        <li><a href="/india-tour-packages/kerala-tour-packages">Kerala</a></li>

                                                        <li><a href="/india-tour-packages/kashmir-tour-packages">Kashmir</a></li>
                                                        <li><a href="/india-tour-packages/goa-tour-packages">Goa</a></li>

                                                        <li><a href="/india-tour-packages/himachal-tour-packages">Himachal</a></li>
                                                        <li><a href="/">Chardham</a></li>

                                                        <li><a href="/india-tour-packages">View All</a></li>
                                                    </ul>
                                                </li> */}
                                                {/* <li class="submenu dropdown">
                                                    <a href="/international-tour-packages" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">International<i class="fa fa-angle-right" aria-hidden="true"></i></a>
                                                    <Link href="/international-tour-packages" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                                        <a>International<i class="fa fa-angle-right" aria-hidden="true"></i></a>

                                                    </Link>
                                                    <ul class="dropdown-menu">
                                                        <li><a href="/international-tour-packages/europe-tour-packages">Europe</a></li>
                                                        <li><a href="/international-tour-packages/turkey-tour-packages">Turkey</a></li>
                                                        <li><a href="/international-tour-packages/bali-tour-packages" >Bali</a></li>

                                                        <li><a href="/international-tour-packages/dubai-tour-packages">Dubai</a></li>
                                                        <li><a href="/international-tour-packages/thailand-tour-packages">Thailand</a></li>

                                                        <li><a href="/international-tour-packages/singapore-tour-packages">Singapore</a></li>
                                                        <li><a href="/international-tour-packages/maldives-tour-packages">Maldives</a></li>
                                                        <li><a href="/international-tour-packages/malaysia-tour-packages">Malaysia</a></li>


                                                        <li><a href="/international-tour-packages">View All</a></li>
                                                    </ul>
                                                </li> */}

                                            </ul>
                                        </li>

                                        {/* <li className="submenu dropdown">
                                            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Tours <i className="icon-arrow-down" aria-hidden="true"></i></a> 
                                            <Link href="/packages" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                                <a>Packages </a>
                                            </Link>

                                        </li> */}

                                        <li className="submenu dropdown">
                                            {/* <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Pages <i className="icon-arrow-down" aria-hidden="true"></i></a>  */}
                                            <Link href="/blogs" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                                <a>Blogs </a>
                                            </Link>

                                        </li>
                                        {/* <li className="submenu dropdown">
                                            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Pages <i className="icon-arrow-down" aria-hidden="true"></i></a> 

                                            <Link href="/visa" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                                <a> Visa</a>
                                                <sup><span class="badge badge-danger blink_me">New</span></sup>
                                            </Link>

                                        </li> */}
                                        <li className="submenu dropdown">
                                            {/* <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Pages <i className="icon-arrow-down" aria-hidden="true"></i></a>  */}

                                            {/* <Link href="/" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                                <a>Group Enquiry<sup><span class="badge badge-danger blink_me">New</span></sup></a>
                                            </Link> */}
                                                
                                            <GrouptourHeasder buttonLabel="&nbsp;GROUP ENQUIRY" props3="Group Enquiry" props1="Group Tour" label="Perfect Group Travel Starts Here!"></GrouptourHeasder>


                                        </li>&nbsp;&nbsp;
                                        
                                        <Link href="/itenarybuilder" style={{ textTransform: 'uppercase' }}>
                                                Itenary Builder
                                            </Link>
                                        <li>
                                        {/* {isVisible && <input type="text" visible="false" className='form-control' placeholder="Search Destination" style={{width:"100%"}} autoFocus onBlur={toggleVisibility}></input>} */}
                                        {/* <SearchBarHeader visible="false" className='form-control' toggleVisibility={toggleVisibility}></SearchBarHeader> */}

                                        </li>
                                        {/* <li className="submenu dropdown">

                                            <Link href="/about">
                                                <a className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">About</a>

                                            </Link>

                                        </li> */}

                                        {/* <li className="submenu dropdown">
                                            <a href="contact" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Contact</a> 
                                            <Link href="/contact" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                                <a>Contact Us</a>
                                            </Link>

                                        </li> */}
                                        {/* <li className="search-main"><a href="#search1" className="mt_search"><i className="fa fa-search"></i></a></li> */}
                                        {/* <SearchBar placeholder="Search Destination" data={SearchData} /> */}
                                        {/* <div class="containerser">
  <input type="text" placeholder="Search..."/>
  <div class="search"></div>
</div> */}
                                    </ul>
                                    

                                </div>


                                <div id="slicknav-mobile"></div>
                            </div>
                        </div>
                    </nav>
                </div>

            </header>

        </>
    )
}


