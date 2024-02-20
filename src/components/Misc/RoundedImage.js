import React from "react";

const RoundedImage = ({ imageUrl, altText }) => {
  const imageContainerStyle = {
    borderRadius: "50%", 
    overflow: "hidden", 
    width: "220px", 
    height: "220px", 
    margin: "auto", 
    alignItems:"center"
  };

  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover", 
  };

  return (
    <div style={imageContainerStyle}>
      <img src={imageUrl} alt={altText} style={imageStyle} />
    </div>
  );
};

export default RoundedImage;
