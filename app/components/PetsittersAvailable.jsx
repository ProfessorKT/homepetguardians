import React, { useState, useEffect } from "react";
import { db } from "../../lib/firebaseConfig.js";
import { getDocs, collection } from "firebase/firestore";
import { FaSortUp, FaSortDown } from "react-icons/fa";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";
import Image from "next/image";
import { differenceInCalendarYears } from "date-fns";
import Link from "next/link";

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
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedPet, setSelectedPet] = useState("");
  const [mapPosition, setMapPosition] = useState();

  //defines the starting position of the map - Gdańsk
  const position = { lat: 54.372158, lng: 18.638306 };

  const Gdansk = { lat: 54.372158, lng: 18.638306 };
  const Gdynia = { lat: 54.51889, lng: 18.53054 };
  const Warsaw = { lat: 52.229675, lng: 21.01223 };
  const Krakow = { lat: 50.064651, lng: 19.944981 };

  useEffect(() => {
    const pet = localStorage.getItem("selectedPet");
    const city = localStorage.getItem("selectedCity");

    setSelectedPet(pet);
    setSelectedCity(city);

    switch (city) {
      case "Gdańsk":
        setMapPosition(Gdansk);
        break;
      case "Warsaw":
        setMapPosition(Warsaw);
        break;
      case "Kraków":
        setMapPosition(Krakow);
        break;
      case "Gdynia":
        setMapPosition(Gdynia);
        break;
      default:
        setMapPosition({});
        break;
    }
  }, []);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchDataFromFirestore();
      setPetsitterData(data);
    }
    fetchData();
  }, []);

  const filterByPrice = () => {
    const sortedData = [...petsitterData];
    const selectedPet = localStorage.getItem("selectedPet");

    switch (selectedPet) {
      case "Dog":
        if (sortOrder === "asc") {
          sortedData.sort((a, b) => a.dog_price - b.dog_price);
          setSortOrder("desc");
        } else {
          sortedData.sort((a, b) => b.dog_price - a.dog_price);
          setSortOrder("asc");
        }
        break;
      case "Cat":
        if (sortOrder === "asc") {
          sortedData.sort((a, b) => a.cat_price - b.cat_price);
          setSortOrder("desc");
        } else {
          sortedData.sort((a, b) => b.cat_price - a.cat_price);
          setSortOrder("asc");
        }
        break;
      case "Bird":
        if (sortOrder === "asc") {
          sortedData.sort((a, b) => a.bird_price - b.bird_price);
          setSortOrder("desc");
        } else {
          sortedData.sort((a, b) => b.bird_price - a.bird_price);
          setSortOrder("asc");
        }
        break;
      case "Rodent":
        if (sortOrder === "asc") {
          sortedData.sort((a, b) => a.rodent_price - b.rodent_price);
          setSortOrder("desc");
        } else {
          sortedData.sort((a, b) => b.rodent_price - a.rodent_price);
          setSortOrder("asc");
        }
        break;
      default:
        pricePerDay = 0; // default price if no pet is selected or if the selectedPet value is not recognized
    }

    setPetsitterData(sortedData);
  };

  if (selectedCity && selectedPet && mapPosition) {
    return (
      <div className="flex flex-col min-h-screen w-full items-center justify-center">
        <div className="xl:flex lg:mt-[100px] xl:mt-[30px] md:mt-[100px] lg:flex ">
          <div className="flex flex-col space-y-4 w-full  lg:w-[1000px] xl:w-[1400px] md:w-[120%] ">
            <div className="flex md:justify-between space-y-4 md:space-y-0 md:space-x-4 mt-[60px]">
              <div className="border-2 border-jade p-2 flex items-center w-full md:w-full rounded-[20px] lg:w-full sm:h-full sm:mt-[16px] md:mt-[0px] mt-[16px] ml-2">
                Selected city: {selectedCity}, pet: {selectedPet}
              </div>
              <button
                onClick={filterByPrice}
                className="border-2 border-jade p-2 flex items-center w-full md:w-[300px] rounded-[20px]"
              >
                Sort by Price{" "}
                {sortOrder === "asc" ? <FaSortUp /> : <FaSortDown />}
              </button>
            </div>
            <div className="overflow-y-scroll max-h-[700px] md:w-full w-[95%] m-2 overflow-x-hidden">
              {petsitterData.map((petsitter) => {
                const pet = selectedPet.toLocaleLowerCase();
                if (petsitter.city === selectedCity && petsitter[pet]) {
                  const dob = petsitter.date_of_birth.toDate();
                  const age = differenceInCalendarYears(new Date(), dob);
                  return (
                    <div
                      className="my-5 border-jade border-2 w-full md:w-auto h-[auto] text-[14px] md:text-[22px] rounded-xl"
                      key={petsitter.id}
                    >
                      <div>
                        <Image
                          src={petsitter.url}
                          alt=""
                          style={{
                            padding: 10,
                            minHeight: "200px",
                            minWidth: "200px",
                            objectFit: "cover",
                          }}
                          width={200}
                          height={200}
                          className=""
                        />
                      </div>
                      <div className="ml-[260px] mt-[-200px] text-[16px] md:text-[26px]">
                        <p>Petsitter</p>
                        <p>{petsitter.name}</p>
                        <p>{petsitter.city}</p>
                        <p>
                          {age + " "}
                          years old
                        </p>
                        <p>Average: {petsitter.rating}</p>
                      </div>
                      <p className="flex">
                        {petsitter.bird ? (
                          <span className="bg-jade rounded-[10px] mr-2 p-2 pl-3 pr-3 mt-[30px] text-white ml-[10px] mb-[10px] text-[18px] self-center">
                            Bird - {petsitter.bird_price} PLN
                          </span>
                        ) : (
                          <></>
                        )}

                        {petsitter.cat ? (
                          <span className="bg-jade rounded-[10px] mr-2 p-2 pl-3 pr-3 mt-[30px] text-white ml-[10px] mb-[10px] text-[18px] self-center">
                            Cat - {petsitter.cat_price} PLN
                          </span>
                        ) : (
                          <></>
                        )}

                        {petsitter.dog ? (
                          <span className="bg-jade rounded-[10px] mr-2 p-2 pl-3 pr-3 mt-[30px] text-white ml-[10px] mb-[10px] text-[18px] self-center">
                            Dog - {petsitter.dog_price} PLN
                          </span>
                        ) : (
                          <></>
                        )}

                        {petsitter.rodent ? (
                          <span className="bg-jade rounded-[10px] mr-2 p-2 pl-3 pr-3 mt-[30px] text-white ml-[10px] mb-[10px] text-[18px] self-center">
                            Rodent - {petsitter.rodent_price} PLN
                          </span>
                        ) : (
                          <></>
                        )}

                        <Link
                          href={`/guardianprofile?id=${petsitter.id}`}
                          className="ml-auto bg-jade rounded-[30px] mr-2 p-2 pl-3 pr-3 mt-[30px] text-white mb-[10px]"
                        >
                          Check more
                        </Link>
                      </p>
                    </div>
                  );
                }
              })}
            </div>
          </div>

          {position && (
            <APIProvider
              apiKey="AIzaSyBIQZ9fVWd9ViTSwwakS09ufWio7zz4vxs"
              className=""
            >
              <div className="xl:h-[760px] w-full xl:ml-[50px] lg:w-[100%] lg:h-[760px] lg:ml-[20px] xl:w-[100%] md:w-[120%] md:h-[300px]  lg:mt-[60px] ">
                <Map zoom={10} center={mapPosition} mapId="215c0bcb4534194a">
                  {/* <AdvancedMarker position={position}>
       <Pin glyphColor="white" />
     </AdvancedMarker> */}
                </Map>
              </div>
            </APIProvider>
          )}
        </div>
      </div>
    );
  }
};

export default PetsittersAvailable;
