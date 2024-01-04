import React from "react";
import { StarIcon } from "@heroicons/react/solid";

const DashboardReviews = () => {
  return (
    <div className="w-full h-screen">
      <div className="flex justify-center pt-[130px] text-center ">
        <p className="text-3xl font-semibold">
          See what customers say about{" "}
          <a className="text-jade text-3xl font-semibold">HomePetGuardians</a>
        </p>
      </div>
      <div className="flex justify-center">
        {Array(5)
          .fill()
          .map((_, i) => (
            <StarIcon className="h-[50px] px-2 mt-8 text-yellow-500" />
          ))}
      </div>
      <div className="flex justify-center mt-9">
        <p className="text-3xl font-semibold">
          average rating:{" "}
          <a className="text-jade text-3xl font-semibold ">4.77/5</a>
        </p>
      </div>
      <div className="flex justify-center mt-10">
        <div className="grid grid-cols-2 xl:grid-cols-3 mx-8 gap-x-[5%] xl:gap-x-[100px] md:gap-y-[50px] gap-y-[30px]">
          <div className="w-[100%] h-[100%] bg-almond rounded-[32px] p-6">
            <div className="flex justify-center flex-col md:flex-row">
              <p className="text-base xl:text-2xl font-semibold mr-3 xl:mr-5 text-center md:text-left">
                Szymon
              </p>
              <div className="flex justify-center md:justify-start">
                {Array(5)
                  .fill()
                  .map((_, i) => (
                    <StarIcon className="h-[24px] xl:h-[32px] px-1 text-yellow-500" />
                  ))}
              </div>
            </div>
            <p className="text-sm lg:text-base mt-2 md:mx-5">
              Amazing care! My dog loves spending time with the caregivers.
            </p>
          </div>
          <div className="w-[100%] h-[100%] bg-almond rounded-[32px] p-6">
            <div className="flex justify-center flex-col md:flex-row">
              <p className="text-base xl:text-2xl font-semibold mr-3 xl:mr-5 text-center md:text-left">
                Jakub
              </p>
              <div className="flex justify-center md:justify-start">
                {Array(4)
                  .fill()
                  .map((_, i) => (
                    <StarIcon className="h-[24px] xl:h-[32px] px-1 text-yellow-500" />
                  ))}
                <StarIcon className="h-[24px] xl:h-[32px] px-1 text-white" />
              </div>
            </div>
            <p className="text-sm lg:text-base mt-2 md:mx-5">
              Professionalism and love for animals at the highest level. I
              highly recommend it.
            </p>
          </div>
          <div className="w-[100%] h-[100%] bg-almond rounded-[32px] p-6">
            <div className="flex justify-center flex-col md:flex-row">
              <p className="text-base xl:text-2xl font-semibold mr-3 xl:mr-5 text-center md:text-left">
                Adam
              </p>
              <div className="flex justify-center md:justify-start">
                {Array(5)
                  .fill()
                  .map((_, i) => (
                    <StarIcon className="h-[24px] xl:h-[32px] px-1 text-yellow-500" />
                  ))}
              </div>
            </div>
            <p className="text-sm lg:text-base mt-2 md:mx-5">
              Safety and joy for my cat are always the priority.
            </p>
          </div>
          <div className="w-[100%] h-[100%] bg-almond rounded-[32px] p-6">
            <div className="flex justify-center flex-col md:flex-row">
              <p className="text-base xl:text-2xl font-semibold mr-3 xl:mr-5 text-center md:text-left">
                Julia
              </p>
              <div className="flex justify-center md:justify-start">
                {Array(4)
                  .fill()
                  .map((_, i) => (
                    <StarIcon className="h-[24px] xl:h-[32px] px-1 text-yellow-500" />
                  ))}
                <StarIcon className="h-[24px] xl:h-[32px] px-1 text-white" />
              </div>
            </div>
            <p className="text-sm lg:text-base mt-2 md:mx-5">
              Unique approach to each pet.{" "}
              <a className="md:block hidden">
                Definitely the best care in the area!
              </a>
            </p>
          </div>
          <div className="sm:block hidden w-[100%] h-[100%] bg-almond rounded-[32px] p-6">
            <div className="flex justify-center flex-col md:flex-row">
              <p className="text-base xl:text-2xl font-semibold mr-3 xl:mr-5 text-center md:text-left">
                Kasia
              </p>
              <div className="flex justify-center md:justify-start">
                {Array(5)
                  .fill()
                  .map((_, i) => (
                    <StarIcon className="h-[24px] xl:h-[32px] px-1 text-yellow-500" />
                  ))}
              </div>
            </div>
            <p className="text-sm lg:text-base mt-2 mx-5">
              The caregivers are not only competent but also full of passion for
              animals.
            </p>
          </div>
          <div className="sm:block hidden w-[100%] h-[100%] bg-almond rounded-[32px] p-6">
            <div className="flex justify-center flex-col md:flex-row">
              <p className="text-base xl:text-2xl font-semibold mr-3 xl:mr-5 text-center md:text-left">
                Bartek
              </p>
              <div className="flex justify-center md:justify-start">
                {Array(5)
                  .fill()
                  .map((_, i) => (
                    <StarIcon className="h-[24px] xl:h-[32px] px-1 text-yellow-500" />
                  ))}
              </div>
            </div>
            <p className="text-sm lg:text-base mt-2 mx-5">
              I never have to worry about my dog when I'm away.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardReviews;
