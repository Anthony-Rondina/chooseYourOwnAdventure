//////////////////////////////////////////////
// Import Dependencies
//////////////////////////////////////////////
const mongoose = require("./connection");

////////////////////////////////////////////////
// Our Models
////////////////////////////////////////////////
// pull schema and model from mongoose using object destructuring
const { Schema, model } = mongoose; //creates schema and model and connects it to mongoose.schema and mongoose.model. called Destructuring

// make fruits schema
const cardSchema = new Schema({
    img: String,
    title: String,
    cardNumber: Number,
    nextCardNumber: Number,
    prevCardNumber: Number,
    challenge: Boolean,
    challengeDescription: String,
    cardType: String,
    death: Boolean,
    clue: Number,
    sound: String,
    description: String,
    chapter: Number,
    drawClue: Boolean
});

// make card model
const card = model("card", cardSchema);

///////////////////////////////////////////////////
// Export Model
///////////////////////////////////////////////////
module.exports = card;