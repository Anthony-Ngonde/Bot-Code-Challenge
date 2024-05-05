import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';
import BotSpecs from './components/BotSpecs';
import SortBar from './components/SortBar';

function App() {
  const [army, setArmy] = useState([]);

  const releaseBot = (botId) => {
    setArmy(army.filter(bot => bot.id !== botId));
  };

  const deleteBot = (botId) => {
    fetch(`http://localhost:5173/bots/${botId}`, { // Update the endpoint URL
      method: 'DELETE',
    })
    .then(response => {
      if (response.ok) {
        // Remove the bot from the army
        setArmy(army.filter(bot => bot.id !== botId));
      } else {
        throw new Error('Failed to delete bot');
      }
    })
    .catch(error => {
      console.error('Error deleting bot:', error);
    });
  };

  return (
    <Router>
      <div>
        <SortBar />
        <Switch>
          <Route exact path="/">
            <BotCollection army={army} setArmy={setArmy} />
          </Route>
          <Route path="/army">
            <YourBotArmy army={army} releaseBot={releaseBot} deleteBot={deleteBot} />
          </Route>
          <Route path="/bots/:botId">
            <BotSpecs army={army} setArmy={setArmy} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;