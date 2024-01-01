import React, { useState, useEffect } from "react";
import firebase from "firebase/app";
import { db } from "../../lib/firebase.config.js";
import "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DashboardSelectForm = () => {
  const [cities, setCities] = useState([]);
  const [pets, setPets] = useState([]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const formatDateRange = (start, end) => {
    if (!start || !end) return "Choose date range";
    const options = { year: "numeric", month: "long", day: "numeric" };
    return `${start.toLocaleDateString(
      "en-US",
      options
    )} - ${end.toLocaleDateString("en-US", options)}`;
  };

  useEffect(() => {
    const fetchData = async () => {
      const cityData = await getDocs(collection(db, "Cities"));
      const petData = await getDocs(collection(db, "Pets"));

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

  return (
    <div className="w-full h-screen">
      <div className="flex justify-center pt-[100px]">
        <p className="text-3xl font-bold">Find proven care for your pet</p>
      </div>
      <div className="flex justify-center">
        <form
          action=""
          className="w-[500px] flex flex-col justify-center border-jade border-solid border-[2px] rounded-2xl mt-4 active:outline-none"
        >
          <select
            name=""
            id=""
            className="w-[450px] my-5 mx-auto border-solid border-[1px] rounded-xl p-1 bg-almond border-jade"
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
            className="w-[450px] my-5 mx-auto border-solid border-[1px] rounded-xl p-1 bg-almond border-jade"
          >
            <option value="">Choose pet</option>
            {pets.map((pet, index) => (
              <option key={index} value={pet}>
                {pet}
              </option>
            ))}
          </select>
          <input
            type="text"
            value={formatDateRange(startDate, endDate)}
            readOnly
            className="w-[450px] my-5 mx-auto border-solid border-[1px] rounded-xl p-1 bg-almond border-jade"
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
          <a
            href="#_"
            class=" w-[200px] mx-auto text-center rounded-2xl px-5 py-2.5 my-4 overflow-hidden group bg-jade relative hover:bg-gradient-to-r hover:from-jade hover:lightTurquoiseColor text-snow-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300"
          >
            <span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-snow-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
            <span class="relative">Button Text</span>
          </a>
        </form>
      </div>
    </div>
  );
};

export default DashboardSelectForm;
