import React from "react";
import { FaMusic } from "react-icons/fa";
import { Drag } from "../Manager/Draggable";

const Mixer: React.FC = () => {
  return (
    <Drag name="Mixer" closable={true}>
      <main className="flex flex-col items-center justify-center w-[311px] h-[381px] flex-1 overflow-y-scroll overflow-x-hidden pr-5 rounded-xl gap-3 p-1.5">
        <div className="flex flex-row items-center justify-center w-11/12 h-1/6 flex-1 rounded-xl gap-3">
          <div className="flex flex-col items-center justify-center w-3/5 h-full flex-1 rounded-xl"></div>
          <div className="flex flex-col items-center justify-center w-auto h-full flex-1 rounded-xl gap-3">
            <div className="flex flex-col items-center justify-center w-full h-full flex-1 rounded-xl">
              <h3>corgifi.co</h3>
            </div>
            <div className="flex flex-col items-center justify-center w-full h-full flex-1  rounded-xl">
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
        <div className="flex flex-col items-center justify-center w-11/12 h-3/6 flex-1 rounded-xl z-[1]">
          <input type="range" id="volume" name="volume" min="0" max="11" />
          <label htmlFor="volume">Volume</label>
        </div>
      </main>
    </Drag>
  );
};

export default Mixer;
