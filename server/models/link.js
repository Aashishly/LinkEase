const mongoose = require('mongoose');

const linkSchema = new mongoose.Schema({
    longLink: {
        type: String,
        require: true,
    },
    shortCode: {
        type: String,
        require: true,
        unique: true,
    },
});

const Link = mongoose.model('Link', linkSchema);

module.exports = Link;