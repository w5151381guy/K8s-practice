const express = require('express');
const database = require('./database');

const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get('/api/user', async (req, res) => {
  try {
    const resultData = await database.getData();
    return res.json(resultData);
  } catch (error) {
    console.error('getData error', error);
    return (res.status = '400');
  }
});

app.post('/api/user', async (req, res) => {
  try {
    console.log(req.body);
    const result = await database.insertData(req.body);
    res.json({ result });
  } catch (error) {
    console.error('insertData error', error);
    return (res.status = '400');
  }
});

app.listen(3000);
