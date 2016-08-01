import opn from 'opn';
import express from 'express';

const app = express();
const port = 3000;
const host = 'localhost';
const url = `http://${host}:${port}`;

app.use(express.static('app/prod'));

app.listen(port, host, () => {
  const options = { app: 'google chrome' };
  return opn(url, options);
});
