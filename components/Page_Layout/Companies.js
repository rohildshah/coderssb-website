import React from "react";
import Slider from "react-slick";
import company_images from "../../utils/companies";

export default function Companies() {
  const imgComponents = company_images.map(company => {
    return (
      <div className = "img-style" key={company}>
        <img src={company} alt={"banner_1.png"} />
      </div>
    );
  });

  var settings = {
    className: "center",
    centerPadding: "10px",
    centerMode: true,
    infinite: true,
    slidesToShow: 4,
    slidesToSCroll: 4,
    initialSlide: 0,
    speed: 700,
    rows: 1,
    arrows: false,    
    adaptiveHeight: true,
    adaptiveWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    // a random distinct key
    <Slider {...settings}>{imgComponents}</Slider>
  );
}
