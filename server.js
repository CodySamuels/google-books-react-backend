// DEPENDENCIES AND VARIABLES
// ===============================================
const express = require("express")
const mongoose = require("mongoose")
const session = require("express-session")
const app = express();
const cors = require("cors")
const PORT = process.env.PORT || 3001;
require('dotenv').config()


// EXPRESS CONFIGURATION
// =====================================================
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// STATIC DIRECTORY
// =====================================================
app.use(express.static("public"));


// MONGOOSE
// =====================================================
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/books", {
    useNewUrlParser: true,
});


// CORS
// =====================================================
app.use(cors({
    origin: ["http://localhost:3000"],
    credentials: true
}))

// app.use(cors({
//   origin: ["https://pawsitivity-atack-api.herokuapp.com/"],
//   credentials: true
// }))

// SESSION
// =====================================================
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 7200000
    }
}))

// app.use(session({
//     secret: process.env.SESSION_SECRET,
//     resave: false,
//     saveUninitialized: false,
//     proxy: true,
//     cookie: {
//       maxAge: 2 * 60 * 60 * 1000,
//       sameSite: "none",
//       secure: true
//     }
//   }))


// ROUTES
// =====================================================
// API ROUTES
// app.use(require("./controllers/apiRoutes.js"));
// HTML ROUTES
// app.use(require("./controllers/htmlRoutes.js"));

app.get("/", (req, res) => {
    res.send("nothing to see here");
})


// =====================================================
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});