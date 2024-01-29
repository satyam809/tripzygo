// import React from "react";
// import Star from "./star_rating";
// import axios from 'axios';
// import { useRouter } from "next/router";
// import Image from 'next/image';
// import dynamic from 'next/dynamic';
// // import MobileviewDestination from "../../components/MobileviewDestination";
// const MobileviewDestination = dynamic(() => import('../../components/MobileviewDestination'), {
//     ssr: true,
// });
// export default function Package_data({ data }) {
//     //database array name in which data stored
//     const router = useRouter();
//     const handleClick = (packageId, packageName) => {
//         packageName = packageName.toLowerCase(); // Convert to lowercase
//         packageName = packageName.replace(/[^a-z0-9\s-]/g, ''); // Remove special characters
//         packageName = packageName.trim().replace(/\s+/g, '-'); // Replace spaces with dashes

//         const newTabUrl = `/package/${packageId}-${packageName}`;
//         window.open(newTabUrl, '_blank');
//         // console.log(router.query);
//     };
//     const packages = data;
//     console.log(data)
//     return (
//         <div>
//             <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
//                 {packages?.map((pack) => (
//                     <div className="col mb-4" >
//                         <div className="trend-item rounded box-shadow h-100">
//                             <div className="trend-image position-relative">
//                                 {/* <a
//                                     target="_blank"
//                                     onClick={() => handleClick(pack?.id, pack?.name)}
//                                 > */}
//                                     <div className="trend-item2 rounded">
//                                         <a target="_blank" onClick={() => handleClick(pack?.id, pack?.name)}>
//                                             <div className="trend-item2 rounded">
//                                                 <Image
//                                                     src={`https://packages.tripzygo.travel/package_image/${pack?.cover_image}`}
//                                                     alt={pack?.name}
//                                                     className="card-image" // Apply a CSS class
//                                                     width={400} // Set the desired width
//                                                     height={230} // Set the desired height
//                                                 />

//                                                 {/* <div className="color-overlay"></div> */}
//                                             </div>
//                                         </a>
//                                     </div>
//                                 {/* </a> */}
//                             </div>
//                             <div className="trend-content p-3 pt-0 position-relative">
//                                 {/* <div className="trend-meta bg-theme white px-2 py-1 rounded">
//                                   <div className="entry-author">
//                                       <i className="icon-calendar"></i>
//                                            <span className="fw-bold" style={{ fontSize: "12px" }}> {pack.duration} Days Tours</span>
//                                       </div>
//                                  </div> */}
//                                 <h3 className="mb-1" style={{ fontSize: "20px" }}>
//                                     <a
//                                         target="_blank"
//                                         onClick={() => handleClick(pack?.id, pack?.name)}

//                                     >
//                                         {pack?.name}
//                                     </a>
//                                 </h3>
//                                 <a
//                                     target="_blank"
//                                     onClick={() => handleClick(pack?.id, pack?.name)}

//                                 >
//                                     <div className="theme mb-0" style={{ fontSize: "11px", display: "flex", alignItems: "center" }}>
//                                         <i className="far fa-clock" style={{ fontSize: "10px", marginRight: "5px" }}></i>
//                                         {pack.duration - 1}N/{pack.duration}D
//                                         <i className="fa fa-map-marker-alt" style={{ fontSize: "11px", marginLeft: "15px", marginRight: "5px" }}></i>
//                                         {pack.relate_key} &nbsp;&nbsp;&nbsp;
//                                         <Star stars={pack?.package_rating} />
//                                         <div className="pt-1 ps-2" style={{ color: "black" }}>
//                                             {pack?.package_rating}/5
//                                         </div>
//                                     </div>
//                                 </a>
//                                 <a
//                                     target="_blank"
//                                     onClick={() => handleClick(pack?.id, pack?.name)}

//                                 >
//                                     {/* <img src={`/images/${pack?.hotel_facility}`} style={{ height: "60px", marginLeft: "-15px" }} alt="Icon" /> */}
//                                     {pack?.hotel_facility && pack.hotel_facility.trim() !== "" && (
//                                         pack.hotel_facility.split(',').map((facility, index) => (
//                                             <img
//                                                 key={index}
//                                                 src={`/images/${facility.trim()}`}
//                                                 style={{ height: "50px" }}
//                                                 alt={`${facility.trim()} Icon`}
//                                             />
//                                         ))
//                                     )}

// </a>

//                                     <hr className="grey-line" />
//                                     {/* <div className="rating-main d-flex align-items-center pb-2"></div> */}
//                                     <div className="entry-meta">
//                                         <small style={{ fontSize: "12px" }}>Starting From/Person</small>&nbsp;&nbsp;
//                                         <span
//                                             style={{
//                                                 textDecoration: "line-through",
//                                                 fontSize: "12px",
//                                             }}
//                                         >
//                                             <i
//                                                 className="fa fa-inr"
//                                                 style={{ fontSize: "12px" }}
//                                                 aria-hidden="true"
//                                             ></i>
//                                             &nbsp;{(parseInt(Math.round(pack?.web_pack_price * 2)).toLocaleString("en-IN"))}*
//                                         </span>

//                                         <div className="entry-author d-flex align-items-center">

//                                             <p className="mb-0">
//                                                 <span className="theme fw-bold fs-5">
//                                                     INR {(parseInt(Math.round(pack?.web_pack_price)).toLocaleString("en-IN"))}*
//                                                 </span>
//                                             </p>
//                                             &nbsp;&nbsp;

//                                             <a
//                                                 style={{ left: "67px" }}
//                                                 // target="_blank"
//                                                 id="view_package"
//                                                 className="nir-btn white"
//                                                 onClick={() => handleClick(pack?.id, pack?.name)}
//                                             >
//                                                 View Package
//                                             </a>

//                                         </div>
//                                     </div>
                                
//                             </div>
//                             <div className='my-content'>
//                                 <div className='animated.infinite'>
//                                     {/* <div class="button-wrapper-cta">
//                              <a class="button-cta cta-button  btn-lg btn-block" style={{textAlign:"center",fontSize:"1rem"}}>Click to get in touch</a>
                             
//                            </div> */}
//                                     <MobileviewDestination props1={pack?.relate_key} props2={pack?.name} props3={`https://www.tripzygo.in/package/${pack?.id}-${pack?.name.toLowerCase().replace(/[^a-z0-9\s-]/g, '').trim().replace(/\s+/g, '-')}`}></MobileviewDestination>
//                                 </div>
//                             </div>


//                         </div>
                 
//                     </div>

//                 ))}
//             </div>

//         </div>
//     );
// }

import React from "react";
import Star from "./star_rating";
import axios from 'axios';
import { useRouter } from "next/router";
import Image from 'next/image';
import dynamic from 'next/dynamic';

const MobileviewDestination = dynamic(() => import('../../components/MobileviewDestination'), {
    ssr: true,
});

export default function PackageData({ data }) {
    const router = useRouter();

    const handlePackageClick = (packageId, packageName) => {
        packageName = packageName.toLowerCase().replace(/[^a-z0-9\s-]/g, '').trim().replace(/\s+/g, '-');
        const newTabUrl = `/package/${packageId}-${packageName}`;
        window.open(newTabUrl, '_blank');
    };

    return (
        <div>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
                {data?.map((pack) => {
                    const packageId = pack?.id;
                    const packageName = pack?.name;

                    return (
                        <div className="col mb-4" key={packageId}>
                            <div className="trend-item rounded box-shadow h-100">
                                <div className="trend-image position-relative">
                                    <div className="trend-item2 rounded">
                                        <a target="_blank" onClick={() => handlePackageClick(packageId, packageName)}>
                                            <div className="trend-item2 rounded">
                                                <Image
                                                    src={`https://packages.tripzygo.travel/package_image/${pack?.cover_image}`}
                                                    alt={packageName}
                                                    className="card-image"
                                                    width={400}
                                                    height={230}
                                                    loading="lazy"
                                                />
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="trend-content p-3 pt-0 position-relative">
                                    <h3 className="mb-1" style={{ fontSize: "20px" }}>
                                        <a target="_blank" onClick={() => handlePackageClick(packageId, packageName)}>
                                            {packageName}
                                        </a>
                                    </h3>
                                    <a target="_blank" onClick={() => handlePackageClick(packageId, packageName)}>
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
                                    <a target="_blank" onClick={() => handlePackageClick(packageId, packageName)}>
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
                                        <span style={{ textDecoration: "line-through", fontSize: "12px" }}>
                                            <i className="fa fa-inr" style={{ fontSize: "12px" }}></i>
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
                                                onClick={() => handlePackageClick(packageId, packageName)}
                                            >
                                                View Package
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className='my-content'>
                                    <div className='animated.infinite'>
                                        <MobileviewDestination
                                            props1={pack?.relate_key}
                                            props2={packageName}
                                            props3={`https://www.tripzygo.in/package/${packageId}-${packageName.toLowerCase().replace(/[^a-z0-9\s-]/g, '').trim().replace(/\s+/g, '-')}`}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
