import React from "react";
import RootLayout from "@/app/layout.jsx";
import Link from "next/link";

export default function Signup() {
  return (
    <RootLayout>
      <div className="pt-[100px] text-center">
        <h1 className="text-[#04A777] font-semibold text-[36px] pt-[100px] md:pt-[32px]">
          Sign up
        </h1>
        <form
          action=""
          className="flex flex-col w-full justify-center items-center"
        >
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            className="md:mt-10 mt-16 py-3 px-3 font-light border border-[#04A777] rounded-lg md:text-[24px]
            text-[18px] placeholder-black
            "
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email Address"
            className="mt-8 py-3 px-3 font-light border border-[#04A777] rounded-lg md:text-[24px]
            text-[18px] placeholder-black"
          />

          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password "
            className="mt-8 py-3 px-3 font-light border border-[#04A777] rounded-lg md:text-[24px]
            text-[18px] placeholder-black"
          />
          <div className="flex content-center">
            <button className="bg-[#04A777] md:w-[260px] w-[200px] md:mx-auto py-2 rounded-3xl md:mt-[80px] mt-8 text-white font-semibold text-[24px]">
              Sign Up
            </button>
          </div>

          <div className="md:mx-auto flex ml-3 md:mt-8 mt-11 text-[16px]">
            <p className="pr-1">Already have an account?</p>
            <Link href="../Login/Login" className="text-[#04A777]">
              {" "}
              Sign In
            </Link>
          </div>
        </form>
      </div>
    </RootLayout>
  );
}
