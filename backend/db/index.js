const mongoose = require("mongoose");
mongoose.set('strictQuery', false);

// Set up default mongoose connection
mongoose.connect('mongodb+srv://userdiggerbad:m8WORSZwCNvWxr7E@cluster0.9n7uyka.mongodb.net/?retryWrites=true&w=majority');


// Get the default connection
const db = mongoose.connection;

// Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));

module.exports = db