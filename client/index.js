const dotenv = require('dotenv');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const axios = require('axios');
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

const port = 7653;
const contentURL =
  'https://na.api.riotgames.com/val/content/v1/contents?locale=en-US';

const playerStatsURL = 'https://na.api.riotgames.com/val/stats/v1/player?';

const riotAPI = process.env.VALORANT_API_KEY;

app.get('/stuff', async (req, res) => {
  console.log('in stuff route');
  console.log('env', process.env.VALORANT_API_KEY);
  try {
    const response = await axios.get(playerStatsURL, {
      headers: {
        'X-Riot-Token': riotAPI,
      },
    });
    console.log('in stuff route, after getting data', response);

    console.log('response data', response.data);
    res.send(response.data);
  } catch (error) {
    console.log('error getting stuff', error);
  }
});

app.listen(port, () => {
  console.log('Server started on port 7653');
});
