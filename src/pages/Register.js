import React from "react";
import loginImage from "../assets/loginimage.png";
import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase";

const Register = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const nav = useNavigate();
  const handleGoogleSignUp = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      console.log(user, token);
      toast.success("signUp Successfully");
    } catch (e) {
      console.log(e);

      toast.error("cant signup with google");
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const SignUpInfo = {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
    };
    if (
      SignUpInfo.name.length === 0 ||
      SignUpInfo.password.length === 0 ||
      SignUpInfo.email.length === 0
    ) {
      toast.error("please enter all your information");
    } else {
      try {
        const signUpResponse = await createUserWithEmailAndPassword(
          auth,
          SignUpInfo.email,
          SignUpInfo.password
        );
        toast.success("Account Create Successfully");
        nav("/");
      } catch (e) {
        toast.error("cant signUp check your data");
      }
    }
  };
  return (
    <div className="flex h-[100vh] md:h-fit w-full">
      <div className="flex-1 hidden md:block">
        <img src={loginImage} className="w-full" alt="" />
      </div>
      <form
        onSubmit={handleSubmit}
        className="auth flex-1 flex flex-col items-center justify-center gap-5"
      >
        <div className="flex flex-col items-start gap-5 w-[90%] md:w-3/5 mt-0 md:mt-0">
          <h3 className="md:text-3xl text-2xl font-bold">Create an account</h3>
          <p className="">Enter your details below</p>
          <Input className="w-full" name="name" placeholder="Name" />
          <Input placeholder="Email" type="email" name="email" />
          <InputGroup size="md">
            <Input
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
          <button
            className="w-full bg-red-500 p-3 text-white rounded-md"
            colorScheme="red"
            size={"lg"}
            width={"full"}
          >
            <p className="text-sm"> Create Account</p>
          </button>
          <Button
            colorScheme="black"
            size={"lg"}
            width={"full"}
            variant="outline"
            className="flex items-center gap-3"
            onClick={handleGoogleSignUp}
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
      </form>
    </div>
  );
};

export default Register;
