import React, { useRef } from 'react';

const BoxColor = ({ color, inputValue }) => {
  const boxRef = useRef();

  const isMatch = color.toLowerCase() === inputValue.toLowerCase();

  if (boxRef.current) {
    boxRef.current.style.backgroundColor = isMatch ? color : 'transparent';
  }

  return (
    <div className={`box ${color}`} ref={boxRef}>
      {isMatch ? `Soy el color ${color}` : `No soy el color ${inputValue}`}
    </div>
  );
};

export default BoxColor;