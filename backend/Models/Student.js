const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
  name: {
    type: String,
    required : true,
  },
  email: {
    type: String,
    required : true,
    unique: true
  },
  rollno: {
    type: Number,
    unique: true
  }
}, {
    collection: 'students'
  })

module.exports = mongoose.model('Student', studentSchema)