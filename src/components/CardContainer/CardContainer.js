import Card from '../Card/Card';
import './CardContainer.scss';
import { connect } from 'react-redux';

const CardContainer = ({ gameboardWords }) => {
  console.log(gameboardWords)
  return (
    <div className="card-container">
      { gameboardWords && gameboardWords.length ?
        gameboardWords.map(word => <Card word={word} key={word} />) :
        <p>loading...</p>
      }
    </div>
  );
}

export const mapStateToProps = state => ({
  gameboardWords: state.gameboardWords,
});

export default connect(mapStateToProps)(CardContainer);