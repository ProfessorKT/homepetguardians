import React from "react";
import RootLayout from "@/app/layout.jsx";
import Link from "next/link";

export default function Signup() {
  return (
    <RootLayout>
      <div className="pt-[100px] text-center">
        <h1 className="text-[#04A777] font-semibold text-[36px] p-[32px]">
          Sign up
        </h1>
        <form action="" className="flex flex-col w-[688px] mx-auto">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            className="mt-10 py-3 px-3 font-light border border-[#04A777] rounded-lg text-[24px] placeholder-black"
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email Address"
            className="mt-8 py-3 px-3 font-light border border-[#04A777] rounded-lg text-[24px] placeholder-black"
          />
          <input
            type="number"
            name="phone_number"
            id="phone_number"
            placeholder="Phone Number"
            className="mt-8 py-3 px-3 font-light border border-[#04A777] rounded-lg text-[24px] placeholder-black"
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password "
            className="mt-8 py-3 px-3 font-light border border-[#04A777] rounded-lg text-[24px] placeholder-black"
          />

          <button className="bg-[#04A777] w-[260px] mx-auto py-2 rounded-3xl mt-[80px] text-white font-semibold text-[24px]">
            Sign Up
          </button>

          <div className="flex mx-auto mt-8 text-[16px]">
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
