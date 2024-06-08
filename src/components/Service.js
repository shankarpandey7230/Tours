import React from 'react';

const Service = ({ icon, title, text }) => {
  //   const { icon, title, text } = serve;
  //   console.log(serve);
  return (
    <article className="service p-3">
      <span className="service-icon text-primary">
        <i className={icon}></i>
      </span>
      <div className="service-info ">
        <h4 className="service-title text-uppercase mt-2">{title}</h4>
        <p className="service-text">{text}</p>
      </div>
    </article>
  );
};
export default Service;
