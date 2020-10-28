import Card from '../Card/Card';
import './CardContainer.scss';
import { connect } from 'react-redux';

function CardContainer({
  gameboardWords,
}) {

  console.log(gameboardWords)

  return (
    <div className="card-container">
      { gameboardWords && gameboardWords.length ?
        gameboardWords.map(word => <Card word={word} />) :
        <p>loading...</p>
      }
    </div>
  );
}

export const mapStateToProps = state => ({
  gamboardWords: state.gameboardWords,
});

export default connect(mapStateToProps)(CardContainer);