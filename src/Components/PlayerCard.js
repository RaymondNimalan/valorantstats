import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PlayerCard = ({ apiKey, playerName, region }) => {
  const [playerStats, setPlayerStats] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  return <div>this is the player card</div>;
};

export default PlayerCard;
