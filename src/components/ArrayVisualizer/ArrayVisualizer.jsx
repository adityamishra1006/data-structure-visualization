import React, { useState } from 'react';
import './ArrayVisualizer.css';

const ArrayVisualizer = () => {
  const [array, setArray] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddToArray = () => {
    if (inputValue.trim() !== '' && !isNaN(inputValue)) {
      setArray([...array, Number(inputValue)]);
      setInputValue('');
    }
  };

  const handleClearArray = () => {
    setArray([]);
  };

  return (
    <div className="array-visualizer">
      <div className="controls">
        <input
          type="text"
          value={inputValue}
          placeholder="Enter a number"
          onChange={handleInputChange}
        />
        <button onClick={handleAddToArray}>Add</button>
        <button onClick={handleClearArray}>Clear</button>
      </div>
      <div className="visualization">
        {array.map((value, index) => (
          <div key={index} className="array-bar" style={{ height: `${value * 10}px` }}>
            {value}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArrayVisualizer;
