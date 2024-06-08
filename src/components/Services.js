import React from 'react';
import { services } from '../data.js';
import Title from './Title';
import Service from './Service';

const Services = () => {
  return (
    <section className="section service text-center " id="services">
      <Title title="Our" subTitle="services" />
      <div className="section-center services-center">
        {services.map((service) => {
          return <Service {...service} key={service.id} />;
        })}
      </div>
    </section>
  );
};

export default Services;
