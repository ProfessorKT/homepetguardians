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
    <div className="flex min-h-screen w-full items-center justify-center">
      <div className="flex flex-col">
        <button
          onClick={filterByPrice}
          className="border-2 border-black p-2 flex items-center"
        >
          Sort by Price {sortOrder === "asc" ? <FaSortUp /> : <FaSortDown />}
        </button>
        <div>
          {petsitterData.map((petsitter) => {
            return (
              <div className="my-5" key={petsitter.id}>
                <p>Petsitter</p>
                <p>{petsitter.name}</p>
                <p>{petsitter.location}</p>
                <p>{petsitter.price}zł</p>
                <p>{petsitter.availHours}</p>
                {petsitter.availAnimals.map((animal) => {
                  return <p>{animal}</p>;
                })}
              </div>
            );
          })}
        </div>
      </div>

      <APIProvider apiKey="AIzaSyBIQZ9fVWd9ViTSwwakS09ufWio7zz4vxs">
        <div className="h-[500px] w-[500px]">
          <Map zoom={10} center={position} mapId="215c0bcb4534194a">
            {/* <AdvancedMarker position={position}>
              <Pin glyphColor="white" />
            </AdvancedMarker> */}
          </Map>
        </div>
      </APIProvider>
    </div>
  );
};

export default PetsittersAvailable;
