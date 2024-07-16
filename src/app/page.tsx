"use client";
import { useEffect } from "react";
import { auth } from "../../auth";
import CarsFiltersOption from "./components/CarsFiltersOption";
import Hero from "./components/Home/Hero";
import SearchInput from "./components/Home/SearchInput";
import { getCarList } from "./services";

export default function Home() {
  // const session = await auth();
  // console.log(session);

  const carList = async () => {
    const result = await getCarList();
    console.table(result);
  };

  useEffect(() => {
    carList();
  }, []);

  return (
    <div className="p-5 sm:px-10 md:px-20">
      <Hero />
      <SearchInput />
      <CarsFiltersOption />
    </div>
  );
}
