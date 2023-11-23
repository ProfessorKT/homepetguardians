import React from "react";
import { SignUp } from "@clerk/nextjs";

const SignUpPage = () => {
  return (
    <div
      style={{ height: "calc(100vh - 70px)" }}
      className="flex items-center justify-center"
    >
      <SignUp />
    </div>
  );
};

export default SignUpPage;
