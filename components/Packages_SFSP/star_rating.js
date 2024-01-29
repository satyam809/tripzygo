import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";


const Star = (props) => {
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;
    
    return (
      <span key={index} >
        {props.stars >= index + 1 ? (
          <FaStar className="icon" size={".8rem"} />
        ) : props.stars >= number ? (
          <FaStarHalfAlt className="icon" size={".8rem"} />
        ) : (
          <AiOutlineStar className="icon" size={".8rem"} />
        )}
      </span>
    );
  });

  return (
    
      <div className="icon-style d-block">
        {ratingStar}
      </div>
    
  );
};


export default Star;
