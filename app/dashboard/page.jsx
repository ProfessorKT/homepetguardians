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
        console.log("Error: " + error.code + error.message);
        window.location.reload();
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
      <div> DashboardPage </div>
    </>
  );
};

export default DashboardPage;
