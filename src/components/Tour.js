import React from 'react';

const Tour = ({ image, date, title, info, location, duration, cost }) => {
  return (
    <article className="tour-card shadow-lg mb-5 p-3 text-center">
      <div className="tour-img-container ">
        <img
          src={image}
          alt={title}
          className="tour-img"
          style={{ height: '15rem', width: '100%', objectFit: 'cover' }}
        />
        <p className="tour-date position-absolute">{date}</p>
      </div>
      <div className="tour-info p-4 ">
        <div className="tour-title d-flex justify-content-center">
          <h4>{title}</h4>
        </div>
        <p>{info}</p>
        <div className="tour-footer d-flex justify-content-between flex-wrap align-items-center p-2">
          <p className="text-capitalize">
            <span>
              <i className="fas fa-map mx-3 text-primary"></i>
            </span>
            {location}
          </p>
          <p className="text-capitalize">from ${cost}</p>
          <p className="text-capitalize">{duration} days</p>
        </div>
      </div>
    </article>
  );
};

export default Tour;
