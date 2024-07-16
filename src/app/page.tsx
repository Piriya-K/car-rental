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

  useEffect(() => {
    carList();
  }, []);

  const carList = async () => {
    const result: any = await getCarList();
    setCars(result?.carLists);
  };

  return (
    <div className="p-5 sm:px-10 md:px-20">
      <Hero />
      <SearchInput />
      <CarsFiltersOption />
      <CarsList cars={cars} />
    </div>
  );
}
