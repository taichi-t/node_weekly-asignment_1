const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create a model based on the schema
const productSchema = new Schema({
  title: {
    type: String,
    require: true
  },
  price: {
    type: Number,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  userId: {
    type: Schema.Types.ObjectId,
    //tell mongoose the model to relate to, use the name of the model
    ref: 'User',
    required: true
  }
});

//module connects the schema
module.exports = mongoose.model('Product', productSchema);