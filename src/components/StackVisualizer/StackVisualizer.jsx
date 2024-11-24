import React, { useState } from 'react';
import './StackVisualizer.css';

const StackVisualizer = () => {
  const [stack, setStack] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');

  // Handle input change
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    setError(''); // Clear any error when user starts typing
  };

  // Push to stack
  const handlePush = () => {
    if (inputValue.trim() === '' || isNaN(inputValue)) {
      setError('Please enter a valid number.');
      return;
    }
    setStack([...stack, Number(inputValue)]);
    setInputValue('');
  };

  // Pop from stack
  const handlePop = () => {
    if (stack.length === 0) {
      setError('Stack is empty! Cannot pop.');
      return;
    }
    setStack(stack.slice(0, stack.length - 1));
  };

  return (
    <div className="stack-visualizer">
      <div className="controls">
        <input
          type="text"
          value={inputValue}
          placeholder="Enter a number"
          onChange={handleInputChange}
        />
        <button onClick={handlePush}>Push</button>
        <button onClick={handlePop}>Pop</button>
      </div>
      {error && <div className="error">{error}</div>}
      <div className="stack-container">
        {stack.map((value, index) => (
          <div key={index} className="stack-item">
            {value}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StackVisualizer;
