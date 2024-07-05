import React from 'react';
import { tours } from '../data.js';
// import Title from './Title.js';

import Tour from './Tour';

const Tours = ({ tours, removeTour }) => {
  return (
    <section className="title">
      <h2>Our Tours</h2>
      <div className="title-underline"></div>
      {tours.map((tour) => {
        console.log(tour);
        return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
      })}
    </section>
  );
};

export default Tours;
