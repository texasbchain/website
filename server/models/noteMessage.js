import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    note: String,
    link: String,
    createdAt: {
        type: Date,
        default: new Date()
    }

});

const NoteMessage = mongoose.model('NoteMessage', postSchema);

export default NoteMessage;