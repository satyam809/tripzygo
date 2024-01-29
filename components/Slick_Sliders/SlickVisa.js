// import React, { Component } from "react";
// import Slider from "react-slick";

// function SampleNextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div className={className} style={{ ...style, display: "block" }}
//       onClick={onClick}
//     />
//   );
// }

// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block" }}
//       onClick={onClick}
//     />
//   );
// }

// export default class CustomArrows extends Component {
//   render() {
//     const settings = {
//       dots: false,
//       autoplay: false,
//       autoplaySpeed: 2000,
//       infinite: true,
//       slidesToShow: 4,
//       slidesToScroll: 1,
//       nextArrow: <SampleNextArrow />,
//       prevArrow: <SamplePrevArrow />,
//       responsive: [
//         {
//           breakpoint: 1024,
//           settings: {
//             slidesToShow: 3,
//             slidesToScroll: 1,
//             infinite: true,

//           }
//         },
//         {
//           breakpoint: 600,
//           settings: {
//             slidesToShow: 2,
//             slidesToScroll: 1,
//             initialSlide: 2
//           }
//         },
//         {
//           breakpoint: 480,
//           settings: {
//             slidesToShow: 1.8,
//             slidesToScroll: 1.8,
//             arrows: false,
//             dots: false
//           }
//         }
//       ]
//     };
//     return (
//       <div>
//         <Slider {...settings}>
//           <div>

//             <a href={this.props.package1Link}>
//               <div className="trend-item1">
//                 <div className="trend-image position-relative rounded">

//                   <img src={this.props.package1Image} alt={this.props.alt1} />
//                   <div className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index">
//                     <div className="trend-content-title">
//                       <h4 className="mb-0 white">{this.props.package1Name}</h4>
//                     </div>
//                   </div>
                  
//                 </div>
//               </div>
//             </a>

//           </div>
//           <div>

//             <a href={this.props.package2Link}>
//               <div className="trend-item1">
//                 <div className="trend-image position-relative rounded">
//                   <img src={this.props.package2Image} alt={this.props.alt2} />                                    <div className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index">
//                     <div className="trend-content-title">
//                       <h4 className="mb-0 white">{this.props.package2Name}</h4>
//                     </div>
//                   </div>
                  
//                 </div>
//               </div>
//             </a>

//           </div>
//           <div>
//             <a href={this.props.package3Link}>
//               <div className="trend-item1">
//                 <div className="trend-image position-relative rounded">
//                   <img src={this.props.package3Image} alt={this.props.alt3} />                                    <div className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100">
//                     <div className="trend-content-title">
//                       <h4 className="mb-0 white">{this.props.package3Name}</h4>
//                     </div>
//                   </div>
                 
//                 </div>
//               </div>
//             </a>
//           </div>
//           <div>
//             <a href={this.props.package4Link}>
//               <div className="trend-item1">
//                 <div className="trend-image position-relative rounded">
//                   <img src={this.props.package4Image} alt={this.props.alt4} />                                                                           <div className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100">
//                     <div className="trend-content-title">
//                       <h4 className="mb-0 white">{this.props.package4Name}</h4>
//                     </div>
//                   </div>
                 
//                 </div>
//               </div>
//             </a>
//           </div>
//           <div>
//             <a href={this.props.package5Link}>
//               <div className="trend-item1">
//                 <div className="trend-image position-relative rounded">
//                   <img src={this.props.package5Image} alt={this.props.alt5} />                                    <div className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index">
//                     <div className="trend-content-title">
//                       <h4 className="mb-0 white">{this.props.package5Name}</h4>
//                     </div>
//                   </div>
                  
//                 </div>
//               </div>
//             </a>
//           </div>
//           <div>
//             <a href={this.props.package6Link}>
//               <div className="trend-item1">
//                 <div className="trend-image position-relative rounded">
//                   <img src={this.props.package6Image} alt={this.props.alt6} />
//                   <div className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index">
//                     <div className="trend-content-title">
//                       <h4 className="mb-0 white">{this.props.package6Name}</h4>
//                     </div>

//                   </div>
                  
//                 </div>
//               </div>
//             </a>
//           </div>
//           <div>
//             <a href={this.props.package7Link}>
//               <div className="trend-item1">
//                 <div className="trend-image position-relative rounded">
//                   <img src={this.props.package7Image} alt={this.props.alt7} />
//                   <div className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index">
//                     <div className="trend-content-title">
//                       <h4 className="mb-0 white">{this.props.package7Name}</h4>
//                     </div>

//                   </div>
                  
//                 </div>
//               </div>
//             </a>
//           </div>
//           <div>
//             <a href={this.props.package8Link}>
//               <div className="trend-item1">
//                 <div className="trend-image position-relative rounded">
//                   <img src={this.props.package8Image} alt={this.props.alt8} />
//                   <div className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index">
//                     <div className="trend-content-title">
//                       <h4 className="mb-0 white">{this.props.package8Name}</h4>
//                     </div>

//                   </div>
                 
//                 </div>
//               </div>
//             </a>
//           </div>
//           <div>
//             <a href={this.props.package9Link}>
//               <div className="trend-item1">
//                 <div className="trend-image position-relative rounded">
//                   <img src={this.props.package9Image} alt={this.props.alt9} />
//                   <div className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index">
//                     <div className="trend-content-title">
//                       <h4 className="mb-0 white">{this.props.package9Name}</h4>
//                     </div>

//                   </div>
                  
//                 </div>
//               </div>
//             </a>
//           </div>
         
//         </Slider>
//       </div>
//     );
//   }
// }



import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from "next/dist/client/link";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import SwiperNav from "./SwiperNav"

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

export default function App() {
  const [swiper, setSwiper] = useState(null);

  const handleSwiper = (swiper) => {
    setSwiper(swiper);
  };
  return (
    <>
      <section className="trending pb-4 pt-2" style={{ backgroundImage: "url(images/shape-1.png)", backgroundPosition: "center" }}>
        <div className="container delightfulContainer" >
          <div className="mb-0 mx-auto">
            <h3 className="mb-1" style={{ fontSize: "20px", color: "black" }}>Visa-Free Paradises</h3>
          </div>
          <div className=' resp'>
            <div className="col-lg-12 ">
            <SwiperNav swiper={swiper}></SwiperNav>

              <Swiper
                slidesPerView={4.8}
                spaceBetween={20}
                freeMode={true}
                // pagination={{
                //   clickable: true,
                // }}
                onSwiper={handleSwiper}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                <Link href='/international-tour-packages/vietnam-tour-packages'>
                  <a><img src='/images/arrivalvisa/Vietnam.jpg' id='Section2_click1' className='rounded'></img></a>
                  </Link>
                </SwiperSlide>
               
      
                {/* <SwiperSlide>
                <Link href='/international-tour-packages'>
                <a><img src='/images/arrivalvisa/Indonesia.jpg' className='rounded'></img></a>
                  </Link>
                </SwiperSlide> */}
                <SwiperSlide>
                <Link href='/international-tour-packages/malaysia-tour-packages'>
                <a><img src='/images/arrivalvisa/Malaysia.jpg' id='Section2_click2' className='rounded'></img></a>
                  </Link>
                </SwiperSlide>
             
                <SwiperSlide>
                <Link href='/international-tour-packages/maldives-tour-packages'>
                <a><img src='/images/arrivalvisa/Maldives.jpg' id='Section2_click3' className='rounded'></img></a>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                <Link href='/international-tour-packages/mauritius-tour-packages'>
                <a><img src='/images/arrivalvisa/mauritius.jpg' id='Section2_click4' className='rounded'></img></a>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                <Link href='/international-tour-packages/thailand-tour-packages'>
                <a><img src='/images/arrivalvisa/Thailand.jpg' id='Section2_click5' className='rounded'></img></a>
                  </Link>
                </SwiperSlide>
              
              </Swiper>

            </div>
          </div>
          <div className='my-content'  >
                    <div className=' animated.infinite'>
                    <Swiper
                slidesPerView={1.8}
                spaceBetween={20}
                freeMode={true}
                // pagination={{
                //   clickable: true,
                // }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
              >
              <SwiperSlide>
                <Link href='/international-tour-packages/vietnam-tour-packages'>
                  <a><img src='/images/arrivalvisa/Vietnam.jpg' id='Section2_click1' className='rounded'></img></a>
                  </Link>
                </SwiperSlide>
               
      
                {/* <SwiperSlide>
                <Link href='/international-tour-packages'>
                <a><img src='/images/arrivalvisa/Indonesia.jpg' className='rounded'></img></a>
                  </Link>
                </SwiperSlide> */}
                <SwiperSlide>
                <Link href='/international-tour-packages/malaysia-tour-packages'>
                <a><img src='/images/arrivalvisa/Malaysia.jpg' id='Section2_click2' className='rounded'></img></a>
                  </Link>
                </SwiperSlide>
             
                <SwiperSlide>
                <Link href='/international-tour-packages/maldives-tour-packages'>
                <a><img src='/images/arrivalvisa/Maldives.jpg' id='Section2_click3' className='rounded'></img></a>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                <Link href='/international-tour-packages/mauritius-tour-packages'>
                <a><img src='/images/arrivalvisa/mauritius.jpg' id='Section2_click4' className='rounded'></img></a>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                <Link href='/international-tour-packages/thailand-tour-packages'>
                <a><img src='/images/arrivalvisa/Thailand.jpg' id='Section2_click5' className='rounded'></img></a>
                  </Link>
                </SwiperSlide>
              </Swiper>

                    </div>
                </div>
        </div>
      </section>

    </>
  );
}
