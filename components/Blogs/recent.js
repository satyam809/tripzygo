import React from 'react'

export default function recent({ blogs }) {
    return (
        <>
            {blogs?.map((blog) =>
                <article className="blogs mb-1 border-b pb-1">
                    <div className="s-content d-flex align-items-center justify-space-between" style={{ marginLeft: "5px" }}>
                        <div className="sidebar-image w-25 me-3 rounded">
                            <a href={blog.read_more} target="_blank"><img src={blog.blog_img} alt={blog.blog_alt} style={{ borderRadius: "10px" }} /></a>
                        </div>
                        <div className="content-list w-75">
                            <h5 className="mb-1 mr-2"><a href={blog.read_more} target="_blank">{blog.blog_title}</a></h5>
                            {/* <div className="date">{blog.blog_date}</div> */}
                        </div>
                    </div>
                </article>
            )}
        </>
    )
}
