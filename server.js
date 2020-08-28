// DEPENDENCIES AND VARIABLES
// ===============================================
const express = require("express")
const mongoose = require("mongoose")
const app = express();
// const cors = require("cors")
const PORT = process.env.PORT || 3001;
require('dotenv').config()


// EXPRESS CONFIGURATION
// =====================================================
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// MONGOOSE
// =====================================================
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex:true
});


// CORS
// =====================================================
// LOCAL TESTING
// app.use(cors({
//     origin: ["http://localhost:3000"],
//     credentials: true
// }))

// DEPLOYED
// app.use(cors({
//   origin: ["https://pawsitivity-atack-api.herokuapp.com/"],
//   credentials: true
// }))


// ROUTES
// =====================================================
// API ROUTES
const bookController = require('./controllers/booksController');
app.use('/api/', bookController);

// HOME ROUTE
app.get("/", (req, res) => res.send("nothing to see here"))


// APP LISTEN
// =====================================================
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});