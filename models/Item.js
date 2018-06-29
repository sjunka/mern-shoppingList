  // Mongoose import 
  const mongoose = require("mongoose");
  // Schema for mapping data
  const Schema = mongoose.Schema;

  // Create Schema
  const ItemSchema = new Schema({
      name:{
          type: String,
          required: true
      },
      date: {
          type: Date,
          default: Date.now
      }
  });

  module.exports = Item = mongoose.model("item", ItemSchema);