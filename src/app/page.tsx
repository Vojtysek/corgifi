import Image from "next/image";
import { Draggable } from "../components/Draggable";

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
          <Draggable>
            <iframe
              src="https://open.spotify.com/embed/track/1LIvdWNdKmHvU0FJvw2diN?utm_source=generator&theme=0"
              height="250"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </Draggable>
        </div>
      </main>
    </>
  );
}
