import { Button } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="md:w-[90%] w-full p-2 md:p-0 m-auto my-20 flex flex-col gap-5 items-center">
      <h1 className="text-4xl font-bold">404 Not Found</h1>
      <p>Your visited page not found. You may go home page.</p>
      <Link to="/">
        <Button colorScheme="red" size={"lg"} width={"fit-content"}>
          Back To Home Page
        </Button>
      </Link>
    </div>
  );
};

export default Error404;
