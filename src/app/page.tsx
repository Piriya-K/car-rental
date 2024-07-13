import Image from "next/image";
import { auth } from "../../auth";

export default async function Home() {
  const session = await auth();
  console.log(session);

  return (
    <main>
      <h1>Homepage</h1>
    </main>
  );
}
