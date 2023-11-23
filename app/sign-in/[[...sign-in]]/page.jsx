import { SignIn } from "@clerk/nextjs";
import React from "react";

const SignInPage = () => {
  return (
    <div
      style={{ height: "calc(100vh - 70px)" }}
      className="flex items-center justify-center"
    >
      <SignIn />
    </div>
  );
};

export default SignInPage;
