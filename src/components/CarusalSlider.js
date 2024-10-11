import { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import iphone from "../assets/iphone.png";
import iphoneLogo from "../assets/iphonelogo.png";
function ControlledCarousel() {
  const Items = [
    {
      img: iphone,
      imgLogo: iphoneLogo,
      title1: "iphone 15 ",
      title2: `up to 10% off voucher`,
    },
    {
      img: iphone,
      imgLogo: iphoneLogo,
      title1: "iphone 15 ",
      title2: `up to 10% off voucher`,
    },
    {
      img: iphone,
      imgLogo: iphoneLogo,
      title1: "iphone 15 ",
      title2: `up to 10% off voucher`,
    },
  ];
  return (
    <Carousel
      showIndicators={false}
      showThumbs={false}
      showStatus={false}
      showArrows={false}
      autoPlay={true}
    >
      {Items.map((el, idx) => {
        return (
          <div className="h-fit md:h-96 ">
            <div className="w-full h-full bg-black flex items-start justify-between p-5 text-white md:flex-row flex-col-reverse relative">
              <div className="md:mt-10 w-full md:w-[50%] md:ms-10  absolute start-4 top-1/2 -translate-y-1/2 md:top-0 md:-translate-y-0 md:static">
                <div className="flex items-center gap-4 md:w-[50%] w-full">
                  {" "}
                  <img
                    src={el.imgLogo}
                    alt=""
                    className="max-w-5 md:max-w-10 md:h-19"
                  />
                  <span className="text-xs md:text-lg">{el.title1}</span>
                </div>
                <div className="text-start">
                  <p className="font-bold text-2xl md:text-6xl text-start">
                    {el.title2}
                  </p>
                  <a
                    href=""
                    className="inline-block mt-5 text-sm md:text-md p-2 rounded-lg bg-white text-black"
                  >
                    <span>shop now </span>
                  </a>
                </div>
              </div>

              <div className="mt-5">
                <img src={el.img} alt="" />
              </div>
            </div>
          </div>
        );
      })}
    </Carousel>
  );
}

export default ControlledCarousel;
