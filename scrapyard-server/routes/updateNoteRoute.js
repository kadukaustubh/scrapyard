const router = require('express').Router();
let Note = require('../models/notesModel');

router.route('/').post((request, response) => {
    const newNote = new Note({
        title: request.body.title,
        note: request.body.note,
    });

    newNote
        .save()
        .then((result) => {
            response.status(201).send({
                message: 'Note created successfully',
                result,
            });
        })
        .catch((error) => {
            response.status(500).send({
                message: 'Error creating note.',
                error,
            });
        })
});

router.route('/:id').get((request, response) => {
    Note.findById(request.params.id)
        .then(notes => response.json(notes))
        .catch(error => response.status(400).json('Error: ' + error));
});

router.route('/:id').post((request, response) => {
    const updateNote = {
        title: request.body.title,
        note: request.body.note,
    };

    Note
        .updateOne(
            { _id: request.params.id },
            { $set: updateNote }
        )
        .then((result) => {
            response.status(201).send({
                message: 'Note edited successfully',
                result,
            });
        })
        .catch((error) => {
            response.status(500).send({
                message: 'Error editing note.',
                error,
            });
        })
});

router.route('/:id').delete((request, response) => {

    Note
        .deleteOne(
            { _id: request.params.id },
        )
        .then((result) => {
            response.status(201).send({
                message: 'Note deleted successfully',
                result,
            });
        })
        .catch((error) => {
            response.status(500).send({
                message: 'Error deleting note.',
                error,
            });
        })
});

module.exports = router;