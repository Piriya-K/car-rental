import React from "react";

const CarsFiltersOption = () => {
  return (
    <div className="mt-5 sm:flex sm:justify-between sm:items-center space-y-2">
      <div>
        <h2 className="text-[30px] font-bold">Cars Catalog</h2>
        <h2>Explore from a wide-range of selection</h2>
      </div>

      <div className="sm:flex space-x-2">
        <select className="select select-bordered min-sm:w-full max-w-xs">
          <option disabled selected>
            Price
          </option>
          <option>Min. - Max.</option>
          <option>Max. - Min.</option>
        </select>
        <select className="select select-bordered min-sm:w-full max-w-xs">
          <option disabled selected>
            Brand
          </option>
          <option>Toyota</option>
          <option>Mazda</option>
          <option>Honda</option>
          <option>Nissan</option>
          <option>BMW</option>
          <option>Mercedes-Benz</option>
          <option>Audi</option>
        </select>
      </div>
    </div>
  );
};

export default CarsFiltersOption;
