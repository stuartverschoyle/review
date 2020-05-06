import React from 'react';
import './App.scss';
import Userform from './components/UserForm';
import Comments from './components/Comments';
import Graph from './components/Graph';


function App() {
  return (
    <div className="App">
      <div className="formContainer">
        <Userform />
      </div>
      <div className="flex">
        <Comments />
        <Graph />
      </div>
    </div>
  );
}

export default App;
