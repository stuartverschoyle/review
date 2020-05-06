import React from 'react';
import './App.scss';
import Userform from './components/UserForm';
import Comments from './components/Comments'
import Graph from './components/Graph'

function App() {
  return (
    <div className="App">
      <Userform />
      <div className="flex">
        <Comments />
        <Graph />
      </div>

    </div>
  );
}

export default App;
