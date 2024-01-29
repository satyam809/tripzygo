

import React from "react";
import Star from "./star_rating";
import axios from 'axios';
import { useRouter } from "next/router";
import Image from 'next/image';
import MobileviewDestination from "../../components/MobileviewDestination";

export default function Package_data({ data }) {
  //database array name in which data stored
  const router = useRouter();
  const handleClick = (packageId, packageName) => {
    packageName = packageName.toLowerCase(); // Convert to lowercase
    packageName = packageName.replace(/[^a-z0-9\s-]/g, ''); // Remove special characters
    packageName = packageName.trim().replace(/\s+/g, '-'); // Replace spaces with dashes

    const newTabUrl = `/package/${packageId}-${packageName}`;
    window.open(newTabUrl, '_blank');
    // console.log(router.query);
  };
  const packages = data;
  return (
    <div>
      {packages?.map((pack) => (
        <div className="destination-list">
          <div className="trend-full bg-white rounded box-shadow overflow-hidden p-4 mb-4 resp">
            <div className="row">
              <div className="col-lg-4 col-md-3">
                <a target="_blank" onClick={() =>
                                  handleClick(pack?.id, pack?.name)
                                }>
                  <div className="trend-item2 rounded">
                  <Image src={`https://packages.tripzygo.travel/package_image/${pack?.cover_image}`}
    alt={pack?.name}
    width={1280}  
    height={1050} 
    // borderBottomLeftRadius= {10}
    // borderBottomRightRadius= {10}

  />
                    {/* <div className="color-overlay"></div> */}
                  </div>
                </a>
              </div>

              <div className="col-lg-6 col-md-6">
                <div className="trend-content position-relative text-md-start text-center">
                  <h3 className="mb-1" style={{ fontSize: "20px" }}>
                    <a target="_blank" onClick={() =>
                                  handleClick(pack?.id, pack?.name)
                                }>
                      {pack?.name}
                    </a>
                  </h3>
                  
                  <div className="theme mb-0 packagelnameleft " style={{ fontSize: "11px", display: "flex", alignItems: "center"}}>
                                    <i className="far fa-clock" style={{ fontSize: "10px", marginRight: "5px" }}></i>
                                    {pack.duration - 1}N/{pack.duration}D
                                    <i className="fa fa-map-marker-alt" style={{ fontSize: "11px", marginLeft: "15px", marginRight: "5px" }}></i>
                                    {pack.relate_key} &nbsp;&nbsp;&nbsp;
                                    <Star stars={pack?.package_rating} />
                                    <div className="pt-1 ps-2" style={{ color: "black" }}>
                                        {pack?.package_rating}/5
                                    </div>
                                </div>
                  <br/>
                  {/* <img src="/images/icon-01.png" style={{height:"60px", marginLeft:"-15px"}}></img> */}
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
                 {/* <p className="theme"><i class="fa fa-bed"></i><span style={{color:"#0d4980" , fontSize:"13px",fontWeight:"500"}}> Hotel </span>&nbsp;&nbsp;&nbsp;&nbsp;<i class="fas fa-cheese"></i><span style={{color:"#0d4980", fontSize:"13px",fontWeight:"500"}}> Meal </span></p>
                 <p className="theme"><i class="fa fa-car"></i> <span style={{color:"#0d4980", fontSize:"13px",fontWeight:"500"}}>Transport </span>&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-binoculars" aria-hidden="true"></i><span style={{color:"#0d4980", fontSize:"13px",fontWeight:"500"}}> Activities </span></p> */}
                

                </div>
              </div>
             
                            
              <div className="col-lg-2 col-md-3 shadowpackage px-2" >
                <div className="trend-content text-md-end text-center">
                  <div className="trend-price my-2">
                    <small style={{ fontSize: "11px" }}>Starting From</small>
                    <br />
                    <span
                      style={{
                        textDecoration: "line-through",
                        fontSize: "12px",
                      }}
                    >
                      <i
                        className="fa fa-inr"
                        style={{ fontSize: "12px" }}
                        aria-hidden="true"
                      ></i>
                      &nbsp;{(parseInt(Math.round(pack?.web_pack_price*2)).toLocaleString("en-IN"))}/-
                    </span>
                    <br></br>
                    <span
                      className="mb-0"
                      style={{ color: "#0d4980", fontWeight: "500" }}
                    >
                      <i
                        className="fa fa-inr"
                        style={{ fontSize: "15px" }}
                        aria-hidden="true"
                      ></i>
                      &nbsp;{(parseInt(Math.round(pack?.web_pack_price)).toLocaleString("en-IN"))}/-
                    </span>
                    {/* {(parseInt(Math.round(pack?.web_pack_price)).toLocaleString("en-IN", { style: "currency", currency: "INR", minimumFractionDigits: 0 })).replace("₹", "₹ ")}/-* */}
                    {/* <small>5% GST Extra</small><br/> */}
                    <br></br>
                    <small style={{ fontSize: "11px" }}>Per Adult</small>
                    
                  </div>
                  <a target="_blank" className="nir-btn white" onClick={() =>
                                  handleClick(pack?.id, pack?.name)
                                }>
                    View
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='my-content'  >
                    <div className='animated.infinite'>
                   
                  
                        <div className="trend-item rounded box-shadow h-100 mb-4">
                            <div className="trend-image position-relative">
                                {/* <a
                                    target="_blank"
                                    onClick={() => handleClick(pack?.id, pack?.name)}
                                > */}
                                    <div className="trend-item2 rounded">
                                        <a target="_blank" onClick={() => handleClick(pack?.id, pack?.name)}>
                                            <div className="trend-item2 rounded">
                                                <Image
                                                    src={`https://packages.tripzygo.travel/package_image/${pack?.cover_image}`}
                                                    alt={pack?.name}
                                                    className="card-image" // Apply a CSS class
                                                    width={400} // Set the desired width
                                                    height={230} // Set the desired height
                                                />

                                                {/* <div className="color-overlay"></div> */}
                                            </div>
                                        </a>
                                    </div>
                                {/* </a> */}
                            </div>
                            <div className="trend-content p-3 pt-0 position-relative">
                                {/* <div className="trend-meta bg-theme white px-2 py-1 rounded">
                                  <div className="entry-author">
                                      <i className="icon-calendar"></i>
                                           <span className="fw-bold" style={{ fontSize: "12px" }}> {pack.duration} Days Tours</span>
                                      </div>
                                 </div> */}
                                <h3 className="mb-1" style={{ fontSize: "20px" }}>
                                    <a
                                        target="_blank"
                                        onClick={() => handleClick(pack?.id, pack?.name)}

                                    >
                                        {pack?.name}
                                    </a>
                                </h3>
                                <a
                                    target="_blank"
                                    onClick={() => handleClick(pack?.id, pack?.name)}

                                >
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
                                <a
                                    target="_blank"
                                    onClick={() => handleClick(pack?.id, pack?.name)}

                                >
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
                                    {/* <div className="rating-main d-flex align-items-center pb-2"></div> */}
                                    <div className="entry-meta">
                                        <small style={{ fontSize: "12px" }}>Starting From/Person</small>&nbsp;&nbsp;
                                        <span
                                            style={{
                                                textDecoration: "line-through",
                                                fontSize: "12px",
                                            }}
                                        >
                                            <i
                                                className="fa fa-inr"
                                                style={{ fontSize: "12px" }}
                                                aria-hidden="true"
                                            ></i>
                                            &nbsp;{(parseInt(Math.round(pack?.web_pack_price * 2)).toLocaleString("en-IN"))}*
                                        </span>
                                       
                                        <div className="entry-author d-flex align-items-center">
                                        
                                            <p className="mb-0">
                                                <span className="theme fw-bold fs-3">
                                                    INR {(parseInt(Math.round(pack?.web_pack_price)).toLocaleString("en-IN"))}*
                                                </span>
                                            </p>
                                            &nbsp;&nbsp;

                                            <a
                                                style={{ left: "70px" }}
                                                target="_blank"
                                                id="view_package"
                                                className="nir-btn white"
                                                onClick={() => handleClick(pack?.id, pack?.name)}
                                            >
                                                View Package
                                            </a>

                                        </div>
                                    </div>
                               
                            </div>
                            <div className='my-content' id="tour_list_se_click">
                                <div className='animated.infinite'>
                                    {/* <div class="button-wrapper-cta">
                             <a class="button-cta cta-button  btn-lg btn-block" style={{textAlign:"center",fontSize:"1rem"}}>Click to get in touch</a>
                             
                           </div> */}
                                    <MobileviewDestination props1={pack?.relate_key} props2={pack?.name} props3={`https://www.tripzygo.in/package/${pack?.id}-${pack?.name.toLowerCase().replace(/[^a-z0-9\s-]/g, '').trim().replace(/\s+/g, '-')}`}></MobileviewDestination>
                                </div>
                            </div>


                        </div>
                 
       
                    </div>
                </div>
        </div>
        
      ))}
    </div>
  );
}


////////old package data


// import React from "react";
// import Star from "./star_rating";

// export default function Package_data({ packages }) {
  
//   return (
//     <div>
//       {packages?.map((pack) => (
//         <div className="destination-list">
//           <div className="trend-full bg-white rounded box-shadow overflow-hidden p-4 mb-4">
//             <div className="row">
//               <div className="col-lg-4 col-md-3">
//                 <a target="_blank" href={pack?.view}>
//                   <div className="trend-item2 rounded">
//                     <a
//                       style={{ backgroundImage: `url(${pack?.img})` }}
//                       alt={pack?.package_alt}
//                     ></a>
//                     <div className="color-overlay"></div>
//                   </div>
//                 </a>
//               </div>

//               <div className="col-lg-6 col-md-6">
//                 <div className="trend-content position-relative text-md-start text-center">
//                   <h3 className="mb-1" style={{ fontSize: "20px" }}>
//                     <a target="_blank" href={pack?.view}>
//                       {pack?.package_name}
//                     </a>
//                   </h3>
//                   <h6 className="theme mb-0" style={{ fontSize: "13px" }}>
//                     <i class="far fa-clock" style={{ fontSize: "11px" }}></i>
//                     &nbsp;{pack.package_duration}&nbsp;&nbsp;&nbsp;&nbsp;
//                     <i
//                       className="fa fa-map-marker-alt"
//                       style={{ fontSize: "11px" }}
//                     ></i>
//                     &nbsp;{pack.destination}
//                   </h6>
//                 </div>
//               </div>
//               <div className="col-lg-2 col-md-3 shadowpackage px-2">
//                 <div className="trend-content text-md-end text-center">
//                   <div className="trend-price my-2">
//                     <small style={{ fontSize: "11px" }}>Starting From</small>
//                     <br />
//                     <span
//                       style={{
//                         textDecoration: "line-through",
//                         fontSize: "12px",
//                       }}
//                     >
//                       <i
//                         className="fa fa-inr"
//                         style={{ fontSize: "12px" }}
//                         aria-hidden="true"
//                       ></i>
//                       &nbsp;{pack?.strikeoff_price}
//                     </span>
//                     <br></br>
//                     <span
//                       className="mb-0"
//                       style={{ color: "#0d4980", fontWeight: "500" }}
//                     >
//                       <i
//                         className="fa fa-inr"
//                         style={{ fontSize: "15px" }}
//                         aria-hidden="true"
//                       ></i>
//                       &nbsp;{pack?.formatted_price}
//                     </span>
                   
//                     <br></br>
//                     <small style={{ fontSize: "11px" }}>Per Adult</small>
//                     <div className="rating">
//                     <Star stars={pack?.package_rating} />
//                     <div className="pt-1 ps-2" style={{color:"black"}}>{pack?.package_rating}/5</div>
//                     </div>
//                   </div>
//                   <a target="_blank" href={pack?.view} className="nir-btn">
//                     View
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }