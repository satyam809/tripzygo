// 'use client';
// import React from 'react'
// import { useState } from 'react'
// import axios from 'axios';
// import PopularHome from '../Slick_Sliders/SwiperPackages';



// // export async function getServerSideProps(context) {
// //     var data22 = [];
  
// //     try {
// //       const sort = { sort: 'web_pack_price', order: 'asc' };
// //       const badgesToFilter = 'BestSelling';
  
// //       const url = `https://backend.tripzygo.in/packs?order_by=${sort.sort}&order_by_type=${sort.order}&q=`;
// //     //   console.log(url)
// //       const response = await axios.get(url);
// //       data22 = response.data.data;
  
// //       // Filter data based on the "Badges" property
// //       data22 = data22.filter(pack => pack.Badges === badgesToFilter);
  
// //     //   console.log(data22);
// //     } catch (error) {
// //       console.error('Error fetching data:', error);
// //     }
  
// //     return {
// //       props: {
// //         data22,
// //       },
// //     };
// //   }
  

// export default function test({ data22 }) {
//     const [obj, setObj] = useState(data22);
//     const [sort, setSort] = useState({ sort: "web_pack_price", order: "asc" });
//     const [page, setPage] = useState(1);
//     // console.log(obj)
//       var data22 = [];
  
//     try {
//       const sort = { sort: 'web_pack_price', order: 'asc' };
//       const badgesToFilter = 'BestSelling';
  
//       const url = `https://backend.tripzygo.in/packs?order_by=${sort.sort}&order_by_type=${sort.order}&q=`;
//     //   console.log(url)
//       const response = await axios.get(url);
//       data22 = response.data.data;
  
//       // Filter data based on the "Badges" property
//       data22 = data22.filter(pack => pack.Badges === badgesToFilter);
  
//     //   console.log(data22);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
  
//     return {
//       props: {
//         data22,
//       },
//     };
//   }
//     return (
//         <div>
          
           
//             <section className="trending mt-6 pt-6 pb-0 bg-lgrey">
//                 <div className="container">
//                     <div className="row flex-row-reverse">
//                         <div className="col-lg-12">
//                             {/* <Sort sort={sort} setSort={(sort) => setSort(sort)} obj = {obj} setObj = {(obj) => setObj(obj)}/> */}

//                             <PopularHome data={obj} />
                           

                           
//                         </div>
//                     </div>

//                 </div>

//             </section>
          
//         </div>
//     )
// }


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PopularHome from '../Slick_Sliders/SwiperPackages';

export default function Test({ data22 }) {
  const [obj, setObj] = useState(data22);
  const [sort, setSort] = useState({ sort: 'web_pack_price', order: 'asc' });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const badgesToFilter = 'BestSelling';
        const url = `https://backend.tripzygo.in/packs?order_by=${sort.sort}&order_by_type=${sort.order}&q=`;

        const response = await axios.get(url);
        const filteredData = response.data.data.filter((pack) => pack.Badges === badgesToFilter);

        setObj(filteredData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [sort]); // Fetch data when the 'sort' state changes

  return (
 
     <section class="trending pb-1 pt-5" style={{ backgroundColor: "rgb(242 245 255)"}}>
        <div class="container" >
            <div class="row justify-content-between mb-6 ">
                <div class="col-lg-7">
                    <div class="section-title text-lg-start">
                      <h3 className="mb-1" style={{ fontSize: "20px", color: "black" }}>Best-Selling Packages</h3>
                    </div>
                </div>
                <PopularHome data={obj} />
            </div>
              {/* Include Sort component if needed */}
              {/* <Sort sort={sort} setSort={(sort) => setSort(sort)} obj={obj} setObj={(obj) => setObj(obj)} /> */}
              
          </div>  
          </section>
   
  );
}
