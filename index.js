const express = require('express');
const app = express();
const port = 3000;  // Ensure the port is 80

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
