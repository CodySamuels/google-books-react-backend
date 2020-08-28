const axios = require('axios');
require('dotenv').config();

const bookAPI = async () => {
  const BASEURL = `https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=${process.env.API_KEY}`

  const results = await axios.get(BASEURL)
  console.log(results)
  return results.data
}

module.exports = bookAPI;