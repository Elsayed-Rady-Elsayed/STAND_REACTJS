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
    infinite: false, // Disable infinite scroll/cloning
  };

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <span
        className="bg-[#F5F5F5] flex items-center justify-center w-10 h-10 rounded-full absolute z-40 end-12 -top-16 cursor-pointer"
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
        className="bg-[#F5F5F5] flex items-center justify-center w-10 h-10 rounded-full absolute z-40 end-0 -top-16 cursor-pointer"
        onClick={onClick}
      >
        <i className="fa-solid fa-arrow-right" style={{ color: "#000000" }}></i>
      </span>
    );
  }

  return (
    <div>
      <Slider {...settings}>
        {/* Map over the children and assign unique keys if necessary */}
        {React.Children.map(children, (child, index) => (
          <div key={index}>{child}</div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductCarousal;
