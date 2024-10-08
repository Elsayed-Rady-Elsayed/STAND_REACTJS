import React from "react";
import phone from "../assets/icons-phonecontact.png";
import mail from "../assets/icons-mailcontact.png";
import { Button, Input, Textarea } from "@chakra-ui/react";
const Contact = () => {
  return (
    <div className="md:w-[90%] md:p-0 p-2 w-full m-auto my-[5rem] flex gap-5 md:flex-row flex-col">
      <div className="shadow-md md:w-[30%] w-full rounded-md">
        <div className="p-5 text-start flex flex-col gap-3">
          <div className="flex items-center gap-1 text-lg font-semibold">
            <img src={phone} alt="" />
            <p>Call To Us</p>
          </div>
          <p className="text-sm">We are available 24/7, 7 days a week.</p>
          <p className="text-sm">Phone: +8801611112222</p>
        </div>
        <hr />
        <div className="p-5 text-start flex flex-col gap-3">
          <div className="flex items-center gap-1 text-lg font-semibold">
            <img src={mail} alt="" />
            <p>Write To US</p>
          </div>
          <p className="text-sm">
            Fill out our form and we will contact you within 24 hours.
          </p>
          <p className="text-sm">Emails: customer@exclusive.com</p>
        </div>
      </div>
      <div className="shadow-lg p-5 w-full rounded-md text-end">
        <div className="flex gap-2 md:flex-row flex-col mb-2">
          <Input placeholder="Your Name*" bg={"#F5F5F5"} />
          <Input placeholder="Your Email*" bg={"#F5F5F5"} />
          <Input placeholder="Your Phone*" bg={"#F5F5F5"} />
        </div>
        <Textarea bg={"#F5F5F5"} placeholder="write your message" rows={"8"} />
        <Button className="mt-2" colorScheme="red">
          Send Massage
        </Button>
      </div>
    </div>
  );
};

export default Contact;
