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
                      Undoubtedly one of the best trip to Andaman & Nicobar, all thanks to TripzyGo. My travel was completely organised in a very professional way. Special thanks to Mr.Shubham and team for their efforts in making our travel memorable and hassle free.
                    </p>
                  </div>
                  <hr className="white" style={{ opacity: "1", height: "2px" }} ></hr>
                  <h4 className="mb-0 white">Prabhat Sharma</h4>
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
                        It was a really good experience. I wasn’t that confident with the service before but it was a treat for me to take a package from these guys. A few members of the company worked on my tour for Kashmir which were Aditya, Monika and Himanshu (as far I can remember), and were greatly engaged in my tour plan.              </p>

                    </div>
                    <hr className="white" style={{ opacity: "1", height: "2px" }} ></hr>
                    <h4 className="mb-0 white">Rafdor</h4>
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
                        Mr rakesh thapa helped us with each and everything he made our package economical , the stay was amazing and because of him our goa trip was successful and memorable              </p>

                    </div>
                    <hr className="white" style={{ opacity: "1", height: "2px" }} ></hr>
                    <h4 className="mb-0 white">Satyam sharma</h4>
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
                        Me and my husband visited Kashmir last week. Shubham from Tripzygo made our Kashmir trip super awesome and whenever we required his help or had any questions he was there with us throughout the trip. He also organized a surprise candle light dinner for us on the last day.
                        Thank you for making our journey very memorable.             </p>

                    </div>
                    <hr className="white" style={{ opacity: "1", height: "2px" }} ></hr>
                    <h4 className="mb-0 white">Debolina Banerjee</h4>
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
                        Great experience and great planning was done. Special mention to Miss Anjali who was available 24×7 for support
                      </p>

                    </div>
                    <hr className="white " style={{ opacity: "1", height: "2px" }} ></hr>
                    <h4 className="mb-0 white">Hiteswar Boro</h4>
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
                        Very good service, Mandeep is great employee in your centre. He helped me in many things and today I reached Australia.              </p>

                    </div>
                    <hr className="white" style={{ opacity: "1", height: "2px" }} ></hr>
                    <h4 className="mb-0 white">Aman Dahiya</h4>
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
                        I recently booked a 6N/7D Kerala tour package with tripzygo and had an amazing experience. The customer service was top-notch. The tour package was value for money; it included all the amenities that I had asked for.
                        Highly recommend tripzygo for your holiday bookings! 👍 </p>

                    </div>
                    <hr className="white" style={{ opacity: "1", height: "2px" }} ></hr>
                    <h4 className="mb-0 white">Deepika Dhiman</h4>
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
                        I had booked tour package of Goa from this agency. Rahul Mahajan attended me initially and during my stay at Goa, He is very courteous and assisted me throughout my stay and arranged everything as desired. I got package at very reasonable price in comparison to similar agencies. Hoping to book more packages in future. </p>

                    </div>
                    <hr className="white" style={{ opacity: "1", height: "2px" }} ></hr>
                    <h4 className="mb-0 white">Saurabh Tiwari</h4>
                  </div>
                </div>
                <div className="dot-overlay" style={{ opacity: "0.6" }}></div>
              </div>
            </div>
          </div>

          <div>
            <div className="trend-item1">
              <div className="trend-image position-relative rounded">
                <img className="testimonial-banner" src="images/testimonial/Thailand.webp" />
                <div className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index">
                  <div className="trend-content-title">
                    <div className="testimonial-description">
                      <img className="testimonial-quotes" src="/images/testimonial/quote-left-solid.png" style={{ width: "3rem" }} />
                      <p className="white pt-1 ps-3 pe-2 mb-1" >
                        We booked our trip to Thailand and all the arrangements and bookings were perfectly customised and executed.
                        The support from Mr. Gaurav was so smooth and fluent that we didn’t faced any issues.
                        Surely recommended for everyone. </p>

                    </div>
                    <hr className="white" style={{ opacity: "1", height: "2px" }} ></hr>
                    <h4 className="mb-0 white">Shikhar Chandnani</h4>
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
                    <div className="testimonial-description">
                      <img className="testimonial-quotes" src="/images/testimonial/quote-left-solid.png" style={{ width: "3rem" }} />
                      <p className="white pt-1 ps-3 pe-2 mb-1" >
                        It was a wonderful seamless experience provided by TripzyGo and everyone involved. We didn't have to worry about a thing during the entire trip. Special Thanks to Abhishek for quick assistance at all times. Thanks TripzyGo for this wonderful tour to kerala</p>

                    </div>
                    <hr className="white" style={{ opacity: "1", height: "2px" }} ></hr>
                    <h4 className="mb-0 white">Salil Rajput</h4>
                  </div>
                </div>
                <div className="dot-overlay" style={{ opacity: "0.6" }}></div>
              </div>
            </div>
          </div>

          <div>
            <div className="trend-item1">
              <div className="trend-image position-relative rounded">
                <img className="testimonial-banner" src="images/testimonial/Vrindavan.webp" />
                <div className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index">
                  <div className="trend-content-title">
                    <div className="testimonial-description">
                      <img className="testimonial-quotes" src="/images/testimonial/quote-left-solid.png" style={{ width: "3rem" }} />
                      <p className="white pt-1 ps-3 pe-2 pb-6 mb-6" >
                        Amazing trip with family to Vrindavan, special thanks to Mr Rakesh Thapa (TripzyGo International ) for your services and coordination.</p>

                    </div>
                    <hr className="white" style={{ opacity: "1", height: "2px" }} ></hr>
                    <h4 className="mb-0 white">Pradeep Gegta</h4>
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
                    <div className="testimonial-description">
                      <img className="testimonial-quotes" src="/images/testimonial/quote-left-solid.png" style={{ width: "3rem" }} />
                      <p className="white pt-1 ps-3 pe-2 mb-5" >
                        Booked a trip to kerala and it was an amazing experience travelling with Tripzygo.
                        Special thanks to Mr. Shubam for this efforts making my trip so special. I am looking forward for more travel memories with Tripzygo.</p>

                    </div>
                    <hr className="white" style={{ opacity: "1", height: "2px" }} ></hr>
                    <h4 className="mb-0 white">Vicky Kumar</h4>
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