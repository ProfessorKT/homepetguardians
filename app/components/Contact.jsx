import React from "react";

const Contact = () => {
  return (
    <div name="contact" className="w-full h-screen">
      <div className="pt-[140px]">
        <h1 className="text-[40px] font-medium w-[180px] border-b-[4px] border-[#04A777] border- ml-[200px]">
          Contact
        </h1>
        <p className="ml-[200px] py-2 text-[20px]">
          If you have any questions just ask us! We will be happy to answer all
          of them.
        </p>
      </div>
      <form
        action="https://getform.io/f/41890a8d-e5bd-4717-a2ba-2e88c2c00728"
        className="flex flex-col w-[700px] mx-auto pt-[80px]"
        autoComplete="off"
        method="POST"
      >
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          className=" border-[3px] border-black bg-[#F1DABF] my-2 text-[24px] py-2 px-4 rounded-t-3xl"
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="E-mail"
          className="border-[3px] border-black bg-[#F1DABF] my-2 text-[24px] py-2 px-4"
        />
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="6"
          placeholder="Your message..."
          className="border-[3px] border-black bg-[#F1DABF] my-2 text-[24px] py-2 px-4 rounded-b-3xl"
        ></textarea>
        <button className="mt-[28px] w-[300px] mx-auto px-[10px] py-[10px] text-[28px] bg-[#04A777] text-white rounded-full ">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
