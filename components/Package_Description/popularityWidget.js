import React from 'react'
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';

export default function popularityWidget(props) {
  const Msg = () => (

    <div className="toastContent rounded m-0 pb-1">
      <div className="toastHeading rounded-top px-3 pt-2 ">
        What makes this tour so special?
      </div>
      <div className="p-2 mx-1 rounded-bottom toastBody" >
        <div className="mt-2 px-2 d-flex">
          <div className="toastPopularity col-lg-4 col-md-4 px-0" style={{ color: "black" }}>
            Popularity :
          </div>
          <div className="progress toastProgress rounded px-0 col-lg-8">
            <div className="progress-bar toastProgressBar" style={{
              background: "rgb(255,255,255)", width: props.progressBarPercentage,
              background: "linear-gradient(90deg, #0d4980  0%, #3079ff 40%, #0d4980 100%)"
            }} role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
        <div className=" mt-1 px-2 d-flex">
          <div className="toastBodyCount col-lg-2 col-md-2 px-0 " style={{ color: "black" }}>{props.packageCount}</div>
          <div className=" col-lg-10 px-0 toastBodydesc" style={{ color: "black" }}>bookings done for this tour in the last 7 days.</div>
        </div>
      </div>
    </div>

  )

  useEffect(() => {
    toast(<Msg />, { delay: 3000, style: { boxShadow: "none" } })
  }, [])

  return (
    <ToastContainer
      theme="theme"
      className="toastContainer"
      bodyClassName="rounded p-0"
      style={{ top: "10em", right: "-30px" }}
      transition={Slide}
      autoClose={false}
      limit={1}
      draggablePercent={20}
    />
  )
}



