const fs = require('fs');
const path = require('path');

// Vercel serverless handler. This adapts the original server.js behavior
// for a serverless environment: it can serve the root index.html when
// invoked directly, but is intended to be the backend handler for /api/*
// requests routed from vercel.json.
module.exports = (req, res) => {
  const url = req.url || '/';

  if (req.method === 'GET' && (url === '/' || url === '')) {
    const filePath = path.join(process.cwd(), 'index.html');
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Internal Server Error');
        return;
      }
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      res.end(data);
    });
    return;
  }

  // No other API endpoints were present in the original server.js;
  // respond 404 for everything else. Add routes here for real API logic.
  res.statusCode = 404;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Not Found');
};
