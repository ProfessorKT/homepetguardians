import React, { useState, useEffect } from "react";
import { db } from "../../lib/firebaseConfig.js";
import { getDocs, collection } from "firebase/firestore";
import Image from "next/image";
import PlaceholderProfilePicture from "../assets/PlaceholderProfilePicture.jpg";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { differenceInCalendarYears } from "date-fns";

async function fetchDataFromFirestore() {
  const querySnapshot = await getDocs(collection(db, "petsitters"));

  const data = [];
  querySnapshot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() });
  });

  return data;
}

const GuardianProfile = () => {
  const [petsitterInfo, setPetsitterInfo] = useState({
    id: "",
    name: "",
    city: "",
    rating: "",
    last_name: "",
    email: "",
    phone_number: "",
    bio: "",
    url: "",
    age: "",
    bird: "",
    bird_price: "",
    cat: "",
    cat_price: "",
    dog: "",
    dog_price: "",
    rodent: "",
    rodent_price: "",
    date_of_birth: "",
  });
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");
    const name = urlParams.get("name");
    const city = urlParams.get("city");
    const rating = urlParams.get("rating");
    const last_name = urlParams.get("last_name");
    const email = urlParams.get("email");
    const phone_number = urlParams.get("phone_number");
    const bio = urlParams.get("bio");
    const url = urlParams.get("url");
    const age = urlParams.get("age");
    const bird = urlParams.get("bird");
    const bird_price = urlParams.get("bird_price");
    const cat = urlParams.get("cat");
    const cat_price = urlParams.get("cat_price");
    const dog = urlParams.get("dog");
    const dog_price = urlParams.get("dog_price");
    const rodent = urlParams.get("rodent");
    const rodent_price = urlParams.get("rodent_price");
    const date_of_birth = urlParams.get("date_of_birth");

    setPetsitterInfo({
      id: id || "",
      name: name || "",
      city: city || "",
      rating: rating || "",
      last_name: last_name || "",
      email: email || "",
      phone_number: phone_number || "",
      bio: bio || "",
      url: url || "",
      age: age || "",
      bird: bird || "",
      bird_price: bird_price || "",
      cat: cat || "",
      cat_price: cat_price || "",
      dog: dog || "",
      dog_price: dog_price || "",
      rodent: rodent || "",
      rodent_price: rodent_price || "",
      date_of_birth: date_of_birth || "",
    });
  }, []); // Wywołaj to tylko raz, po zamontowaniu komponentu
  const [petsitterData, setPetsitterData] = useState([]);
  // const router = useRouter();
  // const { id } = router.query;

  const formatDateRange = (start, end) => {
    if (!start || !end) return "Choose date range";
    const options = { year: "numeric", month: "long", day: "numeric" };
    return `${start.toLocaleDateString(
      "en-US",
      options
    )} - ${end.toLocaleDateString("en-US", options)}`;
  };

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchDataFromFirestore();
      setPetsitterData(data);
    }
    fetchData();
  }, []);

  // let cost = 0;
  // if (startDate && endDate) {
  //   const diffTime = Math.abs(endDate - startDate);
  //   const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // convert milliseconds to days
  //   cost = diffDays * petsitterInfo.dog_price;
  // }

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
          {/* <select
            name=""
            id=""
            className="bg-almond rounded-[10px] border-2 border-solid border-jade w-[60%] p-[10px]"
          >
            <option value="">Choose Pet</option>
            <option value="">Placeholder2</option>
            <option value="">Placeholder3</option>
            <option value="">Placeholder4</option>
            <option value="">Placeholder5</option>
          </select> */}

          {/* <select
            name=""
            id=""
            className="bg-almond rounded-[10px] border-2 border-solid border-jade w-[60%] p-[10px]"
          >
            <option value="">Choose date</option>
            <option value="">Placeholder2</option>
            <option value="">Placeholder3</option>
            <option value="">Placeholder4</option>
            <option value="">Placeholder5</option>
          </select> */}

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

          <p>Cost: {cost}</p>
          {/* <p>Dog cost: {petsitterInfo.dog_price}</p>
          <p>Cat cost: {petsitterInfo.cat_price}</p>
          <p>Bird cost: {petsitterInfo.bird_price}</p>
          <p>Rodent cost: {petsitterInfo.rodent_price}</p> */}
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
            {petsitterInfo.age} years old
          </p>
        </div>
        <p className="bg-almond border-2 border-solid border-jade rounded-[10px] w-[60%] p-[10px] text-center">
          <div className=" text-left">I take care of :</div>
          {petsitterInfo.bird &&
            petsitterInfo.bird.toLowerCase() === "true" && (
              <div className="bg-jade rounded-[10px] p-2 pl-3 pr-3 mt-[10px] text-white mb-[10px] block w-[20%]">
                Bird
              </div>
            )}
          {petsitterInfo.cat && petsitterInfo.cat.toLowerCase() === "true" && (
            <div className="bg-jade rounded-[10px] p-2 pl-3 pr-3 mt-[10px] text-white mb-[10px] block w-[20%]">
              Cat
            </div>
          )}
          {petsitterInfo.dog && petsitterInfo.dog.toLowerCase() === "true" && (
            <div className="bg-jade rounded-[10px] p-2 pl-3 pr-3 mt-[10px] text-white mb-[10px] block w-[20%]">
              Dog
            </div>
          )}
          {petsitterInfo.rodent &&
            petsitterInfo.rodent.toLowerCase() === "true" && (
              <div className="bg-jade rounded-[10px] p-2 pl-3 pr-3 mt-[10px] text-white mb-[10px] block w-[20%]">
                Rodent
              </div>
            )}
        </p>

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
