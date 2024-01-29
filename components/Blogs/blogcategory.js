

const Blog_category = (props) => {
    const { categories, blogCategory, setblogCategory } = props;
    // console.log("Ashish:", categories)
    const onChange = (e) => {
        if (e.target.checked) {
            const state = [...blogCategory, e.target.name];
            setblogCategory(state);
        } else {
            const state = blogCategory.filter((val) => val !== e.target.name);
            setblogCategory(state);
        }
    };

    return (

        <>
            <div className="col-lg-4 pe-lg-4">
                <div className="sidebar-sticky resp tabResp">
                    <div className="list-sidebar">
                        <div className="sidebar-item mb-4">
                            <p style={{ fontSize: "22px", color: "#0d4980", fontWeight: "400" }}>Filter</p>
                            {/* <p style={{ fontSize: "22px", color: "#0d4980", fontWeight: "400" }}>Blog Category</p> */}
                            {categories?.map((blogcategories) => (
                                <ul className="sidebar-category1" key={blogcategories}>
                                    <li><input type="checkbox"
                                        name={blogcategories}
                                        checked={blogCategory.includes(blogcategories) ? true : false}
                                        onChange={onChange} />&nbsp;&nbsp;{blogcategories}
                                    </li>
                                </ul>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Blog_category;