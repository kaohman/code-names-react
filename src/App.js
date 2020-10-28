import { useEffect } from 'react';
import './App.scss';
import CardContainer from './components/CardContainer/CardContainer';
import { getGameboardWords } from './thunks/getGameboardWords';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import SpymasterClue from './components/SpymasterClue/SpymasterClue';
import Team from './components/Team/Team';

const App = ({ getGameboardWords, isLoading }) => {

  useEffect(() => {
    getGameboardWords(25);
  }, [getGameboardWords]);

  return (
    <div>
      <header>
        <h1>React Code Names</h1>
      </header>
      <div className="main-content">
        <Team teamName="Team 1" />
        <div>
          <div>
            <h4 className="subheader">Turn info...</h4>
          </div>
          { !isLoading && <CardContainer /> }
          <div>
            <SpymasterClue />
          </div>
        </div>
        <Team teamName="Team 2" />
      </div>
    </div>
  );
}

export const mapStateToProps = state => ({
  isLoading: state.isLoading,
});

export const mapDispatchToProps = dispatch => ({
  getGameboardWords: total => dispatch(getGameboardWords(total)),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
