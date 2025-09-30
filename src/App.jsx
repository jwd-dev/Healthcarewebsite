import { useState } from 'react';
import { Calendar, Clock, MapPin, Phone, Mail, ChevronDown, ChevronUp, Search, Heart, Award, Users, Shield } from 'lucide-react';

export default function HealthBridgeWebsite() {
  const [currentPage, setCurrentPage] = useState('home');
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [selectedSpecialty, setSelectedSpecialty] = useState('all');
  const [appointmentForm, setAppointmentForm] = useState({
    name: '',
    email: '',
    phone: '',
    doctor: '',
    date: '',
    time: '',
    reason: ''
  });

  const doctors = [
    {
      id: 1,
      name: 'Dr. Sarah Mitchell',
      specialty: 'Cardiology',
      image: '/images/dr-sarah-mitchell.jpg',
      experience: '15 years',
      education: 'Harvard Medical School',
      bio: 'Dr. Mitchell is a board-certified cardiologist with extensive experience in preventive cardiology and heart disease management.'
    },
    {
      id: 2,
      name: 'Dr. James Chen',
      specialty: 'Pediatrics',
      image: '/images/dr-james-chen.jpg',
      experience: '12 years',
      education: 'Johns Hopkins University',
      bio: 'Dr. Chen specializes in pediatric care and has a gentle approach that makes children feel comfortable and safe.'
    },
    {
      id: 3,
      name: 'Dr. Emily Rodriguez',
      specialty: 'Dermatology',
      image: '/images/dr-emily-rodriguez.jpg',
      experience: '10 years',
      education: 'Stanford Medical School',
      bio: 'Dr. Rodriguez is an expert in medical and cosmetic dermatology, helping patients achieve healthy, radiant skin.'
    },
    {
      id: 4,
      name: 'Dr. Michael Thompson',
      specialty: 'Orthopedics',
      image: '/images/dr-michael-thompson.jpg',
      experience: '18 years',
      education: 'Yale School of Medicine',
      bio: 'Dr. Thompson specializes in sports medicine and joint replacement surgery with a focus on minimally invasive techniques.'
    },
    {
      id: 5,
      name: 'Dr. Lisa Patel',
      specialty: 'Internal Medicine',
      image: '/images/dr-lisa-patel.jpg',
      experience: '14 years',
      education: 'Columbia Medical School',
      bio: 'Dr. Patel provides comprehensive primary care with a holistic approach to wellness and disease prevention.'
    },
    {
      id: 6,
      name: 'Dr. Robert Kim',
      specialty: 'Neurology',
      image: '/images/dr-robert-kim.jpg',
      experience: '16 years',
      education: 'Duke University',
      bio: 'Dr. Kim is a leading neurologist specializing in headache disorders, epilepsy, and neurodegenerative diseases.'
    }
  ];

  const faqs = [
    {
      question: 'What insurance plans do you accept?',
      answer: 'HealthBridge Medical Center accepts most major insurance plans including Blue Cross Blue Shield, Aetna, Cigna, UnitedHealthcare, Medicare, and Medicaid. We recommend calling our billing department to verify your specific plan coverage before your appointment.'
    },
    {
      question: 'How do I schedule an appointment?',
      answer: 'Scheduling an appointment is easy! You can use our online appointment scheduling system, call our main office at (555) 123-4567, or visit us in person. We offer same-day appointments for urgent matters and typically have availability within 48 hours for routine visits.'
    },
    {
      question: 'What should I bring to my first appointment?',
      answer: 'Please bring a valid photo ID, your insurance card, a list of current medications, any relevant medical records from previous providers, and a completed patient information form (available on our website). Arrive 15 minutes early to complete any additional paperwork.'
    },
    {
      question: 'Do you offer telemedicine appointments?',
      answer: 'Yes! HealthBridge Medical Center offers secure telemedicine appointments for many conditions and follow-up visits. Virtual appointments are available through our patient portal and can be scheduled just like in-person visits. This convenient option allows you to receive quality care from the comfort of your home.'
    },
    {
      question: 'What are your office hours?',
      answer: 'Our main facility is open Monday through Friday from 7:00 AM to 7:00 PM, and Saturdays from 8:00 AM to 2:00 PM. We are closed on Sundays and major holidays. Emergency services are available 24/7 through our affiliated hospital partners.'
    },
    {
      question: 'How do I get my test results?',
      answer: 'Test results are typically available within 3-5 business days and can be accessed through our secure patient portal. You will receive an email notification when results are ready. For urgent or abnormal results, a member of our medical team will contact you directly by phone.'
    },
    {
      question: 'What is your cancellation policy?',
      answer: 'We understand that schedules change. Please provide at least 24 hours notice if you need to cancel or reschedule your appointment. This allows us to offer the time slot to other patients who may need care. Repeated no-shows or late cancellations may result in a fee.'
    },
    {
      question: 'Do you have parking available?',
      answer: 'Yes, we offer free parking for all patients and visitors in our covered parking garage located directly adjacent to the medical center. Handicap-accessible parking spaces are available near all building entrances. Valet service is also available Monday through Friday.'
    }
  ];

  const specialties = ['all', 'Cardiology', 'Pediatrics', 'Dermatology', 'Orthopedics', 'Internal Medicine', 'Neurology'];

  const filteredDoctors = selectedSpecialty === 'all' 
    ? doctors 
    : doctors.filter(doc => doc.specialty === selectedSpecialty);

  const handleInputChange = (e) => {
    setAppointmentForm({
      ...appointmentForm,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for scheduling your appointment! A member of our team will contact you shortly to confirm your appointment details.');
    setAppointmentForm({
      name: '',
      email: '',
      phone: '',
      doctor: '',
      date: '',
      time: '',
      reason: ''
    });
  };

  const Navigation = () => (
    <nav className="bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3">
            <Heart className="w-10 h-10" fill="white" />
            <div>
              <h1 className="text-2xl font-bold">HealthBridge</h1>
              <p className="text-xs text-blue-100">Medical Center</p>
            </div>
          </div>
          <div className="flex space-x-1">
            {[
              { id: 'home', label: 'Home' },
              { id: 'doctors', label: 'Our Doctors' },
              { id: 'faq', label: 'FAQ' },
              { id: 'appointment', label: 'Book Appointment' }
            ].map(page => (
              <button
                key={page.id}
                onClick={() => setCurrentPage(page.id)}
                className={`px-4 py-2 rounded-lg transition-all ${
                  currentPage === page.id 
                    ? 'bg-white text-blue-600 font-semibold' 
                    : 'text-white hover:bg-blue-500'
                }`}
              >
                {page.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );

  const HomePage = () => (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 to-blue-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Welcome to HealthBridge Medical Center
            </h2>
            <p className="text-xl text-gray-700 mb-4 max-w-3xl mx-auto">
              Your Partner in Comprehensive Healthcare Excellence
            </p>
            <p className="text-lg text-gray-600 mb-8 max-w-4xl mx-auto">
              At HealthBridge Medical Center, we believe that exceptional healthcare is built on trust, compassion, and cutting-edge medical expertise. For over 25 years, we have been dedicated to serving our community with personalized care that puts you and your family first. Our state-of-the-art facility combines the latest medical technology with a warm, welcoming environment where healing begins the moment you walk through our doors.
            </p>
            <button 
              onClick={() => setCurrentPage('appointment')}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl"
            >
              Schedule Your Appointment Today
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose HealthBridge Medical Center?
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Award className="w-12 h-12 text-blue-600" />,
                title: 'Award-Winning Care',
                description: 'Recognized nationally for excellence in patient safety, quality outcomes, and innovative treatment approaches. Our commitment to excellence has earned us numerous accolades and the trust of thousands of patients.'
              },
              {
                icon: <Users className="w-12 h-12 text-blue-600" />,
                title: 'Expert Medical Team',
                description: 'Our physicians are leaders in their fields, many holding academic appointments at prestigious medical schools. With over 150 years of combined experience, our team brings unparalleled expertise to your care.'
              },
              {
                icon: <Shield className="w-12 h-12 text-blue-600" />,
                title: 'Comprehensive Services',
                description: 'From preventive care to complex procedures, we offer a full spectrum of medical services under one roof. Our integrated approach ensures seamless coordination of your healthcare needs at every stage of life.'
              },
              {
                icon: <Heart className="w-12 h-12 text-blue-600" />,
                title: 'Patient-Centered Approach',
                description: 'We treat you as a whole person, not just a diagnosis. Our personalized care plans are developed in partnership with you, respecting your values, preferences, and individual health goals.'
              }
            ].map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-all">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Our Commitment to Your Health and Wellness
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                At HealthBridge Medical Center, we understand that your health is your most valuable asset. That's why we've created a healthcare experience that goes beyond treating illness to promoting lifelong wellness. Our philosophy centers on preventive care, early detection, and personalized treatment plans that address your unique health needs and goals.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Our modern facility features advanced diagnostic equipment, comfortable private examination rooms, and a calming atmosphere designed to reduce stress and anxiety. We've thoughtfully designed every aspect of your visit to ensure you feel comfortable, heard, and cared for from the moment you arrive until long after you leave.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Whether you're coming in for a routine check-up, managing a chronic condition, or seeking specialized care, our team is dedicated to providing you with the highest quality medical services delivered with compassion and respect. We take the time to listen to your concerns, answer your questions thoroughly, and partner with you in making informed decisions about your health.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h4 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Address</p>
                    <p className="text-gray-600">123 Wellness Drive, Suite 100<br/>Medical Plaza<br/>San Francisco, CA 94102</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <p className="text-gray-600">(555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-600">info@healthbridge.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Hours</p>
                    <p className="text-gray-600">Mon-Fri: 7:00 AM - 7:00 PM<br/>Sat: 8:00 AM - 2:00 PM<br/>Sun: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const FAQPage = () => (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 mb-4">
            Your Questions Answered with Care and Clarity
          </p>
          <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
            We understand that navigating healthcare can sometimes feel overwhelming. That's why we've compiled answers to the most common questions our patients ask. If you don't find what you're looking for here, please don't hesitate to reach out to our friendly staff who are always ready to help. Your peace of mind is important to us, and we're committed to making your healthcare experience as smooth and stress-free as possible.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                {expandedFaq === index ? (
                  <ChevronUp className="w-6 h-6 text-blue-600" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-blue-600" />
                )}
              </button>
              {expandedFaq === index && (
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Still Have Questions?</h3>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Our dedicated patient support team is here to help you with any additional questions or concerns you may have. We believe that informed patients are empowered patients, and we're committed to providing you with all the information you need to feel confident in your healthcare decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:5551234567" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all">
              Call Us: (555) 123-4567
            </a>
            <a href="mailto:info@healthbridge.com" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-all">
              Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  const DoctorsPage = () => (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Meet Our Exceptional Medical Team
          </h2>
          <p className="text-xl text-gray-600 mb-4">
            World-Class Physicians Dedicated to Your Health
          </p>
          <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
            Our physicians are more than just highly trained medical professionals—they are compassionate caregivers who are deeply committed to your well-being. Each member of our team brings decades of experience, specialized training from the nation's top medical institutions, and a genuine passion for helping patients achieve optimal health. They stay at the forefront of medical advances through continuous education and research, ensuring you receive the most current, evidence-based care available.
          </p>
  
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDoctors.map(doctor => (
            <div key={doctor.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-8 text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <img 
                    src={doctor.image} 
                    alt={doctor.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{doctor.name}</h3>
                <p className="text-blue-100 font-semibold">{doctor.specialty}</p>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <p className="text-sm text-gray-500 font-semibold mb-1">Experience</p>
                  <p className="text-gray-700">{doctor.experience}</p>
                </div>
                <div className="mb-4">
                  <p className="text-sm text-gray-500 font-semibold mb-1">Education</p>
                  <p className="text-gray-700">{doctor.education}</p>
                </div>
                <div className="mb-6">
                  <p className="text-sm text-gray-500 font-semibold mb-1">About</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{doctor.bio}</p>
                </div>
                <button
                  onClick={() => {
                    setAppointmentForm({ ...appointmentForm, doctor: doctor.name });
                    setCurrentPage('appointment');
                  }}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all"
                >
                  Book Appointment
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
            Excellence in Every Specialty
          </h3>
          <p className="text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
            At HealthBridge Medical Center, we've assembled a team of physicians who represent the pinnacle of medical expertise in their respective fields. Our doctors are not only board-certified but also maintain active involvement in medical research, teaching, and professional organizations. This commitment to advancing medical knowledge translates directly into better outcomes for our patients. When you choose HealthBridge, you're choosing a team that will treat you with the same care and attention they would want for their own families.
          </p>
        </div>
      </div>
    </div>
  );

  const AppointmentPage = () => (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Schedule Your Appointment
          </h2>
          <p className="text-xl text-gray-600 mb-4">
            Taking the First Step Toward Better Health
          </p>
          <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Scheduling your appointment at HealthBridge Medical Center is quick, easy, and convenient. Simply fill out the form below, and our scheduling team will confirm your appointment within 24 hours. We offer flexible scheduling options to accommodate your busy lifestyle, including early morning, evening, and Saturday appointments. Your health and time are valuable to us, and we're committed to making your visit as convenient as possible.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={appointmentForm.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={appointmentForm.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="john.doe@email.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={appointmentForm.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="(555) 123-4567"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Preferred Doctor
                </label>
                <select
                  name="doctor"
                  value={appointmentForm.doctor}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">No Preference</option>
                  {doctors.map(doctor => (
                    <option key={doctor.id} value={doctor.name}>
                      {doctor.name} - {doctor.specialty}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Preferred Date *
                </label>
                <input
                  type="date"
                  name="date"
                  value={appointmentForm.date}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Preferred Time *
                </label>
                <select
                  name="time"
                  value={appointmentForm.time}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select a time</option>
                  <option value="7:00 AM">7:00 AM</option>
                  <option value="8:00 AM">8:00 AM</option>
                  <option value="9:00 AM">9:00 AM</option>
                  <option value="10:00 AM">10:00 AM</option>
                  <option value="11:00 AM">11:00 AM</option>
                  <option value="12:00 PM">12:00 PM</option>
                  <option value="1:00 PM">1:00 PM</option>
                  <option value="2:00 PM">2:00 PM</option>
                  <option value="3:00 PM">3:00 PM</option>
                  <option value="4:00 PM">4:00 PM</option>
                  <option value="5:00 PM">5:00 PM</option>
                  <option value="6:00 PM">6:00 PM</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Reason for Visit *
              </label>
              <textarea
                name="reason"
                value={appointmentForm.reason}
                onChange={handleInputChange}
                required
                rows="4"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Please briefly describe the reason for your visit..."
              />
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-3">Important Information</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Please arrive 15 minutes early for new patient appointments to complete paperwork</li>
                <li>• Bring your insurance card, photo ID, and any relevant medical records</li>
                <li>• If you need to cancel or reschedule, please call us at least 24 hours in advance</li>
                <li>• We offer telemedicine appointments for select visit types</li>
              </ul>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl"
            >
              Request Appointment
            </button>
          </form>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
            What to Expect During Your Visit
          </h3>
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Check-In Process</h4>
              <p className="text-sm text-gray-600">
                Our friendly reception team will greet you and verify your information. New patients will complete a comprehensive health history form to help us understand your medical background and current concerns.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Medical Consultation</h4>
              <p className="text-sm text-gray-600">
                Your physician will conduct a thorough examination and discuss your health concerns in detail. We encourage you to ask questions and share any symptoms or worries you may have about your health.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Treatment Plan</h4>
              <p className="text-sm text-gray-600">
                Together, we'll develop a personalized treatment plan that addresses your needs and goals. You'll receive clear instructions, prescriptions if needed, and follow-up recommendations before you leave.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">
            Prefer to schedule by phone? Our scheduling specialists are available to assist you.
          </p>
          <a
            href="tel:5551234567"
            className="inline-flex items-center space-x-2 text-blue-600 font-semibold hover:text-blue-700"
          >
            <Phone className="w-5 h-5" />
            <span>Call (555) 123-4567</span>
          </a>
        </div>
      </div>
    </div>
  );

  const Footer = () => (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="w-8 h-8" fill="white" />
              <div>
                <h3 className="text-xl font-bold">HealthBridge</h3>
                <p className="text-xs text-gray-400">Medical Center</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Committed to excellence in healthcare since 1999. Your health, our priority.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><button onClick={() => setCurrentPage('home')} className="hover:text-white">Home</button></li>
              <li><button onClick={() => setCurrentPage('doctors')} className="hover:text-white">Our Doctors</button></li>
              <li><button onClick={() => setCurrentPage('faq')} className="hover:text-white">FAQ</button></li>
              <li><button onClick={() => setCurrentPage('appointment')} className="hover:text-white">Book Appointment</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Primary Care</li>
              <li>Specialty Care</li>
              <li>Telemedicine</li>
              <li>Preventive Health</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>123 Wellness Drive</li>
              <li>San Francisco, CA 94102</li>
              <li>(555) 123-4567</li>
              <li>info@healthbridge.com</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 HealthBridge Medical Center. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <div className="flex-grow">
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'faq' && <FAQPage />}
        {currentPage === 'doctors' && <DoctorsPage />}
        {currentPage === 'appointment' && <AppointmentPage />}
      </div>
      <Footer />
    </div>
  );
}