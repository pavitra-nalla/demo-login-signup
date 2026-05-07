const server = require('../dist/server/server.js');

export default async (req, res) => {
  const response = await server.fetch(req);
  res.status(response.status);
  for (const [key, value] of response.headers) {
    res.setHeader(key, value);
  }
  const body = await response.text();
  res.send(body);
};