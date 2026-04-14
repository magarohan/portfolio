import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { BsArrowRight } from "react-icons/bs";
import { RiSendPlaneFill } from "react-icons/ri";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8lldq2c",
        "template_swaf39e",
        form.current,
        "publicKey"
      )
      .then(
        (result) => {
          console.log("Message sent!", result.text);
        },
        (error) => {
          console.log("Error:", error.text);
        }
      );
  };

  return (
    <div id="contact" className="container m-auto mt-16">
      <div className="relative mb-5">
        <h3 className="text-3xl font-black text-gray-400 sm:text-2xl">
          Contact
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>

      <div className="card-wrapper w-[90%] mx-auto mt-5 flex items-center justify-center sm:flex-col">
        <div className="left w-[70%] flex-1 flex items-center justify-center sm:flex-col sm:w-full">
          <div className="w-1/2 flex flex-col items-end gap-3 sm:w-3/4">
            <h1 className="text-5xl font-bold sm:text-3xl">You Need</h1>
            <h3 className="text-xl sm:text-lg">
              A mobile app or a website? Let's talk!
            </h3>
          </div>

          <div className="p-5 flex items-center justify-center">
            <button className="text-yellow-500 font-extrabold text-3xl p-2 rounded-lg shadow">
              <BsArrowRight className="md:rotate-90" />
            </button>
          </div>
        </div>

        <div className="right flex-1">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col gap-5 w-[70%] md:w-full sm:w-[95%] mx-auto"
          >
            <input
              type="email"
              name="user_email"
              placeholder="e.g. example@email.com"
              className="px-3 p-2 rounded-lg w-full shadow"
              required
            />

            <input
              type="text"
              name="user_name"
              placeholder="e.g. John Doe"
              className="px-3 p-2 rounded-lg w-full shadow"
              required
            />

            <textarea
              name="message"
              rows="4"
              placeholder="Write your message"
              className="px-3 p-2 rounded-lg w-full shadow"
              required
            />

            <button
              type="submit"
              className="bg-yellow-500 text-white font-semibold p-2 rounded-lg flex items-center justify-center gap-2"
            >
              <span>Send</span>
              <RiSendPlaneFill />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;