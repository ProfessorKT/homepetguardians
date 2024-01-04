import React from "react";
import { StarIcon } from "@heroicons/react/solid";

const DashboardReviews = () => {
  return (
    <div className="w-full h-screen">
      <div className="flex justify-center mt-[130px]">
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
        <div className="grid grid-cols-3 mx-8 gap-x-[100px] gap-y-[50px]">
          <div className="w-[400px] h-[150px] bg-almond rounded-[32px] p-6">
            <div className="flex justify-center">
              <p className="text-2xl font-semibold mr-5">Szymon</p>
              <div className="flex">
                {Array(5)
                  .fill()
                  .map((_, i) => (
                    <StarIcon className="h-[32px] px-1 text-yellow-500" />
                  ))}
              </div>
            </div>
            <p className="mt-2 mx-5">
              Amazing care! My dog loves spending time with the caregivers.
            </p>
          </div>
          <div className="w-[400px] h-[150px] bg-almond rounded-[32px] p-6">
            <div className="flex justify-center">
              <p className="text-2xl font-semibold mr-5">Jakub</p>
              <div className="flex">
                {Array(4)
                  .fill()
                  .map((_, i) => (
                    <StarIcon className="h-[32px] px-1 text-yellow-500" />
                  ))}
                <StarIcon className="h-[32px] px-1 text-white" />
              </div>
            </div>
            <p className="mt-2 mx-5">
              Professionalism and love for animals at the highest level. I
              highly recommend it.
            </p>
          </div>
          <div className="w-[400px] h-[150px] bg-almond rounded-[32px] p-6">
            <div className="flex justify-center">
              <p className="text-2xl font-semibold mr-5">Adam</p>
              <div className="flex">
                {Array(5)
                  .fill()
                  .map((_, i) => (
                    <StarIcon className="h-[32px] px-1 text-yellow-500" />
                  ))}
              </div>
            </div>
            <p className="mt-2 mx-5">
              Safety and joy for my cat are always the priority.
            </p>
          </div>
          <div className="w-[400px] h-[150px] bg-almond rounded-[32px] p-6">
            <div className="flex justify-center">
              <p className="text-2xl font-semibold mr-5">Julia</p>
              <div className="flex">
                {Array(4)
                  .fill()
                  .map((_, i) => (
                    <StarIcon className="h-[32px] px-1 text-yellow-500" />
                  ))}
                <StarIcon className="h-[32px] px-1 text-white" />
              </div>
            </div>
            <p className="mt-2 mx-5">
              Unique approach to each pet. Definitely the best care in the area!
            </p>
          </div>
          <div className="w-[400px] h-[150px] bg-almond rounded-[32px] p-6">
            <div className="flex justify-center">
              <p className="text-2xl font-semibold mr-5">Kasia</p>
              <div className="flex">
                {Array(5)
                  .fill()
                  .map((_, i) => (
                    <StarIcon className="h-[32px] px-1 text-yellow-500" />
                  ))}
              </div>
            </div>
            <p className="mt-2 mx-4">
              The caregivers are not only competent but also full of passion for
              animals. Fantastic!
            </p>
          </div>
          <div className="w-[400px] h-[150px] bg-almond rounded-[32px] p-6">
            <div className="flex justify-center">
              <p className="text-2xl font-semibold mr-5">Bartek</p>
              <div className="flex">
                {Array(5)
                  .fill()
                  .map((_, i) => (
                    <StarIcon className="h-[32px] px-1 text-yellow-500" />
                  ))}
              </div>
            </div>
            <p className="mt-2 mx-5">
              I never have to worry about my dog when I'm away.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardReviews;
