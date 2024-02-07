
import React from 'react';

const CustomCardBox = ({title, description}) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 border border-black">
      <h2 className="text-xl font-bold mb-4 text-center">{title.toUpperCase() }</h2>
      <div className="text-gray-600" dangerouslySetInnerHTML={{__html: description}}/>
    </div>
  );
};

export default CustomCardBox;