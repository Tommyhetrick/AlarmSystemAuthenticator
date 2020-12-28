const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('success');
  process.exit(1)
});

app.get('/check', (req, res) => {
    res.send('Express is working correctly.');
});

app.listen(3000, () => console.log('Authenticator Listening'))