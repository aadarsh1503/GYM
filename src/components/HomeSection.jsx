import React from 'react';

const HomeSection = () => (
  <section id="home" className="bg-cover bg-center h-screen text-center flex flex-col justify-center items-center text-white" style={{ backgroundImage: 'url(gym-background.jpg)' }}>
    <div id="intro" className="text-4xl md:text-6xl font-bold mb-4">Welcome to the Arena, Elite!</div>
    <p id="quote" className="text-lg md:text-2xl mb-8">
      Strength doesn't come from what you can do. It comes <br />from
      overcoming the things you once thought you couldn't!
    </p>
    <a href="" className="bg-yellow-500 text-black py-2 px-4 rounded hover:bg-yellow-600">7 Days Free Trial</a>
  </section>
);

export default HomeSection;
