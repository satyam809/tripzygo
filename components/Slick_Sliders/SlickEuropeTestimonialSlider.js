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
              <img className="testimonial-banner" src="images/testimonial/Andaman.webp" />
              <div className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index">
                <div className="trend-content-title">
                  <div className="testimonial-description">
                    <img className="testimonial-quotes" src="/images/testimonial/quote-left-solid.png" style={{ width: "3rem" }} />
                    <p className="white pt-1 ps-3 pe-2 mb-1" >
                    I recently booked a Europe tour package with Tripzygo, and it was an incredible experience from start to finish. The itinerary was well-planned, and we got to visit all the major cities and accommodations were top-notch. I highly recommend Tripzygo for a hassle-free and memorable European adventure!
                    </p>
                  </div>
                  <hr className="white" style={{ opacity: "1", height: "2px" }} ></hr>
                  <h4 className="mb-0 white">Pooja Joshi</h4>
                </div>
              </div>
              <div className="dot-overlay" style={{ opacity: "0.6" }}></div>
            </div>
          </div>


          <div>
            <div className="trend-item1">
              <div className="trend-image position-relative rounded">
                <img className="testimonial-banner" src="images/testimonial/Kashmir.webp" />
                <div className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index">
                  <div className="trend-content-title">
                    <div className="testimonial-description ">
                      <img className="testimonial-quotes" src="/images/testimonial/quote-left-solid.png" style={{ width: "3rem" }} />
                      <p className="white pt-1 ps-3 pe-2 mb-1" >
                      Tripzygo's Europe tour package exceeded my expectations in every way. My whole experience was enjoyable. If you're looking for a stress-free and well-organized European vacation, Tripzygo is the way to go!</p>

                    </div>
                    <hr className="white" style={{ opacity: "1", height: "2px" }} ></hr>
                    <h4 className="mb-0 white">Vikram Singhania</h4>
                  </div>
                </div>
                <div className="dot-overlay" style={{ opacity: "0.6" }}></div>
              </div>
            </div>
          </div>



          <div>
            <div className="trend-item1">
              <div className="trend-image position-relative rounded">
                <img className="testimonial-banner" src="images/testimonial/Goa.webp" />
                <div className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index">
                  <div className="trend-content-title">
                    <div className="testimonial-description ">
                      <img className="testimonial-quotes" src="/images/testimonial/quote-left-solid.png" style={{ width: "3rem" }} />
                      <p className="white pt-1 ps-3 pe-2 pb-6" >
                      I cannot say enough good things about my Europe tour with Tripzygo. The customer service was exceptional, and the staff went above and beyond to ensure our satisfaction. I wouldn't hesitate to book another trip with Tripzygo.</p>

                    </div>
                    <hr className="white" style={{ opacity: "1", height: "2px" }} ></hr>
                    <h4 className="mb-0 white">Anjali Kapoor</h4>
                  </div>
                </div>
                <div className="dot-overlay" style={{ opacity: "0.6" }}></div>
              </div>
            </div>
          </div>

          <div>
            <div className="trend-item1">
              <div className="trend-image position-relative rounded">
                <img className="testimonial-banner" src="images/testimonial/Kashmir.webp" />
                <div className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index">
                  <div className="trend-content-title">
                    <div className="testimonial-description ">
                      <img className="testimonial-quotes" src="/images/testimonial/quote-left-solid.png" style={{ width: "3rem" }} />
                      <p className="white pt-1 ps-3 pe-2 mb-1" >
                      I had an incredible time on my Europe tour with Tripzygo. They truly delivered a seamless and memorable vacation. I'm already planning my next adventure with them!</p>

                    </div>
                    <hr className="white" style={{ opacity: "1", height: "2px" }} ></hr>
                    <h4 className="mb-0 white">Siddharth Bhatia</h4>
                  </div>
                </div>
                <div className="dot-overlay" style={{ opacity: "0.6" }}></div>
              </div>
            </div>
          </div>

          <div>
            <div className="trend-item1">
              <div className="trend-image position-relative rounded">
                <img className="testimonial-banner" src="images/testimonial/Kerela.webp" />
                <div className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index">
                  <div className="trend-content-title">
                    <div className="testimonial-description" >
                      <img className="testimonial-quotes" src="/images/testimonial/quote-left-solid.png" style={{ width: "3rem" }} />
                      <p className="white pt-1 ps-3 pe-2 pb-6 mb-6" >
                      Tripzygo's Europe tour package was the best decision I made for my vacation. From the moment I inquired about the trip, their team was responsive and helpful. I highly recommend Tripzygo for an unforgettable European getaway.
                      </p>

                    </div>
                    <hr className="white " style={{ opacity: "1", height: "2px" }} ></hr>
                    <h4 className="mb-0 white">Ananya Khanna</h4>
                  </div>
                </div>
                <div className="dot-overlay" style={{ opacity: "0.6" }}></div>
              </div>
            </div>
          </div>

          <div>
            <div className="trend-item1">
              <div className="trend-image position-relative rounded">
                <img className="testimonial-banner" src="images/testimonial/Australia.webp" />
                <div className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index">
                  <div className="trend-content-title">
                    <div className="testimonial-description">
                      <img className="testimonial-quotes" src="/images/testimonial/quote-left-solid.png" style={{ width: "3rem" }} />
                      <p className="white pt-1 ps-3 pe-2 pb-6 mb-6" >
                      I recently returned from a Europe tour arranged by Tripzygo, and I couldn't be happier with my experience. Tripzygo is a reliable choice for anyone looking to explore Europe hassle-free.</p>

                    </div>
                    <hr className="white" style={{ opacity: "1", height: "2px" }} ></hr>
                    <h4 className="mb-0 white">Nisha Sharma</h4>
                  </div>
                </div>
                <div className="dot-overlay" style={{ opacity: "0.6" }}></div>
              </div>
            </div>
          </div>

          <div>
            <div className="trend-item1">
              <div className="trend-image position-relative rounded">
                <img className="testimonial-banner" src="images/testimonial/Kerela.webp" />
                <div className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index">
                  <div className="trend-content-title">
                    <div className="testimonial-description pb-2">
                      <img className="testimonial-quotes" src="/images/testimonial/quote-left-solid.png" style={{ width: "3rem" }} />
                      <p className="white pt-1 ps-3 pe-2 mb-1" >
                      My family and I had an amazing time on our Europe tour with Tripzygo. Tripzygo's attention to detail and commitment to customer satisfaction made this trip truly exceptional. I would book with them again without hesitation.👍 </p>

                    </div>
                    <hr className="white" style={{ opacity: "1", height: "2px" }} ></hr>
                    <h4 className="mb-0 white">Aishwarya Gupta</h4>
                  </div>
                </div>
                <div className="dot-overlay" style={{ opacity: "0.6" }}></div>
              </div>
            </div>
          </div>

          <div>
            <div className="trend-item1">
              <div className="trend-image position-relative rounded">
                <img className="testimonial-banner" src="images/testimonial/Goa.webp" />
                <div className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index">
                  <div className="trend-content-title">
                    <div className="testimonial-description">
                      <img className="testimonial-quotes" src="/images/testimonial/quote-left-solid.png" style={{ width: "3rem" }} />
                      <p className="white pt-1 ps-3 pe-2 mb-1" >
                      Tripzygo's Europe tour package was an absolute delight. The itinerary was well-thought-out, taking us to iconic landmarks and off-the-beaten-path locations. The guides were enthusiastic, they went above and beyond to ensure we had the best experience.</p>

                    </div>
                    <hr className="white" style={{ opacity: "1", height: "2px" }} ></hr>
                    <h4 className="mb-0 white">Prakash Joshi</h4>
                  </div>
                </div>
                <div className="dot-overlay" style={{ opacity: "0.6" }}></div>
              </div>
            </div>
          </div>

      

        </Slider>
      </div>
    );
  }
}