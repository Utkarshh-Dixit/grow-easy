import React from "react";

interface BannerProps {
  title: string;
  description: string;
  cta: string;
  image: string;
  background: string;
  onEdit: () => void;
}

const BannerImageComp: React.FC<BannerProps> = ({
  title,
  description,
  cta,
  image,
  background,
  onEdit,
}) => {
  return (
    <div className="relative max-w-sm rounded overflow-hidden shadow-lg m-4 bg-white h-64 xl:min-w-64 flex flex-col">
      {image ? (
        <img className="w-full h-full object-cover" src={image} alt={title} />
      ) : (
        <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-600 text-lg font-bold">
          No Image
        </div>
      )}
      <div className="absolute inset-0 flex flex-col justify-between p-4 bg-black bg-opacity-50 text-white">
        <div className="flex-grow">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-200 text-base">{description}</p>
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-200 absolute bottom-4 left-4">
          {cta}
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-colors duration-200 absolute top-4 right-4"
          onClick={onEdit}
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default BannerImageComp;
