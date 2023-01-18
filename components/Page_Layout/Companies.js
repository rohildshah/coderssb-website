import React from "react";
import Slider from "react-slick";
import company_images from "../../utils/companies";

export default function Companies() {
  const imgComponents = company_images.map(company => {
    return (
      <div className = "sponsor-img" key={company}>
        <img src={company} alt={"banner_1.png"} />
      </div>
    );
  });

  var settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    dots: true,
    fade: true,
    initialSlide: 0,
    speed: 700,
    rows: 1,
    arrows: false,    
    autoplay: true,
  };
  return (
    // a random distinct key
    <Slider {...settings}>{imgComponents}</Slider>
  );
}
