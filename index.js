const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const publicDir = path.join(__dirname, 'public');

app.use(express.static(publicDir));

app.get('/', (_req, res) => {
  res.sendFile(path.join(publicDir, 'index.html'));
});

app.get('/terms-of-service', (_req, res) => {
  res.sendFile(path.join(publicDir, 'terms-of-service.html'));
});

app.get('/privacy-policy', (_req, res) => {
  res.sendFile(path.join(publicDir, 'privacy-policy.html'));
});

app.listen(PORT, () => {
  console.log(`Home Reno Hotspot serving on port ${PORT}`);
});
