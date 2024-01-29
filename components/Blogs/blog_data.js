import React from 'react'

export default function Blog_data({ blogs }) { //database array name in which data stored
    return (
        <>
            {blogs?.map((blog) =>
                <div className="col-lg-6">
                    <div className="trend-item box-shadow bg-white mb-4 rounded overflow-hidden">
                        <div className="trend-image" key={blog.id}>
                            <a href={blog.read_more} target="_blank"><img src={blog.blog_img} alt={blog.blog_alt} /></a>
                        </div>
                        <div className="trend-content-main p-4 pb-2">
                            <div className="trend-content">
                                <h5 className="theme mb-1">{blog.blog_category}</h5>
                                <h4><a href={blog.read_more} target="_blank">{blog.blog_title}</a></h4>
                                <p className="mb-3">{blog.blog_description}</p>
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
        </>
    )
}
