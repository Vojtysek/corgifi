import React from "react";
import { FaMusic } from "react-icons/fa";
import { Drag } from "../Manager/Draggable";

const Mixer: React.FC = () => {
  return (
    <Drag name="Mixer" closable={true}>
      <main className="flex flex-col items-center justify-center w-[311px] h-[381px] flex-1 border overflow-y-scroll rounded-xl gap-3 p-1.5">
        <div className="flex flex-row items-center justify-center w-11/12 h-1/6 flex-1 border-2 border-black rounded-xl gap-3">
          <div className="flex flex-col items-center justify-center w-3/5 h-full flex-1 border-2 border-black rounded-xl"></div>
          <div className="flex flex-col items-center justify-center w-auto h-full flex-1 border-2 border-black rounded-xl gap-3">
            <div className="flex flex-col items-center justify-center w-full h-full flex-1 border-2 border-black rounded-xl">
              <h3>corgifi.co</h3>
            </div>
            <div className="flex flex-col items-center justify-center w-full h-full flex-1 border-2 border-black rounded-xl">
              <FaMusic className="w-5" />
            </div>
          </div>
        </div>
        <div className="w-max mb-[-130px]">
          <iframe
            src="https://open.spotify.com/embed/playlist/0iepisLXvVe5RxB3owHjlj?utm_source=generator"
            allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture;"
            className="border-0; rounded-xl p-0 m-0"
            style={{ height: "300px" }}
          />
        </div>
        <div className="flex flex-col items-center justify-center w-11/12 h-3/6 flex-1 border-2 border-black rounded-xl z-[1]">
          <h3>SOUND FROM YOUR ASS</h3>
          <input
            type="range"
            name="volume"
            min="0"
            max="100"
            value="0"
            className="w-[180px]"
          />
        </div>
      </main>
    </Drag>
  );
};

export default Mixer;
