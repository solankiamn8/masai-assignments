import React from 'react';

function CorrectedText({ text, corrections }) {
  const words = text.split(' ');
  let correctedCount = 0;

  const correctedWords = words.map(word => {
    if (corrections[word]) {
      correctedCount++;
      return corrections[word];
    }
    return word;
  });

  return (
    <div>
      <p><strong>Corrected:</strong> {correctedWords.join(' ')}</p>
      <p><strong>Words Corrected:</strong> {correctedCount}</p>
    </div>
  );
}

export default CorrectedText;
