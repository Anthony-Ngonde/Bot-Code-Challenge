import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SortBar from './SortBar';

function BotCollection() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5173/bots')
      .then(response => response.json())
      .then(data => setBots(data));
  }, []);

  const addToArmy = (bot) => {
    if (!army.find(b => b.id === bot.id)) {
      setArmy(prevArmy => [...prevArmy, bot]); // Use the previous state to update army
    }
  };

  return (
    <div>
      <SortBar />
      <div>
        {bots.map(bot => ( // Corrected variable name to 'bot'
          <div key={bot.id}>
            <Link to={`/bots/${bot.id}`}>
              <img src={bot.avatar_url} alt={bot.name} />
              <h2>{bot.name}</h2>
            </Link>
            <button onClick={() => addToArmy(bot)}>Add to Army</button> {/* Corrected function parameter */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default BotCollection;