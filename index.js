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

app.get(['/privacy', '/privacy/'], (_req, res) => {
  res.sendFile(path.join(publicDir, 'privacy/index.html'));
});

app.get(['/terms', '/terms/'], (_req, res) => {
  res.sendFile(path.join(publicDir, 'terms/index.html'));
});

app.get(['/partners', '/partners/'], (_req, res) => {
  res.sendFile(path.join(publicDir, 'partners/index.html'));
});

app.get('/partners/job/:id', (req, res) => {
  const sample = path.join(publicDir, 'partners/job', req.params.id, 'index.html');
  res.sendFile(sample, (error) => {
    if (error) {
      res
        .status(200)
        .type('html')
        .send('<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Partner job</title></head><body><h1>Job details are available to the assigned partner</h1></body></html>');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Home Reno Hotspot serving on port ${PORT}`);
});
