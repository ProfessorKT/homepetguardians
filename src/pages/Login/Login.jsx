import React from "react";
import RootLayout from "@/app/layout.jsx";

export default function Login() {
  return (
    <>
      <RootLayout />
      <div className="h-screen w-screen flex flex-col items-center">
        <p className="text-[#04A777] font-semibold text-[36px] pt-[88px]">Sign In</p>
        <form className="pt-[88px] flex flex-col">
          <input
            type="text"
            name="login"
            id="login"
            placeholder="Email or Phone Number"
            className="w-[686px] h-[80px] text-[32px] placeholder-black border-[#04A777] border-[1.5px] rounded-[8px] mb-[36px] px-[14px]"
          />
          <input
            type="text"
            name="password"
            id="password"
            placeholder="Password"
            className="w-[686px] h-[80px] text-[32px] placeholder-black border-[#04A777] border-[1.5px] rounded-[8px] px-[14px]"
          />
        </form>
      </div>
    </>
  );
}
