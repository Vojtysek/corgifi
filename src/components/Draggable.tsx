"use client";

import { useEffect, useRef } from "react";

interface DraggableProps {
  children: React.ReactNode;
}

export const Draggable: React.FC<DraggableProps> = ({ children }) => {
  const containerref = useRef<HTMLDivElement>(null);
  const boxref = useRef<HTMLDivElement>(null);

  const isclicked = useRef<boolean>(false);

  const coords = useRef<{
    startx: number;
    starty: number;
    lastx: number;
    lasty: number;
  }>({
    startx: 0,
    starty: 0,
    lastx: 0,
    lasty: 0,
  });

  useEffect(() => {
    if (!boxref.current || !containerref.current) return;

    const box = boxref.current;
    const container = containerref.current;

    const onmousedown = (e: MouseEvent) => {
      isclicked.current = true;
      coords.current.startx = e.clientX;
      coords.current.starty = e.clientY;
    };

    const onmouseup = (e: MouseEvent) => {
      isclicked.current = false;
      coords.current.lastx = box.offsetLeft;
      coords.current.lasty = box.offsetTop;
    };

    const onmousemove = (e: MouseEvent) => {
      if (!isclicked.current) return;

      const nextx = e.clientX - coords.current.startx + coords.current.lastx;
      const nexty = e.clientY - coords.current.starty + coords.current.lasty;

      box.style.top = `${nexty}px`;
      box.style.left = `${nextx}px`;
    };

    box.addEventListener("mousedown", onmousedown);
    box.addEventListener("mouseup", onmouseup);
    container.addEventListener("mousemove", onmousemove);
    container.addEventListener("mouseleave", onmouseup);

    const cleanup = () => {
      box.removeEventListener("mousedown", onmousedown);
      box.removeEventListener("mouseup", onmouseup);
      container.removeEventListener("mousemove", onmousemove);
      container.removeEventListener("mouseleave", onmouseup);
    };

    return cleanup;
  }, []);

  return (
    <div ref={containerref} className="relative w-screen h-screen">
      <div ref={boxref} className="absolute cursor-pointer border-t-[20px] rounded-t-xl">
        {children}
      </div>
    </div>
  );
};
