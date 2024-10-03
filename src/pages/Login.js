import React from "react";
import loginImage from "../assets/loginimage.png";
import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
const Login = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    <div className="flex py-10 h-[70vh] md:h-fit w-full">
      <div className="flex-1 hidden md:block">
        <img src={loginImage} className="w-full" alt="" />
      </div>
      <div className="auth flex-1 flex flex-col items-center justify-center gap-5">
        <div className="flex flex-col items-start gap-5  w-[90%] md:w-3/5 mt-20 md:mt-0">
          <h3 className="text-2xl md:text-3xl font-bold">
            Log in to Exclusive
          </h3>
          <p className="">Enter your details below</p>
          <Input placeholder="Email" type="email" />
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              type={show ? "text" : "password"}
              placeholder="Enter password"
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
          <div className="flex items-center justify-between w-full">
            <Button className="" colorScheme="red" size={"lg"} width={"40%"}>
              <p className="text-sm">Log In</p>
            </Button>
            <div className="text-red-500 font-medium text-sm underline">
              <a href="">Forgot Password?</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
