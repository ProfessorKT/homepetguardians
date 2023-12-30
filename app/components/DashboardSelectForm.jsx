import React from "react";

const DashboardSelectForm = () => {
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
            <option value="">Chosee location</option>
            <option value="">Warsaw</option>
            <option value="">Gdansk</option>
            <option value="">Krakow</option>
          </select>
          <select
            name=""
            id=""
            className="w-[450px] my-5 mx-auto border-solid border-[1px] rounded-xl p-1 bg-almond border-jade"
          >
            <option value="">Chosee pet</option>
            <option value="">Dog</option>
            <option value="">Cat</option>
            <option value="">Bird</option>
            <option value="">Rodent</option>
          </select>
          <select
            name=""
            id=""
            className="w-[450px] my-5 mx-auto border-solid border-[1px] rounded-xl p-1 bg-almond border-jade"
          >
            <option value="">Chosee date</option>
            <option value="">Calendar here</option>
            <option value="">Calendar here</option>
            <option value="">Calendar here</option>
          </select>
          {/* <button className="w-[200px] mx-auto my-4 py-2 bg-jade rounded-2xl cursor-pointer text-snow-white">
            Look for petsitter
          </button> */}
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
