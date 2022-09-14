const mongoose = require('mongoose')
const commentSchema = mongoose.Schema({
    name: String,
    text: String,
    newsId : {
        ref : "News",
        type: mongoose.SchemaTypes.ObjectId,
    }
})  
module.exports = mongoose.model('Comment', commentSchema)
