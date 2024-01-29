

const mobile_filter = (props) => {
    const { destinations, filterDestination, setFilterDestination } = props;
    const onChange = (e) => {
        if (e.target.checked) {
            const state = [...filterDestination, e.target.name];
            setFilterDestination(state);
        } else {
            const state = filterDestination.filter((val) => val !== e.target.name);
            setFilterDestination(state);
        }

    };

    return (

        <div className="col-lg-4 pe-lg-4">
            <div className="sidebar-sticky">
                <div className="list-sidebar">
                    <div className="sidebar-item mb-4">
                        <p className="filterMobile mt-2" style={{ fontSize: "22px", color: "#0d4980", fontWeight: "400" }}>Filter <p style={{ marginLeft: "200px", color: "white !important" }} className="nir-btn1" onClick={props.reset} >Reset</p></p>
                        <div className="destinationContainer">
                            {destinations?.map((destination) => (
                                <ul className="sidebar-category1" key={destination}>

                                    <li><input type="checkbox"
                                        name={destination}
                                        checked={filterDestination.includes(destination) ? true : false}
                                        // value={destination} 
                                        onChange={onChange} />&nbsp;&nbsp;{destination}</li>

                                </ul>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default mobile_filter;