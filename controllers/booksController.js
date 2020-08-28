// DEPENDENCIES
// ======================================================
const db = require("../models");
const router = require("express").Router();
const bookAPI = require('../utils/bookAPI')

// BOOKS
// ======================================================
module.exports = {
  findAll: function ({ query }, res) {
    db.Book
      .find(query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findById: function ({ params: { id } }, res) {
    db.Book
      .findById(id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  create: function ({ body }, res) {
    db.Book
      .create(body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  update: function ({ params: { id }, body }, res) {
    db.Book
      .findOneAndUpdate({ _id: id }, body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  remove: function ({ params: { id } }, res) {
    db.Book
      .findById({ _id: id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }

};

router.get("/books/:name", async (req, res) => {
  try {
    let results = await bookAPI(req.params.name)
    res.json(results)
  }
  catch {
    console.error(err)
    res.status(500).end()
  }
})

// const router = require("express").Router();
// const booksController = require("../../controllers/booksController");

// // Matches with "/api/books"
// router.route("/")
//   .get(booksController.findAll)
//   .post(booksController.create);

// // Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);


// EXPORT
// ======================================================
module.exports = router;