import React from "react";
import msg from "../../assets/Message.svg";
import status from "../../assets/Status-Icon.svg";
import group from "../../assets/Group.svg";
import Setting from "../../assets/Settings.svg";
import Foto from "../../assets/Foto.jpg";
const ProfileAndSetting = () => {
  return (
    <>
      <div className="flex flex-col items-center bg-primary-gray pt-6 gap-6">
        <img className="w-[1.5rem]" src={msg} />
        <img className="w-[1.8rem]" src={status} />
        <img className="w-[1.8rem]" src={group} />
      </div>
      <div className="flex flex-col items-center  pb-4 gap-5">
        <img className="w-[1.8rem]" src={Setting} />
        <div className="rounded-full">
          <img className="rounded-full w-[2.3rem] h-[2.3rem]" src={Foto} />
        </div>
      </div>
    </>
  );
};

export default ProfileAndSetting;
