import React from "react";
import Slider from "react-slick";

const ProductCarousal = ({ children }) => {
  var settings = {
    className: "variable-width",
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    infinite: false,
  };

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <span
        className="bg-[#F5F5F5] hidden md:flex items-center justify-center md:w-10 md:h-10 rounded-full absolute z-40 end-12 -top-16 cursor-pointer"
        onClick={onClick}
      >
        <i className="fa-solid fa-arrow-left" style={{ color: "#000000" }}></i>
      </span>
    );
  }

  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <span
        className="bg-[#F5F5F5] items-center justify-center w-10 h-10 rounded-full absolute z-40 end-0 -top-16 cursor-pointer hidden md:flex"
        onClick={onClick}
      >
        <i className="fa-solid fa-arrow-right" style={{ color: "#000000" }}></i>
      </span>
    );
  }

  return (
    <div>
      <Slider {...settings}>
        {React.Children.map(children, (child, index) => (
          <div key={index}>{child}</div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductCarousal;
