const Posts = ({ Title = "", GridValue = 3, noTitle = false }) => {
  const postsData = [
    {
      imageSrc: "/assets/latest/Image.svg",
      title:
        GridValue === 3
          ? 'Vivamus placerat Luctus neques nec Faucibus helllllloooo hello'
          : 'Vivamus placerat Luctus neques nec Faucibus Vivamus placerat Luctus neques nec Faucibus neques nec Faucibus',
      owner: "Sarfraz Jasim",
      on: "22nd October, 2023",
      category: "Hair",
    },
    {
      imageSrc: "/assets/latest/Maskup1.svg",
      title:
        GridValue === 3
          ? 'Vivamus placerat Luctus neques nec Faucibus'
          : 'Vivamus placerat Luctus neques nec Faucibus Vivamus placerat Luctus neques nec Faucibus neques nec Faucibus',
      on: "22nd October, 2023",
      category: "Makeup",
    },
    {
      imageSrc: "/assets/latest/Maskup2.svg",
      title:
        GridValue === 3
          ? 'Vivamus placerat Luctus neques nec Faucibus'
          : 'Vivamus placerat Luctus neques nec Faucibus Vivamus placerat Luctus neques nec Faucibus neques nec Faucibus',
      owner: "Sarfraz Jasim",
      on: "22nd October, 2023",
      category: "Tips",
    },
  ];

  const displayedData = postsData.slice(0, GridValue);

  return (
    <div className="text-center mx-[10%] mt-[3%] mb-[8%]">
      {noTitle ? (
        ""
      ) : (
        <h2 className="text-2xl font-bold relative">
          <span className="inline-block bg-black h-0.5 w-5/12"></span>
          <span className="inline-block w-2/12">{Title}</span>
          <span className="inline-block bg-black h-0.5 w-5/12"></span>
        </h2>
      )}

      <div className={`grid grid-cols-1 md:grid-cols-${GridValue} gap-4 mt-6`}>
        {displayedData.map((item, index) => (
          <ImageWithBox
            key={index}
            imageSrc={item.imageSrc}
            title={item.title}
            owner={item.owner}
            on={item.on}
            category={item.category}
          />
        ))}
      </div>
    </div>
  );
};

const ImageWithBox = ({ imageSrc, title, on, owner, category }) => {
  return (
    <div className="relative text-black ">
      <img src={imageSrc} alt={""} className="w-full h-auto" />
      <div className="absolute min-h-[200px] px-5 py-3 left-1/2 transform -translate-x-1/2 -bottom-1/4 w-4/5 h-1/2 z-10 bg-white border-2 border-black">
        <div className="flex flex-col justify-center items-center">
          <h6 className="border-b border-black py-1 my-3 font-light text-base uppercase">
            {category}
          </h6>
          <h2 className="mb-2 font-bold font-Vidaloka text-2xl">{title}</h2>
          <p className="flex gap-2 font-light text-base text-gray-400">
            By <span>{owner}</span>- <span> {on}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Posts;
