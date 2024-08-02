"use client";

import React, { useState, useEffect } from "react";
import BannerImageComp from "../components/BannerImageComp";
import EditBannerTemplateBs from "../components/EditBannerTemplateBs";

interface Banner {
  id: number;
  title: string;
  description: string;
  cta: string;
  image: string;
  background: string;
}

const Home: React.FC = () => {
  const [bannerList, setBannerList] = useState<Banner[]>([]);
  const [currentBanner, setCurrentBanner] = useState<Banner | null>(null);

  useEffect(() => {
    fetch("/banners.json")
      .then((response) => response.json())
      .then((data) => setBannerList(data));
  }, []);

  const handleEdit = (banner: Banner) => {
    console.log("Edit", banner);
    setCurrentBanner(banner);
  };

  const handleSave = (updatedBanner: Banner) => {
    setBannerList(
      bannerList.map((b) => (b.id === updatedBanner.id ? updatedBanner : b))
    );
    setCurrentBanner(null);
  };

  return (
    <div className="container mx-auto p-4 bg-white">
      <div className="flex flex-wrap gap-4 justify-center">
        {bannerList.map((banner) => (
          <BannerImageComp
            key={banner.id}
            title={banner.title}
            description={banner.description}
            cta={banner.cta}
            image={banner.image}
            background={banner.background}
            onEdit={() => handleEdit(banner)}
          />
        ))}
      </div>
      {currentBanner && (
        <EditBannerTemplateBs
          banner={currentBanner}
          onSave={handleSave}
          onClose={() => setCurrentBanner(null)}
        />
      )}
    </div>
  );
};

export default Home;
