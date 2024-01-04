import React from "react";
import Image from "next/image";
import Image2 from "../assets/DashboardSecondSectionFirstImage.png";
import Image1 from "../assets/DashboardSecondSectionSecondImage.png";

const DashboardSecondSection = () => {
  return (
    <div className="w-full h-screen">
      <div className="grid md:grid-cols-2 grid-cols-1 mx-8  h-full content-center">
        <div className="">
          <div className="my-8 flex justify-center">
            <Image src={Image1} style={{ width: "120px" }} />
            <div className="px-5 pl-10 flex flex-col justify-center gap-y-4">
              <p className="text-2xl font-semibold">Over</p>
              <p className="text-xl text-jade font-semibold">400+ dogs</p>
            </div>
          </div>
          <div className="my-8 flex justify-center">
            <div className="pr-10 mr-5 flex flex-col justify-center gap-y-4">
              <p className="text-2xl font-semibold">Over</p>
              <p className="text-xl text-jade font-semibold">200+ cats</p>
            </div>
            <Image src={Image2} style={{ width: "120px" }} />
          </div>
          <div className="pt-10 flex justify-center">
            <div className="flex flex-col justify-center">
              <p className="text-xl font-bold">found a petsitter through</p>
              <p className="text-xl font-bold text-jade">
                HomePetGuardians.com
              </p>
            </div>
          </div>
        </div>
        <div className="mt-12">
          <p className="flex justify-center mb-10 text-4xl font-bold text-dark-green ">
            Are petsitters verified?
          </p>
          <p className="text-2xl leading-8 text-center">
            We attach great importance to safety and trust. All our pet sitters
            go through a strict vetting process, including checking references,
            experience and conducting background checks. Thanks to this, you can
            be sure that every guardian who will take care of your pet is not
            only an animal enthusiast, but also an experienced and trustworthy
            professional. 🛡️🐾
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardSecondSection;
