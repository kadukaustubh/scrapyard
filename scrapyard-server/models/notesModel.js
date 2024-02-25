const mongoose = require('mongoose');

const notesSchema = new mongoose.Schema({
    userId: String,
    title: String,
    note: String,
})

const Notes = mongoose.model('Notes', notesSchema);
module.exports = mongoose.model.Notes || Notes;