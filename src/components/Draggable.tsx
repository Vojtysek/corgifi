import { useEffect, useRef } from "react";

interface DraggableProps {
  children: React.ReactNode;
}

export const Draggable: React.FC<DraggableProps> = ({ children }) => {
  const relativeRef = useRef<HTMLDivElement>(null);
  const absoluteRef = useRef<HTMLDivElement>(null);
  const isClicked = useRef<boolean>(false);
  const coords = useRef<{ x0: number; y0: number; x1: number; y1: number }>({
    x0: 0,
    y0: 0,
    x1: 0,
    y1: 0,
  });

  useEffect(() => {
    const box = relativeRef.current;
    const container = absoluteRef.current;

    if (!box || !container) return;

    const handleMouseDown = (e: MouseEvent) => {
      isClicked.current = true;
      coords.current.x0 = e.clientX;
      coords.current.y0 = e.clientY;
    };

    const handleMouseUp = () => {
      isClicked.current = false;
      coords.current.x1 = box.offsetLeft;
      coords.current.y1 = box.offsetTop;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isClicked.current) return;

      const nextX = e.clientX - coords.current.x0 + coords.current.x1;
      const nextY = e.clientY - coords.current.y0 + coords.current.y1;

      box.style.top = `${nextY}px`;
      box.style.left = `${nextX}px`;
    };

    box.addEventListener("mousedown", handleMouseDown);
    box.addEventListener("mouseup", handleMouseUp);
    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseUp);

    return () => {
      box.removeEventListener("mousedown", handleMouseDown);
      box.removeEventListener("mouseup", handleMouseUp);
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseUp);
    };
  }, []);

  return (
    <div ref={absoluteRef} className="relative w-screen h-screen">
      <div ref={relativeRef} className="absolute cursor-pointer border-t-[20px] rounded-t-xl">
        {children}
      </div>
    </div>
  );
};
