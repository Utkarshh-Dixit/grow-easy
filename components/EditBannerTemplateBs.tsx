import React, { useState } from "react";

interface Banner {
  id: number;
  title: string;
  description: string;
  cta: string;
  image: string;
  background: string;
}

interface EditBannerTemplateBsProps {
  banner: Banner;
  onSave: (banner: Banner) => void;
  onClose: () => void;
}

const EditBannerTemplateBs: React.FC<EditBannerTemplateBsProps> = ({
  banner,
  onSave,
  onClose,
}) => {
  const [editedBanner, setEditedBanner] = useState(banner);
  const [imagePreview, setImagePreview] = useState(banner.image);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setEditedBanner((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
        setEditedBanner((prev) => ({
          ...prev,
          image: reader.result as string,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    onSave(editedBanner);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white p-4 shadow-lg z-50 transition-transform duration-300 transform translate-y-full animate-slide-in">
      <input
        name="title"
        value={editedBanner.title}
        onChange={handleChange}
        placeholder="Title"
        className="w-full p-2 border border-gray-300 bg-slate-900 rounded mb-2"
      />
      <textarea
        name="description"
        value={editedBanner.description}
        onChange={handleChange}
        placeholder="Description"
        className="w-full p-2 border border-gray-300 bg-slate-900 rounded mb-2"
      />
      <input
        name="cta"
        value={editedBanner.cta}
        onChange={handleChange}
        placeholder="CTA"
        className="w-full p-2 border border-gray-300 rounded bg-slate-900 mb-2"
      />
      <input
        name="image"
        value={editedBanner.image}
        onChange={handleChange}
        placeholder="Image URL"
        className="w-full p-2 border border-gray-300 rounded bg-slate-900 mb-2"
      />
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="w-full p-2 border border-gray-300 rounded bg-slate-900 mb-2"
      />
      {imagePreview && (
        <img
          src={imagePreview}
          alt="Image Preview"
          className="w-full h-48 object-cover mb-2"
        />
      )}
      <input
        name="background"
        value={editedBanner.background}
        onChange={handleChange}
        placeholder="Background Color"
        className="w-full p-2 border border-gray-300 bg-slate-900 rounded mb-2"
      />
      <button
        onClick={handleSave}
        className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 transition-colors duration-200"
      >
        Save
      </button>
      <button
        onClick={onClose}
        className="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-2 transition-colors duration-200"
      >
        Close
      </button>
    </div>
  );
};

export default EditBannerTemplateBs;
