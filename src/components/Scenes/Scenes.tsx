"use client";

import Image from "next/image";
import { List, ListProps } from "./ScenesList";
import { useRef } from "react";

const Scenes = () => {
  const handleSelectScene = (scene: ListProps) => {
    console.log(scene.name);
  };

  const scenesBoxRef = useRef<HTMLDivElement>(null);

  const handleCloseScenes = () => {
    scenesBoxRef.current?.remove();
  };

  return (
    <div
      ref={scenesBoxRef}
      className="flex flex-col p-4 gap-4 bg-black/[.6] border-2 border-[#ffa74f] rounded-xl"
    >
      <div className="h-2" />
      <div
        onClick={handleCloseScenes}
        className="text-[#ffa74f] p-2 absolute -top-2 cursor-pointer right-3 text-xl"
      >
        _
      </div>
      {List.map((scene: ListProps) => {
        return (
          <div onClick={() => handleSelectScene(scene)}>
            <Image
              className="pointer-events-none rounded-md flex"
              src={scene.daySrc}
              width={200}
              height={200}
              alt={scene.name}
              key={scene.name}
            />
            <p className="text-[#ffa74f] tracking-[5px] ">{scene.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Scenes;
