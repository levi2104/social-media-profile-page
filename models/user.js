const mongoose = require('mongoose')

mongoose.connect(`mongodb://localhost:27017/mini-project`)

const userSchema = mongoose.Schema({
  username: String,
  name: String,
  email: String,
  age: Number,
  password: String,
  profilepic: {
    type: String, 
    default: 'default.jpeg',
  },
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'post'
    }
  ],
})

module.exports = mongoose.model("user", userSchema);