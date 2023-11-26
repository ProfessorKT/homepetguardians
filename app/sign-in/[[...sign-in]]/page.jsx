import { SignIn } from "@clerk/nextjs";
import React from "react";

const SignInPage = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <SignIn
        appearance={{
          elements: {
            formButtonPrimary: "bg-[#04A777] hover:bg-[#03312E]",
          },
        }}
      />
    </div>
  );
};

export default SignInPage;
