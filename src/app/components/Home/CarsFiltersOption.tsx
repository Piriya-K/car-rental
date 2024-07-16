import React, { useState, useEffect } from "react";

const CarsFiltersOption = ({ prop, setBrandAndSort }: any) => {
  const [brandList, setBrandList] = useState<any>();

  const brandSet = new Set();

  useEffect(() => {
    prop ? brandFilter() : console.log(`nothing added`);
  }, [prop]);

  const brandFilter = () => {
    prop.forEach((element: any) => {
      brandSet.add(element.brand);
    });

    setBrandList(Array.from(brandSet));
  };

  const handleChange = () => {
    const sortOrder = document.querySelector('select[name="sortOrder"]') as any;
    const sortOrderValue = sortOrder?.value;
    console.log(sortOrderValue);
    const brand = document.querySelector('select[name="brand"]') as any;
    const brandValue = brand?.value;
    console.log(brandValue);
    setBrandAndSort(brandValue, sortOrderValue);
  };

  return (
    <div className="mt-5 sm:flex sm:justify-between sm:items-center space-y-2">
      <div>
        <h2 className="text-[30px] font-bold">Cars Catalog</h2>
        <h2>Explore from a wide-range of selection</h2>
      </div>

      <div className="sm:flex space-x-2">
        <select
          className="select select-bordered min-sm:w-full max-w-xs"
          name="sortOrder"
          onChange={handleChange}
        >
          <option value="Price">Price</option>
          <option value="-1">Min. - Max.</option>
          <option value="1">Max. - Min.</option>
        </select>

        <select
          className="select select-bordered min-sm:w-full max-w-xs"
          name="brand"
          onChange={handleChange}
        >
          <option value="Brand">Brand</option>
          {brandList?.map((brand: string, index: number) => (
            <option key={index} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CarsFiltersOption;
