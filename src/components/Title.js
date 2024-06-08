import React from 'react';

const Title = ({ title, subTitle }) => {
  return (
    <div className="text-center m-t-5 title ">
      <h2 className="text-uppercase m-t-5">
        {title}
        <span className="m-3">{subTitle}</span>
      </h2>
    </div>
  );
};

export default Title;
