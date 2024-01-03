"use client";
import React from "react";
import { useAuth } from "@clerk/nextjs";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithCustomToken } from "firebase/auth";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import firebaseConfig from "../../lib/firebase.config.js";
import { db } from "../../lib/firebase.config.js";
import DashboardSelectForm from "../components/DashboardSelectForm.jsx";

async function fetchPetsitterDataFromFirestore() {
  const querySnapshot = await getDocs(collection(db, "Petsitters"));

  const data = [];
  querySnapshot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() });
  });
  return data;
}

// initializeApp(firebaseConfig);

const DashboardPage = () => {
  const [petsitterData, setPetsitterData] = useState([]);
  const { getToken } = useAuth();

  useEffect(() => {
    async function fetchPetsitterData() {
      const data = await fetchPetsitterDataFromFirestore();
      setPetsitterData(data);
    }
    fetchPetsitterData();
  }, []);

  useEffect(() => {
    const signInWithClerk = async () => {
      const auth = getAuth();
      const token = await getToken({ template: "integration_firebase" });
      const userCredentials = await signInWithCustomToken(auth, token);

      /**
       * The userCredentials.user object will call the methods of
       * the Firebase platform as an authenticated user.
       */
      console.log("user ::", userCredentials.user);
    };

    signInWithClerk();
  }, []);

  return (
    <>
      {/* <div className="mt-[300px]">
        {petsitterData.map((petsitter) => (
          <div className="mb-4 ml-3" key={petsitter.id}>
            <p className="text-xl">
              {petsitter.name} {petsitter.last_name}
            </p>
            <p className="text-lg">Age: {petsitter.age}</p>
            <p className="texl-lg">Bio: {petsitter.bio}</p>
          </div>
        ))}
      </div> */}
      <DashboardSelectForm />
    </>
  );
};

export default DashboardPage;
