var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/schedule', {
    useCreateIndex: true,
    useNewUrlParser: true
  });


var userSchema = new mongoose.Schema({
    username: String,
    email: String
}, {
    collection: 'usercollection'
});

module.exports = mongoose;