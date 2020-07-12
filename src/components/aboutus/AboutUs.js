import React from 'react';
import info from './info';
import AboutCard from './AboutCard';

const AboutUs = () => {
  return (
    <section className='section-first'>
      <h1 className='auth'>Команда frontend-разработчиков</h1>
      <div className='about-us'>
        {info.map((el) => (
          <AboutCard key={el.name} {...el} />
        ))}
      </div>
    </section>
  );
};

export default AboutUs;
