import React from 'react';

const FacilitySection = () => (
  <section id="facility" className="p-8 text-center animation-fade">
    <div id="offering_heading" className="text-4xl font-bold mb-8">OUR PROGRAMS</div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        { bgImage: 'cardio.jpg', text: 'CARDIO SESSIONS' },
        { bgImage: 'strength.jpg', text: 'STRENGTH TRAINING' },
        { bgImage: 'personal_training.jpg', text: 'PERSONAL TRAINING' },
        { bgImage: 'fitness_events.jpg', text: 'FITNESS EVENTS' }
      ].map((program, index) => (
        <div key={index} className="programs relative bg-cover bg-center h-64 hover-effect shadow-lg" style={{ backgroundImage: `url(${program.bgImage})` }}>
          <div className="overlay_text absolute bottom-0 left-0 w-full text-lg p-4">{program.text}</div>
        </div>
      ))}
    </div>
  </section>
);

export default FacilitySection;
