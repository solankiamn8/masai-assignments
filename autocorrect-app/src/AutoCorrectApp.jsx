import React, { useState } from 'react';
import CorrectedText from './CorrectedText';

function AutoCorrectApp() {
  const [inputText, setInputText] = useState('');

  const corrections = {
    "teh": "the",
    "recieve": "receive",
    "adress": "address",
    "wierd": "weird",
    "thier": "their"
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>AutoCorrect App</h2>
      <input
        type="text"
        value={inputText}
        placeholder="Type something..."
        onChange={(e) => setInputText(e.target.value)}
        style={{ padding: '10px', width: '80%', fontSize: '16px' }}
      />

      <div style={{ marginTop: '20px' }}>
        <CorrectedText text={inputText} corrections={corrections} />
      </div>
    </div>
  );
}

export default AutoCorrectApp;
