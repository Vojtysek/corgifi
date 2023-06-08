"use client";

import Draggable from "react-draggable";

interface DragProps {
  children: React.ReactNode;
}

export const Drag: React.FC<DragProps> = ({ children }) => {
  return (
    <Draggable>
      <div className="w-max h-max">{children}</div>
    </Draggable>
  );
};

export default Draggable;
