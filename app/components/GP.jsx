import React from "react";
import PlaceholderProfilePicture from "../assets/PlaceholderProfilePicture.jpg";
import Image from "next/image";

const GuardianProfile = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center pt-[20px] lg:pt-[0px] lg:flex-row ">
      <div className="w-1/2 h-[calc(100vh-70px)] mt-[70px] flex flex-col gap-y-[10px] lg:gap-y-[20px] items-center justify-center">
        <div className="flex flex-row w-[100%] lg:w-[60%] justify-around">
          <Image
            src={PlaceholderProfilePicture}
            alt=""
            className="w-[55px] h-[55px] sm:w-[80px] sm:h-[80px] lg:w-[120px] lg:h-[120px] rounded-full"
            priority={true}
          />
          <div className="flex flex-col items-stretch justify-center">
            <p>Adam</p>
            <p>Gdańsk</p>
            <p>Rating: 5.0</p>
          </div>
        </div>
        <form
          action=""
          className="w-[100%] lg:w-[60%] h-[200px] border-2 border-solid border-jade rounded-[28px] flex flex-col gap-y-[10px] lg:gap-y-[20px] items-center justify-center"
        >
          <select
            name=""
            id=""
            className="bg-almond rounded-[10px] border-2 border-solid border-jade w-[60%] p-[10px]"
          >
            <option value="">When</option>
            <option value="">Placeholder2</option>
            <option value="">Placeholder3</option>
            <option value="">Placeholder4</option>
            <option value="">Placeholder5</option>
          </select>
          <select
            name=""
            id=""
            className="bg-almond rounded-[10px] border-2 border-solid border-jade w-[60%] p-[10px]"
          >
            <option value="">Choose Pet</option>
            <option value="">Placeholder2</option>
            <option value="">Placeholder3</option>
            <option value="">Placeholder4</option>
            <option value="">Placeholder5</option>
          </select>
        </form>
        <button className="bg-jade rounded-[24px] text-white h-[35px] w-[100px] lg:h-[5%] lg:w-[15%]">
          Book
        </button>
      </div>
      <div className="w-[80%] lg:w-1/2 h-[calc(100vh-70px)] mt-[70px] flex flex-col gap-y-[10px] lg:gap-y-[20px] items-center justify-center pb-[10px] lg:pb-[0px]">
        <div className="flex flex-row gap-x-[10px] w-[100%] justify-center">
          <p className="w-[calc(30%-5px)] bg-almond border-2 border-solid border-jade rounded-[10px] p-[10px]">
            Adam Kowalski
          </p>
          <p className="w-[calc(30%-5px)] bg-almond border-2 border-solid border-jade rounded-[10px] p-[10px]">
            22 years old
          </p>
        </div>
        <div className="flex flex-col gap-y-[10px] lg:flex-row gap-x-[10px] w-[100%] items-center justify-center">
          <p className="w-[60%] lg:w-[calc(30%-5px)] bg-almond border-2 border-solid border-jade rounded-[10px] p-[10px]">
            Adam@gmail.com
          </p>
          <p className="w-[60%] lg:w-[calc(30%-5px)] bg-almond border-2 border-solid border-jade rounded-[10px] p-[10px]">
            555333444
          </p>
        </div>
        <p className="bg-almond border-2 border-solid border-jade rounded-[10px] w-[60%] p-[10px]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad,
          dignissimos modi. Labore, explicabo pariatur expedita consequuntur est
          ratione. Eligendi quos dignissimos laborum consequatur vero eos
          impedit corporis tempora nesciunt quasi.
        </p>
        <p className="bg-almond border-2 border-solid border-jade rounded-[10px] w-[60%] p-[10px]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad,
          dignissimos modi. Labore, explicabo pariatur expedita consequuntur est
          ratione. Eligendi quos dignissimos laborum consequatur vero eos
          impedit corporis tempora nesciunt quasi.
        </p>
        <button className="bg-jade rounded-[24px] text-white h-[35px] w-[100px] lg:h-[5%] lg:w-[15%]">
          Back
        </button>
      </div>
    </div>
  );
};

export default GuardianProfile;
