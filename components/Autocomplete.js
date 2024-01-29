import React, { useRef } from "react";
import { StandaloneSearchBox, LoadScript } from "@react-google-maps/api";

const Autocomplete = ({onSearchChange}) => {
  const inputRef = useRef();

  const handlePlaceChanged = () => {
    const [place] = inputRef.current.getPlaces();
    if (place) {
      console.log(place.formatted_address);
      onSearchChange(place.formatted_address);
      // console.log(place.geometry.location.lat());
      // console.log(place.geometry.location.Ing());
    }
  };
  // const handleInputChange = (e) => {
  //   const value = 
  // };
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyDYMrhimaZE8YLrfbriWwBNoTaqFbnDEbQ"
      libraries={["places"]}>
      <StandaloneSearchBox
        onLoad={ref => (inputRef.current = ref)}
        onPlacesChanged={handlePlaceChanged}>
        <input
          type="text"
          className="form-control"
          placeholder="Preferred Destination" 
          required
        />
      </StandaloneSearchBox >
    </LoadScript >
  );
};
export default Autocomplete;