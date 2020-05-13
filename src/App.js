import React from 'react';
import './App.css';
import BackgroundGrid from "./components/Background/BackgroundGrid";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  return (
      <div className="App">
        <BackgroundGrid/>
        <Header/>
        <Main/>
      </div>
  );
}

export default App;
