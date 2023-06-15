"use client";

import Image from "next/image";
import { List, ListProps } from "../Data/Scenes";
import { Drag } from "../Manager/Draggable";
import { useImageContext } from "../Manager/Provider/ImageProvider";

const Scenes = () => {
  const { setImageValue } = useImageContext();

  const handleSelectScene = (scene: ListProps) => {
    setImageValue(scene.daySrc);
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
