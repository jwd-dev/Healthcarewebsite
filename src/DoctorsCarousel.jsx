import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';

const DoctorsCarousel = ({ isEmbedded = true }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  const doctors = [

    {
      id: 2,
      name: 'Dr. James Chen',
      specialty: 'Pediatrics',
      experience: '12 years',
      education: 'Johns Hopkins University',
      bio: 'Dr. Chen specializes in pediatric care and has a gentle approach that makes children feel comfortable and safe.',
      initials: 'JC',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 3,
      name: 'Dr. Emily Rodriguez',
      specialty: 'Dermatology',
      experience: '10 years',
      education: 'Stanford Medical School',
      bio: 'Dr. Rodriguez is an expert in medical and cosmetic dermatology, helping patients achieve healthy, radiant skin.',
      initials: 'ER',
      color: 'from-green-500 to-emerald-500'
    }
  ];


  useEffect(() => {
    if (!isEmbedded) return;
    
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % Math.ceil(doctors.length / cardsPerView));
    }, 5000);

    return () => clearInterval(interval);
  }, [cardsPerView, doctors.length, isEmbedded]);

  const totalSlides = Math.ceil(doctors.length / cardsPerView);

  const bookAppointment = (doctorName) => {
    if (isEmbedded) {
      alert(`To book an appointment with ${doctorName}, please visit the main HealthBridge website.`);
    } else {
      alert(`Booking appointment with ${doctorName}. This would redirect to the appointment form.`);
    }
  };

  // Remove min-h-screen and use flex to scale to fit
  const containerClass = " flex flex-col items-center justify-center h-full w-full overflow-hidden"

  return (
    <div className={containerClass} style={{ minHeight: 0, height: "100%", width: "100%", background: "transparent", overflow: "hidden" }}>
      <div className="flex-1 flex flex-col" style={{ background: "transparent", overflow: "hidden" }}>

        {/* Carousel */}
        <div className="relative p-8 flex-1 flex flex-col" style={{ background: "transparent", overflow: "hidden" }}>
          <div className="flex-1 flex flex-col" style={{ background: "transparent", overflow: "hidden" }}>
            <div 
              className="flex gap-6 h-full"
              style={{ background: "transparent", overflow: "hidden" }}
            >
              {doctors.map((doctor) => (
                <div 
                  key={doctor.id} 
                  className="bg-white rounded-2xl shadow-lg border-2 border-gray-100 p-6 text-center hover:shadow-xl hover:scale-105 transition-all duration-300 hover:border-blue-200 flex flex-col items-center justify-center h-100px"
                  style={{ width: `${100 / doctors.length}%`, flexShrink: 0, height: "100%", overflow: "hidden" }}
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{doctor.name}</h3>
                  <p className="text-blue-600 font-semibold mb-3">{doctor.specialty}</p>
                  <p className="text-sm text-gray-500 mb-2">Experience: {doctor.experience}</p>
                  <p className="text-sm text-gray-500 mb-4 italic">{doctor.education}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default DoctorsCarousel;
