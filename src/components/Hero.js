import React from 'react';
import '../index.css';

const Hero = () => {
  return (
    <section
      className="hero d-flex justify-content-center align-items-center bg-light"
      id="home"
    >
      <div className="hero-banner text-center p-3 mx-auto l">
        <h1 className="text-uppercase ">nepal tours</h1>
        <p className="m-auto">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed dolorum
          quidem repellat fuga, voluptatem, nesciunt cum amet voluptatibus ad
          nihil facilis pariatur quam eveniet. Commodi sed doloremque architecto
          nulla itaque!
        </p>
        <a
          href="#tours"
          className="btn btn-secondary p-2 mt-5 rounded lg-shadow text-uppercase"
        >
          explore tours
        </a>
      </div>
    </section>
  );
};

export default Hero;
