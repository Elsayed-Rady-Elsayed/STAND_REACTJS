import { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function ControlledCarousel() {
  return (
    <Carousel showIndicators={false} showThumbs={false} showStatus={false}>
      <div className="h-50 md:h-96">
        <img
          src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
          className="w-full h-full"
        />
        <p className="legend">Legend 1</p>
      </div>
      <div className="h-50 md:h-80">
        <img
          src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
          className="w-full h-full"
        />
        <p className="legend">Legend 1</p>
      </div>
      <div className="h-50 md:h-80">
        <img
          src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
          className="w-full h-full"
        />
        <p className="legend">Legend 1</p>
      </div>
    </Carousel>
  );
}

export default ControlledCarousel;
