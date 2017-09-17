if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = 'production';
}

const { server: { host, port } } = require('config');
const app = require('./lib/app');

app.listen(port, host, (err) => {
  if (err) {
    process.exit(1);
  }
  console.info(`Listening on http://${host}:${port}`);
});
