"use client";
import MenuBar from "@/components/MenuBar";
import { MyContextProvider } from "@/components/Provider";
import { useMyContext } from "@/components/Provider";
import { Menus } from "@/components/Data/Menus";

const Inner = () => {
  const { map, setMapValue } = useMyContext();

  return (
    <main className="bg-black/[0.7] w-screen h-screen text-white">
      {/* <video autoPlay muted loop className="relative opacity-50 h-screen w-screen ">
          <source src="/monke.mp4" type="video/mp4" />
        </video> */}

      <div className="absolute top-0 left-0 w-screen h-screen">
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
      <MyContextProvider>
        <Inner />
      </MyContextProvider>
    </>
  );
}
