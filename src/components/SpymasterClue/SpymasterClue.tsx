import React from 'react';
import './SpymasterClue.scss';

const SpymasterClue = () => {
  return (
    <div className="spymaster-clue">
      <input type="text" placeholder="Type your clue..." />
      <input type="number" max="9" />
      <button>Give Clue</button>
    </div>
  );
}

export default SpymasterClue;