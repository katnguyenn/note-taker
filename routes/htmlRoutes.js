const path = require('path');

module.exports = app => {


// Returns notes.html file
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});

// Returns index.html file
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});


};