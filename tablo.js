const moongose = require("mongoose");
const Schema = moongose.Schema;

const TabloSchema = new Schema({
  name: String,
  surname: String,
  adress: String,
  phone: Number,
  order: String,
  priority: Number,
});
{
  timestamps: true;
}
module.exports = moongose.model("Tablo", TabloSchema);
