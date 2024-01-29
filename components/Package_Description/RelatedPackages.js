import React from 'react'

export default function relatedpackage({ packages }) {
    return (
        <section className="trending pb-4 pt-4" >
            <div className="container1">
                <div className="row align-items-center">
                    <div className="col-lg-12 col-md-12 col-sm-12 mb-4">
                        <h3 class="mb-1 ">Related Packages</h3><br />
                        <div class="sidebar-item bg-white rounded box-shadow px-3 pb-2 mb-4 packagescrollbar" id="style-3" >
                            {packages?.map((pack) => (
                                <div class="trend-full border-b pt-4">
                                    <div class="row">
                                        <div className="col-lg-4 col-md-4">
                                            <a href={pack?.view}>
                                                <div className="trend-item3 rounded">
                                                    <a style={{ backgroundImage: `url(${pack?.img})` }}></a>
                                                    <div className="color-overlay"></div>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="col-lg-8 col-md-8 ps-0">
                                            <div class="trend-content position-relative">
                                                <h5 class="mb-1 mobileviewheading"><a href={pack?.view}>{pack?.package_name}</a></h5>
                                                <h6 className='mobileviewheading' style={{ fontSize: "12px" }}> <span className="mb-0" style={{ color: "#0d4980", fontWeight: "500" }}><i className="fa fa-inr" style={{ fontSize: "12px" }} aria-hidden="true"></i>&nbsp;{pack?.formatted_price}</span>&nbsp; &nbsp; <span class="theme mb-0"><i className="fa fa-map-marker-alt"></i>&nbsp;{pack.destination}</span></h6>

                                            </div>
                                        </div>
                                    </div>


                                </div>

                            ))
                            }
                        </div>

                    </div >
                </div >
            </div >

        </section >
    )
}
