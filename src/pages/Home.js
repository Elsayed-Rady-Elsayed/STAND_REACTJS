import React, { useEffect } from "react";
import ControlledCarousel from "../components/CarusalSlider";
import SideBar from "../components/SideBar";
import SectionHead from "../components/SectionHead";
import { Button } from "@chakra-ui/react";

const Home = () => {
  return (
    <div className="w-[90%] m-auto">
      <div className="flex mb-[5rem]">
        <div className="hidden md:block w-[25%]">
          <SideBar />
        </div>
        <div className="w-full md:w-[75%] p-5">
          <ControlledCarousel />
        </div>
      </div>
      <div className="Todays">
        <SectionHead title={"Today's"} />
        <div className="flex justify-between items-center mt-2">
          <h3 className="text-2xl font-bold">Best selling products</h3>
          <Button background={"red"} size={"lg"} color={"white"}>
            View All
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
