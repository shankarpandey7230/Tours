import React from 'react';
import about from '../assets/images/about.jpeg';
import Title from './Title';

const About = () => {
  return (
    <section className="section text-center pt-5" id="about">
      <Title title="about" subTitle="us" />
      <div
        className=" mx-auto  about-center"
        style={{ width: '90vw', 'max-width': '992px' }}
      >
        <div className="about-img mb-5 ">
          <img
            src={about}
            alt="awesome "
            className="about-photo shadow-lg rounded"
          />
        </div>
        <article className="about-info mb-5">
          <h3 class="text-uppercase mb-4">explore the difference</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
            unde dolor?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
            unde dolor?
          </p>
          <a href="#" className="btn btn-secondary rounded shadow-lg">
            Read more
          </a>
        </article>
      </div>
    </section>
  );
};

export default About;
