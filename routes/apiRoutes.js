const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

module.exports = app => {


    app.get('/api/notes', (req, res) => {
        fs.readFile('./db/db.json', 'utf-8', (err, data) => {
            if (err) throw err;
            const noteData = JSON.parse(data);


            return res.json(noteData);
        });

    });

    app.post('/api/notes', (req, res) => {
        fs.readFile('./db/db.json', (err, data) => {
            if (err) throw err;
            const newNote = JSON.parse(data);

            const noteDetails = {
                title: req.body.title,
                text: req.body.text,
                id: uuidv4()
            }

           
            newNote.push(noteDetails);

            fs.writeFile('./db/db.json', JSON.stringify(newNote), 'utf-8', (err) => {
                if (err) throw err;

                res.json(newNote);
            });

        });
    });


    app.delete('/api/notes/:id', (req, res) => {
        const noteId = req.params.id;
      

        fs.readFile('./db/db.json', (err, data) => {
            if (err) throw err;
            let newNote = JSON.parse(data);
            newNote = newNote.filter(note => {
                return noteId != note.id
            });
            
            fs.writeFile('./db/db.json', JSON.stringify(newNote), 'utf-8', (err) => {
                if (err) throw err;

                res.json(newNote);
            });
        });

    });



}

