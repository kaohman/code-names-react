import { useEffect } from 'react';
import './App.scss';
import CardContainer from './components/CardContainer/CardContainer';
import { getGameboardWords } from './thunks/getGameboardWords';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

function App({ getGameboardWords }) {

  useEffect(() => {
    getGameboardWords(25);
  }, [getGameboardWords]);

  return (
    <div>
      <header>
        <h1>React Code Names</h1>
      </header>
      <CardContainer />
    </div>
  );
}

export const mapDispatchToProps = dispatch => ({
  getGameboardWords: total => dispatch(getGameboardWords(total)),
});

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(App)
);
