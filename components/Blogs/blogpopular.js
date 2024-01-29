import axios from "axios";
import React from "react";
import Popular from "./popular"

const blogs_base_url = process.env.NEXT_PUBLIC_BASE_URL_BLOGS;

const baseURL = `${blogs_base_url}?&sort=blog_date_search,desc&blog_category_filter=Popular&limit=4;`

export default function Blogpopular() {
    const [blogs, setblogs] = React.useState(null);

    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
            setblogs(response.data);
        });
    }, []);

    if (!blogs) return null;
    // console.log("POPULAR:", blogs)

    return (
        <div>
            <Popular blogs={blogs.blogs ? blogs.blogs : []}></Popular>
        </div>
    );
}