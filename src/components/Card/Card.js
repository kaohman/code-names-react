import './Card.scss';

function Card({ word }) {
  return (
    <div className="game-card">
      { word }
    </div>
  );
}

export default Card;