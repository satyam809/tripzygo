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
            <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
              <div className="why-us-item1 text-center p-4 py-3 border rounded bg-white">
                <div className="why-us-content">
                  <div className="why-us-icon">
                    {/* <i className="icon-flag theme"></i> */}
                    <img style={{ width: "50px", margin: "auto" }} src="images/web icons 32/customized-tour-packages.png" alt="customised tour packages" />

                  </div><br />
                  <h4><a>Customised Tour Packages</a></h4>
                  <p className="mb-0">With us, you will have best travel packages that are perfectly catered to your specific travel needs and requirements.</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
              <div className="why-us-item1 text-center p-4 py-3 border rounded bg-white">
                <div className="why-us-content">
                  <div className="why-us-icon">
                    {/* <i className="fa fa-inr  theme"></i> */}
                    <img style={{ width: "50px", margin: "auto" }} src="images/web icons 32/budgeted-tours.png" alt="budget holiday tour packages" />

                  </div><br />
                  <h4><a>Budgeted Tours</a></h4>
                  <p className="mb-0">Our customized tour packages take care of your budget and do not burn a hole in your pocket.</p>

                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
              <div className="why-us-item1 text-center p-4 py-3 border rounded bg-white">
                <div className="why-us-content">
                  <div className="why-us-icon">
                    {/* <i className="icon-support theme"></i> */}
                    <img style={{ width: "50px", margin: "auto" }} src="images/web icons 32/dedicated-support.png" alt="best tour packages" />

                  </div><br />
                  <h4><a>Dedicated Support</a></h4>
                  <p className="mb-0">Our travel executive will be with you every step of the way to assist with your touring needs and requirements.</p>

                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
              <div className="why-us-item1 text-center p-4 py-3 border rounded bg-white">
                <div className="why-us-content">
                  <div className="why-us-icon">
                    {/* <i className="icon-globe theme"></i> */}
                    <img style={{ width: "50px", margin: "auto" }} src="images/web icons 32/World-wide-touring.png" alt="best tour operators in gurgaon" />

                  </div><br />
                  <h4><a>World-wide Touring</a></h4>
                  <p className="mb-0">With us, you can travel domestically and internationally with all the convenience, comfort, and planning.</p>

                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}