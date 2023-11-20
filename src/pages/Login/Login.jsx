import React from "react";
import RootLayout from "@/app/layout.jsx";

export default function Login() {
  return (
    <>
      <RootLayout />
      <div className="h-screen-70px w-screen flex flex-col items-center">
        <p className="text-[#04A777] font-semibold text-[36px] mt-[88px]">Sign In</p>
        <form className="mt-[88px] flex flex-col">
          <input
            type="text"
            name="login"
            id="login"
            placeholder="Email or Phone Number"
            className="w-[686px] h-[80px] text-[32px] placeholder-black border-[#04A777] border-[1.5px] rounded-[8px] mb-[36px] px-[14px] mx-auto"
          />
          <input
            type="text"
            name="password"
            id="password"
            placeholder="Password"
            className="w-[686px] h-[80px] text-[32px] placeholder-black border-[#04A777] border-[1.5px] rounded-[8px] mb-[72px] px-[14px] mx-auto"
          />
          <input 
            type="submit" 
            name="submit"
            id="submit"
            value="Sign In"
            className=" w-[280px] h-[56px] text-[32px] bg-[#04A777] text-[#FFFBFF] rounded-[24px] mx-auto flex items-center justify-center"
          />
        </form>
      </div>
    </>
  );
}
