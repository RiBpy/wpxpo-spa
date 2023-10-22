const Category = () => {
  return (
    <div className="flex justify-center items-center min-h-[200px] my-[3%] mx-[10%]">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <ImageWithButton
          text="Skin"
        />
        <ImageWithButton
          text="Hair"
        />
        <ImageWithButton
          text="Makeup"
        />
        <ImageWithButton
          text="Tips"
        />
        <ImageWithButton
          text="Spa"
        />
      </div>
    </div>
  );
};

const ImageWithButton = ({ text }) => {
  const imageSrc = getImageSource(text); 
  return (
    <div className="relative group ">
      <img src={imageSrc} alt={text} className="w-full object-cover rounded-lg" />
      <div className="absolute inset-0 bg-black opacity-50 flex justify-center items-center group-hover:opacity-0 transition-opacity">
        <button className="bg-transparent border border-white text-white rounded-full px-4 py-2 uppercase">
          {text}
        </button>
      </div>
    </div>
  );
};

const getImageSource = (text) => {
  const imageMap = {
    'Skin': '/assets/latest/Image.svg',
    'Hair': '/assets/latest/Maskup1.svg',
    'Makeup': '/assets/latest/Maskup2.svg',
    'Tips': '/assets/latest/Maskup1.svg',
    'Spa': '/assets/latest/Image.svg',
  };
  return imageMap[text] || '/default-image.jpg'; 
};

export default Category;
