import React from "react";
import { SignUp } from "@clerk/nextjs";

const SignUpPage = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <SignUp
        appearance={{
          elements: {
            formButtonPrimary: "bg-[#04A777] hover:bg-[#03312E]",
          },
        }}
      />
    </div>
  );
};

export default SignUpPage;
