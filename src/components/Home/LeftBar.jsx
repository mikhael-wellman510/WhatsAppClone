import React from "react";
import ProfileAndSetting from "./ProfileAndSetting";
import ListChat from "./ListChat";

const LeftBar = () => {
  const handleChangeComponent = (val) => {
    console.log("Successss");
  };

  return (
    <>
      <div className="flex w-[52rem] h-full bg-white">
        <div className="flex flex-col justify-between w-[5rem] bg-gray-100">
          <ProfileAndSetting />
        </div>
        <div className="w-full ">
          <ListChat onChangeComponent={handleChangeComponent} />
        </div>
      </div>
    </>
  );
};

export default LeftBar;
