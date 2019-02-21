const mongoose = require('mongoose');
const mongoUrl = require('../config/config').mongoDbAtlasUrl;

const db = mongoose.connect(mongoUrl, { useNewUrlParser: true }, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to MongoDB!')
  }
})

module.exports = db;
