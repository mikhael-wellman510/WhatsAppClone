import React from "react";
import FotoProfile from "../../assets/Foto.jpg";
import ArrowDown from "../../assets/ArrowDown.svg";
const Chat = () => {
  return (
    <>
      <div className="flex items-center py-3 gap-5 cursor-pointer px-4 hover:bg-gray-100 group">
        <div className="flex items-center w-[4rem] h-[4rem]">
          <img
            className="w-[3.5rem] h-[3.5rem] rounded-full"
            src={FotoProfile}
          />
        </div>
        <div className="flex justify-between items-center w-full ">
          <div className="flex flex-col">
            <p className="text-lg">Mikhael Wellman</p>
            <p className="text-sm text-slate-500">Info , Lagi Dmna broo ??</p>
          </div>
          <div className="flex flex-col justify-between w-[5rem] h-[2.5rem]  ">
            <div className="flex justify-end pt-1">
              <p className="text-xs text-slate-500 ">12.00</p>
            </div>
            <div className="flex justify-end items-center pt-1  ">
              <img
                className="w-[1rem] flex justify-end hidden group-hover:flex "
                src={ArrowDown}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="ml-[5.7rem] mr-[1rem] border-b border-gray"></div>
    </>
  );
};

export default Chat;
