// DEPENDENCIES
// ======================================================
const db = require("../models");
const router = require("express").Router();
const bookAPI = require('../utils/bookAPI')


// ROUTES
// ======================================================
router.get("/search/:name", async (req, res) => {
  try {
    let results = await bookAPI(req.params.name)
    res.json(results)
  }
  catch {
    console.error(err)
    res.status(500).end()
  }
})

router.post("/save/:id", async ({ body }, res) => {
  try {
    let results = await db.Book.create(body)
    res.json(results)
  }
  catch {
    console.error(err)
    res.status(500).end()
  }
})

router.delete('/delete/:id', async (req, res) => {
  try {
    let results = await db.Book.findById({ _id: req.params.id })
    results.remove()
    res.json(results)
  }
  catch {
    console.error(err)
    res.status(422).end()
  }
})


// EXPORT
// ======================================================
module.exports = router;