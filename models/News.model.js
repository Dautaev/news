const mongoose = require("mongoose");

const NewSchema = mongoose.Schema({
    title: String,
    text: String,
    categoryId: {
        ref : "Category",
        type: mongoose.SchemaTypes.ObjectId,
    }
});

module.exports = mongoose.model('News', NewSchema);

