const mongoose = require('mongoose');
let host = 'consync-mongodb';
let mongoUrl = `mongodb://${host}:27017/consync`;

mongoose.connect(mongoUrl, { useUnifiedTopology: true, useNewUrlParser: true }).catch((error) => {
  console.log('Error connecting to mongoDB', error);
})

var db = mongoose.connection;
db.once('open', function () {
  console.log('Database Connected');
});
