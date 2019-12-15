const http = require('http');
const config = require('./config/config');
const app = require('./app');

const server = http.createServer(app);

// Listen on PORT
server.listen(config.PORT || 3001, () => {
  console.log(`Server running on port ${process.env.PORT || 3001}`);
});
