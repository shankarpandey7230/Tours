import React from 'react';

const Title = ({ title, subTitle }) => {
  return (
    <div className="text-center mt-4 title">
      <h2 className="text-uppercase">
        {title}
        <span className="mx-3 ">{subTitle}</span>
      </h2>
    </div>
  );
};

export default Title;
