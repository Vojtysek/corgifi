import Image from "next/image";
import { Drag } from "../components/Draggable";

export default function Home() {
  return (
    <>
      <main>
        <div>
          <Image
            className="relative"
            src="/coffee.jpeg"
            alt="Picture of the author"
            fill
          />
        </div>
        <div className="absolute top-0 left-0 w-screen h-screen">
        </div>
      </main>
    </>
  );
}
