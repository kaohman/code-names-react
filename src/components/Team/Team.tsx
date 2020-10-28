import React from 'react';
import './Team.scss';

const Team = (props: { teamName: string }) => {
  const cardsLeft = 9;
  
  return (
    <div className="team-container">
      <h4>{ props.teamName }</h4>
      <h4>{ cardsLeft }</h4>
      <h4>Players:</h4>
      <p>Player1</p>
    </div>
  );
}

export default Team;