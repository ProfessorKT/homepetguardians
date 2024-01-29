import React, { useState, useEffect } from "react";
import { db } from "../../lib/firebaseConfig.js";
import { getDoc, collection, doc } from "firebase/firestore";
import Image from "next/image";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { differenceInCalendarYears } from "date-fns";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Link from "next/link";

async function fetchDataFromFirestore(id) {
  const docRef = doc(collection(db, "petsitters"), id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() };
  } else {
    return null;
  }
}

const GuardianProfile = () => {
  const [petsitterInfo, setPetsitterInfo] = useState({});
  const [loading, setLoading] = useState(true);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");

    fetchDataFromFirestore(id)
      .then((data) => {
        setPetsitterInfo(data);
        const dob = data.date_of_birth.toDate();
        const age = differenceInCalendarYears(new Date(), dob);
        setPetsitterInfo((prevPetsitterInfo) => ({
          ...prevPetsitterInfo,
          date_of_birth: age,
        }));
      })
      .catch((error) => {
        console.error("Error fetching document:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (!petsitterInfo || loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <AiOutlineLoading3Quarters className="text-[48px] animate-spin" />
      </div>
    );
  }

  const formatDateRange = (start, end) => {
    if (!start || !end) return "Choose date range";
    const options = { year: "numeric", month: "long", day: "numeric" };
    return `${start.toLocaleDateString(
      "en-US",
      options
    )} - ${end.toLocaleDateString("en-US", options)}`;
  };

  let cost = 0;
  if (startDate && endDate) {
    const diffTime = Math.abs(endDate - startDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1; // add 1 to include an additional day

    const selectedPet = localStorage.getItem("selectedPet");
    let pricePerDay;

    switch (selectedPet) {
      case "Dog":
        pricePerDay = petsitterInfo.dog_price;
        break;
      case "Cat":
        pricePerDay = petsitterInfo.cat_price;
        break;
      case "Bird":
        pricePerDay = petsitterInfo.bird_price;
        break;
      case "Rodent":
        pricePerDay = petsitterInfo.rodent_price;
        break;
      default:
        pricePerDay = 0; // default price if no pet is selected or if the selectedPet value is not recognized
    }

    cost = diffDays * pricePerDay;
  }

  return (
    <div className="w-full h-screen flex flex-col items-center pt-[20px] lg:pt-[0px] lg:flex-row ">
      <div className="w-1/2 h-[calc(100vh-70px)] mt-[70px] flex flex-col gap-y-[10px] lg:gap-y-[20px] items-center justify-center">
        <div className="flex flex-row w-[100%] lg:w-[60%] justify-around">
          <Image
            src={petsitterInfo.url}
            alt=""
            width={120}
            height={120}
            loading="eager"
            className="rounded-full text-center"
            priority={true}
          />

          <div className="flex flex-col items-stretch justify-center">
            <p className="text-[18px] sm:text-[24px] lg:text-[30px] font-semibold">
              {petsitterInfo.name}
            </p>
            <p className="text-[18px] sm:text-[24px] lg:text-[30px] font-semibold">
              {petsitterInfo.city}
            </p>
            <p className="text-[18px] sm:text-[24px] lg:text-[30px] font-semibold">
              Rating:{" "}
              <span className="text-[18px] sm:text-[24px] lg:text-[30px] font-semibold text-jade">
                {petsitterInfo.rating}
              </span>
            </p>
          </div>
        </div>
        <form
          action=""
          className="w-[100%] lg:w-[60%] py-[32px] px-5 border-2 border-solid border-jade rounded-[28px] flex flex-col gap-y-[10px] lg:gap-y-[20px] items-center justify-center"
        >
          <input
            type="text"
            value={formatDateRange(startDate, endDate)}
            readOnly
            className="w-[90%] my-5 mx-auto border-solid border-[1px] rounded-xl p-1 bg-almond border-jade focus-visible:outline-none"
          />
          <div className="flex justify-center">
            <DatePicker
              selected={startDate}
              onChange={(dates) => {
                const [start, end] = dates;
                setStartDate(start);
                setEndDate(end);
              }}
              startDate={startDate}
              endDate={endDate}
              selectsRange
              inline
              className=""
            />
          </div>

          <p>Cost: {cost} PLN</p>
        </form>
        {startDate === null || endDate === null ? (
          <div className="rounded-[24px] text-white py-2 w-[100px] lg:w-[15%] text-center py-auto bg-gray-500 cursor-default">
            Book
          </div>
        ) : (
          <Link
            className="rounded-[24px] text-white py-2 w-[100px] lg:w-[15%] text-center py-auto bg-jade"
            href="https://buy.stripe.com/test_aEUaGfgDq9ks4EgfYY"
            target="_blank"
          >
            Book
          </Link>
        )}
      </div>
      <div className="w-[80%] lg:w-1/2 h-[calc(100vh-70px)] mt-[70px] flex flex-col gap-y-[10px] lg:gap-y-[20px] items-center justify-center pb-[10px] lg:pb-[0px]">
        <div className="flex flex-row gap-x-[10px] w-[100%] justify-center">
          <p className="w-[calc(40%-5px)] bg-almond border-2 border-solid border-jade rounded-[10px] p-[10px] text-xl">
            {petsitterInfo.name} {petsitterInfo.last_name}
          </p>
          <p className="w-[calc(40%-5px)] bg-almond border-2 border-solid border-jade rounded-[10px] p-[10px] text-xl">
            {petsitterInfo.phone_number}
          </p>
        </div>
        <div className="flex flex-col gap-y-[10px] lg:flex-row gap-x-[10px] w-[100%] items-center justify-center">
          <p className="w-[60%] lg:w-[calc(40%-5px)] bg-almond border-2 border-solid border-jade rounded-[10px] p-[10px] text-xl">
            {petsitterInfo.email}
          </p>
          <p className="w-[60%] lg:w-[calc(40%-5px)] bg-almond border-2 border-solid border-jade rounded-[10px] p-[10px] text-xl">
            {petsitterInfo.date_of_birth} years old
          </p>
        </div>
        <div className="bg-almond border-2 border-solid border-jade rounded-[10px] w-[80%] p-[10px] text-xl">
          {petsitterInfo.bio}
        </div>

        <div className="bg-almond border-2 border-solid border-jade rounded-[10px] w-[80%] p-[10px] flex items-center text-xl">
          <div className="text-left mr-2">I take care of: </div>
          {petsitterInfo.bird && (
            <div className="bg-jade rounded-[10px] py-2 px-4 mx-1 text-white">
              Birds
            </div>
          )}
          {petsitterInfo.cat && (
            <div className="bg-jade rounded-[10px] py-2 px-4 mx-1 text-white">
              Cats
            </div>
          )}
          {petsitterInfo.dog && (
            <div className="bg-jade rounded-[10px] py-2 px-4 mx-1 text-white">
              Dogs
            </div>
          )}
          {petsitterInfo.rodent && (
            <div className="bg-jade rounded-[10px] py-2 px-4 mx-1 text-white">
              Rodents
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GuardianProfile;
