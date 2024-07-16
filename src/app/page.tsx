"use client";
import { useEffect } from "react";
import { auth } from "../../auth";
import CarsFiltersOption from "./components/Home/CarsFiltersOption";
import Hero from "./components/Home/Hero";
import SearchInput from "./components/Home/SearchInput";
import { getCarList } from "./services";
import { useState } from "react";
import CarsList from "./components/Home/CarsList";

export default function Home() {
  // const session = await auth();
  // console.log(session);

  const [cars, setCars] = useState<any>([]);
  const [originalList, setOriginalList] = useState<any>([]);

  useEffect(() => {
    const fetchCarList = async () => {
      try {
        const result: any = await getCarList();
        setCars(result?.carLists);
        setOriginalList(result?.carLists);
      } catch (error) {
        console.error("Error fetching car list:", error);
      }
    };
    fetchCarList();
  }, []);

  const setBrandAndSort = (name: String, value: number | String) => {
    console.log(`name is ${name}`);
    console.log(`value is ${value}`);
    let filteredList;
    let sortedData;

    if (name === "Brand") {
      filteredList = originalList;
      if (value === "Price") {
        sortedData = filteredList;
      } else {
        sortedData = [...filteredList].sort((a, b) =>
          value == -1 ? a.price - b.price : b.price - a.price
        );
      }
    } else {
      filteredList = originalList;
      filteredList = originalList.filter((item: any) => item.brand == name);
      if (value === "Price") {
        sortedData = filteredList;
      } else {
        sortedData = [...filteredList].sort((a, b) =>
          value == -1 ? a.price - b.price : b.price - a.price
        );
      }
    }

    setCars(sortedData);
  };

  return (
    <div className="p-5 sm:px-10 md:px-20">
      <Hero />
      <SearchInput />
      <CarsFiltersOption
        prop={originalList}
        setBrandAndSort={setBrandAndSort}
      />
      <CarsList cars={cars} />
    </div>
  );
}
