// DEPENDENCIES
// ======================================================
const router = require("express").Router();
const bcrypt = require("bcrypt");
const db = require("../models/");


// ROUTES
// ======================================================
router.get("/readsessions", ({ session }, res) => {
  res.json(session)
})

router.post("/api/register", ({ body }, res) => {
  db.User.create(body)
    .then(dbUser => {
      res.json(dbUser);
    })
    .catch(err => {
      res.json(err);
    });
});

router.post("/api/login", (req, res) => {
  db.User.findOne({ username: req.body.username }, (error, user) => {
    if (!user) {
      return res.status(404).send("User does not exist")
    } else {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        req.session.user = {
          id: user._id,
          username: user.username,
          savedBooks: user.savedBooks
        }
        res.json(user)
      } else {
        res.status(401).send("Incorrect password");
      }
    }
  }).catch(err => {
    res.status(400).json(err)
  })
})


// EXPORT
// ======================================================
module.exports = router;