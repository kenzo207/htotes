const express = require('express');
const path = require('path'); // Add this line at the top

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname));

// ADD THIS ROUTE HANDLER TO FIX THE "CANNOT GET /" ERROR
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});