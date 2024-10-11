import { useMemo } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import iphone from "../assets/iphone.png";
import iphoneLogo from "../assets/iphonelogo.png";
import { Link } from "react-router-dom";

const ControlledCarousel = () => {
  const items = useMemo(
    () => [
      {
        img: iphone,
        imgLogo: iphoneLogo,
        title1: "iPhone 15",
        title2: "Up to 10% off voucher",
      },
      {
        img: iphone,
        imgLogo: iphoneLogo,
        title1: "iPhone 15",
        title2: "Up to 10% off voucher",
      },
      {
        img: iphone,
        imgLogo: iphoneLogo,
        title1: "iPhone 15",
        title2: "Up to 10% off voucher",
      },
    ],
    []
  );

  return (
    <Carousel
      showIndicators={false}
      showThumbs={false}
      showStatus={false}
      showArrows={false}
      autoPlay
      infiniteLoop
    >
      {items.map(({ img, imgLogo, title1, title2 }, idx) => (
        <div key={idx} className="carousel-slide h-fit md:h-96">
          <div className="carousel-content w-full h-full bg-black flex items-start justify-between p-5 text-white md:flex-row flex-col-reverse relative">
            <div className="carousel-text-container md:mt-10 w-full md:w-[50%] absolute start-4 top-1/2 -translate-y-1/2 md:top-0 md:-translate-y-0 md:static">
              <div className="flex items-center gap-4 md:w-[50%] w-full">
                <img
                  src={imgLogo}
                  alt="iPhone logo"
                  className="carousel-logo max-w-5 md:max-w-10 md:h-19"
                />
                <span className="carousel-title text-xs md:text-lg">
                  {title1}
                </span>
              </div>
              <div className="text-start">
                <p className="carousel-discount font-bold text-2xl md:text-6xl">
                  {title2}
                </p>
                <Link
                  to="/ShopAll"
                  className="shop-link inline-block mt-5 text-sm md:text-md p-2 rounded-lg bg-white text-black"
                >
                  Shop Now
                </Link>
              </div>
            </div>
            <div className="carousel-image mt-5">
              <img src={img} alt="iPhone product" loading="lazy" />
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default ControlledCarousel;
