import React from 'react'

export default function ourblogspackages({ blogs }) {
    return (
        <section className="trending recent-articles pb-0 pt-1 " style={{ padding: "0px!important" }} >
            <div className="container delightfulContainer">
                <div className="section-title mb-6 w-75 mx-auto text-center">
                    <h4 className="mb-1 theme1">Recent Blogs</h4>
                    {/* <h2 className="mb-1">Where To Go <span className="theme">| What To See</span></h2>
                    <div>Explore the most useful travel tips, information, and advice in our amazing resources and blogs</div> */}
                </div>
                <div className="recent-articles-inner">
                    <div className="row">
                    {blogs?.slice(0, 3).map((blog) =>
                            <div className="col-lg-4 col-md-6">
                                <div className="trend-item box-shadow bg-white mb-4 rounded">
                                    <div className="trend-image">
                                        <a href={blog.read_more} target="_blank"><img className="blog-banner" src={blog.blog_img} alt={blog.blog_alt} /></a>
                                    </div>
                                    <div className="trend-content-main p-4 pb-2">
                                        <div className="trend-content" style={{height:"188px"}}>
                                            <h5 className="theme mb-1">{blog.blog_category}</h5>
                                            <h4><a style={{fontSize:"15px", fontWeight:"500"}} href={blog.read_more} target="_blank">{blog.blog_title}</a></h4>
                                            {/* <div className="mb-3">
                                                {blog.blog_description}
                                            </div> */}
                                            <div className="entry-meta d-flex align-items-center justify-content-between">
                                                {/* <div className="entry-author mb-2 r">
                                                    <img src="/images/reviewer/images.webp" alt="" className="rounded-circle me-1" />
                                                    <span>{blog.blog_date}</span>
                                                </div> */}
                                                <div className="entry-button d-flex align-items-center mb-2">
                                                    <a href={blog.read_more} target="_blank" className="nir-btn">Read More</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}
