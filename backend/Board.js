import mongoose from 'mongoose'

const Board = new mongoose.Schema({
    name: {type: String, required: true},
    boardItems: [{list: String, cards: [{cardName: String, isDone: Boolean}]}]
})

export default mongoose.model('Board', Board)