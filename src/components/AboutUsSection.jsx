import React from 'react';

const AboutUsSection = () => (
  <section id="about_us" className="p-8">
    <div id="about_us_heading" className="text-4xl font-bold mb-4">About Evexia Gym</div>
    <p id="about_gym" className="text-lg mb-4">
      Hi! We are a local Evexia gym in <br />
      Kashipur, Uttarakhand.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div id="gym_image1" className="w-full">
        <img src="about_image.jpeg" alt="" className="w-full h-full object-cover rounded shadow-lg" />
      </div>
      <div>
        <div id="gym_heading1" className="text-2xl font-bold mb-2">Get a workout in</div>
        <p id="gym_description1" className="text-lg">
          Start exercising today with our <br /> modern equipment and join our <br /> welcoming community of
          <br /> fitness enthusiasts.
        </p>
      </div>
    </div>
  </section>
);

export default AboutUsSection;
