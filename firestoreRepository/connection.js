var admin = require('firebase-admin');

var serviceAccount = require('./schedule-bruno.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://schedule-bruno.firebaseio.com'
});
module.exports = admin;