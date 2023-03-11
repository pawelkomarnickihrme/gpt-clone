import React, { useState } from 'react';

export default function TextInput() {
  const [text, setText] = useState('');

  function handleTextChange(event: {
    target: { value: React.SetStateAction<string> };
  }) {
    setText(event.target.value);
  }

  function handleButtonClick() {
    setText('');
  }

  function handleKeyDown(event: { key: string }) {
    if (event.key === 'Enter') {
      handleButtonClick();
    }
  }

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={handleTextChange}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleButtonClick}>Submit</button>
    </div>
  );
}
