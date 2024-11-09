import React from "react";
import phone from "../assets/icons-phonecontact.png";
import mail from "../assets/icons-mailcontact.png";
import { Button, Input, Textarea } from "@chakra-ui/react";
// import { ToastContainer, toast } from "react-toastify";
import emailjs from "@emailjs/browser";

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
      <form
        onSubmit={async (event) => {
          event.preventDefault();

          const formdata = new FormData(event.target);
          const data = Object.fromEntries(formdata);
          if (data) {
            await emailjs
              .send(
                "service_h1rucpg",
                "template_u7odrdv",
                {
                  to_email: "Store@gmail.com",
                  to_name: data.Name,
                  from_name: "Our store",
                  message: data.message,
                  reply_to: data.email,
                },
                "QnZR0Tpt9Rw3rl_sw"
              )
              .then((res) => {
                if (res.status === 200) {
                  console.log(res);

                  setTimeout(() => {
                    window.location.href = "/";
                  }, 2000);
                }
              });
          }
        }}
        className="shadow-lg p-5 w-full rounded-md text-end"
      >
        <div className="flex gap-2 md:flex-row flex-col mb-2">
          <Input placeholder="Your Name*" name="Name" bg={"#F5F5F5"} />
          <Input placeholder="Your Email*" name="email" bg={"#F5F5F5"} />
          <Input placeholder="Your Phone*" name="phone" bg={"#F5F5F5"} />
        </div>
        <Textarea
          bg={"#F5F5F5"}
          placeholder="write your message"
          name="message"
          rows={"8"}
        />
        <button
          type="submit"
          className="mt-2 bg-red-500 p-2 text-white rounded-md"
          colorScheme="red"
        >
          Send Massage
        </button>
      </form>
    </div>
  );
};

export default Contact;
