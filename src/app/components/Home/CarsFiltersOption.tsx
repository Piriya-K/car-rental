import React, { useState, useEffect } from "react";

const CarsFiltersOption = ({ prop, setBrand }: any) => {
  const [brandList, setBrandList] = useState<any>();

  const brandSet = new Set(); // A 'Set' object is used to store unqiue values of any type.

  useEffect(() => {
    prop ? brandFilter() : console.log(`nothing added`);
  }, [prop]);

  const brandFilter = () => {
    // Adding the car brand into the 'Set' object by passing each object in the prop array into a for each that contains an add method.
    prop.forEach((element: any) => {
      brandSet.add(element.brand);
    });

    // console.log(brandSet);

    //Set the brandList by passing into it an array that is created from the brandSet object.
    setBrandList(Array.from(brandSet));
  };

  return (
    <div className="mt-5 sm:flex sm:justify-between sm:items-center space-y-2">
      <div>
        <h2 className="text-[30px] font-bold">Cars Catalog</h2>
        <h2>Explore from a wide-range of selection</h2>
      </div>

      <div className="sm:flex space-x-2">
        <select className="select select-bordered min-sm:w-full max-w-xs">
          <option defaultValue="Price">Price</option>
          <option>Min. - Max.</option>
          <option>Max. - Min.</option>
        </select>
        <select
          className="select select-bordered min-sm:w-full max-w-xs"
          onChange={(e) => setBrand(e.target.value)}
        >
          <option defaultValue="Brand">Brand</option>
          {brandList?.map((brand: String, index: number) => (
            <option key={index}>{brand}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CarsFiltersOption;
