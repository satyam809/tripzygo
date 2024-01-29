import React, { Component } from "react";
import Slider from "react-slick";
import LastMinuteModal from "../../components/LastMinuteModal"

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
                //     breakpoint: 1024,
                //     settings: {
                //         slidesToShow: 3,
                //         slidesToScroll: 1,
                //         infinite: true,
                //     }
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
                        slidesToShow: 1,
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
                        <div class="col-lg-4 mb-4">
                            <div class="trend-item1 rounded box-shadow bg-white">
                                <div class="trend-image position-relative">
                                    {/* <img src="images\flights\flight.webp" alt="flight booking" /> */}
                                    <LastMinuteModal
                                        img="/images/flights/Plane.jpg"
                                        alt="flight booking"
                                        title="Fly high anytime, to anywhere for anything"
                                        offertitle=" Save Upto 25% Off"
                                        firstpara="Handling flight costs for your trips is a bit of a headache. You book ahead of time, look for last minute deals, and find million other ways to save on your flight bookings. Well, there’s no need for any such hassle or flight booking drama at all. You just need to reach out to TripzyGo for cheap domestic flights."
                                        secondpara="At TripzyGo, we have exclusive benefits on domestic flight bookings. With us, you get up to 40% discounts on your flight bookings. Could there be a better deal than this? Stop the hassles and start the savings with TripzyGo."
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="col-lg-4 col-md-6 mb-4">
                            <div class="trend-item1 rounded box-shadow">
                                <div class="trend-image position-relative">
                                   <img src="/images\flights/winter.jpg" alt="winter" class="" />
                                    {/* <LastMinuteModal
                                        img="/images/flights/Monsoon.jpg"
                                        alt="honeymoon in maldives"
                                        title="Maldives Honeymoon"
                                        offertitle="Up to 25% Off"
                                        firstpara="Maldives and Honeymoon are synonyms to each other. You talk about your honeymoon, you think about the Maldives. It’s such a beautiful place after all. It’s one of the best honeymoon destinations you can ever find. So, having offers to visit this enchanting and hot island on your honeymoon are a treat."
                                        secondpara="We offer you that treat with amazing offers on Maldives honeymoon packages. Get up to 25% off on any Maldives honeymoon package that you pick out for a romantic and special honeymoon with your partner."
                                    /> */}

                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="col-lg-4 col-md-6 mb-4">
                            <div class="trend-item1 rounded box-shadow">
                                <div class="trend-image position-relative">
                                    {/* <img src="images\flights\europe.webp" alt="Europe trip" /> */}
                                    <LastMinuteModal
                                        img="/images/flights/Europe.jpg"
                                        alt="Europe trip"
                                        title="Trip to Europe"
                                        offertitle=" Up to 25% Off"
                                        firstpara="A trip to Europe is a fascinating adventure, whether you plan it with family, friends, or partner. However, you don’t want to burn a hole in your pocket while fulfilling your fantasy of a Europe trip. Well, we have got you covered."
                                        secondpara="Enjoy the best of your days in Europe with the best of the offers on Europe tour package designed and customised especially for you by travel experts and specialists at TripzyGo. Book the offer before it expires. Europe, after all, is calling out to you."
                                    />


                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        );
    }
}