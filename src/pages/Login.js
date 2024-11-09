import React from "react";
import loginImage from "../assets/loginimage.png";
import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const nav = useNavigate();
  const handleLogin = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formFields = Object.fromEntries(formData.entries());
    try {
      const loginResponse = await signInWithEmailAndPassword(
        auth,
        formFields.email,
        formFields.password
      );
      toast.success("Logined Successfully");
      nav("/");
    } catch (e) {
      toast.error("cant login check your data");
    }
  };
  return (
    <div className="flex h-[70vh] md:h-fit w-full">
      <div className="flex-1 hidden md:block">
        <img src={loginImage} className="w-full" alt="" />
      </div>
      <form
        onSubmit={handleLogin}
        className="auth flex-1 flex flex-col items-center justify-center gap-5"
      >
        <div className="flex flex-col items-start gap-5  w-[90%] md:w-3/5 mt-0 md:mt-0">
          <h3 className="text-2xl md:text-3xl font-bold">
            Log in to Exclusive
          </h3>
          <p className="">Enter your details below</p>
          <Input required placeholder="Email" type="email" name="email" />
          <InputGroup size="md">
            <Input
              required
              name="password"
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
            <button
              type="submit"
              className="bg-red-500 py-2 px-5 text-white rounded-md"
              colorScheme="red"
              size={"lg"}
              width={"40%"}
            >
              <p className="text-sm">Log In</p>
            </button>
            <div className="text-red-500 font-medium text-sm underline">
              <a href="">Forgot Password?</a>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
