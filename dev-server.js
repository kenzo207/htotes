const http = require('http');
const handler = require('./api/index');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  try {
    handler(req, res);
  } catch (err) {
    res.statusCode = 500;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Internal Server Error');
  }
});

server.listen(PORT, () => {
  console.log(`Dev server listening on http://localhost:${PORT}`);
});
