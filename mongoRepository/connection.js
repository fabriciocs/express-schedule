var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/schedule', {
    useCreateIndex: true,
    useNewUrlParser: true
  });


module.exports = mongoose;