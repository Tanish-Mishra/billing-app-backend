const dbConnect = () => {
try {
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/vishnupriya');
console.log("Successfully! Connected to DB")
} catch (error) {
    console.log(error," Error When connecting to the Database!")
}

}

module.exports = dbConnect