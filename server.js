const express = require('express');
const app = express();
const axios = require('axios');
const cors = require('cors');

app.use(cors());

app.get('/products', (req, res) => {
  let repo = 'https://raw.githubusercontent.com/freedom-netshoes/front-end-recruitment/';
  let file = 'master/public/data/products.json';
  let url = repo + file;

  axios.get(url).then(response => res.send(response.data));
});

app.listen(3000, function() {
  console.log('listening on 3000');
});
