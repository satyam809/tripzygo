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
      dots: true,
      autoplay: true,
      autoplaySpeed: 2000,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            // arrows: false,
            dots: true

          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2,
            // arrows: false,
            dots: true
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            // arrows: false,
            dots: true
          }
        }
      ]
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <div className="trend-item1">
              <div className="trend-image position-relative rounded">
               <a href={this.props.Link1} target="_blank">
                <img src={this.props.package1Image} />
                </a>
              </div>
            </div>
          </div>
          <div>


            <div className="trend-item1">
              <div className="trend-image position-relative rounded">
              <a href={this.props.Link2} target="_blank">
                <img src={this.props.package2Image} />
</a>
              </div>
            </div>


          </div>
          <div>

            <div className="trend-item1">
              <div className="trend-image position-relative rounded">
              <a href={this.props.Link3} target="_blank">
                <img src={this.props.package3Image} />
                </a>
              </div>
            </div>

          </div>
          <div>

            <div className="trend-item1">
              <div className="trend-image position-relative rounded">
              <a href={this.props.Link4} target="_blank">
                <img src={this.props.package4Image} alt={this.props.alt4} />
                </a>

              </div>
            </div>

          </div>
          {/* <div>
          
          <div className="trend-item1">
            <div className="trend-image position-relative rounded">
              <img src={this.props.package5Image} alt={this.props.alt5} />                                                                           
              
            </div>
          </div>
       
      </div> */}

        </Slider>
      </div>
    );
  }
}