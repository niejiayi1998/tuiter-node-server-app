import mongoose from "mongoose";

const schema = mongoose.Schema({
    tuit: String,
    likes: {type: Number, default: 0},
    dislikes: {type: Number, default: 0},
    liked: Boolean,
    username: String,
    handle: String,
    image: String,
    time: String
}, {collection: "tuits"});

export default schema;