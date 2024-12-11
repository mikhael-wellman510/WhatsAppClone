import React from "react";
import AddContact from "../../assets/NewChat.svg";
import Menu from "../../assets/Menu.svg";
import Search from "../../assets/Search.svg";
import Chat from "./Chat";

const ListChat = ({ onChangeComponent }) => {
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      <div className="flex h-[3rem] justify-between items-center pt-4 pl-4 pr-4">
        <div className="">
          <p className="text-2xl font-bold">Chat</p>
        </div>
        <div className="flex gap-4 justify-between pr-5">
          <div>
            <img
              onClick={onChangeComponent}
              className="w-[1.8rem] cursor-pointer bg-red-100"
              src={AddContact}
            />
          </div>

          <img className="w-[1.8rem] cursor-pointer" src={Menu} />
        </div>
      </div>
      {/* Body */}
      <div className="flex flex-col gap-3 h-[92%] pt-6">
        <div className=" pl-4 pr-4">
          <div className="w-full h-[2.5rem] bg-primary-gray rounded-lg flex items-center px-4 gap-4">
            <div className="w-[2rem] h-[2rem] flex items-center justify-center">
              <img className="w-[1.3rem]" src={Search} />
            </div>
            <div>
              <input
                className="w-[24rem] focus:outline-none bg-primary-gray"
                type="text"
                placeholder="Cari"
              />
            </div>
          </div>
        </div>

        {/* List Chat */}
        <div className="overflow-y-auto h-[35.5rem] ">
          {list.map((val, idx) => (
            <Chat key={idx} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ListChat;
