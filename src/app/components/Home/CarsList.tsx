import React from "react";
import CarCard from "./CarCard";

const CarsList = ({ cars }) => {
  return (
    <div className="mt-5 grid grid-cols-2 lg:grid-cols-3">
      {cars.map((car: any, index: number) => (
        <div key={index}>
          <CarCard prop={car} />
        </div>
      ))}
    </div>
  );
};

export default CarsList;
