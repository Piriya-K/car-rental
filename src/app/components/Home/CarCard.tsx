import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaGasPump } from "react-icons/fa";
import { MdAirlineSeatReclineNormal } from "react-icons/md";
import { PiSteeringWheelFill } from "react-icons/pi";

const CarCard = ({ prop }: any) => {
  const [car, setCar] = useState<any>(null);

  useEffect(() => {
    prop ? setCar(prop) : null;
  }, [prop]);

  if (car)
    return (
      <div
        className="group bg-slate-50 p-2 sm:p-5 rounded-3xl m-1 sm:m-5
hover:bg-white 
hover:border-[1px] cursor-pointer duration-50
border-blue-500 "
      >
        <h2 className="text-[1.5rem] font-medium my-1">{car.name}</h2>
        <h2 className="text-[1.3rem] font-bold mb-2">
          <span className="text-[1rem] font-light">$ </span>
          {car?.price}
          <span className="text-[1rem] font-light"> /day</span>
        </h2>
        <div className="flex justify-center">
          <Image
            src={car!.image[0]!.url as string}
            alt={car.name}
            width={220}
            height={200}
            className="w-[250px] h-[150px] 
        mb-3 object-contain "
          />
        </div>
        <div className="flex justify-around group-hover:hidden">
          <div className="text-center text-gray-500">
            <PiSteeringWheelFill className="w-full text-[22px] mb-2" />
            <h2 className="line-clamp-5 text-[14px] font-light">
              {car.transmission}
            </h2>
          </div>
          <div className="text-center text-gray-500">
            <MdAirlineSeatReclineNormal className="w-full text-[22px] mb-2" />
            <h2 className="line-clamp-5 text-[14px] font-light">
              {car.seat} Seats
            </h2>
          </div>
          <div className=" text-center text-gray-500 ">
            <FaGasPump className="w-full text-[22px] mb-2" />
            <h2 className="line-clamp-5 text-[14px] font-light">
              {car.average} MPG
            </h2>
          </div>
        </div>
        <button
          className="hidden group-hover:flex bg-gradient-to-r
     from-blue-400 to-blue-700
    p-2 rounded-lg text-white w-full px-5 justify-between"
        >
          Rent Now
          <span className="bg-blue-400 p-1 rounded-md ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4 text-white"
            >
              <path
                fillRule="evenodd"
                d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </button>
      </div>
    );
};

export default CarCard;
