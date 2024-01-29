import React from 'react'

export default function locationMap(props) {
  return (
    <>
    <div className="single-map mb-4">
                                    <h4>Map</h4>
                                    <div className="map rounded overflow-hidden">
                                        <div style={{ width: "100%" }}>
                                            <iframe className=" rounded overflow-hidden" height="400" src={props.mapLink}></iframe>
                                        </div>
                                    </div>
                                </div>
    </>
  )
}

