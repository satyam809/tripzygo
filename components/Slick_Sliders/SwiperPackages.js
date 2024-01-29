// import React, { useRef, useState } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/free-mode';
// import 'swiper/css/pagination';


// // import required modules
// import { FreeMode, Pagination } from 'swiper/modules';

// export default function App() {
//   return (
//     <>

//       <section class="trending pb-0">
//         <div class="container">
//             <div class="row justify-content-between mb-6 ">
//                 <div class="col-lg-7">
//                     <div class="section-title text-lg-start">
//                       <h3 className="mb-1" style={{ fontSize: "20px", color: "black" }}>Top Best-Rated Packages</h3>
//                     </div>
//                 </div>

//             </div>
//             <div class="trend-box resp">
//                 <div class="row item-slider">
//                 <Swiper
//                 slidesPerView={3.5}
//                 spaceBetween={10}
//                 freeMode={true}
//                 // pagination={{
//                 //   clickable: true,
//                 // }}
//                 modules={[FreeMode, Pagination]}
//                 className="mySwiper"
//               >
//                 <SwiperSlide>
//                 <div class="col-lg-12 col-md-6 col-sm-6 mb-4">
//                         <div class="trend-item rounded box-shadow">
//                             <div class="trend-image position-relative">
//                                 <img src="images/homepackage/Austria.jpg" alt="image" class=""/>
//                                 {/* <div class="color-overlay"></div> */}
//                             </div>
//                             <div class="trend-content p-4 pt-2 position-relative">
//                                 {/* <div class="trend-meta bg-theme white px-3 py-2 rounded">
//                                     <div class="entry-author">
//                                         <i class="icon-calendar"></i>
//                                         <span class="fw-bold"> 9 Days Tours</span>
//                                     </div>
//                                 </div> */}
//                                 <h5 class="theme mb-1"><i class="flaticon-location-pin"></i>East Europe</h5>
//                                 <h3 class="mb-1 packageheading"><a href="https://www.tripzygo.in/package/1620-relaxing-east-europe-group-tour-6n-7d-all-inclusive-with-indian-meals" target='_blank'>East Europe Group Tour | 6N & 7D | All Inclusive with Indian Meals</a></h3>
//                                 {/* <div class="rating-main d-flex align-items-center pb-2">
//                                     <div class="rating">
//                                         <span class="fa fa-star checked"></span>
//                                         <span class="fa fa-star checked"></span>
//                                         <span class="fa fa-star checked"></span>
//                                         <span class="fa fa-star checked"></span>
//                                         <span class="fa fa-star checked"></span>
//                                     </div>
//                                     <span class="ms-2">(12)</span>
//                                 </div>
//                                 <p class=" border-b pb-2 mb-2">Duis aute irure dolor in reprehenderit in voluptate velit
//                                     esse cillum</p> */}
//                                 <div class="entry-meta">
//                                     <div class="entry-author d-flex align-items-center">
//                                         <p class="mb-0"><span class="theme fw-bold fs-7"><i class="fa fa-inr"></i> 1,04,999/-</span> Per Pax 
//                                         </p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </SwiperSlide>
//                 <SwiperSlide>
//                 <div class="col-lg-12 col-md-6 col-sm-6 mb-4">
//                         <div class="trend-item box-shadow rounded">
//                             <div class="trend-image position-relative">
//                                 <img src="images/homepackage/Bali.jpg" alt="image"/>
//                                 {/* <div class="color-overlay"></div> */}
//                             </div>
//                             <div class="trend-content p-4 pt-2 position-relative">

//                                 <h5 class="theme mb-1"><i class="flaticon-location-pin"></i>Bali</h5>
//                                 <h5 class="mb-1 packageheading" ><a href="https://www.tripzygo.in/package/1508-discover-bali-with-friends-7-day-exclusive-discount-package" target='_blank'>Discover Bali with Friends: 7-Day Exclusive Discount Package</a></h5>


//                                 <div class="entry-meta">
//                                     <div class="entry-author d-flex align-items-center">
//                                         <p class="mb-0"><span class="theme fw-bold fs-7"> <i class="fa fa-inr"></i> 30,000/-</span> Per Pax 
//                                         </p>
//                                     </div>
//                                 </div>

//                             </div>
//                         </div>
//                     </div>
//                 </SwiperSlide>

//                 <SwiperSlide>
//                 <div class="col-lg-12 col-md-6 col-sm-6 mb-4">
//                         <div class="trend-item box-shadow rounded">
//                             <div class="trend-image position-relative">
//                                 <img src="images/homepackage/Dubai.jpg" alt="image"/>
//                                 {/* <div class="color-overlay"></div> */}
//                             </div>
//                             <div class="trend-content p-4 pt-2 position-relative">
//                                 {/* <div class="trend-meta bg-theme white px-3 py-2 rounded">
//                                     <div class="entry-author">
//                                         <i class="icon-calendar"></i>
//                                         <span class="fw-bold"> 9 Days Tours</span>
//                                     </div>
//                                 </div> */}
//                                 <h5 class="theme mb-1"><i class="flaticon-location-pin"></i>Dubai</h5>
//                                 <h3 class="mb-1 packageheading" ><a href="https://www.tripzygo.in/package/1585-explore-dubai-in-style-a-7-day-tour-with-atlantis-stay" target='_blank'>Explore Dubai in Style: A 7-Day Tour with Atlantis Stay</a></h3>
//                                 {/* <div class="rating-main d-flex align-items-center pb-2">
//                                     <div class="rating">
//                                         <span class="fa fa-star checked"></span>
//                                         <span class="fa fa-star checked"></span>
//                                         <span class="fa fa-star checked"></span>
//                                         <span class="fa fa-star checked"></span>
//                                         <span class="fa fa-star checked"></span>
//                                     </div>
//                                     <span class="ms-2">(18)</span>
//                                 </div> */}
//                                 {/* <p class=" border-b pb-2 mb-2">Duis aute irure dolor in reprehenderit in voluptate velit
//                                     esse cillum</p> */}
//                                 <div class="entry-meta">
//                                     <div class="entry-author d-flex align-items-center">
//                                         <p class="mb-0"><span class="theme fw-bold fs-7"> <i class="fa fa-inr"></i> 49,999</span> Per Pax 
//                                         </p>
//                                     </div>
//                                 </div>

//                             </div>
//                         </div>
//                     </div>
//                 </SwiperSlide>
//                 <SwiperSlide>
//                 <div class="col-lg-12 col-md-6 col-sm-6 mb-4">
//                         <div class="trend-item box-shadow rounded">
//                             <div class="trend-image position-relative">
//                                 <img src="images/homepackage/Kashmir.jpg" alt="image"/>
//                                 {/* <div class="color-overlay"></div> */}
//                             </div>
//                             <div class="trend-content p-4 pt-2 position-relative">
//                                 {/* <div class="trend-meta bg-theme white px-3 py-2 rounded">
//                                     <div class="entry-author">
//                                         <i class="icon-calendar"></i>
//                                         <span class="fw-bold"> 5 Days Tours</span>
//                                     </div>
//                                 </div> */}
//                                 <h5 class="theme mb-1"><i class="flaticon-location-pin"></i>Kashmir</h5>
//                                 <h3 class="mb-1 packageheading" ><a href="https://www.tripzygo.in/package/1486-kashmir-couples-escape-6-nights-of-scenic-beauty" target='_blank'>Kashmir Couple's Escape: 6 Nights & 7 Days of Scenic Beauty</a></h3>
//                                 {/* <div class="rating-main d-flex align-items-center pb-2">
//                                     <div class="rating">
//                                         <span class="fa fa-star checked"></span>
//                                         <span class="fa fa-star checked"></span>
//                                         <span class="fa fa-star checked"></span>
//                                         <span class="fa fa-star checked"></span>
//                                         <span class="fa fa-star checked"></span>
//                                     </div>
//                                     <span class="ms-2">(38)</span>
//                                 </div> */}
//                                 {/* <p class=" border-b pb-2 mb-2">Duis aute irure dolor in reprehenderit in voluptate velit
//                                     esse cillum</p> */}
//                                 <div class="entry-meta">
//                                     <div class="entry-author d-flex align-items-center">
//                                         <p class="mb-0"><span class="theme fw-bold fs-7"><i class="fa fa-inr"></i> 23,400</span> Per Pax 
//                                         </p>
//                                     </div>
//                                 </div>

//                             </div>
//                         </div>
//                     </div>
//                 </SwiperSlide>
//                 <SwiperSlide>
//                 <div class="col-lg-12 col-md-6 col-sm-6 mb-4">
//                         <div class="trend-item box-shadow rounded">
//                             <div class="trend-image position-relative">
//                                 <img src="images/homepackage/rajasthan.jpg" alt="image"/>
//                                 {/* <div class="color-overlay"></div> */}
//                             </div>
//                             <div class="trend-content p-4 pt-2 position-relative">
//                                 {/* <div class="trend-meta bg-theme white px-3 py-2 rounded">
//                                     <div class="entry-author">
//                                         <i class="icon-calendar"></i>
//                                         <span class="fw-bold"> 5 Days Tours</span>
//                                     </div>
//                                 </div> */}
//                                 <h5 class="theme mb-1"><i class="flaticon-location-pin"></i>Rajasthan</h5>
//                                 <h3 class="mb-1 packageheading" ><a href="https://www.tripzygo.in/package/1425-explore-rajasthan-with-friends-jaipur-jodhpur-jaisalmer" target='_blank'>Explore Rajasthan with Friends: Jaipur, Jodhpur & Jaisalmer</a></h3>
//                                 {/* <div class="rating-main d-flex align-items-center pb-2">
//                                     <div class="rating">
//                                         <span class="fa fa-star checked"></span>
//                                         <span class="fa fa-star checked"></span>
//                                         <span class="fa fa-star checked"></span>
//                                         <span class="fa fa-star checked"></span>
//                                         <span class="fa fa-star checked"></span>
//                                     </div>
//                                     <span class="ms-2">(38)</span>
//                                 </div>
//                                 <p class=" border-b pb-2 mb-2">Duis aute irure dolor in reprehenderit in voluptate velit
//                                     esse cillum</p> */}
//                                 <div class="entry-meta">
//                                     <div class="entry-author d-flex align-items-center">
//                                         <p class="mb-0"><span class="theme fw-bold fs-7"><i class="fa fa-inr"></i> 12,600</span> Per Pax 
//                                         </p>
//                                     </div>
//                                 </div>

//                             </div>
//                         </div>
//                     </div>
//                 </SwiperSlide>
//                 <SwiperSlide>
//                 <div class="col-lg-12 col-md-6 col-sm-6 mb-4">
//                         <div class="trend-item box-shadow rounded">
//                             <div class="trend-image position-relative">
//                                 <img src="images/homepackage/Vietnam.jpg" alt="image"/>
//                                 {/* <div class="color-overlay"></div> */}
//                             </div>
//                             <div class="trend-content p-4 pt-2 position-relative">
//                                 {/* <div class="trend-meta bg-theme white px-3 py-2 rounded">
//                                     <div class="entry-author">
//                                         <i class="icon-calendar"></i>
//                                         <span class="fw-bold"> 5 Days Tours</span>
//                                     </div>
//                                 </div> */}
//                                 <h5 class="theme mb-1"><i class="flaticon-location-pin"></i>Vietnam</h5>
//                                 <h3 class="mb-1 packageheading" ><a href="https://www.tripzygo.in/package/1411-best-of-northern-vietnam-with-your-family-an-unforgettable-journey" target='_blank'>Best of Northern Vietnam with Your Family: An Unforgettable Journey</a></h3>
//                                 {/* <div class="rating-main d-flex align-items-center pb-2">
//                                     <div class="rating">
//                                         <span class="fa fa-star checked"></span>
//                                         <span class="fa fa-star checked"></span>
//                                         <span class="fa fa-star checked"></span>
//                                         <span class="fa fa-star checked"></span>
//                                         <span class="fa fa-star checked"></span>
//                                     </div>
//                                     <span class="ms-2">(38)</span>
//                                 </div>
//                                 <p class=" border-b pb-2 mb-2">Duis aute irure dolor in reprehenderit in voluptate velit
//                                     esse cillum</p> */}
//                                 <div class="entry-meta">
//                                     <div class="entry-author d-flex align-items-center">
//                                         <p class="mb-0"><span class="theme fw-bold fs-7"><i class="fa fa-inr"></i> 60,000</span> Per Pax 
//                                         </p>
//                                     </div>
//                                 </div>

//                             </div>
//                         </div>
//                     </div>
//                 </SwiperSlide>
//               </Swiper>




//                 </div>
//             </div>
//             <div class="trend-box ">
//                 <div class="row item-slider">
//             <div className='my-content'  >
//                     <div className=' animated.infinite'>
//                     <Swiper
//                 slidesPerView={1.5}
//                 spaceBetween={5}
//                 freeMode={true}
//                 // pagination={{
//                 //   clickable: true,
//                 // }}
//                 modules={[FreeMode, Pagination]}
//                 className="mySwiper"
//               >
//                 <SwiperSlide>
//                 <div class="col-lg-12 col-md-6 col-sm-6 mb-4">
//                         <div class="trend-item rounded box-shadow">
//                             <div class="trend-image position-relative">
//                                 <img src="images/homepackage/Austria.jpg" alt="image" class=""/>
//                                 {/* <div class="color-overlay"></div> */}
//                             </div>
//                             <div class="trend-content p-4 pt-2 position-relative">
//                                 {/* <div class="trend-meta bg-theme white px-3 py-2 rounded">
//                                     <div class="entry-author">
//                                         <i class="icon-calendar"></i>
//                                         <span class="fw-bold"> 9 Days Tours</span>
//                                     </div>
//                                 </div> */}
//                                 <h5 class="theme mb-1"><i class="flaticon-location-pin"></i>East Europe</h5>
//                                 <h3 class="mb-1 packageheading" ><a href="https://www.tripzygo.in/package/1620-relaxing-east-europe-group-tour-6n-7d-all-inclusive-with-indian-meals" target='_blank'>East Europe Group Tour | 6N & 7D | All Inclusive with Indian Meals</a></h3>
//                                 {/* <div class="rating-main d-flex align-items-center pb-2">
//                                     <div class="rating">
//                                         <span class="fa fa-star checked"></span>
//                                         <span class="fa fa-star checked"></span>
//                                         <span class="fa fa-star checked"></span>
//                                         <span class="fa fa-star checked"></span>
//                                         <span class="fa fa-star checked"></span>
//                                     </div>
//                                     <span class="ms-2">(12)</span>
//                                 </div>
//                                 <p class=" border-b pb-2 mb-2">Duis aute irure dolor in reprehenderit in voluptate velit
//                                     esse cillum</p> */}
//                                 <div class="entry-meta">
//                                     <div class="entry-author d-flex align-items-center">
//                                         <p class="mb-0"><span class="theme fw-bold fs-7"><i class="fa fa-inr"></i> 1,04,999/-</span> Per Pax 
//                                         </p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </SwiperSlide>
//                 <SwiperSlide>
//                 <div class="col-lg-12 col-md-6 col-sm-6 mb-4">
//                         <div class="trend-item box-shadow rounded">
//                             <div class="trend-image position-relative">
//                                 <img src="images/homepackage/Bali.jpg" alt="image"/>
//                                 {/* <div class="color-overlay"></div> */}
//                             </div>
//                             <div class="trend-content p-4 pt-2 position-relative">

//                                 <h5 class="theme mb-1"><i class="flaticon-location-pin"></i>Bali</h5>
//                                 <h5 class="mb-1 packageheading" ><a href="https://www.tripzygo.in/package/1508-discover-bali-with-friends-7-day-exclusive-discount-package" target='_blank'>Discover Bali with Friends: 7-Day Exclusive Discount Package</a></h5>


//                                 <div class="entry-meta">
//                                     <div class="entry-author d-flex align-items-center">
//                                         <p class="mb-0"><span class="theme fw-bold fs-7"> <i class="fa fa-inr"></i> 30,000/-</span> Per Pax 
//                                         </p>
//                                     </div>
//                                 </div>

//                             </div>
//                         </div>
//                     </div>
//                 </SwiperSlide>

//                 <SwiperSlide>
//                 <div class="col-lg-12 col-md-6 col-sm-6 mb-4">
//                         <div class="trend-item box-shadow rounded">
//                             <div class="trend-image position-relative">
//                                 <img src="images/homepackage/Dubai.jpg" alt="image"/>
//                                 {/* <div class="color-overlay"></div> */}
//                             </div>
//                             <div class="trend-content p-4 pt-2 position-relative">
//                                 {/* <div class="trend-meta bg-theme white px-3 py-2 rounded">
//                                     <div class="entry-author">
//                                         <i class="icon-calendar"></i>
//                                         <span class="fw-bold"> 9 Days Tours</span>
//                                     </div>
//                                 </div> */}
//                                 <h5 class="theme mb-1"><i class="flaticon-location-pin"></i>Dubai</h5>
//                                 <h3 class="mb-1 packageheading" ><a href="https://www.tripzygo.in/package/1585-explore-dubai-in-style-a-7-day-tour-with-atlantis-stay" target='_blank'>Explore Dubai in Style: A 7-Day Tour with Atlantis Stay</a></h3>
//                                 {/* <div class="rating-main d-flex align-items-center pb-2">
//                                     <div class="rating">
//                                         <span class="fa fa-star checked"></span>
//                                         <span class="fa fa-star checked"></span>
//                                         <span class="fa fa-star checked"></span>
//                                         <span class="fa fa-star checked"></span>
//                                         <span class="fa fa-star checked"></span>
//                                     </div>
//                                     <span class="ms-2">(18)</span>
//                                 </div> */}
//                                 {/* <p class=" border-b pb-2 mb-2">Duis aute irure dolor in reprehenderit in voluptate velit
//                                     esse cillum</p> */}
//                                 <div class="entry-meta">
//                                     <div class="entry-author d-flex align-items-center">
//                                         <p class="mb-0"><span class="theme fw-bold fs-7"> <i class="fa fa-inr"></i> 49,999</span> Per Pax 
//                                         </p>
//                                     </div>
//                                 </div>

//                             </div>
//                         </div>
//                     </div>
//                 </SwiperSlide>
//                 <SwiperSlide>
//                 <div class="col-lg-12 col-md-6 col-sm-6 mb-4">
//                         <div class="trend-item box-shadow rounded">
//                             <div class="trend-image position-relative">
//                                 <img src="images/homepackage/Kashmir.jpg" alt="image"/>
//                                 {/* <div class="color-overlay"></div> */}
//                             </div>
//                             <div class="trend-content p-4 pt-2 position-relative">
//                                 {/* <div class="trend-meta bg-theme white px-3 py-2 rounded">
//                                     <div class="entry-author">
//                                         <i class="icon-calendar"></i>
//                                         <span class="fw-bold"> 5 Days Tours</span>
//                                     </div>
//                                 </div> */}
//                                 <h5 class="theme mb-1"><i class="flaticon-location-pin"></i>Kashmir</h5>
//                                 <h3 class="mb-1 packageheading" ><a href="https://www.tripzygo.in/package/1486-kashmir-couples-escape-6-nights-of-scenic-beauty" target='_blank'>Kashmir Couple's Escape: 6 Nights & 7 Days of Scenic Beauty</a></h3>
//                                 {/* <div class="rating-main d-flex align-items-center pb-2">
//                                     <div class="rating">
//                                         <span class="fa fa-star checked"></span>
//                                         <span class="fa fa-star checked"></span>
//                                         <span class="fa fa-star checked"></span>
//                                         <span class="fa fa-star checked"></span>
//                                         <span class="fa fa-star checked"></span>
//                                     </div>
//                                     <span class="ms-2">(38)</span>
//                                 </div> */}
//                                 {/* <p class=" border-b pb-2 mb-2">Duis aute irure dolor in reprehenderit in voluptate velit
//                                     esse cillum</p> */}
//                                 <div class="entry-meta">
//                                     <div class="entry-author d-flex align-items-center">
//                                         <p class="mb-0"><span class="theme fw-bold fs-7"><i class="fa fa-inr"></i> 23,400</span> Per Pax 
//                                         </p>
//                                     </div>
//                                 </div>

//                             </div>
//                         </div>
//                     </div>
//                 </SwiperSlide>
//                 <SwiperSlide>
//                 <div class="col-lg-12 col-md-6 col-sm-6 mb-4">
//                         <div class="trend-item box-shadow rounded">
//                             <div class="trend-image position-relative">
//                                 <img src="images/homepackage/rajasthan.jpg" alt="image"/>
//                                 {/* <div class="color-overlay"></div> */}
//                             </div>
//                             <div class="trend-content p-4 pt-2 position-relative">
//                                 {/* <div class="trend-meta bg-theme white px-3 py-2 rounded">
//                                     <div class="entry-author">
//                                         <i class="icon-calendar"></i>
//                                         <span class="fw-bold"> 5 Days Tours</span>
//                                     </div>
//                                 </div> */}
//                                 <h5 class="theme mb-1"><i class="flaticon-location-pin"></i>Rajasthan</h5>
//                                 <h3 class="mb-1 packageheading" ><a href="https://www.tripzygo.in/package/1425-explore-rajasthan-with-friends-jaipur-jodhpur-jaisalmer" target='_blank'>Explore Rajasthan with Friends: Jaipur, Jodhpur & Jaisalmer</a></h3>
//                                 {/* <div class="rating-main d-flex align-items-center pb-2">
//                                     <div class="rating">
//                                         <span class="fa fa-star checked"></span>
//                                         <span class="fa fa-star checked"></span>
//                                         <span class="fa fa-star checked"></span>
//                                         <span class="fa fa-star checked"></span>
//                                         <span class="fa fa-star checked"></span>
//                                     </div>
//                                     <span class="ms-2">(38)</span>
//                                 </div>
//                                 <p class=" border-b pb-2 mb-2">Duis aute irure dolor in reprehenderit in voluptate velit
//                                     esse cillum</p> */}
//                                 <div class="entry-meta">
//                                     <div class="entry-author d-flex align-items-center">
//                                         <p class="mb-0"><span class="theme fw-bold fs-7"><i class="fa fa-inr"></i> 12,600</span> Per Pax 
//                                         </p>
//                                     </div>
//                                 </div>

//                             </div>
//                         </div>
//                     </div>
//                 </SwiperSlide>
//                 <SwiperSlide>
//                 <div class="col-lg-12 col-md-6 col-sm-6 mb-4">
//                         <div class="trend-item box-shadow rounded">
//                             <div class="trend-image position-relative">
//                                 <img src="images/homepackage/Vietnam.jpg" alt="image"/>
//                                 {/* <div class="color-overlay"></div> */}
//                             </div>
//                             <div class="trend-content p-4 pt-2 position-relative">
//                                 {/* <div class="trend-meta bg-theme white px-3 py-2 rounded">
//                                     <div class="entry-author">
//                                         <i class="icon-calendar"></i>
//                                         <span class="fw-bold"> 5 Days Tours</span>
//                                     </div>
//                                 </div> */}
//                                 <h5 class="theme mb-1"><i class="flaticon-location-pin"></i>Vietnam</h5>
//                                 <h3 class="mb-1 packageheading" ><a href="https://www.tripzygo.in/package/1411-best-of-northern-vietnam-with-your-family-an-unforgettable-journey" target='_blank'>Best of Northern Vietnam with Your Family: An Unforgettable Journey</a></h3>
//                                 {/* <div class="rating-main d-flex align-items-center pb-2">
//                                     <div class="rating">
//                                         <span class="fa fa-star checked"></span>
//                                         <span class="fa fa-star checked"></span>
//                                         <span class="fa fa-star checked"></span>
//                                         <span class="fa fa-star checked"></span>
//                                         <span class="fa fa-star checked"></span>
//                                     </div>
//                                     <span class="ms-2">(38)</span>
//                                 </div>
//                                 <p class=" border-b pb-2 mb-2">Duis aute irure dolor in reprehenderit in voluptate velit
//                                     esse cillum</p> */}
//                                 <div class="entry-meta">
//                                     <div class="entry-author d-flex align-items-center">
//                                         <p class="mb-0"><span class="theme fw-bold fs-7"><i class="fa fa-inr"></i> 60,000</span> Per Pax 
//                                         </p>
//                                     </div>
//                                 </div>

//                             </div>
//                         </div>
//                     </div>
//                 </SwiperSlide>

//               </Swiper>

//                     </div>
//                 </div>


//                 </div>
//             </div>

//         </div>
//     </section>
//     </>
//   );
// }

//'use client';
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import axios from 'axios';
import { useRouter } from "next/router";
import Star from "../Packages_SFSP/star_rating";
import SwiperNav from "./SwiperNav"

const MobileviewDestination = dynamic(() => import('../../components/MobileviewDestination'), {
    ssr: false,
});

export default function Package_data({ data }) {
    const [swiper, setSwiper] = useState(null);

    const handleSwiper = (swiper) => {
      setSwiper(swiper);
    };
    const router = useRouter();

    const handleClick = (packageId, packageName) => {
        packageName = packageName.toLowerCase();
        packageName = packageName.replace(/[^a-z0-9\s-]/g, '');
        packageName = packageName.trim().replace(/\s+/g, '-');
        const newTabUrl = `/package/${packageId}-${packageName}`;
        window.open(newTabUrl, '_blank');
    };

    function truncateString(str, maxLength) {
        if (str.length <= maxLength) {
            return str;
        }
    
        const lastSpaceIndex = str.lastIndexOf(' ', maxLength);
    
        if (lastSpaceIndex !== -1) {
            return str.slice(0, lastSpaceIndex) + '..';
        }
    
        return str.slice(0, maxLength) + '..';
    }
    
    const packages = data;

    return (
        <>
        <div>
            <div className="resp">
            <SwiperNav swiper={swiper}></SwiperNav>

                
                <Swiper
                    slidesPerView={3.4}
                    spaceBetween={20}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper"
                onSwiper={handleSwiper}

                >
                    {/* <h1>dddd</h1> */}
                    {packages?.map((pack) => (
                        <SwiperSlide key={pack.id}>
                            <div className="trend-item rounded box-shadow h-100" style={{border: "1px solid #d7d0d0"}}>
                                <div className="trend-image position-relative">
                                    <div className="trend-item2 rounded">
                                        <a target="_blank" onClick={() => handleClick(pack?.id, pack?.name)}>
                                            <div className="trend-item2 rounded">
                                                <Image
                                                    src={`https://packages.tripzygo.travel/package_image/${pack?.cover_image}`}
                                                    alt={pack?.name}
                                                    className="card-image"
                                                    width={400}
                                                    height={230}
                                                />
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="trend-content p-3 pt-0 position-relative">
                                    <h3 className="mb-1" style={{ fontSize: "16px" }}>
                                        <a target="_blank" onClick={() => handleClick(pack?.id, pack?.name)}>
                                            {pack?.name}
                                        </a>
                                    </h3>
                                    <a target="_blank" onClick={() => handleClick(pack?.id, pack?.name)}>
                                        <div className="theme mb-0" style={{ fontSize: "11px", display: "flex", alignItems: "center" }}>
                                            <i className="far fa-clock" style={{ fontSize: "10px", marginRight: "5px" }}></i>
                                            {pack.duration - 1}N/{pack.duration}D
                                            <i className="fa fa-map-marker-alt" style={{ fontSize: "11px", marginLeft: "15px", marginRight: "5px" }}></i>
                                            {pack.relate_key} &nbsp;&nbsp;&nbsp;
                                            <Star stars={pack?.package_rating} />
                                            <div className="pt-1 ps-2" style={{ color: "black" }}>
                                                {pack?.package_rating}/5
                                            </div>
                                        </div>
                                    </a>
                                    <a target="_blank" onClick={() => handleClick(pack?.id, pack?.name)}>
                                        {pack?.hotel_facility && pack.hotel_facility.trim() !== "" && (
                                            pack.hotel_facility.split(',').map((facility, index) => (
                                                <img
                                                    key={index}
                                                    src={`/images/${facility.trim()}`}
                                                    style={{ height: "50px" }}
                                                    alt={`${facility.trim()} Icon`}
                                                />
                                            ))
                                        )}
                                    </a>
                                    <hr className="grey-line" />
                                    <div className="entry-meta">
                                        <small style={{ fontSize: "12px" }}>Starting From/Person</small>&nbsp;&nbsp;
                                        <span
                                            style={{
                                                textDecoration: "line-through",
                                                fontSize: "12px",
                                            }}
                                        >
                                            <i className="fa fa-inr" style={{ fontSize: "12px" }} aria-hidden="true"></i>
                                            &nbsp;{(parseInt(Math.round(pack?.web_pack_price * 2)).toLocaleString("en-IN"))}*
                                        </span>
                                        <div className="entry-author d-flex align-items-center">
                                            <p className="mb-0">
                                                <span className="theme fw-bold fs-5">
                                                    INR {(parseInt(Math.round(pack?.web_pack_price)).toLocaleString("en-IN"))}*
                                                </span>
                                            </p>
                                            &nbsp;&nbsp;
                                            <a
                                                style={{ left: "67px" }}
                                                id="view_package"
                                                className="nir-btn white"
                                                onClick={() => handleClick(pack?.id, pack?.name)}
                                            >
                                                View
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className='my-content'>
                                    <div className='animated.infinite'>
                                        <MobileviewDestination props1={pack?.relate_key} props2={pack?.name} props3={`https://www.tripzygo.in/package/${pack?.id}-${pack?.name.toLowerCase().replace(/[^a-z0-9\s-]/g, '').trim().replace(/\s+/g, '-')}`}></MobileviewDestination>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className='my-content'  >
                <div className=' animated.infinite'>
                    <Swiper
                        slidesPerView={1.2}
                        spaceBetween={20}
                        modules={[FreeMode, Pagination]}
                        className="mySwiper"
                    >
                        {packages?.map((pack) => (
                            <SwiperSlide key={pack.id}>
                                <div className="trend-item rounded box-shadow h-100" style={{border: "1px solid #d7d0d0"}}>
                                    <div className="trend-image position-relative">
                                        <div className="trend-item2 rounded">
                                            <a target="_blank" onClick={() => handleClick(pack?.id, pack?.name)}>
                                                <div className="trend-item2 rounded">
                                                    <Image
                                                        src={`https://packages.tripzygo.travel/package_image/${pack?.cover_image}`}
                                                        alt={pack?.name}
                                                        className="card-image"
                                                        width={400}
                                                        height={270}
                                                    />
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="trend-content p-3 pt-0 position-relative">
                                        <h3 className="mb-1" style={{ fontSize: "16px" }}>
                                            <a target="_blank" onClick={() => handleClick(pack?.id, pack?.name)}>
                                                {truncateString(pack?.name, 49)}
                                            </a>
                                        </h3>
                                        <a target="_blank" onClick={() => handleClick(pack?.id, pack?.name)}>
                                            <div className="theme mb-0" style={{ fontSize: "11px", display: "flex", alignItems: "center" }}>
                                                <i className="far fa-clock" style={{ fontSize: "10px", marginRight: "5px" }}></i>
                                                {pack.duration - 1}N/{pack.duration}D
                                                <i className="fa fa-map-marker-alt" style={{ fontSize: "11px", marginLeft: "15px", marginRight: "5px" }}></i>
                                                {pack.relate_key} &nbsp;&nbsp;&nbsp;
                                                <Star stars={pack?.package_rating} />
                                                <div className="pt-1 ps-2" style={{ color: "black" }}>
                                                    {pack?.package_rating}/5
                                                </div>
                                            </div>
                                        </a>
                                        <a target="_blank" onClick={() => handleClick(pack?.id, pack?.name)}>
                                            {pack?.hotel_facility && pack.hotel_facility.trim() !== "" && (
                                                pack.hotel_facility.split(',').map((facility, index) => (
                                                    <img
                                                        key={index}
                                                        src={`/images/${facility.trim()}`}
                                                        style={{ height: "50px" }}
                                                        alt={`${facility.trim()} Icon`}
                                                    />
                                                ))
                                            )}
                                        </a>
                                        <hr className="grey-line" />
                                        <div className="entry-meta">
                                            <small style={{ fontSize: "12px" }}>Starting From/Person</small>&nbsp;&nbsp;
                                            <span
                                                style={{
                                                    textDecoration: "line-through",
                                                    fontSize: "12px",
                                                }}
                                            >
                                                <i className="fa fa-inr" style={{ fontSize: "12px" }} aria-hidden="true"></i>
                                                &nbsp;{(parseInt(Math.round(pack?.web_pack_price * 2)).toLocaleString("en-IN"))}*
                                            </span>
                                            <div className="entry-author d-flex align-items-center">
                                                <p className="mb-0">
                                                    <span className="theme fw-bold fs-5">
                                                        INR {(parseInt(Math.round(pack?.web_pack_price)).toLocaleString("en-IN"))}*
                                                    </span>
                                                </p>
                                                {/* &nbsp;&nbsp;
                                                <a
                                                    style={{ left: "67px" }}
                                                    id="view_package"
                                                    className="nir-btn white"
                                                    onClick={() => handleClick(pack?.id, pack?.name)}
                                                >
                                                    View
                                                </a> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className='my-content'>
                                        <div className='animated.infinite'>
                                            <MobileviewDestination props1={pack?.relate_key} props2={pack?.name} props3={`https://www.tripzygo.in/package/${pack?.id}-${pack?.name.toLowerCase().replace(/[^a-z0-9\s-]/g, '').trim().replace(/\s+/g, '-')}`}></MobileviewDestination>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                </div>
            </div>
        </div>
        </>
    );
}
