import React, { Component } from "react";
import Slider from "react-slick";
import Link from "next/dist/client/link";
import { Height } from "@material-ui/icons";
import Image from 'next/image'

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
            style={{ ...style, display: "block", left: '-22px' }}
            onClick={onClick}
        />
    );
}

export default class CustomArrows extends Component {
    render() {

        const { imageUrls } = this.props;
        const settings = {
            dots: false,
            autoplay: true,
            autoplaySpeed: 3000,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
            responsive: [
                // {
                //   breakpoint: 1024,
                //   settings: {
                //     slidesToShow: 3,
                //     slidesToScroll: 1,
                //     infinite: true,
                //   }
                // },
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

                        <div className="col-lg-6 col-md-6 col-sm-6 mb-4">
                            <div className="trend-item1">
                                <div className="trend-image position-relative rounded">
                                    <div style={{ borderRadius: '10px', overflow: 'hidden' }}>
                                        <Image
                                            src={imageUrls[0]}
                                            layout="responsive"
                                            width={800}
                                            height={534}
                                        />
                                    </div>


                                    {/* <img src={imageUrls[0]}  style={{borderRadius:"10px"}} /> */}
                                    {/* <div className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index">
                                            <div className="trend-content-title">
                                                <h5 className="mb-0"><a href="tour-grid.html" className="theme1">England</a></h5>
                                                <h4 className="mb-0 white">Europe</h4>
                                            </div>
                                            <span className="white bg-theme p-1 px-2 rounded">46 Packages</span>
                                        </div> */}

                                </div>
                            </div>
                        </div>

                    </div>
                    <div>

                        <div className="col-lg-6 col-md-6 col-sm-6 mb-4">
                            <div className="trend-item1">
                                <div className="trend-image position-relative rounded">
                                    <div style={{ borderRadius: '10px', overflow: 'hidden' }}>
                                        <Image
                                            src={imageUrls[1]}
                                            layout="responsive"
                                            width={800}
                                            height={534}
                                        />
                                    </div>




                                </div>
                            </div>
                        </div>

                    </div>
                    <div>

                        <div className="col-lg-6 col-md-6 col-sm-6 mb-4">
                            <div className="trend-item1">
                                <div className="trend-image position-relative rounded">
                                    <div style={{ borderRadius: '10px', overflow: 'hidden' }}>
                                        <Image
                                            src={imageUrls[2]}
                                            layout="responsive"
                                            width={800}
                                            height={534}
                                        />
                                    </div>




                                </div>
                            </div>
                        </div>

                    </div>
                    <div>

                        <div className="col-lg-6 col-md-6 col-sm-6 mb-4">
                            <div className="trend-item1">
                                <div className="trend-image position-relative rounded">
                                    <div style={{ borderRadius: '10px', overflow: 'hidden' }}>
                                        <Image
                                            src={imageUrls[3]}
                                            layout="responsive"
                                            width={800}
                                            height={534}
                                        />
                                    </div>




                                </div>
                            </div>
                        </div>

                    </div>
                    <div>

                        <div className="col-lg-6 col-md-6 col-sm-6 mb-4">
                            <div className="trend-item1">
                                <div className="trend-image position-relative rounded">
                                    <div style={{ borderRadius: '10px', overflow: 'hidden' }}>
                                        <Image
                                            src={imageUrls[4]}
                                            layout="responsive"
                                            width={800}
                                            height={534}
                                        />
                                    </div>




                                </div>
                            </div>
                        </div>

                    </div>
                </Slider>
            </div>
        );
    }
}