import React, { useEffect, useMemo } from "react";
import ControlledCarousel from "../components/CarusalSlider";
import SideBar from "../components/SideBar";
import SectionHead from "../components/SectionHead";
import PorductCarusal from "../components/PorductCarusal";
import Button from "../components/Button";
import coat from "../assets/coat.png";
import Card from "../components/Card";
import phone from "../assets/Category-CellPhone.png";
import computer from "../assets/Category-Computer.png";
import watch from "../assets/Category-SmartWatch.png";
import camera from "../assets/Category-Camera.png";
import headphone from "../assets/Category-Headphone.png";
import gaming from "../assets/Category-Gamepad.png";
import CategoryCard from "../components/CategoryCard";
import jbl from "../assets/Frame.png";
import f2 from "../assets/Frame2.png";
import f3 from "../assets/Frame3.png";
import f4 from "../assets/Frame5.png";
import f5 from "../assets/Frame4.png";
import ic1 from "../assets/icon-delivery.png";
import ic2 from "../assets/Icon-Customer service.png";
import ic3 from "../assets/Icon-secure.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Timer from "../components/Timer";
import Advertisement from "../components/Advertisement";
import Features from "../components/Features";
import FeaturesSection from "../components/Features";
const Home = () => {
  useEffect(() => {}, [window.innerWidth]);
  const categories = [
    { image: phone, title: "phones" },
    { image: computer, title: "Computers" },
    { image: watch, title: "smartWatch" },
    { image: camera, title: "camera" },
    { image: headphone, title: "headphone" },
    { image: gaming, title: "gaming" },
  ];
  const Features = useMemo(() => [
    {
      img: ic1,
      title: "FREE AND FAST DELIVERY",
      subTitle: "Free delivery for all orders over $140",
    },
    {
      img: ic2,
      title: "24/7 CUSTOMER SERVICE",
      subTitle: "Friendly 24/7 customer support",
    },
    {
      img: ic3,
      title: "MONEY BACK GUARANTEE",
      subTitle: "We reurn money within 30 days",
    },
  ]);
  return (
    <div className="md:w-[90%] w-full m-auto">
      <div className="flex md:mb-[3rem] mb-[1rem]">
        <div className="hidden md:block w-[25%]">
          <SideBar />
        </div>
        <div className="w-full md:w-[75%] md:p-5">
          <ControlledCarousel />
        </div>
      </div>

      <div className="Todays relative md:mb-[3rem] mb-[1rem] md:p-0 p-2">
        <SectionHead title={"Today's"} />
        <Timer />
        <div className="slider-container">
          <PorductCarusal>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((el, idx) => {
              return (
                <Card
                  key={idx}
                  image={coat}
                  title="the north coat"
                  price={`$${260}`}
                  oldPrice={`$${350}`}
                  stars={[1, 2, 3]}
                  reviews={22}
                />
              );
            })}
          </PorductCarusal>
        </div>
        <Button title={"View All Products"} handleClick={() => {}} />
      </div>

      <hr />

      <div className="categories relative mt-[3rem] md:p-0 p-2">
        <SectionHead title={"Categories"} />
        <div className="slider-container mb-[5rem] mt-3">
          <PorductCarusal>
            {categories.map((el, idx) => {
              return (
                <CategoryCard key={idx} image={el.image} title={el.title} />
              );
            })}
          </PorductCarusal>
        </div>
      </div>

      <hr />

      <div className="bestSell relative md:my-[3rem] my-[1rem] md:p-0 p-2">
        <SectionHead title={"Best Selling Products"} />
        <div className="slider-container mb-[5rem] mt-5">
          <PorductCarusal>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((el, idx) => {
              return (
                <Card
                  key={idx}
                  image={coat}
                  title="the north coat"
                  price={`$${260}`}
                  oldPrice={`$${350}`}
                  stars={[1, 2, 3]}
                  reviews={22}
                />
              );
            })}
          </PorductCarusal>
        </div>
      </div>

      <Advertisement
        days={"12"}
        hours={"24"}
        img={jbl}
        minutes={"21"}
        seconds={"16"}
        subtitle={"Enhance Your Music Experience"}
        title={"Categories"}
      />

      <div className="md:my-[3rem] my-[1rem] md:p-0 p-2">
        <SectionHead title={"Explore Our Products"} />
        {window.innerWidth > 980 ? (
          <div className="mt-5 grid grid-cols-1 md:grid-cols-4 gap-5  mb-[3rem]">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((el, idx) => {
              return (
                <Card
                  label={idx % 2 == 0 && "new"}
                  image={coat}
                  title="the north coat"
                  price={`$${260}`}
                  oldPrice={`$${350}`}
                  stars={[1, 2, 3]}
                  reviews={22}
                />
              );
            })}
          </div>
        ) : (
          <div className="slider-container mb-[5rem]">
            <PorductCarusal>
              {[1, 2, 3, 4, 5, 6, 7, 8].map((el, idx) => {
                return (
                  <Card
                    image={coat}
                    title="the north coat"
                    price={`$${260}`}
                    oldPrice={`$${350}`}
                    stars={[1, 2, 3]}
                    reviews={22}
                  />
                );
              })}
            </PorductCarusal>
          </div>
        )}

        <Link to={"/ShopAll"}>
          <Button title={"View All Products"} handleClick={() => {}} />
        </Link>
      </div>

      <div className="md:p-0 p-2">
        <SectionHead title={"New Arrival"} />
        <div className="flex gap-5 mt-10 md:flex-row flex-col w-full lg:justify-center">
          <div className="relative">
            <img src={f2} alt="" className="" />
            <div className="absolute bottom-4 text-white text-start start-2 md:start-4 md:w-1/2">
              <h3 className="text-sm md:text-3xl">PlayStation 5</h3>
              <p className="text-xs md:text-sm md:my-2 my-1">
                Black and white version of the ps5 comming out
              </p>
              <a href="" className="capitalize underline text-sm md:text-md">
                shop now
              </a>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-3">
            <div className="relative">
              <img src={f3} alt="" />
              <div className="absolute bottom-4 text-white text-start start-2 md:start-4 md:w-1/2">
                <h3 className="text-sm md:text-3xl">Women’s Collections</h3>
                <p className="text-xs md:text-sm my-2 md:block hidden">
                  Featured woman collections that give you another vibe.
                </p>
                <a href="" className="capitalize underline text-sm md:text-md">
                  shop now
                </a>
              </div>
            </div>
            <div className="flex justify-between gap-1">
              <div className="relative">
                <img src={f4} alt="" />
                <div className="absolute bottom-4 text-white text-start start-2 md:start-4">
                  <h3 className="text-sm md:text-3xl">Speakers</h3>
                  <p className="text-sm md:my-2 md:block hidden">
                    Amazon wireless speakers{" "}
                  </p>
                  <a
                    href=""
                    className="capitalize underline text-xs md:text-md"
                  >
                    shop now
                  </a>
                </div>
              </div>
              <div className="relative">
                <img src={f5} alt="" />
                <div className="absolute bottom-4 text-white text-start start-2 md:start-4 ">
                  <h3 className="text-sm md:text-3xl m-0">Perfume</h3>
                  <p className="text-sm md:my-2 md:block hidden">
                    GUCCI INTENSE OUD EDP{" "}
                  </p>
                  <a
                    href=""
                    className="capitalize underline text-xs md:text-md"
                  >
                    shop now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:p-0 p-2 flex justify-evenly my-[5rem] md:flex-row flex-col gap-5">
        {Features.map((el, idx) => {
          return (
            <FeaturesSection
              img={el.img}
              subTitle={el.subTitle}
              title={el.title}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
