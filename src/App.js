import './App.css';
import React, { useState } from 'react';
import PlayerList from './components/PlayerList';
import Filter from './components/Filter';

function App() {
  const [searchParams, setSearchParams] = useState([0, 0, 0, 'any', '1', 100, 100, 100]);
  document.body.style = "background-color: black;"
  
  return (
    <div id='app'>
      <div id="statsTool" class="borderDiv">
        This will be something cool in the future
      </div>
      <div id="filter" class="borderDiv">
        <Filter setSearchParams={setSearchParams}/>
      </div>
      <div id="playerList" class="borderDiv">
        <PlayerList id="pl" searchParams={searchParams}/>
      </div>
    </div>
  );
}

export default App;
