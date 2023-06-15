"use client";
import MenuBar from "@/components/MenuBar";
import { MenuProvider } from "@/components/Manager/Provider/MenuProvider";
import { useMenuContext } from "@/components/Manager/Provider/MenuProvider";
import {
  ImageProvider,
  useImageContext,
} from "@/components/Manager/Provider/ImageProvider";
import { Menus } from "@/components/Data/Menus";
import Image from "next/image";

const Inner = () => {
  const { menu: map } = useMenuContext();
  const { image: source } = useImageContext();

  return (
    <main className="bg-black/[0.7] w-screen h-screen overflow-hidden text-white">
      {/* <video autoPlay muted loop className="relative opacity-50 h-screen w-screen ">
          <source src="/monke.mp4" type="video/mp4" />
        </video> */}

      <Image
        src={source}
        alt="Picture of the author"
        fill
        className="relative opacity-50 h-screen w-screen"
      />

      <div className="relative top-0 left-0 w-screen h-screen">
        <MenuBar />
        {Menus.map((menu) => {
          if (map.get(menu.name) === true) {
            return menu.component;
          }
        })}
      </div>
    </main>
  );
};

export default function Home() {
  return (
    <>
      <MenuProvider>
        <ImageProvider>
          <Inner />
        </ImageProvider>
      </MenuProvider>
    </>
  );
}
