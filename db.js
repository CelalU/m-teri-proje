const mongoose = require("mongoose");

const connect = mongoose.connect("mongodb://localhost:27018/Tablo", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
module.exports = connect;
