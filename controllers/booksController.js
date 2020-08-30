// DEPENDENCIES
// ======================================================
const db = require("../models");
const router = require("express").Router();
const bookAPI = require('../utils/bookAPI')


// ROUTES
// ======================================================
router.get("/search/:id", async (req, res) => {
  try {
    let results = await db.Book.find(req.params.id)
    res.json(results)
  }
  catch (err) {
    console.error(err)
    res.status(500).end()
  }
})

router.get("/findall", async (req, res) => {
  try {
    let results = await db.Book.find()
    res.json(results)
  }
  catch (err) {
    console.error(err)
    res.status(500).end()
  }
})

router.post("/save/:id", async (req, res) => {
  try {
    let results = await bookAPI.idSearch(req.params.id)
    const bookObj = {
      title: results.items[0].volumeInfo.title,
      author: results.items[0].volumeInfo.authors[0],
      averageRating: results.items[0].volumeInfo.averageRating,
      synopsis: results.items[0].volumeInfo.description,
      selfLink: results.items[0].volumeInfo.canonicalVolumeLink,
      image: results.items[0].volumeInfo.imageLinks.thumbnail,
    }
    console.log (bookObj)
    await db.Book.create(bookObj)
    res.json(bookObj)
  }
  catch (err) {
    console.error(err)
    res.status(500).end()
  }
})

router.delete('/delete/:id', async (req, res) => {
  try {
    let results = await db.Book.findByIdAndDelete({ _id: req.params.id })
    res.json(results)
  }
  catch (err) {
    console.error(err)
    res.status(422).end()
  }
})


// EXPORT
// ======================================================
module.exports = router;