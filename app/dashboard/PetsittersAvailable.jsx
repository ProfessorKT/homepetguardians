import React, { useState, useEffect } from "react";
import { db } from "../../lib/firebaseConfig";
import { getDocs, collection } from "firebase/firestore";
import { FaSortUp, FaSortDown } from "react-icons/fa";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";
import Guardian from "../assets/Guardian.png"
import Image from "next/image";

async function fetchDataFromFirestore() {
  const querySnapshot = await getDocs(collection(db, "petsitters"));

  const data = [];
  querySnapshot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() });
  });

  return data;
}

const PetsittersAvailable = () => {
  const [petsitterData, setPetsitterData] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");

  //defines the starting position of the map - Gdańsk
  const position = { lat: 54.372158, lng: 18.638306 };

  useEffect(() => {
    async function fetchData() {
      const data = await fetchDataFromFirestore();
      setPetsitterData(data);
    }
    fetchData();
  }, []);

  const filterByPrice = () => {
    const sortedData = [...petsitterData];

    if (sortOrder === "asc") {
      sortedData.sort((a, b) => a.price - b.price);
      setSortOrder("desc");
    } else {
      sortedData.sort((a, b) => b.price - a.price);
      setSortOrder("asc");
    }

    setPetsitterData(sortedData);
  };

  return (
    <div className="flex flex-col min-h-screen w-full items-center justify-center">
      <div className="xl:flex lg:mt-[100px] xl:mt-[30px] md:mt-[100px] lg:flex ">
        <div className="flex flex-col space-y-4 w-full  lg:w-[1000px] xl:w-[1200px] md:w-[120%] ">
          <div className="flex md:justify-between space-y-4 md:space-y-0 md:space-x-4 mt-[60px]">
            <div className="border-2 border-jade p-2 flex items-center w-full md:w-full rounded-[20px] lg:w-full sm:h-full sm:mt-[16px] md:mt-[0px] mt-[16px] ml-2">
              City Type of term Date
            </div>
            <button
              onClick={filterByPrice}
              className="border-2 border-jade p-2 flex items-center w-full md:w-[300px] rounded-[20px]"
            >
              Sort by Price {sortOrder === "asc" ? <FaSortUp /> : <FaSortDown />}
            </button>
          </div>
          <div className="overflow-scroll max-h-[700px] md:w-full w-[95%] m-2">
            {petsitterData.map((petsitter) => {
              return (
                <div
                  className="my-5 border-jade border-2 w-full md:w-auto h-[auto] text-[14px] md:text-[22px]"
                  key={petsitter.id}
                >
                  <div>
                    <Image
                      src={Guardian}
                      alt=""
                      style={{ width: "200px", height: "200px", padding: 10 }}
                      className=""
                    />
                  </div>
                  <div className="ml-[260px] mt-[-200px] text-[18px] md:text-[26px]">
                    <p>Petsitter</p>
                    <p>{petsitter.name}</p>
                    <p>{petsitter.location}</p>
                    <p>{petsitter.price}zł</p>
                    <p>{petsitter.availHours}</p>
                  </div>
                  <p className="flex">
                    {petsitter.availAnimals.map((animal, index) => (
                      <span
                        key={index}
                        className="bg-jade rounded-[10px] mr-2 p-2 pl-3 pr-3 mt-[70px] text-white ml-[10px] mb-[10px]"
                      >
                        {animal}
                      </span>
                    ))}
                    <button className="ml-auto bg-jade rounded-[30px] mr-2 p-2 pl-3 pr-3 mt-[70px] text-white mb-[10px]">
                      Check more
                    </button>
                  </p>
                </div>
              );
            })}
          </div>
        </div>
  
        <APIProvider apiKey="AIzaSyBIQZ9fVWd9ViTSwwakS09ufWio7zz4vxs" className="">
          <div className="xl:h-[760px] w-full xl:ml-[50px] lg:w-[100%] lg:h-[760px] lg:ml-[20px] xl:w-[100%] md:w-[120%] md:h-[300px]  lg:mt-[60px] ">
            <Map zoom={10} center={position} mapId="215c0bcb4534194a">
              {/* <AdvancedMarker position={position}>
              <Pin glyphColor="white" />
            </AdvancedMarker> */}
            </Map>
          </div>
        </APIProvider>
      </div>
    </div>
  );
  
  
  
};

export default PetsittersAvailable;