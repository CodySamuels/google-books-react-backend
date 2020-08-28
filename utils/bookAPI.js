const axios = require('axios');
require('dotenv').config();

const bookAPI = async (name) => {
  const BASEURL = `https://www.googleapis.com/books/v1/volumes?q=${name}&key=${process.env.API_KEY}`

  try {
    const results = await axios.get(BASEURL)
    return results.data
  }
  catch {
    console.error(err)
  }

}

module.exports = bookAPI;