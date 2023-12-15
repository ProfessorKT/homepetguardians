"use client";
import React from "react";
import { useAuth } from "@clerk/nextjs";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithCustomToken } from "firebase/auth";
import { useEffect } from "react";
import firebaseConfig from "../../lib/firebase.config";
import { SignedIn, SignedOut } from "@clerk/nextjs";

// initializeApp(firebaseConfig);

const DashboardPage = () => {
  const { getToken } = useAuth();

  useEffect(() => {
    const signInWithClerk = async () => {
      const auth = getAuth();
      const token = await getToken({ template: "integration_firebase" });
      try {
        const userCredentials = await signInWithCustomToken(auth, token);
        console.log("user ::", userCredentials.user);
      } catch (error) {
        console.error("Błąd uwierzytelniania:", error.code, error.message);
      }

      /**
       * The userCredentials.user object will call the methods of
       * the Firebase platform as an authenticated user.
       */
    };

    signInWithClerk();
  }, []);
  return (
    <>
      <SignedIn>
        {/* Div for debug purposes, not needed later on, SignedIn works even if logged via SignedOut option which causes error in the console */}
        <div className="bg-red-500 h-screen"></div>
      </SignedIn>
      <SignedOut>
        {/* Div for debug purposes, never shows up, if logged out redirection happens */}
        <div className="bg-blue-500 h-screen"></div>
      </SignedOut>
      <div> DashboardPage </div>
    </>
  );
};

export default DashboardPage;
