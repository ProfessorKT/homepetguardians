import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="md:w-full h-screen flex justify-center align-center flex-col"
    >
      <div className="md:mt-[-50px] md:flex-col md:w-[80%] md:mx-auto">
        <h1 className="text-[40px] font-medium border-b-[4px] border-[#04A777] text-left w-[180px] md:ml-0 ml-[16px]">
          Contact
        </h1>
        <p className="text-left py-2 text-[20px] hidden md:block">
          If you have any questions just ask us! We will be happy to answer all
          of them.
        </p>
      </div>

      <form
        action="https://getform.io/f/41890a8d-e5bd-4717-a2ba-2e88c2c00728"
        className="flex flex-col justify-center md:w-[700px] w-full mx-auto pt-[80px]"
        autoComplete="off"
        method="POST"
      >
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          className=" border-[3px] border-[#03312E] bg-[#F1DABF] my-2 text-[24px] py-2 px-4 rounded-t-3xl w-[90%] md:w-auto mx-auto md:mx-0 focus:outline-none"
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="E-mail"
          className="border-[3px] border-[#03312E] bg-[#F1DABF] my-2 text-[24px] py-2 px-4 w-[90%] md:w-auto mx-auto md:mx-0 focus:outline-none"
        />
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="6"
          placeholder="Your message..."
          className="border-[3px] border-[#03312E] bg-[#F1DABF] my-2 text-[24px] py-2 px-4 rounded-b-3xl w-[90%] md:w-auto mx-auto md:mx-0 focus:outline-none"
        ></textarea>
        <button className="mt-[28px] w-[300px] mx-auto md:px-[10px] py-[15px] text-[28px] bg-[#04A777] text-white rounded-full shadow-xl font-semibold ">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
