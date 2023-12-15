"use client";
import React, { useState } from "react";

// const Contact = () => {
export default function Contact() {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div
      name="contact"
      id="contact"
      className="md:w-full h-screen flex justify-center align-center flex-col"
    >
      <div className="mt-[-54px] md:mt-[-80px] md:flex-col md:w-[80%] md:mx-auto">
        <h1 className="text-[40px] font-medium border-b-[4px] border-[#04A777] text-left w-[180px] md:ml-0 ml-[16px]">
          Contact
        </h1>
        <p className="text-left py-2 text-[20px] hidden md:block">
          If you have any questions just ask us! We will be happy to answer all
          of them.
        </p>
      </div>

      <form
        action="https://getform.io/f/851d7e38-704f-4098-82d5-8c7df3f79aa4"
        className="flex flex-col justify-center md:w-[700px] w-full mx-auto pt-[80px]"
        autoComplete="off"
        method="POST"
      >
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          className=" border-[3px] border-[#03312E] bg-[#F1DABF] my-2 text-[24px] py-2 px-4 rounded-t-3xl w-[90%] md:w-auto mx-auto md:mx-0 focus:outline-none"
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
          className="border-[3px] border-[#03312E] bg-[#F1DABF] my-2 text-[24px] py-2 px-4 w-[90%] md:w-auto mx-auto md:mx-0 focus:outline-none"
        />
        {/* To prevent Spam */}
        <input type="hidden" name="_gotcha" className="!hidden"></input>
        <textarea
          onChange={(e) => setMessage(e.target.value)}
          name="message"
          id="message"
          cols="30"
          rows="6"
          placeholder="Your message..."
          className="border-[3px] border-[#03312E] bg-[#F1DABF] my-2 text-[24px] py-2 px-4 rounded-b-3xl w-[90%] md:w-auto mx-auto md:mx-0 focus:outline-none"
        ></textarea>
        {/* <button
          type="submit"
          disabled={name.length < 1 || email.length < 1 || message.length < 20}
          className={`mt-[28px] rounded-full text-center py-[12px] mx-auto w-[300px] h-[70px]  px-5 overflow-hidden group transition-all ease-out duration-500 ${
            name.length < 1 || email.length < 1 || message.length < 20
              ? "bg-gray-300"
              : "bg-jade hover:bg-gradient-to-r hover:from-jade hover:to-[#04e4a1] text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400"
          }`}
        >
          <span
            className={`text-[28px] font-semibold ${
              message.length < 20 ? "text-gray-600" : "text-white"
            }`}
          >
            Submit
          </span>
        </button> */}
        <button
          type="submit"
          disabled={message.length < 20}
          className={`mt-[28px] rounded-full text-center py-[12px] mx-auto w-[300px] h-[70px] md:relative px-5 overflow-hidden group transition-all ease-out duration-300 ${
            message.length < 20
              ? "bg-gray-300"
              : "bg-jade hover:bg-gradient-to-r hover:from-jade hover:to-[#04e4a1] text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400"
          }`}
        >
          <span className="hidden md:block md:absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
          <span
            className={`md:relative text-[28px] font-semibold ${
              message.length < 20 ? "text-gray-600" : "text-white"
            }`}
          >
            Submit
          </span>
        </button>
      </form>
    </div>
  );
}

// export default Contact;
