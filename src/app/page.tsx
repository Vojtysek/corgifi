import Image from "next/image";

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

      <h1 className="">Home</h1>
      <iframe
        src="https://open.spotify.com/embed/playlist/6ZQ0l9NUxiDVZl8dOQGLjD?utm_source=generator&theme=0"
        width="20%"
        height="359"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        ></iframe>
        </div>
        </main>
    </>
  );
}
