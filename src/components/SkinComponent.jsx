import React from "react";

const SkinComponent = () => {
  return (
    <div className="text-center mx-[10%] mt-[3%] mb-[12%]">
      <div className="">
        <ImageWithBox
          imageSrc="/assets/Image.png"
          title="Six Hyaluronic Serums For Glowing Summer Skin Vivamus Placerat"
          details="Six Hyaluronic Serums For Glowing Summer Skin Vivamus Placerat Six Hyaluronic Serums For Glowing Summer Skin Vivamus Placerat Serums For Glowing Summer Skin Vivamus Placerat Serums For Glowing Summer Skin Vivamus Placerat...."
          owner="Sarfraz Jasim"
          on="22nd October,2023"
          category="Skin"
        />
      </div>
    </div>
  );
};

const ImageWithBox = ({ imageSrc, title, on, owner, category, details }) => {
  return (
    <div className="relative text-black ">
      <img src={imageSrc} alt={""} className="w-full h-auto" />
      <div className="absolute min-h-[200px] py-10 px-[15%] left-1/2 transform -translate-x-1/2 -bottom-1/4 w-4/5 h-1/2 z-10 bg-white border-2 border-black">
        <div className="flex flex-col gap-3 justify-center items-center">
          <h6 className="border-b border-black py-1 my-3 font-light text-base uppercase">
            {category}
          </h6>
          <h2 className="mb-2 font-bold font-Vidaloka text-2xl">{title}</h2>
          <p className="font-light text-base text-gray-800">{details}</p>
          <p className="flex gap-2 font-light text-base text-gray-400">
            By <span>{owner}</span>- <span> {on}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SkinComponent;
