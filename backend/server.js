require('dotenv').config();
const express = require('express');
const cors = require('cors');
const signalementsRoutes = require('./routes/signalements');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'API Tracker Coupures fonctionne !' });
});

app.use('/signalements', signalementsRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
