import mongoose from 'mongoose';
const Schema=mongoose.Schema

const categorySchema = new mongoose.Schema({
  categoryName: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  parentCategory: {
    type: String,
    required: true,
    trim: true
  }
});

const Category = new mongoose.model("Categry",categorySchema)

export default Category;

