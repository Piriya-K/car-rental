"use clients";
import { auth } from "../../auth";
import Hero from "./components/Home/Hero";

export default async function Home() {
  const session = await auth();
  console.log(session);

  return (
    <div className="p-5 sm:px-10 md:px-20">
      <Hero />
    </div>
  );
}
