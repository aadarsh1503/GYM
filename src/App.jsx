import React from 'react';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-blue-500 to-teal-500 p-4 shadow-lg">
      <nav className="container mx-auto flex flex-wrap items-center justify-between">
        <div id="logo" className="flex items-center space-x-4">
          <img src="logo1.png" alt="Evexia Gym Logo" className="h-12 rounded-full border-2 border-white" />
          <div id="gym_name" className="text-3xl font-extrabold text-white">Evexia Gym</div>
        </div>
        <button
          className="text-white lg:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Navigation"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
        <div
          id="navbar"
          className={`w-full lg:w-auto lg:flex lg:items-center lg:space-x-6 lg:space-y-0 flex-col lg:flex-row transition-all duration-300 ease-in-out ${isOpen ? 'block' : 'hidden'} lg:block`}
        >
          <a href="#home" className="text-white font-semibold text-lg hover:text-yellow-300 transition-colors duration-300 mb-4 lg:mb-0 lg:mr-4">Home</a>
          <a href="#facility" className="text-white font-semibold text-lg hover:text-yellow-300 transition-colors duration-300 mb-4 lg:mb-0 lg:mr-4">Programs</a>
          <a href="#about_us" className="text-white font-semibold text-lg hover:text-yellow-300 transition-colors duration-300 mb-4 lg:mb-0 lg:mr-4">About Us</a>
          <a href="#membership" className="text-white font-semibold text-lg hover:text-yellow-300 transition-colors duration-300 mb-4 lg:mb-0 lg:mr-4">Membership</a>
          <a href="#contact_us" className="text-white font-semibold text-lg hover:text-yellow-300 transition-colors duration-300 mb-4 lg:mb-0 lg:mr-4">Contact Us</a>
        </div>
      </nav>
    </header>
  );
};


const Home = () => {
  return (
    <section
      id="home"
      className="bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 h-screen text-center flex flex-col justify-center items-center text-white relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src="gym-background.jpg"
     
          className="w-full h-full object-cover opacity-50"
        />
      </div>
      <div className="relative z-10 p-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fadeIn">
          Welcome to the Arena, Elite!
        </h1>
        <p className="text-lg md:text-2xl mb-8">
          Strength doesn't come from what you can do. It comes
          <br />
          from overcoming the things you once thought you couldn't!
        </p>
        <a
          href="#"
          className="bg-yellow-400 text-black py-3 px-6 rounded-lg shadow-lg hover:bg-yellow-500 transition-transform transform hover:scale-105"
        >
          7 Days Free Trial
        </a>
      </div>
    </section>
  );
};

const Facility = () => {
  return (
    <section
      id="facility"
      className="bg-gradient-to-r from-green-400 via-blue-500 to-indigo-600 p-8 text-center relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src="facility-background.jpg"
         
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      <div className="relative z-10 p-6 max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white animate-fadeIn">
          OUR PROGRAMS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { image: 'cardio.jpg', text: 'CARDIO SESSIONS' },
            { image: 'strength.jpg', text: 'STRENGTH TRAINING' },
            { image: 'personal_training.jpg', text: 'PERSONAL TRAINING' },
            { image: 'fitness_events.jpg', text: 'FITNESS EVENTS' },
          ].map(({ image, text }) => (
            <div
              key={text}
              className="relative bg-cover bg-center h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
              style={{ backgroundImage: `url(${image})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <span className="text-lg md:text-2xl font-semibold text-white">{text}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProgramDescription = () => {
  return (
    <section id="facility" className="p-8 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 text-gray-800">
      <div className="text-4xl font-extrabold mb-8 text-center text-gray-900">Our Programs</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {programs.map((program) => (
          <div
            key={program.id}
            className="relative bg-cover bg-center h-64 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
            style={{ backgroundImage: `url(${program.image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex items-end justify-center p-4 rounded-lg">
              <div className="text-xl font-semibold text-white bg-gradient-to-r from-pink-400 via-red-400 to-yellow-500 bg-clip-text text-transparent">
                {program.title}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const programs = [
  { id: 1, title: 'Cardio Sessions', image: 'cardio.jpg' },
  { id: 2, title: 'Strength Training', image: 'strength.jpg' },
  { id: 3, title: 'Personal Training', image: 'personal_training.jpg' },
  { id: 4, title: 'Fitness Events', image: 'fitness_events.jpg' },
];

const Membership = () => {
  return (
    <section id="membership" className="p-8 bg-gradient-to-r from-green-500 via-teal-600 to-blue-700">
    <div className="text-4xl font-bold mb-4 text-white text-center">Membership</div>
    <div className="text-xl mb-8 text-white text-center">It all starts from here...</div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {['Month-to-month', 'Quarterly', 'Annual'].map((plan, index) => (
        <div
          key={index}
          className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">{plan}</h3>
            <p className="text-2xl text-green-600">
              &#8377;{index === 0 ? '2000' : index === 1 ? '5000' : '18000'}
              <small className="text-black">/mo</small>
            </p>
            <div className="mt-4">
              <div className="bullet flex items-center">
                <img className="bullet_mark1 w-6 h-6 mr-2" src="bullet1.png" alt="" />
                <p className="point1">All Sessions</p>
              </div>
              <div className="bullet flex items-center mt-2">
                <img className="bullet_mark2 w-6 h-6 mr-2" src="bullet1.png" alt="" />
                <p className="point2">All member events</p>
              </div>
              <div className="bullet flex items-center mt-2">
                <img className="bullet_mark3 w-6 h-6 mr-2" src="bullet1.png" alt="" />
                <p className="point3">Full gym Access</p>
              </div>
            </div>
            <div className="charges mt-4 text-center">
              Revives every month
              <br />
              unless you cancel
              <br />
              <a href="#" className="text-yellow-500">7 days free trial</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);
};

const AboutUs = () => {
  return (
    <section id="about_us" className="p-8 bg-gradient-to-r from-blue-500 via-teal-500 to-green-500 text-white">
      <div className="text-4xl font-bold mb-6 text-center">About Us</div>
      <p className="text-lg mb-8 text-center max-w-2xl mx-auto">
        Welcome to Evexia Gym! We're more than just a fitness center; we're a community dedicated to transforming lives through fitness. Located in Kashipur, Uttarakhand, we offer top-notch equipment and programs to help you reach your fitness goals.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="w-full rounded-lg overflow-hidden shadow-xl transition-transform transform hover:scale-105">
          <img src="about_image.jpeg" alt="Our Team" className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col justify-center">
          <div className="text-2xl font-semibold mb-4">
            Why Choose Us?
          </div>
          <ul className="list-disc list-inside space-y-4">
            <li className="flex items-center space-x-2">
              <img className="w-6 h-6 text-yellow-300" src="check-icon.png" alt="Check Icon" />
              <span>State-of-the-art facilities</span>
            </li>
            <li className="flex items-center space-x-2">
              <img className="w-6 h-6 text-yellow-300" src="check-icon.png" alt="Check Icon" />
              <span>Expert trainers and personalized plans</span>
            </li>
            <li className="flex items-center space-x-2">
              <img className="w-6 h-6 text-yellow-300" src="check-icon.png" alt="Check Icon" />
              <span>Community-focused approach</span>
            </li>
            <li className="flex items-center space-x-2">
              <img className="w-6 h-6 text-yellow-300" src="check-icon.png" alt="Check Icon" />
              <span>Wide range of classes and events</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
const ContactUs = () => {
  return (
    <section id="contact_us" className="p-8 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600">
    <div className="text-4xl font-bold mb-4 text-white text-center">Contact Us</div>
    <form className="bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto">
      <div className="mb-4">
        <label htmlFor="name" className="block text-lg mb-2">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-gray-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-lg mb-2">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-gray-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-lg mb-2">Message</label>
        <textarea
          id="message"
          name="message"
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-gray-500"
          rows="4"
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full py-3 px-4 bg-yellow-500 text-black rounded-lg shadow-lg hover:bg-yellow-600 transition-colors duration-300"
      >
        Send Message
      </button>
    </form>
  </section>
);
};

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 Evexia Gym. All rights reserved.</p>
      </div>
    </footer>
  );
};






const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Facility />
      <ProgramDescription />
      <Membership />
      <AboutUs />
      <ContactUs />
      <Footer />
    </>
  );
};

export default App;
