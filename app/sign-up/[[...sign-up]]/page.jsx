import React from "react";
import { SignUp } from "@clerk/nextjs";

const SignUpPage = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <SignUp
        appearance={{
          elements: {
            formButtonPrimary: "bg-jade hover:bg-dark-green",
          },
        }}
      />
    </div>
  );
};

export default SignUpPage;
