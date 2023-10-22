import React from "react";

const Navbar = () => {
  return (
    <div className="px-[10%] py-[2%]">
      <div className="flex justify-between align-middle">
        <div className="text-sm text-gray-500">Welcome there!</div>
        <div className="flex gap-3">
          <div className="flex gap-2">
            <a href="#">
              <img
                className="w-6 h-6"
                src="/assets/Facebook.svg"
                alt="Facebook"
              />
            </a>
            <a href="#">
              <img
                className="w-6 h-6"
                src="/assets/instagram.svg"
                alt="Instagram"
              />
            </a>
            <a href="#">
              <img
                className="w-6 h-6"
                src="/assets/Threads.svg"
                alt="Threads"
              />
            </a>
            <a href="#">
              <img
                className="w-6 h-6"
                src="/assets/Twitter.svg"
                alt="Twitter"
              />
            </a>
            <a href="#">
              <img
                className="w-6 h-6"
                src="/assets/Pinterest.svg"
                alt="Pinterest"
              />
            </a>
            <a href="#">
              <img
                className="w-6 h-6"
                src="/assets/Linkedin.svg"
                alt="LinkedIn"
              />
            </a>
          </div>
          <div className="border border-l-1 border-gray-300" />
          <div className="bg-black rounded-full px-2 ">
            <button className="text-white text-sm">Subscribe</button>
          </div>
        </div>
      </div>
      <hr className="my-5 border-gray-300" />
      <div className="flex justify-between">
        <div className="flex gap-5 items-center">
          <img src="/assets/Blushlly.svg" alt="Brand" className="w-25 h-16" />
          <div>
            <ul className="flex space-x-4">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Category</a>
              </li>
              <li>
                <a href="#">Makeup</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex align-middle justify-end">
          <input type="text" value="Search" className="w-[25%]" />
          <button>
            <img
              src="/assets/search.svg"
              alt="Search"
              className="w-6 h-6 -left-2"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
