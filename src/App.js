import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/Menu';
import { BrowserRouter as Router } from 'react-router-dom';
import Authenticated from './components/Authenticated';
import LoadingBar  from 'react-redux-loading';

function App() {
  return (
    <Router>
      <div className="App">
        <LoadingBar style={{zIndex: 2}} />
        <Menu />
        <Authenticated>
          app
        </Authenticated>
      </div>
    </Router>
  );
}

export default App;
