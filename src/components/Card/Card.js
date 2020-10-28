import './Card.scss';

const Card = ({ word }) => {
  return (
    <div className="game-card">
      <h3>{ word }</h3>
    </div>
  );
}

export default Card;