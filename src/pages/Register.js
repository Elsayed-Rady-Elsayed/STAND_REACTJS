import React from "react";
import loginImage from "../assets/loginimage.png";
import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
const Register = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    <div className="flex py-10 h-[70vh] md:h-fit w-full">
      <div className="flex-1 hidden md:block">
        <img src={loginImage} className="w-full" alt="" />
      </div>
      <div className="auth flex-1 flex flex-col items-center justify-center gap-5">
        <div className="flex flex-col items-start gap-5 w-[90%] md:w-3/5 mt-20 md:mt-0">
          <h3 className="text-3xl font-bold">Create an account</h3>
          <p className="">Enter your details below</p>
          <Input className="w-full" placeholder="Name" />
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
          <Button colorScheme="red" size={"lg"} width={"full"}>
            <p className="text-sm"> Create Account</p>
          </Button>
          <Button
            colorScheme="black"
            size={"lg"}
            width={"full"}
            variant="outline"
            className="flex items-center gap-3"
          >
            <img
              className="w-fit h-full"
              src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
              alt=""
            />
            <p className="text-sm">sign up with google</p>
          </Button>
          <div className="text-center w-full text-sm">
            Already have account?{" "}
            <Link to="/Login" className="underline font-bold">
              Log in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
