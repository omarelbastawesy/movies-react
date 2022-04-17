import React from "react";

// routing
import { Link } from "react-router-dom";

// styles
import { Image, ConThumb } from "./thumb.styles";

const Thumb = ({ image, movieId, clickable }) => (
  <ConThumb>
    {clickable ? (
      <Link to={`/${movieId}`}>
        <Image src={image} alt="Image_Thumb" />
      </Link>
    ) : (
      <Image src={image} alt="Image_Thumb" />
    )}
  </ConThumb>
);

export default Thumb;
