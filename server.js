const { server } = require('config');
const app = require('./lib/app');

const { host, port } = server;

app.listen(port, host, (err) => {
  if (err) {
    process.exit(1);
  }
  console.info(`Listening on http://${host}:${port}`);
});
