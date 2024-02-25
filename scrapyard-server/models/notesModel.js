const mongoose = require('mongoose');

const notesSchema = new mongoose.Schema({
    title: String,
    note: String,
})

const Notes = mongoose.model('Notes', notesSchema);
module.exports = mongoose.model.Notes || Notes;