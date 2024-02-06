
import React from 'react';

const CustomCardBox = ({title, description}) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 border border-black">
      <h2 className="text-xl font-bold mb-4 text-center">{title.toUpperCase() }</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default CustomCardBox;