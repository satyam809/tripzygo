import React from "react";
import Star from "./star_rating";

export default function Package_data({ packages }) {
  //database array name in which data stored

 
  return (
    <div>
      {packages?.map((pack) => (
        <div className="destination-list">
          <div className="trend-full bg-white box-shadow overflow-hidden mb-4 rounded">
            <div className="row package-card">
              <div className="col-lg-4 col-md-3">
                <a target="_blank" href={pack?.view}>
                  <div className="trend-item2 package-image mb-0 rounded-0 rounded-top">
                    <a
                      style={{ backgroundImage: `url(${pack?.img})` }}
                      alt={pack?.package_alt}
                    >
                        <div className="color-overlay" style={{opacity:"0.5"}}></div>
                      <div className="col-lg-6 col-md-6 package-name-container">
                        <div className=" package-name pe-2">
                          <h3 className="mb-1 mx-1" style={{ fontSize: "20px" }}>
                            <a
                              target="_blank"
                              style={{ color: "white" }}
                              href={pack?.view}
                            >
                              {pack?.package_name}
                            </a>
                          </h3>
                          <h6
                            className="theme mb-0"
                            style={{ fontSize: "15px", color: "white" }}
                          >
                            <span
                              className="pe-2"
                              style={{ fontSize: "13px", color: "white" }}
                            >
                              <i className="far fa-clock pe-1" />
                              {pack.package_duration}
                            </span>
                            <span style={{ fontSize: "13px", color: "white" }}>
                              <i className="fa fa-map-marker-alt pe-1" />
                              {pack.destination}
                            </span>
                          </h6>
                        </div>
                      </div>
                    </a>
                    
                  </div>
                </a>
              </div>

              <div className="col-lg-2 col-md-3 shadowpackage package-duration-container pb-3 pt-2">
                <div className="trend-content text-md-end text-center col-sm-12">
                  <div className="trend-price col-sm-8 px-1">
                    <span
                      className="price-strikeoff d-block "
                      style={{
                        textDecoration: "line-through",
                        fontSize: "12px",
                      }}
                    >
                      <i
                        className="fa fa-inr"
                        style={{ fontSize: "12px" }}
                        aria-hidden="true"
                      ></i>
                      {pack?.strikeoff_price} Per Adult
                    </span>

                    <span
                      className="mb-0 d-block"
                      style={{ color: "#0d4980", fontWeight: "500", fontSize: "20px" }}
                    >
                      <i
                        className="fa fa-inr"
                        style={{ fontSize: "20px" }}
                        aria-hidden="true"
                      ></i>
                      {pack?.formatted_price} Per Adult
                    </span>

                    <div className="rating rating-container">

                      <div className="d-flex">
                      <Star stars={pack?.package_rating} />
                      <div className="pt-1 ps-2" style={{color:"black"}}>
                      {pack?.package_rating}/5 
                      </div>
                      </div>

                      <a target="_blank" href={pack?.view} className="nir-btn">
                        View 
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
