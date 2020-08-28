const axios = require('axios');
require('dotenv').config();

const bookAPI ={

  nameSearch: async (name) => {
    const BASEURL = `https://www.googleapis.com/books/v1/volumes?q=${name}&key=${process.env.API_KEY}`
    
    try {
      const results = await axios.get(BASEURL)
      return results.data
    }
    catch (err) {
      console.error(err)
    }    
  },
  
  idSearch: async (id) => {
    const BASEURL = `https://www.googleapis.com/books/v1/volumes?q=${id}&key=${process.env.API_KEY}`
    
    try {
      const results = await axios.get(BASEURL)
      return results.data
    }
    catch (err) {
      console.error(err)
    }    
  }

}
module.exports = bookAPI;