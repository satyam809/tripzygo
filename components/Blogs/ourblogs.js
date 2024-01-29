import axios from "axios";
import React from "react";
import OurBlogsTemplate from "./ourblogstemplate"
import OurBlogsPackage from "./ourblogspackages"


const blogs_base_url = process.env.NEXT_PUBLIC_BASE_URL_BLOGS;

const baseURL = `${blogs_base_url}?&sort=blog_date_search,desc&blog_category_filter=Recent&limit=4;`

export default function ourblogs(props) {
    const [blogs, setblogs] = React.useState(null);

    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
            setblogs(response.data);
        });
    }, []);

    if (!blogs) return null;

    return (
        <div>
            
            {props.page === 'packagePage'?
            <OurBlogsPackage blogs={blogs.blogs ? blogs.blogs : []}></OurBlogsPackage>:
            <OurBlogsTemplate blogs={blogs.blogs ? blogs.blogs : []}></OurBlogsTemplate>}
            

        </div>
    );
}
