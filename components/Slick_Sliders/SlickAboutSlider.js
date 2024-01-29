import React, { Component } from "react";
import Slider from "react-slick";


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

export default class CustomArrows extends Component {
  render() {
    const settings = {
      dots: false,
      autoplay: true,
      autoplaySpeed: 2000,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,

          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 540,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
          }
        }
      ]
    };

    return (
      <div>
        <Slider {...settings}>

          <div className="trend-item1">
            <div className="trend-image position-relative rounded">
              <img  src="/images/team/1.webp" />
             
              
            </div>
          </div>


          <div>
            <div className="trend-item1">
              <div className="trend-image position-relative rounded">
                <img  src="/images/team/2.webp" />
               
              </div>
            </div>
          </div>



          <div>
            <div className="trend-item1">
              <div className="trend-image position-relative rounded">
                <img  src="/images/team/3.webp" />
               
              </div>
            </div>
          </div>

          <div>
            <div className="trend-item1">
              <div className="trend-image position-relative rounded">
                <img  src="/images/team/4.webp" />
               
              </div>
            </div>
          </div>

          <div>
            <div className="trend-item1">
              <div className="trend-image position-relative rounded">
                <img  src="/images/team/5.png" />
              
              </div>
            </div>
          </div>

          <div>
            <div className="trend-item1">
              <div className="trend-image position-relative rounded">
                <img  src="/images/team/6.png" />
                
              </div>
            </div>
          </div>

         

        </Slider>
      </div>
    );
  }
}