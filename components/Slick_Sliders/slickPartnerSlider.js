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
            <Link href="/beach-tour-packages">
              <div className="col-lg-4 col-md-6 mb-4  ">
                <div className="team-list bg-white rounded">
                  <div className="team-image">
                    <img src="images/team/beach.webp" alt="beach tour packages" />
                  </div>
                  <div className="team-content text-center p-2 bg-theme">
                    <h5 className="mb-0 white">Beaches</h5>

                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div>

            <Link href="/hill-station-tour-packages">
              <div className="col-lg-4 col-md-6 mb-4 ">
                <div className="team-list bg-white rounded">
                  <div className="team-image">
                    <img src="images/team/hill-station.webp" alt="hill station tour packages" />
                  </div>
                  <div className="team-content text-center p-2 bg-theme">
                    <h5 className="mb-0 white">Hill Station</h5>

                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div>
            <Link href="/luxury-tour-packages">
              <div className="col-lg-4 col-md-6 mb-4 ">
                <div className="team-list bg-white rounded">
                  <div className="team-image">
                    <img src="images/team/luxury.webp" alt="luxury tour packages" />
                  </div>
                  <div className="team-content text-center p-2 bg-theme">
                    <h5 className="mb-0 white">Luxury Vacation</h5>

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