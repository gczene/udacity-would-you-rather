import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/Menu';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Authenticated from './components/Authenticated';
import LoadingBar  from 'react-redux-loading';
import Home from './journey/Home';
import PreloadQuestions from './components/PreloadQuestions';
import Question from './journey/Question';
import NewQuestion from "./journey/NewQuestion";
import LeaderBoard from "./journey/LeaderBoard";

function App() {
  return (
    <Router>
      <div className="App">
        <LoadingBar style={{zIndex: 2}} />
        <Menu />
        <Authenticated>
          <PreloadQuestions>
            <Route exact path={'/'} component={Home} />
            <Route path={'/questions/:id'} component={Question} />
            <Route path={'/add'} component={NewQuestion} />
            <Route path={'/leaderboard'} component={LeaderBoard} />
          </PreloadQuestions>
        </Authenticated>
      </div>
    </Router>
  );
}

export default App;
