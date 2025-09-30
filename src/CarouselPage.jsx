import React from 'react';
import DoctorsCarousel from './DoctorsCarousel';

const CarouselPage = () => {
  return (
    <div className="min-h-screen">
      <DoctorsCarousel isEmbedded={true} />
    </div>
  );
};

export default CarouselPage;
