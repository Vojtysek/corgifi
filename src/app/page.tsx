import Image from "next/image";
import { Drag } from "../components/Draggable";
import Scenes from "@/components/Scenes/Scenes";

export default function Home() {
  return (
    <>
      <main className="bg-black">
        <video autoPlay muted loop className="relative opacity-50 h-screen w-screen ">
          <source src="/monke.mp4" type="video/mp4" />
        </video>

        <div className="absolute top-0 left-0 w-screen h-screen">
          <Drag>
            <Scenes />
          </Drag>
        </div>
      </main>
    </>
  );
}
