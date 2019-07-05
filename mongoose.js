const mongoose = require('mongoose');

console.log(process.env.MONGODB_URL)

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
}).then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err));