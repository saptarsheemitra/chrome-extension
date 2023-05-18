import React from 'react';

const CapturedList = () => {
  const capturedElements =
    JSON.parse(localStorage.getItem('capturedElements')) || [];

  return (
    <ul>
      {capturedElements.map((element, index) => (
        <li key={index}>{element.text}</li>
      ))}
    </ul>
  );
};

export default CapturedList;
