import React from "react";
import RootLayout from "@/app/layout.jsx";
import Link from "next/link";

export default function Login() {
  return (
    <>
      <RootLayout />
      <div className="h-screen-70px w-screen flex flex-col items-center">
        <p className="text-[#04A777] font-semibold md:text-[36px] text-[24px] mt-[88px]">
          Sign In
        </p>
        <form className="mt-[88px] flex flex-col">
          <input
            type="text"
            name="login"
            id="login"
            placeholder="Email or Phone Number"
            className="md:w-[686px] w-[343px] md:h-[80px] h-[50px] md:text-[32px] text-[14px] placeholder-black border-[#04A777] border-[1.5px] rounded-[8px] mb-[36px] px-[14px] mx-auto"
          />
          <input
            type="text"
            name="password"
            id="password"
            placeholder="Password"
            className="md:w-[686px] w-[343px] md:h-[80px] h-[50px] md:text-[32px] text-[14px] placeholder-black border-[#04A777] border-[1.5px] rounded-[8px]  px-[14px] mx-auto"
          />
          <div className="flex justify-between">
            <Link
              href="#"
              className="md:mt-[12px] mt-[3px] md:text-[20px] text-[12px] text-[#04A777]"
            >
              Forgot password?
            </Link>
            <div className="md:mt-[12px] mt-[3px] md:text-[20px] text-[12px] flex items-center">
              <p className="">Don't have an account?&nbsp;</p>
              <Link href="#" className="text-[#04A777]">
                Sign Up
              </Link>
            </div>
          </div>
          <input
            type="submit"
            name="submit"
            id="submit"
            value="Sign In"
            className="md:w-[280px] w-[332px] md:h-[56px] h-[53px] md:text-[32px] text-[24px] bg-[#04A777] text-[#FFFBFF] rounded-[24px] mt-[32px] mx-auto flex items-center justify-center"
          />
        </form>
      </div>
    </>
  );
}
