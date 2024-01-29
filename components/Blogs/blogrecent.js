import axios from "axios";
import React from "react";
import Recent from "./recent"

const blogs_base_url = process.env.NEXT_PUBLIC_BASE_URL_BLOGS;

const baseURL = `${blogs_base_url}?&sort=blog_date_search,desc&blog_category_filter=Recent&limit=4;`

export default function Blogpopular() {
    const [blogs, setblogs] = React.useState(null);

    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
            setblogs(response.data);
        });
    }, []);

    if (!blogs) return null;
    // console.log("Recent:", blogs)


    return (
        <div>
            <Recent blogs={blogs.blogs ? blogs.blogs : []}></Recent>
        </div>
    );
}