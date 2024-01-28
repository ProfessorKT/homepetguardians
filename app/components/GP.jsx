import React, { useState, useEffect } from "react";
import { db } from "../../lib/firebaseConfig.js";
import { getDoc, collection, doc } from "firebase/firestore";
import Image from "next/image";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { differenceInCalendarYears } from "date-fns";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

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
            className="w-full my-5 mx-auto border-solid border-[1px] rounded-xl p-1 bg-almond border-jade focus-visible:outline-none"
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

          <p>Cost: 100zł</p>
        </form>
        <button className="bg-jade rounded-[24px] text-white h-[35px] w-[100px] lg:h-[5%] lg:w-[15%]">
          Book
        </button>
      </div>
      <div className="w-[80%] lg:w-1/2 h-[calc(100vh-70px)] mt-[70px] flex flex-col gap-y-[10px] lg:gap-y-[20px] items-center justify-center pb-[10px] lg:pb-[0px]">
        <div className="flex flex-row gap-x-[10px] w-[100%] justify-center">
          <p className="w-[calc(30%-5px)] bg-almond border-2 border-solid border-jade rounded-[10px] p-[10px]">
            {petsitterInfo.name} {petsitterInfo.last_name}
          </p>
          <p className="w-[calc(30%-5px)] bg-almond border-2 border-solid border-jade rounded-[10px] p-[10px]">
            {petsitterInfo.phone_number}
          </p>
        </div>
        <div className="flex flex-col gap-y-[10px] lg:flex-row gap-x-[10px] w-[100%] items-center justify-center">
          <p className="w-[60%] lg:w-[calc(30%-5px)] bg-almond border-2 border-solid border-jade rounded-[10px] p-[10px]">
            {petsitterInfo.email}
          </p>
          <p className="w-[60%] lg:w-[calc(30%-5px)] bg-almond border-2 border-solid border-jade rounded-[10px] p-[10px]">
            {petsitterInfo.date_of_birth} years old
          </p>
        </div>
        <div className="bg-almond border-2 border-solid border-jade rounded-[10px] w-[60%] p-[10px] text-center">
          <div className=" text-left">I take care of :</div>
          {petsitterInfo.bird && (
            <div className="bg-jade rounded-[10px] p-2 pl-3 pr-3 mt-[10px] text-white mb-[10px] block w-[20%]">
              Bird
            </div>
          )}
          {petsitterInfo.cat && (
            <div className="bg-jade rounded-[10px] p-2 pl-3 pr-3 mt-[10px] text-white mb-[10px] block w-[20%]">
              Cat
            </div>
          )}
          {petsitterInfo.dog && (
            <div className="bg-jade rounded-[10px] p-2 pl-3 pr-3 mt-[10px] text-white mb-[10px] block w-[20%]">
              Dog
            </div>
          )}
          {petsitterInfo.rodent && (
            <div className="bg-jade rounded-[10px] p-2 pl-3 pr-3 mt-[10px] text-white mb-[10px] block w-[20%]">
              Rodent
            </div>
          )}
        </div>

        <p className="bg-almond border-2 border-solid border-jade rounded-[10px] w-[60%] p-[10px]">
          {petsitterInfo.bio}
        </p>
        <button className="bg-jade rounded-[24px] text-white h-[35px] w-[100px] lg:h-[5%] lg:w-[15%]">
          Back
        </button>
      </div>
    </div>
  );
};

export default GuardianProfile;
