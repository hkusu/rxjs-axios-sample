const axios = require('axios');

axios.defaults.baseURL = 'http://qiita.com/api/v1';

axios.get('/items?per_page=10')
  .then((res) => {
    res.data.forEach((item) => {
      console.log(item.title);
    });
  });
