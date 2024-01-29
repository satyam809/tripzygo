import React, { Component } from "react";
import Slider from "react-slick";
import Link from "next/dist/client/link";
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div className={className} style={{ ...style, display: "block", right: '-22px' }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", left: '1050px' }}
            onClick={onClick}
        />
    );
}

export default class CustomArrows extends Component {
    render() {
        const settings = {
            dots: false,
            autoplay: true,
            autoplaySpeed: 3000,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        infinite: true,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                        dots: true,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        initialSlide: 2
                    }
                },

                {
                    breakpoint: 950,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        initialSlide: 2
                    }
                }


            ]
        };
        return (
            <div>
                <Slider {...settings}>

                    <div>
                        <Link href="/international-tour-packages/europe-tour-packages">
                            <div className="col-lg-12 col-md-6 col-sm-6 mb-4">
                                <div className="trend-item1">
                                    <div className="trend-image position-relative rounded">
                                        <img src="images/destination/Europemobile.jpg" alt="Europe" />
                                        <div className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index">
                                            <div className="trend-content-title">
                                                {/* <h5 className="mb-0"><a href="tour-grid.html" className="theme1">England</a></h5> */}
                                                <h4 className="mb-0 white">Europe</h4>
                                            </div>
                                            {/* <span className="white bg-theme p-1 px-2 rounded">46 Packages</span> */}
                                        </div>
                                        <div className="color-overlay"></div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link href="/international-tour-packages/bali-tour-packages">
                            <div className="col-lg-12 col-md-6 col-sm-6 mb-4">
                                <div className="trend-item1">
                                    <div className="trend-image position-relative rounded">
                                        <img src="images/destination/Bali.jpg" alt="Bali" />
                                        <div className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index">
                                            <div className="trend-content-title">
                                                {/* <h5 className="mb-0"><a href="tour-grid.html" className="theme1">Florida</a></h5> */}
                                                <h4 className="mb-0 white">Bali</h4>
                                            </div>
                                            {/* <span className="white bg-theme p-1 px-2 rounded">4 Packages</span> */}
                                        </div>
                                        <div className="color-overlay"></div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link href="/international-tour-packages/thailand-tour-packages">
                            <div className="col-lg-12 col-md-6 col-sm-6 mb-4">
                                <div className="trend-item1">
                                    <div className="trend-image position-relative rounded">
                                        <img src="images/destination/Thailand.webp" alt="Thailand" />
                                        <div className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index">
                                            <div className="trend-content-title">
                                                {/* <h5 className="mb-0"><a href="tour-grid.html" className="theme1">Tokyo</a></h5> */}
                                                <h4 className="mb-0 white">Thailand</h4>
                                            </div>
                                            {/* <span className="white bg-theme p-1 px-2 rounded">15 Packages</span> */}
                                        </div>
                                        <div className="color-overlay"></div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link href="/international-tour-packages/dubai-tour-packages">
                            <div className="col-lg-12 col-md-6 col-sm-6 mb-4">
                                <div className="trend-item1">
                                    <div className="trend-image position-relative rounded">
                                        <img src="images/destination/Dubai.jpg" alt="Dubai" />
                                        <div className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100">
                                            <div className="trend-content-title">
                                                {/* <h5 className="mb-0"><a href="tour-grid.html" className="theme1">Moscow</a></h5> */}
                                                <h4 className="mb-0 white">Dubai</h4>
                                            </div>
                                            {/* <span className="white bg-theme p-1 px-2 rounded">2 Packages</span> */}
                                        </div>
                                        <div className="color-overlay"></div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link href="/international-tour-packages/singapore-tour-packages">
                            <div className="col-lg-12 col-md-6 col-sm-6 mb-4">
                                <div className="trend-item1">
                                    <div className="trend-image position-relative rounded">
                                        <img src="images/destination/Singapore.jpg" alt="Singapore" />
                                        <div className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index">
                                            <div className="trend-content-title">
                                                {/* <h5 className="mb-0"><a href="tour-grid.html" className="theme1">Italy</a></h5> */}
                                                <h4 className="mb-0 white">Singapore</h4>
                                            </div>
                                            {/* <span className="white bg-theme p-1 px-2 rounded">13 Packages</span> */}
                                        </div>
                                        <div className="color-overlay"></div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link href="/international-tour-packages/singapore-tour-packages">
                            <div className="col-lg-12 col-md-6 col-sm-6 mb-4">
                                <div className="trend-item1">
                                    <div className="trend-image position-relative rounded">
                                        <img src="images/destination/Singapore.jpg" alt="Singapore" />
                                        <div className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index">
                                            <div className="trend-content-title">
                                                {/* <h5 className="mb-0"><a href="tour-grid.html" className="theme1">Italy</a></h5> */}
                                                <h4 className="mb-0 white">Singapore</h4>
                                            </div>
                                            {/* <span className="white bg-theme p-1 px-2 rounded">13 Packages</span> */}
                                        </div>
                                        <div className="color-overlay"></div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link href="/international-tour-packages/singapore-tour-packages">
                            <div className="col-lg-12 col-md-6 col-sm-6 mb-4">
                                <div className="trend-item1">
                                    <div className="trend-image position-relative rounded">
                                        <img src="images/destination/Singapore.jpg" alt="Singapore" />
                                        <div className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index">
                                            <div className="trend-content-title">
                                                {/* <h5 className="mb-0"><a href="tour-grid.html" className="theme1">Italy</a></h5> */}
                                                <h4 className="mb-0 white">Singapore</h4>
                                            </div>
                                            {/* <span className="white bg-theme p-1 px-2 rounded">13 Packages</span> */}
                                        </div>
                                        <div className="color-overlay"></div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link href="/international-tour-packages/singapore-tour-packages">
                            <div className="col-lg-12 col-md-6 col-sm-6 mb-4">
                                <div className="trend-item1">
                                    <div className="trend-image position-relative rounded">
                                        <img src="images/destination/Singapore.jpg" alt="Singapore" />
                                        <div className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index">
                                            <div className="trend-content-title">
                                                {/* <h5 className="mb-0"><a href="tour-grid.html" className="theme1">Italy</a></h5> */}
                                                <h4 className="mb-0 white">Singapore</h4>
                                            </div>
                                            {/* <span className="white bg-theme p-1 px-2 rounded">13 Packages</span> */}
                                        </div>
                                        <div className="color-overlay"></div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link href="/international-tour-packages/singapore-tour-packages">
                            <div className="col-lg-12 col-md-6 col-sm-6 mb-4">
                                <div className="trend-item1">
                                    <div className="trend-image position-relative rounded">
                                        <img src="images/destination/Singapore.jpg" alt="Singapore" />
                                        <div className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index">
                                            <div className="trend-content-title">
                                                {/* <h5 className="mb-0"><a href="tour-grid.html" className="theme1">Italy</a></h5> */}
                                                <h4 className="mb-0 white">Singapore</h4>
                                            </div>
                                            {/* <span className="white bg-theme p-1 px-2 rounded">13 Packages</span> */}
                                        </div>
                                        <div className="color-overlay"></div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </Slider>
            </div>
        );
    }
}