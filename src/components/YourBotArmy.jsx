import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

function BotSpecs() {
  const { botId } = useParams(); // Corrected variable name
  const [bot, setBot] = useState(null);
  const history = useHistory();

  useEffect(() => {
    fetch(`http://localhost:5173/bots/${botId}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch bot');
        }
        return response.json();
      })
      .then(data => setBot(data))
      .catch(error => {
        console.error('Error fetching bot:', error);
        // Optionally, you can set an error state here to handle and display the error in the UI
      });
  }, [botId]);

  const enlistBot = () => {
    // Add logic to enlist the bot into the army
    // Redirect back to the bot collection after enlistment
    history.push('/');
  };

  return (
    <div>
      {bot && (
        <div>
          <img src={bot.avatar_url} alt={bot.name} />
          <h2>{bot.name}</h2>
          <p>Health: {bot.health}</p>
          <p>Damage: {bot.damage}</p>
          <p>Armor: {bot.armor}</p>
          <p>Class: {bot.bot_class}</p>
          <button onClick={enlistBot}>Enlist</button>
        </div>
      )}
    </div>
  );
}

export default BotSpecs;