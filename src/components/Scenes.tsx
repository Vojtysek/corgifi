"use client";

import Image from "next/image";
import { List, ListProps } from "./Data/Scenes";
import { useRef } from "react";
import { Drag } from "./Draggable";

const Scenes = () => {
  const handleSelectScene = (scene: ListProps) => {
    
  };

  const scenesBoxRef = useRef<HTMLDivElement>(null);

  const handleCloseScenes = () => {
    scenesBoxRef.current?.remove();
  };

  return (
    <Drag name="Scenes" closable={true}>
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
    </Drag>
  );
};

export default Scenes;
