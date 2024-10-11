import React from "react";
import about from "../assets/About.png";
import iconShop from "../assets/icon_shop.png";
import PorductCarusal from "../components/PorductCarusal";
import personImg from "../assets/personAbout.png";
import ic1 from "../assets/icon-delivery.png";
import ic2 from "../assets/Icon-Customer service.png";
import ic3 from "../assets/Icon-secure.png";
const About = () => {
  return (
    <div className="md:w-[90%] m-auto w-full mt-10">
      <div className="flex items-center flex-col md:flex-row p-2 md:p-0">
        <div className="text-start md:w-1/2 w-full md:pe-20">
          <h2 className="text-3xl font-bold mb-5">Our Story</h2>
          <p className="text-sm mb-3">
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.{" "}
          </p>
          <p className="text-sm mb-3">
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </div>
        <img src={about} alt="" className="md:w-1/2 w-full" />
      </div>
      <div className="my-[5rem] flex justify-between items-center gap-2 flex-col md:flex-row">
        {[1, 2, 3, 4, 5].map((el) => {
          return (
            <div className="flex flex-col items-center justify-center gap-3 h-[200px] w-[250px] border  me-7 ms-5 md:ms-0 rounded-md hover:bg-gray-100">
              <span className="bg-gray-200 w-20 h-20 rounded-full p-2">
                <div className="bg-black w-full h-full rounded-full flex items-center justify-center delivery for all orders over $140">
                  <img src={iconShop} className="" alt="" />
                </div>
              </span>{" "}
              <p className="text-lg capitalize text-center">
                <p className="font-bold text-2xl">10.5k</p>
                <p className="text-sm">sallers active site</p>
              </p>
            </div>
          );
        })}
      </div>
      <div className="my-[5rem]">
        <div className="slider-container">
          <PorductCarusal>
            {[1, 2, 3, 4, 6, 6].map((el) => {
              return (
                <div className="flex flex-col gap-1 items-start mx-5 max-w-[270px]">
                  <img src={personImg} className="w-full" alt="" />
                  <p className="text-2xl font-semibold mt-3">Emma Watson</p>
                  <p className="text-sm">Managing Director</p>
                  <ul className="flex justify-between mt-2 gap-4">
                    <li>
                      <a href="">
                        <i
                          className="fa-brands fa-facebook-f"
                          style={{
                            color: "#000000",
                          }}
                        ></i>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i
                          className="fa-brands fa-x-twitter "
                          style={{
                            color: "#000000",
                          }}
                        ></i>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i
                          className="fa-brands fa-linkedin-in "
                          style={{
                            color: "#000000",
                          }}
                        ></i>{" "}
                      </a>
                    </li>
                  </ul>
                </div>
              );
            })}
          </PorductCarusal>{" "}
        </div>
      </div>
      <div className="md:p-0 p-2 flex justify-evenly my-[5rem] md:flex-row flex-col gap-5">
        <div className="flex flex-col justify-center items-center gap-2">
          <span className="bg-gray-200 w-20 h-20 rounded-full p-2">
            <div className="bg-black w-full h-full rounded-full flex items-center justify-center delivery for all orders over $140">
              <img src={ic1} className="" alt="" />
            </div>
          </span>
          <p className="font-bold">FREE AND FAST DELIVERY</p>
          <p>Free delivery for all orders over $140</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <span className="bg-gray-200 w-20 h-20 rounded-full p-2">
            <div className="bg-black w-full h-full rounded-full flex items-center justify-center delivery for all orders over $140">
              <img src={ic2} className="" alt="" />
            </div>
          </span>
          <p className="font-bold">24/7 CUSTOMER SERVICE</p>
          <p>Friendly 24/7 customer support</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <span className="bg-gray-200 w-20 h-20 rounded-full p-2">
            <div className="bg-black w-full h-full rounded-full flex items-center justify-center delivery for all orders over $140">
              <img src={ic3} className="" alt="" />
            </div>
          </span>
          <p className="font-bold">MONEY BACK GUARANTEE</p>
          <p>We reurn money within 30 days</p>
        </div>
      </div>
    </div>
  );
};

export default About;
