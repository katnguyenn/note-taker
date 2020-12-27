// Dependencies
const express = require('express');


// Set up Express App
const app = express();
const PORT = process.env.PORT || 8080;

// Set up for Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"))

// Routes Files
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Starts the server to begin listening
app.listen(PORT, () => {
    console.log("App listening on PORT:" + PORT);
})
