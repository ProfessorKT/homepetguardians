import { SignIn } from "@clerk/nextjs";
import React from "react";

const SignInPage = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <SignIn
        appearance={{
          elements: {
            formButtonPrimary: "bg-jade hover:bg-dark-green",
          },
        }}
      />
    </div>
  );
};

export default SignInPage;
