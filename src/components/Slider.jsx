import React, { useState } from "react";

const Slider = () => {
  const slides = [
    {
      image: "/assets/slider/Image.svg",
      title: "Six Hyaluronic Serums For Glowing Summer Skin Vivamus Placerat",
      owner: "Sarfraz Jasim",
      on: "22nd October,2023",
    },
    {
      image: "/assets/slider/Image.svg",
      title: "Six Hyaluronic Serums For Glowing Summer Skin Vivamus Placerat-2",
      owner: "Another Author",
      on: "22nd October,2023",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };

  return (
    <div className="relative min-h-[600px] w-full">
      <img
        src={slides[currentSlide].image}
        alt="Slider"
        className="w-full h-full object-cover"
      />

      <div className="absolute top-[30%] left-[50%]">
        <div className="text-white border border-white border-1 p-10 h-[35%] w-[50%]">
          <h6 className="border-b border-white py-1 my-3 font-light text-base w-max uppercase">Skin</h6>
          <h2 className="mb-2 font-bold font-Vidaloka text-4xl">
            {slides[currentSlide].title}
          </h2>
          <p className="flex gap-2 font-light text-base">
            By <span>{slides[currentSlide].owner}</span>-{" "}
            <span> {slides[currentSlide].on}</span>
          </p>
          <button className="flex items-center mt-4 border-b border-white py-3">
            <p className="text-base font-medium"> Continue Reading</p>
            <img
              src="/assets/Right Arrow V2.svg"
              alt="Right Arrow"
              className="ml-3 w-6"
            />
          </button>
        </div>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 left-4 text-white">
        <button onClick={prevSlide}>
          <img
            src="/assets/Left Arrow.svg"
            alt="Left Arrow"
            className="w-8 h-8"
          />
        </button>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 right-4 text-white">
        <button onClick={nextSlide}>
          <img
            src="/assets/Right Arrow.svg"
            alt="Right Arrow"
            className="w-8 h-8"
          />
        </button>
      </div>
    </div>
  );
};

export default Slider;
