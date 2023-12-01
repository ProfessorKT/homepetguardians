import React from "react";

const Services = () => {
  return (
    <div name="services" className="w-full h-screen">
      <div className="flex items-center h-[80%] justify-center">
        <div className="w-[980px] h-5 grid grid-cols-2 gap-x-[24px] gap-y-[24px] mr-[12px]">
          <div
            name="siema4"
            className="bg-gradient-to-r from-[#F1DABF] to-[#E4CDB1] rounded-[32px] w-[340px] h-[240px] flex items-center justify-center"
          >
            grafika
          </div>
          <div
            name="siema5"
            className="bg-gradient-to-r from-[#F1DABF] to-[#E4CDB1] rounded-[32px] w-[480px] h-[240px] flex items-center justify-center"
          >
            10
          </div>
          <div
            name="siema6"
            className="bg-gradient-to-r from-[#F1DABF] to-[#E4CDB1] rounded-[32px] w-[480px] h-[285px] flex items-center justify-center"
          >
            food
          </div>
          <div
            name="siema7"
            className="bg-gradient-to-r from-[#F1DABF] to-[#E4CDB1] rounded-[32px] w-[340px] h-[285px] flex items-center justify-center"
          >
            logo
          </div>
          <div
            name="siema8"
            className="bg-gradient-to-r from-[#F1DABF] to-[#E4CDB1] rounded-[32px] w-100 h-[75px] flex items-center justify-center"
          >
            Socializing with other pupils
          </div>
          <div
            name="siema9"
            className="bg-gradient-to-r from-[#F1DABF] to-[#E4CDB1] rounded-[32px] w-100 h-[75px] flex items-center justify-center"
          >
            99/100 pets liked this
          </div>
        </div>
        <div className="w-[704px] h-5 grid grid-cols-2 gap-x-[24px] gap-y-[24px] ml-[12px]">
          <div
            name="siema1"
            className="bg-gradient-to-r from-[#F1DABF] to-[#E4CDB1] rounded-[32px] w-100 h-[240px] flex items-center justify-center"
          >
            5
          </div>
          <div
            name="siema2"
            className="bg-gradient-to-r from-[#F1DABF] to-[#E4CDB1] rounded-[32px] flex items-center justify-center"
          >
            3
          </div>
          <div
            name="siema3"
            className="bg-gradient-to-r from-[#F1DABF] to-[#E4CDB1] rounded-[32px] col-span-2 h-[384px] flex items-center justify-center"
          >
            kot
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
