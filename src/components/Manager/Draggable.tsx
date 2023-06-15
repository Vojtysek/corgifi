"use client";

import Draggable from "react-draggable";
import { useRef } from "react";
import { useMenuContext } from "./Provider/MenuProvider";

interface DragProps {
  closable?: boolean;
  name: string;
  children: React.ReactNode;
}

export const Drag: React.FC<DragProps> = ({ closable, name, children }) => {
  const dragRef = useRef<HTMLDivElement>(null);
  const { menu: map, setMenuValue: setMapValue } = useMenuContext();

  const handleCloseDrag = () => {
    map.get(name) === true ? setMapValue(name, false) : setMapValue(name, true);
  };

  return (
    <Draggable
      defaultPosition={{
        x: 200,
        y: 0,
      }}
      bounds="parent"
      handle=".handle"
    >
      {closable === true ? (
        <div
          ref={dragRef}
          className="flex flex-col p-4 gap-2 bg-black/[.6] border-2 absolute w-fit border-[#ffa74f] rounded-xl"
        >
          <div className="handle h-8 cursor-move" />
          <div
            onClick={handleCloseDrag}
            className="text-[#ffa74f] p-2 absolute -top-2 cursor-pointer right-3 text-xl"
          >
            _
          </div>
          {children}
        </div>
      ) : (
        <div
          ref={dragRef}
          className="flex flex-col p-4 gap-4 bg-black/[.6] border-2 w-fit border-[#ffa74f] rounded-xl"
        >
          {children}
        </div>
      )}
    </Draggable>
  );
};

export default Draggable;
