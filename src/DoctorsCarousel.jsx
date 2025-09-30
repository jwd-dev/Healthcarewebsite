import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';

const DoctorsCarousel = ({ isEmbedded = true }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  const doctors = [
    {
      id: 1,
      name: 'Dr. Sarah Mitchell',
      specialty: 'Cardiology',
      experience: '15 years',
      education: 'Harvard Medical School',
      bio: 'Dr. Mitchell is a board-certified cardiologist with extensive experience in preventive cardiology and heart disease management.',
      initials: 'SM',
      color: 'from-red-500 to-pink-500'
    },
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
    },
    {
      id: 4,
      name: 'Dr. Michael Thompson',
      specialty: 'Orthopedics',
      experience: '18 years',
      education: 'Yale School of Medicine',
      bio: 'Dr. Thompson specializes in sports medicine and joint replacement surgery with a focus on minimally invasive techniques.',
      initials: 'MT',
      color: 'from-purple-500 to-violet-500'
    },
    {
      id: 5,
      name: 'Dr. Lisa Patel',
      specialty: 'Internal Medicine',
      experience: '14 years',
      education: 'Columbia Medical School',
      bio: 'Dr. Patel provides comprehensive primary care with a holistic approach to wellness and disease prevention.',
      initials: 'LP',
      color: 'from-orange-500 to-amber-500'
    },
    {
      id: 6,
      name: 'Dr. Robert Kim',
      specialty: 'Neurology',
      experience: '16 years',
      education: 'Duke University',
      bio: 'Dr. Kim is a leading neurologist specializing in headache disorders, epilepsy, and neurodegenerative diseases.',
      initials: 'RK',
      color: 'from-indigo-500 to-blue-500'
    }
  ];

  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth >= 1024) setCardsPerView(3);
      else if (window.innerWidth >= 768) setCardsPerView(2);
      else setCardsPerView(1);
    };

    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);
    return () => window.removeEventListener('resize', updateCardsPerView);
  }, []);

  useEffect(() => {
    if (!isEmbedded) return;
    
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % Math.ceil(doctors.length / cardsPerView));
    }, 5000);

    return () => clearInterval(interval);
  }, [cardsPerView, doctors.length, isEmbedded]);

  const totalSlides = Math.ceil(doctors.length / cardsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const bookAppointment = (doctorName) => {
    if (isEmbedded) {
      alert(`To book an appointment with ${doctorName}, please visit the main HealthBridge website.`);
    } else {
      alert(`Booking appointment with ${doctorName}. This would redirect to the appointment form.`);
    }
  };

  // Remove min-h-screen and use flex to scale to fit
  const containerClass = "py-16 bg-gray-50 flex flex-col items-center justify-center h-full w-full"

  return (
    <div className={containerClass} style={{ minHeight: 0, height: "100%", width: "100%" }}>
      <div className="w-full max-w-3xl rounded-3xl shadow-2xl overflow-hidden flex-1 flex flex-col">

        {/* Carousel */}
        <div className="relative p-8 flex-1 flex flex-col">
          <div className="overflow-hidden flex-1 flex flex-col">
            <div 
              className="flex transition-transform duration-500 ease-in-out gap-6 h-full"
              style={{
                transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
                width: `${(doctors.length * 100) / cardsPerView}%`,
                height: "100%",
              }}
            >
              {doctors.map((doctor) => (
                <div 
                  key={doctor.id} 
                  className="bg-white rounded-2xl shadow-lg border-2 border-gray-100 p-6 text-center hover:shadow-xl hover:scale-105 transition-all duration-300 hover:border-blue-200 flex flex-col items-center justify-center h-full"
                  style={{ width: `${100 / doctors.length}%`, flexShrink: 0, height: "100%" }}
                >
                  <div className={`w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br ${doctor.color} flex items-center justify-center text-white text-2xl font-bold shadow-lg`}>
                    {doctor.initials}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{doctor.name}</h3>
                  <p className="text-blue-600 font-semibold mb-3">{doctor.specialty}</p>
                  <p className="text-sm text-gray-500 mb-2">Experience: {doctor.experience}</p>
                  <p className="text-sm text-gray-500 mb-4 italic">{doctor.education}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <ChevronLeft className="w-6 h-6 text-blue-600 group-hover:text-blue-700" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <ChevronRight className="w-6 h-6 text-blue-600 group-hover:text-blue-700" />
          </button>
        </div>

      </div>
    </div>
  );
};

export default DoctorsCarousel;
