// DEPENDENCIES
// ======================================================
const db = require("../models");


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
