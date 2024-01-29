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
            arrows: false,

          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2,
            arrows: false,

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

  
           <div class="testimonial-slide">
             <div class="testimonial_box">
               <div class="testimonial_box-inner">
                 <div class="testimonial_box-top">
                   <div class="testimonial_box-icon">
                     <i class="fas fa-quote-right"></i>
                   </div>
                   <div class="testimonial_box-text">
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus optio facilis beatae.</p>
                   </div>
                   <div class="testimonial_box-img">
                    <img src="https://i.ibb.co/hKgs8gm/profile.jpg" alt="profile"/>
                  </div>
                  <div class="testimonial_box-name">
                    <h4>John Doe</h4>
                 </div>
                 {/* <div class="testimonial_box-job">
                   <p>MANAGER</p>
                 </div> */}
                 </div>
               </div>
             </div>
           </div>
           <div class="testimonial-slide">
            <div class="testimonial_box">
              <div class="testimonial_box-inner">
                <div class="testimonial_box-top">
                  <div class="testimonial_box-icon">
                    <i class="fas fa-quote-right"></i>
                  </div>
                  <div class="testimonial_box-text">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus optio facilis beatae.</p>
                  </div>
                  <div class="testimonial_box-img">
                   <img src="https://i.ibb.co/hKgs8gm/profile.jpg" alt="profile"/>
                 </div>
                 <div class="testimonial_box-name">
                   <h4>John Doe</h4>
                </div>
                {/* <div class="testimonial_box-job">
                  <p>CEO</p>
                </div> */}
                </div>
              </div>
            </div>
          </div>
          <div class="testimonial-slide">
            <div class="testimonial_box">
              <div class="testimonial_box-inner">
                <div class="testimonial_box-top">
                  <div class="testimonial_box-icon">
                    <i class="fas fa-quote-right"></i>
                  </div>
                  <div class="testimonial_box-text">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus optio facilis beatae.</p>
                  </div>
                  <div class="testimonial_box-img">
                   <img src="https://i.ibb.co/hKgs8gm/profile.jpg" alt="profile"/>
                 </div>
                 <div class="testimonial_box-name">
                   <h4>John Doe</h4>
                </div>
                {/* <div class="testimonial_box-job">
                  <p>Co-Founder</p>
                </div> */}
                </div>
              </div>
            </div>
          </div>
          <div class="testimonial-slide">
            <div class="testimonial_box">
              <div class="testimonial_box-inner">
                <div class="testimonial_box-top">
                  <div class="testimonial_box-icon">
                    <i class="fas fa-quote-right"></i>
                  </div>
                  <div class="testimonial_box-text">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus optio facilis beatae.</p>
                  </div>
                  <div class="testimonial_box-img">
                   <img src="https://i.ibb.co/hKgs8gm/profile.jpg" alt="profile"/>
                 </div>
                 <div class="testimonial_box-name">
                   <h4>John Doe</h4>
                </div>
                {/* <div class="testimonial_box-job">
                  <p>SEO</p>
                </div> */}
                </div>
              </div>
            </div>
          </div>
  

        </Slider>
      </div>
    );
  }
}