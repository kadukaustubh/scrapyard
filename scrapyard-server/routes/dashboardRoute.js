const router = require('express').Router();
const Note = require('../models/notesModel');

router.route('/').get((request, response) => {
    Note.find()
        .then(notes => response.json(notes))
        .catch(error => response.status(400).json('Error: ' + error));
});

module.exports = router;