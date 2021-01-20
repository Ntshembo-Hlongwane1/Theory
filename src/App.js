import './App.css';
import React from 'react';
import Main from './others/Main'
import AdventuresContainer from './containers/AdventuresContainer';

const App = () =>  {
  return (
    <div className="App">
      
       <Main />
      
      <AdventuresContainer />
    </div>
  );
}

export default App;
