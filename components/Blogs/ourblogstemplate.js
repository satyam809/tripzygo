// import React from 'react'

// export default function ourblogstemplate({ blogs }) {
//     return (
//         <section className="trending recent-articles pb-0 pt-1 " style={{ padding: "0px!important" }} >
//             <div className="container delightfulContainer">
//                 <div className="section-title mb-6 w-75 mx-auto text-center">
//                     <h4 className="mb-1 theme1">Our Blogs</h4>
//                     <h2 className="mb-1">Where To Go <span className="theme">| What To See</span></h2>
//                     {/* <div>Explore the most useful travel tips, information, and advice in our amazing resources and blogs</div> */}
//                 </div>
//                 <div className="recent-articles-inner">
//                     <div className="row">
//                         {blogs?.map((blog) =>
//                             // <div className="col-lg-3 col-md-6">
//                             //     <div className="trend-item box-shadow bg-white mb-4 rounded">
//                             //         <div className="trend-image">
//                             //             <a href={blog.read_more} target="_blank"><img className="blog-banner" src={blog.blog_img} alt={blog.blog_alt} /></a>
//                             //         </div>
//                             //         <div className="trend-content-main p-4 pb-2">
//                             //             <div className="trend-content">
//                             //                 <h5 style={{ fontSize: "10px" }} className="theme mb-1">{blog.blog_category}</h5>
//                             //                 <h4 style={{ fontSize: "20px" }}><a href={blog.read_more} target="_blank">{blog.blog_title}</a></h4>
//                             //                 {/* <div className="mb-2" style={{fontSize:"10px"}}>
//                             //                     {blog.blog_description}
//                             //                 </div> */}
//                             //                 <div className="entry-meta d-flex align-items-center justify-content-between">
//                             //                     {/* <div className="entry-author mb-2 r">
//                             //                         <img src="/images/reviewer/images.webp" alt="" className="rounded-circle me-1" />
//                             //                         <span>{blog.blog_date}</span>
//                             //                     </div> */}
//                             //                     <div className="entry-button d-flex align-items-center mb-2">
//                             //                         <a href={blog.read_more} target="_blank" className="nir-btn">Read More</a>
//                             //                     </div>
//                             //                 </div>
//                             //             </div>
//                             //         </div>
//                             //     </div>
//                             // </div>
//                             <div class="col-lg-3 mb-2">
//                                 <div class="trend-item1 rounded box-shadow bg-white">
//                                     <div class="trend-image position-relative">
//                                         <a href={blog.read_more} target="_blank"><img className="blog-banner" style={{
//                                             borderBottomLeftRadius: "10px",
//                                             borderBottomRightRadius: "10px"
//                                         }}
//                                             src={blog.blog_img} alt={blog.blog_alt} /></a>
//                                         <div class="trend-content1 p-2">
//                                             <h5 class="mb-1" style={{ color: "white" }}> {blog.blog_category}</h5>
//                                             <h4 style={{ fontSize: "20px" }}><a href={blog.read_more} target="_blank" style={{ color: "white" }}>{blog.blog_title}</a></h4>
//                                         </div>
//                                         <div class="overlay" style={{
//                                             borderBottomLeftRadius: "10px",
//                                             borderBottomRightRadius: "10px"
//                                         }}></div>
//                                     </div>
//                                 </div>
//                             </div>
//                         )}

//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }


import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import { FreeMode, Pagination } from 'swiper/modules';
export default function ourblogstemplate({ blogs }) {
  return (
    <section className="trending recent-articles pb-0 pt-1 " style={{ padding: "0px!important" }}>
      <div className="container delightfulContainer">
      <div className="section-title mb-6 w-75 mx-auto text-center">
                    <h4 className="mb-1 theme1">Our Blogs</h4>
                    <h2 className="mb-1">Where To Go <span className="theme">| What To See</span></h2>
                    {/* <div>Explore the most useful travel tips, information, and advice in our amazing resources and blogs</div> */}
                </div>
        <div className="recent-articles-inner resp">
        <div className="row">
                        {blogs?.map((blog) =>
                            // <div className="col-lg-3 col-md-6">
                            //     <div className="trend-item box-shadow bg-white mb-4 rounded">
                            //         <div className="trend-image">
                            //             <a href={blog.read_more} target="_blank"><img className="blog-banner" src={blog.blog_img} alt={blog.blog_alt} /></a>
                            //         </div>
                            //         <div className="trend-content-main p-4 pb-2">
                            //             <div className="trend-content">
                            //                 <h5 style={{ fontSize: "10px" }} className="theme mb-1">{blog.blog_category}</h5>
                            //                 <h4 style={{ fontSize: "20px" }}><a href={blog.read_more} target="_blank">{blog.blog_title}</a></h4>
                            //                 {/* <div className="mb-2" style={{fontSize:"10px"}}>
                            //                     {blog.blog_description}
                            //                 </div> */}
                            //                 <div className="entry-meta d-flex align-items-center justify-content-between">
                            //                     {/* <div className="entry-author mb-2 r">
                            //                         <img src="/images/reviewer/images.webp" alt="" className="rounded-circle me-1" />
                            //                         <span>{blog.blog_date}</span>
                            //                     </div> */}
                            //                     <div className="entry-button d-flex align-items-center mb-2">
                            //                         <a href={blog.read_more} target="_blank" className="nir-btn">Read More</a>
                            //                     </div>
                            //                 </div>
                            //             </div>
                            //         </div>
                            //     </div>
                            // </div>
                            <div class="col-lg-3 mb-2">
                                <div class="trend-item1 rounded box-shadow bg-white">
                                    <div class="trend-image position-relative">
                                        <a href={blog.read_more} target="_blank"><img className="blog-banner" style={{
                                            borderBottomLeftRadius: "10px",
                                            borderBottomRightRadius: "10px"
                                        }}
                                            src={blog.blog_img} alt={blog.blog_alt} /></a>
                                        <div class="trend-content1 p-2">
                                            <h5 class="mb-1" style={{ color: "white" }}> {blog.blog_category}</h5>
                                            <h4 style={{ fontSize: "20px" }}><a href={blog.read_more} target="_blank" style={{ color: "white" }}>{blog.blog_title}</a></h4>
                                        </div>
                                        <div class="overlay" style={{
                                            borderBottomLeftRadius: "10px",
                                            borderBottomRightRadius: "10px"
                                        }}></div>
                                    </div>
                                </div>
                            </div>
                        )}

                    </div>
        </div>
        <div className='my-content'  >
                <div className=' animated.infinite'>
                <Swiper
            slidesPerView={1.2} // Adjust as needed
            spaceBetween={5}
            modules={[FreeMode]}
            className="mySwiper"
          >
            {blogs?.map((blog) => (
              <SwiperSlide key={blog.id}>
                <div className="col-lg-3 mb-2">
                  <div className="trend-item1 rounded box-shadow bg-white">
                    <div className="trend-image position-relative">
                      <a href={blog.read_more} target="_blank">
                        <img
                          className="blog-banner"
                          style={{
                            borderBottomLeftRadius: "10px",
                            borderBottomRightRadius: "10px"
                          }}
                          src={blog.blog_img}
                          alt={blog.blog_alt}
                        />
                      </a>
                      <div
                        className="trend-content1 p-2"
                        style={{
                          borderBottomLeftRadius: "10px",
                          borderBottomRightRadius: "10px"
                        }}
                      >
                        <h5 className="mb-1" style={{ color: "white" }}>
                          {blog.blog_category}
                        </h5>
                        <h4
                          style={{ fontSize: "20px" }}
                        >
                          <a href={blog.read_more} target="_blank" style={{ color: "white" }}>
                            {blog.blog_title}
                          </a>
                        </h4>
                      </div>
                      <div className="overlay" style={{
                        borderBottomLeftRadius: "10px",
                        borderBottomRightRadius: "10px"
                      }}></div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

                </div>
            </div>
      </div>
    </section>
  );
}
