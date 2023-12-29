import React from "react";
import PlaceholderProfilePicture from "../assets/PlaceholderProfilePicture.jpg";
import Image from "next/image";

const GuardianProfile = () => {
  return (
    <div className="w-full h-screen flex flex-row">
      <div className="w-1/2 h-[calc(100vh-70px)] mt-[70px] flex flex-col gap-y-[10px] items-center justify-center">
        <div className="flex flex-row w-[60%] justify-around">
          <Image
            src={PlaceholderProfilePicture}
            alt=""
            className="w-[120px] h-[120px] rounded-full"
            priority={true}
          />
          <div className="flex flex-col items-stretch">
            <p>Adam</p>
            <p>Rating:</p>
          </div>
        </div>
        <form
          action=""
          className="w-[60%] h-[200px] border-2 border-solid border-jade rounded-[28px] flex flex-col gap-y-[10px] items-center justify-center"
        >
          <select
            name=""
            id=""
            className="bg-almond rounded-[10px] border-2 border-solid border-jade w-[50%]"
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
            className="bg-almond rounded-[10px] border-2 border-solid border-jade"
          >
            <option value="">Choose Pet</option>
            <option value="">Placeholder2</option>
            <option value="">Placeholder3</option>
            <option value="">Placeholder4</option>
            <option value="">Placeholder5</option>
          </select>
        </form>
        <button className="bg-jade rounded-[24px] text-white h-[5%] w-[15%]">
          Book
        </button>
      </div>
      <div className="w-1/2 h-[calc(100vh-70px)] mt-[70px] flex flex-col gap-y-[10px] items-center justify-center">
        <div className="flex flex-row gap-x-[10px]">
          <p className="bg-almond border-2 border-solid border-jade rounded-[10px]">
            Adam
          </p>
          <p className="bg-almond border-2 border-solid border-jade rounded-[10px]">
            Kowalski
          </p>
        </div>
        <p className="bg-almond border-2 border-solid border-jade rounded-[10px]">
          Adam@gmail.com
        </p>
        <div className="flex flex-row gap-x-[10px]">
          <p className="bg-almond border-2 border-solid border-jade rounded-[10px]">
            22.02.1988
          </p>
          <p className="bg-almond border-2 border-solid border-jade rounded-[10px]">
            555333444
          </p>
        </div>
        <p className="bg-almond border-2 border-solid border-jade rounded-[10px] w-[60%]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad,
          dignissimos modi. Labore, explicabo pariatur expedita consequuntur est
          ratione. Eligendi quos dignissimos laborum consequatur vero eos
          impedit corporis tempora nesciunt quasi.
        </p>
        <p className="bg-almond border-2 border-solid border-jade rounded-[10px] w-[60%]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad,
          dignissimos modi. Labore, explicabo pariatur expedita consequuntur est
          ratione. Eligendi quos dignissimos laborum consequatur vero eos
          impedit corporis tempora nesciunt quasi.
        </p>
        <button className="bg-jade rounded-[24px] text-white h-[5%] w-[15%]">
          Back
        </button>
      </div>
    </div>
  );
};

export default GuardianProfile;
