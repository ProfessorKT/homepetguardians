import React, { useState, useEffect } from "react";
import { db } from "../../lib/firebaseConfig.js";
import "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";
import Link from "next/link.js";

const DashboardSelectForm = () => {
  const [cities, setCities] = useState([]);
  const [pets, setPets] = useState([]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  //const for button disabling
  const [city, setCity] = useState("Choose city");
  const [pet, setPet] = useState("Choose pet");
  // const [dateRange, setDateRange] = useState("Choose date range");

  // const formatDateRange = (start, end) => {
  //   if (!start || !end) return "Choose date range";
  //   const options = { year: "numeric", month: "long", day: "numeric" };
  //   return `${start.toLocaleDateString(
  //     "en-US",
  //     options
  //   )} - ${end.toLocaleDateString("en-US", options)}`;
  // };

  useEffect(() => {
    const fetchData = async () => {
      const cityData = await getDocs(collection(db, "cities"));
      const petData = await getDocs(collection(db, "pets"));

      // console.log("cityData", cityData);
      // console.log("petData", petData);

      const cityArray = cityData.docs.map((doc) => doc.data().city);
      const petArray = petData.docs.map((doc) => doc.data().pet);

      // console.log("cityArray", cityArray);
      // console.log("petArray", petArray);

      setCities(cityArray.flat());
      setPets(petArray.flat());
    };

    fetchData();
  }, []);

  const handleButtonClick = () => {
    localStorage.setItem("selectedCity", city);
    localStorage.setItem("selectedPet", pet);
  };

  return (
    <div className="w-full h-screen">
      <div className="flex justify-center pt-[100px]">
        <p className="text-3xl font-bold text-dark-green text-center mx-3 md:mx-0">
          Find proven care for your pet
        </p>
      </div>
      <div className="flex justify-center">
        <form
          action=""
          className="w-[75%] md:w-[55%] lg:[45%] xl:w-[35%] p-6 flex flex-col justify-center border-jade border-solid border-[2px] rounded-2xl mt-4 active:outline-none"
        >
          <select
            name=""
            id=""
            className="w-full mb-5 mx-auto border-solid border-[1px] rounded-xl p-1 bg-almond border-jade"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          >
            <option value="">Choose city</option>
            {cities.map((city, index) => (
              <option key={index} value={city}>
                {city}
              </option>
            ))}
          </select>
          <select
            name=""
            id=""
            className="w-full my-5 mx-auto border-solid border-[1px] rounded-xl p-1 bg-almond border-jade"
            value={pet}
            onChange={(e) => setPet(e.target.value)}
          >
            <option value="">Choose pet</option>
            {pets.map((pet, index) => (
              <option key={index} value={pet}>
                {pet}
              </option>
            ))}
          </select>
          {/* <input
            type="text"
            value={formatDateRange(startDate, endDate)}
            readOnly
            className="w-full my-5 mx-auto border-solid border-[1px] rounded-xl p-1 bg-almond border-jade focus-visible:outline-none"
          /> */}
          {/* <div className="flex justify-center">
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
          </div> */}
          <Link href="/results" className="mx-auto">
            <button
              onClick={handleButtonClick}
              disabled={city === "Choose city" || pet === "Choose pet"}
              href="/results"
              class={`w-[200px] mx-auto text-center rounded-2xl px-5 py-2.5 mt-4 overflow-hidden group relative hover:ring-2 hover:ring-offset-2  transition-all ease-out duration-300 ${
                city === "Choose city" || pet === "Choose pet"
                  ? "bg-gray-400 hover:ring-gray-400"
                  : "bg-jade hover:bg-gradient-to-r hover:from-jade hover:lightTurquoiseColor text-snow-white hover:ring-green-400"
              }`}
            >
              <span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-snow-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
              <span class="relative">Look for petsitter</span>
            </button>
          </Link>
        </form>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-[30px] lg:mx-8">
        <div className="md:flex hidden justify-center">
          <div className="flex flex-col justify-center">
            <p className="flex justify-center mb-5 font-bold text-[24px] text-jade">
              HomePetGuardian.com
            </p>
            <p className="flex justify-center text-center text-[16px]">
              exists to help you find the perfect pet sitter for your pet when
              you need it.
            </p>
          </div>
        </div>
        <div className="md:flex hidden justify-center">
          <div className="flex flex-col justify-center">
            <p className="flex justify-center mb-5 font-bold text-[24px] text-jade">
              We understand
            </p>
            <p className="flex justify-center text-center">
              that entrusting your pet to someone else's care is a challenge in
              many respects.
            </p>
          </div>
        </div>
        <div className="lg:flex justify-center hidden">
          <div className="flex flex-col justify-center">
            <p className="flex justify-center mb-5 font-bold text-[24px] text-jade">
              Safety
            </p>
            <p className="flex justify-center text-center">
              Your pet will be in good hands - a safe and caring environment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSelectForm;
