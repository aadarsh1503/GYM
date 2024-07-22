import React from 'react';

const ProgramDescriptionSection = () => (
  <section id="program_description" className="p-8">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
      <div id="program1_image" className="w-full">
        <img src="description22.avif" alt="" className="w-full h-full object-cover rounded shadow-lg" />
      </div>
      <div>
        <div id="program1_heading" className="text-2xl font-bold mb-4">Cardio Sessions</div>
        <div id="program1_description" className="text-lg">
          Transform your fitness journey <br />with our dynamic cardio sessions
          {[
            { icon: 'bullet1.png', text: 'Burn Calories' },
            { icon: 'bullet1.png', text: 'Increase Stamina' },
            { icon: 'bullet1.png', text: 'Stronger Immune System' }
          ].map((bullet, index) => (
            <div key={index} className="bullet flex items-center mt-2">
              <img className="w-6 h-6 mr-2" src={bullet.icon} alt="" />
              <p>{bullet.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    {/* Repeat similar structure for other program descriptions */}
  </section>
);

export default ProgramDescriptionSection;
